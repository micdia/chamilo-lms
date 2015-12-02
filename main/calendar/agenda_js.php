<?php
/* For licensing terms, see /license.txt */

/**
 * @package chamilo.calendar
 */

use ChamiloSession as Session;
use Chamilo\CoreBundle\Framework\Container;

$tpl = Container::getTwig();

// use anonymous mode when accessing this course tool
$use_anonymous = true;

// Calendar type
$type = isset($_REQUEST['type']) && in_array($_REQUEST['type'], array('personal', 'course', 'admin', 'platform')) ? $_REQUEST['type'] : 'personal';
$userId = isset($_REQUEST['user_id']) ? $_REQUEST['user_id'] : null;

if ($type == 'personal') {
    $cidReset = true; // fixes #5162
}

$current_course_tool = TOOL_CALENDAR_EVENT;
$this_section = SECTION_MYAGENDA;

//$htmlHeadXtra[] = api_get_js('qtip2/jquery.qtip.min.js');
$htmlHeadXtra[] = api_get_theme_asset('fullcalendar/dist/fullcalendar.min.js');
$htmlHeadXtra[] = api_get_theme_asset('fullcalendar/dist/gcal.js');
$htmlHeadXtra[] = api_get_theme_asset_css(
    'fullcalendar/dist/fullcalendar.min.css'
);
//$htmlHeadXtra[] = api_get_css(api_get_path(WEB_LIBRARY_PATH).'javascript/qtip2/jquery.qtip.min.css');

if (api_is_platform_admin() && ($type == 'admin' || $type == 'platform')) {
    $type = 'admin';
}

if (isset($_REQUEST['cidReq']) && !empty($_REQUEST['cidReq'])) {
    if ($_REQUEST['cidReq'] == -1) {
        // When is out of the course tool (e.g My agenda)
        header('Location: ' . api_get_self());
        exit;
    } else {
        $type = 'course';
        $this_section = SECTION_COURSES;
    }
}

api_protect_course_group(GroupManager::GROUP_TOOL_CALENDAR);

$agenda = new Agenda();
$agenda->type = $type;

$is_group_tutor = false;
$session_id = api_get_session_id();
$group_id = api_get_group_id();

if (!empty($group_id)) {
    $is_group_tutor = GroupManager::is_tutor_of_group(api_get_user_id(), $group_id);
    $group_properties = GroupManager::get_group_properties($group_id);
    $interbreadcrumb[] = array(
        "url" => api_get_path(WEB_CODE_PATH)."group/group.php?".api_get_cidreq(),
        "name" => get_lang('Groups')
    );
    $interbreadcrumb[] = array(
        "url" => api_get_path(WEB_CODE_PATH)."group/group_space.php?".api_get_cidreq(),
        "name" => get_lang('GroupSpace').' '.$group_properties['name']
    );
}

$tpl->addGlobal('use_google_calendar', 0);

$can_add_events = 0;

switch ($type) {
    case 'admin':
        api_protect_admin_script();
        $this_section = SECTION_PLATFORM_ADMIN;
        if (api_is_platform_admin()) {
            $can_add_events = 1;
        }
        break;
    case 'course':
        api_protect_course_script(true);
        $this_section = SECTION_COURSES;
        if (api_is_allowed_to_edit()) {
            $can_add_events = 1;
        }
        if (!empty($group_id)) {
            if ($is_group_tutor) {
                $can_add_events = 1;
            }
        }
        break;
    case 'personal':
        if (api_is_anonymous()) {
            api_not_allowed(true);
        }
        $extra_field_data = UserManager::get_extra_user_data_by_field(
            api_get_user_id(),
            'google_calendar_url'
        );
        if (!empty($extra_field_data) &&
            isset($extra_field_data['google_calendar_url']) &&
            !empty($extra_field_data['google_calendar_url'])
        ) {
            $tpl->addGlobal('use_google_calendar', 1);
            $tpl->addGlobal('google_calendar_url', $extra_field_data['google_calendar_url']);
        }
        $this_section = SECTION_MYAGENDA;
        if (!api_is_anonymous()) {
            $can_add_events = 1;
        }
        break;
}


//Setting translations
$day_short = api_get_week_days_short();
$days = api_get_week_days_long();
$months = api_get_months_long();
$months_short = api_get_months_short();

//Setting calendar translations
$tpl->addGlobal('month_names', json_encode($months));
$tpl->addGlobal('month_names_short', json_encode($months_short));
$tpl->addGlobal('day_names', json_encode($days));
$tpl->addGlobal('day_names_short', json_encode($day_short));
$tpl->addGlobal('button_text',
    json_encode(array(
        'today' => get_lang('Today'),
        'month' => get_lang('Month'),
        'week' => get_lang('Week'),
        'day' => get_lang('Day')
    ))
);

//see http://docs.jquery.com/UI/Datepicker/$.datepicker.formatDate

$tpl->addGlobal('js_format_date', 'll');
$region_value = api_get_language_isocode();

if ($region_value == 'en') {
    $region_value = 'en-GB';
}
$tpl->addGlobal('region_value', $region_value);

$export_icon = api_get_path(WEB_IMG_PATH).'img/export.png';
$export_icon_low = api_get_path(WEB_IMG_PATH).'img/export_low_fade.png';
$export_icon_high = api_get_path(WEB_IMG_PATH).'img/export_high_fade.png';

$tpl->addGlobal(
    'export_ical_confidential_icon',
    Display::return_icon($export_icon_high, get_lang('ExportiCalConfidential'))
);

$actions = $agenda->displayActions('calendar', $userId);

$tpl->addGlobal('toolbar', $actions);

// Calendar Type : course, admin, personal
$tpl->addGlobal('type', $type);

$type_event_class = $type.'_event';
$type_label = get_lang(ucfirst($type).'Calendar');
if ($type == 'course' && !empty($group_id)) {
    $type_event_class = 'group_event';
    $type_label = get_lang('GroupCalendar');
}

$defaultView = api_get_setting('agenda.default_calendar_view');

if (empty($defaultView)) {
    $defaultView = 'month';
}

/* month, basicWeek, agendaWeek, agendaDay */

$tpl->addGlobal('default_view', $defaultView);

if ($type == 'course' && !empty($session_id)) {
    $type_event_class = 'session_event';
    $type_label = get_lang('SessionCalendar');
}

$tpl->addGlobal('type_label', $type_label);
$tpl->addGlobal('type_event_class', $type_event_class);

// Current user can add event?
$tpl->addGlobal('can_add_events', $can_add_events);

// Setting AJAX caller
if (!empty($userId)) {
    $agenda_ajax_url = api_get_path(WEB_AJAX_PATH).'agenda.ajax.php?user_id='.$userId.'&type='.$type;
} else {
    $agenda_ajax_url = api_get_path(WEB_AJAX_PATH).'agenda.ajax.php?type='.$type;
}

if (isset($_GET['session_id'])) {
    $agenda_ajax_url .= '&session_id='.intval($_GET['session_id']);
}

if ($type == 'course') {
    $agenda_ajax_url .= '&'.api_get_cidreq();
}


$tpl->addGlobal('web_agenda_ajax_url', $agenda_ajax_url);
$course_code = api_get_course_id();

$form = new FormValidator(
    'form',
    'get',
    null,
    null,
    array('id' => 'add_event_form')
);


$form->addElement('html', '<span id="calendar_course_info"></span><div id="visible_to_input">');

$sendTo = $agenda->parseAgendaFilter($userId);
$addOnlyItemsInSendTo = true;

if ($sendTo['everyone']) {
    $addOnlyItemsInSendTo = false;
}

$agenda->showToForm($form, $sendTo, array(), $addOnlyItemsInSendTo);
$form->addElement('html', '</div>');

$form->addElement('html', '<div id="visible_to_read_only" style="display: none">');
$form->addElement('label', get_lang('To'), '<div id="visible_to_read_only_users"></div>');
$form->addElement('html', '</div>');

$form->addElement('label', get_lang('Agenda'), '<div id ="color_calendar"></div>');
$form->addElement('label', get_lang('Date'), '<span id="start_date"></span><span id="end_date"></span>');
$form->addElement('text', 'title', get_lang('Title'), array('id' => 'title'));
$form->addHtmlEditor(
    'content',
    get_lang('Description'),
    false,
    false,
    [
        'ToolbarSet' => 'TestProposedAnswer',
        'Height' => '120'
    ]
);

if ($agenda->type == 'course') {
    $form->addElement('html', '<div id="add_as_announcement_div" style="display: none">');
    $form->addElement('checkbox', 'add_as_annonuncement', null, get_lang('AddAsAnnouncement'));
    $form->addElement('html', '</div>');
    $form->addElement('textarea', 'comment', get_lang('Comment'), array('id' => 'comment'));
}

$tpl->addGlobal('form_add', $form->returnForm());

$message = Session::read('message');
$tpl->addGlobal('message', $message);

Session::erase('message');

//$tpl->addGlobal('content', $content);

echo $tpl->render('ChamiloCoreBundle:Calendar:month.html.twig');
