import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';

import exporting from 'highcharts/modules/exporting';
// import offline_exporting from 'highcharts/modules/offline-exporting';
exporting(Highcharts);
// offline_exporting(Highcharts);

const CategorizedAreas = () => {
  const topology = {
    "type": "Topology",
    "objects": {
      "default": {
        "type": "GeometryCollection",
        "geometries": [
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [0]
              ],
              [
                [1]
              ],
              [
                [2]
              ],
              [
                [3]
              ],
              [
                [4]
              ],
              [
                [5]
              ],
              [
                [6]
              ],
              [
                [7]
              ],
              [
                [8]
              ],
              [
                [9]
              ],
              [
                [10]
              ],
              [
                [11]
              ],
              [
                [12, 13]
              ],
              [
                [14]
              ]
            ],
            "id": "DK",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "dk",
              "hc-a2": "DK",
              "name": "Denmark",
              "labelrank": "4",
              "country-abbrev": "Den.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "DNK",
              "iso-a2": "DK",
              "woe-id": "23424796",
              "continent": "Europe",
              "hc-middle-lon": 9.434,
              "hc-middle-lat": 56.381
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [15]
              ],
              [
                [16]
              ],
              [
                [17]
              ],
              [
                [18]
              ],
              [
                [19]
              ],
              [
                [20]
              ],
              [
                [21]
              ],
              [
                [22]
              ]
            ],
            "id": "FO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "fo",
              "hc-a2": "FO",
              "name": "Faroe Islands",
              "labelrank": "6",
              "country-abbrev": "Faeroe Is.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "FRO",
              "iso-a2": "FO",
              "woe-id": "23424816",
              "continent": "Europe",
              "hc-middle-lon": -6.84,
              "hc-middle-lat": 62.212
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [23]
              ],
              [
                [24]
              ],
              [
                [25]
              ],
              [
                [26]
              ],
              [
                [27]
              ],
              [
                [28]
              ],
              [
                [29]
              ],
              [
                [30]
              ],
              [
                [31]
              ],
              [
                [32]
              ],
              [
                [33]
              ],
              [
                [34]
              ],
              [
                [35]
              ],
              [
                [36]
              ],
              [
                [37]
              ],
              [
                [38, 39, 40]
              ],
              [
                [41, 42, 43, 44, 45]
              ]
            ],
            "id": "HR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "hr",
              "hc-a2": "HR",
              "name": "Croatia",
              "labelrank": "6",
              "country-abbrev": "Cro.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "HRV",
              "iso-a2": "HR",
              "woe-id": "23424843",
              "continent": "Europe",
              "hc-middle-lon": 14.009,
              "hc-middle-lat": 45.094
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [46]
              ],
              [
                [47]
              ],
              [
                [48]
              ],
              [
                [49]
              ],
              [
                [50]
              ],
              [
                [51]
              ],
              [
                [52, 53]
              ],
              [
                [54, 55, 56],
                [57]
              ]
            ],
            "id": "NL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "nl",
              "hc-a2": "NL",
              "name": "Netherlands",
              "labelrank": "5",
              "country-abbrev": "Neth.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "NLD",
              "iso-a2": "NL",
              "woe-id": "-90",
              "continent": "Europe",
              "hc-middle-lon": 4.643,
              "hc-middle-lat": 51.825
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [58]
              ],
              [
                [59]
              ],
              [
                [60]
              ],
              [
                [61, 62, 63, 64, 65, 66, 67, 68, 69, 70]
              ],
              [
                [71]
              ]
            ],
            "id": "EE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ee",
              "hc-a2": "EE",
              "name": "Estonia",
              "labelrank": "6",
              "country-abbrev": "Est.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "EST",
              "iso-a2": "EE",
              "woe-id": "23424805",
              "continent": "Europe",
              "hc-middle-lon": 25.656,
              "hc-middle-lat": 58.621
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [72, 73, 74, 75, 76, 77, 78, 79]
            ],
            "id": "BG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bg",
              "hc-a2": "BG",
              "name": "Bulgaria",
              "labelrank": "4",
              "country-abbrev": "Bulg.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "BGR",
              "iso-a2": "BG",
              "woe-id": "23424771",
              "continent": "Europe",
              "hc-middle-lon": 25.438,
              "hc-middle-lat": 42.727
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [80]
              ],
              [
                [81]
              ],
              [
                [82]
              ],
              [
                [83]
              ],
              [
                [84]
              ],
              [
                [85]
              ],
              [
                [86, 87, 88, 89, 90, 91, 92, 93]
              ]
            ],
            "id": "ES",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "es",
              "hc-a2": "ES",
              "name": "Spain",
              "labelrank": "2",
              "country-abbrev": "Sp.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "ESP",
              "iso-a2": "ES",
              "woe-id": "23424950",
              "continent": "Europe",
              "hc-middle-lon": -3.493,
              "hc-middle-lat": 40.03
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [94]
              ],
              [
                [95]
              ],
              [
                [96]
              ],
              [
                [97]
              ],
              [
                [98]
              ],
              [
                [99]
              ],
              [
                [100]
              ],
              [
                [101, 102, 103, 104, 105],
                [106],
                [107]
              ],
              [
                [108]
              ],
              [
                [109]
              ]
            ],
            "id": "IT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "it",
              "hc-a2": "IT",
              "name": "Italy",
              "labelrank": "2",
              "country-abbrev": "Italy",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "ITA",
              "iso-a2": "IT",
              "woe-id": "23424853",
              "continent": "Europe",
              "hc-middle-lon": 12.123,
              "hc-middle-lat": 43.117
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-107]
            ],
            "id": "SM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sm",
              "hc-a2": "SM",
              "name": "San Marino",
              "labelrank": "6",
              "country-abbrev": "S.M.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "SMR",
              "iso-a2": "SM",
              "woe-id": "23424947",
              "continent": "Europe",
              "hc-middle-lon": 12.449,
              "hc-middle-lat": 43.948
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [107]
            ],
            "id": "VA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "va",
              "hc-a2": "VA",
              "name": "Vatican",
              "labelrank": "6",
              "country-abbrev": "Vat.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "VAT",
              "iso-a2": "VA",
              "woe-id": "23424986",
              "continent": "Europe",
              "hc-middle-lon": 12.453,
              "hc-middle-lat": 41.904
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [110]
              ],
              [
                [111]
              ],
              [
                [-74, 112, 113]
              ],
              [
                [114]
              ]
            ],
            "id": "TR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tr",
              "hc-a2": "TR",
              "name": "Turkey",
              "labelrank": "2",
              "country-abbrev": "Tur.",
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "TUR",
              "iso-a2": "TR",
              "woe-id": "23424969",
              "continent": "Asia",
              "hc-middle-lon": 32.986,
              "hc-middle-lat": 38.916
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [115]
              ],
              [
                [116]
              ]
            ],
            "id": "MT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mt",
              "hc-a2": "MT",
              "name": "Malta",
              "labelrank": "5",
              "country-abbrev": "Malta",
              "subregion": "Southern Europe",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "MLT",
              "iso-a2": "MT",
              "woe-id": "23424897",
              "continent": "Europe",
              "hc-middle-lon": 14.442,
              "hc-middle-lat": 35.901
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [117]
              ],
              [
                [118]
              ],
              [
                [119]
              ],
              [
                [120]
              ],
              [
                [121, 122, -103, 123, 124, 125, -92, 126, -90, 127, 128, 129, 130, 131, 132],
                [-86]
              ],
              [
                [133]
              ]
            ],
            "id": "FR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "fr",
              "hc-a2": "FR",
              "name": "France",
              "labelrank": "2",
              "country-abbrev": "Fr.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "FRA",
              "iso-a2": "FR",
              "woe-id": "-90",
              "continent": "Europe",
              "hc-middle-lon": 2.295,
              "hc-middle-lat": 46.346
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [134]
              ],
              [
                [135]
              ],
              [
                [136]
              ],
              [
                [137]
              ],
              [
                [138]
              ],
              [
                [139]
              ],
              [
                [140]
              ],
              [
                [141]
              ],
              [
                [142]
              ],
              [
                [143]
              ],
              [
                [144]
              ],
              [
                [145]
              ],
              [
                [146]
              ],
              [
                [147]
              ],
              [
                [148]
              ],
              [
                [149]
              ],
              [
                [150]
              ],
              [
                [151]
              ],
              [
                [152]
              ],
              [
                [153]
              ],
              [
                [154]
              ],
              [
                [155]
              ],
              [
                [156]
              ],
              [
                [157]
              ],
              [
                [158]
              ],
              [
                [159]
              ],
              [
                [160]
              ],
              [
                [161]
              ],
              [
                [162]
              ],
              [
                [163]
              ],
              [
                [164]
              ],
              [
                [165]
              ],
              [
                [166]
              ],
              [
                [167]
              ],
              [
                [168]
              ],
              [
                [169]
              ],
              [
                [170]
              ],
              [
                [171]
              ],
              [
                [172]
              ],
              [
                [173]
              ],
              [
                [174]
              ],
              [
                [175]
              ],
              [
                [176]
              ],
              [
                [177]
              ],
              [
                [178]
              ],
              [
                [179]
              ],
              [
                [180]
              ],
              [
                [181]
              ],
              [
                [182]
              ],
              [
                [183]
              ],
              [
                [184]
              ],
              [
                [185]
              ],
              [
                [186]
              ],
              [
                [187]
              ],
              [
                [188]
              ],
              [
                [189]
              ],
              [
                [190]
              ],
              [
                [191]
              ],
              [
                [192]
              ],
              [
                [193]
              ],
              [
                [194]
              ],
              [
                [195]
              ],
              [
                [196]
              ],
              [
                [197]
              ],
              [
                [198]
              ],
              [
                [199]
              ],
              [
                [200]
              ],
              [
                [201]
              ],
              [
                [202]
              ],
              [
                [203]
              ],
              [
                [204]
              ],
              [
                [205]
              ],
              [
                [206]
              ],
              [
                [207]
              ],
              [
                [208]
              ],
              [
                [209]
              ],
              [
                [210]
              ],
              [
                [211]
              ],
              [
                [212, 213, 214, 215]
              ],
              [
                [216]
              ],
              [
                [217]
              ],
              [
                [218]
              ],
              [
                [219]
              ],
              [
                [220]
              ]
            ],
            "id": "NO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "no",
              "hc-a2": "NO",
              "name": "Norway",
              "labelrank": "3",
              "country-abbrev": "Nor.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "NOR",
              "iso-a2": "NO",
              "woe-id": "-90",
              "continent": "Europe",
              "hc-middle-lon": 8.993,
              "hc-middle-lat": 60.872
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [221, 222, -132, 223, 224, -56, 225, 226, -14, 227, 228, 229, 230, 231, 232],
                [233]
              ],
              [
                [234]
              ],
              [
                [235]
              ],
              [
                [236]
              ],
              [
                [237]
              ],
              [
                [238]
              ],
              [
                [239]
              ],
              [
                [240, -241, 241]
              ]
            ],
            "id": "DE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "de",
              "hc-a2": "DE",
              "name": "Germany",
              "labelrank": "2",
              "country-abbrev": "Ger.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "DEU",
              "iso-a2": "DE",
              "woe-id": "23424829",
              "continent": "Europe",
              "hc-middle-lon": 10.187,
              "hc-middle-lat": 50.939
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [242]
              ],
              [
                [243, 244]
              ]
            ],
            "id": "IE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ie",
              "hc-a2": "IE",
              "name": "Ireland",
              "labelrank": "3",
              "country-abbrev": "Ire.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "IRL",
              "iso-a2": "IE",
              "woe-id": "23424803",
              "continent": "Europe",
              "hc-middle-lon": -7.831,
              "hc-middle-lat": 53.159
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [245]
              ],
              [
                [246]
              ],
              [
                [247]
              ],
              [
                [248, 249, 250, 251, 252, 253, 254, 255, 256],
                [257],
                [258]
              ]
            ],
            "id": "UA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ua",
              "hc-a2": "UA",
              "name": "Ukraine",
              "labelrank": "3",
              "country-abbrev": "Ukr.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "UKR",
              "iso-a2": "UA",
              "woe-id": "23424976",
              "continent": "Europe",
              "hc-middle-lon": 32.787,
              "hc-middle-lat": 49.201
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [259]
              ],
              [
                [260]
              ],
              [
                [261]
              ],
              [
                [262]
              ],
              [
                [263]
              ],
              [
                [264]
              ],
              [
                [265]
              ],
              [
                [266]
              ],
              [
                [267]
              ],
              [
                [268]
              ],
              [
                [269]
              ],
              [
                [270]
              ],
              [
                [271]
              ],
              [
                [272]
              ],
              [
                [273]
              ],
              [
                [274]
              ],
              [
                [275]
              ],
              [
                [276]
              ],
              [
                [277]
              ],
              [
                [278]
              ],
              [
                [279]
              ],
              [
                [280]
              ],
              [
                [281]
              ],
              [
                [282, -214, 283, 284]
              ]
            ],
            "id": "FI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "fi",
              "hc-a2": "FI",
              "name": "Finland",
              "labelrank": "3",
              "country-abbrev": "Fin.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "FIN",
              "iso-a2": "FI",
              "woe-id": "23424812",
              "continent": "Europe",
              "hc-middle-lon": 25.868,
              "hc-middle-lat": 62.517
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [285]
              ],
              [
                [286]
              ],
              [
                [287]
              ],
              [
                [288]
              ],
              [
                [289]
              ],
              [
                [290]
              ],
              [
                [291]
              ],
              [
                [292]
              ],
              [
                [293]
              ],
              [
                [294]
              ],
              [
                [295]
              ],
              [
                [296]
              ],
              [
                [297]
              ],
              [
                [298]
              ],
              [
                [299]
              ],
              [
                [300]
              ],
              [
                [301]
              ],
              [
                [302]
              ],
              [
                [303]
              ],
              [
                [-283, 304, -215]
              ]
            ],
            "id": "SE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "se",
              "hc-a2": "SE",
              "name": "Sweden",
              "labelrank": "3",
              "country-abbrev": "Swe.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "SWE",
              "iso-a2": "SE",
              "woe-id": "23424954",
              "continent": "Europe",
              "hc-middle-lon": 17.646,
              "hc-middle-lat": 64.491
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [305, -66, 306, 307, -63, 62, 308, -71, 309, -284, -213, 310, 311, -252, 312, 313, -68],
                [314]
              ],
              [
                [315]
              ],
              [
                [316]
              ],
              [
                [317]
              ],
              [
                [318]
              ],
              [
                [319]
              ],
              [
                [320]
              ],
              [
                [321]
              ],
              [
                [322, 323, 324, 325, 326, 327]
              ],
              [
                [328, 329, 330]
              ],
              [
                [331]
              ],
              [
                [332, 333]
              ],
              [
                [334]
              ]
            ],
            "id": "RU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ru",
              "hc-a2": "RU",
              "name": "Russia",
              "labelrank": "2",
              "country-abbrev": "Rus.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "RUS",
              "iso-a2": "RU",
              "woe-id": "23424936",
              "continent": "Europe",
              "hc-middle-lon": 39.729,
              "hc-middle-lat": 58.765
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [335]
              ],
              [
                [336]
              ],
              [
                [337]
              ],
              [
                [338]
              ],
              [
                [339]
              ],
              [
                [340]
              ],
              [
                [341]
              ],
              [
                [342]
              ],
              [
                [343]
              ],
              [
                [344]
              ],
              [
                [345]
              ],
              [
                [346]
              ],
              [
                [347]
              ],
              [
                [348]
              ],
              [
                [349]
              ],
              [
                [350]
              ],
              [
                [351]
              ],
              [
                [352]
              ],
              [
                [353]
              ],
              [
                [354]
              ],
              [
                [355]
              ],
              [
                [356]
              ],
              [
                [357]
              ],
              [
                [358]
              ],
              [
                [359]
              ],
              [
                [360]
              ],
              [
                [361]
              ],
              [
                [362]
              ],
              [
                [363]
              ],
              [
                [364]
              ],
              [
                [365]
              ],
              [
                [366, -94]
              ],
              [
                [367, 368]
              ],
              [
                [369, 370, -371, 371, 372, 373, 374, 375, 376],
                [377]
              ],
              [
                [378]
              ],
              [
                [379]
              ],
              [
                [380]
              ],
              [
                [381, -245]
              ]
            ],
            "id": "GB",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gb",
              "hc-a2": "GB",
              "name": "United Kingdom",
              "labelrank": "2",
              "country-abbrev": "U.K.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "GBR",
              "iso-a2": "GB",
              "woe-id": "-90",
              "continent": "Europe",
              "hc-middle-lon": -1.228,
              "hc-middle-lat": 52.105
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-378]
              ],
              [
                [382, -377, 383]
              ],
              [
                [384, -369, 385, 386, 387, 388, -373]
              ],
              [
                [389, 370]
              ]
            ],
            "id": "CY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cy",
              "hc-a2": "CY",
              "name": "Cyprus",
              "labelrank": "5",
              "country-abbrev": "Cyp.",
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "CYP",
              "iso-a2": "CY",
              "woe-id": "-90",
              "continent": "Asia",
              "hc-middle-lon": 32.572,
              "hc-middle-lat": 34.923
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [390, -88, 391],
              [392]
            ],
            "id": "PT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pt",
              "hc-a2": "PT",
              "name": "Portugal",
              "labelrank": "2",
              "country-abbrev": "Port.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "PRT",
              "iso-a2": "PT",
              "woe-id": "23424925",
              "continent": "Europe",
              "hc-middle-lon": -8.073,
              "hc-middle-lat": 40.292
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [393]
              ],
              [
                [394]
              ],
              [
                [395]
              ],
              [
                [396]
              ],
              [
                [397]
              ],
              [
                [398]
              ],
              [
                [399]
              ],
              [
                [400]
              ],
              [
                [401]
              ],
              [
                [402]
              ],
              [
                [403]
              ],
              [
                [404]
              ],
              [
                [405]
              ],
              [
                [406]
              ],
              [
                [407]
              ],
              [
                [408]
              ],
              [
                [409]
              ],
              [
                [410]
              ],
              [
                [411]
              ],
              [
                [412]
              ],
              [
                [413]
              ],
              [
                [414]
              ],
              [
                [415]
              ],
              [
                [416]
              ],
              [
                [417]
              ],
              [
                [418]
              ],
              [
                [419]
              ],
              [
                [420]
              ],
              [
                [421]
              ],
              [
                [422]
              ],
              [
                [423]
              ],
              [
                [424]
              ],
              [
                [425]
              ],
              [
                [426]
              ],
              [
                [427]
              ],
              [
                [428]
              ],
              [
                [429]
              ],
              [
                [430]
              ],
              [
                [431]
              ],
              [
                [432]
              ],
              [
                [433]
              ],
              [
                [434]
              ],
              [
                [435, 436, 437, 438, 439, -75, -114, 440]
              ],
              [
                [441]
              ],
              [
                [442]
              ],
              [
                [443]
              ],
              [
                [444]
              ]
            ],
            "id": "GR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gr",
              "hc-a2": "GR",
              "name": "Greece",
              "labelrank": "3",
              "country-abbrev": "Greece",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "GRC",
              "iso-a2": "GR",
              "woe-id": "23424833",
              "continent": "Europe",
              "hc-middle-lon": 21.616,
              "hc-middle-lat": 39.585
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [445, 446, 447, 448, -324]
              ],
              [
                [449, -328]
              ]
            ],
            "id": "LT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lt",
              "hc-a2": "LT",
              "name": "Lithuania",
              "labelrank": "5",
              "country-abbrev": "Lith.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "LTU",
              "iso-a2": "LT",
              "woe-id": "23424875",
              "continent": "Europe",
              "hc-middle-lon": 24.371,
              "hc-middle-lat": 55.184
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [450, -106, 451, 452, -45]
            ],
            "id": "SI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "si",
              "hc-a2": "SI",
              "name": "Slovenia",
              "labelrank": "6",
              "country-abbrev": "Slo.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "SVN",
              "iso-a2": "SI",
              "woe-id": "23424945",
              "continent": "Europe",
              "hc-middle-lon": 14.521,
              "hc-middle-lat": 45.989
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [453, -43, 454, 455, -40]
            ],
            "id": "BA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ba",
              "hc-a2": "BA",
              "name": "Bosnia and Herzegovina",
              "labelrank": "5",
              "country-abbrev": "B.H.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "BIH",
              "iso-a2": "BA",
              "woe-id": "23424761",
              "continent": "Europe",
              "hc-middle-lon": 17.609,
              "hc-middle-lat": 44.138
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [456, -125]
            ],
            "id": "MC",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mc",
              "hc-a2": "MC",
              "name": "Monaco",
              "labelrank": "6",
              "country-abbrev": "Mco.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "MCO",
              "iso-a2": "MC",
              "woe-id": "23424892",
              "continent": "Europe",
              "hc-middle-lon": 7.4,
              "hc-middle-lat": 43.735
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [457, 458]
              ],
              [
                [459, 460, 461, 462, -438, 463, -436, 464, 465, 466, 467, 468, 469]
              ],
              [
                [470, 471]
              ]
            ],
            "id": "AL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "al",
              "hc-a2": "AL",
              "name": "Albania",
              "labelrank": "6",
              "country-abbrev": "Alb.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "ALB",
              "iso-a2": "AL",
              "woe-id": "23424742",
              "continent": "Europe",
              "hc-middle-lon": 19.682,
              "hc-middle-lat": 40.729
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [472, -384, -376, 473]
              ],
              [
                [474, 475, 476, -387]
              ],
              [
                [477, 478, -374, -389]
              ]
            ],
            "id": "CNM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cnm",
              "hc-a2": "CN",
              "name": "Cyprus No Mans Area",
              "labelrank": "9",
              "country-abbrev": null,
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "-99",
              "iso-a2": null,
              "woe-id": "-99",
              "continent": "Asia",
              "hc-middle-lon": 33.497,
              "hc-middle-lat": 35.006
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [479, -474, -375, -479]
              ],
              [
                [480, -476]
              ]
            ],
            "id": "NC",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "nc",
              "hc-a2": "NC",
              "name": "Northern Cyprus",
              "labelrank": "6",
              "country-abbrev": "N. Cy.",
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "-99",
              "iso-a2": "NC",
              "woe-id": "-90",
              "continent": "Asia",
              "hc-middle-lon": 33.685,
              "hc-middle-lat": 35.276
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-42, 481, 482, 483, 484, -77, 485, 486, 487, -455]
            ],
            "id": "RS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "rs",
              "hc-a2": "RS",
              "name": "Republic of Serbia",
              "labelrank": "5",
              "country-abbrev": "Serb.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "SRB",
              "iso-a2": "RS",
              "woe-id": "-90",
              "continent": "Europe",
              "hc-middle-lon": 20.751,
              "hc-middle-lat": 44.169
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-483, 488, -256, 489, -254, 490, -80, -79, 491]
            ],
            "id": "RO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ro",
              "hc-a2": "RO",
              "name": "Romania",
              "labelrank": "3",
              "country-abbrev": "Rom.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "ROU",
              "iso-a2": "RO",
              "woe-id": "23424933",
              "continent": "Europe",
              "hc-middle-lon": 24.586,
              "hc-middle-lat": 45.888
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-468, 492, -472, 493, -466, 494, -41, -456, -488, 495]
            ],
            "id": "ME",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "me",
              "hc-a2": "ME",
              "name": "Montenegro",
              "labelrank": "6",
              "country-abbrev": "Mont.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "MNE",
              "iso-a2": "ME",
              "woe-id": "20069817",
              "continent": "Europe",
              "hc-middle-lon": 18.917,
              "hc-middle-lat": 42.443
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [496, 497]
            ],
            "id": "LI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "li",
              "hc-a2": "LI",
              "name": "Liechtenstein",
              "labelrank": "6",
              "country-abbrev": "Liech.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "LIE",
              "iso-a2": "LI",
              "woe-id": "23424879",
              "continent": "Europe",
              "hc-middle-lon": 9.563,
              "hc-middle-lat": 47.158
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-497, 498, 499, -233, 500, 501, 502, -452, -105, 503]
            ],
            "id": "AT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "at",
              "hc-a2": "AT",
              "name": "Austria",
              "labelrank": "4",
              "country-abbrev": "Aust.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "AUT",
              "iso-a2": "AT",
              "woe-id": "23424750",
              "continent": "Europe",
              "hc-middle-lon": 14.67,
              "hc-middle-lat": 47.696
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-502, 504, 505, -249, 506]
            ],
            "id": "SK",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sk",
              "hc-a2": "SK",
              "name": "Slovakia",
              "labelrank": "6",
              "country-abbrev": "Svk.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "SVK",
              "iso-a2": "SK",
              "woe-id": "23424877",
              "continent": "Europe",
              "hc-middle-lon": 19.111,
              "hc-middle-lat": 48.728
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-453, -503, -507, -257, -489, -482, -46]
            ],
            "id": "HU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "hu",
              "hc-a2": "HU",
              "name": "Hungary",
              "labelrank": "5",
              "country-abbrev": "Hun.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "HUN",
              "iso-a2": "HU",
              "woe-id": "23424844",
              "continent": "Europe",
              "hc-middle-lon": 19.054,
              "hc-middle-lat": 47.106
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-91, -127]
            ],
            "id": "AD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ad",
              "hc-a2": "AD",
              "name": "Andorra",
              "labelrank": "6",
              "country-abbrev": "And.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "AND",
              "iso-a2": "AD",
              "woe-id": "23424744",
              "continent": "Europe",
              "hc-middle-lon": 1.582,
              "hc-middle-lat": 42.518
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-131, 507, -224]
            ],
            "id": "LU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lu",
              "hc-a2": "LU",
              "name": "Luxembourg",
              "labelrank": "6",
              "country-abbrev": "Lux.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "LUX",
              "iso-a2": "LU",
              "woe-id": "23424881",
              "continent": "Europe",
              "hc-middle-lon": 6.116,
              "hc-middle-lat": 49.753
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-223, 508, 240, 509, -499, -498, -504, -104, -123, 510, -133]
            ],
            "id": "CH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ch",
              "hc-a2": "CH",
              "name": "Switzerland",
              "labelrank": "4",
              "country-abbrev": "Switz.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "CHE",
              "iso-a2": "CH",
              "woe-id": "23424957",
              "continent": "Europe",
              "hc-middle-lon": 8.222,
              "hc-middle-lat": 46.823
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-508, -130, 511, 512, -54, 513, -57, -225]
            ],
            "id": "BE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "be",
              "hc-a2": "BE",
              "name": "Belgium",
              "labelrank": "2",
              "country-abbrev": "Belg.",
              "subregion": "Western Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "BEL",
              "iso-a2": "BE",
              "woe-id": "23424757",
              "continent": "Europe",
              "hc-middle-lon": 4.577,
              "hc-middle-lat": 50.734
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-469, -496, -487, 514]
            ],
            "id": "KV",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kv",
              "hc-a2": "KV",
              "name": "Kosovo",
              "labelrank": "6",
              "country-abbrev": "Kos.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "-99",
              "iso-a2": "KV",
              "woe-id": "-90",
              "continent": "Europe",
              "hc-middle-lon": 21.535,
              "hc-middle-lat": 42.496
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-449, 515, -250, -506, 516, -231, 517, -229, 518, 519, -325]
              ],
              [
                [-329, 520, 521]
              ],
              [
                [522, 523]
              ]
            ],
            "id": "PL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pl",
              "hc-a2": "PL",
              "name": "Poland",
              "labelrank": "3",
              "country-abbrev": "Pol.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "POL",
              "iso-a2": "PL",
              "woe-id": "23424923",
              "continent": "Europe",
              "hc-middle-lon": 19.887,
              "hc-middle-lat": 51.955
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [524, 525]
              ],
              [
                [-76, -440, 526, -459, -461, 527, -470, -515, -486]
              ]
            ],
            "id": "MK",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mk",
              "hc-a2": "MK",
              "name": "Macedonia",
              "labelrank": "6",
              "country-abbrev": "Mkd.",
              "subregion": "Southern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "MKD",
              "iso-a2": "MK",
              "woe-id": "23424890",
              "continent": "Europe",
              "hc-middle-lon": 21.694,
              "hc-middle-lat": 41.619
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [528, -447, 529, -69, -314]
            ],
            "id": "LV",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lv",
              "hc-a2": "LV",
              "name": "Latvia",
              "labelrank": "5",
              "country-abbrev": "Lat.",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "LVA",
              "iso-a2": "LV",
              "woe-id": "23424874",
              "continent": "Europe",
              "hc-middle-lon": 26.084,
              "hc-middle-lat": 56.829
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-529, -313, -251, -516, -448]
            ],
            "id": "BY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "by",
              "hc-a2": "BY",
              "name": "Belarus",
              "labelrank": "4",
              "country-abbrev": "Bela.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "BLR",
              "iso-a2": "BY",
              "woe-id": "23424765",
              "continent": "Europe",
              "hc-middle-lon": 27.706,
              "hc-middle-lat": 53.222
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [530]
            ],
            "id": "IS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "is",
              "hc-a2": "IS",
              "name": "Iceland",
              "labelrank": "3",
              "country-abbrev": "Iceland",
              "subregion": "Northern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "ISL",
              "iso-a2": "IS",
              "woe-id": "23424845",
              "continent": "Europe",
              "hc-middle-lon": -17.483,
              "hc-middle-lat": 64.839
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-490, -255]
            ],
            "id": "MD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "md",
              "hc-a2": "MD",
              "name": "Moldova",
              "labelrank": "6",
              "country-abbrev": "Mda.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "MDA",
              "iso-a2": "MD",
              "woe-id": "23424885",
              "continent": "Europe",
              "hc-middle-lon": 28.317,
              "hc-middle-lat": 47.479
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-505, -501, -232, -517]
            ],
            "id": "CZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cz",
              "hc-a2": "CZ",
              "name": "Czech Republic",
              "labelrank": "5",
              "country-abbrev": "Cz. Rep.",
              "subregion": "Eastern Europe",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "CZE",
              "iso-a2": "CZ",
              "woe-id": "23424810",
              "continent": "Europe",
              "hc-middle-lon": 14.707,
              "hc-middle-lat": 49.755
            }
          }
        ],
        "hc-recommended-transform": {
          "default": {
            "crs": "+proj=lcc +lat_1=43 +lat_2=62 +lat_0=30 +lon_0=10 +x_0=0 +y_0=0 +ellps=intl +units=m +no_defs",
            "scale": 0.000169255094964,
            "jsonres": 15.5,
            "jsonmarginX": -999,
            "jsonmarginY": 9851,
            "xoffset": -1706316.2597,
            "yoffset": 4824494.18154
          }
        },
        "hc-recommended-mapview": {
          "projection": {
            "name": "LambertConformalConic",
            "parallels": [43, 62],
            "rotation": [-10]
          }
        }
      }
    },
    "arcs": [
      [
        [4019, 5560],
        [38, -39],
        [15, 17],
        [14, -36],
        [-9, -26],
        [-33, -5],
        [-54, 44],
        [10, 42],
        [19, 3]
      ],
      [
        [3918, 5545],
        [18, -13],
        [-15, -5],
        [-19, 29],
        [16, -11]
      ],
      [
        [4163, 5573],
        [-35, -30],
        [-11, 17],
        [23, 22],
        [23, -9]
      ],
      [
        [3855, 5595],
        [26, -33],
        [-7, -27],
        [-17, 11],
        [-2, 49]
      ],
      [
        [3972, 5556],
        [-12, -54],
        [-10, 27],
        [35, 86],
        [-13, -59]
      ],
      [
        [4427, 5637],
        [30, -28],
        [-10, -39],
        [-43, 31],
        [9, 56],
        [14, -20]
      ],
      [
        [3700, 5693],
        [5, -3],
        [-1, -24],
        [-9, 23],
        [5, 4]
      ],
      [
        [3916, 5740],
        [51, -69],
        [-6, -78],
        [-22, -12],
        [-38, 17],
        [-36, 44],
        [0, 26],
        [-24, 40],
        [75, 32]
      ],
      [
        [4168, 5724],
        [-7, 18],
        [10, 23],
        [7, -26],
        [-10, -15]
      ],
      [
        [3948, 5813],
        [0, -23],
        [-12, -1],
        [7, 29],
        [5, -5]
      ],
      [
        [3756, 6108],
        [-4, -42],
        [-25, -33],
        [-12, 30],
        [11, 27],
        [30, 18]
      ],
      [
        [4012, 6209],
        [-15, -9],
        [-3, -24],
        [-20, 17],
        [38, 16]
      ],
      [
        [3728, 5544],
        [2, 66],
        [-22, -19],
        [-2, 30],
        [25, -9],
        [-8, 81],
        [-35, 34],
        [-24, 0],
        [11, 68],
        [22, 22],
        [-12, 50],
        [-20, 12],
        [2, 119],
        [7, 32],
        [14, -25],
        [29, 0],
        [18, -26],
        [2, 42],
        [24, 46],
        [25, -27],
        [-15, -23],
        [26, 3],
        [-13, 71],
        [31, 36],
        [20, -14],
        [19, 35],
        [-58, -27],
        [-17, 15],
        [-49, -28],
        [-22, -47],
        [6, -52],
        [-33, 50],
        [42, 95],
        [89, 11],
        [18, 22],
        [44, 95],
        [26, 2],
        [45, 42],
        [-19, -50],
        [14, -37],
        [-1, -54],
        [-11, -14],
        [-20, -76],
        [11, -95],
        [47, -7],
        [21, -24],
        [-25, -63],
        [-14, 6],
        [-10, -38],
        [-4, 48],
        [-11, 6],
        [-20, -41],
        [2, -64],
        [-39, -22],
        [19, -23],
        [-30, -20],
        [7, -14],
        [-41, -37],
        [25, -66],
        [-25, -24],
        [28, -49],
        [0, -40],
        [-17, 25],
        [-17, -32]
      ],
      [
        [3815, 5521],
        [-69, 26],
        [-18, -3]
      ],
      [
        [4044, 5830],
        [21, -9],
        [16, -62],
        [24, 71],
        [-18, 9],
        [43, 42],
        [42, -23],
        [-12, -33],
        [10, -58],
        [-40, -45],
        [-2, -30],
        [24, -23],
        [-6, -27],
        [-23, -7],
        [-3, -64],
        [-11, -6],
        [12, -36],
        [-23, -40],
        [-24, 49],
        [16, 28],
        [-27, 56],
        [-44, 6],
        [-19, 45],
        [13, 7],
        [-6, 45],
        [-21, 46],
        [32, 1],
        [26, 31],
        [0, 27]
      ],
      [
        [1981, 7385],
        [18, -12],
        [7, -50],
        [-22, 29],
        [-3, 33]
      ],
      [
        [1987, 7461],
        [26, -22],
        [-6, -20],
        [-23, 26],
        [3, 16]
      ],
      [
        [1951, 7524],
        [14, -11],
        [-17, -18],
        [-27, 34],
        [30, -5]
      ],
      [
        [1948, 7573],
        [53, -76],
        [-2, -26],
        [-33, 49],
        [-23, 16],
        [5, 37]
      ],
      [
        [1982, 7576],
        [37, -51],
        [-15, -16],
        [-30, 31],
        [-14, 33],
        [22, 3]
      ],
      [
        [2016, 7561],
        [-6, 4],
        [-4, 12],
        [1, 13],
        [9, -29]
      ],
      [
        [2009, 7554],
        [-3, 0],
        [-13, 34],
        [1, 4],
        [15, -38]
      ],
      [
        [2029, 7571],
        [-10, 25],
        [6, -2],
        [6, -17],
        [-1, -6],
        [9, -9],
        [-13, -5],
        [-5, -7],
        [-3, 34],
        [11, -13]
      ],
      [
        [4657, 2227],
        [-1, -9],
        [-11, -3],
        [-3, 12],
        [15, 0]
      ],
      [
        [4707, 2234],
        [39, -23],
        [2, -6],
        [-41, 21],
        [0, 8]
      ],
      [
        [4638, 2282],
        [30, 2],
        [18, -16],
        [-39, -6],
        [-9, 20]
      ],
      [
        [4573, 2309],
        [3, -11],
        [-11, -6],
        [-8, 15],
        [16, 2]
      ],
      [
        [4615, 2352],
        [21, -19],
        [50, -9],
        [-56, 0],
        [-36, 19],
        [21, 9]
      ],
      [
        [4642, 2383],
        [1, -21],
        [-44, 14],
        [0, 20],
        [43, -13]
      ],
      [
        [4585, 2400],
        [11, -16],
        [-5, -2],
        [-16, 13],
        [10, 5]
      ],
      [
        [4489, 2535],
        [-9, 5],
        [-12, 25],
        [14, -11],
        [7, -19]
      ],
      [
        [4465, 2581],
        [-4, -5],
        [-8, 12],
        [-7, 19],
        [19, -26]
      ],
      [
        [4425, 2601],
        [39, -62],
        [-9, -3],
        [-15, 41],
        [-15, 24]
      ],
      [
        [4422, 2727],
        [7, 3],
        [39, -74],
        [-40, 41],
        [-6, 30]
      ],
      [
        [4373, 2728],
        [0, -7],
        [-8, 38],
        [7, -9],
        [1, -22]
      ],
      [
        [4412, 2794],
        [8, -21],
        [3, -18],
        [-19, 39],
        [8, 0]
      ],
      [
        [4380, 2824],
        [-5, -81],
        [-14, 78],
        [10, 4],
        [-13, 47],
        [10, 7],
        [12, -55]
      ],
      [
        [4391, 2904],
        [11, -43],
        [16, -31],
        [-43, 31],
        [16, 43]
      ],
      [
        [4832, 2129],
        [-78, 109],
        [-41, 16],
        [-22, 41],
        [46, -36]
      ],
      [
        [4737, 2259],
        [23, -20],
        [65, -70]
      ],
      [
        [4825, 2169],
        [1, -22],
        [6, -18]
      ],
      [
        [4878, 3091],
        [-7, -33],
        [19, -66],
        [-1, -55],
        [40, -33],
        [4, -21],
        [-38, -6],
        [-5, -77]
      ],
      [
        [4890, 2800],
        [-14, -2],
        [-22, 60],
        [-17, -6],
        [-34, 28],
        [-25, -3],
        [-20, -23],
        [-17, 27],
        [-13, -12],
        [-34, 20],
        [-9, -12],
        [-29, 37],
        [-16, -28],
        [-34, 5],
        [-16, -53],
        [-14, 7],
        [-25, 51],
        [-24, -16],
        [-1, -86],
        [39, -89],
        [11, -86],
        [52, -100],
        [3, -19],
        [42, -71],
        [18, -9],
        [3, -34],
        [19, -55],
        [17, -20],
        [-1, -38]
      ],
      [
        [4729, 2273],
        [-57, 81],
        [-21, 46],
        [-40, 25],
        [-62, 2],
        [-5, 47],
        [-52, 68],
        [-40, 93],
        [22, 25],
        [-46, 92],
        [3, 73],
        [-11, 43],
        [-27, 47],
        [-29, 19],
        [-41, -149],
        [-39, 84],
        [-12, 107],
        [9, -6]
      ],
      [
        [4281, 2970],
        [34, -17],
        [9, 24],
        [45, -10],
        [21, 49],
        [12, -33],
        [53, -29],
        [25, 14],
        [-13, 62],
        [23, 29],
        [24, 5],
        [4, 56],
        [-12, 21],
        [8, 28],
        [69, 44],
        [-5, 32],
        [31, 2]
      ],
      [
        [4609, 3247],
        [40, -38],
        [12, -41],
        [25, -25],
        [17, -45],
        [27, -5],
        [32, -45],
        [38, 3],
        [22, -12],
        [30, 47],
        [26, 5]
      ],
      [
        [3206, 4670],
        [-4, -21],
        [-33, 27],
        [28, 5],
        [9, -11]
      ],
      [
        [3304, 5055],
        [-10, -29],
        [-10, 15],
        [16, 36],
        [4, -22]
      ],
      [
        [3309, 5087],
        [-6, -1],
        [12, 19],
        [8, 7],
        [-14, -25]
      ],
      [
        [3365, 5137],
        [-25, -15],
        [-3, 9],
        [45, 19],
        [-17, -13]
      ],
      [
        [3419, 5155],
        [5, -4],
        [-31, -8],
        [-1, 10],
        [27, 2]
      ],
      [
        [3446, 5154],
        [-3, 4],
        [9, 7],
        [14, -2],
        [-20, -9]
      ],
      [
        [3131, 4581],
        [22, 11],
        [35, -19],
        [14, 18],
        [27, -12]
      ],
      [
        [3229, 4579],
        [-33, -44],
        [-32, 22],
        [-28, -11],
        [-5, 35]
      ],
      [
        [3234, 4579],
        [-36, 23],
        [-13, -16],
        [-33, 18],
        [-8, 26],
        [41, 16],
        [34, -47],
        [12, 21],
        [-28, 20],
        [21, 26],
        [-24, 44],
        [6, 37],
        [15, 6],
        [41, 91],
        [26, 173],
        [19, -17],
        [52, 52],
        [24, 57],
        [44, 27],
        [84, 15],
        [52, -59]
      ],
      [
        [3563, 5092],
        [-1, -76],
        [-12, -31],
        [-4, -56],
        [-31, -2],
        [-8, -45],
        [31, -7],
        [6, -60],
        [-39, -53],
        [15, -21],
        [-48, -36],
        [-29, 19],
        [-22, -25],
        [19, -44],
        [12, -71],
        [-16, -43],
        [9, -21],
        [-25, -33],
        [16, -34],
        [-8, -43]
      ],
      [
        [3428, 4410],
        [-34, 3],
        [16, 108],
        [-41, 36],
        [-28, -8],
        [-23, 59],
        [-12, -23],
        [-16, 29],
        [-15, -21],
        [-17, 15],
        [-10, -33],
        [-14, 4]
      ],
      [
        [3395, 4859],
        [9, 10],
        [1, 3],
        [8, 11],
        [-1, 31],
        [-21, 5],
        [20, -11],
        [-6, -36],
        [-10, -13],
        [-31, -32],
        [-32, 30],
        [59, 63],
        [-5, 44],
        [12, 17],
        [-35, 5],
        [-4, 61],
        [-37, -39],
        [8, -44],
        [21, -19],
        [-31, -22],
        [7, -51],
        [-14, -19],
        [54, -31],
        [28, 37]
      ],
      [
        [5376, 6565],
        [-14, -25],
        [-18, 19],
        [11, 19],
        [21, -13]
      ],
      [
        [5361, 6680],
        [15, -2],
        [3, -17],
        [-25, -1],
        [7, 20]
      ],
      [
        [5306, 6670],
        [24, -7],
        [12, -39],
        [-34, -10],
        [-21, -33],
        [-13, 43],
        [-42, 31],
        [45, 4],
        [15, 32],
        [14, -21]
      ],
      [
        [5919, 6764],
        [-7, -2],
        [-13, -4]
      ],
      [
        [5899, 6758],
        [8, -3]
      ],
      [
        [5907, 6755],
        [1, 0],
        [1, 0],
        [-7, -4]
      ],
      [
        [5902, 6751],
        [-16, -8],
        [-5, -32]
      ],
      [
        [5881, 6711],
        [-6, -23],
        [-8, -22]
      ],
      [
        [5867, 6666],
        [-20, 6],
        [-51, -16],
        [-14, -45],
        [23, -36],
        [11, -70],
        [17, -31],
        [26, -80]
      ],
      [
        [5859, 6394],
        [17, -39],
        [-29, -13],
        [-20, -78]
      ],
      [
        [5827, 6264],
        [-55, 27],
        [-42, -29],
        [-53, 70],
        [-2, 20],
        [-46, 18],
        [-37, 44],
        [-82, -35],
        [-26, -22]
      ],
      [
        [5484, 6357],
        [18, 57],
        [7, 76],
        [-22, 10],
        [-25, -40],
        [-41, 27],
        [-9, 54],
        [-16, 5],
        [1, 52],
        [31, -5],
        [1, 19],
        [-43, -9],
        [-1, 39],
        [15, 17],
        [-16, 15],
        [7, 51],
        [69, 28],
        [-8, 18],
        [126, 44],
        [30, -14],
        [36, 48],
        [81, -32],
        [24, 2],
        [18, -21],
        [118, -19],
        [16, 20]
      ],
      [
        [5901, 6799],
        [10, -11],
        [8, -24]
      ],
      [
        [5210, 6466],
        [16, 24],
        [-13, 40],
        [25, 0],
        [53, 37],
        [6, -12],
        [29, 9],
        [47, -41],
        [-18, 1],
        [-15, -30],
        [-39, -39],
        [-40, -5],
        [-15, -61],
        [-21, 0],
        [23, 45],
        [-38, 32]
      ],
      [
        [5964, 2492],
        [3, -56],
        [-15, -47],
        [-35, 12],
        [-24, -69],
        [-7, -40],
        [1, -82],
        [-17, 2],
        [-33, -70],
        [21, -1],
        [13, -50],
        [26, -56],
        [4, -27]
      ],
      [
        [5901, 2008],
        [-24, 5],
        [-29, -25],
        [-31, 52],
        [-28, -5],
        [-9, -20],
        [-44, -20],
        [-3, -28],
        [-21, -30]
      ],
      [
        [5712, 1937],
        [-32, -7],
        [13, -46],
        [-5, -44],
        [-27, -15],
        [-37, 3],
        [-30, -21],
        [-45, 44],
        [-12, -14],
        [-20, 22],
        [-10, 36],
        [-52, -9],
        [-49, -43],
        [-36, 8],
        [-20, -24],
        [-22, 7]
      ],
      [
        [5328, 1834],
        [2, 68],
        [9, 36],
        [-19, 82],
        [-35, 31],
        [-21, 51]
      ],
      [
        [5264, 2102],
        [18, 24],
        [-9, 46],
        [9, 82],
        [25, 4],
        [28, 86],
        [-52, 74],
        [-19, 92],
        [6, 51],
        [23, 24]
      ],
      [
        [5293, 2585],
        [5, 36],
        [5, 5]
      ],
      [
        [5303, 2626],
        [0, -1]
      ],
      [
        [5303, 2625],
        [38, -37],
        [-16, -27],
        [3, -44],
        [46, 15],
        [94, -37],
        [38, 13],
        [52, -14],
        [45, -26],
        [47, 21],
        [41, 77],
        [99, 45],
        [25, -15],
        [15, -29],
        [30, 2],
        [8, -20],
        [21, 12],
        [8, -39],
        [27, -24],
        [40, -6]
      ],
      [
        [2917, 1126],
        [5, -15],
        [-11, -14],
        [0, 18],
        [6, 11]
      ],
      [
        [2932, 1223],
        [5, -20],
        [-24, -55],
        [-21, 20],
        [16, 47],
        [24, 8]
      ],
      [
        [3112, 1460],
        [-2, -55],
        [35, -6],
        [-28, -106],
        [-18, -25],
        [-33, 36],
        [-13, 45],
        [-18, -26],
        [-15, 39],
        [64, 83],
        [28, 15]
      ],
      [
        [3217, 1485],
        [18, -25],
        [3, -41],
        [-32, 29],
        [-21, 3],
        [-1, 31],
        [33, 3]
      ],
      [
        [2147, 349],
        [6, 4],
        [8, -9],
        [-5, -12],
        [-9, 17]
      ],
      [
        [2975, 2137],
        [-1, 6],
        [2, 6],
        [4, -12],
        [-5, 0]
      ],
      [
        [2153, 413],
        [-28, -38],
        [-61, 82],
        [-9, 74],
        [-18, 17],
        [1, 47],
        [-13, 41],
        [-44, 57],
        [-58, 7]
      ],
      [
        [1923, 700],
        [-13, 102],
        [22, 68],
        [7, 45],
        [28, 12],
        [8, 48],
        [-17, -7],
        [-29, 75],
        [10, 80],
        [24, 32],
        [10, 43],
        [-22, 27],
        [-18, 63],
        [1, 32],
        [-27, 61],
        [58, 2],
        [18, 87],
        [-18, 48],
        [27, 47],
        [-7, 24],
        [3, 110],
        [-12, 47],
        [13, 11],
        [20, 58],
        [17, 8],
        [32, 75],
        [-41, 46],
        [1, 51],
        [-65, 17],
        [-12, -34],
        [-42, -8],
        [-11, 18],
        [-51, -24],
        [-6, 20],
        [15, 42],
        [-14, 31],
        [-45, -28],
        [-14, -22]
      ],
      [
        [1773, 2007],
        [-13, -22],
        [-4, 58],
        [31, 55],
        [-27, -12],
        [23, 47],
        [-23, -4],
        [9, 62],
        [-25, -31],
        [-7, 18],
        [17, 53],
        [-24, 7],
        [0, 28],
        [-18, 2],
        [2, 36],
        [15, 40],
        [20, 8],
        [13, 29],
        [17, -12],
        [41, 31],
        [2, 44],
        [48, 53],
        [58, -21],
        [16, -32],
        [112, 8],
        [90, -9],
        [28, -20],
        [89, -29],
        [93, 36],
        [6, -24],
        [46, -17],
        [38, 23],
        [43, -37],
        [27, -7],
        [38, 27]
      ],
      [
        [2554, 2395],
        [5, -27],
        [38, -12],
        [-9, -45],
        [57, -34],
        [25, -3],
        [20, -41],
        [29, 13],
        [32, -43],
        [23, 11],
        [12, -15],
        [42, 4],
        [1, 42],
        [74, -34],
        [13, -32]
      ],
      [
        [2916, 2179],
        [8, -47],
        [23, 21]
      ],
      [
        [2947, 2153],
        [39, -41],
        [25, 21],
        [21, -24],
        [53, 35],
        [27, -10]
      ],
      [
        [3112, 2134],
        [16, -31],
        [-19, -17],
        [-3, -33],
        [12, -47],
        [-34, -69],
        [-71, -68],
        [-26, -52],
        [-59, -24],
        [-62, -40],
        [-31, -61],
        [16, -39],
        [-28, -17],
        [-28, -90],
        [-33, -69],
        [-43, -141],
        [13, -120],
        [22, -57],
        [27, -37],
        [-36, -55],
        [-28, -20],
        [-19, -34],
        [-28, -129],
        [6, -68],
        [-45, -23],
        [-15, 13],
        [-48, -59],
        [-16, -44],
        [-10, -70],
        [-26, -58],
        [-26, 28],
        [-24, -8],
        [-9, -31],
        [-64, 17],
        [-21, -17],
        [-21, 13],
        [-51, 1],
        [-43, -10],
        [-10, -36],
        [-22, -24],
        [-20, 4],
        [-32, -25],
        [-17, -74]
      ],
      [
        [2156, 413],
        [-3, 0]
      ],
      [
        [4100, 600],
        [8, -11],
        [-2, -12],
        [-11, 12],
        [5, 11]
      ],
      [
        [4436, 1040],
        [-2, 5],
        [-6, 8],
        [7, 11],
        [1, -24]
      ],
      [
        [3694, 1227],
        [11, -17],
        [-6, -26],
        [-6, 28],
        [1, 15]
      ],
      [
        [3688, 1224],
        [-6, 0],
        [-3, 13],
        [9, 11],
        [0, -24]
      ],
      [
        [4323, 1663],
        [-13, 1],
        [2, 13],
        [11, -8],
        [0, -6]
      ],
      [
        [3691, 1770],
        [0, -11],
        [-10, -5],
        [4, 17],
        [6, -1]
      ],
      [
        [3926, 2238],
        [-5, -25],
        [-31, 10],
        [6, 17],
        [30, -2]
      ],
      [
        [4295, 2999],
        [2, 30],
        [-20, 24],
        [-15, -18],
        [-22, 14],
        [-16, -37],
        [-76, -56],
        [11, 37],
        [-26, -30],
        [-7, -42],
        [14, -57],
        [22, -36],
        [-10, -41],
        [-16, 6],
        [-2, -97],
        [10, -65],
        [38, -73],
        [27, -23],
        [34, -54],
        [41, -46],
        [24, -111],
        [13, -90],
        [14, -54],
        [75, -141],
        [43, -41],
        [37, -8],
        [65, 10],
        [18, -42],
        [-30, -41],
        [-1, -38],
        [12, -20],
        [64, -60],
        [52, -35],
        [47, -69],
        [60, -49],
        [26, -53],
        [31, -94],
        [-16, -87],
        [-34, 32],
        [-8, 57],
        [-17, 46],
        [-38, 4],
        [-33, 28],
        [-19, 32],
        [-15, -21],
        [-34, -99],
        [3, -32],
        [-16, -44],
        [2, -32],
        [27, -19],
        [46, -59],
        [-4, -77],
        [9, -25],
        [-12, -36],
        [-29, 5],
        [-34, -53],
        [3, -81],
        [-44, -78],
        [-9, -53],
        [-48, 5],
        [-1, 75],
        [14, 10],
        [14, 54],
        [-7, 51],
        [38, 23],
        [4, 42],
        [-15, 48],
        [-10, 100],
        [-14, 34],
        [-10, 83],
        [-19, 57],
        [-30, -20],
        [-25, 46],
        [-24, 19],
        [10, 42],
        [-28, 78],
        [-47, -25],
        [16, 39],
        [-20, 30],
        [-22, -2],
        [-42, 114],
        [-17, -11],
        [-28, 24],
        [-31, -19],
        [-17, 47],
        [-29, 13],
        [-21, 50],
        [-24, 29],
        [-10, 46],
        [-36, 36],
        [-19, 67],
        [-29, 33],
        [-34, 0],
        [10, 33],
        [-22, 52],
        [-29, 26],
        [5, 24],
        [-29, 8],
        [3, 61],
        [-12, 66],
        [-12, 25],
        [-7, 91],
        [-18, 57],
        [-32, 12],
        [-66, 79],
        [-57, 19],
        [-29, -32],
        [-27, -55],
        [-7, -40],
        [-23, -29],
        [-52, -16]
      ],
      [
        [3597, 2506],
        [-2, 20],
        [24, 60],
        [-4, 25],
        [-31, -14],
        [-39, 32],
        [-19, 35],
        [-2, 48],
        [24, 38],
        [-14, 49],
        [-23, 18],
        [-14, 48],
        [27, 7],
        [29, 35],
        [6, 42],
        [-20, 27],
        [-2, 36],
        [-19, 21],
        [1, 29],
        [25, 28]
      ],
      [
        [3544, 3090],
        [18, -12],
        [40, 28],
        [32, -19],
        [32, 58],
        [-4, 35],
        [41, 49],
        [-1, -50],
        [19, -36],
        [26, -15],
        [8, -65],
        [17, 15],
        [-8, 24],
        [32, 92],
        [-1, 49],
        [20, 2],
        [13, -55],
        [46, 17],
        [9, -37],
        [13, 12],
        [-13, 46],
        [5, 47],
        [38, -19],
        [-7, 38],
        [10, 53]
      ],
      [
        [3929, 3347],
        [61, -27],
        [11, 40],
        [24, 20],
        [49, -4],
        [52, 29],
        [-11, -23],
        [33, -83],
        [93, -38],
        [52, -8]
      ],
      [
        [4293, 3253],
        [-37, -63],
        [31, -30],
        [-20, -48],
        [18, -11],
        [-5, -43],
        [35, -49],
        [-20, -10]
      ],
      [
        [4154, 2534],
        [2, 24],
        [-6, -4],
        [-4, -12],
        [8, -8]
      ],
      [
        [4153, 1989],
        [0, 0]
      ],
      [
        [4358, 925],
        [40, 19],
        [31, 28],
        [20, -16],
        [48, 46],
        [-2, -58],
        [-32, -92],
        [-13, -70],
        [2, -47],
        [25, -85],
        [-18, -18],
        [-11, -78],
        [-66, 37],
        [-24, 68],
        [-21, 20],
        [-22, -4],
        [-49, 54],
        [-32, 51],
        [-35, 25],
        [-23, -3],
        [-26, 67],
        [9, 55],
        [29, 46],
        [16, -41],
        [22, 43],
        [25, 10],
        [8, -33],
        [45, -35],
        [25, 20],
        [29, -9]
      ],
      [
        [3774, 1253],
        [-6, -61],
        [-19, -31],
        [-28, 5],
        [-5, 44],
        [-21, 47],
        [1, 41],
        [19, 137],
        [-17, 7],
        [11, 55],
        [-4, 57],
        [-16, 72],
        [-17, -3],
        [-4, 44],
        [11, 50],
        [33, -22],
        [27, 23],
        [52, 96],
        [24, -22],
        [14, -18],
        [-6, -28],
        [36, -136],
        [-23, -70],
        [12, -49],
        [-10, -164],
        [-10, -94],
        [-30, 22],
        [-24, -2]
      ],
      [
        [5670, 1511],
        [-22, -16],
        [-11, 7],
        [28, 33],
        [5, -24]
      ],
      [
        [5857, 1650],
        [11, -6],
        [-13, -18],
        [-9, 17],
        [11, 7]
      ],
      [
        [5901, 2008],
        [-5, -41],
        [12, -48],
        [34, -55],
        [59, -49],
        [22, -9],
        [-14, -64],
        [-43, -6],
        [-40, 29],
        [-32, -30],
        [-49, 4],
        [-11, -43],
        [-28, -55],
        [-55, -48],
        [-7, -26],
        [-52, -84],
        [11, 38],
        [-5, 35],
        [70, 77],
        [-5, 16],
        [-32, -17],
        [-48, 4],
        [-4, 34]
      ],
      [
        [5679, 1670],
        [36, 62],
        [-3, 79],
        [34, 35],
        [-5, 63],
        [-29, 28]
      ],
      [
        [6881, 594],
        [-10, 6],
        [-14, -91],
        [4, -19],
        [-11, -54],
        [-11, 0],
        [-2, -64],
        [-18, -12],
        [-6, -36],
        [-26, 27],
        [7, 27],
        [-20, 83],
        [44, 78],
        [0, 54],
        [-19, 34],
        [-37, -44],
        [-6, -43],
        [-32, -18],
        [-65, 75],
        [-24, -13],
        [-54, -97],
        [-13, -55],
        [-10, 28],
        [-21, -47],
        [-61, -3],
        [-38, -29],
        [-49, 41],
        [-38, 101],
        [-77, 72],
        [-74, 23],
        [-12, -30],
        [-1, -70],
        [-19, -76],
        [-16, 16],
        [-65, -51],
        [-8, 23],
        [-28, 8],
        [-24, 31],
        [-12, 54],
        [7, 33],
        [-18, 23],
        [-10, -31],
        [-25, 17],
        [-2, 32],
        [-37, 10],
        [1, -30],
        [-19, -38],
        [-17, 24],
        [9, 19],
        [-35, 0],
        [-7, -29],
        [-35, 8],
        [30, 32],
        [48, 2],
        [-3, 32],
        [31, 34],
        [-83, -21],
        [-14, 15],
        [-20, -18],
        [7, 44],
        [17, -8],
        [16, 49],
        [-17, -6],
        [-3, 38],
        [-26, -9],
        [0, 66],
        [-22, 19],
        [27, 21],
        [-1, 66],
        [-42, 15],
        [-12, 48],
        [-20, -30],
        [-39, 45],
        [27, 26],
        [-15, 70],
        [18, 9],
        [14, -37],
        [5, -58],
        [47, 26],
        [-17, 9],
        [-25, 79],
        [19, 2],
        [18, 57],
        [-21, -7],
        [2, 43],
        [-30, 56],
        [35, 57],
        [-3, 28],
        [-92, -30],
        [8, 41],
        [0, 87],
        [18, 21],
        [11, 47],
        [37, 58],
        [31, -3],
        [33, 17],
        [17, -37],
        [37, 0],
        [-12, 49],
        [40, -7],
        [-15, -21],
        [98, 1],
        [20, -10],
        [22, 19],
        [-42, 24],
        [24, 33],
        [64, 13],
        [42, 19],
        [-65, 0],
        [-37, 61],
        [5, 47],
        [18, 23],
        [74, -25],
        [28, -1],
        [15, 18],
        [63, -36],
        [45, 4],
        [19, 30],
        [0, 31],
        [82, 78],
        [15, 33],
        [39, 32],
        [35, 12],
        [45, 38],
        [113, -20],
        [41, 0],
        [28, 41],
        [21, -21],
        [-5, -20],
        [15, -50],
        [35, -35],
        [47, 27],
        [19, -30],
        [1, -45],
        [36, -60],
        [19, 37],
        [41, -23],
        [6, -30],
        [61, -40],
        [12, 28],
        [23, -44],
        [49, -16],
        [43, 10],
        [24, 24],
        [4, 0],
        [-249, -1160]
      ],
      [
        [4391, 331],
        [-25, 10],
        [-3, 25],
        [21, -12],
        [7, -23]
      ],
      [
        [4358, 378],
        [-10, 5],
        [8, 11],
        [9, -11],
        [-7, -5]
      ],
      [
        [2611, 3110],
        [12, -28],
        [-4, -23],
        [-18, 45],
        [10, 6]
      ],
      [
        [2590, 3179],
        [18, -13],
        [7, -12],
        [-34, 25],
        [9, 0]
      ],
      [
        [2509, 3378],
        [-6, -4],
        [-5, 18],
        [10, -1],
        [1, -13]
      ],
      [
        [2405, 3475],
        [6, -8],
        [-20, 4],
        [0, 21],
        [14, -17]
      ],
      [
        [3454, 3190],
        [8, 22],
        [55, 11]
      ],
      [
        [3517, 3223],
        [8, -80],
        [19, -53]
      ],
      [
        [3597, 2506],
        [-3, -7],
        [-4, -6]
      ],
      [
        [3590, 2493],
        [-3, 5],
        [-5, -11]
      ],
      [
        [3582, 2487],
        [-24, -19],
        [-1, -27],
        [-46, -41],
        [-15, -33],
        [9, -23],
        [-92, -43],
        [-25, 40],
        [-32, 7],
        [-6, 38],
        [-26, -7],
        [12, 27],
        [-28, 4],
        [-11, -26],
        [-29, 6],
        [-6, 24],
        [-35, 1],
        [-11, 25],
        [-19, -5],
        [-62, -68],
        [-30, -49],
        [-9, -45],
        [2, -106],
        [14, -33]
      ],
      [
        [2947, 2153],
        [1, 30],
        [-32, -4]
      ],
      [
        [2554, 2395],
        [15, 4],
        [20, 49],
        [33, 297],
        [-8, -10],
        [14, 236],
        [5, 21],
        [36, -67],
        [2, 27],
        [-50, 79],
        [14, 53],
        [-4, 97],
        [-78, 67],
        [-6, 36],
        [-30, 51],
        [14, 63],
        [-19, 31],
        [2, 40],
        [-15, -17],
        [-31, 37],
        [19, 11],
        [-12, 28],
        [-36, -8],
        [5, 36],
        [-34, -14],
        [-51, 55],
        [-36, 6],
        [-10, 23],
        [-49, -22],
        [-7, 46],
        [-28, 26],
        [45, 11],
        [-2, 24],
        [-27, 30],
        [21, 29],
        [-44, -19],
        [-3, 41],
        [24, 37],
        [29, 4],
        [37, 25],
        [14, -29],
        [4, 29],
        [27, -12],
        [7, 41],
        [47, 9],
        [46, -99],
        [42, 48],
        [11, -29],
        [41, 37],
        [1, -25],
        [52, 11],
        [-20, 23],
        [0, 77],
        [-6, 53],
        [-24, 48],
        [-13, 89],
        [38, -19],
        [23, 16],
        [19, -24],
        [-9, -18],
        [13, -35],
        [41, -18],
        [46, -7],
        [21, -17],
        [44, 38],
        [28, 9],
        [-35, 12],
        [15, 65],
        [49, 40],
        [56, 22],
        [35, 63],
        [6, 25],
        [4, 161],
        [45, 39],
        [62, 21]
      ],
      [
        [3039, 4502],
        [-1, 0],
        [8, -67]
      ],
      [
        [3046, 4435],
        [22, -32],
        [40, 12],
        [15, -66],
        [42, -23],
        [1, -34],
        [41, 5],
        [20, -23],
        [-7, -76],
        [33, -12],
        [25, 16],
        [3, 26],
        [21, 15],
        [-9, -45],
        [8, -52],
        [10, 3],
        [59, -83],
        [35, 12]
      ],
      [
        [3405, 4078],
        [20, -27],
        [19, 15],
        [24, -10]
      ],
      [
        [3468, 4056],
        [17, -6],
        [23, -72],
        [14, 10],
        [49, -28],
        [14, 18],
        [29, -38],
        [32, 1],
        [30, -22],
        [-11, -37],
        [-33, -57],
        [-6, -70],
        [-21, -71],
        [6, -26],
        [-11, -60],
        [7, -55]
      ],
      [
        [3607, 3543],
        [-23, -42],
        [-42, 19],
        [-16, -40],
        [20, -3],
        [-50, -97],
        [-18, -11],
        [-1, -51],
        [-34, -45],
        [-8, -48],
        [9, -17],
        [-20, -62],
        [37, 30],
        [-7, 14]
      ],
      [
        [3737, 2027],
        [-22, 55],
        [19, 87],
        [44, 45],
        [20, -14],
        [6, 87],
        [9, 7],
        [7, -51],
        [-3, -51],
        [9, -28],
        [2, -118],
        [-17, -43],
        [0, -68],
        [-20, -92],
        [-49, 53],
        [15, 36],
        [-25, 9],
        [5, 56],
        [-18, 10],
        [18, 20]
      ],
      [
        [3385, 6704],
        [19, -6],
        [-3, -11],
        [-20, 14],
        [4, 3]
      ],
      [
        [3367, 6712],
        [-8, 12],
        [4, 9],
        [6, -9],
        [-2, -12]
      ],
      [
        [3430, 6731],
        [-9, 3],
        [3, 11],
        [16, -2],
        [-10, -12]
      ],
      [
        [3348, 6747],
        [2, -33],
        [-14, 7],
        [4, 60],
        [8, -34]
      ],
      [
        [3341, 6894],
        [12, -21],
        [-27, 4],
        [3, 28],
        [12, -11]
      ],
      [
        [3373, 6887],
        [-22, -2],
        [-6, 31],
        [19, 8],
        [9, -37]
      ],
      [
        [3391, 6959],
        [-2, -41],
        [-15, -4],
        [-6, 42],
        [23, 3]
      ],
      [
        [3346, 6962],
        [1, -22],
        [-11, 13],
        [4, 17],
        [6, -8]
      ],
      [
        [3327, 7029],
        [2, -33],
        [-19, 25],
        [3, 42],
        [14, -34]
      ],
      [
        [3319, 7084],
        [15, -6],
        [4, -23],
        [-22, 25],
        [3, 4]
      ],
      [
        [3297, 7196],
        [11, -15],
        [-5, -3],
        [-12, 17],
        [6, 1]
      ],
      [
        [3287, 7222],
        [-3, -10],
        [-7, 19],
        [6, 6],
        [4, -15]
      ],
      [
        [3304, 7254],
        [11, -7],
        [-21, -16],
        [0, 26],
        [10, -3]
      ],
      [
        [3311, 7460],
        [20, -11],
        [-23, -21],
        [-14, 17],
        [17, 15]
      ],
      [
        [3324, 7490],
        [9, -3],
        [-6, -19],
        [-12, 29],
        [9, -7]
      ],
      [
        [3396, 7570],
        [8, -25],
        [-26, -4],
        [2, 27],
        [16, 2]
      ],
      [
        [3385, 7579],
        [15, 8],
        [-2, -10],
        [-23, 3],
        [10, -1]
      ],
      [
        [3437, 7584],
        [-22, -26],
        [-8, 29],
        [15, 18],
        [15, -21]
      ],
      [
        [3453, 7609],
        [12, -11],
        [-26, 1],
        [-8, 9],
        [22, 1]
      ],
      [
        [3530, 7689],
        [1, -9],
        [-27, -12],
        [2, 20],
        [24, 1]
      ],
      [
        [3520, 7722],
        [12, 1],
        [-4, -23],
        [-11, 10],
        [3, 12]
      ],
      [
        [3644, 7784],
        [-14, -16],
        [-12, 9],
        [5, 11],
        [21, -4]
      ],
      [
        [3617, 7767],
        [-17, -20],
        [-14, 30],
        [19, -9],
        [12, -1]
      ],
      [
        [3688, 7808],
        [-13, -1],
        [-2, 15],
        [7, 0],
        [8, -14]
      ],
      [
        [3675, 7805],
        [-20, -6],
        [-9, 12],
        [16, 17],
        [13, -23]
      ],
      [
        [3665, 7855],
        [-33, 9],
        [22, 27],
        [20, -22],
        [-9, -14]
      ],
      [
        [3743, 7982],
        [3, -23],
        [-9, -9],
        [-48, -5],
        [54, 37]
      ],
      [
        [4032, 8209],
        [10, -12],
        [-3, -13],
        [-9, 6],
        [2, 19]
      ],
      [
        [4016, 8203],
        [21, -38],
        [-26, 9],
        [-11, 40],
        [16, -11]
      ],
      [
        [4029, 8214],
        [-4, -14],
        [-14, 20],
        [13, 5],
        [5, -11]
      ],
      [
        [4014, 8284],
        [-15, -2],
        [-29, -12],
        [30, 26],
        [14, -12]
      ],
      [
        [3970, 8273],
        [-9, -5],
        [5, 21],
        [37, 13],
        [-33, -29]
      ],
      [
        [4077, 8339],
        [-24, -18],
        [-5, 3],
        [8, 15],
        [21, 0]
      ],
      [
        [4132, 8350],
        [-12, -26],
        [-18, 6],
        [22, 38],
        [8, -18]
      ],
      [
        [4148, 8448],
        [9, -32],
        [-45, -48],
        [4, 39],
        [32, 41]
      ],
      [
        [4097, 8500],
        [-4, -29],
        [-18, 7],
        [8, 21],
        [14, 1]
      ],
      [
        [4185, 8576],
        [-28, -26],
        [-13, 3],
        [12, 25],
        [29, -2]
      ],
      [
        [4171, 8633],
        [5, -19],
        [-14, -14],
        [-26, -13],
        [35, 46]
      ],
      [
        [4193, 8666],
        [8, -16],
        [-13, -6],
        [-5, 9],
        [10, 13]
      ],
      [
        [4210, 8701],
        [-7, -21],
        [-11, 8],
        [2, 16],
        [16, -3]
      ],
      [
        [4354, 8888],
        [-4, -29],
        [-24, 18],
        [8, 16],
        [20, -5]
      ],
      [
        [4372, 8973],
        [-1, -7],
        [-18, -6],
        [16, 18],
        [3, -5]
      ],
      [
        [4452, 9123],
        [20, -13],
        [-36, -3],
        [1, 15],
        [15, 1]
      ],
      [
        [4470, 9121],
        [-10, 0],
        [-2, 8],
        [7, 12],
        [5, -20]
      ],
      [
        [4226, 9146],
        [4, -28],
        [-39, -40],
        [22, 62],
        [13, 6]
      ],
      [
        [4259, 9146],
        [-17, -20],
        [-7, 21],
        [29, 17],
        [-5, -18]
      ],
      [
        [4428, 9197],
        [-11, 0],
        [10, 15],
        [7, -6],
        [-6, -9]
      ],
      [
        [4354, 9216],
        [-5, -17],
        [-5, 12],
        [-9, 10],
        [19, -5]
      ],
      [
        [4323, 9204],
        [8, -25],
        [-30, -5],
        [-14, -24],
        [-18, 16],
        [2, 31],
        [52, 7]
      ],
      [
        [4457, 9250],
        [-44, -49],
        [-64, -29],
        [34, 45],
        [-12, 15],
        [29, 16],
        [57, 2]
      ],
      [
        [4597, 9248],
        [-34, -10],
        [10, 33],
        [18, 6],
        [6, -29]
      ],
      [
        [4413, 9266],
        [-19, 17],
        [45, -1],
        [-12, -16],
        [-14, 0]
      ],
      [
        [4676, 9338],
        [-30, -10],
        [1, 14],
        [19, 24],
        [10, -28]
      ],
      [
        [4689, 9365],
        [0, 17],
        [24, -15],
        [-24, -20],
        [0, 18]
      ],
      [
        [4435, 9370],
        [-13, 3],
        [4, 11],
        [9, 0],
        [0, -14]
      ],
      [
        [4599, 9397],
        [16, -2],
        [0, -22],
        [-34, 22],
        [18, 2]
      ],
      [
        [4709, 9401],
        [-6, 12],
        [11, 14],
        [11, -8],
        [-16, -18]
      ],
      [
        [4531, 9410],
        [-44, -16],
        [16, 39],
        [60, 57],
        [-4, -47],
        [-28, -33]
      ],
      [
        [4870, 9644],
        [22, -37],
        [-26, -17],
        [3, -25],
        [-71, -16],
        [-22, 16],
        [33, 1],
        [-12, 32],
        [20, 22],
        [48, -2],
        [5, 26]
      ],
      [
        [5074, 9624],
        [-12, -1],
        [2, 26],
        [17, 3],
        [-7, -28]
      ],
      [
        [6126, 9633],
        [7, -5],
        [-42, -16],
        [19, 42],
        [16, -21]
      ],
      [
        [4965, 9638],
        [-22, -5],
        [5, 22],
        [37, 15],
        [-20, -32]
      ],
      [
        [5110, 9687],
        [14, -7],
        [-18, -17],
        [-20, 14],
        [24, 10]
      ],
      [
        [4913, 9697],
        [40, -21],
        [-19, -43],
        [-32, -13],
        [-44, 43],
        [13, 19],
        [42, 15]
      ],
      [
        [4866, 9695],
        [20, 2],
        [-31, -24],
        [0, 35],
        [11, -13]
      ],
      [
        [5101, 9699],
        [-8, -2],
        [1, 22],
        [10, -12],
        [-3, -8]
      ],
      [
        [4950, 9703],
        [-21, 5],
        [1, 12],
        [9, 0],
        [11, -17]
      ],
      [
        [5088, 9709],
        [-21, -19],
        [-23, 16],
        [23, 36],
        [27, -11],
        [-6, -22]
      ],
      [
        [4911, 9747],
        [3, -33],
        [-14, -4],
        [-12, 9],
        [23, 28]
      ],
      [
        [4967, 9746],
        [13, -22],
        [37, -16],
        [-37, -14],
        [-20, 43],
        [7, 9]
      ],
      [
        [5195, 9750],
        [-6, 5],
        [4, 29],
        [9, -9],
        [-7, -25]
      ],
      [
        [5303, 9783],
        [30, -16],
        [5, -21],
        [-63, 11],
        [5, 26],
        [23, 0]
      ],
      [
        [5394, 9846],
        [18, -40],
        [-31, -41],
        [-32, -10],
        [-23, 46],
        [68, 45]
      ],
      [
        [5430, 9871],
        [34, -24],
        [-42, -27],
        [-12, 50],
        [20, 1]
      ],
      [
        [5458, 9954],
        [1, -27],
        [-20, 12],
        [6, 20],
        [13, -5]
      ],
      [
        [5537, 9977],
        [0, -19],
        [-19, 9],
        [12, 14],
        [7, -4]
      ],
      [
        [5638, 9995],
        [24, -30],
        [33, -13],
        [-73, -20],
        [-28, 31],
        [44, 32]
      ],
      [
        [1861, 9999],
        [-4, -39],
        [-79, -26],
        [-29, -33],
        [-17, 16],
        [68, 40],
        [21, 35],
        [40, 7]
      ],
      [
        [6218, 9625],
        [10, -38],
        [-9, -39],
        [-38, 2],
        [-25, 23],
        [-18, -49],
        [-25, -23],
        [-64, -22],
        [-11, -44],
        [-32, -24]
      ],
      [
        [6006, 9411],
        [-14, 22],
        [4, 30],
        [54, 68],
        [-24, 57],
        [-82, 36],
        [-26, 25],
        [-31, 48],
        [-37, -13],
        [-52, -33],
        [-27, 10],
        [-40, -6],
        [-34, -55],
        [-19, -6],
        [-17, -47],
        [-1, -42],
        [-16, -48],
        [8, -50],
        [-16, -35],
        [-52, -20],
        [-9, -47],
        [-29, -20],
        [-21, 28],
        [-37, 11],
        [-46, 29],
        [-22, -27],
        [-61, -27],
        [-19, 19],
        [-67, 7],
        [-6, 30],
        [-39, 52],
        [-41, 69],
        [-39, 7],
        [-31, -29],
        [14, -26],
        [-14, -13],
        [-32, 17],
        [-14, -18]
      ],
      [
        [5071, 9414],
        [-58, -5],
        [26, -30],
        [-11, -68],
        [-31, -33],
        [31, -17],
        [-35, -35],
        [-100, 42],
        [-44, 0],
        [-24, 20],
        [-29, -11],
        [-1, -103],
        [-30, -52],
        [-65, 37],
        [-58, -53],
        [-37, -97],
        [-31, -13],
        [-8, -24],
        [35, -60],
        [-3, -41],
        [-42, -46],
        [-42, -78],
        [-27, -30],
        [6, -59],
        [-47, -33],
        [-59, -8],
        [12, -77],
        [-9, -39],
        [-5, -105],
        [-23, -63],
        [-75, -138],
        [53, -39],
        [5, -65],
        [-25, -53],
        [-79, 22],
        [-62, -36],
        [-57, -99],
        [3, -39],
        [-23, -45],
        [26, -79],
        [-14, -21],
        [6, -52],
        [-7, -40],
        [25, -97],
        [-17, -139],
        [29, -39],
        [21, -9],
        [30, -49],
        [-22, -91],
        [-48, -16],
        [14, -62],
        [25, -65],
        [-13, -60],
        [3, -49],
        [-42, -59],
        [-32, -8],
        [5, -28],
        [-24, -58],
        [15, -84],
        [-17, -90],
        [-24, -7],
        [-1, 26]
      ],
      [
        [4040, 6665],
        [-8, 30],
        [-52, 26],
        [-10, -9],
        [-25, 71],
        [7, 47],
        [-11, 36],
        [10, 36],
        [-13, 7],
        [-5, -41],
        [12, -45],
        [-13, -15],
        [-1, -73],
        [-13, 7],
        [-5, -40],
        [-40, -46],
        [-30, 0],
        [-47, -35],
        [20, 1],
        [-106, -158],
        [-17, -3],
        [-26, -39],
        [-10, 34],
        [-13, -40],
        [-38, -17],
        [-65, 3],
        [-53, 25],
        [19, 28],
        [-78, 45],
        [-4, 22],
        [-29, 15],
        [-26, 63],
        [9, 78],
        [21, -31],
        [33, -6],
        [-18, 50],
        [42, 52],
        [-20, 35],
        [-45, -27],
        [-9, 30],
        [-13, -37],
        [-33, 63],
        [34, 62],
        [29, -16],
        [17, 22],
        [-28, 26],
        [36, 28],
        [20, 71],
        [47, 68],
        [-42, -30],
        [-37, -53],
        [0, -37],
        [-20, 4],
        [3, 33],
        [-16, 21],
        [-16, -20],
        [-22, 13],
        [-5, 49],
        [14, 37],
        [13, -11],
        [-11, 16],
        [41, 36],
        [-1, -55],
        [-15, -8],
        [8, -8],
        [10, 15],
        [-2, 77],
        [-18, -34],
        [-26, -18],
        [-42, 65],
        [43, -25],
        [-2, 31],
        [-27, 6],
        [-3, 56],
        [46, -6],
        [51, 26],
        [44, -20],
        [36, 35],
        [41, -26],
        [43, 17],
        [2, 13],
        [-46, -22],
        [-51, 41],
        [-7, -40],
        [-30, 19],
        [-68, -13],
        [-21, -15],
        [-14, 28],
        [-26, 9],
        [-8, 55],
        [46, 37],
        [-41, 21],
        [-2, 29],
        [41, 29],
        [3, 17],
        [41, -19],
        [89, -5],
        [-123, 33],
        [-31, -11],
        [18, 35],
        [-27, 38],
        [12, 14],
        [31, -42],
        [-3, 34],
        [56, 3],
        [11, 30],
        [76, 40],
        [-45, 2],
        [26, 21],
        [-31, -2],
        [7, 22],
        [33, -14],
        [18, 26],
        [36, 0],
        [48, -30],
        [0, 36],
        [35, 15],
        [33, -3],
        [-6, 16],
        [-78, -25],
        [-8, 16],
        [-38, -6],
        [-7, 57],
        [41, 22],
        [25, -27],
        [54, 17],
        [12, 37],
        [29, -41],
        [-1, -22],
        [32, -1],
        [-51, 65],
        [43, 5],
        [-2, 11],
        [-12, -3],
        [-18, 19],
        [25, 5],
        [2, -5],
        [-3, 18],
        [32, 14],
        [7, 23],
        [49, -19],
        [-11, 40],
        [60, 38],
        [29, -60],
        [-14, -27],
        [31, -1],
        [-1, 31],
        [23, 7],
        [56, -13],
        [13, 13],
        [-27, 23],
        [40, 47],
        [48, 22],
        [-41, 24],
        [45, 36],
        [-27, 4],
        [-33, -24],
        [13, -30],
        [-19, -29],
        [-55, -41],
        [-56, -18],
        [-14, 49],
        [26, 25],
        [-54, -33],
        [0, 30],
        [73, 45],
        [-29, 5],
        [26, 66],
        [49, 45],
        [0, 24],
        [32, 6],
        [8, 36],
        [23, -43],
        [23, -14],
        [16, 48],
        [-13, 37],
        [50, 26],
        [-23, 5],
        [30, 36],
        [-48, -39],
        [-27, 3],
        [18, 28],
        [49, 18],
        [17, 22],
        [19, -8],
        [50, 24],
        [37, 57],
        [-48, -52],
        [-18, 34],
        [33, 40],
        [-7, 48],
        [-19, -15],
        [-7, 28],
        [50, 89],
        [27, 28],
        [-36, -6],
        [18, 25],
        [74, 29],
        [50, -1],
        [-44, 14],
        [-62, -25],
        [33, 28],
        [-36, 16],
        [19, 14],
        [9, 61],
        [26, 11],
        [6, 36],
        [30, 1],
        [-24, 35],
        [71, 12],
        [15, 49],
        [48, 15],
        [13, -20],
        [22, 20],
        [30, -13],
        [11, 13],
        [-44, 9],
        [11, 18],
        [-56, -26],
        [2, 16],
        [-40, -9],
        [37, 50],
        [19, -13],
        [25, 18],
        [-36, 12],
        [31, 21],
        [52, -29],
        [45, 31],
        [-42, -17],
        [-26, 4],
        [-7, 33],
        [45, 28],
        [-25, 15],
        [-61, -44],
        [-5, 24],
        [25, 5],
        [-25, 21],
        [23, 19],
        [34, -1],
        [55, 17],
        [20, 16],
        [-6, 0],
        [-8, -7],
        [-15, 7],
        [-14, 4],
        [-34, 3],
        [26, 27],
        [47, -1],
        [4, 32],
        [15, -21],
        [-7, -38],
        [22, -40],
        [7, 29],
        [19, -25],
        [4, 32],
        [-17, 17],
        [10, 40],
        [-30, 25],
        [48, -17],
        [-42, 26],
        [53, 15],
        [14, -22],
        [81, 28],
        [0, 29],
        [-56, -27],
        [-58, 1],
        [11, 56],
        [68, 31],
        [52, 37],
        [-31, 2],
        [30, 53],
        [44, 21],
        [-8, 32],
        [33, 55],
        [34, -51],
        [37, 9],
        [-52, 31],
        [3, 20],
        [39, 9],
        [19, -43],
        [38, -14],
        [-5, -33],
        [19, -1],
        [-14, 44],
        [-22, -1],
        [-23, 50],
        [16, 48],
        [23, 13],
        [54, 6],
        [-12, -34],
        [20, -15],
        [2, 38],
        [16, 1],
        [17, 48],
        [28, -15],
        [-25, -130],
        [-31, -39],
        [40, 33],
        [25, 51],
        [3, 52],
        [73, 29],
        [25, 42],
        [58, -55],
        [3, 43],
        [-11, 20],
        [-36, 9],
        [-35, 32],
        [43, 29],
        [32, -45],
        [-5, 33],
        [49, 7],
        [12, -13],
        [67, -11],
        [7, -49],
        [34, -21],
        [23, 20],
        [-41, 19],
        [26, 12],
        [-14, 24],
        [32, 18],
        [-6, 20],
        [46, 40],
        [44, -8],
        [-22, 19],
        [26, 38],
        [30, -17],
        [-8, 33],
        [-28, 4],
        [12, 28],
        [24, -24],
        [5, 55],
        [54, -15],
        [11, -36],
        [20, 18],
        [52, 10],
        [5, -10],
        [-95, -97],
        [18, 7],
        [-4, -61],
        [-25, -21],
        [-2, -41],
        [20, 0],
        [45, 60],
        [-14, 7],
        [67, 82],
        [6, 24],
        [34, 43],
        [36, 24],
        [6, -36],
        [-11, -32],
        [-34, -17],
        [35, -2],
        [-17, -75],
        [71, 71],
        [0, 32],
        [44, 29],
        [-45, 20],
        [25, 7],
        [-10, 23],
        [33, -20],
        [1, 38],
        [35, -16],
        [35, 13],
        [-1, -24],
        [41, -4],
        [-11, -32],
        [-25, -21],
        [-52, 1],
        [42, -15],
        [-55, -36],
        [74, 27],
        [-8, -25],
        [-44, -36],
        [37, -23],
        [-1, -71],
        [10, 76],
        [31, 83],
        [30, 42],
        [30, 3],
        [39, -27],
        [-6, -25],
        [48, 9],
        [-11, -29],
        [35, 25],
        [91, -81],
        [13, 11],
        [18, -46],
        [-60, -10],
        [-44, -49],
        [-104, 14],
        [-53, 13],
        [-17, -14],
        [121, -41],
        [-27, -19],
        [33, 2],
        [-6, -47],
        [35, -2],
        [24, 16],
        [-5, 25],
        [36, -16],
        [40, -3]
      ],
      [
        [3769, 7934],
        [1, 7],
        [9, 0],
        [5, -6],
        [-13, -4],
        [14, -13],
        [-75, -37],
        [-25, 9],
        [30, 37],
        [47, 14],
        [7, -7]
      ],
      [
        [4440, 9399],
        [21, -13],
        [12, -8],
        [4, -69],
        [-30, -21],
        [-28, 17],
        [39, 17],
        [-2, 15],
        [-59, -36],
        [-29, 17],
        [36, 22],
        [36, 7],
        [0, 52]
      ],
      [
        [5318, 9854],
        [38, 23],
        [-15, 17],
        [33, -3],
        [8, 17],
        [-14, -44],
        [-45, -39],
        [-82, -15],
        [22, 35],
        [-37, -3],
        [42, 27],
        [50, -15]
      ],
      [
        [4617, 9323],
        [-12, -43],
        [-43, -4],
        [-14, -38],
        [-24, 9],
        [-14, -35],
        [-31, 15],
        [-24, -11],
        [-15, 0],
        [30, 40],
        [-4, 28],
        [31, 20],
        [-7, 48],
        [22, 39],
        [29, 2],
        [-4, -49],
        [14, -5],
        [-20, -42],
        [32, 36],
        [17, 44],
        [21, -14],
        [16, -40]
      ],
      [
        [4653, 9457],
        [26, 32],
        [-22, 24],
        [50, -5],
        [12, 13],
        [-25, 14],
        [6, 16],
        [36, -21],
        [22, 36],
        [24, -27],
        [3, -39],
        [-20, -9],
        [7, -38],
        [-53, -7],
        [-75, -28],
        [26, 22],
        [-17, 17]
      ],
      [
        [3846, 3534],
        [-44, 36],
        [-28, 38],
        [12, -41]
      ],
      [
        [3786, 3567],
        [-31, -5],
        [-34, 39],
        [-23, -35],
        [6, -22],
        [-97, -1]
      ],
      [
        [3468, 4056],
        [17, 93],
        [-31, 25],
        [-12, 63]
      ],
      [
        [3442, 4237],
        [3, 26],
        [26, 28],
        [-5, 45],
        [-15, 3],
        [-2, 34],
        [-21, 37]
      ],
      [
        [3563, 5092],
        [12, 25],
        [-31, 11],
        [7, 58],
        [15, 22],
        [82, 15],
        [24, -46],
        [-12, -14],
        [17, -25],
        [12, 27],
        [-7, 26],
        [35, -16],
        [-9, 38],
        [10, 47],
        [32, -7],
        [39, 7]
      ],
      [
        [3789, 5260],
        [-22, 9],
        [-20, 40],
        [1, 60],
        [-21, 5],
        [-3, 31],
        [26, 8],
        [17, 25],
        [-36, 62],
        [-3, 44]
      ],
      [
        [3815, 5521],
        [16, 15],
        [51, -53],
        [-2, -35],
        [85, -62],
        [34, 7],
        [-1, -44],
        [-36, -38],
        [16, -21],
        [32, 14],
        [31, -30],
        [5, 25],
        [26, 43],
        [42, 4],
        [27, 36],
        [18, 47],
        [42, -30],
        [18, 19],
        [8, -42],
        [40, -49],
        [27, 14],
        [9, -24],
        [3, 29],
        [45, -64]
      ],
      [
        [4351, 5282],
        [-4, -8],
        [3, -8]
      ],
      [
        [4350, 5266],
        [-37, -9],
        [8, 61],
        [-15, -10],
        [11, -24],
        [-10, -18],
        [18, -29],
        [32, -20]
      ],
      [
        [4357, 5217],
        [16, -117],
        [-7, -61],
        [-22, -25],
        [-3, -29],
        [59, -75],
        [-12, -43],
        [17, -46],
        [8, -48],
        [-20, -75],
        [15, -35],
        [1, -43],
        [24, -19],
        [9, -58],
        [-24, -103]
      ],
      [
        [4418, 4440],
        [-22, -4],
        [-14, 46],
        [-22, 6],
        [6, -42],
        [-84, -46],
        [-17, -32],
        [-24, -4],
        [-25, -24],
        [-56, -29],
        [-26, -62],
        [-23, 41],
        [19, -73],
        [31, -38],
        [-15, -45],
        [46, -113],
        [23, -9],
        [20, -49],
        [34, -49],
        [14, 3],
        [24, -50]
      ],
      [
        [4307, 3867],
        [-12, -67],
        [-22, 18],
        [-13, -57],
        [-41, -31],
        [-33, -40],
        [28, -75],
        [-11, -33],
        [14, -3],
        [2, -61],
        [-29, 17],
        [-2, 31],
        [-30, -10],
        [-35, 21],
        [-2, -28],
        [-61, -4],
        [-41, -52],
        [-31, -2],
        [-21, 33],
        [-43, 16],
        [5, -37],
        [-16, -37],
        [-41, 61],
        [-26, 7]
      ],
      [
        [3789, 5260],
        [10, -2],
        [30, -68],
        [-19, 63],
        [-11, 5],
        [-2, 4],
        [-8, -2]
      ],
      [
        [4046, 5305],
        [-3, -14],
        [-11, 3],
        [11, 14],
        [3, -3]
      ],
      [
        [3753, 5427],
        [-9, 9],
        [4, 5],
        [14, 1],
        [-9, -15]
      ],
      [
        [4019, 5430],
        [6, -18],
        [-34, 15],
        [13, 19],
        [15, -16]
      ],
      [
        [4259, 5477],
        [27, -18],
        [-7, -31],
        [22, -34],
        [-30, 0],
        [-26, -25],
        [-17, 23],
        [15, 13],
        [-9, 44],
        [25, 28]
      ],
      [
        [3718, 5489],
        [-20, 6],
        [7, 10],
        [10, 1],
        [3, -17]
      ],
      [
        [3697, 5544],
        [-11, -1],
        [9, 39],
        [-2, -18],
        [4, -20]
      ],
      [
        [3787, 3566],
        [1, -3]
      ],
      [
        [3787, 3566],
        [0, 0]
      ],
      [
        [1637, 5304],
        [0, -38],
        [-11, 21],
        [-23, 7],
        [34, 10]
      ],
      [
        [2051, 5326],
        [18, -26],
        [-26, 0],
        [11, -38],
        [3, -60],
        [14, -18],
        [-3, -51],
        [14, -117],
        [-25, -82],
        [1, -33],
        [-20, -51],
        [2, -49],
        [-52, 16],
        [-7, -24],
        [-60, -7],
        [-18, -37],
        [-27, -10],
        [-19, -34],
        [-28, -7],
        [-50, -62],
        [-18, 6],
        [-47, -25],
        [-14, 11],
        [-47, -28],
        [30, 46],
        [3, 31],
        [-57, -36],
        [-6, 21],
        [39, 45],
        [-39, -22],
        [-39, 35],
        [19, 28],
        [37, 24],
        [3, 16],
        [-62, -8],
        [-1, 21],
        [33, 29],
        [34, -14],
        [4, 38],
        [-13, 11],
        [30, 19],
        [8, 26],
        [38, 0],
        [36, 20],
        [-5, 30],
        [-17, -37],
        [-45, 4],
        [-31, -12],
        [37, 43],
        [16, 50],
        [-14, 1],
        [23, 57],
        [38, -1],
        [-1, 34],
        [-77, -3],
        [3, 30],
        [-32, -13],
        [11, 20],
        [-26, -2],
        [-18, 47],
        [37, 17],
        [-6, 39],
        [38, 10],
        [0, 27],
        [-39, -11],
        [12, 23],
        [-23, 76],
        [19, 30],
        [70, -13],
        [9, -37],
        [10, 40],
        [65, -4],
        [-21, 22],
        [44, 45],
        [16, 34],
        [-61, -7],
        [-14, 21],
        [27, 36],
        [26, 2],
        [-16, 28],
        [21, 61],
        [54, 12],
        [17, 19],
        [20, -64],
        [-7, 68],
        [22, 5],
        [-6, 21],
        [50, -45],
        [-34, -41]
      ],
      [
        [1942, 5592],
        [-18, -18],
        [-16, -72],
        [-33, -3],
        [10, -32],
        [-48, -41],
        [38, -71],
        [60, -25],
        [29, 82],
        [19, -19],
        [10, -38],
        [17, -9],
        [2, -37],
        [39, 17]
      ],
      [
        [6102, 3005],
        [30, 48],
        [6, 6],
        [-25, -40],
        [-11, -14]
      ],
      [
        [6420, 3126],
        [16, -4],
        [22, 3],
        [7, -12],
        [-45, 13]
      ],
      [
        [6365, 3153],
        [-46, 17],
        [-14, 11],
        [51, -21],
        [9, -7]
      ],
      [
        [5240, 3768],
        [3, 50],
        [19, 31],
        [4, 40],
        [20, 61]
      ],
      [
        [5286, 3950],
        [35, -20],
        [-17, 47],
        [3, 54],
        [-10, 44],
        [52, 118],
        [73, 118],
        [25, 4],
        [15, 37],
        [-15, 79],
        [17, 3],
        [-24, 46],
        [-4, 35],
        [-27, 56],
        [-4, 49]
      ],
      [
        [5405, 4620],
        [17, 35],
        [26, -17],
        [29, 37],
        [17, 44],
        [37, 1],
        [52, 18],
        [65, -6],
        [72, -21],
        [50, -27],
        [37, -2],
        [8, -41],
        [48, 0],
        [5, -36],
        [10, 38],
        [29, -12],
        [15, 26],
        [16, -35],
        [29, 7],
        [14, -41],
        [15, 43],
        [29, 18],
        [22, -70],
        [34, 32],
        [26, -14],
        [33, 14],
        [24, -49],
        [20, -19],
        [11, 28],
        [-14, 72],
        [17, 59],
        [33, 70],
        [33, -8],
        [25, 20],
        [33, -5]
      ],
      [
        [6322, 4779],
        [14, -17],
        [38, 12],
        [14, 66],
        [64, -21],
        [30, 34],
        [32, -4],
        [6, -19],
        [31, 19],
        [28, -51],
        [5, -60],
        [32, -36],
        [-1, -29],
        [-28, -9],
        [20, -85],
        [-13, -33],
        [48, -6],
        [15, -17],
        [39, 5],
        [20, -52],
        [22, -89],
        [-11, -12],
        [8, -40],
        [28, -36],
        [16, 22],
        [30, -1],
        [19, -38],
        [13, 6],
        [23, -28],
        [36, 37],
        [58, 23],
        [19, -36],
        [14, -58],
        [31, -49],
        [18, 11],
        [1, 33],
        [58, -40],
        [28, -30],
        [27, 15],
        [17, -36],
        [26, -1],
        [27, -50],
        [35, 13],
        [-8, -36],
        [11, -58],
        [-25, -54],
        [-27, -7],
        [9, -34],
        [22, -12],
        [-28, -29],
        [-8, -44],
        [20, -1],
        [20, -85],
        [-17, -42],
        [-9, -78],
        [-104, 4],
        [-11, -47],
        [-43, -19],
        [-17, -87],
        [2, -52]
      ],
      [
        [7046, 3411],
        [-71, -3],
        [-28, -56],
        [-8, 14],
        [-28, -18],
        [-24, -40],
        [-12, 15],
        [-57, -30],
        [-32, -4],
        [-58, -78],
        [-11, 18],
        [-24, -44],
        [-30, -29],
        [8, -66],
        [19, -70],
        [32, -82],
        [17, -20],
        [24, 8],
        [18, 39],
        [14, -29],
        [18, 27],
        [50, -10],
        [-19, -53],
        [3, -45],
        [-25, -17],
        [-20, 12],
        [-22, -15],
        [-24, 32],
        [-70, -75],
        [-28, -5],
        [-33, -25],
        [-16, -51],
        [-41, -44],
        [-27, 5],
        [-38, 45],
        [21, 15],
        [-6, 46],
        [12, 39],
        [-7, 45],
        [-16, 25],
        [-17, -8],
        [-41, 54],
        [-43, -4],
        [1, 32],
        [38, 48],
        [102, 82],
        [-14, 13],
        [-4, 46],
        [-11, -28],
        [-31, 49],
        [-13, -23],
        [-37, -1],
        [-33, -16],
        [-27, 15],
        [-49, 59],
        [21, 28],
        [-48, 26],
        [87, -21],
        [19, 35],
        [-56, 9],
        [-10, 47],
        [-9, -47],
        [-42, 5],
        [-55, -12],
        [-27, -23],
        [5, -20],
        [-34, -100],
        [-40, -71],
        [-17, 7],
        [-6, -34],
        [-23, -29],
        [-10, 58],
        [-4, -94],
        [14, -3],
        [3, -42],
        [-11, -29]
      ],
      [
        [6085, 2895],
        [-1, 36],
        [-36, 27],
        [-61, -59],
        [-51, 25],
        [-15, 39]
      ],
      [
        [5921, 2963],
        [32, 10],
        [-1, 44],
        [30, 49],
        [2, 33],
        [22, 11],
        [7, 50],
        [-9, 21],
        [1, 53],
        [25, 23],
        [4, -49],
        [29, 35],
        [15, -34],
        [13, 30],
        [15, -35],
        [27, 9],
        [-19, 39],
        [2, 79],
        [-42, 38],
        [5, 28],
        [-5, 76],
        [-17, -12],
        [-32, 69],
        [13, 92],
        [-13, 29],
        [-19, -12],
        [-18, 49],
        [-31, 10],
        [-17, 22],
        [-32, 4],
        [-37, 57],
        [-28, 6],
        [-37, -31],
        [-37, 9],
        [-25, -37]
      ],
      [
        [5744, 3728],
        [-35, -12],
        [-15, -61],
        [-102, -26],
        [-16, -34],
        [-26, -17],
        [-37, 63],
        [-37, -12],
        [-51, 25],
        [-47, 1],
        [-27, 28],
        [-27, -40]
      ],
      [
        [5324, 3643],
        [-15, 46],
        [-17, -4],
        [-12, 39],
        [-15, 0],
        [-9, 44],
        [-16, 0]
      ],
      [
        [6138, 3212],
        [33, -77],
        [9, 14],
        [-33, 70],
        [-9, -7]
      ],
      [
        [6570, 3115],
        [7, 19],
        [30, -25],
        [20, -33],
        [-3, -28],
        [33, 35],
        [-12, -32],
        [36, -32],
        [18, -92],
        [31, -22],
        [-7, 25],
        [-38, 91],
        [-23, 97],
        [-20, 36],
        [-5, -45],
        [-18, 2],
        [13, 34],
        [-39, 42],
        [-16, -40],
        [-6, 18],
        [-36, 7],
        [35, -57]
      ],
      [
        [5051, 6939],
        [-14, -4],
        [-5, 0],
        [7, 11],
        [12, -7]
      ],
      [
        [5051, 6952],
        [11, 8],
        [8, -7],
        [-5, -11],
        [-14, 10]
      ],
      [
        [5012, 6967],
        [14, -24],
        [-6, -10],
        [-17, 19],
        [9, 15]
      ],
      [
        [5028, 6974],
        [6, 1],
        [-4, -18],
        [-7, 8],
        [5, 9]
      ],
      [
        [4963, 6995],
        [-11, -19],
        [-6, 15],
        [8, 21],
        [9, -17]
      ],
      [
        [4992, 7043],
        [40, -26],
        [-11, -30],
        [-17, 24],
        [1, -46],
        [-31, -4],
        [-13, 53],
        [31, 29]
      ],
      [
        [5275, 6959],
        [0, -19],
        [-6, -1],
        [-4, 22],
        [10, -2]
      ],
      [
        [5185, 6979],
        [-3, -10],
        [-11, -2],
        [6, 21],
        [8, -9]
      ],
      [
        [5212, 6991],
        [-15, -18],
        [-6, 2],
        [5, 19],
        [16, -3]
      ],
      [
        [5225, 6976],
        [-7, 13],
        [12, 10],
        [-3, -11],
        [-2, -12]
      ],
      [
        [5633, 7001],
        [-8, 16],
        [3, 5],
        [11, -14],
        [-6, -7]
      ],
      [
        [5319, 6994],
        [-17, -54],
        [-24, 0],
        [-2, 52],
        [43, 2]
      ],
      [
        [5256, 7010],
        [-22, 5],
        [6, 13],
        [22, -6],
        [-6, -12]
      ],
      [
        [5273, 7032],
        [-7, -11],
        [-6, 8],
        [10, 9],
        [3, -6]
      ],
      [
        [5244, 7040],
        [13, 3],
        [1, -4],
        [-11, -4],
        [-3, 5]
      ],
      [
        [5221, 7027],
        [-19, 16],
        [11, 21],
        [12, -31],
        [-4, -6]
      ],
      [
        [5165, 7088],
        [-2, -18],
        [-6, 5],
        [-7, 18],
        [15, -5]
      ],
      [
        [5150, 7185],
        [-9, 17],
        [6, 5],
        [8, -11],
        [-5, -11]
      ],
      [
        [5122, 7841],
        [13, -13],
        [18, -9],
        [-13, -16],
        [-18, 38]
      ],
      [
        [5232, 7842],
        [6, 10],
        [15, -7],
        [-13, -15],
        [-8, 12]
      ],
      [
        [5153, 7848],
        [-4, -8],
        [-11, 12],
        [14, 9],
        [1, -13]
      ],
      [
        [5315, 7975],
        [0, -12],
        [-6, -4],
        [-7, 12],
        [13, 4]
      ],
      [
        [5548, 8328],
        [-27, -28],
        [-8, 19],
        [11, 12],
        [24, -3]
      ],
      [
        [5468, 8535],
        [-16, 61],
        [-33, 44],
        [-9, 62],
        [27, 35],
        [1, 52],
        [12, 16],
        [-48, 94],
        [21, 72],
        [-37, 18],
        [14, 28],
        [-7, 81],
        [18, 14],
        [-56, 54],
        [-11, 46],
        [-28, 26],
        [-57, 23],
        [-26, 0],
        [-17, 25],
        [-51, 32],
        [-60, 77],
        [-34, 19]
      ],
      [
        [6006, 9411],
        [-56, -35],
        [39, -17],
        [-38, -80],
        [23, -93],
        [71, -34],
        [39, -70],
        [40, -38],
        [-10, -49],
        [-44, -57],
        [-48, -84],
        [-1, -42],
        [49, -95],
        [8, -39],
        [34, -66],
        [20, -77],
        [2, -46],
        [-44, -8],
        [2, -82],
        [-15, -25],
        [28, -9],
        [-2, -30],
        [-26, -28],
        [22, -54],
        [31, -3],
        [13, -39],
        [-24, -17],
        [8, -50],
        [59, -48],
        [-6, -62],
        [-34, -55],
        [-25, -14],
        [58, -77],
        [37, -23],
        [45, -50],
        [3, -21],
        [36, -58],
        [-37, -110],
        [-37, -57],
        [-31, -31],
        [-96, -161],
        [-27, -30],
        [-38, -65],
        [-46, -40],
        [-73, -93],
        [-38, -57]
      ],
      [
        [5877, 7092],
        [-40, -24],
        [-31, 28],
        [-19, -21],
        [-77, -29],
        [-34, 21],
        [-9, -59],
        [-23, 0],
        [-6, 33],
        [-19, -33],
        [-34, 0],
        [-3, -17],
        [-65, -15],
        [-14, -36],
        [-12, 21],
        [-85, -32],
        [-20, 0],
        [-20, -32],
        [-39, -7],
        [38, 30],
        [-16, 5],
        [17, 27],
        [-29, 6],
        [-6, 13],
        [-3, -11],
        [-4, -16],
        [-4, 20],
        [11, 9],
        [-9, 18],
        [2, 32],
        [-40, -26],
        [-8, 11],
        [20, 36],
        [-38, 2],
        [-47, 40],
        [-4, 28],
        [-22, -37],
        [-29, 41],
        [5, 70],
        [-15, 43],
        [18, -2],
        [12, 42],
        [-6, 100],
        [23, -12],
        [-20, 33],
        [-18, 79],
        [-15, 13],
        [11, 102],
        [-23, 13],
        [7, 54],
        [-13, 21],
        [16, 49],
        [27, 26],
        [4, 32],
        [21, -11],
        [-21, 49],
        [44, 14],
        [2, -23],
        [52, 40],
        [-20, 38],
        [26, 8],
        [18, 59],
        [27, -16],
        [19, 46],
        [42, 23],
        [1, 41],
        [63, 54],
        [6, 37],
        [40, 41],
        [8, 39],
        [39, 52],
        [34, 14],
        [21, -27],
        [12, 22],
        [-16, 26],
        [25, -7],
        [-26, 43],
        [11, 36],
        [5, 62],
        [-30, 33],
        [-45, 8],
        [-16, 48],
        [-16, -10],
        [-27, 15]
      ],
      [
        [4672, 6214],
        [-1, -32],
        [-47, -180],
        [-8, -60],
        [-18, -33],
        [-1, 86],
        [24, 91],
        [11, 5],
        [28, 112],
        [12, 11]
      ],
      [
        [4913, 6391],
        [14, -7],
        [-34, -17],
        [5, 19],
        [15, 5]
      ],
      [
        [4073, 6410],
        [-8, -26],
        [-16, -3],
        [-2, 25],
        [26, 4]
      ],
      [
        [4079, 6461],
        [2, -33],
        [-33, -11],
        [-10, 21],
        [27, 34],
        [14, -11]
      ],
      [
        [4649, 6477],
        [-2, -8],
        [-7, 29],
        [14, -13],
        [-5, -8]
      ],
      [
        [4816, 6658],
        [-5, -11],
        [-11, -6],
        [1, 12],
        [15, 5]
      ],
      [
        [4800, 6674],
        [-9, -16],
        [-8, 5],
        [5, 11],
        [12, 0]
      ],
      [
        [4741, 6647],
        [-6, 2],
        [1, 36],
        [8, -19],
        [-3, -19]
      ],
      [
        [4828, 6683],
        [-6, -13],
        [-7, 6],
        [13, 23],
        [0, -16]
      ],
      [
        [4835, 6747],
        [2, -8],
        [-3, -9],
        [-19, 19],
        [20, -2]
      ],
      [
        [4853, 6814],
        [-14, -31],
        [-6, 17],
        [9, 15],
        [11, -1]
      ],
      [
        [4873, 6833],
        [9, 12],
        [-4, -18],
        [-6, 5],
        [1, 1]
      ],
      [
        [4888, 6890],
        [0, -5],
        [-12, -2],
        [8, 20],
        [4, -13]
      ],
      [
        [4826, 7066],
        [13, -41],
        [-18, 18],
        [1, 36],
        [4, -13]
      ],
      [
        [4787, 7693],
        [7, -1],
        [-4, -15],
        [-11, -1],
        [8, 17]
      ],
      [
        [5099, 7968],
        [8, 6],
        [-2, -20],
        [-7, -7],
        [1, 21]
      ],
      [
        [5259, 8453],
        [-3, -5],
        [0, -8],
        [-10, 17],
        [13, -4]
      ],
      [
        [5290, 8469],
        [6, -1],
        [-5, -13],
        [-6, 12],
        [5, 2]
      ],
      [
        [4789, 6260],
        [39, 80],
        [31, 31],
        [5, -21],
        [25, 17],
        [9, -21],
        [-31, -25],
        [-2, -78],
        [15, -12],
        [-29, -29],
        [6, -16],
        [-38, -31],
        [-9, -51],
        [-18, -5],
        [14, 32],
        [-19, 60],
        [9, 33],
        [-7, 36]
      ],
      [
        [5468, 8535],
        [-26, -18],
        [-27, 19],
        [-35, -1],
        [-28, -30],
        [-49, 40],
        [-1, -27],
        [-23, 26],
        [-25, -45],
        [16, -42],
        [-69, 40],
        [44, -40],
        [-36, -1],
        [10, -34],
        [-51, -5],
        [24, -30],
        [-9, -37],
        [-50, -86],
        [-15, -4],
        [50, -100],
        [-61, -89],
        [-19, -71],
        [-31, -13],
        [-22, -46],
        [-26, 3],
        [-36, -39],
        [-7, -25],
        [-25, 36],
        [4, -41],
        [-25, 13],
        [-1, -32],
        [-27, -45],
        [-13, 9],
        [-31, -18],
        [-28, -55],
        [9, -22],
        [-44, -25],
        [-17, 14],
        [13, -55],
        [-38, -51],
        [-30, 28],
        [-12, -38],
        [20, -50],
        [-17, -72],
        [5, -64],
        [-39, -38],
        [14, -26],
        [-2, -135],
        [17, -68],
        [-14, -12],
        [43, -15],
        [7, -36],
        [32, 23],
        [6, -24],
        [66, -78],
        [-26, 16],
        [20, -35],
        [35, -12],
        [15, -58],
        [-18, -33],
        [28, 1],
        [-43, -41],
        [-27, -40],
        [-46, -21],
        [54, -18],
        [-7, 25],
        [36, -23],
        [-7, -14],
        [-45, 3],
        [15, -47],
        [-42, -22],
        [-16, -39],
        [-17, 2],
        [1, 55],
        [-17, -9],
        [-2, -62],
        [-75, -66],
        [-77, 12],
        [20, -20],
        [42, 3],
        [17, -32],
        [-24, -14],
        [9, -32],
        [-3, -53],
        [-21, -53],
        [-19, -11],
        [32, -56],
        [-15, 5],
        [13, -65],
        [-16, -25],
        [-9, -56],
        [13, -35],
        [-54, -172],
        [-7, -45],
        [-21, -46],
        [-3, 20],
        [-28, 13],
        [-29, -18],
        [-41, 9],
        [-30, -7],
        [9, -32],
        [-32, 0],
        [-30, -58],
        [-2, -26],
        [19, -55],
        [-21, -36],
        [-33, 11],
        [-68, -24],
        [-36, 22],
        [-3, 42],
        [14, 26],
        [-15, 21],
        [-47, 144],
        [33, -13],
        [-20, 52],
        [30, 10],
        [-2, 53],
        [-15, 0],
        [-15, 47],
        [-25, 25],
        [-36, 150],
        [-14, -27],
        [-2, 71],
        [-23, 27],
        [-2, 33],
        [19, 103],
        [-4, 28],
        [-36, -11],
        [-10, 42],
        [-21, -26],
        [6, 66],
        [-18, 106],
        [11, 34],
        [25, -27]
      ],
      [
        [5859, 6394],
        [54, -39],
        [3, 40],
        [-23, 47],
        [-36, -11],
        [-14, 28],
        [32, 64],
        [0, 107],
        [-8, 36]
      ],
      [
        [5881, 6711],
        [12, 33],
        [9, 7]
      ],
      [
        [5902, 6751],
        [5, 4]
      ],
      [
        [5907, 6755],
        [12, 9]
      ],
      [
        [5901, 6799],
        [-3, 61],
        [10, 27],
        [33, -37],
        [16, 53],
        [23, -21],
        [29, 13],
        [20, 47],
        [116, -34],
        [2, 34],
        [-29, 7],
        [-12, 38],
        [-93, 8],
        [-23, 45],
        [-23, 8],
        [-19, 46],
        [28, -28],
        [-3, 62],
        [-29, -5],
        [-21, -32],
        [-46, 1]
      ],
      [
        [6218, 9625],
        [48, -13],
        [20, -20],
        [41, 0],
        [-6, 46],
        [30, -20],
        [-12, 39],
        [15, 10],
        [65, -49],
        [32, -1],
        [23, -33],
        [-29, -21],
        [-78, 20],
        [-17, -25],
        [41, 6],
        [17, -21],
        [62, -9],
        [-25, -30],
        [52, 23],
        [22, -6],
        [-26, -54],
        [23, -12]
      ],
      [
        [6516, 9455],
        [14, 38],
        [90, -4],
        [27, -17],
        [67, -9],
        [8, 16],
        [72, -27],
        [38, -32],
        [59, -31],
        [71, -56],
        [24, -8],
        [84, -97],
        [20, 8],
        [102, -85],
        [55, -16],
        [40, -31],
        [16, -42],
        [18, 16],
        [39, -30],
        [-2, -63],
        [17, -13],
        [-4, -46],
        [22, -5],
        [6, -61],
        [-20, -56],
        [-83, -110],
        [-40, -32],
        [-84, -42],
        [-88, -22],
        [-71, 9],
        [-117, 54],
        [-53, 3],
        [-115, 33],
        [-66, 54],
        [-40, -18],
        [-30, 38],
        [-38, 2],
        [-35, 37],
        [-5, -27],
        [-71, 67],
        [-4, 32],
        [-48, 18],
        [-13, -9],
        [33, -37],
        [-2, -29],
        [30, -41],
        [42, -11],
        [-27, -46],
        [38, -1],
        [47, -22],
        [-11, -31],
        [101, -59],
        [39, -59],
        [6, -53],
        [-24, 29],
        [10, -59],
        [-38, -62],
        [43, -89],
        [-13, -18],
        [26, -33],
        [-16, -27],
        [20, -40],
        [-23, -15],
        [72, -74],
        [45, 16],
        [19, -40],
        [29, -20],
        [6, -32],
        [47, -23],
        [52, -8],
        [13, -21],
        [80, 38],
        [10, 21],
        [-20, 51],
        [10, 26],
        [-35, 31],
        [-39, -24],
        [-25, 14],
        [-43, 79],
        [-20, 10],
        [-14, 55],
        [42, 11],
        [1, 51],
        [21, 8],
        [79, -43],
        [38, -45],
        [99, -33],
        [71, -51],
        [33, 36],
        [36, -33],
        [38, -4],
        [-15, 104],
        [-30, 42],
        [-45, 89],
        [13, 56],
        [51, 34],
        [57, 71],
        [62, 20],
        [58, 64],
        [38, 65],
        [50, -23],
        [-11, -18],
        [79, 14],
        [47, -60],
        [-43, -34],
        [62, 26],
        [24, -29],
        [13, -53],
        [-4, 117],
        [40, 98],
        [-14, 30],
        [15, 38],
        [-23, 46],
        [-53, 24],
        [-3, 46],
        [38, 125],
        [-4, 25],
        [17, 99],
        [-10, 22],
        [-94, 76],
        [18, 15],
        [57, -32],
        [148, -2],
        [71, -27],
        [10, -33],
        [57, -52],
        [21, -80],
        [-80, -20],
        [-74, -11],
        [-4, -37],
        [-33, -17],
        [-8, -58],
        [72, -45],
        [29, -73],
        [22, -16],
        [60, 12],
        [1, -17],
        [92, 32],
        [36, 20],
        [-4, 56],
        [28, 65],
        [-13, 31],
        [49, 34],
        [58, 13],
        [7, 37],
        [33, 0],
        [58, 32],
        [88, 65],
        [40, 43],
        [18, -9],
        [141, 66],
        [1, -1],
        [8, -22],
        [-17, -33],
        [29, -11],
        [34, 34],
        [70, -43],
        [-9, -14],
        [38, -4],
        [652, -462],
        [576, -512],
        [-2702, -5780],
        [-24, 4],
        [-20, -11],
        [-8, -40],
        [-30, 50],
        [-84, 158],
        [-42, 51],
        [-47, 20],
        [-34, 77],
        [-45, -3],
        [-21, 68],
        [-78, 77],
        [22, 23],
        [5, 42],
        [34, -30],
        [-3, -26],
        [46, 35],
        [24, -15],
        [-4, 69],
        [-13, -36],
        [3, 62],
        [24, 26],
        [17, 77],
        [31, 29],
        [21, -30],
        [13, 23],
        [-29, 27],
        [-20, 44],
        [-17, -4],
        [-26, 86],
        [34, -13],
        [41, 52],
        [45, 20],
        [30, 38],
        [21, -5],
        [1, 68],
        [-37, -20],
        [-81, -24]
      ],
      [
        [6322, 4779],
        [-22, 58],
        [-7, 147],
        [-29, 46],
        [18, 50],
        [37, -2],
        [38, -30],
        [37, 31],
        [35, 67],
        [-30, 29],
        [1, 43],
        [-43, 29],
        [-38, -4],
        [8, 72],
        [-55, 47],
        [-13, 60],
        [-16, 12],
        [12, 36],
        [-45, 44],
        [5, 39],
        [22, 26],
        [-24, 72],
        [14, 34],
        [-4, 52],
        [-16, -1],
        [-31, 54],
        [-28, 17],
        [-39, -7],
        [-46, -39],
        [-13, 27],
        [3, 46],
        [-38, 19],
        [-25, -24],
        [-21, 40],
        [-37, -10],
        [-16, 26]
      ],
      [
        [5916, 5885],
        [7, 38],
        [-9, 70],
        [-30, 57],
        [-9, 35],
        [-18, -7],
        [22, 86],
        [2, 36],
        [-37, 38],
        [2, 27],
        [-19, -1]
      ],
      [
        [6516, 9455],
        [-1, -2],
        [-47, -33],
        [41, 13],
        [6, 20],
        [3, 1],
        [-2, 1]
      ],
      [
        [5957, 7030],
        [10, 5],
        [13, -16],
        [-11, -4],
        [-12, 15]
      ],
      [
        [6797, 8127],
        [-16, 19],
        [7, 3],
        [12, -11],
        [-3, -11]
      ],
      [
        [6776, 8351],
        [5, -40],
        [-40, 25],
        [2, 13],
        [33, 2]
      ],
      [
        [6796, 8361],
        [7, -9],
        [23, -1],
        [-21, -8],
        [-9, 18]
      ],
      [
        [7546, 8765],
        [-21, 11],
        [-3, 19],
        [14, -2],
        [10, -28]
      ],
      [
        [8500, 9255],
        [-42, -21],
        [43, 34],
        [37, -4],
        [-38, -9]
      ],
      [
        [6618, 9500],
        [-43, 1],
        [-2, 9],
        [24, 5],
        [21, -15]
      ],
      [
        [5112, 5648],
        [-51, -85],
        [61, -17],
        [17, 10],
        [-6, 70],
        [10, 15]
      ],
      [
        [5143, 5641],
        [94, -60],
        [54, 8],
        [25, -45],
        [-15, -121],
        [11, -26]
      ],
      [
        [5312, 5397],
        [-8, -4],
        [-331, 25]
      ],
      [
        [4973, 5418],
        [74, 70],
        [-51, 3],
        [-13, -22]
      ],
      [
        [4983, 5469],
        [22, 89],
        [37, 0],
        [30, 28],
        [32, 64]
      ],
      [
        [5104, 5650],
        [8, -2]
      ],
      [
        [4958, 5423],
        [-1, 1]
      ],
      [
        [4957, 5424],
        [14, 22]
      ],
      [
        [4971, 5446],
        [-13, -23]
      ],
      [
        [7270, 8227],
        [-16, 16],
        [30, 4],
        [7, -16],
        [0, -24],
        [-16, 16],
        [23, -30],
        [-30, 0],
        [-38, 33],
        [14, 9],
        [26, -8]
      ],
      [
        [4971, 5446],
        [12, 23]
      ],
      [
        [4983, 5469],
        [-1, -6],
        [-11, -17]
      ],
      [
        [8179, 9480],
        [32, 34],
        [159, -84],
        [-6, -6],
        [-26, -50],
        [-53, -30],
        [-74, -14],
        [-42, 48],
        [10, 102]
      ],
      [
        [2517, 4002],
        [11, -24],
        [-24, 3],
        [0, 18],
        [13, 3]
      ],
      [
        [2610, 4417],
        [26, -23],
        [-28, -28],
        [-21, 23],
        [23, 28]
      ],
      [
        [2233, 5113],
        [3, 0],
        [7, -18],
        [-13, 9],
        [3, 9]
      ],
      [
        [2283, 5107],
        [18, 1],
        [-33, -46],
        [-26, 38],
        [0, 33],
        [33, 2],
        [8, -28]
      ],
      [
        [2180, 5693],
        [-25, 12],
        [-1, 56],
        [22, -3],
        [4, -65]
      ],
      [
        [2193, 5773],
        [-12, 15],
        [-9, 34],
        [13, -9],
        [8, -40]
      ],
      [
        [2070, 5801],
        [9, -41],
        [-25, -6],
        [-12, 30],
        [-17, -25],
        [6, 44],
        [35, 28],
        [4, -30]
      ],
      [
        [2067, 5877],
        [-5, -19],
        [-9, -3],
        [8, 24],
        [6, -2]
      ],
      [
        [2109, 5891],
        [1, -23],
        [-24, -75],
        [-13, 30],
        [36, 68]
      ],
      [
        [1983, 5968],
        [-12, 16],
        [27, 12],
        [-14, -18],
        [-1, -10]
      ],
      [
        [2078, 6016],
        [9, -26],
        [26, -9],
        [7, -25],
        [-75, -34],
        [22, 54],
        [-24, 22],
        [25, 28],
        [10, -10]
      ],
      [
        [2018, 6010],
        [-15, -4],
        [12, 19],
        [16, 9],
        [-13, -24]
      ],
      [
        [1927, 6117],
        [-11, -13],
        [-10, 4],
        [12, 21],
        [9, -12]
      ],
      [
        [2051, 6125],
        [-4, -20],
        [-16, 16],
        [14, 15],
        [6, -11]
      ],
      [
        [1930, 6231],
        [17, -31],
        [-17, -53],
        [-11, 38],
        [11, 46]
      ],
      [
        [1937, 6253],
        [9, -18],
        [-9, -4],
        [-14, 11],
        [14, 11]
      ],
      [
        [1948, 6300],
        [4, -40],
        [-44, 23],
        [8, 18],
        [32, -1]
      ],
      [
        [2432, 6618],
        [-7, -24],
        [-10, 26],
        [9, 4],
        [8, -6]
      ],
      [
        [2391, 6639],
        [8, -21],
        [-14, -11],
        [-15, 26],
        [21, 6]
      ],
      [
        [2401, 6706],
        [51, -58],
        [-15, -12],
        [-16, 21],
        [-25, -13],
        [-19, 28],
        [5, 30],
        [19, 4]
      ],
      [
        [2461, 6709],
        [12, -16],
        [-9, -5],
        [-8, 22],
        [5, -1]
      ],
      [
        [2415, 6717],
        [7, -13],
        [-11, -1],
        [-4, 17],
        [8, -3]
      ],
      [
        [2445, 6734],
        [3, -26],
        [-5, -2],
        [-6, 15],
        [8, 13]
      ],
      [
        [2487, 6748],
        [-14, -17],
        [-10, 3],
        [3, 8],
        [21, 6]
      ],
      [
        [2424, 6763],
        [9, -25],
        [-14, 2],
        [-9, 19],
        [14, 4]
      ],
      [
        [2664, 7108],
        [3, -9],
        [-11, -2],
        [-6, 16],
        [14, -5]
      ],
      [
        [2628, 6990],
        [-16, -81],
        [-11, 7],
        [12, 92],
        [-21, -24],
        [-23, 41],
        [33, 4],
        [-9, 47],
        [-19, -3],
        [32, 35],
        [-5, -57],
        [34, 12],
        [-7, -73]
      ],
      [
        [2634, 7142],
        [10, -1],
        [-5, -63],
        [-13, 2],
        [8, 62]
      ],
      [
        [2668, 7158],
        [-5, -29],
        [-16, 0],
        [9, 43],
        [12, -14]
      ],
      [
        [2470, 4049],
        [-14, -1],
        [1, 8],
        [16, 16],
        [-3, -23]
      ],
      [
        [2240, 5324],
        [-22, -8],
        [8, 44],
        [20, 39],
        [21, 13],
        [4, -34],
        [-31, -54]
      ],
      [
        [2156, 413],
        [-1, -9],
        [-2, 9]
      ],
      [
        [6462, 0],
        [-12, 6],
        [-16, -1]
      ],
      [
        [6434, 5],
        [7, 13],
        [21, -18]
      ],
      [
        [6561, 89],
        [-6, -4],
        [-7, 9]
      ],
      [
        [6548, 94],
        [-2, 3]
      ],
      [
        [6548, 94],
        [-2, 0],
        [-7, -1]
      ],
      [
        [6539, 93],
        [0, 4]
      ],
      [
        [6539, 97],
        [0, 9],
        [-2, 3]
      ],
      [
        [6537, 109],
        [9, -1],
        [16, 11]
      ],
      [
        [6562, 119],
        [-1, -3]
      ],
      [
        [6561, 116],
        [-11, -5],
        [11, -22]
      ],
      [
        [6544, 101],
        [1, 2],
        [-2, 1],
        [0, -3],
        [1, 0]
      ],
      [
        [2849, 4580],
        [16, -6],
        [50, 11],
        [-7, -71],
        [-37, -24],
        [-6, -34],
        [-20, 6],
        [-49, -33],
        [-10, -19],
        [-50, 21],
        [-45, -7],
        [-27, -19],
        [-10, 27],
        [-47, -8],
        [-69, -30],
        [-6, -26],
        [-50, 11],
        [-3, -15],
        [-46, 41],
        [-44, -16],
        [-26, -34],
        [1, -38],
        [-18, -51],
        [-16, -3],
        [-42, 45],
        [-66, -13],
        [-6, -28],
        [-28, -9],
        [0, -37],
        [-16, -27],
        [-32, 46],
        [-25, -21],
        [2, 30],
        [28, 9],
        [43, 64],
        [3, 26],
        [26, 20],
        [27, 58],
        [3, 56],
        [21, -5],
        [21, 59],
        [43, 10],
        [43, -17],
        [41, 1],
        [1, 34],
        [33, 51],
        [26, 66],
        [-23, -40],
        [-32, -9],
        [-23, -45],
        [-40, 0],
        [-35, 62],
        [-14, -17],
        [-35, -2],
        [-12, 57],
        [-32, -12],
        [-30, -34],
        [-7, 31],
        [-31, 58],
        [23, 27],
        [28, 0],
        [71, 71],
        [16, 73],
        [-5, 101],
        [-35, -6],
        [-12, -28],
        [-28, 0],
        [19, 38],
        [27, 27],
        [23, 55],
        [93, 34],
        [23, -25],
        [-7, 31],
        [14, 17],
        [-5, 29],
        [22, 53],
        [-16, 9],
        [4, 44],
        [25, 53],
        [-26, 27],
        [-25, -30],
        [-26, 77],
        [-18, 32],
        [28, 102],
        [20, 19],
        [-41, 12],
        [-3, -33],
        [-28, -2],
        [-13, -26],
        [-23, 5],
        [-26, 31],
        [4, -61],
        [-55, 50],
        [-11, -16],
        [11, -48],
        [-30, 59],
        [13, 81],
        [44, 97],
        [-34, 58],
        [3, 50],
        [12, 17],
        [-7, 44],
        [-15, -67],
        [-21, 18],
        [-19, -11],
        [2, -31],
        [-19, -38],
        [-3, -74],
        [-30, -17],
        [19, 124],
        [-10, 60],
        [22, 56],
        [-18, 9],
        [17, 50],
        [38, 16],
        [-33, 4],
        [23, 65],
        [-45, -59],
        [-38, 33],
        [12, 15],
        [-36, 6],
        [4, 16],
        [37, -3],
        [-2, 39],
        [30, 107],
        [-23, 21],
        [-3, 62],
        [21, -13],
        [-16, 44],
        [-2, 41],
        [22, 23],
        [18, -21],
        [10, 25],
        [30, -19],
        [-40, 57],
        [17, -3],
        [-11, 48],
        [34, 9],
        [-8, 21],
        [20, 75],
        [37, -20],
        [95, 5],
        [45, 22],
        [44, -4],
        [-12, -35],
        [5, -27],
        [-15, -29],
        [-96, -100],
        [4, -34],
        [28, 3],
        [-52, -91],
        [74, 39],
        [11, 20],
        [47, -11],
        [18, 9],
        [44, -10],
        [66, 4],
        [20, -57],
        [-25, -43],
        [-8, -54],
        [-19, -68],
        [-25, -38],
        [-10, -41],
        [-40, -34],
        [6, -26],
        [29, -22],
        [-23, -25],
        [-21, 3],
        [-23, -39],
        [-45, -12],
        [54, -19],
        [33, 32],
        [18, -2],
        [55, -38],
        [37, -78],
        [21, -13],
        [12, -114],
        [25, -107],
        [22, -42],
        [61, -40],
        [19, -57],
        [36, -43],
        [-16, -24],
        [7, -34],
        [32, -70],
        [-20, -6],
        [-29, 32],
        [13, -33],
        [38, -39],
        [21, -69],
        [-1, -37],
        [-36, -56],
        [42, -26],
        [21, 50],
        [45, 0],
        [34, -12],
        [42, -42],
        [14, -79],
        [-16, -59],
        [-5, -52],
        [-43, -55],
        [-7, -27],
        [-18, 12],
        [-12, -73],
        [-47, -15],
        [27, -7],
        [-16, -18],
        [27, -9],
        [-2, 19],
        [13, -8],
        [5, -13],
        [-11, 0]
      ],
      [
        [2076, 6212],
        [7, -13],
        [38, -7],
        [-5, -20],
        [-35, -44],
        [-2, 46],
        [-33, -10],
        [-18, 42],
        [-34, 39],
        [24, 13],
        [-9, 29],
        [29, -26],
        [8, 51],
        [19, -31],
        [-1, -50],
        [12, -18],
        [-1, 31],
        [8, 19],
        [-4, -29],
        [-3, -22]
      ],
      [
        [1966, 6461],
        [27, -9],
        [-3, 20],
        [61, 62],
        [12, -46],
        [-26, -37],
        [5, -47],
        [-20, -32],
        [-50, -50],
        [-14, 21],
        [29, 33],
        [-30, 15],
        [9, 70]
      ],
      [
        [1942, 5592],
        [20, -7],
        [12, 41],
        [23, -5],
        [31, 20],
        [42, -11],
        [42, -131],
        [22, -20],
        [11, -53],
        [-7, -34],
        [-8, 52],
        [-15, -49],
        [17, -14],
        [-35, -18],
        [-20, -54],
        [-26, 17]
      ],
      [
        [6575, 115],
        [9, -25],
        [-23, -1]
      ],
      [
        [6561, 116],
        [4, -2],
        [10, 1]
      ],
      [
        [6539, 93],
        [-11, -42],
        [-66, -51]
      ],
      [
        [6434, 5],
        [-40, 28],
        [-14, 93],
        [19, -10],
        [15, 31]
      ],
      [
        [6414, 147],
        [4, -6],
        [4, 10]
      ],
      [
        [6422, 151],
        [4, 0]
      ],
      [
        [6426, 151],
        [14, -33],
        [40, 27],
        [27, -1],
        [4, -44],
        [28, -3]
      ],
      [
        [6546, 97],
        [1, 0],
        [2, -3],
        [-1, 0]
      ],
      [
        [1731, 1116],
        [-42, -1],
        [7, 88],
        [11, 64],
        [-7, 31],
        [18, 12],
        [19, 71],
        [23, 121],
        [0, 42],
        [24, 196],
        [-14, 130],
        [-12, 73],
        [15, 64]
      ],
      [
        [1923, 700],
        [-42, -47],
        [-19, -5],
        [-25, 23],
        [-50, 9],
        [-42, -27],
        [22, 128],
        [-2, 120],
        [-8, 7],
        [13, 64],
        [-2, 47],
        [-18, 40],
        [-28, -25],
        [-6, 69],
        [15, 13]
      ],
      [
        [1731, 1116],
        [1, 0],
        [0, 1],
        [0, 1],
        [19, 17],
        [-8, 36],
        [-11, -53],
        [-1, -2]
      ],
      [
        [5787, 216],
        [1, -7],
        [-14, -12],
        [1, 19],
        [12, 0]
      ],
      [
        [5812, 321],
        [-7, -53],
        [-1, -54],
        [-10, 47],
        [18, 60]
      ],
      [
        [5343, 429],
        [-16, 1],
        [6, 49],
        [16, -41],
        [-6, -9]
      ],
      [
        [5926, 492],
        [-20, -87],
        [-32, -61],
        [-11, 73],
        [25, 49],
        [38, 26]
      ],
      [
        [5617, 477],
        [-5, -11],
        [-9, 6],
        [8, 8],
        [6, -3]
      ],
      [
        [5828, 503],
        [2, -15],
        [-1, -10],
        [-8, 21],
        [7, 4]
      ],
      [
        [5726, 537],
        [-18, -22],
        [-4, 22],
        [9, -8],
        [13, 8]
      ],
      [
        [5879, 544],
        [5, 0],
        [1, -22],
        [-13, 9],
        [7, 13]
      ],
      [
        [5510, 588],
        [1, -26],
        [-25, -11],
        [4, 29],
        [20, 8]
      ],
      [
        [5607, 573],
        [-3, -20],
        [-13, 20],
        [5, 18],
        [11, -18]
      ],
      [
        [5808, 596],
        [-30, -27],
        [15, 34],
        [25, 19],
        [-10, -26]
      ],
      [
        [5683, 619],
        [-22, -28],
        [-3, 16],
        [17, 23],
        [8, -11]
      ],
      [
        [5524, 660],
        [12, -24],
        [-6, -15],
        [-8, 33],
        [2, 6]
      ],
      [
        [5784, 659],
        [7, -9],
        [-2, -18],
        [-12, 0],
        [7, 27]
      ],
      [
        [5570, 644],
        [9, 33],
        [12, 5],
        [-6, -37],
        [-15, -1]
      ],
      [
        [5766, 700],
        [8, -24],
        [-6, 0],
        [-7, 21],
        [5, 3]
      ],
      [
        [5629, 675],
        [-16, -50],
        [-12, 43],
        [21, 34],
        [7, -27]
      ],
      [
        [5504, 704],
        [5, -2],
        [1, -19],
        [-11, 1],
        [5, 20]
      ],
      [
        [5399, 743],
        [-5, -8],
        [-14, -3],
        [10, 13],
        [9, -2]
      ],
      [
        [5503, 764],
        [-12, -32],
        [1, 35],
        [7, 13],
        [4, -16]
      ],
      [
        [5601, 787],
        [13, -11],
        [-7, -14],
        [-10, -2],
        [4, 27]
      ],
      [
        [5558, 757],
        [-9, -10],
        [-2, 10],
        [7, 29],
        [4, -29]
      ],
      [
        [5571, 825],
        [19, -7],
        [-4, -25],
        [-24, 29],
        [9, 3]
      ],
      [
        [5492, 835],
        [2, -17],
        [-13, -25],
        [0, 24],
        [11, 18]
      ],
      [
        [5710, 821],
        [-29, -32],
        [-9, 9],
        [11, 23],
        [27, 0]
      ],
      [
        [5393, 834],
        [-4, 2],
        [-4, 21],
        [16, 0],
        [-8, -23]
      ],
      [
        [5782, 854],
        [12, -14],
        [-31, -16],
        [-24, 26],
        [30, 19],
        [13, -15]
      ],
      [
        [5085, 881],
        [26, -34],
        [-19, -21],
        [-22, 46],
        [15, 9]
      ],
      [
        [5545, 898],
        [12, -3],
        [-4, -50],
        [-26, 57],
        [18, -4]
      ],
      [
        [5397, 915],
        [2, -14],
        [-9, -11],
        [-7, 7],
        [14, 18]
      ],
      [
        [5065, 1050],
        [25, -111],
        [-32, 12],
        [-12, 69],
        [9, -14],
        [10, 44]
      ],
      [
        [5682, 1081],
        [11, -12],
        [0, -65],
        [-18, -40],
        [-16, 28],
        [15, 23],
        [-17, 65],
        [25, 1]
      ],
      [
        [5084, 1099],
        [-18, -9],
        [-2, 20],
        [14, 44],
        [6, -55]
      ],
      [
        [5514, 1163],
        [12, -22],
        [-16, -3],
        [-5, 51],
        [9, -26]
      ],
      [
        [5395, 1243],
        [-6, -12],
        [-7, 3],
        [8, 19],
        [5, -10]
      ],
      [
        [5405, 1252],
        [22, -25],
        [-6, -10],
        [-9, 3],
        [-7, 32]
      ],
      [
        [5438, 1239],
        [-2, 5],
        [7, 27],
        [4, -3],
        [-9, -29]
      ],
      [
        [5721, 1283],
        [20, -85],
        [-19, -12],
        [-29, 14],
        [-37, 44],
        [2, 22],
        [55, 33],
        [8, -16]
      ],
      [
        [4993, 1411],
        [-10, -38],
        [10, -47],
        [-34, 73],
        [34, 12]
      ],
      [
        [5611, 1475],
        [-10, -65],
        [-17, 29],
        [-17, -15],
        [-1, 43],
        [28, -9],
        [17, 17]
      ],
      [
        [5638, 1601],
        [1, -17],
        [-11, -7],
        [-14, 23],
        [24, 1]
      ],
      [
        [5538, 1638],
        [-30, 5],
        [14, 45],
        [15, -15],
        [1, -35]
      ],
      [
        [5001, 1384],
        [18, -13],
        [26, 52],
        [-10, 43],
        [38, 27],
        [21, 103],
        [21, 22],
        [0, 38]
      ],
      [
        [5115, 1656],
        [13, 20],
        [-13, -18]
      ],
      [
        [5115, 1658],
        [-8, 20],
        [2, 8]
      ],
      [
        [5109, 1686],
        [7, 14],
        [10, 2]
      ],
      [
        [5126, 1702],
        [30, 12],
        [22, -9],
        [37, 64],
        [31, 16],
        [26, -12],
        [35, 15],
        [3, 40],
        [18, 6]
      ],
      [
        [5679, 1670],
        [-10, 29],
        [-47, 8],
        [-56, 36],
        [-26, -42],
        [-26, 28],
        [-20, -5],
        [-6, -29],
        [-26, -27],
        [-34, 14],
        [-13, -24],
        [78, -140],
        [-9, -15],
        [-15, 41],
        [-28, 25],
        [-25, -12],
        [9, -33],
        [24, -23],
        [0, -46],
        [-23, 31],
        [-13, 42],
        [-31, 16],
        [-7, -19],
        [41, -81],
        [-38, 13],
        [-7, 76],
        [-30, 24],
        [-24, 49],
        [18, 14],
        [-7, 24],
        [-38, -48],
        [10, -27],
        [-13, -55],
        [2, -31],
        [33, -77],
        [7, -47],
        [20, -29],
        [27, -86],
        [-46, 49],
        [-9, -55],
        [25, -32],
        [-32, -45],
        [-19, 10],
        [17, -35],
        [32, -16],
        [4, -22],
        [25, -1],
        [4, -39],
        [19, -3],
        [17, -37],
        [31, -18],
        [15, -34],
        [-10, -12],
        [10, -101],
        [-6, -28],
        [-30, 46],
        [-20, 63],
        [-40, -21],
        [-24, -34],
        [19, -11],
        [-2, -53],
        [16, 1],
        [25, -43],
        [-51, -29],
        [7, 26],
        [-46, 25],
        [3, -38],
        [23, -76],
        [17, -94],
        [-10, -18],
        [20, -77],
        [-43, 64],
        [-6, 38],
        [-21, -6],
        [-10, -49],
        [3, -38],
        [-18, 12],
        [0, 53],
        [-23, 87],
        [-24, -11],
        [-7, -70],
        [-18, 21],
        [-1, 43],
        [-15, 54],
        [13, 35],
        [-15, 76],
        [-48, 75],
        [27, 78],
        [1, 27],
        [26, -19],
        [18, 40],
        [21, 11],
        [31, -41],
        [50, -33],
        [22, -35],
        [-2, 26],
        [41, 20],
        [-10, 18],
        [-49, 41],
        [-16, -5],
        [-17, 41],
        [-2, -30],
        [-44, 18],
        [-52, -31],
        [-17, 30],
        [-25, -28],
        [-7, 63],
        [-31, 106],
        [39, 21],
        [-36, 30],
        [-12, -43],
        [-5, 33],
        [-36, 59],
        [-26, 67],
        [5, 25],
        [-20, 19]
      ],
      [
        [5076, 1025],
        [5, -18],
        [-5, 17],
        [0, 1]
      ],
      [
        [5409, 1035],
        [0, 30],
        [-49, 83],
        [-26, 17],
        [37, 41],
        [16, -39],
        [17, -34],
        [30, -25],
        [24, -2],
        [18, -42],
        [-5, -31],
        [18, -69],
        [27, 0],
        [-4, -49],
        [-20, -2],
        [-39, 98],
        [1, 18],
        [-45, 6]
      ],
      [
        [5616, 182],
        [32, 10],
        [-6, -42],
        [12, -19],
        [50, 47],
        [-3, -67],
        [-71, -7],
        [-57, -21],
        [-40, -2],
        [-4, 45],
        [-34, 27],
        [-69, 11],
        [-30, 16],
        [9, 88],
        [13, -27],
        [3, 47],
        [8, -41],
        [42, 13],
        [9, -60],
        [51, 17],
        [28, -1],
        [9, -19],
        [48, -15]
      ],
      [
        [5076, 1025],
        [-6, 24],
        [7, 5],
        [-1, -29]
      ],
      [
        [5143, 5641],
        [-5, 74],
        [-17, 62],
        [-2, 89]
      ],
      [
        [5119, 5866],
        [16, 3],
        [15, 39],
        [86, 52],
        [66, -17],
        [23, 15],
        [26, -26],
        [19, 16],
        [47, -4],
        [45, -26],
        [38, -1],
        [50, 49],
        [24, -69],
        [62, -12],
        [6, -16],
        [52, -64],
        [12, -29],
        [35, -21]
      ],
      [
        [5741, 5755],
        [-16, -90],
        [39, -17],
        [-24, -43],
        [-31, 7],
        [-19, -48],
        [-40, -26],
        [-5, -84],
        [-24, -60],
        [19, -7],
        [5, -48],
        [-22, -2],
        [-8, 43],
        [-28, -10],
        [-17, -35],
        [-24, 4],
        [-8, -48],
        [-12, 6],
        [-34, -29],
        [-19, 18],
        [-63, -14],
        [-18, 11]
      ],
      [
        [5392, 5283],
        [-6, 62],
        [-64, 63],
        [-10, -11]
      ],
      [
        [5104, 5650],
        [19, 59],
        [-11, -61]
      ],
      [
        [4281, 2970],
        [0, 13],
        [14, 16]
      ],
      [
        [4293, 3253],
        [80, -23],
        [15, -17],
        [35, 62],
        [23, 13],
        [45, -10],
        [20, 29],
        [42, -7],
        [9, 46]
      ],
      [
        [4562, 3346],
        [20, 0],
        [27, -99]
      ],
      [
        [4737, 2259],
        [-11, 13],
        [3, 1]
      ],
      [
        [4890, 2800],
        [18, 16],
        [22, -11],
        [-5, -42],
        [-22, -58],
        [5, -64],
        [50, -69],
        [-44, -21],
        [27, -53],
        [1, -56],
        [-15, 13],
        [-17, -20]
      ],
      [
        [4910, 2435],
        [-32, -12],
        [18, -50],
        [-19, 12],
        [-25, -28],
        [-4, -62],
        [-21, -8],
        [2, -62],
        [9, -35],
        [-13, -21]
      ],
      [
        [3590, 2493],
        [-3, -7],
        [-5, 1]
      ],
      [
        [5109, 1711],
        [-1, 0],
        [-1, 5]
      ],
      [
        [5107, 1716],
        [1, -3],
        [1, -2]
      ],
      [
        [5072, 1765],
        [2, -45],
        [8, -3]
      ],
      [
        [5082, 1717],
        [11, 3],
        [14, -4]
      ],
      [
        [5107, 1716],
        [-2, -4],
        [4, -9]
      ],
      [
        [5109, 1703],
        [-6, -22],
        [6, 5]
      ],
      [
        [5115, 1658],
        [-2, -4],
        [2, 2]
      ],
      [
        [5001, 1384],
        [2, 42],
        [-19, 56],
        [-42, 45],
        [0, 65],
        [-19, 52],
        [12, 62],
        [10, 10],
        [-7, 66],
        [9, 30],
        [-14, 40],
        [19, 50],
        [2, 63],
        [-24, 10]
      ],
      [
        [4930, 1975],
        [-2, 30],
        [2, 34]
      ],
      [
        [4930, 2039],
        [12, 15],
        [-9, 51]
      ],
      [
        [4933, 2105],
        [34, 90],
        [14, -52],
        [27, 22]
      ],
      [
        [5008, 2165],
        [18, -60],
        [31, -32],
        [11, -72],
        [-4, -20]
      ],
      [
        [5064, 1981],
        [-13, -88],
        [10, -41],
        [-7, -23],
        [18, -64]
      ],
      [
        [4930, 2095],
        [0, -3],
        [-1, 0]
      ],
      [
        [4929, 2092],
        [1, 3]
      ],
      [
        [6574, 117],
        [1, -2]
      ],
      [
        [6562, 119],
        [7, 0],
        [5, -2]
      ],
      [
        [6414, 147],
        [1, 2]
      ],
      [
        [6415, 149],
        [2, -4],
        [3, 6]
      ],
      [
        [6420, 151],
        [1, 1],
        [1, -1]
      ],
      [
        [6426, 151],
        [2, -2]
      ],
      [
        [6428, 149],
        [14, -27],
        [40, 30],
        [23, 2],
        [9, -28],
        [23, -17]
      ],
      [
        [6428, 149],
        [17, -6],
        [6, 66],
        [57, -19],
        [69, 39],
        [62, 60],
        [-2, -13],
        [-73, -100],
        [10, -59]
      ],
      [
        [6415, 149],
        [3, 1],
        [2, 1]
      ],
      [
        [4878, 3091],
        [18, 22],
        [22, -8],
        [32, 50],
        [43, 0],
        [35, -15]
      ],
      [
        [5028, 3140],
        [11, -32],
        [50, -66],
        [-3, -71],
        [25, -43],
        [57, -51],
        [-15, -43],
        [18, -16],
        [-17, -19],
        [33, -48],
        [39, -10],
        [20, -37],
        [27, 60],
        [38, -42],
        [-32, -22]
      ],
      [
        [5279, 2700],
        [24, -75]
      ],
      [
        [5303, 2625],
        [-10, -40]
      ],
      [
        [5264, 2102],
        [-9, 14],
        [-79, -33]
      ],
      [
        [5176, 2083],
        [23, 115],
        [-44, 21],
        [3, 31],
        [-16, 8],
        [-19, 56],
        [-28, 21],
        [-2, 25],
        [-25, -20],
        [8, -21],
        [-37, -77]
      ],
      [
        [5039, 2242],
        [0, 22],
        [-25, 19],
        [-21, 37],
        [-35, 15],
        [-48, 100]
      ],
      [
        [5028, 3140],
        [25, 18],
        [16, -12],
        [26, 38],
        [33, 2],
        [21, 93],
        [21, 29],
        [14, 82],
        [16, 25],
        [24, 103],
        [31, 62],
        [54, 29],
        [15, 34]
      ],
      [
        [5744, 3728],
        [21, 0],
        [21, -25],
        [20, -53],
        [15, -84],
        [29, -54],
        [27, -89],
        [25, -31],
        [23, -101],
        [2, -64],
        [-18, -117],
        [9, -101],
        [-12, -10],
        [15, -36]
      ],
      [
        [6085, 2895],
        [-5, -97],
        [-5, -11],
        [-53, -12],
        [-14, 65],
        [-12, -34],
        [7, -57],
        [-22, -31],
        [20, 5],
        [-30, -70],
        [3, -89],
        [-10, -72]
      ],
      [
        [5303, 2626],
        [-24, 74]
      ],
      [
        [4933, 2105],
        [-2, -5],
        [-1, -5]
      ],
      [
        [4929, 2092],
        [-24, -3],
        [25, -50]
      ],
      [
        [4930, 1975],
        [-23, 23],
        [-3, 29],
        [-30, 68],
        [-10, -6],
        [-14, 50],
        [-18, -10]
      ],
      [
        [5039, 2242],
        [-36, -29],
        [5, -48]
      ],
      [
        [3824, 3456],
        [11, -44],
        [-4, -13]
      ],
      [
        [3831, 3399],
        [-12, 2],
        [5, 55]
      ],
      [
        [3824, 3456],
        [15, 40],
        [-11, 27]
      ],
      [
        [3828, 3523],
        [13, -3],
        [5, 14]
      ],
      [
        [4307, 3867],
        [29, -48],
        [27, -9],
        [15, 23],
        [27, -14],
        [12, 51],
        [13, -4],
        [7, 67],
        [32, -7],
        [47, -34],
        [15, 4],
        [25, -32],
        [36, -7],
        [8, 17],
        [49, -20],
        [9, -31]
      ],
      [
        [4658, 3823],
        [-11, -66],
        [34, -98]
      ],
      [
        [4681, 3659],
        [-17, -39],
        [8, -42],
        [-31, -10],
        [-21, 21],
        [-23, -25],
        [25, -10],
        [2, -47],
        [-25, -27],
        [7, -97],
        [-23, 2],
        [-21, -39]
      ],
      [
        [3929, 3347],
        [-10, 35],
        [-28, -40],
        [-29, 25],
        [0, 21],
        [-31, 11]
      ],
      [
        [4658, 3823],
        [25, 69],
        [41, -12],
        [36, 30],
        [25, 34],
        [13, 63],
        [38, 56],
        [34, 8]
      ],
      [
        [4870, 4071],
        [14, -34],
        [24, 4],
        [30, 54],
        [21, -54],
        [16, -2],
        [-3, -52],
        [34, -9],
        [9, 36],
        [20, 23],
        [43, 4],
        [29, -29],
        [10, 28],
        [25, 14],
        [63, -20],
        [22, -45],
        [59, -39]
      ],
      [
        [5240, 3768],
        [-45, -18],
        [-34, 61],
        [-36, -20],
        [-36, 22],
        [-34, -12],
        [-18, -67],
        [-50, -41],
        [-28, 27],
        [-17, -32],
        [-72, -20],
        [-11, -18],
        [9, -38],
        [-65, -22],
        [-46, -1],
        [-29, 22],
        [-26, 46],
        [-21, 2]
      ],
      [
        [3405, 4078],
        [11, 29],
        [-19, 65],
        [31, 80],
        [14, -15]
      ],
      [
        [3786, 3567],
        [1, -1]
      ],
      [
        [3788, 3563],
        [33, -46],
        [7, 6]
      ],
      [
        [3517, 3223],
        [10, 12],
        [-28, 17],
        [-35, -18],
        [-10, -44]
      ],
      [
        [3046, 4435],
        [-7, 67]
      ],
      [
        [3039, 4502],
        [67, 66],
        [25, 13]
      ],
      [
        [3229, 4579],
        [11, -25],
        [-6, 25]
      ],
      [
        [5176, 2083],
        [-16, -2],
        [-20, -39],
        [-16, 27],
        [-37, -36],
        [-2, -43],
        [-21, -9]
      ],
      [
        [5392, 5283],
        [12, -91],
        [34, -125],
        [3, -112],
        [-6, -19],
        [-53, -45],
        [-26, -60],
        [53, -56],
        [5, -25],
        [-14, -66],
        [5, -64]
      ],
      [
        [4870, 4071],
        [-7, 45],
        [-15, 7],
        [-9, 56],
        [-59, 28],
        [-22, -9],
        [-28, 51],
        [2, 26],
        [-30, 3],
        [-18, 31],
        [-35, 11],
        [11, -52],
        [-30, -38],
        [-41, 77],
        [-16, 13],
        [21, 25],
        [-5, 36],
        [-28, 1],
        [-72, 41],
        [-11, -4],
        [-8, 47],
        [-35, 10],
        [2, -36],
        [-19, 0]
      ],
      [
        [4357, 5217],
        [28, -9],
        [13, 51],
        [-48, 7]
      ],
      [
        [4351, 5282],
        [18, -5],
        [46, 32],
        [152, 70],
        [48, 73],
        [42, 13],
        [45, 39],
        [61, 20],
        [49, 5],
        [28, -79],
        [2, -32],
        [47, -25],
        [40, 9]
      ],
      [
        [4929, 5402],
        [-15, -10],
        [18, -17],
        [41, 43]
      ],
      [
        [4958, 5423],
        [-20, -15]
      ],
      [
        [4938, 5408],
        [19, 16]
      ],
      [
        [4929, 5402],
        [9, 6]
      ],
      [
        [4938, 5408],
        [-7, -5],
        [-2, -1]
      ],
      [
        [5109, 1703],
        [1, 0],
        [-1, 0]
      ],
      [
        [5109, 1703],
        [0, 0]
      ],
      [
        [5126, 1702],
        [-17, 44],
        [0, -35]
      ],
      [
        [5082, 1717],
        [11, 55],
        [-21, -7]
      ],
      [
        [5916, 5885],
        [-27, -11],
        [-30, -49],
        [-6, -35],
        [-69, 9],
        [-18, -33],
        [-25, -11]
      ],
      [
        [5119, 5866],
        [-9, 50],
        [10, 162],
        [38, 52],
        [3, 69],
        [30, 73],
        [34, 12],
        [66, 44],
        [8, -48],
        [53, -59],
        [14, -69],
        [50, -41],
        [29, 13],
        [47, 60],
        [4, 31],
        [-12, 142]
      ],
      [
        [823, 7985],
        [-42, -19],
        [-14, 10],
        [-30, -31],
        [21, 1],
        [-19, -41],
        [-87, -34],
        [-62, 11],
        [-54, 26],
        [-47, 3],
        [-42, 53],
        [-68, 37],
        [-3, 24],
        [-20, -31],
        [-47, 6],
        [-31, -10],
        [-31, 8],
        [-42, -10],
        [2, 72],
        [18, -29],
        [38, 10],
        [52, 55],
        [-22, 4],
        [24, 44],
        [-27, -27],
        [-16, 5],
        [14, 52],
        [41, 42],
        [-66, -51],
        [-16, 23],
        [2, 53],
        [-143, 17],
        [-6, -17],
        [-34, 3],
        [-12, 35],
        [47, 2],
        [47, 15],
        [1, 18],
        [30, -8],
        [21, 23],
        [10, -18],
        [33, 14],
        [64, -4],
        [5, 45],
        [-30, -26],
        [-59, 15],
        [7, 19],
        [68, 50],
        [-12, 24],
        [-29, -20],
        [-33, 35],
        [-20, -15],
        [-52, 19],
        [-80, -47],
        [-7, 16],
        [-65, 12],
        [29, 35],
        [43, -25],
        [-21, 29],
        [4, 43],
        [75, -46],
        [-39, 37],
        [-10, 41],
        [33, -11],
        [-33, 34],
        [3, 17],
        [31, -12],
        [-17, 25],
        [23, 24],
        [32, -15],
        [8, -21],
        [40, -4],
        [26, -23],
        [10, -35],
        [-2, 63],
        [-47, 23],
        [-9, 39],
        [-28, 14],
        [7, 22],
        [63, 8],
        [34, -25],
        [6, -28],
        [26, 1],
        [27, -25],
        [3, -28],
        [19, 4],
        [26, -29],
        [4, -36],
        [-23, -81],
        [18, 11],
        [-5, -32],
        [19, -16],
        [9, -43],
        [23, 91],
        [26, 25],
        [21, -54],
        [26, 68],
        [-20, 78],
        [2, 15],
        [37, 12],
        [24, -61],
        [20, -9],
        [6, -29],
        [24, -9],
        [-9, 60],
        [18, 37],
        [32, -5],
        [0, 24],
        [25, 13],
        [34, -34],
        [1, -29],
        [21, -6],
        [19, -58],
        [13, 25],
        [-18, 29],
        [-8, 66],
        [43, -8],
        [35, -50],
        [21, 7],
        [23, 55],
        [31, -16],
        [50, 15],
        [8, 26],
        [-14, 61],
        [58, 8],
        [9, -31],
        [27, -8],
        [-8, -29],
        [44, -38],
        [9, 32],
        [22, 3],
        [30, 31],
        [26, -8],
        [-45, -26],
        [6, -22],
        [-25, -21],
        [12, -17],
        [45, 3],
        [7, -30],
        [-27, -59],
        [58, 13],
        [-7, -14],
        [69, -57],
        [20, -2],
        [-21, -56],
        [25, -14],
        [4, -56],
        [-13, -19],
        [-44, 27],
        [33, -47],
        [-25, -21],
        [-2, -26],
        [-51, -18],
        [-12, -73],
        [-20, 0],
        [-26, -24],
        [-50, -13],
        [-66, -35],
        [-41, -49],
        [-48, -33],
        [-18, 15],
        [-7, -28],
        [-23, 5]
      ]
    ],
    "bbox": [-24.5403734601347, 34.6347386679171, 64.5184087527719, 71.1751405875999],
    "transform": {
      "scale": [0.00890676889818048, 0.00365440563253153],
      "translate": [-24.5403734601347, 34.6347386679171]
    },
    "title": "Europe",
    "version": "1.1.4",
    "copyright": "Copyright (c) 2024 Highsoft AS, Based on data from Natural Earth",
    "copyrightShort": "Natural Earth",
    "copyrightUrl": "http://www.naturalearthdata.com"
  }
    
  const options = {
    chart: {
      map: topology,
      spacingBottom: 20
    },

    title: {
      text: 'Europe time zones'
    },

    accessibility: {
      series: {
        descriptionFormat: 'Timezone {series.name} with ' +
            '{series.points.length} countries.'
      },
      point: {
        valueDescriptionFormat: '{point.name}.'
      }
    },

    legend: {
      enabled: true
    },

    plotOptions: {
      map: {
        allAreas: false,
        joinBy: ['iso-a2', 'code'],
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          style: {
            fontWeight: 'bold'
          },
          // Only show dataLabels for areas with high label rank
          format: '{#if (lt point.properties.labelrank 5)}' +
              '{point.properties.iso-a2}' +
              '{/if}'
        },
        tooltip: {
          headerFormat: '',
          pointFormat: '{point.name}: <b>{series.name}</b>'
        }
      }
    },

    series: [{
        name: 'UTC',
        data: ['IE', 'IS', 'GB', 'PT'].map(code => ({ code }))
      }, {
        name: 'UTC + 1',
        data: [
          'NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL',
          'CZ', 'AT', 'CH', 'LI', 'SK', 'HU', 'SI', 'IT', 'SM', 'HR',
          'BA', 'YF', 'ME', 'AL', 'MK'
        ].map(code => ({ code }))
      }, {
        name: 'UTC + 2',
        data: [
          'FI', 'EE', 'LV', 'LT', 'BY', 'UA', 'MD', 'RO', 'BG', 'GR',
          'TR', 'CY'
        ].map(code => ({ code }))
      }, {
        name: 'UTC + 3',
        data: [{
          code: 'RU'
        }]
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} constructorType={"mapChart"} options={options} />;
}
export default CategorizedAreas;