import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';

import highcharts_more from 'highcharts/highcharts-more';
import exporting from 'highcharts/modules/exporting';
highcharts_more(Highcharts);
exporting(Highcharts);

const FixedTooltipWithHTML = () => {
  const topology = {
    "type": "Topology",
    "objects": {
      "default": {
        "type": "GeometryCollection",
        "geometries": [
          {
            "type": "Polygon",
            "arcs": [
              [0]
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
              "hc-middle-lon": -6.978,
              "hc-middle-lat": 62.064
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1]
            ],
            "id": "UM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "um",
              "hc-a2": "UM",
              "name": "United States Minor Outlying Islands",
              "labelrank": "5",
              "country-abbrev": "U.S. MOI",
              "subregion": "Seven seas (open ocean)",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "UMI",
              "iso-a2": "UM",
              "woe-id": "28289407",
              "continent": "North America",
              "hc-middle-lon": -161.882,
              "hc-middle-lat": 5.866
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
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
                [12]
              ],
              [
                [13]
              ],
              [
                [14]
              ],
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
              ],
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
                [30, 31]
              ],
              [
                [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
              ],
              [
                [53]
              ],
              [
                [54, 55]
              ],
              [
                [56]
              ],
              [
                [57]
              ],
              [
                [58, 59]
              ],
              [
                [60]
              ],
              [
                [61]
              ],
              [
                [62]
              ]
            ],
            "id": "US",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "us",
              "hc-a2": "US",
              "name": "United States of America",
              "labelrank": "2",
              "country-abbrev": "U.S.A.",
              "subregion": "Northern America",
              "region-wb": "North America",
              "iso-a3": "USA",
              "iso-a2": "US",
              "woe-id": "23424977",
              "continent": "North America",
              "hc-middle-lon": -100.434,
              "hc-middle-lat": 38.964
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [63]
              ],
              [
                [64]
              ],
              [
                [65]
              ],
              [
                [66]
              ]
            ],
            "id": "JP",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "jp",
              "hc-a2": "JP",
              "name": "Japan",
              "labelrank": "2",
              "country-abbrev": "Japan",
              "subregion": "Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "JPN",
              "iso-a2": "JP",
              "woe-id": "23424856",
              "continent": "Asia",
              "hc-middle-lon": 137.506,
              "hc-middle-lat": 36.251
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [67]
            ],
            "id": "SC",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sc",
              "hc-a2": "SC",
              "name": "Seychelles",
              "labelrank": "6",
              "country-abbrev": "Syc.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SYC",
              "iso-a2": "SC",
              "woe-id": "23424941",
              "continent": "Seven seas (open ocean)",
              "hc-middle-lon": 55.344,
              "hc-middle-lat": -4.578
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [68]
              ],
              [
                [69, 70, 71, 72, 73, 74, 75, 76, 77, 78]
              ]
            ],
            "id": "IN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "in",
              "hc-a2": "IN",
              "name": "India",
              "labelrank": "2",
              "country-abbrev": "India",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "IND",
              "iso-a2": "IN",
              "woe-id": "23424848",
              "continent": "Asia",
              "hc-middle-lon": 77.993,
              "hc-middle-lat": 24.108
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [79]
              ],
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
                [83, 84]
              ],
              [
                [85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101]
              ],
              [
                [102, 103, 104]
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
              "hc-middle-lon": 1.355,
              "hc-middle-lat": 47.645
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [105]
            ],
            "id": "FM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "fm",
              "hc-a2": "FM",
              "name": "Federated States of Micronesia",
              "labelrank": "6",
              "country-abbrev": "F.S.M.",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "FSM",
              "iso-a2": "FM",
              "woe-id": "23424815",
              "continent": "Oceania",
              "hc-middle-lon": 158.082,
              "hc-middle-lat": 6.858
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [106]
              ],
              [
                [-70, 107, -78, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, -72, 126]
              ]
            ],
            "id": "CN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cn",
              "hc-a2": "CN",
              "name": "China",
              "labelrank": "2",
              "country-abbrev": "China",
              "subregion": "Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "CHN",
              "iso-a2": "CN",
              "woe-id": "23424781",
              "continent": "Asia",
              "hc-middle-lon": 98.594,
              "hc-middle-lat": 34.947
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [127, 128]
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
              "hc-middle-lon": -7.974,
              "hc-middle-lat": 39.483
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [129]
            ],
            "id": "SW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sw",
              "hc-a2": "SW",
              "name": "Serranilla Bank",
              "labelrank": "5",
              "country-abbrev": "S.B.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "-99",
              "iso-a2": "SW",
              "woe-id": "-99",
              "continent": "North America",
              "hc-middle-lon": -78.561,
              "hc-middle-lat": 15.837
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [130]
            ],
            "id": "SH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sh",
              "hc-a2": "SH",
              "name": "Scarborough Reef",
              "labelrank": "6",
              "country-abbrev": "S.R.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "-99",
              "iso-a2": "SH",
              "woe-id": "-99",
              "continent": "Asia",
              "hc-middle-lon": 117.625,
              "hc-middle-lat": 15.142
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [131]
              ],
              [
                [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, -104, 144, 145]
              ]
            ],
            "id": "BR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "br",
              "hc-a2": "BR",
              "name": "Brazil",
              "labelrank": "2",
              "country-abbrev": "Brazil",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "BRA",
              "iso-a2": "BR",
              "woe-id": "23424768",
              "continent": "South America",
              "hc-middle-lon": -52.792,
              "hc-middle-lat": -8.472
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [146]
            ],
            "id": "KI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ki",
              "hc-a2": "KI",
              "name": "Kiribati",
              "labelrank": "6",
              "country-abbrev": "Kir.",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "KIR",
              "iso-a2": "KI",
              "woe-id": "23424867",
              "continent": "Oceania",
              "hc-middle-lon": -157.181,
              "hc-middle-lat": 1.811
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [147]
              ],
              [
                [148]
              ],
              [
                [149, 150]
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
              ]
            ],
            "id": "PH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ph",
              "hc-a2": "PH",
              "name": "Philippines",
              "labelrank": "2",
              "country-abbrev": "Phil.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "PHL",
              "iso-a2": "PH",
              "woe-id": "23424934",
              "continent": "Asia",
              "hc-middle-lon": 120.919,
              "hc-middle-lat": 16.531
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
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
                [163, -34, 164, -53, 165, 166, 167, 168, -36],
                [169]
              ]
            ],
            "id": "MX",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mx",
              "hc-a2": "MX",
              "name": "Mexico",
              "labelrank": "2",
              "country-abbrev": "Mex.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "MEX",
              "iso-a2": "MX",
              "woe-id": "23424900",
              "continent": "North America",
              "hc-middle-lon": -102.11,
              "hc-middle-lat": 23.991
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [170]
              ],
              [
                [171, 172, 173, 174]
              ],
              [
                [175, 176]
              ],
              [
                [177, -129, 178, -93, 179, -91, 180, -89, 181, 182]
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
              "hc-middle-lon": -1.639,
              "hc-middle-lat": 39.633
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [183]
            ],
            "id": "BU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bu",
              "hc-a2": "BU",
              "name": "Bajo Nuevo Bank (Petrel Is.)",
              "labelrank": "8",
              "country-abbrev": null,
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "-99",
              "iso-a2": "BU",
              "woe-id": "-99",
              "continent": "North America",
              "hc-middle-lon": -79.907,
              "hc-middle-lat": 15.771
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [184]
            ],
            "id": "MV",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mv",
              "hc-a2": "MV",
              "name": "Maldives",
              "labelrank": "5",
              "country-abbrev": "Mald.",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "MDV",
              "iso-a2": "MV",
              "woe-id": "23424899",
              "continent": "Seven seas (open ocean)",
              "hc-middle-lon": 73.435,
              "hc-middle-lat": 5.5
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [185]
            ],
            "id": "SP",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sp",
              "hc-a2": "SP",
              "name": "Spratly Islands",
              "labelrank": "6",
              "country-abbrev": "Spratly Is.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "SPI",
              "iso-a2": "SP",
              "woe-id": "23424921",
              "continent": "Asia",
              "hc-middle-lon": 115.705,
              "hc-middle-lat": 10.812
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
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
                [197, 198, 199, 200, 201, 202, 203, 204, 205, 206],
                [207, 208]
              ],
              [
                [209, -183]
              ],
              [
                [210, 211]
              ],
              [
                [212, 213]
              ],
              [
                [214]
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
              "hc-middle-lon": -1.834,
              "hc-middle-lat": 52.747
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [215]
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
              ],
              [
                [221]
              ],
              [
                [222]
              ],
              [
                [223]
              ],
              [
                [224, 225, 226, 227, 228, 229, 230, 231]
              ],
              [
                [232, 233]
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
              "hc-middle-lon": 22.448,
              "hc-middle-lat": 38.8
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [234]
            ],
            "id": "AS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "as",
              "hc-a2": "AS",
              "name": "American Samoa",
              "labelrank": "4",
              "country-abbrev": "Am. Samoa",
              "subregion": "Polynesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "ASM",
              "iso-a2": "AS",
              "woe-id": "23424746",
              "continent": "Oceania",
              "hc-middle-lon": -170.521,
              "hc-middle-lat": -14.302
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
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
                [240]
              ],
              [
                [241, 242]
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
              "hc-middle-lon": 9.679,
              "hc-middle-lat": 56.184
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [243]
              ],
              [
                [244]
              ],
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
                [248]
              ],
              [
                [249]
              ],
              [
                [250]
              ],
              [
                [251]
              ],
              [
                [252]
              ],
              [
                [253]
              ],
              [
                [254]
              ],
              [
                [255]
              ],
              [
                [256]
              ],
              [
                [257]
              ],
              [
                [258]
              ],
              [
                [259]
              ],
              [
                [260]
              ]
            ],
            "id": "GL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gl",
              "hc-a2": "GL",
              "name": "Greenland",
              "labelrank": "3",
              "country-abbrev": "Grlnd.",
              "subregion": "Northern America",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "GRL",
              "iso-a2": "GL",
              "woe-id": "23424828",
              "continent": "North America",
              "hc-middle-lon": -39.019,
              "hc-middle-lat": 74.922
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [261]
            ],
            "id": "GU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gu",
              "hc-a2": "GU",
              "name": "Guam",
              "labelrank": "6",
              "country-abbrev": "Guam",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "GUM",
              "iso-a2": "GU",
              "woe-id": "23424832",
              "continent": "Oceania",
              "hc-middle-lon": 144.573,
              "hc-middle-lat": 13.459
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [262]
            ],
            "id": "MP",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mp",
              "hc-a2": "MP",
              "name": "Northern Mariana Islands",
              "labelrank": "6",
              "country-abbrev": "N.M.I.",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "MNP",
              "iso-a2": "MP",
              "woe-id": "23424788",
              "continent": "Oceania",
              "hc-middle-lon": 145.552,
              "hc-middle-lat": 15.128
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [263]
            ],
            "id": "PR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pr",
              "hc-a2": "PR",
              "name": "Puerto Rico",
              "labelrank": "5",
              "country-abbrev": "P.R.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "PRI",
              "iso-a2": "PR",
              "woe-id": "23424935",
              "continent": "North America",
              "hc-middle-lon": -66.161,
              "hc-middle-lat": 18.117
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [264]
            ],
            "id": "VI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "vi",
              "hc-a2": "VI",
              "name": "United States Virgin Islands",
              "labelrank": "6",
              "country-abbrev": "V.I. (U.S.)",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "VIR",
              "iso-a2": "VI",
              "woe-id": "23424985",
              "continent": "North America",
              "hc-middle-lon": -64.666,
              "hc-middle-lat": 17.728
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [265],
                [266]
              ],
              [
                [267, 268, 269, -42, 270, -40, 271, -38, 272, -32, 273, -59, 274, -48, 275, 276],
                [277],
                [278],
                [279],
                [280],
                [281],
                [282]
              ],
              [
                [283],
                [284],
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
                [304]
              ],
              [
                [305]
              ],
              [
                [306]
              ],
              [
                [307]
              ],
              [
                [308]
              ],
              [
                [309]
              ],
              [
                [310]
              ],
              [
                [311]
              ],
              [
                [312]
              ],
              [
                [313]
              ],
              [
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
                [322]
              ],
              [
                [323]
              ],
              [
                [324]
              ],
              [
                [325]
              ],
              [
                [326]
              ],
              [
                [327]
              ],
              [
                [328]
              ],
              [
                [329]
              ],
              [
                [330]
              ],
              [
                [331]
              ],
              [
                [332]
              ],
              [
                [333]
              ],
              [
                [334]
              ],
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
                [366]
              ],
              [
                [367]
              ],
              [
                [368]
              ],
              [
                [369]
              ],
              [
                [370]
              ],
              [
                [371]
              ],
              [
                [372]
              ],
              [
                [373]
              ],
              [
                [374]
              ],
              [
                [375]
              ],
              [
                [376]
              ],
              [
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
                [381]
              ],
              [
                [382]
              ],
              [
                [383]
              ],
              [
                [384]
              ],
              [
                [385]
              ],
              [
                [386]
              ],
              [
                [387]
              ],
              [
                [388]
              ],
              [
                [389]
              ],
              [
                [390]
              ],
              [
                [391]
              ],
              [
                [392]
              ],
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
                [-51, 419, -49, 420]
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
                [435]
              ],
              [
                [436]
              ],
              [
                [437]
              ]
            ],
            "id": "CA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ca",
              "hc-a2": "CA",
              "name": "Canada",
              "labelrank": "2",
              "country-abbrev": "Can.",
              "subregion": "Northern America",
              "region-wb": "North America",
              "iso-a3": "CAN",
              "iso-a2": "CA",
              "woe-id": "23424775",
              "continent": "North America",
              "hc-middle-lon": -115.251,
              "hc-middle-lat": 60.325
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [438]
            ],
            "id": "ST",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "st",
              "hc-a2": "ST",
              "name": "Sao Tome and Principe",
              "labelrank": "6",
              "country-abbrev": "S.T.P.",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "STP",
              "iso-a2": "ST",
              "woe-id": "23424966",
              "continent": "Africa",
              "hc-middle-lon": 6.63,
              "hc-middle-lat": 0.248
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [439]
            ],
            "id": "CV",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cv",
              "hc-a2": "CV",
              "name": "Cape Verde",
              "labelrank": "4",
              "country-abbrev": "C.Vd.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "CPV",
              "iso-a2": "CV",
              "woe-id": "23424794",
              "continent": "Africa",
              "hc-middle-lon": -23.579,
              "hc-middle-lat": 15.109
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [440]
            ],
            "id": "DM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "dm",
              "hc-a2": "DM",
              "name": "Dominica",
              "labelrank": "6",
              "country-abbrev": "D'inca",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "DMA",
              "iso-a2": "DM",
              "woe-id": "23424798",
              "continent": "North America",
              "hc-middle-lon": -61.285,
              "hc-middle-lat": 15.386
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [441]
              ],
              [
                [442, -85]
              ],
              [
                [443, 444]
              ],
              [
                [445, 446, 447]
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
              "hc-middle-lon": 6.468,
              "hc-middle-lat": 53.218
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [448]
            ],
            "id": "JM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "jm",
              "hc-a2": "JM",
              "name": "Jamaica",
              "labelrank": "4",
              "country-abbrev": "Jam.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "JAM",
              "iso-a2": "JM",
              "woe-id": "23424858",
              "continent": "North America",
              "hc-middle-lon": -77.198,
              "hc-middle-lat": 18.043
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [449]
            ],
            "id": "WS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ws",
              "hc-a2": "WS",
              "name": "Samoa",
              "labelrank": "4",
              "country-abbrev": "Samoa",
              "subregion": "Polynesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "WSM",
              "iso-a2": "WS",
              "woe-id": "23424992",
              "continent": "Oceania",
              "hc-middle-lon": -172.319,
              "hc-middle-lat": -13.657
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [450]
              ],
              [
                [451, 452]
              ],
              [
                [453, 454, 455, 456]
              ]
            ],
            "id": "OM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "om",
              "hc-a2": "OM",
              "name": "Oman",
              "labelrank": "4",
              "country-abbrev": "Oman",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "OMN",
              "iso-a2": "OM",
              "woe-id": "23424898",
              "continent": "Asia",
              "hc-middle-lon": 58.809,
              "hc-middle-lat": 22.126
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [457]
            ],
            "id": "VC",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "vc",
              "hc-a2": "VC",
              "name": "Saint Vincent and the Grenadines",
              "labelrank": "6",
              "country-abbrev": "St.V.G.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "VCT",
              "iso-a2": "VC",
              "woe-id": "23424981",
              "continent": "North America",
              "hc-middle-lon": -61.142,
              "hc-middle-lat": 13.183
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [458]
              ],
              [
                [459, -230, 460]
              ],
              [
                [461, 462, 463, 464, 465, 466, 467, 468, 469]
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
              "hc-middle-lon": 32.149,
              "hc-middle-lat": 39.055
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [470, -74, 471]
            ],
            "id": "BD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bd",
              "hc-a2": "BD",
              "name": "Bangladesh",
              "labelrank": "3",
              "country-abbrev": "Bang.",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "BGD",
              "iso-a2": "BD",
              "woe-id": "23424759",
              "continent": "Asia",
              "hc-middle-lon": 91.839,
              "hc-middle-lat": 23.153
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [472]
            ],
            "id": "LC",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lc",
              "hc-a2": "LC",
              "name": "Saint Lucia",
              "labelrank": "6",
              "country-abbrev": "S.L.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "LCA",
              "iso-a2": "LC",
              "woe-id": "23424951",
              "continent": "North America",
              "hc-middle-lon": -60.919,
              "hc-middle-lat": 13.909
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [473]
            ],
            "id": "NR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "nr",
              "hc-a2": "NR",
              "name": "Nauru",
              "labelrank": "6",
              "country-abbrev": "Nauru",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "NRU",
              "iso-a2": "NR",
              "woe-id": "23424912",
              "continent": "Oceania",
              "hc-middle-lon": 166.752,
              "hc-middle-lat": -0.515
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [474]
              ],
              [
                [475]
              ],
              [
                [476]
              ],
              [
                [477]
              ],
              [
                [478]
              ],
              [
                [479]
              ],
              [
                [480]
              ],
              [
                [481]
              ],
              [
                [482]
              ],
              [
                [483]
              ],
              [
                [484]
              ],
              [
                [485]
              ],
              [
                [486]
              ],
              [
                [487]
              ],
              [
                [488]
              ],
              [
                [489]
              ],
              [
                [490]
              ],
              [
                [491]
              ],
              [
                [492]
              ],
              [
                [493, 494, 495, 496],
                [497]
              ],
              [
                [498]
              ],
              [
                [499]
              ],
              [
                [500]
              ],
              [
                [501]
              ],
              [
                [502]
              ],
              [
                [503]
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
              "hc-middle-lon": 7.54,
              "hc-middle-lat": 59.933
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [504]
            ],
            "id": "KN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kn",
              "hc-a2": "KN",
              "name": "Saint Kitts and Nevis",
              "labelrank": "6",
              "country-abbrev": "St.K.N.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "KNA",
              "iso-a2": "KN",
              "woe-id": "23424940",
              "continent": "North America",
              "hc-middle-lon": -62.64,
              "hc-middle-lat": 17.289
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [505]
            ],
            "id": "BH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bh",
              "hc-a2": "BH",
              "name": "Bahrain",
              "labelrank": "4",
              "country-abbrev": "Bahr.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "BHR",
              "iso-a2": "BH",
              "woe-id": "23424753",
              "continent": "Asia",
              "hc-middle-lon": 50.464,
              "hc-middle-lat": 25.988
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [506]
            ],
            "id": "TO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "to",
              "hc-a2": "TO",
              "name": "Tonga",
              "labelrank": "4",
              "country-abbrev": "Tongo",
              "subregion": "Polynesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "TON",
              "iso-a2": "TO",
              "woe-id": "23424964",
              "continent": "Oceania",
              "hc-middle-lon": -174.912,
              "hc-middle-lat": -21.163
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [507]
              ],
              [
                [508]
              ],
              [
                [509]
              ],
              [
                [510]
              ],
              [
                [511]
              ],
              [
                [512]
              ],
              [
                [513]
              ],
              [
                [514]
              ],
              [
                [515, -495, 516, 517]
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
              "hc-middle-lon": 27.106,
              "hc-middle-lat": 64.753
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [518]
              ],
              [
                [519]
              ],
              [
                [520]
              ],
              [
                [521]
              ],
              [
                [522, 523, 524, 525]
              ],
              [
                [526, 527]
              ],
              [
                [528, 529]
              ],
              [
                [530]
              ],
              [
                [531]
              ],
              [
                [532]
              ],
              [
                [533]
              ],
              [
                [534, 535]
              ],
              [
                [536]
              ]
            ],
            "id": "ID",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "id",
              "hc-a2": "ID",
              "name": "Indonesia",
              "labelrank": "2",
              "country-abbrev": "Indo.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "IDN",
              "iso-a2": "ID",
              "woe-id": "23424846",
              "continent": "Asia",
              "hc-middle-lon": 112.534,
              "hc-middle-lat": -0.836
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [537]
            ],
            "id": "MU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mu",
              "hc-a2": "MU",
              "name": "Mauritius",
              "labelrank": "5",
              "country-abbrev": "Mus.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "MUS",
              "iso-a2": "MU",
              "woe-id": "23424894",
              "continent": "Seven seas (open ocean)",
              "hc-middle-lon": 57.535,
              "hc-middle-lat": -20.278
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [538]
              ],
              [
                [539]
              ],
              [
                [540, -496, -516],
                [541]
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
              "hc-middle-lon": 16.379,
              "hc-middle-lat": 62.828
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [542]
            ],
            "id": "TT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tt",
              "hc-a2": "TT",
              "name": "Trinidad and Tobago",
              "labelrank": "5",
              "country-abbrev": "Tr.T.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "TTO",
              "iso-a2": "TT",
              "woe-id": "23424958",
              "continent": "North America",
              "hc-middle-lon": -61.256,
              "hc-middle-lat": 10.517
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [543]
              ],
              [
                [-528, 544, -536, 545, 546, 547, 548, 549]
              ],
              [
                [550, 551]
              ]
            ],
            "id": "MY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "my",
              "hc-a2": "MY",
              "name": "Malaysia",
              "labelrank": "3",
              "country-abbrev": "Malay.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "MYS",
              "iso-a2": "MY",
              "woe-id": "23424901",
              "continent": "Asia",
              "hc-middle-lon": 117.21,
              "hc-middle-lat": 5.141
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [552, 553, 554, 555, 556, 557]
            ],
            "id": "PA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pa",
              "hc-a2": "PA",
              "name": "Panama",
              "labelrank": "4",
              "country-abbrev": "Pan.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "PAN",
              "iso-a2": "PA",
              "woe-id": "23424924",
              "continent": "North America",
              "hc-middle-lon": -81.674,
              "hc-middle-lat": 8.411
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [558]
            ],
            "id": "PW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pw",
              "hc-a2": "PW",
              "name": "Palau",
              "labelrank": "6",
              "country-abbrev": "Palau",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "PLW",
              "iso-a2": "PW",
              "woe-id": "23424927",
              "continent": "Oceania",
              "hc-middle-lon": 134.399,
              "hc-middle-lat": 7.468
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [559]
            ],
            "id": "TV",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tv",
              "hc-a2": "TV",
              "name": "Tuvalu",
              "labelrank": "6",
              "country-abbrev": "Tuv.",
              "subregion": "Polynesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "TUV",
              "iso-a2": "TV",
              "woe-id": "23424970",
              "continent": "Oceania",
              "hc-middle-lon": 179.002,
              "hc-middle-lat": -8.474
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [560]
            ],
            "id": "MH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mh",
              "hc-a2": "MH",
              "name": "Marshall Islands",
              "labelrank": "6",
              "country-abbrev": "M. Is.",
              "subregion": "Micronesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "MHL",
              "iso-a2": "MH",
              "woe-id": "23424932",
              "continent": "Oceania",
              "hc-middle-lon": 170.955,
              "hc-middle-lat": 7.088
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [561]
              ],
              [
                [562]
              ],
              [
                [563]
              ],
              [
                [564, 565, 566, 567]
              ],
              [
                [568, 569, 570, 571]
              ],
              [
                [572, 573]
              ]
            ],
            "id": "CL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cl",
              "hc-a2": "CL",
              "name": "Chile",
              "labelrank": "2",
              "country-abbrev": "Chile",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "CHL",
              "iso-a2": "CL",
              "woe-id": "23424782",
              "continent": "South America",
              "hc-middle-lon": -70.913,
              "hc-middle-lat": -52.609
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [574]
              ],
              [
                [-551, 575, 576, 577, 578, 579]
              ]
            ],
            "id": "TH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "th",
              "hc-a2": "TH",
              "name": "Thailand",
              "labelrank": "3",
              "country-abbrev": "Thai.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "THA",
              "iso-a2": "TH",
              "woe-id": "23424960",
              "continent": "Asia",
              "hc-middle-lon": 99.355,
              "hc-middle-lat": 13.18
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [580]
            ],
            "id": "GD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gd",
              "hc-a2": "GD",
              "name": "Grenada",
              "labelrank": "6",
              "country-abbrev": "Gren.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "GRD",
              "iso-a2": "GD",
              "woe-id": "23424826",
              "continent": "North America",
              "hc-middle-lon": -61.596,
              "hc-middle-lat": 12.116
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [581]
              ],
              [
                [582]
              ],
              [
                [583]
              ],
              [
                [584]
              ],
              [
                [585, 586, 587, 588, 589, 590, 591, 592, 593, 594]
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
              "hc-middle-lon": 24.027,
              "hc-middle-lat": 58.72
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [595]
            ],
            "id": "AG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ag",
              "hc-a2": "AG",
              "name": "Antigua and Barbuda",
              "labelrank": "6",
              "country-abbrev": "Ant.B.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "ATG",
              "iso-a2": "AG",
              "woe-id": "23424737",
              "continent": "North America",
              "hc-middle-lon": -61.731,
              "hc-middle-lat": 17.059
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [596]
            ],
            "id": "TW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tw",
              "hc-a2": "TW",
              "name": "Taiwan",
              "labelrank": "3",
              "country-abbrev": "Taiwan",
              "subregion": "Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "TWN",
              "iso-a2": "TW",
              "woe-id": "23424971",
              "continent": "Asia",
              "hc-middle-lon": 120.562,
              "hc-middle-lat": 23.791
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [597]
            ],
            "id": "BB",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bb",
              "hc-a2": "BB",
              "name": "Barbados",
              "labelrank": "5",
              "country-abbrev": "Barb.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "BRB",
              "iso-a2": "BB",
              "woe-id": "23424754",
              "continent": "North America",
              "hc-middle-lon": -59.514,
              "hc-middle-lat": 13.167
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [598]
              ],
              [
                [599]
              ],
              [
                [-102, 600, 601, 602, 603],
                [604],
                [605]
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
              "hc-middle-lon": 15.984,
              "hc-middle-lat": 39.744
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [606]
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
              "hc-middle-lon": 14.388,
              "hc-middle-lat": 35.856
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [607]
            ],
            "id": "VU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "vu",
              "hc-a2": "VU",
              "name": "Vanuatu",
              "labelrank": "4",
              "country-abbrev": "Van.",
              "subregion": "Melanesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "VUT",
              "iso-a2": "VU",
              "woe-id": "23424907",
              "continent": "Oceania",
              "hc-middle-lon": 167.645,
              "hc-middle-lat": -15.662
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [608]
            ],
            "id": "SG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sg",
              "hc-a2": "SG",
              "name": "Singapore",
              "labelrank": "6",
              "country-abbrev": "Sing.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "SGP",
              "iso-a2": "SG",
              "woe-id": "23424948",
              "continent": "Asia",
              "hc-middle-lon": 103.705,
              "hc-middle-lat": 1.337
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-209, -208]
              ],
              [
                [609, -207, 610, 611]
              ],
              [
                [-199, 612]
              ],
              [
                [613, -212, 614, 615, 616, 617, 618, -201]
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
              "hc-middle-lon": 32.955,
              "hc-middle-lat": 34.875
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [619]
            ],
            "id": "LK",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lk",
              "hc-a2": "LK",
              "name": "Sri Lanka",
              "labelrank": "3",
              "country-abbrev": "Sri L.",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "LKA",
              "iso-a2": "LK",
              "woe-id": "23424778",
              "continent": "Asia",
              "hc-middle-lon": 80.958,
              "hc-middle-lat": 6.271
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [620]
            ],
            "id": "KM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "km",
              "hc-a2": "KM",
              "name": "Comoros",
              "labelrank": "6",
              "country-abbrev": "Com.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "COM",
              "iso-a2": "KM",
              "woe-id": "23424786",
              "continent": "Africa",
              "hc-middle-lon": 43.282,
              "hc-middle-lat": -11.65
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [621]
            ],
            "id": "FJ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "fj",
              "hc-a2": "FJ",
              "name": "Fiji",
              "labelrank": "6",
              "country-abbrev": "Fiji",
              "subregion": "Melanesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "FJI",
              "iso-a2": "FJ",
              "woe-id": "23424813",
              "continent": "Oceania",
              "hc-middle-lon": 178.144,
              "hc-middle-lat": -17.093
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [622]
              ],
              [
                [623]
              ],
              [
                [624]
              ],
              [
                [625]
              ],
              [
                [626]
              ],
              [
                [627]
              ],
              [
                [628]
              ],
              [
                [629]
              ],
              [
                [630]
              ],
              [
                [631]
              ],
              [
                [632, 633, 634, 635, -587, 636, -595, 637, -592, 591, 638, -590, 639, -517, -494, 640, 641, -121, 642, -119, 643, -115, 644, 645, 646, 647]
              ],
              [
                [648]
              ],
              [
                [649]
              ],
              [
                [650]
              ],
              [
                [651]
              ],
              [
                [652]
              ],
              [
                [653, 654, 655, 656, 657, 658]
              ],
              [
                [659]
              ],
              [
                [660]
              ],
              [
                [661]
              ],
              [
                [662]
              ],
              [
                [663]
              ],
              [
                [664]
              ],
              [
                [665]
              ],
              [
                [666]
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
              "hc-middle-lon": 116.767,
              "hc-middle-lat": 62.503
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [604]
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
              "hc-middle-lon": 12.455,
              "hc-middle-lat": 41.859
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-606]
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
              "hc-middle-lon": 12.419,
              "hc-middle-lat": 43.913
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [667, 668, 669, 670, 671, 672, 673, -645, -114, 674, 675, 676],
                [677]
              ],
              [
                [678]
              ]
            ],
            "id": "KZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kz",
              "hc-a2": "KZ",
              "name": "Kazakhstan",
              "labelrank": "3",
              "country-abbrev": "Kaz.",
              "subregion": "Central Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "KAZ",
              "iso-a2": "KZ",
              "woe-id": "-90",
              "continent": "Asia",
              "hc-middle-lon": 69.67,
              "hc-middle-lat": 48.796
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [679]
              ],
              [
                [680]
              ],
              [
                [681]
              ],
              [
                [-470, 682, 683]
              ],
              [
                [-647, 684, 685, 686, 687]
              ]
            ],
            "id": "AZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "az",
              "hc-a2": "AZ",
              "name": "Azerbaijan",
              "labelrank": "5",
              "country-abbrev": "Aze.",
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "AZE",
              "iso-a2": "AZ",
              "woe-id": "23424741",
              "continent": "Asia",
              "hc-middle-lon": 48.729,
              "hc-middle-lat": 40.108
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [688]
              ],
              [
                [689]
              ],
              [
                [-112, 690, 691, 692]
              ]
            ],
            "id": "TJ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tj",
              "hc-a2": "TJ",
              "name": "Tajikistan",
              "labelrank": "4",
              "country-abbrev": "Tjk.",
              "subregion": "Central Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "TJK",
              "iso-a2": "TJ",
              "woe-id": "23424961",
              "continent": "Asia",
              "hc-middle-lon": 69.387,
              "hc-middle-lat": 38.59
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [693]
            ],
            "id": "LS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ls",
              "hc-a2": "LS",
              "name": "Lesotho",
              "labelrank": "6",
              "country-abbrev": "Les.",
              "subregion": "Southern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "LSO",
              "iso-a2": "LS",
              "woe-id": "23424880",
              "continent": "Africa",
              "hc-middle-lon": 28.256,
              "hc-middle-lat": -29.478
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [694]
              ],
              [
                [695]
              ],
              [
                [696, -676, 697, -692, 698, 699, 700, 701, -670, 702, -668],
                [-689]
              ]
            ],
            "id": "UZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "uz",
              "hc-a2": "UZ",
              "name": "Uzbekistan",
              "labelrank": "3",
              "country-abbrev": "Uzb.",
              "subregion": "Central Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "UZB",
              "iso-a2": "UZ",
              "woe-id": "23424980",
              "continent": "Asia",
              "hc-middle-lon": 63.79,
              "hc-middle-lat": 41.156
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-173, 703, 704, 705, 706, -177, 707, 174, 708]
            ],
            "id": "MA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ma",
              "hc-a2": "MA",
              "name": "Morocco",
              "labelrank": "3",
              "country-abbrev": "Mor.",
              "subregion": "Northern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "MAR",
              "iso-a2": "MA",
              "woe-id": "23424893",
              "continent": "Africa",
              "hc-middle-lon": -7.425,
              "hc-middle-lat": 32.946
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [709, -558, 710, 711, -141, 712, 713]
            ],
            "id": "CO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "co",
              "hc-a2": "CO",
              "name": "Colombia",
              "labelrank": "2",
              "country-abbrev": "Col.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "COL",
              "iso-a2": "CO",
              "woe-id": "23424787",
              "continent": "South America",
              "hc-middle-lon": -72.771,
              "hc-middle-lat": 3.458
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [714, -523]
              ],
              [
                [715, -525]
              ]
            ],
            "id": "TL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tl",
              "hc-a2": "TL",
              "name": "East Timor",
              "labelrank": "5",
              "country-abbrev": "T.L.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "TLS",
              "iso-a2": "TL",
              "woe-id": "23424968",
              "continent": "Asia",
              "hc-middle-lon": 125.804,
              "hc-middle-lat": -8.73
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735]
            ],
            "id": "TZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tz",
              "hc-a2": "TZ",
              "name": "United Republic of Tanzania",
              "labelrank": "3",
              "country-abbrev": "Tanz.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "TZA",
              "iso-a2": "TZ",
              "woe-id": "23424973",
              "continent": "Africa",
              "hc-middle-lon": 35.006,
              "hc-middle-lat": -6.368
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [736, -567]
              ],
              [
                [-135, 737, 738, -571, 739, 740]
              ],
              [
                [-565, 741, 742, 743]
              ]
            ],
            "id": "AR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ar",
              "hc-a2": "AR",
              "name": "Argentina",
              "labelrank": "2",
              "country-abbrev": "Arg.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "ARG",
              "iso-a2": "AR",
              "woe-id": "23424747",
              "continent": "South America",
              "hc-middle-lon": -64.439,
              "hc-middle-lat": -31.645
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [744, 745, 746, 747, -454, 748, 749, 750, 751, 752]
            ],
            "id": "SA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sa",
              "hc-a2": "SA",
              "name": "Saudi Arabia",
              "labelrank": "2",
              "country-abbrev": "Saud.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "SAU",
              "iso-a2": "SA",
              "woe-id": "23424938",
              "continent": "Asia",
              "hc-middle-lon": 44.002,
              "hc-middle-lat": 23.911
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-110, 753, -76, 754, 755, 756]
            ],
            "id": "PK",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pk",
              "hc-a2": "PK",
              "name": "Pakistan",
              "labelrank": "2",
              "country-abbrev": "Pak.",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "PAK",
              "iso-a2": "PK",
              "woe-id": "23424922",
              "continent": "Asia",
              "hc-middle-lon": 66.283,
              "hc-middle-lat": 28.685
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-457, 757, -749]
            ],
            "id": "YE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ye",
              "hc-a2": "YE",
              "name": "Yemen",
              "labelrank": "3",
              "country-abbrev": "Yem.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "YEM",
              "iso-a2": "YE",
              "woe-id": "23425002",
              "continent": "Asia",
              "hc-middle-lon": 46.724,
              "hc-middle-lat": 14.189
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [758, -455, -748, 759, -453],
              [-451]
            ],
            "id": "AE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ae",
              "hc-a2": "AE",
              "name": "United Arab Emirates",
              "labelrank": "4",
              "country-abbrev": "U.A.E.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "ARE",
              "iso-a2": "AE",
              "woe-id": "23424738",
              "continent": "Asia",
              "hc-middle-lon": 54.339,
              "hc-middle-lat": 23.865
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-734, 760, 761, 762, 763, 764, 765]
            ],
            "id": "KE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ke",
              "hc-a2": "KE",
              "name": "Kenya",
              "labelrank": "2",
              "country-abbrev": "Ken.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "KEN",
              "iso-a2": "KE",
              "woe-id": "23424863",
              "continent": "Africa",
              "hc-middle-lon": 40.811,
              "hc-middle-lat": -1.758
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-713, -140, 766, 767, 768, 769, 770, -569, 771, 772]
            ],
            "id": "PE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pe",
              "hc-a2": "PE",
              "name": "Peru",
              "labelrank": "2",
              "country-abbrev": "Peru",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "PER",
              "iso-a2": "PE",
              "woe-id": "23424919",
              "continent": "South America",
              "hc-middle-lon": -72.49,
              "hc-middle-lat": -13.103
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [773, 774, 775, 776, 777]
            ],
            "id": "DO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "do",
              "hc-a2": "DO",
              "name": "Dominican Republic",
              "labelrank": "5",
              "country-abbrev": "Dom. Rep.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "DOM",
              "iso-a2": "DO",
              "woe-id": "23424800",
              "continent": "North America",
              "hc-middle-lon": -70.258,
              "hc-middle-lat": 19.025
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [773, -774, 778]
              ],
              [
                [-776, 779, -778, 780]
              ]
            ],
            "id": "HT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ht",
              "hc-a2": "HT",
              "name": "Haiti",
              "labelrank": "5",
              "country-abbrev": "Haiti",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "HTI",
              "iso-a2": "HT",
              "woe-id": "23424839",
              "continent": "North America",
              "hc-middle-lon": -72.087,
              "hc-middle-lat": 18.08
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-529, 781]
              ],
              [
                [782]
              ],
              [
                [783]
              ]
            ],
            "id": "PG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "pg",
              "hc-a2": "PG",
              "name": "Papua New Guinea",
              "labelrank": "2",
              "country-abbrev": "P.N.G.",
              "subregion": "Melanesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "PNG",
              "iso-a2": "PG",
              "woe-id": "23424926",
              "continent": "Oceania",
              "hc-middle-lon": 142.533,
              "hc-middle-lat": -6.081
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [784, 785, 786]
              ],
              [
                [787, 788, 789, 790]
              ]
            ],
            "id": "AO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ao",
              "hc-a2": "AO",
              "name": "Angola",
              "labelrank": "3",
              "country-abbrev": "Ang.",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "AGO",
              "iso-a2": "AO",
              "woe-id": "23424745",
              "continent": "Africa",
              "hc-middle-lon": 17.857,
              "hc-middle-lat": -13.573
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [791, 792, -579, 793]
            ],
            "id": "KH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kh",
              "hc-a2": "KH",
              "name": "Cambodia",
              "labelrank": "3",
              "country-abbrev": "Camb.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "KHM",
              "iso-a2": "KH",
              "woe-id": "23424776",
              "continent": "Asia",
              "hc-middle-lon": 106.579,
              "hc-middle-lat": 12.592
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-792, 794, -124, 795]
            ],
            "id": "VN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "vn",
              "hc-a2": "VN",
              "name": "Vietnam",
              "labelrank": "2",
              "country-abbrev": "Viet.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "VNM",
              "iso-a2": "VN",
              "woe-id": "23424984",
              "continent": "Asia",
              "hc-middle-lon": 106.318,
              "hc-middle-lat": 10.427
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [796, -736, 797, 798, 799, 800, 801, 802, 803]
            ],
            "id": "MZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mz",
              "hc-a2": "MZ",
              "name": "Mozambique",
              "labelrank": "3",
              "country-abbrev": "Moz.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "MOZ",
              "iso-a2": "MZ",
              "woe-id": "23424902",
              "continent": "Africa",
              "hc-middle-lon": 38.993,
              "hc-middle-lat": -15.14
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [804, -556, 805, 806]
              ],
              [
                [553, -554, 807]
              ]
            ],
            "id": "CR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cr",
              "hc-a2": "CR",
              "name": "Costa Rica",
              "labelrank": "5",
              "country-abbrev": "C.R.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "CRI",
              "iso-a2": "CR",
              "woe-id": "23424791",
              "continent": "North America",
              "hc-middle-lon": -83.95,
              "hc-middle-lat": 10.134
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [808, 809, 810, 811, 812]
            ],
            "id": "BJ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bj",
              "hc-a2": "BJ",
              "name": "Benin",
              "labelrank": "5",
              "country-abbrev": "Benin",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "BEN",
              "iso-a2": "BJ",
              "woe-id": "23424764",
              "continent": "Africa",
              "hc-middle-lon": 2.578,
              "hc-middle-lat": 9.364
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-809, 813, 814, 815, 816]
            ],
            "id": "NG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ng",
              "hc-a2": "NG",
              "name": "Nigeria",
              "labelrank": "2",
              "country-abbrev": "Nigeria",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "NGA",
              "iso-a2": "NG",
              "woe-id": "23424908",
              "continent": "Africa",
              "hc-middle-lon": 6.995,
              "hc-middle-lat": 10.732
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-462, -684, 817, -686, 818, 819, 820, -756, 821, 822]
            ],
            "id": "IR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ir",
              "hc-a2": "IR",
              "name": "Iran",
              "labelrank": "2",
              "country-abbrev": "Iran",
              "subregion": "Southern Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "IRN",
              "iso-a2": "IR",
              "woe-id": "23424851",
              "continent": "Asia",
              "hc-middle-lon": 55.01,
              "hc-middle-lat": 32.463
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [823, 824, 825]
            ],
            "id": "SV",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sv",
              "hc-a2": "SV",
              "name": "El Salvador",
              "labelrank": "6",
              "country-abbrev": "El. S.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "SLV",
              "iso-a2": "SV",
              "woe-id": "23424807",
              "continent": "North America",
              "hc-middle-lon": -88.81,
              "hc-middle-lat": 13.755
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [826, 827, 828]
            ],
            "id": "SL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sl",
              "hc-a2": "SL",
              "name": "Sierra Leone",
              "labelrank": "4",
              "country-abbrev": "S.L.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SLE",
              "iso-a2": "SL",
              "woe-id": "23424946",
              "continent": "Africa",
              "hc-middle-lon": -11.841,
              "hc-middle-lat": 8.506
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [829, 830, 831]
            ],
            "id": "GW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gw",
              "hc-a2": "GW",
              "name": "Guinea Bissau",
              "labelrank": "6",
              "country-abbrev": "GnB.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "GNB",
              "iso-a2": "GW",
              "woe-id": "23424929",
              "continent": "Africa",
              "hc-middle-lon": -15.047,
              "hc-middle-lat": 11.816
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [832, 833, 834]
              ],
              [
                [835, 836, 837, 838, 839]
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
              "hc-middle-lon": 15.474,
              "hc-middle-lat": 44.061
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-167, 840, 841]
            ],
            "id": "BZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bz",
              "hc-a2": "BZ",
              "name": "Belize",
              "labelrank": "6",
              "country-abbrev": "Belize",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "BLZ",
              "iso-a2": "BZ",
              "woe-id": "23424760",
              "continent": "North America",
              "hc-middle-lon": -88.595,
              "hc-middle-lat": 17.172
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-799, 842, 843, 844, 845, -801, 846],
              [-694]
            ],
            "id": "ZA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "za",
              "hc-a2": "ZA",
              "name": "South Africa",
              "labelrank": "2",
              "country-abbrev": "S.Af.",
              "subregion": "Southern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "ZAF",
              "iso-a2": "ZA",
              "woe-id": "23424942",
              "continent": "Africa",
              "hc-middle-lon": 22.361,
              "hc-middle-lat": -31.057
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [847, 848, 849, 850, 851, 852]
            ],
            "id": "CF",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cf",
              "hc-a2": "CF",
              "name": "Central African Republic",
              "labelrank": "4",
              "country-abbrev": "C.A.R.",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "CAF",
              "iso-a2": "CF",
              "woe-id": "23424792",
              "continent": "Africa",
              "hc-middle-lon": 20.495,
              "hc-middle-lat": 6.975
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-848, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862]
            ],
            "id": "SD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sd",
              "hc-a2": "SD",
              "name": "Sudan",
              "labelrank": "3",
              "country-abbrev": "Sudan",
              "subregion": "Northern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SDN",
              "iso-a2": "SD",
              "woe-id": "-90",
              "continent": "Africa",
              "hc-middle-lon": 30.311,
              "hc-middle-lat": 16.986
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [863, 864, 865, 866, -790, 867, -787, 868, -850, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878]
            ],
            "id": "CD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cd",
              "hc-a2": "CD",
              "name": "Democratic Republic of the Congo",
              "labelrank": "2",
              "country-abbrev": "D.R.C.",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "COD",
              "iso-a2": "CD",
              "woe-id": "23424780",
              "continent": "Africa",
              "hc-middle-lon": 23.235,
              "hc-middle-lat": -2.562
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-753, 879, 880]
            ],
            "id": "KW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kw",
              "hc-a2": "KW",
              "name": "Kuwait",
              "labelrank": "6",
              "country-abbrev": "Kwt.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "KWT",
              "iso-a2": "KW",
              "woe-id": "23424870",
              "continent": "Asia",
              "hc-middle-lon": 47.634,
              "hc-middle-lat": 29.392
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [881, -882, 882]
              ],
              [
                [-242, 883, 884, 885, 886, 887, 888, 889, 890, -97, 891, 892, -446, 893]
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
              "hc-middle-lon": 10.578,
              "hc-middle-lat": 52.384
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-893, 894, -95, 895, -445, 896, -447]
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
              "hc-middle-lon": 4.597,
              "hc-middle-lat": 50.652
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-214, 897]
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
              "hc-middle-lon": -8.416,
              "hc-middle-lat": 53.346
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [898, 899, 900, -122, -642]
            ],
            "id": "KP",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kp",
              "hc-a2": "KP",
              "name": "North Korea",
              "labelrank": "3",
              "country-abbrev": "N.K.",
              "subregion": "Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "PRK",
              "iso-a2": "KP",
              "woe-id": "23424865",
              "continent": "Asia",
              "hc-middle-lon": 126.263,
              "hc-middle-lat": 39.625
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-900, 901]
            ],
            "id": "KR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kr",
              "hc-a2": "KR",
              "name": "South Korea",
              "labelrank": "2",
              "country-abbrev": "S.K.",
              "subregion": "Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "KOR",
              "iso-a2": "KR",
              "woe-id": "23424868",
              "continent": "Asia",
              "hc-middle-lon": 127.911,
              "hc-middle-lat": 36.498
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [902, 903, -143, 904]
            ],
            "id": "GY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gy",
              "hc-a2": "GY",
              "name": "Guyana",
              "labelrank": "4",
              "country-abbrev": "Guy.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "GUY",
              "iso-a2": "GY",
              "woe-id": "23424836",
              "continent": "South America",
              "hc-middle-lon": -60.049,
              "hc-middle-lat": 8.049
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [905, 906, 907, -826, 908]
            ],
            "id": "HN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "hn",
              "hc-a2": "HN",
              "name": "Honduras",
              "labelrank": "5",
              "country-abbrev": "Hond.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "HND",
              "iso-a2": "HN",
              "woe-id": "23424841",
              "continent": "North America",
              "hc-middle-lon": -84.843,
              "hc-middle-lat": 15.731
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-472, -73, -126, 909, -577, 910]
            ],
            "id": "MM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mm",
              "hc-a2": "MM",
              "name": "Myanmar",
              "labelrank": "3",
              "country-abbrev": "Myan.",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "MMR",
              "iso-a2": "MM",
              "woe-id": "23424763",
              "continent": "Asia",
              "hc-middle-lon": 93.671,
              "hc-middle-lat": 19.76
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [911, 912, 913, 914]
            ],
            "id": "GA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ga",
              "hc-a2": "GA",
              "name": "Gabon",
              "labelrank": "4",
              "country-abbrev": "Gabon",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "GAB",
              "iso-a2": "GA",
              "woe-id": "23424822",
              "continent": "Africa",
              "hc-middle-lon": 10.769,
              "hc-middle-lat": -1.738
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-912, 915, 916]
            ],
            "id": "GQ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gq",
              "hc-a2": "GQ",
              "name": "Equatorial Guinea",
              "labelrank": "4",
              "country-abbrev": "Eq. G.",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "GNQ",
              "iso-a2": "GQ",
              "woe-id": "23424804",
              "continent": "Africa",
              "hc-middle-lon": 10.377,
              "hc-middle-lat": 1.603
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [917, -907, 918, -807]
            ],
            "id": "NI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ni",
              "hc-a2": "NI",
              "name": "Nicaragua",
              "labelrank": "5",
              "country-abbrev": "Nic.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "NIC",
              "iso-a2": "NI",
              "woe-id": "23424915",
              "continent": "North America",
              "hc-middle-lon": -83.759,
              "hc-middle-lat": 12.95
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-636, 919, 920, 921, -588]
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
              "hc-middle-lon": 21.391,
              "hc-middle-lat": 57.165
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [922, -732]
              ],
              [
                [-875, 923, -873, 924, -871, 925, -762, 926, -730, 927]
              ]
            ],
            "id": "UG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ug",
              "hc-a2": "UG",
              "name": "Uganda",
              "labelrank": "3",
              "country-abbrev": "Uga.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "UGA",
              "iso-a2": "UG",
              "woe-id": "23424974",
              "continent": "Africa",
              "hc-middle-lon": 30.387,
              "hc-middle-lat": 1.024
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [928, 928, 928]
              ],
              [
                [929, -719]
              ],
              [
                [720, -721, 930]
              ],
              [
                [931, -723]
              ],
              [
                [-725, 932, -804, 933]
              ]
            ],
            "id": "MW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mw",
              "hc-a2": "MW",
              "name": "Malawi",
              "labelrank": "6",
              "country-abbrev": "Mal.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "MWI",
              "iso-a2": "MW",
              "woe-id": "23424889",
              "continent": "Africa",
              "hc-middle-lon": 33.27,
              "hc-middle-lat": -11.462
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-818, -683, -469, 934, -687],
              [-680],
              [-681],
              [-682]
            ],
            "id": "AM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "am",
              "hc-a2": "AM",
              "name": "Armenia",
              "labelrank": "6",
              "country-abbrev": "Arm.",
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "ARM",
              "iso-a2": "AM",
              "woe-id": "23424743",
              "continent": "Asia",
              "hc-middle-lon": 43.694,
              "hc-middle-lat": 40.952
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [935, 936, 937, 938]
            ],
            "id": "SX",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sx",
              "hc-a2": "SX",
              "name": "Somaliland",
              "labelrank": "5",
              "country-abbrev": "Solnd.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "-99",
              "iso-a2": "SX",
              "woe-id": "-99",
              "continent": "Africa",
              "hc-middle-lon": 47.371,
              "hc-middle-lat": 9.634
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [939, -700, 940, -820, 941, -671, -702]
              ],
              [
                [942, 671]
              ],
              [
                [943, -673]
              ]
            ],
            "id": "TM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tm",
              "hc-a2": "TM",
              "name": "Turkmenistan",
              "labelrank": "4",
              "country-abbrev": "Turkm.",
              "subregion": "Central Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "TKM",
              "iso-a2": "TM",
              "woe-id": "23424972",
              "continent": "Asia",
              "hc-middle-lon": 58.016,
              "hc-middle-lat": 39.604
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [944, -865, 945, -726, -934, -803, 946, 947, 948, 949, -791, -867]
            ],
            "id": "ZM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "zm",
              "hc-a2": "ZM",
              "name": "Zambia",
              "labelrank": "3",
              "country-abbrev": "Zambia",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "ZMB",
              "iso-a2": "ZM",
              "woe-id": "23425003",
              "continent": "Africa",
              "hc-middle-lon": 26.151,
              "hc-middle-lat": -13.95
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-205, -204, 950, 951, 952]
              ],
              [
                [953, 954]
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
              "hc-middle-lon": 33.68,
              "hc-middle-lat": 35.184
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [955, 956, 957, 958, 959]
            ],
            "id": "MR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mr",
              "hc-a2": "MR",
              "name": "Mauritania",
              "labelrank": "3",
              "country-abbrev": "Mrt.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "MRT",
              "iso-a2": "MR",
              "woe-id": "23424896",
              "continent": "Africa",
              "hc-middle-lon": -9.578,
              "hc-middle-lat": 19.454
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-956, 960, -705, 961, 962, 963, 964, 965]
            ],
            "id": "DZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "dz",
              "hc-a2": "DZ",
              "name": "Algeria",
              "labelrank": "3",
              "country-abbrev": "Alg.",
              "subregion": "Northern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "DZA",
              "iso-a2": "DZ",
              "woe-id": "23424740",
              "continent": "Africa",
              "hc-middle-lon": 4.315,
              "hc-middle-lat": 28.329
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [966, -921, 967, 968, -658]
              ],
              [
                [969, -656]
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
              "hc-middle-lon": 22.475,
              "hc-middle-lat": 56.251
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [970, 971, -938, 972, -764, 973, -862, 974, 975]
            ],
            "id": "ET",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "et",
              "hc-a2": "ET",
              "name": "Ethiopia",
              "labelrank": "2",
              "country-abbrev": "Eth.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "ETH",
              "iso-a2": "ET",
              "woe-id": "23424808",
              "continent": "Africa",
              "hc-middle-lon": 39.73,
              "hc-middle-lat": 8.248
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-975, -861, 976, 977]
            ],
            "id": "ER",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "er",
              "hc-a2": "ER",
              "name": "Eritrea",
              "labelrank": "4",
              "country-abbrev": "Erit.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "ERI",
              "iso-a2": "ER",
              "woe-id": "23424806",
              "continent": "Africa",
              "hc-middle-lon": 38.329,
              "hc-middle-lat": 17.698
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [978, 979, 980, 981, 982]
            ],
            "id": "GH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gh",
              "hc-a2": "GH",
              "name": "Ghana",
              "labelrank": "3",
              "country-abbrev": "Ghana",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "GHA",
              "iso-a2": "GH",
              "woe-id": "23424824",
              "continent": "Africa",
              "hc-middle-lon": -2.658,
              "hc-middle-lat": 6.194
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [983, -603, 984, 985, -836]
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
              "hc-middle-lon": 14.991,
              "hc-middle-lat": 46.016
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [986, -909, -825, 987, -168, -842]
            ],
            "id": "GT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gt",
              "hc-a2": "GT",
              "name": "Guatemala",
              "labelrank": "3",
              "country-abbrev": "Guat.",
              "subregion": "Central America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "GTM",
              "iso-a2": "GT",
              "woe-id": "23424834",
              "continent": "North America",
              "hc-middle-lon": -90.382,
              "hc-middle-lat": 14.247
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [988, -839, 989, 990, -834]
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
              "hc-middle-lon": 17.374,
              "hc-middle-lat": 43.934
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [991, 992, 993, 994, 995, 996, -751, 997, 998]
            ],
            "id": "JO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "jo",
              "hc-a2": "JO",
              "name": "Jordan",
              "labelrank": "4",
              "country-abbrev": "Jord.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "JOR",
              "iso-a2": "JO",
              "woe-id": "23424860",
              "continent": "Asia",
              "hc-middle-lon": 36.799,
              "hc-middle-lat": 29.801
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-996, 999, 1000, 1001, -464, 1002]
            ],
            "id": "SY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sy",
              "hc-a2": "SY",
              "name": "Syria",
              "labelrank": "3",
              "country-abbrev": "Syria",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "SYR",
              "iso-a2": "SY",
              "woe-id": "23424956",
              "continent": "Asia",
              "hc-middle-lon": 37.363,
              "hc-middle-lat": 34.605
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1003, -87]
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
              "hc-middle-lon": 7.406,
              "hc-middle-lat": 43.69
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1004, -1005, 1005]
              ],
              [
                [1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, -226, 1014, -232, 1015, 1016]
              ],
              [
                [1017, -1018, 1018]
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
              "hc-middle-lon": 19.957,
              "hc-middle-lat": 41.168
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1019, -146, 1020, -738, -134]
            ],
            "id": "UY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "uy",
              "hc-a2": "UY",
              "name": "Uruguay",
              "labelrank": "4",
              "country-abbrev": "Ury.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "URY",
              "iso-a2": "UY",
              "woe-id": "23424979",
              "continent": "South America",
              "hc-middle-lon": -54.105,
              "hc-middle-lat": -33.139
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [611, -612, -611, -206, -953]
              ],
              [
                [-955, -616]
              ],
              [
                [-618, 617, 1021]
              ],
              [
                [-203, -202, -619, -951]
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
              "hc-middle-lon": 33.114,
              "hc-middle-lat": 35.141
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1022, -116, -644, -118]
            ],
            "id": "MN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mn",
              "hc-a2": "MN",
              "name": "Mongolia",
              "labelrank": "3",
              "country-abbrev": "Mong.",
              "subregion": "Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "MNG",
              "iso-a2": "MN",
              "woe-id": "23424887",
              "continent": "Asia",
              "hc-middle-lon": 103.419,
              "hc-middle-lat": 46.717
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-878, 1023, -876, -928, -729, 1024]
            ],
            "id": "RW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "rw",
              "hc-a2": "RW",
              "name": "Rwanda",
              "labelrank": "3",
              "country-abbrev": "Rwa.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "RWA",
              "iso-a2": "RW",
              "woe-id": "23424937",
              "continent": "Africa",
              "hc-middle-lon": 29.784,
              "hc-middle-lat": -2.003
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-973, -937, 1025, -765]
            ],
            "id": "SO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "so",
              "hc-a2": "SO",
              "name": "Somalia",
              "labelrank": "6",
              "country-abbrev": "Som.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SOM",
              "iso-a2": "SO",
              "woe-id": "-90",
              "continent": "Africa",
              "hc-middle-lon": 44.947,
              "hc-middle-lat": 1.84
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1026, -769]
              ],
              [
                [-771, 1027, -767, -139, 1028, -740, -570]
              ]
            ],
            "id": "BO",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bo",
              "hc-a2": "BO",
              "name": "Bolivia",
              "labelrank": "3",
              "country-abbrev": "Bolivia",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "BOL",
              "iso-a2": "BO",
              "woe-id": "23424762",
              "continent": "South America",
              "hc-middle-lon": -63.773,
              "hc-middle-lat": -17.529
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-913, -917, 1029, -816, 1030, 1031, 1032, -852, 1033]
              ],
              [
                [1034, -1035, 1035]
              ]
            ],
            "id": "CM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cm",
              "hc-a2": "CM",
              "name": "Cameroon",
              "labelrank": "3",
              "country-abbrev": "Cam.",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "CMR",
              "iso-a2": "CM",
              "woe-id": "23424785",
              "continent": "Africa",
              "hc-middle-lon": 12.387,
              "hc-middle-lat": 3.9
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1034, -851, -869, -786, 1036, -914]
            ],
            "id": "CG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cg",
              "hc-a2": "CG",
              "name": "Republic of Congo",
              "labelrank": "4",
              "country-abbrev": "Rep. Congo",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "COG",
              "iso-a2": "CG",
              "woe-id": "23424779",
              "continent": "Africa",
              "hc-middle-lon": 12.234,
              "hc-middle-lat": -3.088
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1037, -706, -961, -960]
            ],
            "id": "EH",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "eh",
              "hc-a2": "EH",
              "name": "Western Sahara",
              "labelrank": "7",
              "country-abbrev": "W. Sah.",
              "subregion": "Northern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "ESH",
              "iso-a2": "EH",
              "woe-id": "23424990",
              "continent": "Africa",
              "hc-middle-lon": -13.648,
              "hc-middle-lat": 22.772
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-990, -838, 1038, 1039, 1040, 1041, 1042, 1043]
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
              "hc-middle-lon": 20.58,
              "hc-middle-lat": 44.104
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1044, 1044, -1008, 1045, 1017, 1046, -1017, 1047, -835, -991]
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
              "hc-middle-lon": 19.218,
              "hc-middle-lat": 42.694
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-811, 1048, -983, 1049]
            ],
            "id": "TG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tg",
              "hc-a2": "TG",
              "name": "Togo",
              "labelrank": "6",
              "country-abbrev": "Togo",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "TGO",
              "iso-a2": "TG",
              "woe-id": "23424965",
              "continent": "Africa",
              "hc-middle-lon": 1.188,
              "hc-middle-lat": 7.058
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-794, -578, -910, -125, -795]
            ],
            "id": "LA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "la",
              "hc-a2": "LA",
              "name": "Laos",
              "labelrank": "4",
              "country-abbrev": "Laos",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "LAO",
              "iso-a2": "LA",
              "woe-id": "23424872",
              "continent": "Asia",
              "hc-middle-lon": 106.638,
              "hc-middle-lat": 16.024
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-111, -757, -821, -941, -699, -691]
            ],
            "id": "AF",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "af",
              "hc-a2": "AF",
              "name": "Afghanistan",
              "labelrank": "3",
              "country-abbrev": "Afg.",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "AFG",
              "iso-a2": "AF",
              "woe-id": "23424739",
              "continent": "Asia",
              "hc-middle-lon": 65.78,
              "hc-middle-lat": 33.728
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1050, 1051, 1052, -634, 1053, 1054, 1055, 1056, 1057],
              [1058],
              [1059]
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
              "hc-middle-lon": 34.697,
              "hc-middle-lat": 48.725
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1051, 1060, 1061, 1062, 1063]
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
              "hc-middle-lon": 18.025,
              "hc-middle-lat": 48.555
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-77, -754, -109]
            ],
            "id": "JK",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "jk",
              "hc-a2": "JK",
              "name": "Siachen Glacier",
              "labelrank": "5",
              "country-abbrev": "Siachen",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "-99",
              "iso-a2": "JK",
              "woe-id": "23424928",
              "continent": "Asia",
              "hc-middle-lon": 77.094,
              "hc-middle-lat": 35.273
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1064, -461, -229, 1065, -1041, 1066]
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
              "hc-middle-lon": 27.049,
              "hc-middle-lat": 42.684
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1067, -746]
            ],
            "id": "QA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "qa",
              "hc-a2": "QA",
              "name": "Qatar",
              "labelrank": "5",
              "country-abbrev": "Qatar",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "QAT",
              "iso-a2": "QA",
              "woe-id": "23424930",
              "continent": "Asia",
              "hc-middle-lon": 50.995,
              "hc-middle-lat": 25.248
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1068, 1069]
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
              "hc-middle-lon": 9.541,
              "hc-middle-lat": 47.116
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1069, 1070, 1071, -889, 1072, -1062, 1073, -985, -602, 1074]
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
              "hc-middle-lon": 13.482,
              "hc-middle-lat": 47.332
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-800, -847]
            ],
            "id": "SZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sz",
              "hc-a2": "SZ",
              "name": "Swaziland",
              "labelrank": "4",
              "country-abbrev": "Swz.",
              "subregion": "Southern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SWZ",
              "iso-a2": "SZ",
              "woe-id": "23424993",
              "continent": "Africa",
              "hc-middle-lon": 31.435,
              "hc-middle-lat": -26.385
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1058, 1075, -1039, -837, -986, -1074, -1061]
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
              "hc-middle-lon": 17.916,
              "hc-middle-lat": 46.904
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1040, -1076, -1057, 1076, -1055, 1077, -1067]
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
              "hc-middle-lon": 26.522,
              "hc-middle-lat": 45.941
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-813, 1078, 1079, -965, 1080, 1081, -814]
            ],
            "id": "NE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ne",
              "hc-a2": "NE",
              "name": "Niger",
              "labelrank": "3",
              "country-abbrev": "Niger",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "NER",
              "iso-a2": "NE",
              "woe-id": "23424906",
              "continent": "Africa",
              "hc-middle-lon": 10.284,
              "hc-middle-lat": 17.293
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-96, -895, -892]
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
              "hc-middle-lon": 6.094,
              "hc-middle-lat": 49.657
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-92, -180]
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
              "hc-middle-lon": 1.59,
              "hc-middle-lat": 42.513
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [-981, 1082, 1083, 1084, 1085, 1086]
              ],
              [
                [1087, 1088]
              ]
            ],
            "id": "CI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ci",
              "hc-a2": "CI",
              "name": "Ivory Coast",
              "labelrank": "3",
              "country-abbrev": "I.C.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "CIV",
              "iso-a2": "CI",
              "woe-id": "23424854",
              "continent": "Africa",
              "hc-middle-lon": -5.553,
              "hc-middle-lat": 7.506
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1084, 1089, -829, 1090]
            ],
            "id": "LR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lr",
              "hc-a2": "LR",
              "name": "Liberia",
              "labelrank": "4",
              "country-abbrev": "Liberia",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "LBR",
              "iso-a2": "LR",
              "woe-id": "23424876",
              "continent": "Africa",
              "hc-middle-lon": -7.632,
              "hc-middle-lat": 5.376
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1091, -549]
              ],
              [
                [1092, -547]
              ]
            ],
            "id": "BN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bn",
              "hc-a2": "BN",
              "name": "Brunei",
              "labelrank": "6",
              "country-abbrev": "Brunei",
              "subregion": "South-Eastern Asia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "BRN",
              "iso-a2": "BN",
              "woe-id": "23424773",
              "continent": "Asia",
              "hc-middle-lon": 114.301,
              "hc-middle-lat": 4.587
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1093, -880, -752, -997, -1003, -463, -823]
            ],
            "id": "IQ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "iq",
              "hc-a2": "IQ",
              "name": "Iraq",
              "labelrank": "3",
              "country-abbrev": "Iraq",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "IRQ",
              "iso-a2": "IQ",
              "woe-id": "23424855",
              "continent": "Asia",
              "hc-middle-lon": 43.217,
              "hc-middle-lat": 33.753
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-935, -468, 1094, -648, -688]
            ],
            "id": "GE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ge",
              "hc-a2": "GE",
              "name": "Georgia",
              "labelrank": "5",
              "country-abbrev": "Geo.",
              "subregion": "Western Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "GEO",
              "iso-a2": "GE",
              "woe-id": "23424823",
              "continent": "Asia",
              "hc-middle-lon": 46.386,
              "hc-middle-lat": 41.434
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1095, 1096]
            ],
            "id": "GM",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gm",
              "hc-a2": "GM",
              "name": "Gambia",
              "labelrank": "6",
              "country-abbrev": "Gambia",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "GMB",
              "iso-a2": "GM",
              "woe-id": "23424821",
              "continent": "Africa",
              "hc-middle-lon": -15.817,
              "hc-middle-lat": 13.409
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [881, 1097, -1071, -1070, -1075, -601, -101, 1098, 1099, -98, -891]
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
              "hc-middle-lon": 6.644,
              "hc-middle-lat": 46.674
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1100, 1034, 1101, -1031, -815, -1082, 1102, -854, -853, -1033]
            ],
            "id": "TD",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "td",
              "hc-a2": "TD",
              "name": "Chad",
              "labelrank": "3",
              "country-abbrev": "Chad",
              "subregion": "Middle Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "TCD",
              "iso-a2": "TD",
              "woe-id": "23424777",
              "continent": "Africa",
              "hc-middle-lon": 18.382,
              "hc-middle-lat": 13.494
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1009, -1045, -1043, 1103]
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
              "hc-middle-lon": 20.852,
              "hc-middle-lat": 42.504
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1104, -1001, 1105]
            ],
            "id": "LB",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "lb",
              "hc-a2": "LB",
              "name": "Lebanon",
              "labelrank": "5",
              "country-abbrev": "Leb.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "LBN",
              "iso-a2": "LB",
              "woe-id": "23424873",
              "continent": "Asia",
              "hc-middle-lon": 35.651,
              "hc-middle-lat": 33.737
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-972, 1106, -976, -978, 1107, -939]
            ],
            "id": "DJ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "dj",
              "hc-a2": "DJ",
              "name": "Djibouti",
              "labelrank": "5",
              "country-abbrev": "Dji.",
              "subregion": "Eastern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "DJI",
              "iso-a2": "DJ",
              "woe-id": "23424797",
              "continent": "Africa",
              "hc-middle-lon": 42.591,
              "hc-middle-lat": 11.71
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1108, -879, -1025, -728]
            ],
            "id": "BI",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bi",
              "hc-a2": "BI",
              "name": "Burundi",
              "labelrank": "6",
              "country-abbrev": "Bur.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "BDI",
              "iso-a2": "BI",
              "woe-id": "23424774",
              "continent": "Africa",
              "hc-middle-lon": 29.998,
              "hc-middle-lat": -3.366
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-144, -904, 1109, -105]
            ],
            "id": "SR",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sr",
              "hc-a2": "SR",
              "name": "Suriname",
              "labelrank": "4",
              "country-abbrev": "Sur.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "SUR",
              "iso-a2": "SR",
              "woe-id": "23424913",
              "continent": "South America",
              "hc-middle-lon": -54.319,
              "hc-middle-lat": 5.637
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1110, -1106, -1000, -995, 1111, -993, 1112, -999, 1113, 1114]
            ],
            "id": "IL",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "il",
              "hc-a2": "IL",
              "name": "Israel",
              "labelrank": "4",
              "country-abbrev": "Isr.",
              "subregion": "Western Asia",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "ISR",
              "iso-a2": "IL",
              "woe-id": "23424852",
              "continent": "Asia",
              "hc-middle-lon": 35.309,
              "hc-middle-lat": 32.978
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1086, 1115, 1116, -957, -966, -1080, 1117]
            ],
            "id": "ML",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ml",
              "hc-a2": "ML",
              "name": "Mali",
              "labelrank": "3",
              "country-abbrev": "Mali",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "MLI",
              "iso-a2": "ML",
              "woe-id": "23424891",
              "continent": "Africa",
              "hc-middle-lon": -2.54,
              "hc-middle-lat": 19.423
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1118, -1097, 1119, -958, -1117, 1120, -831]
            ],
            "id": "SN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sn",
              "hc-a2": "SN",
              "name": "Senegal",
              "labelrank": "3",
              "country-abbrev": "Sen.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SEN",
              "iso-a2": "SN",
              "woe-id": "23424943",
              "continent": "Africa",
              "hc-middle-lon": -15.981,
              "hc-middle-lat": 14.245
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1116, -1085, -1091, -828, 1121, -832, -1121]
            ],
            "id": "GN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "gn",
              "hc-a2": "GN",
              "name": "Guinea",
              "labelrank": "3",
              "country-abbrev": "Gin.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "GIN",
              "iso-a2": "GN",
              "woe-id": "23424835",
              "continent": "Africa",
              "hc-middle-lon": -13.291,
              "hc-middle-lat": 9.869
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-949, 1122, -947, -802, -846, 1123]
            ],
            "id": "ZW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "zw",
              "hc-a2": "ZW",
              "name": "Zimbabwe",
              "labelrank": "3",
              "country-abbrev": "Zimb.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "ZWE",
              "iso-a2": "ZW",
              "woe-id": "23425004",
              "continent": "Africa",
              "hc-middle-lon": 31.543,
              "hc-middle-lat": -18.478
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1124, -659, -969, 1125, -1052, -1064, 1126, -887, 1127, -885, 1128]
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
              "hc-middle-lon": 19.085,
              "hc-middle-lat": 52.075
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1129, 1129, 1129]
              ],
              [
                [-1066, -228, 1130, 1004, -1012, 1131, -1010, -1104, -1042]
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
              "hc-middle-lon": 21.685,
              "hc-middle-lat": 41.637
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1132, -136, -741, -1029, -138]
            ],
            "id": "PY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "py",
              "hc-a2": "PY",
              "name": "Paraguay",
              "labelrank": "4",
              "country-abbrev": "Para.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "PRY",
              "iso-a2": "PY",
              "woe-id": "23424917",
              "continent": "South America",
              "hc-middle-lon": -59.639,
              "hc-middle-lat": -22.23
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1126, -968, -920, -635, -1053]
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
              "hc-middle-lon": 27.904,
              "hc-middle-lat": 53.741
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1063, -1073, -888, -1127]
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
              "hc-middle-lon": 15.52,
              "hc-middle-lat": 49.55
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1050, -982, -1087, -1118, -1079, -812]
            ],
            "id": "BF",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bf",
              "hc-a2": "BF",
              "name": "Burkina Faso",
              "labelrank": "3",
              "country-abbrev": "B.F.",
              "subregion": "Western Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "BFA",
              "iso-a2": "BF",
              "woe-id": "23424978",
              "continent": "Africa",
              "hc-middle-lon": -1.96,
              "hc-middle-lat": 12.059
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-950, 1133, -844, 1134, -788]
            ],
            "id": "NA",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "na",
              "hc-a2": "NA",
              "name": "Namibia",
              "labelrank": "3",
              "country-abbrev": "Nam.",
              "subregion": "Southern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "NAM",
              "iso-a2": "NA",
              "woe-id": "23424987",
              "continent": "Africa",
              "hc-middle-lon": 16.202,
              "hc-middle-lat": -21.454
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1081, -964, 1135, 1136, 1137, -855, -1103]
            ],
            "id": "LY",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ly",
              "hc-a2": "LY",
              "name": "Libya",
              "labelrank": "3",
              "country-abbrev": "Libya",
              "subregion": "Northern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "LBY",
              "iso-a2": "LY",
              "woe-id": "23424882",
              "continent": "Africa",
              "hc-middle-lon": 17.408,
              "hc-middle-lat": 28.081
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1136, -963, 1138]
            ],
            "id": "TN",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "tn",
              "hc-a2": "TN",
              "name": "Tunisia",
              "labelrank": "3",
              "country-abbrev": "Tun.",
              "subregion": "Northern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "TUN",
              "iso-a2": "TN",
              "woe-id": "23424967",
              "continent": "Africa",
              "hc-middle-lon": 9.631,
              "hc-middle-lat": 37.112
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-127, -71]
            ],
            "id": "BT",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bt",
              "hc-a2": "BT",
              "name": "Bhutan",
              "labelrank": "5",
              "country-abbrev": "Bhutan",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "BTN",
              "iso-a2": "BT",
              "woe-id": "23424770",
              "continent": "Asia",
              "hc-middle-lon": 90.329,
              "hc-middle-lat": 27.533
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1077, -1056]
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
              "hc-middle-lon": 28.394,
              "hc-middle-lat": 47.159
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-926, -870, -849, -863, -974, -763]
            ],
            "id": "SS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ss",
              "hc-a2": "SS",
              "name": "South Sudan",
              "labelrank": "3",
              "country-abbrev": "S. Sud.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "SSD",
              "iso-a2": "SS",
              "woe-id": "-99",
              "continent": "Africa",
              "hc-middle-lon": 29.89,
              "hc-middle-lat": 7.161
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-1124, -845, -1134]
            ],
            "id": "BW",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bw",
              "hc-a2": "BW",
              "name": "Botswana",
              "labelrank": "4",
              "country-abbrev": "Bwa.",
              "subregion": "Southern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "BWA",
              "iso-a2": "BW",
              "woe-id": "23424755",
              "continent": "Africa",
              "hc-middle-lon": 24.546,
              "hc-middle-lat": -23.271
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1139, 1140]
              ],
              [
                [1141]
              ],
              [
                [1142]
              ]
            ],
            "id": "BS",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "bs",
              "hc-a2": "BS",
              "name": "The Bahamas",
              "labelrank": "4",
              "country-abbrev": "Bhs.",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "BHS",
              "iso-a2": "BS",
              "woe-id": "23424758",
              "continent": "North America",
              "hc-middle-lon": -73.774,
              "hc-middle-lat": 22.639
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1143]
              ],
              [
                [1144]
              ]
            ],
            "id": "NZ",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "nz",
              "hc-a2": "NZ",
              "name": "New Zealand",
              "labelrank": "2",
              "country-abbrev": "N.Z.",
              "subregion": "Australia and New Zealand",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "NZL",
              "iso-a2": "NZ",
              "woe-id": "23424916",
              "continent": "Oceania",
              "hc-middle-lon": 169.324,
              "hc-middle-lat": -44.861
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1145]
            ],
            "id": "CU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "cu",
              "hc-a2": "CU",
              "name": "Cuba",
              "labelrank": "3",
              "country-abbrev": "Cuba",
              "subregion": "Caribbean",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "CUB",
              "iso-a2": "CU",
              "woe-id": "23424793",
              "continent": "North America",
              "hc-middle-lon": -77.562,
              "hc-middle-lat": 21.023
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1146, -714, -773]
            ],
            "id": "EC",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ec",
              "hc-a2": "EC",
              "name": "Ecuador",
              "labelrank": "3",
              "country-abbrev": "Ecu.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "ECU",
              "iso-a2": "EC",
              "woe-id": "23424801",
              "continent": "South America",
              "hc-middle-lon": -79.917,
              "hc-middle-lat": -0.948
            }
          },
          {
            "type": "MultiPolygon",
            "arcs": [
              [
                [1147]
              ],
              [
                [1148]
              ]
            ],
            "id": "AU",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "au",
              "hc-a2": "AU",
              "name": "Australia",
              "labelrank": "2",
              "country-abbrev": "Auz.",
              "subregion": "Australia and New Zealand",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "AUS",
              "iso-a2": "AU",
              "woe-id": "-90",
              "continent": "Oceania",
              "hc-middle-lon": 134.342,
              "hc-middle-lat": -23.92
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1149, -905, -142, -712]
            ],
            "id": "VE",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "ve",
              "hc-a2": "VE",
              "name": "Venezuela",
              "labelrank": "3",
              "country-abbrev": "Ven.",
              "subregion": "South America",
              "region-wb": "Latin America & Caribbean",
              "iso-a3": "VEN",
              "iso-a2": "VE",
              "woe-id": "23424982",
              "continent": "South America",
              "hc-middle-lon": -66.443,
              "hc-middle-lat": 8.174
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1150]
            ],
            "id": "SB",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "sb",
              "hc-a2": "SB",
              "name": "Solomon Islands",
              "labelrank": "3",
              "country-abbrev": "S. Is.",
              "subregion": "Melanesia",
              "region-wb": "East Asia & Pacific",
              "iso-a3": "SLB",
              "iso-a2": "SB",
              "woe-id": "23424766",
              "continent": "Oceania",
              "hc-middle-lon": 157.194,
              "hc-middle-lat": -7.834
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1151]
            ],
            "id": "MG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "mg",
              "hc-a2": "MG",
              "name": "Madagascar",
              "labelrank": "3",
              "country-abbrev": "Mad.",
              "subregion": "Eastern Africa",
              "region-wb": "Sub-Saharan Africa",
              "iso-a3": "MDG",
              "iso-a2": "MG",
              "woe-id": "23424883",
              "continent": "Africa",
              "hc-middle-lon": 46.442,
              "hc-middle-lat": -18.567
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1152]
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
              "hc-middle-lon": -19,
              "hc-middle-lat": 64.914
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [1153, 1154, -857, 1155, 1156, -1138, 1157, -1115]
            ],
            "id": "EG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "eg",
              "hc-a2": "EG",
              "name": "Egypt",
              "labelrank": "2",
              "country-abbrev": "Egypt",
              "subregion": "Northern Africa",
              "region-wb": "Middle East & North Africa",
              "iso-a3": "EGY",
              "iso-a2": "EG",
              "woe-id": "23424802",
              "continent": "Africa",
              "hc-middle-lon": 30.765,
              "hc-middle-lat": 25.319
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-693, -698, -675, -113],
              [-690],
              [-695],
              [-696]
            ],
            "id": "KG",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "kg",
              "hc-a2": "KG",
              "name": "Kyrgyzstan",
              "labelrank": "4",
              "country-abbrev": "Kgz.",
              "subregion": "Central Asia",
              "region-wb": "Europe & Central Asia",
              "iso-a3": "KGZ",
              "iso-a2": "KG",
              "woe-id": "23424864",
              "continent": "Asia",
              "hc-middle-lon": 74.457,
              "hc-middle-lat": 41.494
            }
          },
          {
            "type": "Polygon",
            "arcs": [
              [-79, -108]
            ],
            "id": "NP",
            "properties": {
              "hc-group": "admin0",
              "hc-key": "np",
              "hc-a2": "NP",
              "name": "Nepal",
              "labelrank": "3",
              "country-abbrev": "Nepal",
              "subregion": "Southern Asia",
              "region-wb": "South Asia",
              "iso-a3": "NPL",
              "iso-a2": "NP",
              "woe-id": "23424911",
              "continent": "Asia",
              "hc-middle-lon": 84.16,
              "hc-middle-lat": 28.155
            }
          }
        ],
        "hc-recommended-transform": {
          "default": {
            "crs": "+proj=mill +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R_A +datum=WGS84 +units=m +no_defs",
            "scale": 0.0000172182781654,
            "jsonres": 15.5,
            "jsonmarginX": -999,
            "jsonmarginY": 9851,
            "xoffset": -19495356.3693,
            "yoffset": 12635908.1982
          }
        }
      }
    },
    "arcs": [
      [
        [4802, 8470],
        [13, -20],
        [-1, -6],
        [-14, 17],
        [2, 9]
      ],
      [
        [503, 4426],
        [-1, 0],
        [1, 0]
      ],
      [
        [1589, 7478],
        [3, -4],
        [-10, 7],
        [1, 8],
        [6, -11]
      ],
      [
        [1591, 7494],
        [2, -1],
        [-2, -6],
        [-5, 2],
        [5, 5]
      ],
      [
        [1317, 7940],
        [2, 0],
        [-1, -11],
        [-3, 9],
        [2, 2]
      ],
      [
        [1315, 7959],
        [3, -9],
        [-2, -5],
        [-3, 3],
        [2, 11]
      ],
      [
        [1303, 7962],
        [4, -3],
        [11, -37],
        [-13, 19],
        [-2, 21]
      ],
      [
        [1355, 7955],
        [-1, -8],
        [-7, 0],
        [2, 19],
        [6, -11]
      ],
      [
        [1303, 7962],
        [-5, -1],
        [-1, 7],
        [5, 1],
        [1, -7]
      ],
      [
        [1342, 7976],
        [5, -8],
        [-3, -13],
        [-3, 18],
        [1, 3]
      ],
      [
        [1291, 7978],
        [6, 3],
        [0, -8],
        [-6, -7],
        [0, 12]
      ],
      [
        [1302, 7978],
        [-1, -2],
        [-4, 7],
        [5, 0],
        [0, -5]
      ],
      [
        [1286, 8011],
        [4, 12],
        [12, 5],
        [-4, -9],
        [-12, -8]
      ],
      [
        [1323, 8031],
        [11, -7],
        [-5, -13],
        [-10, 10],
        [4, 10]
      ],
      [
        [1319, 8050],
        [0, -12],
        [-12, 3],
        [4, 9],
        [8, 0]
      ],
      [
        [1332, 8043],
        [3, -17],
        [-8, 12],
        [0, 15],
        [5, -10]
      ],
      [
        [1313, 8075],
        [9, -17],
        [-6, -5],
        [-5, 2],
        [2, 20]
      ],
      [
        [1288, 8094],
        [22, -10],
        [-5, -34],
        [-15, 0],
        [-2, 44]
      ],
      [
        [1238, 8106],
        [-2, -15],
        [-5, -2],
        [3, 12],
        [4, 5]
      ],
      [
        [1216, 8163],
        [-2, -14],
        [-3, 7],
        [2, 12],
        [3, -5]
      ],
      [
        [2545, 7457],
        [-4, -10],
        [-14, -15],
        [-3, 6],
        [21, 19]
      ],
      [
        [2587, 7255],
        [-2, -17],
        [-6, -20],
        [-4, 8],
        [12, 29]
      ],
      [
        [2628, 7286],
        [0, -11],
        [-4, -2],
        [2, 11],
        [2, 2]
      ],
      [
        [2681, 7306],
        [2, -10],
        [-8, 0],
        [4, 8],
        [2, 2]
      ],
      [
        [1278, 8012],
        [-8, 65],
        [11, 3],
        [8, -20],
        [-11, -48]
      ],
      [
        [390, 7882],
        [-14, -41],
        [-34, -10],
        [-32, -38],
        [18, 43],
        [32, 0],
        [0, 28],
        [30, 18]
      ],
      [
        [1249, 8092],
        [-6, 37],
        [15, -22],
        [5, -78],
        [-14, 63]
      ],
      [
        [1240, 8149],
        [-6, -33],
        [-19, 33],
        [16, 32],
        [9, -32]
      ],
      [
        [1255, 8181],
        [20, -12],
        [8, -58],
        [-14, 7],
        [-14, 63]
      ],
      [
        [296, 8546],
        [21, -5],
        [-29, -24],
        [-26, 30],
        [-32, 9],
        [43, 13],
        [23, -23]
      ],
      [
        [1586, 7515],
        [-2, -2],
        [0, 2]
      ],
      [
        [1584, 7515],
        [2, 0]
      ],
      [
        [2248, 5909],
        [-1, 27],
        [-7, 7]
      ],
      [
        [2240, 5943],
        [-23, 87],
        [-20, 85]
      ],
      [
        [2197, 6115],
        [-4, 4],
        [-2, 7]
      ],
      [
        [2191, 6126],
        [-31, 20],
        [-22, -64],
        [-38, 49],
        [-11, 64],
        [-45, 88],
        [-46, 0],
        [0, -33],
        [-80, 0],
        [-104, 83],
        [2, 15],
        [-66, -13]
      ],
      [
        [1750, 6335],
        [-6, 41],
        [-34, 67],
        [-35, 3],
        [-23, 36],
        [-49, 187],
        [-3, 46],
        [-34, 79],
        [-3, 64],
        [-15, 45],
        [9, 72],
        [-14, 98],
        [12, 76],
        [7, 120],
        [-19, 201],
        [52, -19],
        [0, 8],
        [10, -19],
        [-11, 21],
        [0, 1],
        [4, 10],
        [-4, -8],
        [-1, 51]
      ],
      [
        [1593, 7515],
        [192, 0],
        [191, 0],
        [191, 0],
        [192, 0],
        [71, -32],
        [34, -36],
        [51, -3]
      ],
      [
        [2515, 7444],
        [-40, -37],
        [-30, -49],
        [36, 7],
        [10, -23],
        [50, 48],
        [1, -4],
        [0, 4],
        [15, 17],
        [9, -3],
        [-16, -27],
        [27, -39],
        [66, 20],
        [13, -23]
      ],
      [
        [2656, 7335],
        [11, 3],
        [0, -13]
      ],
      [
        [2667, 7325],
        [-18, -35],
        [-63, 4],
        [-28, -96],
        [19, 18],
        [-16, -111],
        [3, -72],
        [15, -46],
        [16, 18],
        [13, 78],
        [-9, 48],
        [8, 75],
        [46, 82],
        [30, -33],
        [4, -74],
        [-14, -24],
        [33, -6],
        [7, -64]
      ],
      [
        [2713, 7087],
        [-3, -26],
        [-3, -8]
      ],
      [
        [2707, 7053],
        [-5, 8],
        [-6, -26]
      ],
      [
        [2696, 7035],
        [-12, -40],
        [27, -24],
        [23, 10],
        [70, 74],
        [7, 26]
      ],
      [
        [2811, 7081],
        [-4, 12]
      ],
      [
        [2807, 7093],
        [0, 12]
      ],
      [
        [2807, 7105],
        [64, 4],
        [27, 83]
      ],
      [
        [2898, 7192],
        [14, 28],
        [16, 10]
      ],
      [
        [2928, 7230],
        [88, 0],
        [34, 62],
        [8, 60],
        [21, 54],
        [40, -27],
        [0, -95]
      ],
      [
        [3119, 7284],
        [4, -11],
        [7, 0]
      ],
      [
        [3130, 7273],
        [-1, -26],
        [7, -6]
      ],
      [
        [3136, 7241],
        [6, -25],
        [-35, -31],
        [2, -2],
        [-7, -14],
        [0, 10],
        [-9, -8],
        [4, 2],
        [0, -12],
        [-5, 2],
        [-2, 6],
        [-5, -4],
        [-42, -58],
        [-2, -112],
        [-63, -34],
        [-33, -47],
        [-1, -60],
        [-43, -128],
        [-20, 91],
        [3, -96],
        [-6, -71],
        [13, 0],
        [8, -91],
        [-22, -75],
        [-17, 7],
        [-23, -61],
        [-34, -47],
        [-55, -105],
        [-9, -72],
        [27, -160],
        [14, -119],
        [-10, -118],
        [-20, -5],
        [-29, 96],
        [-19, 103],
        [6, 72],
        [-40, 87],
        [-26, -36],
        [-30, 51],
        [-77, 7],
        [-22, -20],
        [13, -82],
        [-23, 33],
        [-18, -27],
        [-27, 47],
        [-20, -13],
        [-49, 9],
        [-67, -96],
        [-29, -106],
        [11, -63]
      ],
      [
        [2304, 5866],
        [-29, 6],
        [-27, 37]
      ],
      [
        [1300, 8000],
        [-4, -3],
        [-4, 8],
        [8, 0],
        [1, 0],
        [3, 36],
        [34, -80],
        [-1, -37],
        [-24, 47],
        [-14, 21],
        [1, 8]
      ],
      [
        [671, 5475],
        [-7, 18]
      ],
      [
        [664, 5493],
        [6, -7],
        [1, -11]
      ],
      [
        [671, 5475],
        [33, -75],
        [-30, -30],
        [-3, 105]
      ],
      [
        [1357, 7945],
        [-1, -9],
        [-5, 5],
        [6, 4]
      ],
      [
        [1086, 8996],
        [1, -670],
        [51, -16],
        [43, -60],
        [6, -24],
        [29, 49],
        [24, 14],
        [15, -36],
        [43, -64],
        [44, -129],
        [50, -49],
        [0, -45]
      ],
      [
        [1392, 7966],
        [-25, -35],
        [1, 66],
        [-4, 2],
        [-5, 15],
        [-5, -10],
        [-9, 5],
        [-8, 34],
        [-31, 53],
        [-32, 80],
        [-2, 3],
        [2, -5],
        [-9, 4],
        [0, 6],
        [-5, 4],
        [-53, -10],
        [-45, 61],
        [-43, 32],
        [-82, 41],
        [-40, 3],
        [-52, 24],
        [1, 26],
        [-50, 0],
        [5, -61],
        [-47, 0],
        [-10, -23],
        [-60, -37],
        [21, 32],
        [-20, 10],
        [13, 69],
        [27, 24],
        [-3, 21],
        [-50, -61],
        [-10, -40],
        [-39, -39],
        [22, -33],
        [-29, -61],
        [-51, -43],
        [-31, -68],
        [-12, 12],
        [-30, -60],
        [-28, 0],
        [-46, -34],
        [-25, -38],
        [-67, -32],
        [7, 35],
        [34, 16],
        [54, 60],
        [32, -9],
        [-4, 33],
        [40, 39],
        [33, 52],
        [18, 95],
        [-54, -33],
        [-37, 46],
        [-39, -36],
        [2, 67],
        [-17, 44],
        [-35, -23],
        [-40, 41],
        [-15, -26],
        [-30, -10],
        [-22, 24],
        [49, 8],
        [31, 39],
        [-43, 47],
        [10, 38],
        [45, 88],
        [21, -17],
        [27, 29],
        [44, 23],
        [-17, 48],
        [7, 38],
        [-54, -39],
        [-85, 13],
        [-53, 80],
        [77, 53],
        [44, 11],
        [2, -37],
        [50, -5],
        [5, 73],
        [-57, 7],
        [-11, 35],
        [-70, 52],
        [12, 39],
        [52, 3],
        [34, 34],
        [-1, 19],
        [34, 49],
        [29, 0],
        [34, 33],
        [45, 2],
        [34, 33],
        [47, -11],
        [28, -25],
        [49, 5],
        [10, -29],
        [76, 6],
        [59, -27],
        [70, -13],
        [36, 9],
        [63, -33]
      ],
      [
        [720, 8082],
        [-16, 32],
        [43, 50],
        [24, 42],
        [7, -72],
        [-42, -43],
        [-54, -89],
        [38, 80]
      ],
      [
        [664, 5493],
        [-43, 35],
        [30, -7],
        [13, -28]
      ],
      [
        [1357, 7945],
        [1, 5],
        [0, -5],
        [-1, 0]
      ],
      [
        [8917, 7247],
        [1, 6],
        [7, -12],
        [-4, -3],
        [-4, 9]
      ],
      [
        [8692, 6450],
        [-19, -24],
        [-30, 11],
        [41, 107],
        [53, 17],
        [33, -13],
        [43, 146],
        [-9, -48],
        [36, 23],
        [6, 52],
        [27, 17],
        [16, 85],
        [-7, 37],
        [16, 103],
        [10, -31],
        [19, 22],
        [18, -124],
        [-27, -75],
        [0, -71],
        [-14, -80],
        [8, -39],
        [-25, -57],
        [-4, 43],
        [-44, -58],
        [-47, -9],
        [10, -23],
        [-26, -50],
        [-25, 22],
        [9, 56],
        [-46, -11],
        [-22, -26],
        [16, -13],
        [19, 39],
        [13, -15],
        [-13, -76],
        [-12, 22],
        [-33, -59],
        [-8, 52],
        [18, 48]
      ],
      [
        [8594, 6383],
        [-7, 65],
        [19, -56],
        [18, 38],
        [34, -19],
        [9, -46],
        [-20, -113],
        [-31, -9],
        [-1, 112],
        [-21, 28]
      ],
      [
        [8908, 7001],
        [-14, -30],
        [-9, 90],
        [17, 52],
        [26, -2],
        [14, 156],
        [52, -98],
        [35, -28],
        [12, -42],
        [-36, -16],
        [-27, -74],
        [-39, 48],
        [-43, -24],
        [12, -32]
      ],
      [
        [6540, 3679],
        [3, -8],
        [-1, -9],
        [-7, 26],
        [5, -9]
      ],
      [
        [7447, 5570],
        [2, 2],
        [0, -18],
        [-3, 4],
        [1, 12]
      ],
      [
        [7448, 6001],
        [20, 9],
        [1, -47]
      ],
      [
        [7469, 5963],
        [26, -45],
        [63, 18],
        [-13, 58]
      ],
      [
        [7545, 5994],
        [28, 12],
        [55, 100],
        [19, -20],
        [24, 22],
        [32, -82]
      ],
      [
        [7703, 6026],
        [-17, -61],
        [-46, -63],
        [-1, -52],
        [-26, -137],
        [-21, 11],
        [-4, -115],
        [-17, -30]
      ],
      [
        [7571, 5579],
        [-11, 127],
        [-16, -57],
        [-12, 48],
        [37, 94],
        [-13, 18],
        [-45, -2],
        [-15, 59],
        [-39, 34],
        [-10, -39],
        [23, -52],
        [-25, -39],
        [20, -25],
        [-5, -46],
        [14, -108]
      ],
      [
        [7474, 5591],
        [-22, -42],
        [-3, 40],
        [-26, -40],
        [-24, -114],
        [-25, -4],
        [-38, -118],
        [-50, -87],
        [1, -33],
        [-57, -64],
        [-6, -47],
        [8, -119],
        [-13, -96],
        [0, -125],
        [-66, -159],
        [-26, 61],
        [-21, 156],
        [-28, 125],
        [-13, 124],
        [-24, 106],
        [-23, 273],
        [7, 49],
        [-15, 130],
        [-6, -83],
        [-32, -35],
        [-18, 16],
        [-31, 74],
        [27, 42],
        [-43, 44],
        [-13, 48]
      ],
      [
        [6894, 5713],
        [19, 30],
        [31, -7],
        [31, 39],
        [-45, 152],
        [28, 88],
        [39, -7],
        [29, 78],
        [12, 62],
        [33, 86],
        [-1, 42],
        [21, 33],
        [-35, 74],
        [-7, 84],
        [16, 30],
        [40, -19],
        [35, 43]
      ],
      [
        [7140, 6521],
        [22, 27]
      ],
      [
        [7162, 6548],
        [13, -59],
        [17, -22],
        [-3, -58],
        [19, -59],
        [-30, -15],
        [10, -85],
        [62, -82]
      ],
      [
        [7250, 6168],
        [-17, -31],
        [-10, -67],
        [76, -96],
        [51, -11],
        [34, -54],
        [41, -16],
        [24, 27],
        [-1, 81]
      ],
      [
        [3442, 7360],
        [-6, -2],
        [0, 23],
        [2, -16],
        [4, -5]
      ],
      [
        [5264, 7061],
        [-7, -92],
        [-11, 14],
        [-3, 72],
        [21, 6]
      ],
      [
        [9642, 2496],
        [-9, -97],
        [-43, 62],
        [-25, 58],
        [-6, 49],
        [61, -114],
        [22, 42]
      ],
      [
        [6921, 497],
        [39, -9],
        [-12, -43],
        [-37, 0],
        [10, 52]
      ],
      [
        [3249, 5299],
        [3, 5],
        [0, -7]
      ],
      [
        [3252, 5297],
        [-3, 2]
      ],
      [
        [5210, 7143],
        [-1, -2],
        [-1, -2]
      ],
      [
        [5208, 7139],
        [-1, 2],
        [-1, -4]
      ],
      [
        [5206, 7137],
        [-35, -46],
        [-60, 34],
        [-25, -44],
        [3, -36]
      ],
      [
        [5089, 7045],
        [-17, -8],
        [-15, 8]
      ],
      [
        [5057, 7045],
        [-1, 0]
      ],
      [
        [5056, 7045],
        [-7, 4]
      ],
      [
        [5049, 7049],
        [0, 8],
        [-8, 0]
      ],
      [
        [5041, 7057],
        [-40, 6],
        [-49, 50]
      ],
      [
        [4952, 7113],
        [8, 14],
        [13, 177],
        [-27, 71],
        [-23, 32],
        [-51, 42],
        [-1, 36],
        [44, 21],
        [12, -25],
        [36, 10],
        [-15, 76],
        [47, -31],
        [12, 30],
        [38, 37],
        [1, 47],
        [26, 15]
      ],
      [
        [5072, 7665],
        [45, -79],
        [45, -32]
      ],
      [
        [5162, 7554],
        [5, -7],
        [10, 2]
      ],
      [
        [5177, 7549],
        [52, -36],
        [-17, -98]
      ],
      [
        [5212, 7415],
        [-40, -73],
        [3, -21]
      ],
      [
        [5175, 7321],
        [1, 6],
        [2, 2]
      ],
      [
        [5178, 7329],
        [12, 2]
      ],
      [
        [5190, 7331],
        [0, -20],
        [6, -15]
      ],
      [
        [5196, 7296],
        [-11, -58],
        [25, -95]
      ],
      [
        [3497, 4387],
        [7, 30],
        [27, -22],
        [35, -100]
      ],
      [
        [3566, 4295],
        [-35, -133],
        [-46, 10]
      ],
      [
        [3485, 4172],
        [17, 82],
        [-13, 102],
        [8, 31]
      ],
      [
        [9394, 4504],
        [3, -3],
        [0, -9],
        [-3, 0],
        [0, 12]
      ],
      [
        [8019, 5377],
        [25, 61],
        [30, 11],
        [9, -32],
        [-16, -73],
        [-20, -35],
        [-28, 23],
        [0, 45]
      ],
      [
        [7448, 6001],
        [-43, 18],
        [-16, -16],
        [-25, 29],
        [-28, 70],
        [-15, -7],
        [-41, 82],
        [-30, -9]
      ],
      [
        [7162, 6548],
        [-13, -2],
        [-16, 13]
      ],
      [
        [7133, 6559],
        [-22, 59],
        [-40, 41]
      ],
      [
        [7071, 6659],
        [-5, 6],
        [14, 8]
      ],
      [
        [7080, 6673],
        [-3, 92],
        [-26, 4],
        [-5, 63]
      ],
      [
        [7046, 6832],
        [9, 43],
        [44, 41],
        [4, -25],
        [30, 47],
        [36, 8],
        [8, 23],
        [51, 58]
      ],
      [
        [7228, 7027],
        [17, 70],
        [-20, 135],
        [61, 35],
        [21, 119],
        [47, -26],
        [21, 17],
        [8, 97],
        [42, 49]
      ],
      [
        [7425, 7523],
        [6, 1],
        [8, 4]
      ],
      [
        [7439, 7528],
        [4, -41],
        [31, -43],
        [36, -25],
        [19, -77],
        [-4, -99],
        [73, -17],
        [51, -47],
        [28, -114],
        [146, -14],
        [11, -24],
        [47, -30],
        [41, -2],
        [43, 40],
        [76, 12],
        [68, 88],
        [-14, 55],
        [16, 46],
        [44, -26],
        [26, 47],
        [32, 4],
        [25, 62],
        [47, 29],
        [39, -10],
        [6, 23],
        [-37, 77],
        [-23, 0]
      ],
      [
        [8270, 7442],
        [-2, 0],
        [-4, -14]
      ],
      [
        [8264, 7428],
        [-46, -5],
        [-10, 30],
        [33, 122]
      ],
      [
        [8241, 7575],
        [30, -23],
        [40, 36],
        [-2, 26],
        [27, 93],
        [18, 33],
        [-20, 44],
        [22, 38],
        [68, 21],
        [68, -42],
        [65, -247],
        [36, -7],
        [40, -83],
        [7, -43],
        [39, 2],
        [53, 49],
        [12, -49],
        [-18, -33],
        [-7, -71],
        [-30, -85]
      ],
      [
        [8689, 7234],
        [-7, 17],
        [-16, -6]
      ],
      [
        [8666, 7245],
        [-29, -27],
        [8, -57],
        [-7, -86],
        [-12, -24]
      ],
      [
        [8626, 7051],
        [-20, 32],
        [-4, -38],
        [-46, -32],
        [3, -44],
        [-42, 22],
        [-18, -55],
        [-45, -57]
      ],
      [
        [8454, 6879],
        [-53, -49],
        [-36, -50],
        [4, 47],
        [27, 81],
        [-30, 28],
        [-21, -51],
        [-25, -23],
        [-14, -49],
        [-35, -6],
        [9, -69],
        [21, 0],
        [17, -73],
        [35, 50],
        [24, -29],
        [31, 0],
        [-55, -70],
        [-42, -100],
        [29, -53],
        [17, -117],
        [26, -52],
        [5, -75],
        [-28, -26],
        [39, -51],
        [-22, -38],
        [2, -69],
        [-19, -25],
        [-42, -144],
        [8, -41],
        [-25, -21],
        [-65, -155],
        [-48, -10],
        [-16, -44],
        [-16, 60],
        [-2, -64],
        [-79, -56],
        [-22, -79],
        [-5, 89],
        [-36, 27],
        [-12, -27]
      ],
      [
        [8000, 5545],
        [-40, 62],
        [5, 28],
        [-40, 43],
        [-37, -59],
        [-42, 18],
        [-10, -28]
      ],
      [
        [7836, 5609],
        [-16, -9],
        [5, -81],
        [-15, 30]
      ],
      [
        [7810, 5549],
        [-27, -9],
        [-7, 44],
        [-22, 9],
        [10, 65],
        [-18, 9],
        [-7, 64],
        [-27, -18],
        [2, 89],
        [28, 59],
        [-1, 120],
        [-32, 67],
        [-6, -22]
      ],
      [
        [7545, 5994],
        [-38, 43],
        [-38, -74]
      ],
      [
        [4796, 6669],
        [-44, -10],
        [6, 81],
        [-20, 38],
        [22, 150],
        [-2, 83]
      ],
      [
        [4758, 7011],
        [61, 0],
        [10, -28],
        [-20, -39],
        [-1, -143],
        [-12, -132]
      ],
      [
        [2818, 5141],
        [0, 0]
      ],
      [
        [8271, 5091],
        [-1, 0],
        [1, 0]
      ],
      [
        [3622, 3994],
        [35, -7],
        [-11, -85],
        [-50, -24],
        [-5, 85],
        [31, 31]
      ],
      [
        [3515, 1602],
        [11, 54],
        [-1, 11]
      ],
      [
        [3525, 1667],
        [-67, 129],
        [-11, -18],
        [-24, 71],
        [-21, -5]
      ],
      [
        [3402, 1844],
        [51, 138],
        [54, 79],
        [-2, 109],
        [-19, 4]
      ],
      [
        [3486, 2174],
        [0, 2],
        [-1, 7]
      ],
      [
        [3485, 2183],
        [10, 55],
        [0, 43]
      ],
      [
        [3495, 2281],
        [-32, 10],
        [-6, 94],
        [-21, 39],
        [-44, 0],
        [4, 81],
        [-9, 56]
      ],
      [
        [3387, 2561],
        [17, 143],
        [-24, 66],
        [-2, 66],
        [-46, 5],
        [-10, 176],
        [-37, 19],
        [-35, 64],
        [-36, 14],
        [-28, 94],
        [-1, 103],
        [-34, -14],
        [-46, -77],
        [-35, 2]
      ],
      [
        [3070, 3222],
        [-29, -5],
        [3, 113],
        [-19, -36],
        [-28, -4],
        [-51, 176],
        [25, 82],
        [6, 89],
        [59, 71],
        [23, -5]
      ],
      [
        [3059, 3703],
        [14, 201],
        [-16, 90],
        [5, 134],
        [47, 0],
        [23, 27],
        [13, -61]
      ],
      [
        [3145, 4094],
        [36, -41],
        [40, 65],
        [22, 61],
        [-20, 5],
        [-16, 107],
        [85, 19],
        [23, 68]
      ],
      [
        [3315, 4378],
        [21, -7],
        [13, -83],
        [-14, -90],
        [8, -58],
        [26, -49],
        [47, 59],
        [18, -5]
      ],
      [
        [3434, 4145],
        [14, 41],
        [37, -14]
      ],
      [
        [3566, 4295],
        [17, -12],
        [12, -121],
        [21, -37],
        [2, -119],
        [-43, -34],
        [20, -94],
        [40, -13],
        [42, 103],
        [76, -59],
        [9, -97],
        [27, 32],
        [57, -47],
        [45, 5],
        [42, -60],
        [37, -88],
        [45, -17],
        [20, -145],
        [-14, -145],
        [-44, -113],
        [-32, -134],
        [-25, -43],
        [3, -188],
        [-8, -130],
        [-14, -37],
        [-1, -85],
        [-39, -153],
        [3, -31],
        [-30, -71],
        [-64, 0],
        [-72, -94],
        [-24, -48],
        [-22, -80],
        [5, -97],
        [-9, -81],
        [-29, -64],
        [-14, -73],
        [-25, 17],
        [-7, -64],
        [-21, -46],
        [-12, -98],
        [-20, -45]
      ],
      [
        [3520, 1589],
        [-5, 6],
        [0, 7]
      ],
      [
        [631, 4150],
        [3, -12],
        [4, -10],
        [-6, 5],
        [-1, 17]
      ],
      [
        [8454, 4843],
        [19, 5],
        [-21, 55],
        [25, 2],
        [14, -103],
        [-18, 10],
        [-7, -67],
        [-12, 98]
      ],
      [
        [8326, 4824],
        [4, 65],
        [12, -17],
        [-16, -48]
      ],
      [
        [8322, 4805],
        [-1, 2],
        [5, 17]
      ],
      [
        [8326, 4824],
        [0, -2],
        [-4, -17]
      ],
      [
        [8387, 4752],
        [2, 130],
        [32, -56],
        [-6, -43],
        [31, 29],
        [-2, -62],
        [-27, -97],
        [-18, 58],
        [6, 60],
        [-18, -19]
      ],
      [
        [8451, 4535],
        [-23, 29],
        [-25, -7],
        [-16, -92],
        [4, 94],
        [36, 70],
        [13, -38],
        [26, 65],
        [20, -5],
        [0, 75],
        [23, -87],
        [8, -111],
        [-10, -39],
        [-13, 44],
        [-11, -49],
        [0, -80],
        [-32, 44],
        [0, 87]
      ],
      [
        [8455, 4984],
        [-10, -138],
        [-17, 33],
        [-7, 91],
        [-18, 36],
        [2, -57],
        [-24, 57],
        [-14, -38],
        [15, -36],
        [-15, -50],
        [-24, 93],
        [19, 2],
        [-27, 88],
        [-7, 114],
        [16, -17],
        [-2, 102],
        [25, 108],
        [-3, -30],
        [33, -29],
        [6, -84],
        [-8, -59],
        [-18, -24],
        [5, -124],
        [20, 12],
        [53, -50]
      ],
      [
        [8322, 4805],
        [3, -46],
        [-66, -147],
        [62, 193],
        [1, 0]
      ],
      [
        [2594, 5479],
        [-8, -23],
        [0, 9],
        [2, 12],
        [6, 2]
      ],
      [
        [2040, 5561],
        [3, -5],
        [10, -25],
        [-8, 11],
        [-5, 19]
      ],
      [
        [1893, 5761],
        [4, 0],
        [3, -9],
        [0, -5],
        [-7, 14]
      ],
      [
        [1887, 5795],
        [-1, -11],
        [-2, -2],
        [2, 15],
        [1, -2]
      ],
      [
        [1804, 6019],
        [-2, -4],
        [-3, 4],
        [5, 18],
        [0, -18]
      ],
      [
        [1720, 6077],
        [-2, -2],
        [-2, 18],
        [3, -5],
        [1, -11]
      ],
      [
        [1877, 6062],
        [2, 33],
        [7, -11],
        [-2, -20],
        [-7, -2]
      ],
      [
        [1851, 6122],
        [8, -18],
        [2, -22],
        [-13, 31],
        [3, 9]
      ],
      [
        [2191, 6126],
        [-1, -9],
        [7, -2]
      ],
      [
        [2240, 5943],
        [6, -18],
        [2, -16]
      ],
      [
        [2304, 5866],
        [-14, -105],
        [-5, -140],
        [19, -137],
        [38, -135],
        [37, -43],
        [72, 33],
        [26, 40],
        [16, 133],
        [62, 42],
        [39, -26],
        [-20, -74],
        [-11, -141],
        [-13, 17]
      ],
      [
        [2550, 5330],
        [-15, -42],
        [-9, -7]
      ],
      [
        [2526, 5281],
        [-50, 0],
        [-12, -41],
        [29, -61],
        [-38, -24],
        [-15, -106]
      ],
      [
        [2440, 5049],
        [-46, 109],
        [-26, 23],
        [-47, -54],
        [-61, 64],
        [-64, 52],
        [-21, 45],
        [-46, 30],
        [-42, 73],
        [-20, 77],
        [15, 74],
        [-18, 86],
        [-70, 185],
        [-31, 39],
        [0, 68],
        [-31, 47],
        [-44, 115],
        [-27, 130],
        [2, 25],
        [-42, 43],
        [-3, -112],
        [29, -64],
        [86, -316],
        [-2, -45],
        [23, -7],
        [9, -67],
        [-12, -25],
        [-12, 48],
        [-51, 96],
        [-3, 82],
        [-36, 48],
        [-41, 81],
        [24, 9],
        [4, 36],
        [-46, 93],
        [-10, 75],
        [-30, 123]
      ],
      [
        [2293, 5829],
        [-5, -34],
        [2, -29],
        [7, 61],
        [-4, 2]
      ],
      [
        [4575, 6001],
        [-30, 20],
        [-18, -2],
        [27, 34],
        [21, -52]
      ],
      [
        [4920, 6536],
        [1, -3]
      ],
      [
        [4921, 6533],
        [-1, -2]
      ],
      [
        [4920, 6531],
        [-1, 5]
      ],
      [
        [4919, 6536],
        [1, 0]
      ],
      [
        [4852, 6578],
        [2, 0],
        [-1, -4]
      ],
      [
        [4853, 6574],
        [-1, 2],
        [0, 2]
      ],
      [
        [4853, 6595],
        [-23, 11],
        [-9, 46],
        [-25, 17]
      ],
      [
        [4758, 7011],
        [-13, 86],
        [37, 44],
        [17, -16],
        [103, -2],
        [50, -10]
      ],
      [
        [5041, 7057],
        [3, -12],
        [5, 4]
      ],
      [
        [5056, 7045],
        [0, 2],
        [0, 2],
        [1, -4]
      ],
      [
        [5089, 7045],
        [2, -34],
        [-32, -48],
        [-30, -17],
        [-37, -110],
        [16, -54],
        [-20, -29],
        [-6, -52],
        [-27, -19],
        [-11, -42],
        [-66, -5],
        [-24, -40]
      ],
      [
        [4854, 6595],
        [-1, 0]
      ],
      [
        [2781, 5136],
        [0, 0]
      ],
      [
        [7039, 4414],
        [8, -27],
        [-10, 3],
        [4, 12],
        [-2, 12]
      ],
      [
        [8218, 4781],
        [-1, 0],
        [1, 0]
      ],
      [
        [4912, 8226],
        [2, -7],
        [-4, -2],
        [-4, 7],
        [6, 2]
      ],
      [
        [4915, 8244],
        [0, -12],
        [4, -2],
        [-11, 4],
        [7, 10]
      ],
      [
        [4921, 8248],
        [-5, 9],
        [12, -10],
        [-4, -5],
        [-3, 6]
      ],
      [
        [4973, 8328],
        [-7, -34],
        [-1, 24],
        [-9, 8],
        [17, 2]
      ],
      [
        [4975, 8349],
        [6, -2],
        [-12, -5],
        [2, 15],
        [4, -8]
      ],
      [
        [4980, 8362],
        [-2, -10],
        [-4, 2],
        [1, 8],
        [5, 0]
      ],
      [
        [2742, 5388],
        [3, 5],
        [6, -5],
        [-6, -2],
        [-3, 2]
      ],
      [
        [3015, 5565],
        [-8, 0],
        [0, 5],
        [5, 0],
        [3, -5]
      ],
      [
        [3000, 5572],
        [-1, -7],
        [-5, 0],
        [4, 3],
        [2, 4]
      ],
      [
        [4805, 8136],
        [-1, 38],
        [24, 24],
        [-3, -34],
        [-20, -28]
      ],
      [
        [3345, 258],
        [19, 77],
        [30, -10],
        [5, -23],
        [-54, -44]
      ],
      [
        [5943, 6510],
        [-1, -2],
        [-2, 4]
      ],
      [
        [5940, 6512],
        [-1, 0]
      ],
      [
        [5939, 6512],
        [0, -2],
        [-2, 0]
      ],
      [
        [5937, 6510],
        [0, 2]
      ],
      [
        [5937, 6512],
        [1, 0]
      ],
      [
        [5938, 6512],
        [-2, 2]
      ],
      [
        [5936, 6514],
        [3, 0]
      ],
      [
        [5939, 6514],
        [4, 5]
      ],
      [
        [5943, 6519],
        [0, -3]
      ],
      [
        [5943, 6516],
        [-3, 0],
        [3, -6]
      ],
      [
        [5938, 6512],
        [1, 2]
      ],
      [
        [5939, 6514],
        [-1, 0],
        [0, -2]
      ],
      [
        [4854, 6595],
        [-1, -2],
        [0, 2]
      ],
      [
        [5918, 6486],
        [-2, 3],
        [-5, 0]
      ],
      [
        [5911, 6489],
        [2, 2],
        [5, -5]
      ],
      [
        [4800, 7950],
        [28, 18],
        [20, -47],
        [-20, -39]
      ],
      [
        [4828, 7882],
        [-29, 0],
        [-25, 25],
        [26, 43]
      ],
      [
        [4833, 8113],
        [30, 93],
        [54, 1],
        [-29, -51],
        [16, -15],
        [44, -3],
        [5, -15],
        [-39, -100],
        [43, -35],
        [11, -69],
        [32, -37],
        [11, -73],
        [-9, -14],
        [46, -11],
        [-2, -48],
        [-25, -42],
        [18, -25],
        [-30, -28],
        [-103, -9],
        [-55, -31],
        [35, 73],
        [30, 0],
        [-36, 42],
        [-26, 5],
        [31, 29],
        [1, 68],
        [27, 13],
        [9, 56],
        [-21, 23],
        [6, 28],
        [-28, 2],
        [2, -37],
        [-22, 32],
        [14, 46],
        [-29, 66],
        [-26, 17],
        [23, 10],
        [-28, 49],
        [20, -10]
      ],
      [
        [5731, 6523],
        [-43, -15],
        [-33, 25],
        [18, 18],
        [58, -28]
      ],
      [
        [5768, 6599],
        [17, 17],
        [-4, -23],
        [-9, -17],
        [-4, 23]
      ],
      [
        [5756, 6629],
        [-7, 4],
        [7, 15],
        [-1, -8],
        [1, -11]
      ],
      [
        [5748, 6663],
        [4, -7],
        [-3, -4],
        [1, 7],
        [-2, 4]
      ],
      [
        [5701, 6654],
        [10, 17],
        [1, -15],
        [-6, -25],
        [-5, 23]
      ],
      [
        [5732, 6701],
        [-7, -9],
        [-2, 2],
        [3, 9],
        [6, -2]
      ],
      [
        [5750, 6711],
        [3, -4],
        [-8, -4],
        [-5, 8],
        [10, 0]
      ],
      [
        [5726, 6769],
        [1, -20],
        [-4, 4],
        [-4, 16],
        [7, 0]
      ],
      [
        [5708, 6873],
        [-6, -2],
        [6, 35],
        [6, 0],
        [-6, -33]
      ],
      [
        [5585, 6920],
        [3, 6],
        [-3, -6]
      ],
      [
        [5585, 6920],
        [-2, 6],
        [0, 2]
      ],
      [
        [5583, 6928],
        [2, 4],
        [3, 0]
      ],
      [
        [5588, 6932],
        [22, 18],
        [28, 17]
      ],
      [
        [5638, 6967],
        [44, 16],
        [20, -22],
        [30, 32]
      ],
      [
        [5732, 6993],
        [9, -22],
        [-16, -47]
      ],
      [
        [5725, 6924],
        [-28, 18],
        [-38, -22],
        [20, -37],
        [-49, 23],
        [-2, -31],
        [79, -189],
        [-40, 63],
        [2, -44],
        [-23, 21],
        [-14, -30],
        [13, -80],
        [-36, 19],
        [-14, 109],
        [-38, 104]
      ],
      [
        [5557, 6848],
        [11, 10],
        [17, 62]
      ],
      [
        [5736, 6817],
        [5, -14],
        [-6, -7],
        [-16, 17],
        [14, 8]
      ],
      [
        [5733, 6821],
        [2, 0],
        [1, -4]
      ],
      [
        [265, 2986],
        [-2, -3],
        [-2, -7],
        [-2, 5],
        [6, 5]
      ],
      [
        [5314, 7943],
        [14, -22],
        [-8, -2],
        [-13, 10],
        [7, 14]
      ],
      [
        [5289, 7938],
        [4, -3],
        [-3, 0],
        [-6, 10],
        [5, -7]
      ],
      [
        [5350, 7947],
        [-10, -9],
        [-1, 7],
        [5, 3],
        [6, -1]
      ],
      [
        [5274, 7952],
        [6, -9],
        [-2, -7],
        [-5, 4],
        [1, 12]
      ],
      [
        [5303, 7941],
        [-3, -13],
        [-3, 7],
        [9, 22],
        [-3, -16]
      ],
      [
        [5351, 7997],
        [-17, -73],
        [-25, 69],
        [32, 33],
        [10, -29]
      ],
      [
        [5263, 7933],
        [-16, 7],
        [-5, -2]
      ],
      [
        [5242, 7938],
        [-15, 119],
        [47, 40],
        [22, 46],
        [-9, -61],
        [19, -32],
        [-13, -26],
        [9, -62],
        [-35, 14],
        [-4, -43]
      ],
      [
        [3532, 8910],
        [2, -2],
        [-7, -4],
        [-4, 5],
        [9, 1]
      ],
      [
        [3553, 8929],
        [-26, -10],
        [2, 5],
        [11, 5],
        [13, 0]
      ],
      [
        [3484, 9048],
        [-7, 0],
        [-3, 8],
        [6, -2],
        [4, -6]
      ],
      [
        [3516, 9096],
        [-13, 5],
        [10, 15],
        [7, -15],
        [-4, -5]
      ],
      [
        [3473, 9187],
        [-12, -12],
        [-4, 7],
        [17, 10],
        [-1, -5]
      ],
      [
        [3456, 9220],
        [-6, -7],
        [-10, 2],
        [8, 5],
        [8, 0]
      ],
      [
        [3475, 9223],
        [-15, -18],
        [-2, 14],
        [9, 4],
        [8, 0]
      ],
      [
        [3449, 9277],
        [13, -10],
        [-4, -1],
        [-14, 11],
        [5, 0]
      ],
      [
        [3439, 9299],
        [9, -1],
        [-18, -3],
        [0, 8],
        [9, -4]
      ],
      [
        [3434, 9343],
        [-17, 0],
        [-13, 0],
        [23, 5],
        [7, -5]
      ],
      [
        [3070, 9491],
        [-12, 1],
        [0, 2],
        [13, 1],
        [-1, -4]
      ],
      [
        [2997, 9555],
        [23, -6],
        [-9, -3],
        [-23, 5],
        [9, 4]
      ],
      [
        [3033, 9557],
        [18, -7],
        [-22, 0],
        [-7, 6],
        [11, 1]
      ],
      [
        [4521, 9736],
        [-33, -20],
        [-25, 12],
        [46, 17],
        [12, -9]
      ],
      [
        [3144, 9787],
        [9, -5],
        [-6, -1],
        [-3, 1],
        [0, 5]
      ],
      [
        [3579, 9881],
        [-24, 1],
        [-30, 8],
        [11, 15],
        [43, -24]
      ],
      [
        [3510, 8968],
        [9, 13],
        [-44, 19],
        [4, 36],
        [44, 0],
        [35, -29],
        [-4, -24],
        [-44, -15]
      ],
      [
        [3530, 8703],
        [-5, 0],
        [0, 5],
        [1, 0],
        [-3, 4],
        [-11, 58],
        [38, 30],
        [-46, 12],
        [22, 80],
        [55, 27],
        [10, 81],
        [-18, 19],
        [-66, 29],
        [-21, 24],
        [59, -1],
        [50, -27],
        [-22, 43],
        [-28, 23],
        [-6, -5],
        [-12, 3],
        [4, 13],
        [4, -1],
        [-5, 4],
        [34, 13],
        [-28, 2],
        [-13, -8],
        [-6, 8],
        [11, 2],
        [4, 0],
        [-32, 3],
        [4, -20],
        [-38, -4],
        [-16, 22],
        [7, 12],
        [-5, 3],
        [7, 3],
        [2, -1],
        [17, 24],
        [8, 41],
        [-15, 9],
        [2, 0],
        [-13, 7],
        [-1, -1],
        [-3, 1],
        [11, 24],
        [-21, 18],
        [10, 18],
        [-20, 13],
        [7, 22],
        [-26, 39],
        [-30, 10],
        [-14, 23],
        [5, 25],
        [-66, 31],
        [-73, 15],
        [-15, -16],
        [-61, 9],
        [-7, -24],
        [-54, 10],
        [-34, 22],
        [46, 21],
        [-67, 9],
        [-26, 14],
        [12, 14],
        [70, 13],
        [44, -1],
        [14, 18],
        [-81, -11],
        [-8, 17],
        [-50, 5],
        [-44, 28],
        [8, 26],
        [90, 21],
        [37, 19],
        [57, 2],
        [31, 29],
        [-5, 37],
        [-56, 3],
        [-11, 20],
        [64, 31],
        [10, 15],
        [50, 18],
        [40, -13],
        [21, 33],
        [-19, 17],
        [80, 26],
        [115, 19],
        [25, -19],
        [-7, -40],
        [24, 35],
        [43, -10],
        [53, 3],
        [-31, 15],
        [-15, 25],
        [59, -4],
        [84, -29],
        [23, -18],
        [25, 4],
        [-19, 14],
        [5, 4],
        [-59, 19],
        [-40, 31],
        [17, -11],
        [38, 2],
        [53, -20],
        [-8, -20],
        [27, 21],
        [-56, 27],
        [133, 0],
        [-129, 7],
        [-34, 6],
        [23, 9],
        [25, -8],
        [13, 14],
        [70, 5],
        [64, -3],
        [28, -2],
        [4, 18],
        [54, 8],
        [118, 7],
        [50, -2],
        [140, -22],
        [-13, -6],
        [-129, -5],
        [-117, -18],
        [86, 7],
        [49, 10],
        [75, -5],
        [61, 8],
        [20, -20],
        [51, -6],
        [36, -13],
        [-31, -20],
        [-205, -15],
        [-82, -21],
        [31, -1],
        [109, 16],
        [87, -5],
        [-2, -15],
        [-45, -12],
        [-2, -13],
        [73, 23],
        [16, 20],
        [49, 4],
        [4, -41],
        [-51, -43],
        [32, 7],
        [92, 58],
        [44, -18],
        [35, 19],
        [52, -2],
        [53, -12],
        [17, -13],
        [-54, -32],
        [-34, -2],
        [8, -14],
        [-32, -11],
        [-45, 1],
        [35, -17],
        [-18, -14],
        [-65, -7],
        [-44, -17],
        [32, -13],
        [-10, -23],
        [17, -16],
        [-26, -10],
        [14, -23],
        [-29, 12],
        [-24, -43],
        [-3, -28],
        [61, 4],
        [-3, -14],
        [41, -7],
        [-41, -9],
        [-42, 9],
        [11, -19],
        [59, -12],
        [-12, -48],
        [5, -43],
        [-15, 38],
        [9, 21],
        [-48, 14],
        [-34, -21],
        [1, -29],
        [49, 0],
        [17, -62],
        [55, -26],
        [-30, -4],
        [-26, -51],
        [-53, -13],
        [20, -46],
        [-27, 4],
        [-22, -18],
        [-47, 25],
        [-59, -26],
        [15, -5],
        [-3, 1],
        [34, 18],
        [34, -25],
        [37, -12],
        [0, -16],
        [-28, 6],
        [28, -20],
        [-20, -1],
        [12, -26],
        [-60, 34],
        [-4, 17],
        [23, 0],
        [-24, 5],
        [-17, 11],
        [-15, -11],
        [32, -34],
        [57, -38],
        [-15, -13],
        [34, -32],
        [10, -52],
        [-53, -8],
        [-25, 47],
        [-44, 35],
        [7, -27],
        [-65, -23],
        [-8, -36],
        [26, 4],
        [-22, 0],
        [11, 22],
        [65, 25],
        [1, -31],
        [-24, -14],
        [-19, 0],
        [-29, -26],
        [17, -8],
        [55, 31],
        [49, -22],
        [32, 0],
        [-24, -33],
        [-23, -8],
        [-61, -61],
        [-49, -10],
        [-37, -25],
        [-73, -11],
        [-37, -35],
        [1, -19],
        [-37, -66],
        [-49, -39],
        [-41, -17],
        [-4, 46],
        [-14, -39],
        [-45, -16],
        [18, -11],
        [-21, -22],
        [-16, -45],
        [9, -46],
        [-46, -83],
        [-13, -121],
        [-22, -29],
        [5, -38],
        [-31, -5],
        [-29, 22],
        [-1, 31],
        [-70, 16],
        [-30, 39],
        [-7, 54],
        [-28, 25],
        [5, 32],
        [-35, 38],
        [4, 67],
        [-24, -20],
        [2, 62],
        [-27, 41]
      ],
      [
        [9021, 4968],
        [-2, -15],
        [-2, 15],
        [6, 16],
        [-2, -16]
      ],
      [
        [9045, 5082],
        [2, 12],
        [2, 5],
        [-1, -12],
        [-3, -5]
      ],
      [
        [3189, 5316],
        [-26, -26],
        [-25, 2],
        [1, 40],
        [50, -16]
      ],
      [
        [3204, 5278],
        [5, 0],
        [-9, -7],
        [1, 7],
        [3, 0]
      ],
      [
        [2671, 9558],
        [-45, 4],
        [14, 38],
        [-34, 9],
        [-33, -5],
        [0, 23],
        [24, 26],
        [38, 7],
        [57, -7],
        [39, 4],
        [-69, 7],
        [-21, 47],
        [-40, 9],
        [1, 42],
        [73, -6],
        [45, -27],
        [15, -20],
        [5, 26],
        [-48, 27],
        [144, 19],
        [-54, 1],
        [93, 21],
        [-84, -5],
        [-92, -21],
        [-26, 16],
        [-15, -18],
        [-64, 6],
        [17, 28],
        [-32, -26],
        [-59, 18],
        [74, 9],
        [6, 9],
        [-93, -8],
        [-14, 11],
        [55, 30],
        [-58, -15],
        [24, 19],
        [-65, 0],
        [26, 15],
        [81, 19],
        [93, -9],
        [-55, 11],
        [38, 11],
        [-11, 12],
        [77, -11],
        [82, -24],
        [-75, 29],
        [18, 21],
        [41, -8],
        [-27, 17],
        [46, -2],
        [-7, 12],
        [84, -5],
        [28, 13],
        [54, -4],
        [10, -9],
        [23, 15],
        [92, 3],
        [2, -9],
        [91, -7],
        [-63, -19],
        [33, 2],
        [75, 18],
        [50, -29],
        [37, -1],
        [7, -21],
        [-84, -34],
        [-28, 3],
        [-36, -19],
        [-94, -25],
        [153, 29],
        [-104, -57],
        [-66, -44],
        [-23, -30],
        [-53, 4],
        [6, -17],
        [-76, -14],
        [-41, 7],
        [2, -13],
        [79, -3],
        [-1, -14],
        [-45, 6],
        [-49, -4],
        [59, -5],
        [31, -14],
        [-4, -15],
        [-47, -3],
        [38, -12],
        [-13, -19],
        [-56, -21],
        [-19, -32],
        [-69, -3],
        [49, -16],
        [-11, -13],
        [42, 3],
        [3, -22],
        [-41, -25],
        [11, -32],
        [-25, 1],
        [11, 30],
        [-47, -13],
        [8, 21],
        [-87, 4],
        [-14, -12],
        [-83, 11],
        [-74, 2],
        [-14, 16],
        [64, 31],
        [16, 15],
        [-14, 33],
        [27, 6],
        [35, -13],
        [5, -20],
        [51, 4]
      ],
      [
        [2671, 9558],
        [1, 0],
        [14, 2],
        [17, 36],
        [-31, -38],
        [-1, 0]
      ],
      [
        [2807, 7093],
        [0, -6],
        [4, -6]
      ],
      [
        [2811, 7081],
        [-68, -20],
        [-35, -44],
        [-12, 18]
      ],
      [
        [2696, 7035],
        [17, 4],
        [-6, 14]
      ],
      [
        [2713, 7087],
        [19, 24],
        [12, 136],
        [34, -55],
        [10, 22],
        [-28, 82],
        [-93, 29]
      ],
      [
        [2656, 7335],
        [-10, 103],
        [-28, 6],
        [-16, 56],
        [-45, 15],
        [-42, -71]
      ],
      [
        [1593, 7515],
        [-5, 8],
        [-2, -8]
      ],
      [
        [1584, 7515],
        [-5, 28],
        [-41, 41],
        [4, 20],
        [-7, 4],
        [2, -2],
        [3, -5],
        [-5, -6],
        [-1, 13],
        [-9, 4],
        [1, 3],
        [-3, 4],
        [-1, -5],
        [-8, 1],
        [-2, 2],
        [-9, 4],
        [7, -6],
        [-1, 0],
        [-3, 2],
        [4, -3],
        [2, 1],
        [6, -3],
        [4, -13],
        [0, -2],
        [5, -9],
        [17, -45],
        [29, -47],
        [-2, 15],
        [7, -9],
        [8, -2],
        [-12, -4],
        [5, -7],
        [-8, -23],
        [-31, 19],
        [-52, 60],
        [-3, 17],
        [1, 0],
        [-3, 15],
        [-1, 7],
        [-29, 9],
        [-17, 50],
        [15, 7],
        [37, -20],
        [2, 2],
        [-3, 2],
        [8, 0],
        [3, 7],
        [-3, 6],
        [-8, -13],
        [-33, 37],
        [-6, 65],
        [-4, -24],
        [-3, 9],
        [3, 13],
        [4, 2],
        [0, 2],
        [1, 0],
        [2, 5],
        [-3, 0],
        [0, 2],
        [2, 0],
        [-1, 7],
        [-1, -3],
        [-3, 35],
        [-14, 27],
        [-8, -34],
        [-8, 25],
        [1, 7],
        [-5, 2],
        [0, 7],
        [5, 6],
        [0, -11],
        [2, 11],
        [10, -9],
        [-4, 7],
        [7, 55],
        [-12, -28],
        [6, 5],
        [-2, -9],
        [-5, -5],
        [-1, 3],
        [-6, -12],
        [-32, 65],
        [13, 51],
        [0, 19]
      ],
      [
        [1086, 8996],
        [53, -10],
        [53, -40],
        [38, -4],
        [1, 29],
        [57, 14],
        [15, -7],
        [79, 55],
        [24, -10],
        [-69, -35],
        [-24, -35],
        [46, 39],
        [7, -24],
        [17, 30],
        [89, 41],
        [14, -38],
        [33, -28],
        [26, 55],
        [3, -53],
        [34, 10],
        [6, 24],
        [42, -5],
        [33, -26],
        [61, -27],
        [58, -16],
        [0, 14],
        [49, -30],
        [5, -24],
        [-26, 3],
        [-15, -25],
        [45, -17],
        [65, 1],
        [33, 19],
        [33, -15],
        [10, -29],
        [22, -6],
        [12, -53],
        [11, 42],
        [-23, 42],
        [66, 66],
        [-55, -33],
        [-33, 8],
        [15, 25],
        [68, 18],
        [13, -37],
        [24, -24],
        [31, -2],
        [51, -24],
        [22, 13],
        [66, -4],
        [22, -14],
        [-32, 55],
        [41, 8],
        [12, -32],
        [25, 19],
        [-16, -59],
        [32, -41],
        [-4, 84],
        [17, -3],
        [36, 58],
        [-29, -7],
        [8, 51],
        [-52, 30],
        [-10, 34],
        [3, 68],
        [34, 47],
        [17, 3],
        [-15, -1],
        [1, 34],
        [-17, 26],
        [0, 59],
        [13, 27],
        [44, 11],
        [39, -12],
        [57, -8],
        [-46, -75],
        [-15, -10],
        [-48, 5],
        [18, -23],
        [-17, -31],
        [-12, -1],
        [37, -39],
        [5, -43],
        [41, -51],
        [-37, -32],
        [30, -15],
        [38, -44],
        [4, -46],
        [17, 57],
        [21, 14],
        [27, -36],
        [-13, -32],
        [25, -83],
        [45, 66],
        [6, 49],
        [27, 22],
        [-22, 18],
        [-1, 35],
        [33, 6],
        [13, -4],
        [0, 2],
        [9, -4],
        [-1, -1],
        [27, -8],
        [35, -33],
        [-13, -19],
        [15, -21],
        [-38, -13],
        [39, -71],
        [-7, -33],
        [-52, -46],
        [-28, 45],
        [19, -57],
        [-43, 6],
        [-6, 22],
        [-37, -10],
        [26, -20],
        [-42, -59],
        [-15, 0],
        [-50, 44],
        [19, -46],
        [55, -5],
        [-26, -75],
        [-30, -18],
        [-25, 16],
        [-6, -36],
        [-22, -6],
        [1, -2],
        [8, -4],
        [-2, -3],
        [-1, 3],
        [-5, 4],
        [8, -36],
        [-57, -42],
        [-46, -115],
        [-13, -65],
        [10, -89],
        [36, 2],
        [20, -93],
        [-6, -35],
        [46, 21],
        [59, -28],
        [36, -58],
        [82, -57],
        [64, -14],
        [6, -89],
        [-5, -60],
        [70, -132],
        [35, 87],
        [-13, 48],
        [-5, 80],
        [-17, 37],
        [55, 45],
        [30, 55],
        [6, 53],
        [-16, 84],
        [-42, 48],
        [35, 83],
        [-24, 77],
        [18, 45],
        [-17, 58],
        [19, 21],
        [75, -32],
        [31, 25],
        [55, -60],
        [-4, -22],
        [67, -39],
        [-12, -20],
        [10, -116],
        [19, 1],
        [31, -58],
        [51, 53],
        [8, 62],
        [19, 46],
        [13, -9],
        [5, -35],
        [3, 8],
        [3, -6],
        [-4, -5],
        [-2, 3],
        [4, -24],
        [19, -9],
        [12, -49],
        [44, -107],
        [-16, -35],
        [59, -108],
        [70, -44],
        [-20, -19],
        [25, -35],
        [36, -22],
        [6, -87],
        [-38, -58],
        [-45, -17],
        [-34, -60],
        [-53, -17],
        [-17, 13],
        [-114, -2],
        [-26, -67],
        [-46, -39],
        [-25, -72],
        [-40, -74],
        [-45, -39],
        [-47, -85]
      ],
      [
        [2898, 7192],
        [-89, -45],
        [-22, -38],
        [20, -4]
      ],
      [
        [2807, 7105],
        [0, -8],
        [0, -4]
      ],
      [
        [1495, 7625],
        [-1, 2],
        [-1, 0],
        [2, -2]
      ],
      [
        [1578, 7545],
        [-1, 9],
        [-3, -2],
        [0, -5],
        [4, -2]
      ],
      [
        [1465, 7749],
        [4, 12],
        [-14, -12],
        [-4, -22],
        [14, 22]
      ],
      [
        [2299, 8859],
        [-6, -3],
        [1, -6],
        [5, 4],
        [0, 5]
      ],
      [
        [1505, 7528],
        [4, -2],
        [0, 6],
        [-2, 0],
        [-2, -4]
      ],
      [
        [1502, 7536],
        [-1, 7],
        [-4, 0],
        [0, -7],
        [5, 0]
      ],
      [
        [3207, 8573],
        [0, -59],
        [-17, -11],
        [-36, 17],
        [-26, 30],
        [-3, -24],
        [46, -64],
        [-10, -25],
        [-62, 29],
        [-29, 29],
        [-59, 37],
        [4, 29],
        [-30, 20],
        [-23, 54],
        [-34, -17],
        [-31, 17],
        [-25, -30],
        [-31, 12],
        [-9, 42],
        [20, 37],
        [47, -18],
        [43, 22],
        [20, -4],
        [-28, 50],
        [42, 41],
        [22, 39],
        [-23, 69],
        [-23, 7],
        [-46, 49],
        [-32, -24],
        [0, 24],
        [29, 15],
        [-58, 43],
        [0, 26],
        [-35, 9],
        [4, -32],
        [-82, 19],
        [-11, -26],
        [-114, 24],
        [-68, 26],
        [-24, 45],
        [62, -11],
        [-21, 19],
        [-48, 9],
        [-8, 42],
        [15, 62],
        [17, 36],
        [33, 31],
        [29, 9],
        [44, -3],
        [-44, -71],
        [9, -58],
        [43, -52],
        [-18, 70],
        [27, -10],
        [-32, 37],
        [14, 43],
        [65, 36],
        [37, -1],
        [34, -70],
        [-16, -55],
        [28, 38],
        [26, -36],
        [13, 41],
        [23, 13],
        [66, -19],
        [-1, -27],
        [29, -3],
        [-1, -24],
        [33, -34],
        [16, 27],
        [39, -27],
        [-27, -13],
        [-1, -8],
        [7, 6],
        [9, -9],
        [20, 13],
        [-11, -38],
        [35, 21],
        [43, -21],
        [35, -62],
        [-20, -3],
        [3, -4],
        [-5, -5],
        [5, -1],
        [7, 5],
        [5, -4],
        [-8, -3],
        [10, -4],
        [12, -23],
        [-26, -7],
        [-10, -18],
        [-3, 1],
        [-6, 0],
        [8, -2],
        [-7, -13],
        [42, -12],
        [8, -16],
        [3, 3],
        [6, 0],
        [-1, -5],
        [-8, 1],
        [8, -15],
        [37, 5],
        [29, -54],
        [3, 0],
        [6, 3],
        [7, -3],
        [-1, 0],
        [10, -1],
        [-9, -29],
        [37, 12],
        [15, -48],
        [-30, -10],
        [-2, -41],
        [-29, -14],
        [4, -40],
        [-29, 13],
        [-64, 104],
        [-28, -6],
        [21, -32],
        [-23, -32],
        [66, -58],
        [-4, -19],
        [30, -36],
        [0, -6],
        [1, -8],
        [5, -9],
        [-6, 6]
      ],
      [
        [2999, 9084],
        [-2, -8],
        [8, 5],
        [-5, -2],
        [-1, 5]
      ],
      [
        [3115, 8998],
        [-22, -2],
        [12, -4],
        [10, 6]
      ],
      [
        [3029, 7363],
        [-2, 0],
        [6, 12],
        [1, -6],
        [-5, -6]
      ],
      [
        [1567, 7524],
        [5, -11],
        [6, -3],
        [-6, 1],
        [-5, 13]
      ],
      [
        [3221, 7584],
        [63, -43],
        [-10, -20],
        [-38, 22],
        [-15, 41]
      ],
      [
        [1532, 7590],
        [-2, 5],
        [2, 6],
        [3, -8],
        [-3, -3]
      ],
      [
        [1451, 7692],
        [-5, 2],
        [-2, 9],
        [4, 8],
        [3, -19]
      ],
      [
        [2806, 7738],
        [-7, -9],
        [-8, -4],
        [0, 7],
        [15, 6]
      ],
      [
        [1364, 7738],
        [-2, -2],
        [-1, -6],
        [0, 11],
        [3, -3]
      ],
      [
        [1442, 7732],
        [-2, 6],
        [1, 7],
        [3, 0],
        [-2, -13]
      ],
      [
        [1440, 7749],
        [-1, -8],
        [-5, 0],
        [1, 8],
        [5, 0]
      ],
      [
        [1429, 7765],
        [2, -11],
        [-2, -4],
        [-2, 13],
        [2, 2]
      ],
      [
        [1434, 7774],
        [0, -7],
        [0, -4],
        [-6, 11],
        [6, 0]
      ],
      [
        [1347, 7783],
        [4, 0],
        [1, -6],
        [-4, -3],
        [-1, 9]
      ],
      [
        [1437, 7758],
        [-2, 17],
        [2, 13],
        [3, -21],
        [-3, -9]
      ],
      [
        [1411, 7788],
        [10, -13],
        [1, -8],
        [-5, 5],
        [-6, 16]
      ],
      [
        [1441, 7775],
        [-1, 4],
        [-1, 7],
        [4, 2],
        [-2, -13]
      ],
      [
        [1405, 7806],
        [0, -7],
        [-2, 0],
        [-3, 12],
        [5, -5]
      ],
      [
        [1408, 7813],
        [4, -11],
        [-3, 0],
        [-3, 15],
        [2, -4]
      ],
      [
        [2741, 7818],
        [9, -1],
        [11, -36],
        [-37, 23],
        [17, 14]
      ],
      [
        [2784, 7815],
        [2, -4],
        [-3, -2],
        [0, 6],
        [1, 0]
      ],
      [
        [1422, 7827],
        [-5, -2],
        [-1, 4],
        [4, 12],
        [2, -14]
      ],
      [
        [1376, 7836],
        [2, 13],
        [18, -18],
        [-2, -16],
        [-18, 21]
      ],
      [
        [1390, 7845],
        [-7, 2],
        [-2, 5],
        [6, 5],
        [3, -12]
      ],
      [
        [1399, 7850],
        [12, -21],
        [-6, -11],
        [-21, 45],
        [15, -13]
      ],
      [
        [1375, 7882],
        [8, -3],
        [3, -8],
        [-10, -12],
        [-1, 23]
      ],
      [
        [1362, 7917],
        [10, 0],
        [2, -17],
        [-8, 7],
        [-4, 10]
      ],
      [
        [2801, 7938],
        [-9, -5],
        [-2, 2],
        [18, 6],
        [-7, -3]
      ],
      [
        [1380, 7929],
        [-1, 4],
        [9, 15],
        [-3, -13],
        [-5, -6]
      ],
      [
        [2810, 8023],
        [5, 25],
        [2, 2],
        [0, -19],
        [-7, -8]
      ],
      [
        [2793, 8062],
        [-1, -14],
        [-10, -17],
        [9, 17],
        [2, 14]
      ],
      [
        [2784, 8079],
        [-1, -2],
        [1, 9],
        [4, -9],
        [-4, 2]
      ],
      [
        [3127, 8183],
        [-4, 1],
        [1, 5],
        [2, 2],
        [1, -8]
      ],
      [
        [3085, 8234],
        [-9, -4],
        [0, 12],
        [7, 0],
        [2, -8]
      ],
      [
        [2769, 8281],
        [5, 3],
        [2, -3],
        [-3, -3],
        [-4, 3]
      ],
      [
        [2781, 8296],
        [2, -2],
        [-3, -6],
        [-4, -2],
        [5, 10]
      ],
      [
        [3205, 8346],
        [8, -21],
        [-9, 6],
        [-2, 8],
        [3, 7]
      ],
      [
        [3112, 8347],
        [6, -9],
        [-3, -13],
        [-13, 1],
        [10, 21]
      ],
      [
        [2830, 8365],
        [-4, -5],
        [-9, -5],
        [2, 5],
        [11, 5]
      ],
      [
        [3203, 8420],
        [-2, -20],
        [-17, 19],
        [12, 7],
        [7, -6]
      ],
      [
        [3175, 8436],
        [3, -6],
        [-7, 3],
        [4, 6],
        [0, -3]
      ],
      [
        [2424, 8444],
        [-6, -8],
        [-4, 6],
        [5, 0],
        [5, 2]
      ],
      [
        [3195, 8442],
        [7, -11],
        [-9, 2],
        [-4, 6],
        [6, 3]
      ],
      [
        [2797, 8475],
        [2, -28],
        [-12, -28],
        [-12, 39],
        [22, 17]
      ],
      [
        [2437, 8475],
        [1, 3],
        [6, -2],
        [-3, -3],
        [-4, 2]
      ],
      [
        [3205, 8486],
        [9, 0],
        [-6, -13],
        [-9, 5],
        [6, 8]
      ],
      [
        [2841, 8487],
        [-7, 3],
        [13, 0],
        [-4, -4],
        [-2, 1]
      ],
      [
        [3200, 8487],
        [-6, -1],
        [2, 4],
        [4, 0],
        [0, -3]
      ],
      [
        [2935, 8500],
        [11, -3],
        [2, -5],
        [-11, 1],
        [-2, 7]
      ],
      [
        [3036, 8507],
        [17, -17],
        [-15, -3],
        [-14, 23],
        [12, -3]
      ],
      [
        [2722, 8517],
        [4, -19],
        [-32, -37],
        [-22, 22],
        [17, 32],
        [33, 2]
      ],
      [
        [3147, 8515],
        [0, -1],
        [-8, 12],
        [5, -2],
        [3, -9]
      ],
      [
        [2825, 8555],
        [20, -5],
        [3, -18],
        [-10, -6],
        [-13, 29]
      ],
      [
        [3220, 8563],
        [-3, -10],
        [1, -10],
        [-7, 21],
        [9, -1]
      ],
      [
        [2859, 8567],
        [17, -14],
        [-12, -4],
        [-12, 14],
        [7, 4]
      ],
      [
        [3218, 8573],
        [-2, 2],
        [0, 4],
        [4, -1],
        [-2, -5]
      ],
      [
        [2849, 8593],
        [-6, -6],
        [-6, 1],
        [1, 3],
        [11, 2]
      ],
      [
        [3199, 8606],
        [-2, -1],
        [-1, 9],
        [4, -5],
        [-1, -3]
      ],
      [
        [2960, 8626],
        [-1, -12],
        [-2, 0],
        [-1, 15],
        [4, -3]
      ],
      [
        [3189, 8642],
        [2, -6],
        [-13, -9],
        [6, 12],
        [5, 3]
      ],
      [
        [3268, 8716],
        [6, 0],
        [2, -7],
        [-9, 1],
        [1, 6]
      ],
      [
        [2689, 8724],
        [-6, -3],
        [-1, 4],
        [5, 0],
        [2, -1]
      ],
      [
        [2639, 8738],
        [10, -13],
        [2, -22],
        [-13, 15],
        [1, 20]
      ],
      [
        [2660, 8743],
        [17, -12],
        [9, -23],
        [-20, 10],
        [-6, 25]
      ],
      [
        [2694, 8757],
        [6, -3],
        [-3, -6],
        [-8, 6],
        [5, 3]
      ],
      [
        [3269, 8819],
        [1, -1],
        [-12, -10],
        [4, 11],
        [7, 0]
      ],
      [
        [2020, 8812],
        [-4, 0],
        [-2, 6],
        [0, 2],
        [6, -8]
      ],
      [
        [2006, 8835],
        [-2, -6],
        [-4, 7],
        [6, 4],
        [0, -5]
      ],
      [
        [1992, 8846],
        [3, 0],
        [-2, -7],
        [-4, 6],
        [3, 1]
      ],
      [
        [3231, 8843],
        [-7, 2],
        [2, 8],
        [5, -7],
        [0, -3]
      ],
      [
        [2005, 8846],
        [-5, 0],
        [0, 8],
        [3, -1],
        [2, -7]
      ],
      [
        [1857, 8871],
        [-5, 2],
        [14, 1],
        [0, -3],
        [-9, 0]
      ],
      [
        [2001, 8870],
        [-4, 0],
        [1, 4],
        [2, 2],
        [1, -6]
      ],
      [
        [1971, 8877],
        [8, -3],
        [-2, -5],
        [-6, 4],
        [0, 4]
      ],
      [
        [1966, 8881],
        [1, -4],
        [-5, 4],
        [0, 4],
        [4, -4]
      ],
      [
        [1952, 8890],
        [7, 4],
        [-9, -10],
        [-9, -3],
        [11, 9]
      ],
      [
        [2940, 8884],
        [23, -8],
        [0, -15],
        [-27, 0],
        [4, 23]
      ],
      [
        [2604, 8873],
        [-7, -14],
        [-9, 14],
        [6, 26],
        [10, -26]
      ],
      [
        [1901, 8894],
        [-3, 0],
        [2, 5],
        [5, 2],
        [-4, -7]
      ],
      [
        [2903, 8901],
        [12, -6],
        [2, -49],
        [-22, -21],
        [-31, -2],
        [-9, 34],
        [17, 40],
        [31, 4]
      ],
      [
        [2808, 8891],
        [-5, 3],
        [1, 8],
        [9, -4],
        [-5, -7]
      ],
      [
        [2722, 8904],
        [3, -2],
        [-2, -3],
        [-5, 5],
        [4, 0]
      ],
      [
        [2942, 8895],
        [-6, 14],
        [5, 0],
        [3, -7],
        [-2, -7]
      ],
      [
        [1927, 8919],
        [0, -3],
        [1, -3],
        [-11, -1],
        [10, 7]
      ],
      [
        [2100, 8906],
        [-15, 11],
        [10, 2],
        [6, -4],
        [-1, -9]
      ],
      [
        [2820, 8923],
        [-2, -11],
        [-9, 0],
        [8, 8],
        [3, 3]
      ],
      [
        [2933, 8919],
        [-7, -2],
        [-4, 6],
        [3, 3],
        [8, -7]
      ],
      [
        [2922, 8917],
        [3, -15],
        [-17, 13],
        [5, 15],
        [9, -13]
      ],
      [
        [2176, 8934],
        [-2, -15],
        [-14, 8],
        [9, 10],
        [7, -3]
      ],
      [
        [2221, 8944],
        [-7, -14],
        [-6, 3],
        [0, 16],
        [13, -5]
      ],
      [
        [2225, 8945],
        [-6, 4],
        [2, 11],
        [3, -4],
        [1, -11]
      ],
      [
        [1224, 8959],
        [2, -3],
        [-7, 1],
        [1, 6],
        [4, -4]
      ],
      [
        [2179, 8956],
        [1, 10],
        [3, -2],
        [-1, -7],
        [-3, -1]
      ],
      [
        [2487, 8975],
        [4, -9],
        [-4, -2],
        [-3, 11],
        [3, 0]
      ],
      [
        [2824, 8978],
        [0, -12],
        [-12, -24],
        [-15, 2],
        [27, 34]
      ],
      [
        [1238, 8990],
        [5, 6],
        [-6, -14],
        [-6, 3],
        [7, 5]
      ],
      [
        [2733, 8981],
        [6, -3],
        [0, -4],
        [-11, 5],
        [5, 2]
      ],
      [
        [2498, 8978],
        [-5, -11],
        [-4, 6],
        [4, 8],
        [5, -3]
      ],
      [
        [2863, 8979],
        [10, -2],
        [-14, -20],
        [-6, 11],
        [10, 11]
      ],
      [
        [2190, 8989],
        [9, -6],
        [-7, -6],
        [-3, 5],
        [1, 7]
      ],
      [
        [2319, 8990],
        [14, 0],
        [0, -15],
        [-12, 8],
        [-2, 7]
      ],
      [
        [2346, 8993],
        [7, -5],
        [-8, -15],
        [-1, 16],
        [2, 4]
      ],
      [
        [1146, 8992],
        [-6, -4],
        [-5, 4],
        [5, 4],
        [6, -4]
      ],
      [
        [2837, 8998],
        [-15, -13],
        [-10, 1],
        [16, 16],
        [9, -4]
      ],
      [
        [2790, 9008],
        [4, -14],
        [-35, 3],
        [15, 10],
        [16, 1]
      ],
      [
        [2711, 9004],
        [-1, -2],
        [-8, 3],
        [5, 4],
        [4, -5]
      ],
      [
        [2452, 9009],
        [2, 4],
        [8, -5],
        [-2, -7],
        [-8, 8]
      ],
      [
        [2299, 9015],
        [-3, 0],
        [-1, 2],
        [4, 0],
        [0, -2]
      ],
      [
        [2586, 9029],
        [11, 0],
        [-4, -10],
        [-17, 9],
        [10, 1]
      ],
      [
        [1901, 9043],
        [-12, 0],
        [-5, 5],
        [12, -4],
        [5, -1]
      ],
      [
        [1768, 9060],
        [10, 0],
        [-13, -5],
        [-6, 5],
        [9, 0]
      ],
      [
        [1756, 9060],
        [-9, 0],
        [-2, 2],
        [2, 2],
        [9, -4]
      ],
      [
        [1446, 9066],
        [-5, -2],
        [-3, -4],
        [3, 8],
        [5, -2]
      ],
      [
        [2206, 9071],
        [6, -1],
        [7, -15],
        [-12, 5],
        [-1, 11]
      ],
      [
        [2971, 9124],
        [9, 1],
        [-5, -9],
        [-7, 2],
        [3, 6]
      ],
      [
        [2983, 9133],
        [-8, 0],
        [2, 6],
        [5, 2],
        [1, -8]
      ],
      [
        [2098, 9259],
        [-19, -34],
        [-35, 41],
        [-1, 21],
        [39, 3],
        [16, -31]
      ],
      [
        [2103, 9474],
        [11, 26],
        [35, -26],
        [10, -22],
        [-36, -8],
        [-20, 30]
      ],
      [
        [2494, 9568],
        [19, -21],
        [-13, -9],
        [-30, 15],
        [24, 15]
      ],
      [
        [2087, 9553],
        [14, -19],
        [-21, 0],
        [-23, 42],
        [30, -23]
      ],
      [
        [2625, 7426],
        [-3, -1],
        [-6, 0],
        [2, 5],
        [7, -4]
      ],
      [
        [2565, 7504],
        [4, -6],
        [-10, 0],
        [1, 8],
        [5, -2]
      ],
      [
        [2718, 7304],
        [8, -4],
        [4, -33],
        [-39, 25],
        [27, 12]
      ],
      [
        [2689, 7298],
        [-1, -6],
        [-5, 2],
        [2, 6],
        [4, -2]
      ],
      [
        [2668, 7323],
        [8, -6],
        [-5, -11],
        [-4, 9],
        [1, 8]
      ],
      [
        [2882, 7171],
        [-4, -4],
        [2, 6],
        [6, 2],
        [-4, -4]
      ],
      [
        [2347, 9578],
        [66, -2],
        [-7, -20],
        [-70, 1],
        [11, 21]
      ],
      [
        [3342, 7302],
        [-34, -39],
        [-15, 41],
        [26, 71],
        [5, -54],
        [18, -19]
      ],
      [
        [3280, 7390],
        [1, -57],
        [-16, -35],
        [-19, 33],
        [31, 4],
        [3, 55]
      ],
      [
        [1328, 7801],
        [-7, 12],
        [22, 7],
        [2, -39],
        [-17, 20]
      ],
      [
        [1309, 7887],
        [38, -1],
        [-10, -66],
        [-24, 16],
        [-4, 51]
      ],
      [
        [2794, 8023],
        [-14, -12],
        [20, 54],
        [7, -17],
        [-13, -25]
      ],
      [
        [2374, 9433],
        [32, -34],
        [-3, -44],
        [-41, 3],
        [-43, 22],
        [12, 32],
        [43, 21]
      ],
      [
        [1964, 9617],
        [-49, 6],
        [-52, -9],
        [-5, 9],
        [78, 26],
        [26, -12],
        [2, -20]
      ],
      [
        [2339, 9630],
        [30, -9],
        [-2, -18],
        [-54, -23],
        [-26, 17],
        [-17, 34],
        [6, 23],
        [56, -15],
        [7, -9]
      ],
      [
        [3130, 7273],
        [-8, 4],
        [-3, 7]
      ],
      [
        [2928, 7230],
        [32, 29],
        [11, 45],
        [73, 69],
        [41, 88],
        [78, 69],
        [35, 2],
        [20, -24],
        [-2, -34],
        [-31, -30],
        [-30, 7],
        [24, -30],
        [32, 11],
        [-18, -46],
        [29, -82],
        [45, -31],
        [16, 19],
        [25, -39],
        [-57, -47],
        [-23, 2],
        [-48, -91],
        [-17, 46],
        [6, 35],
        [32, 41],
        [9, 55],
        [-37, -49],
        [-37, -4]
      ],
      [
        [2957, 7273],
        [5, 7],
        [-3, -13],
        [-1, -6],
        [-10, 0],
        [6, 8],
        [-3, 0],
        [4, 9],
        [4, 0],
        [-2, -5]
      ],
      [
        [1553, 7554],
        [-13, 15],
        [10, -3],
        [3, -12]
      ],
      [
        [1657, 9439],
        [-11, 27],
        [-12, -21],
        [-31, 1],
        [-11, 23],
        [35, 14],
        [76, 66],
        [66, 15],
        [29, -18],
        [-24, -9],
        [10, -36],
        [-32, -13],
        [-12, -30],
        [-31, -42],
        [-23, 7],
        [49, 37],
        [-2, 47],
        [-22, -4],
        [-16, -45],
        [-38, -19]
      ],
      [
        [3507, 7425],
        [26, 26],
        [8, -42],
        [-9, -51],
        [-35, 9],
        [11, 37],
        [-31, -10],
        [-23, -32],
        [2, 59],
        [-96, -8],
        [-8, 23],
        [20, 49],
        [55, 196],
        [30, -25],
        [-30, -66],
        [35, -8],
        [-6, -39],
        [44, 26],
        [18, -35],
        [-13, -49],
        [23, -9],
        [-21, -51]
      ],
      [
        [2624, 8567],
        [-43, -6],
        [27, 36],
        [-6, 36],
        [14, 85],
        [12, 11],
        [19, -51],
        [6, 19],
        [63, -52],
        [22, -39],
        [37, -28],
        [-22, -26],
        [-71, 47],
        [-2, -24],
        [-46, -48],
        [-10, 40]
      ],
      [
        [2280, 9013],
        [33, -28],
        [28, -44],
        [18, -1],
        [-37, -30],
        [-26, 6],
        [-60, 36],
        [34, 23],
        [10, 38]
      ],
      [
        [2115, 9076],
        [68, -47],
        [18, -24],
        [-42, 3],
        [-13, -31],
        [22, 8],
        [6, -33],
        [-44, -18],
        [-83, 29],
        [-3, 22],
        [-22, -34],
        [-45, -20],
        [-120, -21],
        [-12, 53],
        [-63, 8],
        [-41, 49],
        [13, 11],
        [77, 13],
        [74, -4],
        [-18, 18],
        [-50, 14],
        [-57, -12],
        [-42, 4],
        [-23, 31],
        [63, 25],
        [8, 13],
        [-65, -13],
        [3, 21],
        [-28, -3],
        [-1, 21],
        [27, 22],
        [-13, 14],
        [34, 35],
        [78, 34],
        [17, -17],
        [6, -38],
        [20, 29],
        [49, -22],
        [-12, -30],
        [30, 21],
        [23, -6],
        [-26, 36],
        [17, -2],
        [40, -30],
        [26, -67],
        [13, 19],
        [-14, 17],
        [-10, 45],
        [3, 57],
        [24, -26],
        [18, 2],
        [31, -31],
        [2, -24],
        [26, -63],
        [-6, -35],
        [17, -23]
      ],
      [
        [2832, 9284],
        [52, -41],
        [-1, -20],
        [-102, 4],
        [-22, 30],
        [-3, 33],
        [76, -6]
      ],
      [
        [2322, 9159],
        [-46, -20],
        [-15, -27],
        [-54, 66],
        [-33, 10],
        [-25, 35],
        [23, 20],
        [17, -27],
        [24, 2],
        [6, 27],
        [-39, 27],
        [15, 17],
        [81, 26],
        [11, 27],
        [-6, -38],
        [21, -6],
        [2, -34],
        [-33, -25],
        [31, -5],
        [12, 16],
        [14, -55],
        [-6, -36]
      ],
      [
        [1626, 9348],
        [40, -21],
        [58, 2],
        [33, -15],
        [43, -43],
        [-106, -61],
        [-28, -35],
        [-14, -47],
        [-68, -29],
        [-27, 44],
        [-51, 20],
        [29, 77],
        [30, 52],
        [-27, 42],
        [88, 14]
      ],
      [
        [2217, 9381],
        [-12, 30],
        [26, 15],
        [-79, -10],
        [-19, 17],
        [31, 18],
        [11, 33],
        [56, -37],
        [-38, 46],
        [6, 12],
        [91, -19],
        [7, -73],
        [-17, -31],
        [-63, -1]
      ],
      [
        [1946, 9444],
        [21, 15],
        [-30, 14],
        [45, 41],
        [7, -59],
        [40, -11],
        [13, 12],
        [30, -12],
        [0, -24],
        [54, -27],
        [-28, -10],
        [-30, 22],
        [-10, -21],
        [-66, -10],
        [-11, 10],
        [-80, -41],
        [-56, -3],
        [-20, 18],
        [45, 20],
        [28, 0],
        [24, 20],
        [-84, -14],
        [-2, 22],
        [-26, -29],
        [-71, 17],
        [44, 83],
        [28, 11],
        [1, 19],
        [13, -4],
        [13, -38],
        [27, 6],
        [42, -31],
        [6, -23],
        [65, -1],
        [2, 14],
        [-34, 14]
      ],
      [
        [2797, 9371],
        [-21, -18],
        [-45, -12],
        [-48, 8],
        [-115, -8],
        [-33, 14],
        [-30, -9],
        [-58, 18],
        [-13, 31],
        [10, 48],
        [-28, 35],
        [-26, -8],
        [-49, 10],
        [-27, 42],
        [29, 7],
        [57, -12],
        [18, -21],
        [45, 5],
        [58, -36],
        [-23, -9],
        [55, -39],
        [61, 1],
        [63, 21],
        [73, -3],
        [40, -23],
        [1, -20],
        [-23, -11],
        [29, -11]
      ],
      [
        [1942, 9559],
        [-53, -12],
        [-30, 13],
        [-11, 22],
        [-16, -8],
        [-26, 18],
        [21, 9],
        [30, -12],
        [70, 13],
        [29, -9],
        [-14, -34]
      ],
      [
        [2122, 9693],
        [37, -25],
        [20, 4],
        [58, -35],
        [-8, -11],
        [24, -40],
        [-62, -3],
        [5, 27],
        [-48, 0],
        [1, 12],
        [-48, -8],
        [-15, 17],
        [41, 0],
        [-15, 35],
        [-41, 3],
        [4, 22],
        [47, 2]
      ],
      [
        [2482, 9779],
        [40, -2],
        [8, -25],
        [16, 18],
        [20, -2],
        [21, -36],
        [-6, -24],
        [45, 0],
        [18, -21],
        [-44, -16],
        [-69, -63],
        [-83, 2],
        [-64, 55],
        [29, 14],
        [37, 0],
        [-19, 20],
        [-37, -14],
        [-51, 11],
        [-26, 53],
        [51, -7],
        [-48, 16],
        [15, 22],
        [24, 2],
        [-9, 14],
        [18, 18],
        [47, 3],
        [-34, 12],
        [31, 8],
        [41, -16],
        [29, -42]
      ],
      [
        [1553, 7554],
        [1, -3],
        [0, -2],
        [-1, 5]
      ],
      [
        [5185, 4011],
        [-4, 10],
        [5, 15],
        [4, -10],
        [-5, -15]
      ],
      [
        [4342, 5103],
        [7, -14],
        [0, -14],
        [-7, 7],
        [0, 21]
      ],
      [
        [3297, 5122],
        [4, -14],
        [-3, -14],
        [-3, 21],
        [2, 7]
      ],
      [
        [5156, 7834],
        [-9, -7],
        [0, 4],
        [12, 5],
        [-3, -2]
      ],
      [
        [3252, 5297],
        [-3, 0],
        [0, 2]
      ],
      [
        [5094, 7685],
        [11, 0],
        [13, 0]
      ],
      [
        [5118, 7685],
        [-11, -11],
        [-13, 11]
      ],
      [
        [5201, 7820],
        [-5, -73],
        [-18, -29],
        [-10, -77]
      ],
      [
        [5168, 7641],
        [-27, 51],
        [-22, -7]
      ],
      [
        [5119, 7685],
        [-11, 18],
        [35, 96],
        [38, 44],
        [20, -23]
      ],
      [
        [2852, 5328],
        [34, -38],
        [-28, -17],
        [-32, 40],
        [26, 15]
      ],
      [
        [218, 3038],
        [2, -21],
        [-8, 0],
        [-8, 21],
        [14, 0]
      ],
      [
        [6564, 5813],
        [-1, -2],
        [0, 7],
        [3, 0],
        [-2, -5]
      ],
      [
        [6558, 5872],
        [9, 23],
        [-3, -54]
      ],
      [
        [6564, 5841],
        [-4, 4],
        [-2, 27]
      ],
      [
        [6445, 5365],
        [83, 73],
        [18, 141],
        [-12, 53]
      ],
      [
        [6534, 5632],
        [17, 156],
        [16, 7]
      ],
      [
        [6567, 5795],
        [21, -73],
        [45, -30],
        [29, -94],
        [-59, -179],
        [4, -49],
        [-33, -33],
        [-8, -47],
        [-26, -7],
        [-11, -59],
        [-53, -26]
      ],
      [
        [6476, 5198],
        [-10, 47],
        [-21, 120]
      ],
      [
        [3303, 4939],
        [-3, 14],
        [4, 10],
        [1, -12],
        [-2, -12]
      ],
      [
        [5722, 6883],
        [-5, -4],
        [-3, 2],
        [7, 8],
        [1, -6]
      ],
      [
        [5779, 7013],
        [31, -55],
        [-44, -16],
        [-10, -26],
        [-31, 8]
      ],
      [
        [5732, 6993],
        [21, 26],
        [26, -6]
      ],
      [
        [6246, 6846],
        [-23, -21],
        [6, -99],
        [15, -59]
      ],
      [
        [6244, 6667],
        [-56, 15],
        [-11, -17]
      ],
      [
        [6177, 6665],
        [-3, 15],
        [-69, -43],
        [-43, 13],
        [-44, -6],
        [-19, -66]
      ],
      [
        [5999, 6578],
        [2, 72],
        [-19, -25],
        [-22, 15],
        [-48, -53],
        [-22, 36],
        [-36, 25],
        [-9, -46],
        [-19, -9],
        [-39, 68],
        [-31, 21],
        [1, 46],
        [-27, 19],
        [23, 43],
        [-17, 27]
      ],
      [
        [5736, 6817],
        [-3, 4]
      ],
      [
        [5733, 6821],
        [-6, 11],
        [16, 67],
        [68, 2],
        [2, 60],
        [56, -13],
        [58, 67],
        [73, -20],
        [44, -51],
        [52, 6],
        [20, -14],
        [38, 43]
      ],
      [
        [6154, 6979],
        [36, 6],
        [17, -35]
      ],
      [
        [6207, 6950],
        [7, -71],
        [31, -29]
      ],
      [
        [6245, 6850],
        [1, -4]
      ],
      [
        [7563, 5514],
        [-23, 125],
        [-35, -71],
        [-31, 23]
      ],
      [
        [7571, 5579],
        [2, -48],
        [-10, -17]
      ],
      [
        [3309, 4989],
        [-4, 10],
        [5, 16],
        [1, -9],
        [-2, -17]
      ],
      [
        [9636, 3968],
        [-1, 0],
        [0, 2],
        [2, 0],
        [-1, -2]
      ],
      [
        [5579, 9029],
        [-6, -5],
        [-5, 4],
        [5, 10],
        [6, -9]
      ],
      [
        [5556, 9023],
        [-6, 4],
        [-6, 12],
        [17, -10],
        [-5, -6]
      ],
      [
        [5631, 9048],
        [9, -9],
        [-15, 3],
        [1, 6],
        [5, 0]
      ],
      [
        [5654, 9066],
        [4, -11],
        [-15, -13],
        [-7, 9],
        [18, 15]
      ],
      [
        [5663, 9072],
        [8, -6],
        [-10, -7],
        [-4, 12],
        [6, 1]
      ],
      [
        [5651, 9081],
        [-9, -18],
        [-26, -7],
        [11, 16],
        [24, 9]
      ],
      [
        [5669, 9093],
        [1, -6],
        [-4, 2],
        [1, 6],
        [2, -2]
      ],
      [
        [5714, 9104],
        [8, -11],
        [-11, -5],
        [-7, 8],
        [10, 8]
      ],
      [
        [5597, 9637],
        [23, -23],
        [-34, -4],
        [-24, 21],
        [35, 6]
      ],
      [
        [5744, 9641],
        [-8, 5],
        [5, 7],
        [5, -7],
        [-2, -5]
      ],
      [
        [5808, 9660],
        [-26, -6],
        [-8, 1],
        [16, 10],
        [18, -5]
      ],
      [
        [5563, 9675],
        [17, -5],
        [-12, -3],
        [-10, 3],
        [5, 5]
      ],
      [
        [5561, 9693],
        [-12, -2],
        [-3, 4],
        [3, 1],
        [12, -3]
      ],
      [
        [5935, 9754],
        [-22, -6],
        [-34, -4],
        [-3, 3],
        [59, 7]
      ],
      [
        [5679, 9767],
        [-7, -1],
        [0, 4],
        [2, 1],
        [5, -4]
      ],
      [
        [5672, 9775],
        [4, -2],
        [-2, -1],
        [-5, 1],
        [3, 2]
      ],
      [
        [5556, 9773],
        [-3, 1],
        [2, 3],
        [5, -2],
        [-4, -2]
      ],
      [
        [5594, 9789],
        [-6, -4],
        [-3, 4],
        [6, 1],
        [3, -1]
      ],
      [
        [5579, 9784],
        [0, 5],
        [-8, 5],
        [12, -4],
        [-4, -6]
      ],
      [
        [5858, 9008],
        [-25, -33],
        [-28, -23]
      ],
      [
        [5805, 8952],
        [11, 30],
        [-40, 45],
        [-52, -29],
        [-11, -57],
        [-21, -24],
        [-26, 20],
        [-42, -8],
        [-21, 39],
        [-29, -16]
      ],
      [
        [5574, 8952],
        [-18, -48],
        [-50, 12],
        [-8, -40],
        [-16, 9],
        [-32, -49],
        [7, -26],
        [-52, -67],
        [0, -58],
        [-25, -52],
        [9, -42],
        [-36, -3],
        [-18, -48],
        [8, -71],
        [-4, -41],
        [20, -25],
        [-17, -27],
        [7, -63],
        [-18, -17],
        [-12, -64]
      ],
      [
        [5319, 8232],
        [-27, 18],
        [-55, -71],
        [-25, -16],
        [-29, 6],
        [-36, 73],
        [12, 67],
        [-28, 72],
        [19, 34],
        [-15, 21],
        [21, 36],
        [39, 28],
        [-2, 14],
        [52, 30],
        [-27, 5],
        [28, 29],
        [36, -35],
        [38, 33],
        [-43, -20],
        [-11, 19],
        [47, 75],
        [23, 19],
        [4, 28],
        [39, 105],
        [56, 58],
        [-23, 6],
        [46, 28],
        [-9, 12],
        [32, 24],
        [-13, 23],
        [15, 35],
        [27, 1],
        [20, 20],
        [-1, 23],
        [12, -21],
        [-31, -22],
        [18, 1],
        [33, 27],
        [10, -12],
        [2, 2],
        [2, 0],
        [1, 4],
        [5, 6],
        [-3, 3],
        [5, 3],
        [1, 0],
        [17, 20],
        [2, 0],
        [0, -1],
        [2, -2],
        [1, 3],
        [34, -7],
        [44, 42],
        [37, 5],
        [-23, -25],
        [1, -31],
        [43, 62],
        [-4, -42],
        [29, 53],
        [67, -28],
        [30, -30],
        [-25, -15],
        [-39, 6],
        [58, -25]
      ],
      [
        [5835, 9009],
        [-4, 6],
        [-4, -11],
        [10, 4],
        [-2, 1]
      ],
      [
        [5698, 9487],
        [0, 4],
        [14, 11],
        [-14, -15]
      ],
      [
        [5400, 8927],
        [30, 14],
        [19, 32],
        [13, -44],
        [-26, -30],
        [-62, -16],
        [3, 12],
        [48, 15],
        [-25, 17]
      ],
      [
        [5646, 9542],
        [-18, 15],
        [-46, -2],
        [21, 34],
        [-21, 12],
        [58, 12],
        [17, -28],
        [23, -3],
        [-34, -40]
      ],
      [
        [5437, 9717],
        [24, 25],
        [64, -44],
        [2, -20],
        [72, -22],
        [-70, -27],
        [-22, -71],
        [-13, -1],
        [-26, -65],
        [-67, 46],
        [-13, 24],
        [79, 24],
        [-85, -8],
        [-3, 21],
        [40, 4],
        [21, 17],
        [-27, 27],
        [-3, -24],
        [-47, -13],
        [-27, 28],
        [3, -28],
        [-30, 17],
        [-17, 32],
        [24, 6],
        [-17, 42],
        [8, 9],
        [31, -1],
        [46, 15],
        [3, -24],
        [19, 19],
        [20, -15],
        [29, -50],
        [-18, 57]
      ],
      [
        [5661, 9761],
        [85, -10],
        [10, -23],
        [-33, -25],
        [-54, -23],
        [-31, 3],
        [-1, 14],
        [-57, -3],
        [-33, 17],
        [61, 6],
        [2, 9],
        [-87, -8],
        [1, 23],
        [-29, 7],
        [10, 11],
        [34, -14],
        [29, 24],
        [14, -16],
        [26, 4],
        [15, -19],
        [10, 36],
        [7, -24],
        [21, 11]
      ],
      [
        [5698, 9487],
        [-2, -4],
        [1, 4],
        [1, 0]
      ],
      [
        [3263, 5238],
        [-6, 12],
        [1, 2],
        [3, -4],
        [2, -10]
      ],
      [
        [6403, 5886],
        [4, -4],
        [-1, -30],
        [-4, 16],
        [1, 18]
      ],
      [
        [145, 2482],
        [-1, -5],
        [-10, 12],
        [7, 5],
        [4, -12]
      ],
      [
        [5574, 8313],
        [-1, -8],
        [-8, -3],
        [3, 7],
        [6, 4]
      ],
      [
        [5562, 8310],
        [3, 3],
        [-3, -11],
        [-5, 5],
        [5, 3]
      ],
      [
        [5567, 8323],
        [-9, -13],
        [-13, 13],
        [14, 7],
        [8, -7]
      ],
      [
        [5600, 8320],
        [0, -3],
        [11, 0],
        [-13, -5],
        [2, 8]
      ],
      [
        [5625, 8304],
        [0, 14],
        [11, -6],
        [-10, -16],
        [-1, 8]
      ],
      [
        [5593, 8346],
        [1, -7],
        [-1, -8],
        [-1, 8],
        [1, 7]
      ],
      [
        [5592, 8541],
        [3, -7],
        [-4, -4],
        [-4, 7],
        [5, 4]
      ],
      [
        [5692, 8668],
        [-7, -8],
        [-1, 5],
        [2, 3],
        [6, 0]
      ],
      [
        [5672, 8722],
        [-14, 44],
        [10, 26],
        [-16, 48],
        [6, 36],
        [-84, 76]
      ],
      [
        [5805, 8952],
        [-14, -36],
        [7, -24],
        [37, -36],
        [-26, -61],
        [22, -52],
        [-8, -81],
        [27, -69],
        [-16, -20],
        [44, -61],
        [-9, -28],
        [-56, -91],
        [-40, -49]
      ],
      [
        [5773, 8344],
        [-112, -42],
        [-37, 24],
        [2, 2],
        [-5, 0],
        [-11, 6],
        [2, -3],
        [-1, -5],
        [-4, 7],
        [0, 3],
        [-6, 3],
        [-10, 108],
        [7, 87],
        [25, 9],
        [66, 110],
        [14, -3],
        [1, 49],
        [-32, 23]
      ],
      [
        [8729, 3599],
        [14, 0],
        [-16, -90],
        [-2, 61],
        [-26, 50],
        [30, -21]
      ],
      [
        [7986, 3805],
        [-27, -22],
        [-21, 68],
        [8, 41],
        [15, -95],
        [25, 8]
      ],
      [
        [8266, 3405],
        [40, 10],
        [1, -27],
        [-57, -36],
        [-32, 22],
        [15, 43],
        [33, -12]
      ],
      [
        [8559, 4169],
        [-3, -70],
        [23, -76],
        [-25, 17],
        [-6, -131],
        [-18, 76],
        [16, 7],
        [-7, 99],
        [20, 78]
      ],
      [
        [8445, 3338],
        [6, -12],
        [5, 21]
      ],
      [
        [8456, 3347],
        [5, 3],
        [8, 14]
      ],
      [
        [8469, 3364],
        [1, -19],
        [3, -19]
      ],
      [
        [8473, 3326],
        [-17, -46],
        [-27, -17],
        [16, 75]
      ],
      [
        [8275, 4303],
        [-7, -12],
        [1, 12]
      ],
      [
        [8269, 4303],
        [6, 0]
      ],
      [
        [8916, 3819],
        [0, -308],
        [0, -156]
      ],
      [
        [8916, 3355],
        [-27, 72],
        [-66, -24],
        [9, 55],
        [25, 22],
        [-29, 150],
        [-53, 53],
        [-20, 3],
        [-43, 70],
        [-21, -43],
        [-19, 101],
        [50, 20],
        [-36, 7],
        [-52, 68],
        [-16, 90],
        [27, -51],
        [41, 32],
        [35, -27],
        [5, -102],
        [23, -85],
        [36, 56],
        [-2, 65],
        [46, 12],
        [56, -63],
        [31, -17]
      ],
      [
        [8346, 3268],
        [-42, 53],
        [20, 14],
        [14, 77],
        [58, -24],
        [18, 29],
        [79, 15],
        [-47, -39],
        [-7, 19],
        [-57, -43],
        [-51, 5],
        [24, -84],
        [-9, -22]
      ],
      [
        [8009, 3446],
        [-50, 29],
        [-28, 44],
        [15, 65],
        [63, -27],
        [8, -36],
        [52, -12],
        [12, 39],
        [32, -37],
        [88, 5],
        [0, -142],
        [-55, 38],
        [-16, -12],
        [-54, 20],
        [-38, 33],
        [-29, -7]
      ],
      [
        [8559, 3785],
        [-39, -55],
        [-21, 36],
        [-1, 68],
        [4, -51],
        [28, -17],
        [25, 31],
        [43, 10],
        [29, -27],
        [6, -50],
        [-74, 55]
      ],
      [
        [8411, 3599],
        [-23, 14],
        [25, 73],
        [-39, -15],
        [4, 42],
        [-33, 60],
        [-3, -162],
        [-27, 12],
        [8, 73],
        [-23, 121],
        [15, 48],
        [19, 192],
        [24, 47],
        [21, -22],
        [63, -17],
        [33, 68],
        [-18, -95],
        [-116, -2],
        [-8, -44],
        [19, -85],
        [28, 65],
        [47, -12],
        [-3, -80],
        [-15, 46],
        [-33, -58],
        [26, -88],
        [15, -89],
        [-6, -92]
      ],
      [
        [8266, 4303],
        [-6, -61],
        [20, -73],
        [-6, -27],
        [32, -63],
        [-36, -19],
        [-8, -92],
        [-25, -66],
        [1, -54],
        [-16, -99],
        [-38, -41],
        [-11, 58],
        [-34, 12],
        [-33, -24],
        [-3, 53],
        [-40, -17],
        [-10, 136],
        [-13, -12],
        [-17, 151],
        [23, 90]
      ],
      [
        [8046, 4155],
        [25, -88],
        [67, 51],
        [42, -10],
        [28, 115],
        [10, 97],
        [48, -17]
      ],
      [
        [7729, 4305],
        [42, -73],
        [33, -92],
        [20, 17],
        [58, -134],
        [-10, -70],
        [27, -22],
        [9, -95],
        [25, -2],
        [14, -63],
        [-7, -170],
        [-31, -19],
        [-87, 194],
        [-21, 75],
        [-14, 97],
        [-28, 75],
        [-26, -19],
        [24, -126],
        [-10, 7],
        [-17, 119],
        [23, 44],
        [-16, 97],
        [-34, 7],
        [17, -75],
        [-6, -29],
        [-15, 107],
        [-21, 19],
        [25, -12],
        [8, 48],
        [-60, 141],
        [-4, 70],
        [31, -41],
        [30, 3],
        [21, -78]
      ],
      [
        [6604, 2566],
        [-1, -26],
        [-8, -2],
        [3, 33],
        [6, -5]
      ],
      [
        [5511, 8230],
        [0, 9],
        [4, 0],
        [-4, -9]
      ],
      [
        [5619, 8693],
        [0, 9],
        [4, -3],
        [0, -6],
        [-4, 0]
      ],
      [
        [5672, 8722],
        [-63, -20],
        [-21, -63],
        [13, -16],
        [-22, -41],
        [-49, -50],
        [-34, -49],
        [-19, -79],
        [5, -46],
        [17, -11],
        [32, -61],
        [-18, -42],
        [-47, -40],
        [-9, -51],
        [9, -71],
        [10, 32],
        [28, -7],
        [18, 47],
        [-1, -48],
        [-46, 0],
        [-16, -71],
        [-50, -7],
        [-14, -54],
        [-33, 0],
        [-17, 110],
        [-24, 74],
        [4, 0],
        [2, 6],
        [-6, 0],
        [0, -5],
        [-8, 27],
        [6, 46]
      ],
      [
        [5329, 8179],
        [-10, -6],
        [2, -5],
        [8, 1],
        [0, 10]
      ],
      [
        [3310, 4781],
        [-2, -48],
        [-13, 9],
        [-5, 32],
        [20, 7]
      ],
      [
        [7787, 4397],
        [-1, -14],
        [-3, 0],
        [0, 14],
        [4, 0]
      ],
      [
        [8269, 4303],
        [1, 2],
        [-4, -2]
      ],
      [
        [8046, 4155],
        [37, -37],
        [9, 61],
        [2, -3],
        [0, 13],
        [1, 9],
        [44, 34],
        [27, 102]
      ],
      [
        [8166, 4334],
        [18, -41],
        [9, 63]
      ],
      [
        [8193, 4356],
        [1, 2],
        [1, -7]
      ],
      [
        [8195, 4351],
        [9, -36],
        [-6, 41]
      ],
      [
        [8198, 4356],
        [27, 90],
        [33, 36],
        [54, -104],
        [-31, -22],
        [12, -39],
        [-20, -10],
        [2, -4]
      ],
      [
        [7781, 4467],
        [27, -14],
        [1, -44],
        [26, 44]
      ],
      [
        [7835, 4453],
        [39, -104],
        [0, -134],
        [23, -111],
        [-25, 12],
        [-58, 94],
        [-16, 73],
        [-17, 184]
      ],
      [
        [2839, 4523],
        [-18, 97],
        [-28, 29],
        [-25, -66],
        [12, -43],
        [-50, -17],
        [2, 70],
        [-32, -12]
      ],
      [
        [2700, 4581],
        [-4, 22]
      ],
      [
        [2696, 4603],
        [0, 2]
      ],
      [
        [2696, 4605],
        [14, 87]
      ],
      [
        [2710, 4692],
        [13, -46],
        [28, -10],
        [40, 58],
        [33, -14],
        [30, -53]
      ],
      [
        [2854, 4627],
        [5, -53],
        [-20, -51]
      ],
      [
        [8736, 4530],
        [-1, 10],
        [2, 10],
        [3, 0],
        [-4, -20]
      ],
      [
        [9977, 3396],
        [0, 4],
        [0, -4]
      ],
      [
        [9750, 4518],
        [5, -5],
        [1, -2],
        [-1, 2],
        [-5, 5]
      ],
      [
        [2966, 183],
        [33, -32],
        [-20, -24],
        [-26, 51],
        [13, 5]
      ],
      [
        [2918, 580],
        [15, -60],
        [1, -92],
        [-32, 23],
        [20, 26],
        [-21, 28],
        [2, 56],
        [15, 19]
      ],
      [
        [2960, 969],
        [-5, -72],
        [-29, -20],
        [15, 46],
        [4, 78],
        [15, -32]
      ],
      [
        [3096, 235],
        [0, -154]
      ],
      [
        [3096, 81],
        [-2, 0],
        [2, -1]
      ],
      [
        [3096, 80],
        [0, -6]
      ],
      [
        [3096, 74],
        [-37, 7],
        [-16, -29],
        [-21, 66],
        [23, 49],
        [4, -53],
        [38, -8],
        [-30, 24],
        [-11, 78],
        [28, 40],
        [22, -13]
      ],
      [
        [3047, 2692],
        [12, 7],
        [13, 52]
      ],
      [
        [3072, 2751],
        [15, -103],
        [15, -35],
        [-10, -70],
        [16, -61],
        [8, -111],
        [20, 0]
      ],
      [
        [3136, 2371],
        [-4, -85],
        [-34, -55],
        [7, -152],
        [-14, -16],
        [-23, -92],
        [-26, -226],
        [22, -130],
        [-17, -127],
        [0, -66],
        [-18, -30],
        [-4, -86],
        [9, -71],
        [-15, -17],
        [-15, -129],
        [6, -98],
        [-11, -66],
        [13, -65],
        [-11, -60],
        [21, -39],
        [-17, -139],
        [-18, -49],
        [8, -31],
        [-37, -86],
        [12, -87],
        [24, 8],
        [-4, -64],
        [15, -31],
        [54, -2],
        [43, -25]
      ],
      [
        [3102, 255],
        [-20, 11],
        [-44, -38],
        [-9, -77],
        [-59, 41],
        [5, 29],
        [-32, 9],
        [-7, 41],
        [20, -7],
        [-5, 69],
        [-34, 34],
        [23, 24],
        [-4, 133],
        [-9, 64],
        [13, 67],
        [-32, 9],
        [27, 88],
        [12, -43],
        [22, 52],
        [-5, 32],
        [-28, 3],
        [15, 73],
        [7, -69],
        [31, 193],
        [-13, 41],
        [-22, -18],
        [-5, 54],
        [19, 107],
        [-11, 127],
        [12, 39],
        [16, 115],
        [11, 32],
        [23, 196],
        [-6, 154],
        [9, 22],
        [-7, 71],
        [18, 94],
        [12, 161],
        [-3, 162],
        [15, 120],
        [-10, 222]
      ],
      [
        [3135, 67],
        [20, -20],
        [-58, 8],
        [43, -55],
        [-21, 2],
        [-28, 50],
        [-27, -16],
        [-4, 26],
        [69, 9]
      ],
      [
        [3129, 71],
        [4, 0],
        [2, -4]
      ],
      [
        [7841, 4877],
        [2, -5],
        [2, -7],
        [-3, -3],
        [-1, 15]
      ],
      [
        [7781, 4467],
        [-23, 85],
        [-30, 68],
        [15, 127]
      ],
      [
        [7743, 4747],
        [25, 106],
        [-14, 136],
        [-25, 76],
        [16, 97],
        [-39, 168],
        [17, 94],
        [14, -10],
        [44, 47]
      ],
      [
        [7781, 5461],
        [10, -56],
        [22, -3],
        [-4, -145],
        [26, 54],
        [15, -28],
        [22, 45],
        [17, -10],
        [23, -68],
        [-2, -61],
        [23, -57],
        [-12, -100]
      ],
      [
        [7921, 5032],
        [-42, 7],
        [-36, -62],
        [16, -136]
      ],
      [
        [7859, 4841],
        [-30, 72],
        [-24, -5],
        [-1, 62],
        [-25, -5],
        [-1, -86],
        [-20, -113],
        [-1, -98],
        [16, 2],
        [17, -152],
        [31, -22],
        [14, -43]
      ],
      [
        [3290, 4867],
        [-2, 0],
        [0, 10],
        [3, 5],
        [-1, -15]
      ],
      [
        [5630, 8202],
        [10, -14],
        [-22, -17],
        [-10, 27],
        [22, 4]
      ],
      [
        [5650, 8206],
        [-4, -7],
        [-5, 5],
        [4, 5],
        [5, -3]
      ],
      [
        [5646, 8235],
        [4, 0],
        [1, -5],
        [-7, 0],
        [2, 5]
      ],
      [
        [5632, 8234],
        [9, -13],
        [-15, -10],
        [-13, 16],
        [19, 7]
      ],
      [
        [5771, 8232],
        [-21, -15],
        [19, -56]
      ],
      [
        [5769, 8161],
        [-3, -13],
        [-5, -20]
      ],
      [
        [5761, 8128],
        [-24, -2],
        [-34, 40],
        [-27, -15]
      ],
      [
        [5676, 8151],
        [-21, 50],
        [-1, 47],
        [69, 30],
        [56, -12]
      ],
      [
        [5779, 8266],
        [3, -1],
        [2, -7]
      ],
      [
        [5784, 8258],
        [-2, -1],
        [-3, 0]
      ],
      [
        [5779, 8257],
        [2, -2]
      ],
      [
        [5781, 8255],
        [1, 0],
        [-1, 0]
      ],
      [
        [5781, 8255],
        [-3, 0],
        [-4, -11]
      ],
      [
        [5774, 8244],
        [-3, -12]
      ],
      [
        [3287, 5233],
        [2, -7],
        [-4, -2],
        [-2, 7],
        [4, 2]
      ],
      [
        [8321, 5690],
        [15, 0],
        [27, 110],
        [22, 4],
        [-13, -142],
        [-16, -85],
        [-35, 113]
      ],
      [
        [3349, 4941],
        [-3, 5],
        [1, 14],
        [4, -11],
        [-2, -8]
      ],
      [
        [5345, 6721],
        [91, 26],
        [-13, -36],
        [-2, -80],
        [-17, 11],
        [-59, 79]
      ],
      [
        [5263, 6956],
        [12, -48],
        [-8, -97],
        [-32, -15],
        [2, 95],
        [-7, 43],
        [33, 22]
      ],
      [
        [5196, 7296],
        [30, 23],
        [21, -13],
        [31, 21],
        [14, 36]
      ],
      [
        [5292, 7363],
        [48, 16],
        [6, -29],
        [36, -12]
      ],
      [
        [5382, 7338],
        [-9, -17],
        [9, -48]
      ],
      [
        [5382, 7273],
        [-14, 11],
        [-29, -33],
        [7, -78],
        [33, -50],
        [14, -66],
        [30, -48],
        [24, 2],
        [-3, -34],
        [57, -59],
        [14, -37],
        [-40, 27],
        [-15, -60],
        [18, -21],
        [-30, -103],
        [4, 60],
        [-16, 93],
        [-54, 84],
        [-18, -3],
        [-52, 93],
        [-30, 108],
        [-37, 29],
        [-35, -45]
      ],
      [
        [5348, 7007],
        [0, 0]
      ],
      [
        [5348, 7151],
        [0, 6],
        [-1, -2],
        [-1, -2],
        [2, -2]
      ],
      [
        [5398, 6585],
        [7, -7],
        [0, -8],
        [-4, 4],
        [-3, 11]
      ],
      [
        [9649, 2981],
        [21, -48],
        [10, -137],
        [-25, 28],
        [-23, 97],
        [17, 60]
      ],
      [
        [7885, 4108],
        [4, -4],
        [-4, -8],
        [-6, 3],
        [6, 9]
      ],
      [
        [5946, 6516],
        [2, -6],
        [-5, 0]
      ],
      [
        [5943, 6516],
        [2, 0]
      ],
      [
        [5945, 6516],
        [1, 0]
      ],
      [
        [5940, 6512],
        [0, -2],
        [-1, 2]
      ],
      [
        [5937, 6510],
        [-3, -11],
        [-16, -13]
      ],
      [
        [5911, 6489],
        [-13, 27],
        [8, 9]
      ],
      [
        [5906, 6525],
        [1, -2],
        [1, 4]
      ],
      [
        [5908, 6527],
        [1, -2]
      ],
      [
        [5909, 6525],
        [1, 0]
      ],
      [
        [5910, 6525],
        [20, 0],
        [7, -13]
      ],
      [
        [7221, 4699],
        [22, -24],
        [30, -125],
        [-1, -71],
        [-33, -48],
        [-14, 15],
        [-8, 137],
        [11, 102],
        [-7, 14]
      ],
      [
        [6208, 3150],
        [-6, 15],
        [1, 26],
        [3, -2],
        [2, -39]
      ],
      [
        [9919, 2765],
        [31, -2],
        [1, 38],
        [45, 42],
        [-46, -87],
        [13, -19],
        [-7, -85],
        [-9, 45],
        [-22, 12],
        [-6, 56]
      ],
      [
        [9133, 7253],
        [-31, -23],
        [-21, -42],
        [-43, -43],
        [20, 49],
        [69, 71],
        [6, -12]
      ],
      [
        [6393, 8946],
        [-42, -16],
        [-9, 40],
        [27, 16],
        [26, -18],
        [-2, -22]
      ],
      [
        [6649, 9047],
        [32, -31],
        [-25, -15],
        [-29, 26],
        [22, 20]
      ],
      [
        [6976, 9262],
        [15, -9],
        [-49, -15],
        [2, 26],
        [32, -2]
      ],
      [
        [8149, 9334],
        [-16, -20],
        [-37, 18],
        [15, 15],
        [38, -13]
      ],
      [
        [6588, 9752],
        [-40, -6],
        [8, 17],
        [69, 9],
        [10, -42],
        [-47, 22]
      ],
      [
        [6518, 9773],
        [-6, -19],
        [-49, -3],
        [7, 17],
        [42, -10],
        [6, 15]
      ],
      [
        [6560, 9816],
        [70, -3],
        [-48, -28],
        [-30, -2],
        [-51, 13],
        [59, 20]
      ],
      [
        [6798, 9824],
        [21, -19],
        [-65, -17],
        [-16, 11],
        [41, 10],
        [19, 15]
      ],
      [
        [6609, 9861],
        [14, -17],
        [-20, -25],
        [-51, 4],
        [57, 38]
      ],
      [
        [6112, 7113],
        [-28, 56],
        [-67, 74],
        [26, 12],
        [9, 80],
        [40, 38],
        [-30, 8]
      ],
      [
        [6062, 7381],
        [17, 53],
        [26, -2],
        [-1, 66],
        [12, 36],
        [-26, 43],
        [-49, 40],
        [-50, -5],
        [-16, 62],
        [-25, 4],
        [7, 34],
        [-17, 44],
        [-56, -18]
      ],
      [
        [5884, 7738],
        [-15, 66],
        [41, 30],
        [-27, 25],
        [-24, 129],
        [-76, 40]
      ],
      [
        [5783, 8028],
        [-14, 51],
        [-8, 49]
      ],
      [
        [5769, 8161],
        [5, 33],
        [-3, 38]
      ],
      [
        [5774, 8244],
        [3, 8],
        [4, 3]
      ],
      [
        [5781, 8255],
        [3, 3]
      ],
      [
        [5779, 8266],
        [2, 23],
        [49, 28],
        [-57, 27]
      ],
      [
        [5858, 9008],
        [33, 11],
        [30, -18],
        [-31, -11],
        [110, -28],
        [141, -108],
        [8, -34],
        [-25, -57],
        [-30, -19],
        [-39, -3],
        [-123, 45],
        [-35, 29],
        [76, -100],
        [-14, -27],
        [13, -35],
        [21, 22],
        [36, 0],
        [71, -45],
        [24, 18],
        [-17, 58],
        [42, 32],
        [35, 51],
        [44, -64],
        [8, 58],
        [-18, 36],
        [12, 78],
        [-25, 25],
        [72, -13],
        [22, -42],
        [-38, -8],
        [-12, -30],
        [25, -30],
        [52, 7],
        [9, 47],
        [21, 6],
        [67, 54],
        [62, 31],
        [15, -42],
        [20, -11],
        [36, 35],
        [37, -7],
        [43, 30],
        [22, -47],
        [34, 57],
        [-21, 31],
        [17, 21],
        [94, -22],
        [43, -33],
        [43, -19],
        [29, -35],
        [23, 43],
        [-18, 3],
        [-12, 37],
        [-34, 7],
        [15, 80],
        [-25, -2],
        [13, 44],
        [43, 38],
        [15, 62],
        [16, 14],
        [56, 2],
        [35, -15],
        [1, -31],
        [-29, -53],
        [23, -30],
        [-6, -59],
        [4, -97],
        [29, -30],
        [-13, -56],
        [-16, -9],
        [-28, -68],
        [-34, -23],
        [48, -8],
        [39, 42],
        [34, 63],
        [-7, 71],
        [53, 22],
        [27, -34],
        [-6, -54],
        [27, 34],
        [-12, 46],
        [-60, 27],
        [-49, -4],
        [-6, 38],
        [21, 57],
        [-35, 65],
        [14, 28],
        [39, 20],
        [-6, 57],
        [25, 47],
        [31, -5],
        [-34, -53],
        [6, -36],
        [-14, -60],
        [71, -19],
        [14, 9],
        [-55, 21],
        [-9, 24],
        [26, 11],
        [18, -16],
        [8, 34],
        [36, 57],
        [7, -51],
        [65, -49],
        [42, 1],
        [-27, -31],
        [16, -21],
        [9, -49],
        [16, 12],
        [-18, 55],
        [14, 28],
        [-40, 46],
        [-41, 20],
        [-10, 46],
        [5, 28],
        [182, 21],
        [-8, 22],
        [-40, 41],
        [45, -10],
        [-7, 24],
        [30, 6],
        [59, 39],
        [100, 19],
        [-16, 16],
        [45, 0],
        [34, 17],
        [-13, 26],
        [24, 23],
        [7, -46],
        [-16, -14],
        [17, -19],
        [38, 8],
        [28, 37],
        [56, 3],
        [9, 39],
        [57, 41],
        [42, 3],
        [31, -10],
        [-19, -26],
        [63, -22],
        [-29, -28],
        [39, 2],
        [3, 15],
        [89, 0],
        [38, -10],
        [3, -28],
        [21, -1],
        [9, -43],
        [-32, 17],
        [29, -40],
        [-101, -68],
        [-52, -50],
        [-26, -2],
        [-22, -30],
        [38, -2],
        [88, 37],
        [-35, 2],
        [11, 22],
        [65, -22],
        [21, 12],
        [9, -26],
        [55, 14],
        [84, -9],
        [-3, -21],
        [52, -22],
        [76, -6],
        [16, 23],
        [-7, 25],
        [36, 25],
        [4, -15],
        [47, -21],
        [17, 10],
        [67, -38],
        [-14, -68],
        [-30, 25],
        [53, -91],
        [31, -28],
        [19, 8],
        [27, 72],
        [31, -32],
        [23, -4],
        [41, 18],
        [29, -7],
        [49, 8],
        [35, -13],
        [-23, 51],
        [9, 23],
        [57, 20],
        [106, -15],
        [42, -18],
        [-28, -8],
        [7, -27],
        [29, 36],
        [67, -13],
        [12, -16],
        [-29, -16],
        [70, -26],
        [19, -33],
        [40, -1],
        [64, 17],
        [71, -9],
        [33, -21],
        [11, -31],
        [-11, -26],
        [38, -32],
        [83, 24],
        [22, -15],
        [58, -5],
        [37, 38],
        [32, -11],
        [-6, -22],
        [-31, 10],
        [8, -34],
        [35, -32],
        [37, 19],
        [-10, 76],
        [137, -18],
        [50, -17],
        [-9900, -63],
        [4, -15],
        [94, -62],
        [25, -81],
        [11, 30],
        [64, 0],
        [56, -59],
        [-24, -36],
        [-45, -8],
        [-13, -61],
        [12, -19],
        [-32, -9],
        [-38, 37],
        [-31, 15],
        [-1, 28],
        [-30, 15],
        [-43, -7],
        [-32, 49],
        [11, -40],
        [-10, -36],
        [9946, -34],
        [-50, 15],
        [44, -47],
        [8, 11],
        [37, -119],
        [-14, -29],
        [-29, 17],
        [-38, -3],
        [-89, -68],
        [-42, -49],
        [-39, -30],
        [-5, -34],
        [-31, 44],
        [-65, -20],
        [-23, -34],
        [8, 47],
        [-44, -50],
        [-33, 18],
        [-13, -39],
        [17, -42],
        [24, -4],
        [-31, -29],
        [-13, 37],
        [-29, -62],
        [37, -29],
        [-15, -67],
        [16, -41],
        [-34, -5],
        [-10, -36],
        [10, -54],
        [-58, -49],
        [-12, -67],
        [-27, -25],
        [-24, -97],
        [-56, -97],
        [-15, 2],
        [43, 55],
        [-18, 139],
        [-16, 169],
        [14, 106],
        [39, 74],
        [43, 45],
        [24, 51],
        [56, 76],
        [2, 16],
        [58, 67],
        [2, 66],
        [30, 9],
        [-17, 21],
        [-37, -11],
        [-8, -53],
        [-78, -87],
        [-10, 25],
        [15, 73],
        [-80, -11],
        [-70, -102],
        [-24, -61],
        [31, -25],
        [-51, 5],
        [-55, -28],
        [-17, 44],
        [-33, 22],
        [-22, -38],
        [-136, 13],
        [-36, -15],
        [-47, -60],
        [-11, -39],
        [-51, -62],
        [-30, -61],
        [-65, -88],
        [36, -21],
        [5, 26],
        [39, 4],
        [-22, -68],
        [17, -34],
        [22, 51],
        [30, -2],
        [45, -81],
        [-27, -188],
        [3, -69],
        [-11, -78],
        [-25, -50],
        [-33, -111],
        [-61, -130],
        [-21, -66],
        [-54, -58],
        [-38, 46],
        [-31, -74]
      ],
      [
        [8630, 7035],
        [-2, 8],
        [-2, 8]
      ],
      [
        [8666, 7245],
        [10, -51],
        [13, 40]
      ],
      [
        [8241, 7575],
        [-36, 5],
        [-30, 28],
        [-35, -50],
        [-64, -32],
        [-61, 13],
        [-17, 43],
        [-72, 39],
        [-47, -24],
        [-38, 35],
        [-2, 49],
        [-92, 59],
        [-31, -80],
        [14, -35],
        [-26, -56],
        [-77, 21],
        [-9, 38],
        [-52, 22],
        [-127, -122]
      ],
      [
        [7425, 7523],
        [-19, 35],
        [-38, 0],
        [-50, 100],
        [-55, -19],
        [-22, 42],
        [-20, -36],
        [-58, 177],
        [-37, 49],
        [4, 34],
        [-68, -60],
        [-20, 25],
        [-65, 12],
        [-9, 86],
        [-71, -9],
        [-3, -16],
        [-82, -43],
        [-117, -34],
        [5, -44],
        [24, -11],
        [-38, -32],
        [10, -25],
        [-25, -31],
        [37, -34],
        [-3, -46],
        [-39, 4],
        [-5, -20],
        [-33, 34],
        [-58, 2],
        [-23, -38],
        [-33, 24],
        [-32, 47],
        [-76, 9],
        [-54, -77],
        [-6, -55],
        [-24, 46],
        [-18, -44],
        [4, -45],
        [-16, -56],
        [17, -44],
        [27, -2],
        [32, -103]
      ],
      [
        [6368, 7325],
        [-45, -45],
        [-24, -76],
        [24, -63],
        [-4, -54],
        [32, -84]
      ],
      [
        [6351, 7003],
        [-24, -47],
        [-36, 51]
      ],
      [
        [6291, 7007],
        [-45, 60],
        [-25, -14],
        [-30, 44],
        [-79, 16]
      ],
      [
        [43, 9128],
        [21, -18],
        [-13, -14],
        [9948, -4],
        [-34, -13],
        [3, 30],
        [-9968, 26],
        [43, -7]
      ],
      [
        [8905, 9304],
        [40, -2],
        [38, -26],
        [-7, -27],
        [-74, 22],
        [3, 33]
      ],
      [
        [7558, 9725],
        [-27, 17],
        [72, -9],
        [-30, -18],
        [-15, 10]
      ],
      [
        [6304, 9792],
        [38, 6],
        [-61, -28],
        [-28, 14],
        [51, 8]
      ],
      [
        [6677, 9806],
        [37, 12],
        [16, -23],
        [-33, -27],
        [-39, 1],
        [-13, 16],
        [32, 21]
      ],
      [
        [5550, 7905],
        [18, 19],
        [-22, -17]
      ],
      [
        [5546, 7907],
        [8, 31],
        [28, 28]
      ],
      [
        [5582, 7966],
        [2, 0]
      ],
      [
        [5584, 7966],
        [-12, -25],
        [20, 23]
      ],
      [
        [5592, 7964],
        [43, -26],
        [-1, -38]
      ],
      [
        [5634, 7900],
        [-2, 0],
        [-82, 5]
      ],
      [
        [7638, 9745],
        [-20, -3],
        [-16, -4],
        [-60, 21],
        [35, 16],
        [7, 35],
        [76, 21],
        [61, -42],
        [-21, -5],
        [0, -29],
        [-52, -9],
        [63, 5],
        [21, -21],
        [24, 12],
        [20, -26],
        [-15, -62],
        [-46, -1],
        [-26, 13],
        [-49, 3],
        [-36, 37],
        [34, 39]
      ],
      [
        [8978, 7543],
        [-19, -98],
        [23, -107],
        [-25, 8],
        [-10, -52],
        [-8, 50],
        [10, 98],
        [-6, 64],
        [8, 165],
        [-16, 41],
        [2, 117],
        [29, 23],
        [-7, 44],
        [20, -83],
        [5, -117],
        [23, -162],
        [-29, 9]
      ],
      [
        [6569, 9253],
        [-30, -67],
        [20, -74],
        [42, -38],
        [-13, -18],
        [-48, 19],
        [-7, -15],
        [-51, 23],
        [7, 24],
        [-19, 13],
        [4, -25],
        [-42, 39],
        [-2, 26],
        [26, 10],
        [20, 73],
        [50, 24],
        [43, -14]
      ],
      [
        [9087, 9404],
        [34, 6],
        [20, -11],
        [49, -10],
        [-8, -17],
        [-67, -7],
        [-58, 31],
        [8, 25],
        [22, -17]
      ],
      [
        [8926, 9464],
        [33, -22],
        [39, -3],
        [39, -22],
        [-38, -35],
        [-41, 24],
        [4, -19],
        [29, -12],
        [-37, -7],
        [-15, 12],
        [-79, -25],
        [-30, 14],
        [-28, 37],
        [-24, 6],
        [-16, -6],
        [6, 36],
        [36, -18],
        [13, 23],
        [41, 20],
        [58, -43],
        [10, 40]
      ],
      [
        [6878, 9524],
        [34, -10],
        [4, -22],
        [-50, -33],
        [-161, -55],
        [-62, -64],
        [-26, 9],
        [2, -28],
        [-42, -67],
        [-48, 14],
        [-21, -9],
        [-17, 31],
        [32, 17],
        [20, 48],
        [42, 53],
        [32, 13],
        [15, 23],
        [66, 13],
        [0, 14],
        [35, -6],
        [46, 9],
        [99, 50]
      ],
      [
        [7802, 9652],
        [5, 25],
        [35, 21],
        [23, -9],
        [-7, -19],
        [26, 8],
        [34, -23],
        [29, -41],
        [-25, 15],
        [-41, -16],
        [-70, -4],
        [-32, -17],
        [-21, 5],
        [44, 55]
      ],
      [
        [6296, 9761],
        [84, 23],
        [-18, 10],
        [38, 17],
        [37, -24],
        [-55, -13],
        [14, -36],
        [-19, 12],
        [-81, 11]
      ],
      [
        [6652, 7239],
        [-20, 24]
      ],
      [
        [6632, 7263],
        [5, 12],
        [-9, -6]
      ],
      [
        [6628, 7269],
        [-73, -39],
        [0, -263]
      ],
      [
        [6555, 6967],
        [-13, -6],
        [-36, 76],
        [-19, -16]
      ],
      [
        [6487, 7021],
        [-11, -10]
      ],
      [
        [6476, 7011],
        [-19, -14]
      ],
      [
        [6457, 6997],
        [8, 70],
        [-22, 6],
        [-45, 131],
        [30, 49],
        [32, 6],
        [15, 43],
        [0, 63],
        [-27, -5],
        [-24, 21],
        [-56, -56]
      ],
      [
        [7228, 7027],
        [-50, 50],
        [-89, -2],
        [-28, 30],
        [-19, -60],
        [-46, 28],
        [-25, -42]
      ],
      [
        [6971, 7031],
        [-53, -62],
        [-12, -55],
        [-18, 42],
        [-35, 0],
        [-5, 57],
        [-14, 2],
        [-5, 62],
        [-25, 60],
        [-80, -16],
        [-28, 64],
        [-27, 33]
      ],
      [
        [6669, 7218],
        [-9, 60],
        [18, 18],
        [-5, 4],
        [-29, -22],
        [8, -39]
      ],
      [
        [6677, 7302],
        [2, 0],
        [0, -4],
        [22, 19],
        [-24, -15]
      ],
      [
        [6395, 7220],
        [-6, 6],
        [2, 8],
        [8, 2],
        [-4, -16]
      ],
      [
        [6251, 6946],
        [-1, -2],
        [-1, 4],
        [2, 0],
        [0, -2]
      ],
      [
        [6257, 6940],
        [-1, 0],
        [0, 2],
        [1, -2]
      ],
      [
        [6264, 6914],
        [0, 4],
        [2, 0],
        [-1, -4],
        [-1, 0]
      ],
      [
        [6245, 6850],
        [28, -12],
        [9, -48]
      ],
      [
        [6282, 6790],
        [-19, 11],
        [-17, 45]
      ],
      [
        [6351, 7003],
        [28, -87],
        [-21, -157]
      ],
      [
        [6358, 6759],
        [-23, 27],
        [-2, 64],
        [-40, -60]
      ],
      [
        [6293, 6790],
        [-25, 83],
        [10, 14],
        [-28, 76]
      ],
      [
        [6250, 6963],
        [43, -17],
        [-2, 61]
      ],
      [
        [6962, 6938],
        [-2, 6],
        [1, -2],
        [1, -4]
      ],
      [
        [6962, 6860],
        [2, -2],
        [-3, -4],
        [-2, 8],
        [3, -2]
      ],
      [
        [7080, 6673],
        [-44, 17],
        [-47, -55],
        [0, 84],
        [-28, 34],
        [-13, -59],
        [-24, -31],
        [-41, 6]
      ],
      [
        [6883, 6669],
        [16, 75],
        [-7, 54],
        [-20, 17],
        [30, 23],
        [27, 90],
        [29, 16],
        [14, -57]
      ],
      [
        [6972, 6887],
        [-28, 0],
        [-18, -51],
        [60, 8],
        [21, -31],
        [39, 19]
      ],
      [
        [5784, 1949],
        [13, 11],
        [22, -56],
        [-38, -95],
        [-29, 75],
        [32, 65]
      ],
      [
        [6993, 6865],
        [-1, 0],
        [-1, 2],
        [3, 4],
        [-1, -6]
      ],
      [
        [6977, 6875],
        [1, -13],
        [-4, 0],
        [-2, 15],
        [5, -2]
      ],
      [
        [6652, 7239],
        [-7, -29],
        [20, -37],
        [4, 45]
      ],
      [
        [6971, 7031],
        [-22, -46],
        [35, -33],
        [9, 23],
        [39, -47],
        [-41, -47],
        [-19, 6]
      ],
      [
        [6883, 6669],
        [-14, 0],
        [-21, 13]
      ],
      [
        [6848, 6682],
        [1, 48],
        [-26, 14],
        [-88, 127],
        [-13, 71],
        [-52, 29],
        [-6, 64],
        [-36, 36],
        [-26, -46]
      ],
      [
        [6602, 7025],
        [-6, 14],
        [-10, -30]
      ],
      [
        [6586, 7009],
        [-2, -48],
        [-29, 6]
      ],
      [
        [6628, 7269],
        [-8, -81],
        [12, 75]
      ],
      [
        [4921, 6533],
        [1, -10],
        [18, -4]
      ],
      [
        [4940, 6519],
        [12, -24],
        [3, -108],
        [18, -52],
        [-6, -30],
        [-36, 2],
        [-31, -35],
        [1, -66],
        [-59, -80],
        [-53, -15],
        [-29, -52],
        [0, -71]
      ],
      [
        [4760, 5988],
        [-3, -41],
        [-26, -18],
        [-46, 2],
        [-17, -61],
        [-12, -86],
        [-44, -101],
        [-5, -78],
        [-17, -63],
        [-61, -2]
      ],
      [
        [4529, 5540],
        [38, 187],
        [21, 48],
        [11, 102],
        [25, 41],
        [18, 88],
        [41, 29],
        [25, 47],
        [27, 102],
        [-7, 70],
        [16, 85],
        [21, 50],
        [48, 54],
        [24, 127],
        [15, 8]
      ],
      [
        [4853, 6574],
        [27, -51],
        [39, 13]
      ],
      [
        [4920, 6536],
        [0, -5]
      ],
      [
        [2813, 4108],
        [3, 54],
        [25, 39],
        [20, 80],
        [-6, 46],
        [0, 150],
        [-16, 46]
      ],
      [
        [2854, 4627],
        [11, -10],
        [37, 65],
        [3, 80],
        [39, 57],
        [23, -5],
        [49, 82],
        [5, -41]
      ],
      [
        [3021, 4855],
        [-18, -14],
        [-26, -89],
        [-3, -82],
        [18, -65],
        [8, -92],
        [55, -7],
        [18, -63],
        [55, 7],
        [-11, -121],
        [16, -77],
        [-15, -39],
        [18, -37],
        [9, -82]
      ],
      [
        [3059, 3703],
        [-21, 31],
        [19, 78],
        [-28, 36],
        [-37, -19],
        [-22, 17],
        [-13, 70],
        [-45, 83]
      ],
      [
        [2912, 3999],
        [-28, 39],
        [-33, 15],
        [-38, 55]
      ],
      [
        [8445, 3338],
        [5, 7],
        [6, 2]
      ],
      [
        [8469, 3364],
        [7, 24],
        [51, 22],
        [-15, -46],
        [-39, -38]
      ],
      [
        [5973, 3177],
        [-1, 4],
        [-1, 8]
      ],
      [
        [5971, 3189],
        [-4, 4],
        [-1, 5]
      ],
      [
        [5966, 3198],
        [-1, 3]
      ],
      [
        [5965, 3201],
        [-6, 93],
        [-5, 17]
      ],
      [
        [5954, 3311],
        [-3, 7]
      ],
      [
        [5951, 3318],
        [-3, 5]
      ],
      [
        [5948, 3323],
        [-1, 0],
        [0, 3]
      ],
      [
        [5947, 3326],
        [-3, -5],
        [-1, -12]
      ],
      [
        [5943, 3309],
        [-14, 9],
        [-13, 15]
      ],
      [
        [5916, 3333],
        [-27, 24],
        [-22, 34]
      ],
      [
        [5867, 3391],
        [-34, 191],
        [-8, 104]
      ],
      [
        [5825, 3686],
        [32, 87],
        [-7, 61]
      ],
      [
        [5850, 3834],
        [8, 58],
        [-11, 37]
      ],
      [
        [5847, 3929],
        [11, 4],
        [26, 0]
      ],
      [
        [5884, 3933],
        [0, -2],
        [1, 2]
      ],
      [
        [5885, 3933],
        [1, 0]
      ],
      [
        [5886, 3933],
        [1, -102],
        [36, -4],
        [24, 104]
      ],
      [
        [5947, 3931],
        [99, -143],
        [4, -44],
        [40, -73]
      ],
      [
        [6090, 3671],
        [18, -41],
        [-15, -34],
        [7, -51],
        [-6, -164],
        [30, -125]
      ],
      [
        [6124, 3256],
        [-82, -89],
        [-69, 10]
      ],
      [
        [3096, 80],
        [2, -6],
        [-2, 0]
      ],
      [
        [3402, 1844],
        [-16, -123],
        [0, -39]
      ],
      [
        [3386, 1682],
        [-10, -132],
        [40, -84],
        [-8, -29],
        [20, -75],
        [-25, -90],
        [-41, -37],
        [-50, -21],
        [-34, 4],
        [-7, -140],
        [-41, -20],
        [-30, 33],
        [-5, -90],
        [13, -34],
        [24, 24],
        [3, -48],
        [-22, 18],
        [0, -34],
        [-25, -50],
        [-8, -96],
        [-17, 2],
        [-31, -45],
        [-8, -39],
        [23, -61],
        [23, -4],
        [0, -71],
        [-44, -69],
        [-10, -69],
        [-27, -24],
        [-8, -48],
        [21, -98]
      ],
      [
        [3136, 2371],
        [26, 74],
        [46, -30],
        [8, -49],
        [11, 63],
        [35, -16]
      ],
      [
        [3262, 2413],
        [46, -113],
        [26, -14],
        [70, -103],
        [-29, -133],
        [78, -9],
        [27, 56],
        [6, 77]
      ],
      [
        [3096, 235],
        [6, -48],
        [31, -53],
        [41, -44],
        [34, -17],
        [-54, -11],
        [-19, 5]
      ],
      [
        [3135, 67],
        [-6, 4]
      ],
      [
        [3129, 71],
        [-33, 10]
      ],
      [
        [6346, 6050],
        [13, -69],
        [35, -66],
        [0, -65],
        [18, -71]
      ],
      [
        [6412, 5779],
        [5, -13],
        [7, 4]
      ],
      [
        [6424, 5770],
        [1, -23],
        [8, -4]
      ],
      [
        [6433, 5743],
        [28, -94],
        [73, -17]
      ],
      [
        [6445, 5365],
        [-79, -26],
        [-28, -33],
        [-20, -77],
        [-63, 26],
        [-55, -7],
        [-10, -69]
      ],
      [
        [6190, 5179],
        [-44, 165],
        [-8, 58],
        [-35, 68],
        [-16, 63],
        [0, 88],
        [-18, 87],
        [-25, 37],
        [-9, 64],
        [-56, 206],
        [-18, 4],
        [11, 89]
      ],
      [
        [5972, 6108],
        [31, -11],
        [53, 93],
        [-28, 71],
        [61, 46]
      ],
      [
        [6089, 6307],
        [35, -16],
        [46, -59],
        [72, -135],
        [51, -7]
      ],
      [
        [6293, 6090],
        [26, -8],
        [27, -32]
      ],
      [
        [7133, 6559],
        [7, -38]
      ],
      [
        [6894, 5713],
        [-22, 16],
        [-28, 100],
        [-80, -18],
        [-52, 0]
      ],
      [
        [6712, 5811],
        [6, 73],
        [35, 29],
        [-9, 115],
        [-24, 22],
        [-29, 94]
      ],
      [
        [6691, 6144],
        [45, -31],
        [45, -2],
        [58, 31],
        [5, 79],
        [49, 64],
        [33, 9],
        [6, 80],
        [21, 18],
        [-8, 51],
        [30, 3],
        [15, 81],
        [-13, 60],
        [39, 57],
        [55, 15]
      ],
      [
        [6476, 5198],
        [-24, -73],
        [-74, -65],
        [-25, -49],
        [-18, 2],
        [-37, -45],
        [-24, -5],
        [-53, -55],
        [-13, 17],
        [-20, 195],
        [2, 59]
      ],
      [
        [6564, 5841],
        [3, -7],
        [0, -39]
      ],
      [
        [6433, 5743],
        [71, -7],
        [54, 136]
      ],
      [
        [5947, 3931],
        [5, 56],
        [-7, 36]
      ],
      [
        [5945, 4023],
        [28, 100],
        [-2, 61],
        [-26, 123]
      ],
      [
        [5945, 4307],
        [40, 59],
        [14, -29]
      ],
      [
        [5999, 4337],
        [25, -15],
        [36, -58],
        [39, -15],
        [34, 63],
        [31, -21]
      ],
      [
        [6164, 4291],
        [-25, -83],
        [0, -265],
        [16, -58]
      ],
      [
        [6155, 3885],
        [-38, -78],
        [-27, -136]
      ],
      [
        [3070, 3222],
        [25, -112],
        [-12, -84],
        [6, -36],
        [-14, -97]
      ],
      [
        [3075, 2893],
        [-17, -21],
        [25, -29]
      ],
      [
        [3083, 2843],
        [2, 2],
        [2, -2]
      ],
      [
        [3087, 2843],
        [-4, -19],
        [2, -5]
      ],
      [
        [3085, 2819],
        [-17, -51],
        [4, -17]
      ],
      [
        [3047, 2692],
        [-31, 76],
        [-102, 137],
        [-30, 92],
        [1, 53],
        [-39, 146],
        [-37, 221],
        [-27, 102],
        [-32, 51],
        [-4, 133],
        [25, 60]
      ],
      [
        [2771, 3763],
        [-4, -50],
        [40, -66],
        [19, 116],
        [46, 59],
        [31, 73],
        [9, 104]
      ],
      [
        [3005, 5330],
        [-1, 2]
      ],
      [
        [3004, 5332],
        [-2, 5]
      ],
      [
        [3002, 5337],
        [9, 12],
        [-1, 68]
      ],
      [
        [3010, 5417],
        [20, 16],
        [29, -19],
        [10, -42],
        [34, -30],
        [-15, -17],
        [-49, 0],
        [-20, -59],
        [-10, 31]
      ],
      [
        [3009, 5297],
        [2, 21],
        [-6, 12]
      ],
      [
        [3005, 5330],
        [0, 0]
      ],
      [
        [3002, 5337],
        [1, -7],
        [2, 0]
      ],
      [
        [3009, 5297],
        [-43, 16],
        [-16, -16],
        [-10, 47],
        [43, -19],
        [0, 73],
        [-20, 26],
        [47, -7]
      ],
      [
        [8916, 3819],
        [84, -85],
        [14, -2],
        [35, -75],
        [0, -44],
        [46, -34],
        [12, -53],
        [-26, -5],
        [7, -51],
        [26, -41],
        [30, -103],
        [49, -8],
        [-8, -69],
        [-76, 29],
        [-25, 50],
        [-27, 99],
        [-65, 36],
        [-9, -99],
        [-21, -26],
        [-46, 17]
      ],
      [
        [9165, 3829],
        [-8, 63],
        [15, -58],
        [51, -61],
        [30, -73],
        [-7, -41],
        [-17, 90],
        [-64, 80]
      ],
      [
        [9156, 3553],
        [-44, 41],
        [82, 24],
        [16, 31],
        [-2, 56],
        [25, -9],
        [-8, -76],
        [-46, -63],
        [-23, -4]
      ],
      [
        [5340, 3594],
        [1, 19],
        [-6, 34]
      ],
      [
        [5335, 3647],
        [21, 44],
        [9, -17]
      ],
      [
        [5365, 3674],
        [-18, -29],
        [-7, -51]
      ],
      [
        [5651, 2742],
        [-72, -29],
        [-56, 22],
        [-9, 25],
        [-125, -2],
        [-22, 33],
        [-39, -21]
      ],
      [
        [5328, 2770],
        [0, 104],
        [21, 171],
        [31, 84],
        [4, 112],
        [-21, 114],
        [10, 53],
        [-31, 159],
        [25, 20]
      ],
      [
        [5367, 3587],
        [96, -5],
        [10, -100],
        [17, -57],
        [49, 7],
        [4, 72],
        [63, -19],
        [1, -152],
        [10, -39],
        [2, -93],
        [48, 26]
      ],
      [
        [5667, 3227],
        [1, -153],
        [-57, 0],
        [0, -226],
        [40, -106]
      ],
      [
        [7987, 5058],
        [0, -169],
        [-50, -94],
        [-35, -43]
      ],
      [
        [7902, 4752],
        [-24, 5],
        [-19, 84]
      ],
      [
        [7921, 5032],
        [46, 0],
        [20, 26]
      ],
      [
        [7987, 5058],
        [3, 41],
        [-31, 123],
        [-51, 129],
        [-23, 37],
        [31, 57],
        [-26, 62],
        [-26, -7],
        [-4, 51],
        [-24, 58]
      ],
      [
        [8000, 5545],
        [-30, -40],
        [-25, -67],
        [-12, -71],
        [28, -110],
        [60, -149],
        [19, -179],
        [-12, -110],
        [-49, -69],
        [-15, 9],
        [-6, -70],
        [-48, -53],
        [1, 102],
        [-9, 14]
      ],
      [
        [5969, 3038],
        [-4, 96],
        [8, 43]
      ],
      [
        [6124, 3256],
        [11, -311],
        [-26, -114],
        [-77, -106],
        [-62, -143],
        [-6, -39],
        [24, -121],
        [-12, -177],
        [-38, -37],
        [-34, -61],
        [11, -63]
      ],
      [
        [5915, 2084],
        [-15, -3],
        [-7, 3]
      ],
      [
        [5893, 2084],
        [-2, 38],
        [-3, 25]
      ],
      [
        [5888, 2147],
        [1, 109],
        [-18, 145]
      ],
      [
        [5871, 2401],
        [30, 79],
        [17, 91],
        [-7, 42],
        [8, 79],
        [-3, 118],
        [-71, 76]
      ],
      [
        [5845, 2886],
        [-4, 47],
        [82, 69]
      ],
      [
        [5923, 3002],
        [12, -43],
        [20, 17],
        [-3, -109],
        [25, -45],
        [18, 35],
        [2, 100],
        [-28, 81]
      ],
      [
        [2680, 4788],
        [4, -31],
        [26, -65]
      ],
      [
        [2696, 4605],
        [-3, 19],
        [-75, 123],
        [5, 53]
      ],
      [
        [2623, 4800],
        [37, -7],
        [20, -5]
      ],
      [
        [2700, 4581],
        [0, 0]
      ],
      [
        [5102, 4843],
        [6, -79],
        [-30, -111],
        [-2, -190]
      ],
      [
        [5076, 4463],
        [-22, -8],
        [-8, -5]
      ],
      [
        [5046, 4450],
        [0, 203],
        [-19, 140]
      ],
      [
        [5027, 4793],
        [15, 33],
        [26, 32]
      ],
      [
        [5068, 4858],
        [12, 36],
        [22, -51]
      ],
      [
        [5102, 4843],
        [14, 127],
        [39, 31],
        [39, -64],
        [25, 23],
        [50, -35],
        [13, 31],
        [37, 7],
        [29, -22],
        [31, 46]
      ],
      [
        [5379, 4987],
        [13, -46]
      ],
      [
        [5392, 4941],
        [16, -64],
        [-67, -274],
        [-25, -136],
        [-21, 49],
        [-48, -92],
        [-7, -73]
      ],
      [
        [5240, 4351],
        [-66, -39],
        [-17, 25],
        [-33, 123],
        [-48, 3]
      ],
      [
        [6282, 6790],
        [7, 4],
        [4, -4]
      ],
      [
        [6358, 6759],
        [5, -50],
        [32, -25],
        [25, -47],
        [22, -10],
        [59, 17],
        [-3, 36]
      ],
      [
        [6498, 6680],
        [42, 54],
        [50, 13],
        [4, -21],
        [40, -21],
        [43, -76],
        [23, -4],
        [2, -68]
      ],
      [
        [6702, 6557],
        [-19, -183],
        [7, -113],
        [24, -9],
        [3, -37],
        [-26, -71]
      ],
      [
        [6712, 5811],
        [-47, 9],
        [-72, 32],
        [-9, 77],
        [-18, 25],
        [-43, -50],
        [-95, 102],
        [-36, 162],
        [-31, 16],
        [-12, -31]
      ],
      [
        [6349, 6153],
        [-24, 73],
        [4, 54],
        [-11, 46],
        [-32, 39],
        [-24, 74],
        [26, 131],
        [-28, 15],
        [-16, 82]
      ],
      [
        [2564, 4965],
        [-28, -12],
        [-36, 36]
      ],
      [
        [2500, 4989],
        [0, 7],
        [21, 43]
      ],
      [
        [2521, 5039],
        [45, -43],
        [-2, -31]
      ],
      [
        [4683, 4501],
        [-41, 46],
        [-10, 106]
      ],
      [
        [4632, 4653],
        [22, 58],
        [35, 10],
        [27, -109]
      ],
      [
        [4716, 4612],
        [-9, -50],
        [-24, -61]
      ],
      [
        [4584, 4790],
        [-24, 20],
        [-22, 79]
      ],
      [
        [4538, 4889],
        [42, 24],
        [41, 0]
      ],
      [
        [4621, 4913],
        [0, -70],
        [-28, -14],
        [-9, -39]
      ],
      [
        [5515, 7043],
        [-20, 30],
        [-3, 4]
      ],
      [
        [5492, 7077],
        [5, -4],
        [16, -20]
      ],
      [
        [5513, 7053],
        [0, -4],
        [2, -6]
      ],
      [
        [5379, 7265],
        [48, -4],
        [9, 54],
        [24, 22]
      ],
      [
        [5460, 7337],
        [23, -39],
        [43, -2]
      ],
      [
        [5526, 7296],
        [4, -57],
        [-1, -19]
      ],
      [
        [5529, 7220],
        [-58, 29],
        [-32, -8],
        [13, -68],
        [38, -92]
      ],
      [
        [5490, 7081],
        [-25, 14],
        [-51, 76],
        [0, 65],
        [-24, -20],
        [-11, 49]
      ],
      [
        [2550, 5330],
        [2, -108],
        [-19, -78]
      ],
      [
        [2533, 5144],
        [-9, 0],
        [2, 137]
      ],
      [
        [5915, 2084],
        [-14, -124],
        [-34, -71],
        [-22, -93],
        [-42, -103],
        [-49, -89],
        [-62, -46],
        [-64, 13],
        [-18, -25],
        [-63, -31],
        [-32, 67],
        [-19, 72],
        [13, 13],
        [-2, 67],
        [-26, 97],
        [-22, 129]
      ],
      [
        [5459, 1960],
        [17, 38],
        [8, -49],
        [48, -18],
        [24, 38],
        [0, 264]
      ],
      [
        [5556, 2233],
        [24, -100],
        [-4, -54],
        [27, 2],
        [29, 64],
        [8, 47],
        [51, -36],
        [21, 14],
        [8, 63],
        [26, 35],
        [6, 46],
        [33, 69],
        [31, 34]
      ],
      [
        [5816, 2417],
        [27, -11],
        [28, -5]
      ],
      [
        [5888, 2147],
        [-14, 14],
        [-17, -46],
        [9, -58],
        [27, 27]
      ],
      [
        [5636, 4788],
        [22, -77],
        [-4, -77],
        [18, -7]
      ],
      [
        [5672, 4627],
        [33, -94],
        [29, -51],
        [1, -41],
        [28, -73]
      ],
      [
        [5763, 4368],
        [-51, 22],
        [-86, -85],
        [-53, 17],
        [-24, 51],
        [-33, -58],
        [3, -61]
      ],
      [
        [5519, 4254],
        [-33, 17],
        [-24, -17],
        [-10, -87]
      ],
      [
        [5452, 4167],
        [-3, 41],
        [-26, 68],
        [-22, 162],
        [30, 107]
      ],
      [
        [5431, 4545],
        [36, 2],
        [51, 34],
        [14, 70],
        [36, 10],
        [57, 132],
        [11, -5]
      ],
      [
        [5636, 4788],
        [-18, 129],
        [-4, 74],
        [13, 27],
        [15, 111],
        [26, 3],
        [0, 270]
      ],
      [
        [5668, 5402],
        [0, 36],
        [27, 0],
        [0, 144]
      ],
      [
        [5695, 5582],
        [87, 0]
      ],
      [
        [5782, 5582],
        [165, 0]
      ],
      [
        [5947, 5582],
        [-78, 0]
      ],
      [
        [5869, 5582],
        [157, 0]
      ],
      [
        [6026, 5582],
        [10, -84],
        [8, -152],
        [30, -51]
      ],
      [
        [6074, 5295],
        [-45, -66],
        [-16, -140],
        [3, -62]
      ],
      [
        [6016, 5027],
        [-12, -112],
        [-12, -2],
        [-23, -139],
        [-8, 12],
        [-14, -104]
      ],
      [
        [5947, 4682],
        [-24, 101],
        [1, 96],
        [-32, -14],
        [9, -67],
        [-32, -92],
        [-34, 36],
        [-33, -69],
        [-63, 14],
        [-21, 65],
        [-20, -10],
        [-26, -115]
      ],
      [
        [5813, 3766],
        [-4, -124],
        [11, -116],
        [30, -109]
      ],
      [
        [5850, 3417],
        [-47, -19]
      ],
      [
        [5803, 3398],
        [-15, -43],
        [5, -22]
      ],
      [
        [5793, 3333],
        [6, -29],
        [-10, -118],
        [19, -67],
        [21, 17],
        [0, -91],
        [-17, -2],
        [-56, 134],
        [-14, -31],
        [-37, 26],
        [-1, 31],
        [-28, -12],
        [-9, 36]
      ],
      [
        [5367, 3587],
        [-20, -15],
        [-7, 22]
      ],
      [
        [5365, 3674],
        [36, 26],
        [12, -38],
        [39, 106],
        [0, 85],
        [43, 115],
        [8, 191],
        [16, 95]
      ],
      [
        [5763, 4368],
        [26, -56],
        [40, 20],
        [29, -75]
      ],
      [
        [5858, 4257],
        [-4, -76],
        [16, -19]
      ],
      [
        [5870, 4162],
        [-22, -49],
        [-1, -19]
      ],
      [
        [5847, 4094],
        [-14, -29],
        [-7, -66]
      ],
      [
        [5826, 3999],
        [-11, -29],
        [10, 2]
      ],
      [
        [5825, 3972],
        [-3, -31],
        [1, -34]
      ],
      [
        [5823, 3907],
        [-7, -10],
        [-3, -12]
      ],
      [
        [5813, 3885],
        [-8, -20],
        [-2, -36]
      ],
      [
        [5803, 3829],
        [0, -15],
        [4, -4]
      ],
      [
        [5807, 3810],
        [7, -22],
        [-1, -22]
      ],
      [
        [6293, 6090],
        [16, 63],
        [24, 2]
      ],
      [
        [6333, 6155],
        [4, -47],
        [9, -58]
      ],
      [
        [5257, 7421],
        [0, -2]
      ],
      [
        [5257, 7421],
        [0, 0]
      ],
      [
        [5263, 7933],
        [57, -65],
        [29, 40],
        [31, 7],
        [11, -36],
        [5, -9]
      ],
      [
        [5396, 7870],
        [-1, -2],
        [0, -2]
      ],
      [
        [5395, 7866],
        [-3, 7],
        [5, -21]
      ],
      [
        [5397, 7852],
        [-3, -60],
        [14, -20],
        [5, -123]
      ],
      [
        [5413, 7649],
        [-64, -34],
        [-4, -46],
        [40, -71]
      ],
      [
        [5385, 7498],
        [-30, -45],
        [9, -46],
        [-25, 16],
        [-32, -23],
        [-36, 11]
      ],
      [
        [5271, 7411],
        [-18, 19],
        [4, -9]
      ],
      [
        [5257, 7421],
        [-21, -6],
        [-24, 0]
      ],
      [
        [5177, 7549],
        [5, 24],
        [-10, 22]
      ],
      [
        [5172, 7595],
        [6, 15],
        [-10, 31]
      ],
      [
        [5201, 7820],
        [4, 34],
        [34, -13],
        [12, 25],
        [-9, 72]
      ],
      [
        [5172, 7595],
        [-11, -16],
        [1, -25]
      ],
      [
        [5072, 7665],
        [17, 18],
        [5, 2]
      ],
      [
        [5118, 7685],
        [2, -4],
        [-1, 4]
      ],
      [
        [4828, 7882],
        [7, -83],
        [-10, -54],
        [-34, -9],
        [-31, -36],
        [-31, -9],
        [-17, 32],
        [42, 99],
        [-30, 7],
        [4, 69],
        [34, -5],
        [9, 64],
        [29, -7]
      ],
      [
        [8630, 7035],
        [-30, -52],
        [2, -53],
        [-61, -78],
        [-1, -41],
        [25, -39]
      ],
      [
        [8565, 6772],
        [-33, -23],
        [-14, -34]
      ],
      [
        [8518, 6715],
        [-30, 15],
        [-6, -25],
        [-16, 60],
        [18, 56],
        [-30, 58]
      ],
      [
        [8565, 6772],
        [27, -97],
        [4, -124],
        [-24, -58],
        [-16, 15],
        [-15, -37],
        [-30, 13],
        [7, 231]
      ],
      [
        [3335, 4620],
        [26, -41],
        [53, -138],
        [-2, -41]
      ],
      [
        [3412, 4400],
        [-22, -95],
        [44, -160]
      ],
      [
        [3315, 4378],
        [-18, 51],
        [5, 46],
        [26, 41],
        [-7, 48],
        [14, 56]
      ],
      [
        [2552, 5132],
        [64, 21],
        [45, -14],
        [33, -59]
      ],
      [
        [2694, 5080],
        [-46, -12],
        [-26, -62],
        [-28, -15],
        [-16, -54]
      ],
      [
        [2578, 4937],
        [-6, 21],
        [-8, 7]
      ],
      [
        [2521, 5039],
        [5, 45],
        [26, 48]
      ],
      [
        [7810, 5549],
        [-12, -16],
        [-17, -72]
      ],
      [
        [7743, 4747],
        [-5, 204],
        [-22, 121],
        [-3, 100],
        [-13, 52],
        [-49, -92],
        [-34, 21],
        [11, 109],
        [-17, 133],
        [-27, 45],
        [-21, 74]
      ],
      [
        [5274, 4077],
        [42, 0],
        [0, 85]
      ],
      [
        [5316, 4162],
        [1, 10],
        [54, -13]
      ],
      [
        [5371, 4159],
        [-2, -65],
        [34, -22],
        [-18, -80],
        [19, -29],
        [-11, -136],
        [-46, 43],
        [-25, -31],
        [8, -100],
        [-20, -14]
      ],
      [
        [5310, 3725],
        [-51, 150],
        [-16, 88],
        [16, 14],
        [1, 68],
        [14, 32]
      ],
      [
        [5274, 4077],
        [-13, 14],
        [13, 83]
      ],
      [
        [5274, 4174],
        [4, -12],
        [38, 0]
      ],
      [
        [2623, 4800],
        [-55, 127],
        [10, 10]
      ],
      [
        [2694, 5080],
        [-21, -258],
        [7, -34]
      ],
      [
        [5783, 8028],
        [-15, -26],
        [-28, -9]
      ],
      [
        [5740, 7993],
        [-48, 57],
        [-12, -14],
        [-65, 12],
        [-29, -25]
      ],
      [
        [5586, 8023],
        [0, 56],
        [19, 52],
        [24, 12],
        [30, -56],
        [19, 19],
        [-2, 45]
      ],
      [
        [5885, 3933],
        [0, 3],
        [1, -3]
      ],
      [
        [5825, 3972],
        [6, 22],
        [-5, 5]
      ],
      [
        [5847, 4094],
        [26, 48],
        [-3, 20]
      ],
      [
        [5858, 4257],
        [73, 17],
        [14, 33]
      ],
      [
        [5945, 4023],
        [-39, -7],
        [-22, -83]
      ],
      [
        [5847, 3929],
        [-15, -30],
        [-9, 8]
      ],
      [
        [5971, 3189],
        [0, 0]
      ],
      [
        [5966, 3198],
        [0, 3],
        [-1, 0]
      ],
      [
        [5954, 3311],
        [0, 0]
      ],
      [
        [5948, 3323],
        [-1, 3]
      ],
      [
        [5943, 3309],
        [12, -140],
        [-1, -121],
        [15, -10]
      ],
      [
        [5923, 3002],
        [-10, 22],
        [15, 83],
        [-4, 120],
        [12, 22],
        [-20, 84]
      ],
      [
        [6207, 6950],
        [21, 8],
        [22, 5]
      ],
      [
        [6202, 4829],
        [29, -75],
        [41, 32],
        [19, -15],
        [27, 36],
        [42, 5]
      ],
      [
        [6360, 4812],
        [0, -130],
        [-26, -103]
      ],
      [
        [6334, 4579],
        [-28, 0],
        [-83, 70],
        [-37, 117],
        [7, 27]
      ],
      [
        [6193, 4793],
        [9, 36]
      ],
      [
        [6586, 7009],
        [22, -18],
        [-6, 34]
      ],
      [
        [6848, 6682],
        [-20, 14],
        [-28, -33],
        [-9, -59],
        [-61, -81],
        [-28, 34]
      ],
      [
        [6498, 6680],
        [2, 112],
        [-11, 75],
        [-23, 8],
        [5, 65],
        [22, -24],
        [28, 34],
        [-24, 69],
        [-10, 2]
      ],
      [
        [6476, 7011],
        [2, 10],
        [9, 0]
      ],
      [
        [6476, 7011],
        [-9, -40],
        [-10, 26]
      ],
      [
        [5793, 3333],
        [18, 50],
        [-8, 15]
      ],
      [
        [5850, 3417],
        [13, -41],
        [4, 15]
      ],
      [
        [5845, 2886],
        [-43, -31],
        [-2, -33],
        [-18, -24]
      ],
      [
        [5782, 2798],
        [-15, -19],
        [-15, -59]
      ],
      [
        [5752, 2720],
        [-10, -9],
        [-39, 21]
      ],
      [
        [5703, 2732],
        [-29, 21],
        [-23, -11]
      ],
      [
        [5936, 6514],
        [-6, 13],
        [-20, -2]
      ],
      [
        [5910, 6525],
        [52, 38],
        [-17, -47]
      ],
      [
        [5945, 6516],
        [-2, 3]
      ],
      [
        [5906, 6525],
        [2, 2]
      ],
      [
        [5908, 6527],
        [-1, -2],
        [-1, 0]
      ],
      [
        [4760, 5961],
        [88, -134],
        [20, -32]
      ],
      [
        [4868, 5795],
        [-50, 0],
        [30, -680],
        [-144, -5],
        [-28, 10],
        [-15, -57]
      ],
      [
        [4661, 5063],
        [-57, 135],
        [-56, -14],
        [-6, -45]
      ],
      [
        [4542, 5139],
        [14, 153],
        [-13, 103],
        [9, 59],
        [-24, 39]
      ],
      [
        [4528, 5493],
        [3, 40],
        [109, 0],
        [0, 122],
        [28, 30],
        [0, 183],
        [92, 0],
        [0, 93]
      ],
      [
        [4760, 5961],
        [0, 27]
      ],
      [
        [4940, 6519],
        [91, 99],
        [52, 24],
        [51, 6],
        [13, -17],
        [59, 32],
        [34, -11]
      ],
      [
        [5240, 6652],
        [-6, -36],
        [-4, -130],
        [-21, -53],
        [24, -98],
        [19, -33],
        [13, -132]
      ],
      [
        [5265, 6170],
        [10, -77],
        [0, -189],
        [-12, -27],
        [17, -91],
        [41, -41],
        [13, -55]
      ],
      [
        [5334, 5690],
        [-125, -190],
        [-47, -102],
        [-44, -21]
      ],
      [
        [5118, 5377],
        [-30, 0],
        [2, 47],
        [-36, 30],
        [-21, 63],
        [-165, 278]
      ],
      [
        [5592, 7964],
        [-3, 31],
        [-3, 28]
      ],
      [
        [5740, 7993],
        [4, -25],
        [-24, -27],
        [-11, -45],
        [-31, -30],
        [-24, 4]
      ],
      [
        [5654, 7870],
        [-1, 16],
        [-19, 14]
      ],
      [
        [5582, 7966],
        [5, 15],
        [-3, -15]
      ],
      [
        [6162, 4814],
        [-3, -7],
        [3, -7]
      ],
      [
        [6162, 4800],
        [4, -12],
        [27, 5]
      ],
      [
        [6334, 4579],
        [-85, -221],
        [-27, 3],
        [-58, -70]
      ],
      [
        [5999, 4337],
        [-33, 145],
        [-28, 72],
        [-19, 10],
        [5, 48],
        [20, -2],
        [3, 72]
      ],
      [
        [6016, 5027],
        [37, 45],
        [82, -57],
        [43, -117]
      ],
      [
        [6178, 4898],
        [-17, -67],
        [1, -17]
      ],
      [
        [6074, 5295],
        [30, -206],
        [41, -36],
        [54, -138]
      ],
      [
        [6199, 4915],
        [-12, -24],
        [-9, 7]
      ],
      [
        [5034, 4443],
        [-90, -99],
        [-29, 27]
      ],
      [
        [4915, 4371],
        [4, 0],
        [4, 4]
      ],
      [
        [4923, 4375],
        [-11, 121],
        [20, 97],
        [-5, 92]
      ],
      [
        [4927, 4685],
        [-2, 108],
        [72, 9]
      ],
      [
        [4997, 4802],
        [15, -64],
        [4, -242],
        [18, -53]
      ],
      [
        [5379, 7265],
        [0, 4],
        [3, 4]
      ],
      [
        [5382, 7338],
        [23, -9],
        [44, 34]
      ],
      [
        [5449, 7363],
        [4, 0],
        [7, -26]
      ],
      [
        [2533, 5144],
        [8, -10],
        [11, -2]
      ],
      [
        [2500, 4989],
        [-34, 17],
        [-26, 43]
      ],
      [
        [5492, 7077],
        [-3, 4],
        [1, 0]
      ],
      [
        [5529, 7220],
        [10, 2],
        [-4, -99]
      ],
      [
        [5535, 7123],
        [-21, -38],
        [-1, -32]
      ],
      [
        [5985, 6232],
        [3, 7],
        [-3, 4]
      ],
      [
        [5985, 6243],
        [-1, 2],
        [1, 5]
      ],
      [
        [5985, 6250],
        [3, 0],
        [0, 30]
      ],
      [
        [5988, 6280],
        [0, 64],
        [6, 6]
      ],
      [
        [5994, 6350],
        [29, -30],
        [55, 76]
      ],
      [
        [6078, 6396],
        [8, -63],
        [3, -26]
      ],
      [
        [5972, 6108],
        [2, 14],
        [-2, 2]
      ],
      [
        [5972, 6124],
        [5, 62],
        [8, 46]
      ],
      [
        [5994, 6350],
        [4, 15],
        [-2, 33]
      ],
      [
        [5996, 6398],
        [21, 58],
        [-17, 33]
      ],
      [
        [6000, 6489],
        [-1, 53],
        [0, 36]
      ],
      [
        [6177, 6665],
        [-27, -44],
        [-4, -124],
        [-14, -32],
        [-54, -69]
      ],
      [
        [5208, 7139],
        [-1, -2],
        [-1, 0]
      ],
      [
        [5583, 6934],
        [-1, 2]
      ],
      [
        [5583, 6934],
        [0, 0]
      ],
      [
        [5539, 7021],
        [0, 10],
        [1, 6]
      ],
      [
        [5540, 7037],
        [9, 24],
        [9, -8]
      ],
      [
        [5558, 7053],
        [12, -24],
        [2, -24]
      ],
      [
        [5572, 7005],
        [-3, -22],
        [5, -35]
      ],
      [
        [5574, 6948],
        [1, -12],
        [2, 0]
      ],
      [
        [5577, 6936],
        [3, 0],
        [2, 0]
      ],
      [
        [5582, 6936],
        [0, -2],
        [1, -2]
      ],
      [
        [5583, 6932],
        [-1, -6],
        [1, 2]
      ],
      [
        [5585, 6920],
        [-1, 0],
        [1, 0]
      ],
      [
        [5557, 6848],
        [-19, 70],
        [1, 85]
      ],
      [
        [5539, 7003],
        [0, 8],
        [0, 10]
      ],
      [
        [5539, 7035],
        [0, -2]
      ],
      [
        [5539, 7035],
        [0, 0]
      ],
      [
        [3525, 1667],
        [-13, -33],
        [3, -32]
      ],
      [
        [3520, 1589],
        [-12, -48],
        [-32, -38],
        [-34, 0],
        [-47, 34],
        [-15, 37],
        [6, 108]
      ],
      [
        [5910, 6525],
        [0, 0]
      ],
      [
        [8264, 7428],
        [10, 6],
        [-4, 8]
      ],
      [
        [5803, 3829],
        [13, 32],
        [-3, 24]
      ],
      [
        [5850, 3834],
        [-19, -20],
        [-24, -4]
      ],
      [
        [6360, 4812],
        [65, 41],
        [-12, -171],
        [-80, -358],
        [-54, -143],
        [-71, -131],
        [-53, -165]
      ],
      [
        [3083, 2843],
        [0, 12],
        [4, -12]
      ],
      [
        [3085, 2819],
        [13, 17],
        [-23, 57]
      ],
      [
        [3387, 2561],
        [-26, 63],
        [-74, -25],
        [-14, -66],
        [-11, -120]
      ],
      [
        [5274, 4174],
        [-5, 109],
        [-29, 68]
      ],
      [
        [5392, 4941],
        [7, 0]
      ],
      [
        [5399, 4941],
        [-2, -12],
        [7, 5]
      ],
      [
        [5404, 4934],
        [18, -103],
        [-2, -53],
        [17, -57],
        [-42, 0],
        [-6, -24],
        [34, -85],
        [8, -67]
      ],
      [
        [5452, 4167],
        [-1, -37],
        [-45, 34],
        [-35, -5]
      ],
      [
        [5401, 4941],
        [-1, 0]
      ],
      [
        [5401, 4941],
        [0, 0]
      ],
      [
        [5335, 3647],
        [-6, 32],
        [-19, 46]
      ],
      [
        [4528, 5493],
        [-2, 7],
        [3, 40]
      ],
      [
        [5526, 7296],
        [18, 17],
        [20, -4]
      ],
      [
        [5564, 7309],
        [34, -70],
        [-2, -25],
        [35, -39]
      ],
      [
        [5631, 7175],
        [-9, -32],
        [17, -50],
        [-17, -56]
      ],
      [
        [5622, 7037],
        [-11, 0],
        [-11, -6]
      ],
      [
        [5600, 7031],
        [6, 30],
        [-28, 44],
        [-11, -32]
      ],
      [
        [5567, 7073],
        [-21, 26],
        [-11, 24]
      ],
      [
        [5567, 7073],
        [-10, -8],
        [1, -12]
      ],
      [
        [5540, 7037],
        [-1, -2]
      ],
      [
        [5539, 7033],
        [-6, 0],
        [6, -12]
      ],
      [
        [5539, 7003],
        [-16, 30],
        [-8, 10]
      ],
      [
        [5046, 4450],
        [-5, -2],
        [-7, -5]
      ],
      [
        [4997, 4802],
        [18, -9],
        [12, 0]
      ],
      [
        [5616, 7474],
        [5, 19],
        [6, 28]
      ],
      [
        [5627, 7521],
        [3, 33],
        [40, 73],
        [-13, 69]
      ],
      [
        [5657, 7696],
        [22, 25],
        [38, 4],
        [41, -23],
        [57, -17],
        [34, 15],
        [11, 36],
        [24, 2]
      ],
      [
        [6062, 7381],
        [-64, -33],
        [-30, -35],
        [21, -75],
        [-44, -53],
        [-31, 90],
        [25, 21],
        [-56, 21],
        [16, 18],
        [-32, 11],
        [-38, -73],
        [-4, -28]
      ],
      [
        [5825, 7245],
        [-24, 2],
        [-16, 16]
      ],
      [
        [5785, 7263],
        [20, 70],
        [32, -6],
        [-27, 84],
        [4, 23],
        [-42, 42],
        [-31, -14]
      ],
      [
        [5741, 7462],
        [-38, -24],
        [-66, 2]
      ],
      [
        [5637, 7440],
        [-8, 11],
        [-13, 23]
      ],
      [
        [5838, 7327],
        [8, -19],
        [2, 3],
        [-8, 18],
        [-2, -2]
      ],
      [
        [5945, 7308],
        [28, -31],
        [-5, 27],
        [-18, 17],
        [-5, -13]
      ],
      [
        [5616, 7474],
        [-46, 7],
        [-16, -28],
        [-58, -27],
        [-18, 19]
      ],
      [
        [5478, 7445],
        [-9, 25],
        [3, 17]
      ],
      [
        [5472, 7487],
        [32, 36],
        [20, 29]
      ],
      [
        [5524, 7552],
        [84, -9],
        [19, -22]
      ],
      [
        [5795, 7139],
        [-24, -94],
        [8, -32]
      ],
      [
        [5638, 6967],
        [2, 28],
        [-18, 42]
      ],
      [
        [5631, 7175],
        [18, -26],
        [57, -16],
        [46, 38],
        [43, -32]
      ],
      [
        [6412, 5779],
        [-2, 53],
        [24, 27],
        [-10, -89]
      ],
      [
        [5266, 7392],
        [2, -11],
        [-1, -4]
      ],
      [
        [5267, 7377],
        [-3, 0],
        [2, 15]
      ],
      [
        [5266, 7392],
        [3, 10],
        [-2, 7]
      ],
      [
        [5267, 7409],
        [3, -2],
        [1, 4]
      ],
      [
        [5385, 7498],
        [24, -11],
        [8, 26],
        [55, -26]
      ],
      [
        [5478, 7445],
        [-16, -19],
        [-13, -63]
      ],
      [
        [5292, 7363],
        [-10, -1],
        [-15, 15]
      ],
      [
        [5637, 7440],
        [-25, -33],
        [-24, -86],
        [-24, -12]
      ],
      [
        [5741, 7462],
        [10, -5],
        [34, -111],
        [0, -83]
      ],
      [
        [5825, 7245],
        [-28, -64],
        [-2, -42]
      ],
      [
        [5068, 4858],
        [-6, 50],
        [-33, 31],
        [-22, 136]
      ],
      [
        [5007, 5075],
        [31, 26],
        [61, 5],
        [19, 75],
        [0, 196]
      ],
      [
        [5334, 5690],
        [42, -23],
        [20, -42],
        [22, 28]
      ],
      [
        [5418, 5653],
        [5, -108],
        [22, -82],
        [-7, -32],
        [-7, -214],
        [-56, -180],
        [4, -50]
      ],
      [
        [4923, 4375],
        [-84, -9],
        [-47, -49]
      ],
      [
        [4792, 4317],
        [2, 104],
        [-32, 49],
        [4, 77]
      ],
      [
        [4766, 4547],
        [18, 133],
        [-4, 53]
      ],
      [
        [4780, 4733],
        [48, 7],
        [20, 12]
      ],
      [
        [4848, 4752],
        [24, -53],
        [41, 17],
        [14, -31]
      ],
      [
        [4915, 4371],
        [-4, 2],
        [4, -2]
      ],
      [
        [4915, 4371],
        [0, 0]
      ],
      [
        [4792, 4317],
        [-48, 58],
        [-61, 126]
      ],
      [
        [4716, 4612],
        [22, -9],
        [10, -82],
        [18, 26]
      ],
      [
        [8195, 4351],
        [3, 3],
        [0, 2]
      ],
      [
        [8166, 4334],
        [15, 7],
        [12, 15]
      ],
      [
        [6349, 6153],
        [-12, 4],
        [-4, -2]
      ],
      [
        [6154, 6979],
        [0, 80],
        [-42, 54]
      ],
      [
        [4537, 4941],
        [-2, 19],
        [7, 20]
      ],
      [
        [4542, 4980],
        [46, 14],
        [-26, -45],
        [-25, -8]
      ],
      [
        [5257, 7419],
        [8, -12],
        [2, 2]
      ],
      [
        [5190, 7331],
        [-5, 7],
        [-7, -9]
      ],
      [
        [5178, 7329],
        [-3, -8]
      ],
      [
        [5404, 4934],
        [7, 7],
        [-10, 0]
      ],
      [
        [5400, 4941],
        [-2, 5],
        [1, -5]
      ],
      [
        [5418, 5653],
        [27, 32],
        [223, -283]
      ],
      [
        [5600, 7031],
        [-13, -2],
        [-15, -24]
      ],
      [
        [5976, 6376],
        [13, 59],
        [11, 54]
      ],
      [
        [5996, 6398],
        [-9, -22],
        [-11, 0]
      ],
      [
        [6162, 4800],
        [2, 7],
        [-2, 7]
      ],
      [
        [6199, 4915],
        [6, -50],
        [-3, -36]
      ],
      [
        [5825, 3686],
        [-8, 41],
        [-4, 39]
      ],
      [
        [3412, 4400],
        [9, 36],
        [81, -12],
        [-5, -37]
      ],
      [
        [5951, 6248],
        [18, 70],
        [7, 58]
      ],
      [
        [5988, 6280],
        [-4, -17],
        [1, -13]
      ],
      [
        [5985, 6243],
        [-2, -4],
        [2, -7]
      ],
      [
        [5972, 6124],
        [-1, -7],
        [-1, 0]
      ],
      [
        [5970, 6117],
        [-2, 18],
        [-17, 113]
      ],
      [
        [4780, 4733],
        [-11, 86],
        [-23, 79],
        [-42, -40],
        [-19, 36]
      ],
      [
        [4685, 4894],
        [-19, 93],
        [-5, 76]
      ],
      [
        [5007, 5075],
        [-25, 12],
        [-39, -67],
        [-20, -9],
        [-20, -62],
        [-15, 16],
        [-13, -88],
        [-17, -17],
        [-10, -108]
      ],
      [
        [4538, 4889],
        [-3, 36],
        [2, 16]
      ],
      [
        [4542, 4980],
        [-17, 95],
        [17, 64]
      ],
      [
        [4685, 4894],
        [-27, -8],
        [-37, 27]
      ],
      [
        [4632, 4653],
        [-15, 58],
        [-33, 79]
      ],
      [
        [5752, 2720],
        [30, 78]
      ],
      [
        [5816, 2417],
        [-36, 44],
        [-9, 75],
        [-44, 72],
        [-24, 124]
      ],
      [
        [5546, 7907],
        [-7, -13],
        [11, 11]
      ],
      [
        [5654, 7870],
        [10, -91],
        [-20, -27],
        [13, -56]
      ],
      [
        [5524, 7552],
        [-7, 28],
        [-60, 50],
        [-44, 19]
      ],
      [
        [5397, 7852],
        [11, 11],
        [-13, 3]
      ],
      [
        [5396, 7870],
        [54, 24],
        [12, 20],
        [48, 21],
        [8, -30],
        [28, 2]
      ],
      [
        [5583, 6932],
        [0, 0]
      ],
      [
        [5588, 6932],
        [-5, 12],
        [0, -10]
      ],
      [
        [5577, 6936],
        [3, 14],
        [-6, -2]
      ],
      [
        [3495, 2281],
        [-3, -27],
        [-7, -71]
      ],
      [
        [5703, 2732],
        [-47, -49],
        [-8, 33],
        [-65, -21],
        [1, -262],
        [-28, -4],
        [0, -196]
      ],
      [
        [5459, 1960],
        [-33, 88],
        [-19, 199],
        [-6, 163],
        [-27, 102],
        [-24, 126],
        [-14, 43],
        [-8, 89]
      ],
      [
        [5265, 6170],
        [22, 51],
        [-5, 35],
        [40, 75],
        [-1, 52]
      ],
      [
        [5321, 6383],
        [23, -26],
        [28, 6],
        [51, -37],
        [24, -81],
        [36, -13],
        [48, -59],
        [19, 17],
        [4, 90],
        [18, 57],
        [30, 28],
        [41, -21],
        [-1, -22],
        [53, -26],
        [4, -22]
      ],
      [
        [5699, 6274],
        [-12, -106],
        [8, -73],
        [0, -513]
      ],
      [
        [5240, 6652],
        [32, 30],
        [39, -153],
        [-28, -64],
        [6, -45],
        [19, 6],
        [13, -43]
      ],
      [
        [2899, 5768],
        [-18, 50]
      ],
      [
        [2881, 5818],
        [6, -11],
        [12, -39]
      ],
      [
        [2899, 5768],
        [13, -32],
        [5, -74],
        [65, -55],
        [-58, 37],
        [-32, 57],
        [16, 39],
        [-9, 28]
      ],
      [
        [2881, 5818],
        [-25, 43],
        [-19, -54],
        [10, -101],
        [-19, 66],
        [2, 37],
        [27, 70],
        [24, -61]
      ],
      [
        [9711, 668],
        [-38, 4],
        [-3, -40],
        [-12, 65],
        [-27, -2],
        [-7, 29],
        [13, 47],
        [39, 81],
        [38, 31],
        [38, 72],
        [27, 121],
        [18, 27],
        [10, -57],
        [20, 28],
        [11, -69],
        [-49, -132],
        [-30, -39],
        [-20, -102],
        [-28, -64]
      ],
      [
        [9890, 1058],
        [-24, -34],
        [-17, 24],
        [17, 71],
        [-40, 64],
        [22, 41],
        [8, 75],
        [-14, 82],
        [-35, 102],
        [22, 15],
        [35, -87],
        [19, -38],
        [5, -63],
        [40, -25],
        [31, 19],
        [-19, -98],
        [-13, 2],
        [-37, -150]
      ],
      [
        [2861, 5472],
        [-43, 14],
        [-16, 63],
        [-34, 37],
        [-38, 9],
        [-2, 35],
        [-24, 2],
        [-49, -67],
        [4, 42],
        [32, 46],
        [34, 14],
        [54, -9],
        [22, -49],
        [14, 10],
        [11, 2],
        [51, -97],
        [50, -42],
        [13, -40],
        [-96, -16],
        [17, 46]
      ],
      [
        [2771, 3763],
        [16, 51],
        [-32, 25],
        [0, 90],
        [24, 80],
        [-1, 48],
        [35, 51]
      ],
      [
        [9079, 885],
        [-24, 0],
        [-21, 68],
        [-16, 109],
        [2, 45],
        [-19, 29],
        [60, -78],
        [55, 39],
        [2, -86],
        [-9, -102],
        [-13, 26],
        [-17, -50]
      ],
      [
        [9059, 2742],
        [8, -104],
        [74, -100],
        [14, -125],
        [34, -33],
        [2, -62],
        [28, -41],
        [19, -75],
        [22, 13],
        [-9, -57],
        [14, -115],
        [1, -105],
        [-29, -256],
        [-21, -33],
        [-46, -215],
        [-5, -114],
        [-46, -25],
        [-51, -64],
        [-43, 16],
        [2, 44],
        [-40, -69],
        [-32, 36],
        [-48, 21],
        [-26, 62],
        [-4, 85],
        [-17, 34],
        [-63, -38],
        [18, 36],
        [-10, 47],
        [28, 127],
        [-16, 0],
        [-50, -129],
        [-12, 75],
        [-25, 52],
        [-4, 50],
        [-54, 30],
        [-29, 42],
        [-60, -15],
        [-48, -44],
        [-30, 4],
        [-58, -67],
        [-16, -56],
        [-98, 2],
        [-44, -71],
        [-36, -11],
        [-31, 17],
        [-29, 54],
        [20, 56],
        [0, 118],
        [-20, 103],
        [0, 51],
        [-22, 98],
        [-5, 59],
        [-29, 111],
        [16, 18],
        [16, -68],
        [2, 47],
        [-21, 91],
        [7, 141],
        [64, 108],
        [49, 28],
        [89, 73],
        [38, 107],
        [-3, 64],
        [21, 47],
        [17, -66],
        [1, 97],
        [22, -12],
        [1, 78],
        [18, 45],
        [42, 27],
        [10, 38],
        [34, -72],
        [41, -26],
        [-8, 48],
        [44, 176],
        [-25, 10],
        [9, 43],
        [29, -2],
        [1, -75],
        [34, 10],
        [-2, 79],
        [16, -48],
        [52, -41],
        [39, 34],
        [12, -34],
        [-28, -105],
        [-12, -83],
        [30, -59],
        [68, -83],
        [29, -59],
        [23, 19],
        [22, 168],
        [-1, 183],
        [10, 36],
        [4, 132],
        [14, -38],
        [25, -216],
        [12, -54],
        [15, 23],
        [23, -54],
        [2, -100],
        [21, -94]
      ],
      [
        [3021, 4855],
        [-16, -17],
        [10, -64],
        [-15, -65],
        [16, -56],
        [13, 51],
        [-14, 77],
        [39, 45],
        [35, 0],
        [27, -72],
        [45, 15],
        [42, -41],
        [24, 38],
        [34, 10],
        [13, -50],
        [40, -49],
        [-3, -33],
        [24, -24]
      ],
      [
        [9467, 3299],
        [-28, 5],
        [0, 89],
        [-42, 70],
        [-20, -31],
        [17, -49],
        [-39, 42],
        [3, 65],
        [48, -27],
        [33, -53],
        [7, -51],
        [25, 29],
        [-4, -89]
      ],
      [
        [6385, 2822],
        [-63, -524],
        [-14, -81],
        [-53, -45],
        [-31, 43],
        [-7, 110],
        [-15, 88],
        [7, 67],
        [27, 95],
        [-15, 181],
        [14, 89],
        [33, 17],
        [52, 64],
        [20, 119],
        [14, -2],
        [14, 107],
        [20, -79],
        [15, -171],
        [-23, -7],
        [5, -71]
      ],
      [
        [4334, 8654],
        [61, 11],
        [-4, 26],
        [-33, 14],
        [-38, -6],
        [23, 19],
        [7, 30],
        [28, -8],
        [-3, 27],
        [34, -33],
        [-4, -31],
        [17, -15],
        [21, 55],
        [51, 4],
        [19, -15],
        [31, 16],
        [-2, 22],
        [52, -32],
        [-5, -23],
        [30, -15],
        [7, -32],
        [-29, -48],
        [-88, -50],
        [-28, -23],
        [-40, 11],
        [-28, 24],
        [-42, -3],
        [28, 39],
        [-21, 30],
        [-44, 6]
      ],
      [
        [5970, 6117],
        [-18, -125],
        [-28, 61],
        [-20, 100],
        [3, -71],
        [27, -85],
        [11, -86],
        [43, -189],
        [4, -73],
        [34, -67]
      ],
      [
        [6026, 5582],
        [-79, 0]
      ],
      [
        [5782, 5582],
        [87, 0]
      ],
      [
        [5869, 5582],
        [-174, 0]
      ],
      [
        [5699, 6274],
        [61, -22],
        [47, -37],
        [37, 48],
        [33, -4],
        [16, -29],
        [58, 18]
      ]
    ],
    "bbox": [-179.954958568805, -55.8628450158186, 179.809425088157, 83.5843518244064],
    "transform": {
      "scale": [0.0359800363693332, 0.013946114295452],
      "translate": [-179.954958568805, -55.8628450158186]
    },
    "title": "World, medium resolution",
    "version": "2.2.0",
    "copyright": "Copyright (c) 2024 Highsoft AS, Based on data from Natural Earth",
    "copyrightShort": "Natural Earth",
    "copyrightUrl": "http://www.naturalearthdata.com"
  }

  const data = [
    {
      "code3": "ABW",
      "name": "Aruba",
      "value": 582.34,
      "code": "AW"
    },
    {
      "code3": "AFG",
      "name": "Afghanistan",
      "value": 53.08,
      "code": "AF"
    },
    {
      "code3": "AGO",
      "name": "Angola",
      "value": 23.11,
      "code": "AO"
    },
    {
      "code3": "ALB",
      "name": "Albania",
      "value": 104.97,
      "code": "AL"
    },
    {
      "code3": "AND",
      "name": "Andorra",
      "value": 164.43,
      "code": "AD"
    },
    {
      "code3": "ARE",
      "name": "United Arab Emirates",
      "value": 110.88,
      "code": "AE"
    },
    {
      "code3": "ARG",
      "name": "Argentina",
      "value": 16.02,
      "code": "AR"
    },
    {
      "code3": "ARM",
      "name": "Armenia",
      "value": 102.73,
      "code": "AM"
    },
    {
      "code3": "ASM",
      "name": "American Samoa",
      "value": 278,
      "code": "AS"
    },
    {
      "code3": "ATG",
      "name": "Antigua and Barbuda",
      "value": 229.46,
      "code": "AG"
    },
    {
      "code3": "AUS",
      "name": "Australia",
      "value": 3.15,
      "code": "AU"
    },
    {
      "code3": "AUT",
      "name": "Austria",
      "value": 105.81,
      "code": "AT"
    },
    {
      "code3": "AZE",
      "name": "Azerbaijan",
      "value": 118.04,
      "code": "AZ"
    },
    {
      "code3": "BDI",
      "name": "Burundi",
      "value": 409.82,
      "code": "BI"
    },
    {
      "code3": "BEL",
      "name": "Belgium",
      "value": 374.45,
      "code": "BE"
    },
    {
      "code3": "BEN",
      "name": "Benin",
      "value": 96.42,
      "code": "BJ"
    },
    {
      "code3": "BFA",
      "name": "Burkina Faso",
      "value": 68.15,
      "code": "BF"
    },
    {
      "code3": "BGD",
      "name": "Bangladesh",
      "value": 1251.84,
      "code": "BD"
    },
    {
      "code3": "BGR",
      "name": "Bulgaria",
      "value": 65.66,
      "code": "BG"
    },
    {
      "code3": "BHR",
      "name": "Bahrain",
      "value": 1848.47,
      "code": "BH"
    },
    {
      "code3": "BHS",
      "name": "Bahamas, The",
      "value": 39.08,
      "code": "BS"
    },
    {
      "code3": "BIH",
      "name": "Bosnia and Herzegovina",
      "value": 68.69,
      "code": "BA"
    },
    {
      "code3": "BLR",
      "name": "Belarus",
      "value": 46.83,
      "code": "BY"
    },
    {
      "code3": "BLZ",
      "name": "Belize",
      "value": 16.09,
      "code": "BZ"
    },
    {
      "code3": "BMU",
      "name": "Bermuda",
      "value": 1307.52,
      "code": "BM"
    },
    {
      "code3": "BOL",
      "name": "Bolivia",
      "value": 10.05,
      "code": "BO"
    },
    {
      "code3": "BRA",
      "name": "Brazil",
      "value": 24.84,
      "code": "BR"
    },
    {
      "code3": "BRB",
      "name": "Barbados",
      "value": 662.78,
      "code": "BB"
    },
    {
      "code3": "BRN",
      "name": "Brunei Darussalam",
      "value": 80.3,
      "code": "BN"
    },
    {
      "code3": "BTN",
      "name": "Bhutan",
      "value": 20.93,
      "code": "BT"
    },
    {
      "code3": "BWA",
      "name": "Botswana",
      "value": 3.97,
      "code": "BW"
    },
    {
      "code3": "CAF",
      "name": "Central African Republic",
      "value": 7.38,
      "code": "CF"
    },
    {
      "code3": "CAN",
      "name": "Canada",
      "value": 3.99,
      "code": "CA"
    },
    {
      "code3": "CHE",
      "name": "Switzerland",
      "value": 211.87,
      "code": "CH"
    },
    {
      "code3": "CHL",
      "name": "Chile",
      "value": 24.09,
      "code": "CL"
    },
    {
      "code3": "CHN",
      "name": "China",
      "value": 146.85,
      "code": "CN"
    },
    {
      "code3": "CIV",
      "name": "Cote d'Ivoire",
      "value": 74.52,
      "code": "CI"
    },
    {
      "code3": "CMR",
      "name": "Cameroon",
      "value": 49.58,
      "code": "CM"
    },
    {
      "code3": "COD",
      "name": "Congo, Dem. Rep.",
      "value": 34.73,
      "code": "CD"
    },
    {
      "code3": "COG",
      "name": "Congo, Rep.",
      "value": 15.01,
      "code": "CG"
    },
    {
      "code3": "COL",
      "name": "Colombia",
      "value": 43.85,
      "code": "CO"
    },
    {
      "code3": "COM",
      "name": "Comoros",
      "value": 427.51,
      "code": "KM"
    },
    {
      "code3": "CPV",
      "name": "Cabo Verde",
      "value": 133.89,
      "code": "CV"
    },
    {
      "code3": "CRI",
      "name": "Costa Rica",
      "value": 95.13,
      "code": "CR"
    },
    {
      "code3": "CUB",
      "name": "Cuba",
      "value": 110.32,
      "code": "CU"
    },
    {
      "code3": "CUW",
      "name": "Curacao",
      "value": 359.6,
      "code": "CW"
    },
    {
      "code3": "CYM",
      "name": "Cayman Islands",
      "value": 253.19,
      "code": "KY"
    },
    {
      "code3": "CYP",
      "name": "Cyprus",
      "value": 126.64,
      "code": "CY"
    },
    {
      "code3": "CZE",
      "name": "Czech Republic",
      "value": 136.85,
      "code": "CZ"
    },
    {
      "code3": "DEU",
      "name": "Germany",
      "value": 236.42,
      "code": "DE"
    },
    {
      "code3": "DJI",
      "name": "Djibouti",
      "value": 40.65,
      "code": "DJ"
    },
    {
      "code3": "DMA",
      "name": "Dominica",
      "value": 98.06,
      "code": "DM"
    },
    {
      "code3": "DNK",
      "name": "Denmark",
      "value": 135.54,
      "code": "DK"
    },
    {
      "code3": "DOM",
      "name": "Dominican Republic",
      "value": 220.43,
      "code": "DO"
    },
    {
      "code3": "DZA",
      "name": "Algeria",
      "value": 17.05,
      "code": "DZ"
    },
    {
      "code3": "ECU",
      "name": "Ecuador",
      "value": 65.97,
      "code": "EC"
    },
    {
      "code3": "EGY",
      "name": "Egypt, Arab Rep.",
      "value": 96.13,
      "code": "EG"
    },
    {
      "code3": "ESP",
      "name": "Spain",
      "value": 92.93,
      "code": "ES"
    },
    {
      "code3": "EST",
      "name": "Estonia",
      "value": 31.04,
      "code": "EE"
    },
    {
      "code3": "ETH",
      "name": "Ethiopia",
      "value": 102.4,
      "code": "ET"
    },
    {
      "code3": "FIN",
      "name": "Finland",
      "value": 18.08,
      "code": "FI"
    },
    {
      "code3": "FJI",
      "name": "Fiji",
      "value": 49.19,
      "code": "FJ"
    },
    {
      "code3": "FRA",
      "name": "France",
      "value": 122.16,
      "code": "FR"
    },
    {
      "code3": "FRO",
      "name": "Faroe Islands",
      "value": 35.18,
      "code": "FO"
    },
    {
      "code3": "FSM",
      "name": "Micronesia, Fed. Sts.",
      "value": 149.91,
      "code": "FM"
    },
    {
      "code3": "GAB",
      "name": "Gabon",
      "value": 7.68,
      "code": "GA"
    },
    {
      "code3": "GBR",
      "name": "United Kingdom",
      "value": 271.13,
      "code": "GB"
    },
    {
      "code3": "GEO",
      "name": "Georgia",
      "value": 53.52,
      "code": "GE"
    },
    {
      "code3": "GHA",
      "name": "Ghana",
      "value": 123.96,
      "code": "GH"
    },
    {
      "code3": "GIB",
      "name": "Gibraltar",
      "value": 3440.8,
      "code": "GI"
    },
    {
      "code3": "GIN",
      "name": "Guinea",
      "value": 50.45,
      "code": "GN"
    },
    {
      "code3": "GMB",
      "name": "Gambia, The",
      "value": 201.43,
      "code": "GM"
    },
    {
      "code3": "GNB",
      "name": "Guinea-Bissau",
      "value": 64.57,
      "code": "GW"
    },
    {
      "code3": "GNQ",
      "name": "Equatorial Guinea",
      "value": 43.55,
      "code": "GQ"
    },
    {
      "code3": "GRC",
      "name": "Greece",
      "value": 83.56,
      "code": "GR"
    },
    {
      "code3": "GRD",
      "name": "Grenada",
      "value": 315.64,
      "code": "GD"
    },
    {
      "code3": "GRL",
      "name": "Greenland",
      "value": 0.14,
      "code": "GL"
    },
    {
      "code3": "GTM",
      "name": "Guatemala",
      "value": 154.74,
      "code": "GT"
    },
    {
      "code3": "GUM",
      "name": "Guam",
      "value": 301.66,
      "code": "GU"
    },
    {
      "code3": "GUY",
      "name": "Guyana",
      "value": 3.93,
      "code": "GY"
    },
    {
      "code3": "HKG",
      "name": "Hong Kong SAR, China",
      "value": 6987.24,
      "code": "HK"
    },
    {
      "code3": "HND",
      "name": "Honduras",
      "value": 81.44,
      "code": "HN"
    },
    {
      "code3": "HRV",
      "name": "Croatia",
      "value": 74.6,
      "code": "HR"
    },
    {
      "code3": "HTI",
      "name": "Haiti",
      "value": 393.59,
      "code": "HT"
    },
    {
      "code3": "HUN",
      "name": "Hungary",
      "value": 108.41,
      "code": "HU"
    },
    {
      "code3": "IDN",
      "name": "Indonesia",
      "value": 144.14,
      "code": "ID"
    },
    {
      "code3": "IMN",
      "name": "Isle of Man",
      "value": 146.91,
      "code": "IM"
    },
    {
      "code3": "IND",
      "name": "India",
      "value": 445.37,
      "code": "IN"
    },
    {
      "code3": "IRL",
      "name": "Ireland",
      "value": 68.95,
      "code": "IE"
    },
    {
      "code3": "IRN",
      "name": "Iran, Islamic Rep.",
      "value": 49.29,
      "code": "IR"
    },
    {
      "code3": "IRQ",
      "name": "Iraq",
      "value": 85.66,
      "code": "IQ"
    },
    {
      "code3": "ISL",
      "name": "Iceland",
      "value": 3.35,
      "code": "IS"
    },
    {
      "code3": "ISR",
      "name": "Israel",
      "value": 394.92,
      "code": "IL"
    },
    {
      "code3": "ITA",
      "name": "Italy",
      "value": 206.12,
      "code": "IT"
    },
    {
      "code3": "JAM",
      "name": "Jamaica",
      "value": 266.05,
      "code": "JM"
    },
    {
      "code3": "JOR",
      "name": "Jordan",
      "value": 106.51,
      "code": "JO"
    },
    {
      "code3": "JPN",
      "name": "Japan",
      "value": 348.35,
      "code": "JP"
    },
    {
      "code3": "KAZ",
      "name": "Kazakhstan",
      "value": 6.59,
      "code": "KZ"
    },
    {
      "code3": "KEN",
      "name": "Kenya",
      "value": 85.15,
      "code": "KE"
    },
    {
      "code3": "KGZ",
      "name": "Kyrgyz Republic",
      "value": 31.7,
      "code": "KG"
    },
    {
      "code3": "KHM",
      "name": "Cambodia",
      "value": 89.3,
      "code": "KH"
    },
    {
      "code3": "KIR",
      "name": "Kiribati",
      "value": 141.23,
      "code": "KI"
    },
    {
      "code3": "KNA",
      "name": "St. Kitts and Nevis",
      "value": 210.85,
      "code": "KN"
    },
    {
      "code3": "KOR",
      "name": "Korea, Rep.",
      "value": 525.7,
      "code": "KR"
    },
    {
      "code3": "KWT",
      "name": "Kuwait",
      "value": 227.42,
      "code": "KW"
    },
    {
      "code3": "LAO",
      "name": "Lao PDR",
      "value": 29.28,
      "code": "LA"
    },
    {
      "code3": "LBN",
      "name": "Lebanon",
      "value": 587.16,
      "code": "LB"
    },
    {
      "code3": "LBR",
      "name": "Liberia",
      "value": 47.9,
      "code": "LR"
    },
    {
      "code3": "LBY",
      "name": "Libya",
      "value": 3.58,
      "code": "LY"
    },
    {
      "code3": "LCA",
      "name": "St. Lucia",
      "value": 291.83,
      "code": "LC"
    },
    {
      "code3": "LIE",
      "name": "Liechtenstein",
      "value": 235.41,
      "code": "LI"
    },
    {
      "code3": "LKA",
      "name": "Sri Lanka",
      "value": 338.11,
      "code": "LK"
    },
    {
      "code3": "LSO",
      "name": "Lesotho",
      "value": 72.59,
      "code": "LS"
    },
    {
      "code3": "LTU",
      "name": "Lithuania",
      "value": 45.78,
      "code": "LT"
    },
    {
      "code3": "LUX",
      "name": "Luxembourg",
      "value": 224.72,
      "code": "LU"
    },
    {
      "code3": "LVA",
      "name": "Latvia",
      "value": 31.51,
      "code": "LV"
    },
    {
      "code3": "MAC",
      "name": "Macao SAR, China",
      "value": 20405.57,
      "code": "MO"
    },
    {
      "code3": "MAF",
      "name": "St. Martin (French part)",
      "value": 591.65,
      "code": "MF"
    },
    {
      "code3": "MAR",
      "name": "Morocco",
      "value": 79.04,
      "code": "MA"
    },
    {
      "code3": "MCO",
      "name": "Monaco",
      "value": 19249.5,
      "code": "MC"
    },
    {
      "code3": "MDA",
      "name": "Moldova",
      "value": 108.06,
      "code": "MD"
    },
    {
      "code3": "MDG",
      "name": "Madagascar",
      "value": 42.79,
      "code": "MG"
    },
    {
      "code3": "MDV",
      "name": "Maldives",
      "value": 1425.85,
      "code": "MV"
    },
    {
      "code3": "MEX",
      "name": "Mexico",
      "value": 65.61,
      "code": "MX"
    },
    {
      "code3": "MHL",
      "name": "Marshall Islands",
      "value": 294.81,
      "code": "MH"
    },
    {
      "code3": "MKD",
      "name": "Macedonia, FYR",
      "value": 82.52,
      "code": "MK"
    },
    {
      "code3": "MLI",
      "name": "Mali",
      "value": 14.75,
      "code": "ML"
    },
    {
      "code3": "MLT",
      "name": "Malta",
      "value": 1366.93,
      "code": "MT"
    },
    {
      "code3": "MMR",
      "name": "Myanmar",
      "value": 80.98,
      "code": "MM"
    },
    {
      "code3": "MNE",
      "name": "Montenegro",
      "value": 46.27,
      "code": "ME"
    },
    {
      "code3": "MNG",
      "name": "Mongolia",
      "value": 1.95,
      "code": "MN"
    },
    {
      "code3": "MNP",
      "name": "Northern Mariana Islands",
      "value": 119.62,
      "code": "MP"
    },
    {
      "code3": "MOZ",
      "name": "Mozambique",
      "value": 36.66,
      "code": "MZ"
    },
    {
      "code3": "MRT",
      "name": "Mauritania",
      "value": 4.17,
      "code": "MR"
    },
    {
      "code3": "MUS",
      "name": "Mauritius",
      "value": 622.4,
      "code": "MU"
    },
    {
      "code3": "MWI",
      "name": "Malawi",
      "value": 191.89,
      "code": "MW"
    },
    {
      "code3": "MYS",
      "name": "Malaysia",
      "value": 94.92,
      "code": "MY"
    },
    {
      "code3": "NAM",
      "name": "Namibia",
      "value": 3.01,
      "code": "NA"
    },
    {
      "code3": "NCL",
      "name": "New Caledonia",
      "value": 15.15,
      "code": "NC"
    },
    {
      "code3": "NER",
      "name": "Niger",
      "value": 16.32,
      "code": "NE"
    },
    {
      "code3": "NGA",
      "name": "Nigeria",
      "value": 204.21,
      "code": "NG"
    },
    {
      "code3": "NIC",
      "name": "Nicaragua",
      "value": 51.1,
      "code": "NI"
    },
    {
      "code3": "NLD",
      "name": "Netherlands",
      "value": 505.5,
      "code": "NL"
    },
    {
      "code3": "NOR",
      "name": "Norway",
      "value": 14.34,
      "code": "NO"
    },
    {
      "code3": "NPL",
      "name": "Nepal",
      "value": 202.18,
      "code": "NP"
    },
    {
      "code3": "NRU",
      "name": "Nauru",
      "value": 652.45,
      "code": "NR"
    },
    {
      "code3": "NZL",
      "name": "New Zealand",
      "value": 17.82,
      "code": "NZ"
    },
    {
      "code3": "OMN",
      "name": "Oman",
      "value": 14.3,
      "code": "OM"
    },
    {
      "code3": "PAK",
      "name": "Pakistan",
      "value": 250.63,
      "code": "PK"
    },
    {
      "code3": "PAN",
      "name": "Panama",
      "value": 54.27,
      "code": "PA"
    },
    {
      "code3": "PER",
      "name": "Peru",
      "value": 24.82,
      "code": "PE"
    },
    {
      "code3": "PHL",
      "name": "Philippines",
      "value": 346.51,
      "code": "PH"
    },
    {
      "code3": "PLW",
      "name": "Palau",
      "value": 46.75,
      "code": "PW"
    },
    {
      "code3": "PNG",
      "name": "Papua New Guinea",
      "value": 17.85,
      "code": "PG"
    },
    {
      "code3": "POL",
      "name": "Poland",
      "value": 124.01,
      "code": "PL"
    },
    {
      "code3": "PRI",
      "name": "Puerto Rico",
      "value": 384.59,
      "code": "PR"
    },
    {
      "code3": "PRK",
      "name": "Korea, Dem. People’s Rep.",
      "value": 210.69,
      "code": "KP"
    },
    {
      "code3": "PRT",
      "name": "Portugal",
      "value": 112.72,
      "code": "PT"
    },
    {
      "code3": "PRY",
      "name": "Paraguay",
      "value": 16.93,
      "code": "PY"
    },
    {
      "code3": "PSE",
      "name": "West Bank and Gaza",
      "value": 756.07,
      "code": "PS"
    },
    {
      "code3": "PYF",
      "name": "French Polynesia",
      "value": 76.56,
      "code": "PF"
    },
    {
      "code3": "QAT",
      "name": "Qatar",
      "value": 221.34,
      "code": "QA"
    },
    {
      "code3": "ROU",
      "name": "Romania",
      "value": 85.62,
      "code": "RO"
    },
    {
      "code3": "RUS",
      "name": "Russian Federation",
      "value": 8.81,
      "code": "RU"
    },
    {
      "code3": "RWA",
      "name": "Rwanda",
      "value": 483.08,
      "code": "RW"
    },
    {
      "code3": "SAU",
      "name": "Saudi Arabia",
      "value": 15.01,
      "code": "SA"
    },
    {
      "code3": "SDN",
      "name": "Sudan",
      "value": 16.66,
      "code": "SD"
    },
    {
      "code3": "SEN",
      "name": "Senegal",
      "value": 80.05,
      "code": "SN"
    },
    {
      "code3": "SGP",
      "name": "Singapore",
      "value": 7908.72,
      "code": "SG"
    },
    {
      "code3": "SLB",
      "name": "Solomon Islands",
      "value": 21.42,
      "code": "SB"
    },
    {
      "code3": "SLE",
      "name": "Sierra Leone",
      "value": 102.47,
      "code": "SL"
    },
    {
      "code3": "SLV",
      "name": "El Salvador",
      "value": 306.21,
      "code": "SV"
    },
    {
      "code3": "SMR",
      "name": "San Marino",
      "value": 553.38,
      "code": "SM"
    },
    {
      "code3": "SOM",
      "name": "Somalia",
      "value": 22.82,
      "code": "SO"
    },
    {
      "code3": "SRB",
      "name": "Serbia",
      "value": 80.7,
      "code": "RS"
    },
    {
      "code3": "STP",
      "name": "Sao Tome and Principe",
      "value": 208.24,
      "code": "ST"
    },
    {
      "code3": "SUR",
      "name": "Suriname",
      "value": 3.58,
      "code": "SR"
    },
    {
      "code3": "SVK",
      "name": "Slovak Republic",
      "value": 112.94,
      "code": "SK"
    },
    {
      "code3": "SVN",
      "name": "Slovenia",
      "value": 102.53,
      "code": "SI"
    },
    {
      "code3": "SWE",
      "name": "Sweden",
      "value": 24.36,
      "code": "SE"
    },
    {
      "code3": "SWZ",
      "name": "Swaziland",
      "value": 78.09,
      "code": "SZ"
    },
    {
      "code3": "SXM",
      "name": "Sint Maarten (Dutch part)",
      "value": 1175.56,
      "code": "SX"
    },
    {
      "code3": "SYC",
      "name": "Seychelles",
      "value": 205.82,
      "code": "SC"
    },
    {
      "code3": "SYR",
      "name": "Syrian Arab Republic",
      "value": 100.37,
      "code": "SY"
    },
    {
      "code3": "TCA",
      "name": "Turks and Caicos Islands",
      "value": 36.74,
      "code": "TC"
    },
    {
      "code3": "TCD",
      "name": "Chad",
      "value": 11.48,
      "code": "TD"
    },
    {
      "code3": "TGO",
      "name": "Togo",
      "value": 139.85,
      "code": "TG"
    },
    {
      "code3": "THA",
      "name": "Thailand",
      "value": 134.79,
      "code": "TH"
    },
    {
      "code3": "TJK",
      "name": "Tajikistan",
      "value": 62.94,
      "code": "TJ"
    },
    {
      "code3": "TKM",
      "name": "Turkmenistan",
      "value": 12.05,
      "code": "TM"
    },
    {
      "code3": "TLS",
      "name": "Timor-Leste",
      "value": 85.32,
      "code": "TL"
    },
    {
      "code3": "TON",
      "name": "Tonga",
      "value": 148.78,
      "code": "TO"
    },
    {
      "code3": "TTO",
      "name": "Trinidad and Tobago",
      "value": 266.07,
      "code": "TT"
    },
    {
      "code3": "TUN",
      "name": "Tunisia",
      "value": 73.4,
      "code": "TN"
    },
    {
      "code3": "TUR",
      "name": "Turkey",
      "value": 103.31,
      "code": "TR"
    },
    {
      "code3": "TUV",
      "name": "Tuvalu",
      "value": 369.9,
      "code": "TV"
    },
    {
      "code3": "TZA",
      "name": "Tanzania",
      "value": 62.74,
      "code": "TZ"
    },
    {
      "code3": "UGA",
      "name": "Uganda",
      "value": 206.9,
      "code": "UG"
    },
    {
      "code3": "UKR",
      "name": "Ukraine",
      "value": 77.69,
      "code": "UA"
    },
    {
      "code3": "URY",
      "name": "Uruguay",
      "value": 19.68,
      "code": "UY"
    },
    {
      "code3": "USA",
      "name": "United States",
      "value": 35.32,
      "code": "US"
    },
    {
      "code3": "UZB",
      "name": "Uzbekistan",
      "value": 74.87,
      "code": "UZ"
    },
    {
      "code3": "VCT",
      "name": "St. Vincent and the Grenadines",
      "value": 281.14,
      "code": "VC"
    },
    {
      "code3": "VEN",
      "name": "Venezuela, RB",
      "value": 35.79,
      "code": "VE"
    },
    {
      "code3": "VGB",
      "name": "British Virgin Islands",
      "value": 204.41,
      "code": "VG"
    },
    {
      "code3": "VIR",
      "name": "Virgin Islands (U.S.)",
      "value": 307.17,
      "code": "VI"
    },
    {
      "code3": "VNM",
      "name": "Vietnam",
      "value": 304.99,
      "code": "VN"
    },
    {
      "code3": "VUT",
      "name": "Vanuatu",
      "value": 22.18,
      "code": "VU"
    },
    {
      "code3": "WSM",
      "name": "Samoa",
      "value": 68.95,
      "code": "WS"
    },
    {
      "code3": "YEM",
      "name": "Yemen, Rep.",
      "value": 52.25,
      "code": "YE"
    },
    {
      "code3": "ZAF",
      "name": "South Africa",
      "value": 46.18,
      "code": "ZA"
    },
    {
      "code3": "ZMB",
      "name": "Zambia",
      "value": 22.32,
      "code": "ZM"
    },
    {
      "code3": "ZWE",
      "name": "Zimbabwe",
      "value": 41.75,
      "code": "ZW"
    }
  ]

  // Prevent logarithmic errors in color calulcation
  data.forEach(function (p) {
      p.value = (p.value < 1 ? 1 : p.value);
  });

  const options = {
    chart: {
      map: topology
    },

    title: {
        text: 'Fixed tooltip with HTML'
    },

    legend: {
        title: {
            text: 'Population density per km²',
            style: {
                color: ( // theme
                    Highcharts.defaultOptions &&
                        Highcharts.defaultOptions.legend &&
                        Highcharts.defaultOptions.legend.title &&
                        Highcharts.defaultOptions.legend.title.style &&
                        Highcharts.defaultOptions.legend.title.style.color
                ) || 'black'
            }
        }
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    tooltip: {
        backgroundColor: 'none',
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        padding: 0,
        pointFormat: '<span class="f32"><span class="flag ' +
            '{point.properties.hc-key}">' +
                '</span></span> {point.name}<br>' +
                '<span style="font-size:30px">{point.value}/km²</span>',
        positioner: function () {
            return { x: 0, y: 250 };
        }
    },

    colorAxis: {
        min: 1,
        max: 1000,
        type: 'logarithmic'
    },

    series: [{
        data: data,
        joinBy: ['iso-a3', 'code3'],
        name: 'Population density'
    }]
  }; //options

  return <HighchartsReact highcharts={Highcharts} constructorType={"mapChart"} options={options} />;
}
export default FixedTooltipWithHTML;