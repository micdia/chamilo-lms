/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/font/STIX/fontdata-beta.js
 *  
 *  Patches the STIX font data to work with the beta version of
 *  the STIX fonts (as opposed to the release version, assuming
 *  there ever is one).
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2020 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (HTMLCSS,TEX) {
  
  HTMLCSS.FONTDATA.STIXversion = "1.0-beta";
  
  var GENERAL = "STIXGeneral",
      BOLD    = "STIXGeneral-bold",
      ITALIC  = "STIXGeneral-italic",
//    NONUNI  = "STIXNonUnicode",
      SIZE1   = "STIXSizeOneSym",
      SIZE2   = "STIXSizeTwoSym",
      SIZE3   = "STIXSizeThreeSym",
      SIZE4   = "STIXSizeFourSym",
      SIZE5   = "STIXSizeFiveSym";

  var REPLACE = function (name,data) {
    var FONT = HTMLCSS.FONTDATA.FONTS[name];
    for (var id in data) {if (data.hasOwnProperty(id)) {FONT[id] = data[id]}}
  };

  REPLACE(GENERAL,{
    0x300: [678,-507,0,109,333],       // COMBINING GRAVE ACCENT
    0x301: [678,-507,0,109,333],       // COMBINING ACUTE ACCENT
    0x302: [674,-507,0,94,405],        // COMBINING CIRCUMFLEX ACCENT
    0x303: [638,-532,0,85,415],        // COMBINING TILDE
    0x304: [601,-547,0,95,406],        // COMBINING MACRON
    0x305: [820,-770,0,0,500],         // COMBINING OVERLINE
    0x306: [664,-507,0,107,388],       // COMBINING BREVE
    0x307: [622,-523,0,200,299],       // COMBINING DOT ABOVE
    0x308: [622,-523,0,101,399],       // COMBINING DIAERESIS
    0x309: [751,-492,0,173,362],       // COMBINING HOOK ABOVE
    0x30A: [711,-512,0,151,350],       // COMBINING RING ABOVE
    0x30B: [678,-507,0,79,458],        // COMBINING DOUBLE ACUTE ACCENT
    0x30C: [674,-507,0,95,406],        // COMBINING CARON
    0x30D: [700,-500,0,230,285],       // COMBINING VERTICAL LINE ABOVE
    0x30E: [700,-500,0,154,347],       // COMBINING DOUBLE VERTICAL LINE ABOVE
    0x30F: [678,-507,0,79,458],        // COMBINING DOUBLE GRAVE ACCENT
    0x310: [767,-507,0,107,388],       // COMBINING CANDRABINDU
    0x311: [664,-507,0,107,388],       // COMBINING INVERTED BREVE
    0x312: [745,-502,0,181,320],       // COMBINING TURNED COMMA ABOVE
    0x313: [745,-502,0,181,320],       // COMBINING COMMA ABOVE
    0x314: [745,-502,0,181,320],       // COMBINING REVERSED COMMA ABOVE
    0x315: [745,-502,0,395,534],       // COMBINING COMMA ABOVE RIGHT
    0x316: [-53,224,0,109,333],        // COMBINING GRAVE ACCENT BELOW
    0x317: [-53,224,0,109,333],        // COMBINING ACUTE ACCENT BELOW
    0x318: [-53,283,0,83,270],         // COMBINING LEFT TACK BELOW
    0x319: [-53,283,0,83,270],         // COMBINING RIGHT TACK BELOW
    0x31A: [735,-531,0,100,400],       // COMBINING LEFT ANGLE ABOVE
    0x31B: [474,-345,0,436,531],       // COMBINING HORN
    0x31C: [-71,266,0,120,248],        // COMBINING LEFT HALF RING BELOW
    0x31D: [-53,240,0,135,365],        // COMBINING UP TACK BELOW
    0x31E: [-53,240,0,135,365],        // COMBINING DOWN TACK BELOW
    0x31F: [-53,250,0,154,346],        // COMBINING PLUS SIGN BELOW
    0x320: [-124,168,0,154,346],       // COMBINING MINUS SIGN BELOW
    0x321: [75,287,0,245,481],         // COMBINING PALATALIZED HOOK BELOW
    0x322: [75,287,0,426,662],         // COMBINING RETROFLEX HOOK BELOW
    0x323: [-118,217,0,200,299],       // COMBINING DOT BELOW
    0x324: [-119,218,0,101,399],       // COMBINING DIAERESIS BELOW
    0x325: [-69,268,0,151,350],        // COMBINING RING BELOW
    0x326: [-110,353,0,181,320],       // COMBINING COMMA BELOW
    0x327: [0,215,0,146,355],          // COMBINING CEDILLA
    0x328: [0,165,0,158,343],          // COMBINING OGONEK
    0x329: [-102,234,0,230,270],       // COMBINING VERTICAL LINE BELOW
    0x32A: [-98,235,0,95,407],         // COMBINING BRIDGE BELOW
    0x32B: [-110,227,0,100,405],       // COMBINING INVERTED DOUBLE ARCH BELOW
    0x32C: [-73,240,0,95,406],         // COMBINING CARON BELOW
    0x32D: [-73,240,0,95,406],         // COMBINING CIRCUMFLEX ACCENT BELOW
    0x32E: [-68,225,0,110,391],        // COMBINING BREVE BELOW
    0x32F: [-59,216,0,110,391],        // COMBINING INVERTED BREVE BELOW
    0x330: [-113,219,0,85,415],        // COMBINING TILDE BELOW
    0x331: [-141,195,0,95,406],        // COMBINING MACRON BELOW
    0x332: [-141,191,0,0,500],         // COMBINING LOW LINE
    0x333: [-141,300,0,0,500],         // COMBINING DOUBLE LOW LINE
    0x334: [320,-214,0,79,409],        // COMBINING TILDE OVERLAY
    0x335: [274,-230,0,96,402],        // COMBINING SHORT STROKE OVERLAY
    0x336: [274,-230,0,0,500],         // COMBINING LONG STROKE OVERLAY
    0x337: [580,74,0,100,439],         // COMBINING SHORT SOLIDUS OVERLAY
    0x338: [662,156,0,100,511],        // COMBINING LONG SOLIDUS OVERLAY
    0x339: [-71,266,0,120,248],        // COMBINING RIGHT HALF RING BELOW
    0x33A: [-53,190,0,95,407],         // COMBINING INVERTED BRIDGE BELOW
    0x33B: [-53,227,0,167,333],        // COMBINING SQUARE BELOW
    0x33C: [-65,189,0,100,401],        // COMBINING SEAGULL BELOW
    0x33D: [715,-525,0,154,345],       // COMBINING X ABOVE
    0x33E: [829,-499,0,197,303],       // COMBINING VERTICAL TILDE
    0x33F: [928,-770,0,0,500],         // COMBINING DOUBLE OVERLINE
    0x346: [681,-538,0,0,282],         // COMBINING BRIDGE ABOVE
    0x34C: [777,-532,0,94,424],        // COMBINING ALMOST EQUAL TO ABOVE
    0x359: [-65,367,0,123,393],        // COMBINING ASTERISK BELOW
    0x35C: [-76,233,0,107,775],        // COMBINING DOUBLE BREVE BELOW
    0x360: [633,-517,0,85,845],        // COMBINING DOUBLE TILDE
    0x361: [664,-507,0,107,775],       // COMBINING DOUBLE INVERTED BREVE
    0x362: [-65,270,0,85,835],         // COMBINING DOUBLE RIGHTWARDS ARROW BELOW

    0x20D0: [760,-627,0,27,463],       // COMBINING LEFT HARPOON ABOVE
    0x20D1: [760,-627,0,27,463],       // COMBINING RIGHT HARPOON ABOVE
    0x20D2: [662,156,0,238,288],       // COMBINING LONG VERTICAL LINE OVERLAY
    0x20D6: [760,-548,0,27,463],       // COMBINING LEFT ARROW ABOVE
    0x20D7: [760,-548,0,27,463],       // COMBINING RIGHT ARROW ABOVE
    0x20DB: [622,-523,0,18,515],       // COMBINING THREE DOTS ABOVE
    0x20DC: [622,-523,0,0,696],        // COMBINING FOUR DOTS ABOVE
    0x20DD: [725,221,1000,27,973],     // COMBINING ENCLOSING CIRCLE
    0x20DE: [780,180,0,0,960],         // COMBINING ENCLOSING SQUARE
    0x20DF: [843,341,0,0,1184],        // COMBINING ENCLOSING DIAMOND
    0x20E1: [760,-548,0,27,505],       // COMBINING LEFT RIGHT ARROW ABOVE
    0x20E4: [1023,155,1510,25,1485],   // COMBINING ENCLOSING UPWARD POINTING TRIANGLE
    0x20E5: [662,156,0,50,440],        // COMBINING REVERSE SOLIDUS OVERLAY
    0x20E6: [662,156,0,145,378],       // COMBINING DOUBLE VERTICAL STROKE OVERLAY
    0x20E7: [725,178,0,0,816],         // COMBINING ANNUITY SYMBOL
    0x20E8: [-119,218,0,18,515],       // COMBINING TRIPLE UNDERDOT
    0x20E9: [681,-538,0,0,533],        // COMBINING WIDE BRIDGE ABOVE
    0x20EA: [419,-87,0,-178,598],      // COMBINING LEFTWARDS ARROW OVERLAY
    0x20EB: [756,217,0,32,673],        // COMBINING LONG DOUBLE SOLIDUS OVERLAY
    0x20EC: [-119,252,0,27,463],       // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-119,252,0,27,463],       // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-40,252,0,27,463],        // COMBINING LEFT ARROW BELOW
    0x20EF: [-40,252,0,27,463],        // COMBINING RIGHT ARROW BELOW
    0x20F0: [819,-517,0,123,393]       // COMBINING ASTERISK ABOVE
  });
  
  REPLACE(BOLD,{
    0x300: [713,-528,0,141,379],       // COMBINING GRAVE ACCENT
    0x301: [713,-528,0,141,379],       // COMBINING ACUTE ACCENT
    0x302: [704,-528,0,92,429],        // COMBINING CIRCUMFLEX ACCENT
    0x303: [674,-547,0,78,443],        // COMBINING TILDE
    0x304: [637,-565,0,95,425],        // COMBINING MACRON
    0x305: [838,-788,0,10,510],        // COMBINING OVERLINE
    0x306: [691,-528,0,109,412],       // COMBINING BREVE
    0x307: [666,-537,0,196,325],       // COMBINING DOT ABOVE
    0x308: [666,-537,0,91,430],        // COMBINING DIAERESIS
    0x309: [751,-491,0,174,379],       // COMBINING HOOK ABOVE
    0x30A: [750,-537,0,154,367],       // COMBINING RING ABOVE
    0x30B: [713,-528,0,41,479],        // COMBINING DOUBLE ACUTE ACCENT
    0x30C: [704,-528,0,92,429],        // COMBINING CARON
    0x30D: [730,-530,0,233,299],       // COMBINING VERTICAL LINE ABOVE
    0x30E: [730,-530,0,152,368],       // COMBINING DOUBLE VERTICAL LINE ABOVE
    0x30F: [713,-528,0,41,479],        // COMBINING DOUBLE GRAVE ACCENT
    0x310: [828,-528,0,109,412],       // COMBINING CANDRABINDU
    0x311: [691,-528,0,109,412],       // COMBINING INVERTED BREVE
    0x312: [867,-532,0,168,352],       // COMBINING TURNED COMMA ABOVE
    0x313: [867,-532,0,168,352],       // COMBINING COMMA ABOVE
    0x314: [867,-532,0,168,352],       // COMBINING REVERSED COMMA ABOVE
    0x315: [867,-532,0,394,578],       // COMBINING COMMA ABOVE RIGHT
    0x316: [-70,255,0,141,379],        // COMBINING GRAVE ACCENT BELOW
    0x317: [-70,255,0,141,379],        // COMBINING ACUTE ACCENT BELOW
    0x318: [-58,288,0,85,287],         // COMBINING LEFT TACK BELOW
    0x319: [-58,288,0,232,434],        // COMBINING RIGHT TACK BELOW
    0x31A: [752,-531,0,100,417],       // COMBINING LEFT ANGLE ABOVE
    0x31B: [505,-352,0,448,576],       // COMBINING HORN
    0x31C: [-33,313,0,135,320],        // COMBINING LEFT HALF RING BELOW
    0x31D: [-70,272,0,145,375],        // COMBINING UP TACK BELOW
    0x31E: [-70,272,0,145,375],        // COMBINING DOWN TACK BELOW
    0x31F: [-70,287,0,154,366],        // COMBINING PLUS SIGN BELOW
    0x320: [-140,206,0,154,366],       // COMBINING MINUS SIGN BELOW
    0x321: [75,287,0,269,488],         // COMBINING PALATALIZED HOOK BELOW
    0x322: [75,287,0,416,635],         // COMBINING RETROFLEX HOOK BELOW
    0x323: [-109,238,0,196,325],       // COMBINING DOT BELOW
    0x324: [-109,238,0,91,430],        // COMBINING DIAERESIS BELOW
    0x325: [-66,279,0,154,367],        // COMBINING RING BELOW
    0x326: [-88,423,0,168,352],        // COMBINING COMMA BELOW
    0x327: [0,218,0,147,373],          // COMBINING CEDILLA
    0x328: [44,173,0,146,375],         // COMBINING OGONEK
    0x329: [-107,239,0,233,288],       // COMBINING VERTICAL LINE BELOW
    0x32A: [-86,260,0,85,417],         // COMBINING BRIDGE BELOW
    0x32B: [-104,242,0,90,415],        // COMBINING INVERTED DOUBLE ARCH BELOW
    0x32C: [-83,259,0,92,429],         // COMBINING CARON BELOW
    0x32D: [-85,261,0,92,429],         // COMBINING CIRCUMFLEX ACCENT BELOW
    0x32E: [-78,241,0,109,412],        // COMBINING BREVE BELOW
    0x32F: [-78,241,0,109,412],        // COMBINING INVERTED BREVE BELOW
    0x330: [-108,235,0,78,443],        // COMBINING TILDE BELOW
    0x331: [-137,209,0,95,425],        // COMBINING MACRON BELOW
    0x332: [-137,187,0,10,510],        // COMBINING LOW LINE
    0x333: [-137,287,0,10,510],        // COMBINING DOUBLE LOW LINE
    0x334: [316,-189,0,78,443],        // COMBINING TILDE OVERLAY
    0x335: [282,-224,0,96,402],        // COMBINING SHORT STROKE OVERLAY
    0x336: [282,-224,0,0,500],         // COMBINING LONG STROKE OVERLAY
    0x337: [580,74,0,100,467],         // COMBINING SHORT SOLIDUS OVERLAY
    0x338: [662,156,0,100,541],        // COMBINING LONG SOLIDUS OVERLAY
    0x339: [-33,313,0,135,320],        // COMBINING RIGHT HALF RING BELOW
    0x33A: [-71,245,0,85,417],         // COMBINING INVERTED BRIDGE BELOW
    0x33B: [-70,264,0,157,343],        // COMBINING SQUARE BELOW
    0x33C: [-89,234,0,100,401],        // COMBINING SEAGULL BELOW
    0x33D: [719,-520,0,160,360],       // COMBINING X ABOVE
    0x33E: [881,-516,0,196,323],       // COMBINING VERTICAL TILDE
    0x33F: [938,-788,0,10,510],        // COMBINING DOUBLE OVERLINE
    0x346: [717,-544,0,0,303],         // COMBINING BRIDGE ABOVE
    0x34C: [837,-547,333,-16,349],     // COMBINING ALMOST EQUAL TO ABOVE
    0x359: [-66,368,0,151,421],        // COMBINING ASTERISK BELOW
    0x35C: [-79,242,0,109,810],        // COMBINING DOUBLE BREVE BELOW
    0x360: [674,-529,0,78,908],        // COMBINING DOUBLE TILDE
    0x361: [691,-534,0,107,775],       // COMBINING DOUBLE INVERTED BREVE
    0x362: [-54,293,0,78,887],         // COMBINING DOUBLE RIGHTWARDS ARROW BELOW

    0x20D0: [846,-637,0,40,524],       // COMBINING LEFT HARPOON ABOVE
    0x20D1: [846,-637,0,40,524],       // COMBINING RIGHT HARPOON ABOVE
    0x20D2: [662,156,0,232,307],       // COMBINING LONG VERTICAL LINE OVERLAY
    0x20D6: [846,-508,0,40,524],       // COMBINING LEFT ARROW ABOVE
    0x20D7: [846,-508,0,40,524],       // COMBINING RIGHT ARROW ABOVE
    0x20DB: [666,-537,0,-2,547],       // COMBINING THREE DOTS ABOVE
    0x20DC: [666,-537,0,-2,757],       // COMBINING FOUR DOTS ABOVE
    0x20DD: [760,254,1073,32,1041],    // COMBINING ENCLOSING CIRCLE
    0x20E1: [846,-508,0,35,629],       // COMBINING LEFT RIGHT ARROW ABOVE
    0x20E4: [1055,169,1581,32,1549],   // COMBINING ENCLOSING UPWARD POINTING TRIANGLE
    0x20E5: [662,155,0,40,522],        // COMBINING REVERSE SOLIDUS OVERLAY
    0x20E6: [662,156,0,130,409],       // COMBINING DOUBLE VERTICAL STROKE OVERLAY
    0x20E7: [760,172,0,67,910],        // COMBINING ANNUITY SYMBOL
    0x20E8: [-109,238,0,-2,547],       // COMBINING TRIPLE UNDERDOT
    0x20E9: [717,-544,0,0,564],        // COMBINING WIDE BRIDGE ABOVE
    0x20EA: [441,-65,1073,-178,658],   // COMBINING LEFTWARDS ARROW OVERLAY
    0x20EB: [775,235,0,25,738],        // COMBINING LONG DOUBLE SOLIDUS OVERLAY
    0x20EC: [-166,375,0,40,524],       // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-166,375,0,40,524],       // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-35,373,0,40,524],        // COMBINING LEFT ARROW BELOW
    0x20EF: [-35,373,0,40,524],        // COMBINING RIGHT ARROW BELOW
    0x20F0: [845,-543,0,125,395]       // COMBINING ASTERISK ABOVE
  });
  
  REPLACE(ITALIC,{
    0x20D0: [760,-627,0,27,463],       // COMBINING LEFT HARPOON ABOVE
    0x20D1: [760,-627,0,54,490],       // COMBINING RIGHT HARPOON ABOVE
    0x20D2: [662,156,266,100,166],     // COMBINING LONG VERTICAL LINE OVERLAY
    0x20D6: [760,-548,0,27,463],       // COMBINING LEFT ARROW ABOVE
    0x20D7: [760,-548,0,27,463],       // COMBINING RIGHT ARROW ABOVE
    0x20DB: [622,-523,0,27,524],       // COMBINING THREE DOTS ABOVE
    0x20DC: [622,-523,0,18,714],       // COMBINING FOUR DOTS ABOVE
    0x20DD: [725,221,1000,27,973],     // COMBINING ENCLOSING CIRCLE
    0x20E1: [760,-548,0,27,505],       // COMBINING LEFT RIGHT ARROW ABOVE
    0x20E4: [1023,155,1510,25,1485],   // COMBINING ENCLOSING UPWARD POINTING TRIANGLE
    0x20E5: [662,156,506,50,456],      // COMBINING REVERSE SOLIDUS OVERLAY
    0x20E6: [662,156,523,129,394],     // COMBINING DOUBLE VERTICAL STROKE OVERLAY
    0x20E7: [725,178,926,55,871],      // COMBINING ANNUITY SYMBOL
    0x20E8: [-119,218,0,18,515],       // COMBINING TRIPLE UNDERDOT
    0x20E9: [681,-538,0,2,535],        // COMBINING WIDE BRIDGE ABOVE
    0x20EA: [419,-87,1000,27,973],     // COMBINING LEFTWARDS ARROW OVERLAY
    0x20EC: [681,-548,0,27,463],       // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [681,-548,0,27,463],       // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-40,252,490,27,463],      // COMBINING LEFT ARROW BELOW
    0x20EF: [-40,252,490,27,463]       // COMBINING RIGHT ARROW BELOW
  });
  
  REPLACE(SIZE1,{
    0x302: [767,-554,0,0,560],         // COMBINING CIRCUMFLEX ACCENT
    0x303: [750,-598,0,-2,558],        // COMBINING TILDE
    0x305: [820,-770,0,0,1000],        // COMBINING OVERLINE
    0x30C: [767,-554,0,0,560],         // COMBINING CARON
    0x330: [-117,269,0,-2,558],        // COMBINING TILDE BELOW
    0x332: [-127,177,0,0,1000],        // COMBINING LOW LINE
    0x338: [532,21,0,0,563],           // COMBINING LONG SOLIDUS OVERLAY
    0x20D0: [749,-584,0,28,899],       // COMBINING LEFT HARPOON ABOVE
    0x20D1: [749,-584,0,27,898],       // COMBINING RIGHT HARPOON ABOVE
    0x20D6: [735,-482,0,27,899],       // COMBINING LEFT ARROW ABOVE
    0x20D7: [736,-482,0,27,899],       // COMBINING RIGHT ARROW ABOVE
    0x20EC: [-123,288,0,27,898],       // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-123,288,0,28,899],       // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-26,279,0,27,899],        // COMBINING LEFT ARROW BELOW
    0x20EF: [-25,279,0,27,899]         // COMBINING RIGHT ARROW BELOW
  });
  
  REPLACE(SIZE2,{
    0x302: [777,-564,0,0,979],         // COMBINING CIRCUMFLEX ACCENT
    0x303: [760,-608,0,-2,977],        // COMBINING TILDE
    0x305: [820,-770,0,0,1500],        // COMBINING OVERLINE
    0x30C: [777,-564,0,0,979],         // COMBINING CARON
    0x330: [-117,269,0,-2,977],        // COMBINING TILDE BELOW
    0x332: [-127,177,0,0,1000],        // COMBINING LOW LINE
    0x338: [662,0,0,0,714],            // COMBINING LONG SOLIDUS OVERLAY
    0x20D0: [749,-584,0,27,1335],      // COMBINING LEFT HARPOON ABOVE
    0x20D1: [749,-584,0,27,1335],      // COMBINING RIGHT HARPOON ABOVE
    0x20D6: [735,-482,0,27,1335],      // COMBINING LEFT ARROW ABOVE
    0x20D7: [735,-482,0,27,1335],      // COMBINING RIGHT ARROW ABOVE
    0x20EC: [-123,288,0,27,1335],      // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-123,288,0,27,1335],      // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-26,279,0,27,1335],       // COMBINING LEFT ARROW BELOW
    0x20EF: [-26,279,0,27,1335]        // COMBINING RIGHT ARROW BELOW
  });
  
  REPLACE(SIZE3,{
    0x302: [777,-564,0,0,1460],        // COMBINING CIRCUMFLEX ACCENT
    0x303: [774,-608,0,-2,1458],       // COMBINING TILDE
    0x305: [820,-770,0,0,2000],        // COMBINING OVERLINE
    0x30C: [777,-564,0,0,1460],        // COMBINING CARON
    0x330: [-117,283,0,-2,1458],       // COMBINING TILDE BELOW
    0x332: [-127,177,0,0,2000],        // COMBINING LOW LINE
    0x338: [662,156,0,137,548],        // COMBINING LONG SOLIDUS OVERLAY
    0x20D0: [749,-584,0,27,1771],      // COMBINING LEFT HARPOON ABOVE
    0x20D1: [749,-584,0,27,1771],      // COMBINING RIGHT HARPOON ABOVE
    0x20D6: [735,-482,0,27,1771],      // COMBINING LEFT ARROW ABOVE
    0x20D7: [735,-482,0,27,1771],      // COMBINING RIGHT ARROW ABOVE
    0x20EC: [-123,288,0,27,1771],      // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-123,288,0,27,1771],      // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-26,279,0,27,1771],       // COMBINING LEFT ARROW BELOW
    0x20EF: [-26,279,0,27,1771]        // COMBINING RIGHT ARROW BELOW
  });
  
  REPLACE(SIZE4,{
    0x302: [796,-573,0,0,1886],        // COMBINING CIRCUMFLEX ACCENT
    0x303: [771,-608,0,0,1886],        // COMBINING TILDE
    0x305: [820,-770,0,0,2500],        // COMBINING OVERLINE
    0x30C: [796,-573,0,0,1886],        // COMBINING CARON
    0x330: [-117,280,0,0,1886],        // COMBINING TILDE BELOW
    0x332: [-127,177,0,0,2500],        // COMBINING LOW LINE
    0x338: [731,228,0,170,491],        // COMBINING LONG SOLIDUS OVERLAY
    0x20D0: [749,-584,0,27,2207],      // COMBINING LEFT HARPOON ABOVE
    0x20D1: [749,-584,0,27,2207],      // COMBINING RIGHT HARPOON ABOVE
    0x20D6: [735,-482,0,27,2207],      // COMBINING LEFT ARROW ABOVE
    0x20D7: [735,-482,0,27,2207],      // COMBINING RIGHT ARROW ABOVE
    0x20EC: [-123,288,0,27,2207],      // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-123,288,0,27,2207],      // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-26,279,0,27,2207],       // COMBINING LEFT ARROW BELOW
    0x20EF: [-26,279,0,27,2207]        // COMBINING RIGHT ARROW BELOW
  });
  
  REPLACE(SIZE5,{
    0x302: [816,-572,0,0,2328],        // COMBINING CIRCUMFLEX ACCENT
    0x303: [780,-617,0,0,2328],        // COMBINING TILDE
    0x305: [820,-770,0,0,3000],        // COMBINING OVERLINE
    0x30C: [816,-572,0,0,2328],        // COMBINING CARON
    0x330: [-117,280,0,0,2328],        // COMBINING TILDE BELOW
    0x332: [-127,177,0,0,3000],        // COMBINING LOW LINE
    0x338: [960,454,0,119,557],        // COMBINING LONG SOLIDUS OVERLAY
    0x20D0: [749,-584,0,0,3000],       // COMBINING LEFT HARPOON ABOVE
    0x20D1: [749,-584,0,0,3000],       // COMBINING RIGHT HARPOON ABOVE
    0x20D6: [735,-482,0,0,3000],       // COMBINING LEFT ARROW ABOVE
    0x20D7: [735,-482,0,0,3000],       // COMBINING RIGHT ARROW ABOVE
    0x20EC: [-123,288,0,0,3000],       // COMBINING RIGHTWARDS HARPOON WITH BARB DOWNWARDS
    0x20ED: [-123,288,0,0,3000],       // COMBINING LEFTWARDS HARPOON WITH BARB DOWNWARDS
    0x20EE: [-26,279,0,0,3000],        // COMBINING LEFT ARROW BELOW
    0x20EF: [-26,279,0,0,3000]         // COMBINING RIGHT ARROW BELOW
  });
  
  MathJax.Hub.Register.LoadHook(HTMLCSS.fontDir+"/General/BoldItalic/CombDiactForSymbols.js",
    function () {
      REPLACE("STIXGeneral-bold-italic",{
        0x20DD: [760,254,1073,32,1041]     // COMBINING ENCLOSING CIRCLE
      });
    }
  );
  
  var SIZES = [SIZE1,SIZE2,SIZE3,SIZE4];
  var CHARS = [0x2C6,0x2C7,0x2DC,0x2E7];
  
  for (var i = 0; i < SIZES.length; i++) {
    for (var j = 0; j < CHARS.length; j++) {
      delete HTMLCSS.FONTDATA.FONTS[SIZES[i]][j];
    }
  }
  
  
  MathJax.Ajax.loadComplete(HTMLCSS.fontDir+"/fontdata-beta.js");

})(MathJax.OutputJax["HTML-CSS"],MathJax.InputJax.TeX);

