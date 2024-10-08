import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import heatmap from 'highcharts/modules/heatmap';
import treemap from 'highcharts/modules/treemap';
import exporting from 'highcharts/modules/exporting';
heatmap(Highcharts);
treemap(Highcharts);
exporting(Highcharts);

const data = [
  {
    "Eastern Mediterranean": {
      "Afghanistan": {
        "Communicable & other Group I": 102.5,
        "Injuries": 47,
        "Noncommunicable diseases": 110.4
      },
      "Bahrain": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.3,
        "Noncommunicable diseases": 2.7
      },
      "Djibouti": {
        "Communicable & other Group I": 3.4,
        "Injuries": 0.7,
        "Noncommunicable diseases": 3.1
      },
      "Egypt": {
        "Communicable & other Group I": 63.5,
        "Injuries": 31.6,
        "Noncommunicable diseases": 476.3
      },
      "Iran (Islamic Republic of)": {
        "Communicable & other Group I": 30.6,
        "Injuries": 39.8,
        "Noncommunicable diseases": 291.5
      },
      "Iraq": {
        "Communicable & other Group I": 33,
        "Injuries": 56.9,
        "Noncommunicable diseases": 104.6
      },
      "Jordan": {
        "Communicable & other Group I": 3.4,
        "Injuries": 3.1,
        "Noncommunicable diseases": 22.6
      },
      "Kuwait": {
        "Communicable & other Group I": 0.9,
        "Injuries": 1.3,
        "Noncommunicable diseases": 7.4
      },
      "Lebanon": {
        "Communicable & other Group I": 1.3,
        "Injuries": 2.8,
        "Noncommunicable diseases": 32.4
      },
      "Libyan Arab Jamahiriya": {
        "Communicable & other Group I": 3,
        "Injuries": 4.7,
        "Noncommunicable diseases": 24.4
      },
      "Morocco": {
        "Communicable & other Group I": 29.9,
        "Injuries": 13.3,
        "Noncommunicable diseases": 151.3
      },
      "Oman": {
        "Communicable & other Group I": 1.5,
        "Injuries": 2.1,
        "Noncommunicable diseases": 8.4
      },
      "Pakistan": {
        "Communicable & other Group I": 477.3,
        "Injuries": 118.5,
        "Noncommunicable diseases": 775
      },
      "Qatar": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.9,
        "Noncommunicable diseases": 2.2
      },
      "Saudi Arabia": {
        "Communicable & other Group I": 12.8,
        "Injuries": 17.1,
        "Noncommunicable diseases": 76.4
      },
      "Somalia": {
        "Communicable & other Group I": 93.4,
        "Injuries": 13.4,
        "Noncommunicable diseases": 29.8
      },
      "South Sudan": {
        "Communicable & other Group I": 79.9,
        "Injuries": 14.7,
        "Noncommunicable diseases": 35.9
      },
      "Sudan": {
        "Communicable & other Group I": 109,
        "Injuries": 40.3,
        "Noncommunicable diseases": 151
      },
      "Syrian Arab Republic": {
        "Communicable & other Group I": 7.8,
        "Injuries": 68.1,
        "Noncommunicable diseases": 68.9
      },
      "Tunisia": {
        "Communicable & other Group I": 6.1,
        "Injuries": 5.1,
        "Noncommunicable diseases": 62.1
      },
      "United Arab Emirates": {
        "Communicable & other Group I": 1,
        "Injuries": 2.5,
        "Noncommunicable diseases": 11.6
      },
      "Yemen": {
        "Communicable & other Group I": 39.9,
        "Injuries": 23.2,
        "Noncommunicable diseases": 97.6
      }
    },
    "Europe": {
      "Albania": {
        "Communicable & other Group I": 0.8,
        "Injuries": 0.9,
        "Noncommunicable diseases": 20.2
      },
      "Armenia": {
        "Communicable & other Group I": 0.9,
        "Injuries": 1.1,
        "Noncommunicable diseases": 27.4
      },
      "Austria": {
        "Communicable & other Group I": 1.5,
        "Injuries": 4.5,
        "Noncommunicable diseases": 72.9
      },
      "Azerbaijan": {
        "Communicable & other Group I": 6.5,
        "Injuries": 3.1,
        "Noncommunicable diseases": 57.9
      },
      "Belarus": {
        "Communicable & other Group I": 3.1,
        "Injuries": 10.9,
        "Noncommunicable diseases": 114.9
      },
      "Belgium": {
        "Communicable & other Group I": 8.3,
        "Injuries": 7.1,
        "Noncommunicable diseases": 94.3
      },
      "Bosnia and Herzegovina": {
        "Communicable & other Group I": 0.8,
        "Injuries": 1.7,
        "Noncommunicable diseases": 37
      },
      "Bulgaria": {
        "Communicable & other Group I": 2.5,
        "Injuries": 3.2,
        "Noncommunicable diseases": 101.6
      },
      "Croatia": {
        "Communicable & other Group I": 1.1,
        "Injuries": 2.8,
        "Noncommunicable diseases": 50.2
      },
      "Cyprus": {
        "Communicable & other Group I": 0.3,
        "Injuries": 0.4,
        "Noncommunicable diseases": 7.4
      },
      "Czechia": {
        "Communicable & other Group I": 5.6,
        "Injuries": 5.4,
        "Noncommunicable diseases": 99.9
      },
      "Denmark": {
        "Communicable & other Group I": 3.2,
        "Injuries": 2,
        "Noncommunicable diseases": 45
      },
      "Estonia": {
        "Communicable & other Group I": 0.4,
        "Injuries": 0.7,
        "Noncommunicable diseases": 13.9
      },
      "Finland": {
        "Communicable & other Group I": 0.7,
        "Injuries": 3,
        "Noncommunicable diseases": 48.8
      },
      "France": {
        "Communicable & other Group I": 36,
        "Injuries": 35.7,
        "Noncommunicable diseases": 487.1
      },
      "Georgia": {
        "Communicable & other Group I": 1.4,
        "Injuries": 1.8,
        "Noncommunicable diseases": 46.2
      },
      "Germany": {
        "Communicable & other Group I": 39.9,
        "Injuries": 34.8,
        "Noncommunicable diseases": 800.8
      },
      "Greece": {
        "Communicable & other Group I": 4,
        "Injuries": 3.3,
        "Noncommunicable diseases": 113.4
      },
      "Hungary": {
        "Communicable & other Group I": 2.3,
        "Injuries": 5.6,
        "Noncommunicable diseases": 116.1
      },
      "Iceland": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 1.8
      },
      "Ireland": {
        "Communicable & other Group I": 1.5,
        "Injuries": 1.4,
        "Noncommunicable diseases": 27.1
      },
      "Israel": {
        "Communicable & other Group I": 4.1,
        "Injuries": 1.8,
        "Noncommunicable diseases": 36.7
      },
      "Italy": {
        "Communicable & other Group I": 28.3,
        "Injuries": 23.8,
        "Noncommunicable diseases": 573.3
      },
      "Kazakhstan": {
        "Communicable & other Group I": 11,
        "Injuries": 16.4,
        "Noncommunicable diseases": 123.8
      },
      "Kyrgyzstan": {
        "Communicable & other Group I": 3.8,
        "Injuries": 3.1,
        "Noncommunicable diseases": 30.5
      },
      "Latvia": {
        "Communicable & other Group I": 0.8,
        "Injuries": 1.5,
        "Noncommunicable diseases": 26.6
      },
      "Lithuania": {
        "Communicable & other Group I": 1.4,
        "Injuries": 2.6,
        "Noncommunicable diseases": 38
      },
      "Luxembourg": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.3,
        "Noncommunicable diseases": 3.3
      },
      "Malta": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.1,
        "Noncommunicable diseases": 3
      },
      "Montenegro": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.2,
        "Noncommunicable diseases": 6.1
      },
      "Netherlands": {
        "Communicable & other Group I": 8.5,
        "Injuries": 7.2,
        "Noncommunicable diseases": 130.8
      },
      "Norway": {
        "Communicable & other Group I": 2.8,
        "Injuries": 2.3,
        "Noncommunicable diseases": 35.3
      },
      "Poland": {
        "Communicable & other Group I": 15.1,
        "Injuries": 22.6,
        "Noncommunicable diseases": 350.5
      },
      "Portugal": {
        "Communicable & other Group I": 10.4,
        "Injuries": 4.4,
        "Noncommunicable diseases": 90.3
      },
      "Republic of Moldova": {
        "Communicable & other Group I": 1.9,
        "Injuries": 2.3,
        "Noncommunicable diseases": 39.9
      },
      "Romania": {
        "Communicable & other Group I": 10.8,
        "Injuries": 8.7,
        "Noncommunicable diseases": 241.2
      },
      "Russian Federation": {
        "Communicable & other Group I": 120.9,
        "Injuries": 159.3,
        "Noncommunicable diseases": 1719
      },
      "Serbia": {
        "Communicable & other Group I": 2.5,
        "Injuries": 3.4,
        "Noncommunicable diseases": 99.9
      },
      "Slovakia": {
        "Communicable & other Group I": 2.4,
        "Injuries": 3,
        "Noncommunicable diseases": 45.3
      },
      "Slovenia": {
        "Communicable & other Group I": 1,
        "Injuries": 1.4,
        "Noncommunicable diseases": 17.5
      },
      "Spain": {
        "Communicable & other Group I": 18.4,
        "Injuries": 14.1,
        "Noncommunicable diseases": 363.9
      },
      "Sweden": {
        "Communicable & other Group I": 5.3,
        "Injuries": 4.6,
        "Noncommunicable diseases": 80.9
      },
      "Switzerland": {
        "Communicable & other Group I": 2.7,
        "Injuries": 4,
        "Noncommunicable diseases": 58.5
      },
      "Tajikistan": {
        "Communicable & other Group I": 12.2,
        "Injuries": 4.4,
        "Noncommunicable diseases": 29.8
      },
      "The former Yugoslav Republic of Macedonia": {
        "Communicable & other Group I": 0.3,
        "Injuries": 0.6,
        "Noncommunicable diseases": 19.2
      },
      "Turkey": {
        "Communicable & other Group I": 24.7,
        "Injuries": 29.7,
        "Noncommunicable diseases": 392.8
      },
      "Turkmenistan": {
        "Communicable & other Group I": 5.5,
        "Injuries": 3.1,
        "Noncommunicable diseases": 32
      },
      "Ukraine": {
        "Communicable & other Group I": 25.1,
        "Injuries": 43.3,
        "Noncommunicable diseases": 605.1
      },
      "United Kingdom": {
        "Communicable & other Group I": 40,
        "Injuries": 19.5,
        "Noncommunicable diseases": 513.1
      },
      "Uzbekistan": {
        "Communicable & other Group I": 27.7,
        "Injuries": 13.2,
        "Noncommunicable diseases": 149
      }
    },
    "Africa": {
      "Algeria": {
        "Communicable & other Group I": 31.5,
        "Injuries": 19.8,
        "Noncommunicable diseases": 144.6
      },
      "Angola": {
        "Communicable & other Group I": 210.9,
        "Injuries": 36.6,
        "Noncommunicable diseases": 93.9
      },
      "Benin": {
        "Communicable & other Group I": 51.6,
        "Injuries": 10.3,
        "Noncommunicable diseases": 36.8
      },
      "Botswana": {
        "Communicable & other Group I": 7.8,
        "Injuries": 1.3,
        "Noncommunicable diseases": 6.7
      },
      "Burkina Faso": {
        "Communicable & other Group I": 87.5,
        "Injuries": 18.3,
        "Noncommunicable diseases": 51.6
      },
      "Burundi": {
        "Communicable & other Group I": 59.4,
        "Injuries": 12.6,
        "Noncommunicable diseases": 32.5
      },
      "Cameroon": {
        "Communicable & other Group I": 134.2,
        "Injuries": 25.1,
        "Noncommunicable diseases": 83.9
      },
      "Cape Verde": {
        "Communicable & other Group I": 0.6,
        "Injuries": 0.3,
        "Noncommunicable diseases": 1.9
      },
      "Central African Republic": {
        "Communicable & other Group I": 40.4,
        "Injuries": 6.9,
        "Noncommunicable diseases": 19.9
      },
      "Chad": {
        "Communicable & other Group I": 118.8,
        "Injuries": 17.3,
        "Noncommunicable diseases": 45
      },
      "Comoros": {
        "Communicable & other Group I": 2.8,
        "Injuries": 0.7,
        "Noncommunicable diseases": 2.4
      },
      "Congo": {
        "Communicable & other Group I": 18.6,
        "Injuries": 3.5,
        "Noncommunicable diseases": 12.8
      },
      "Côte d'Ivoire": {
        "Communicable & other Group I": 151.1,
        "Injuries": 31.4,
        "Noncommunicable diseases": 102.3
      },
      "Democratic Republic of the Congo": {
        "Communicable & other Group I": 437.5,
        "Injuries": 79.9,
        "Noncommunicable diseases": 218
      },
      "Equatorial Guinea": {
        "Communicable & other Group I": 4.4,
        "Injuries": 0.9,
        "Noncommunicable diseases": 3.4
      },
      "Eritrea": {
        "Communicable & other Group I": 14.9,
        "Injuries": 3.8,
        "Noncommunicable diseases": 13.5
      },
      "Ethiopia": {
        "Communicable & other Group I": 353,
        "Injuries": 83.5,
        "Noncommunicable diseases": 284.6
      },
      "Gabon": {
        "Communicable & other Group I": 6.4,
        "Injuries": 1.2,
        "Noncommunicable diseases": 6.3
      },
      "Gambia": {
        "Communicable & other Group I": 9,
        "Injuries": 1.9,
        "Noncommunicable diseases": 5.4
      },
      "Ghana": {
        "Communicable & other Group I": 105.7,
        "Injuries": 23.7,
        "Noncommunicable diseases": 101.6
      },
      "Guinea": {
        "Communicable & other Group I": 72.7,
        "Injuries": 11.8,
        "Noncommunicable diseases": 38.8
      },
      "Guinea-Bissau": {
        "Communicable & other Group I": 11.4,
        "Injuries": 1.7,
        "Noncommunicable diseases": 5.6
      },
      "Kenya": {
        "Communicable & other Group I": 174.9,
        "Injuries": 36.3,
        "Noncommunicable diseases": 106
      },
      "Lesotho": {
        "Communicable & other Group I": 17.5,
        "Injuries": 2,
        "Noncommunicable diseases": 7.9
      },
      "Liberia": {
        "Communicable & other Group I": 22.6,
        "Injuries": 3.9,
        "Noncommunicable diseases": 11.8
      },
      "Madagascar": {
        "Communicable & other Group I": 74.9,
        "Injuries": 16.7,
        "Noncommunicable diseases": 68.3
      },
      "Malawi": {
        "Communicable & other Group I": 92.9,
        "Injuries": 12.7,
        "Noncommunicable diseases": 48
      },
      "Mali": {
        "Communicable & other Group I": 107.3,
        "Injuries": 17.2,
        "Noncommunicable diseases": 54.7
      },
      "Mauritania": {
        "Communicable & other Group I": 16.5,
        "Injuries": 3.2,
        "Noncommunicable diseases": 11.7
      },
      "Mauritius": {
        "Communicable & other Group I": 0.7,
        "Injuries": 0.5,
        "Noncommunicable diseases": 8.4
      },
      "Mozambique": {
        "Communicable & other Group I": 170.1,
        "Injuries": 26.2,
        "Noncommunicable diseases": 90.8
      },
      "Namibia": {
        "Communicable & other Group I": 8.3,
        "Injuries": 1.6,
        "Noncommunicable diseases": 6.7
      },
      "Niger": {
        "Communicable & other Group I": 113.3,
        "Injuries": 18.1,
        "Noncommunicable diseases": 46.6
      },
      "Nigeria": {
        "Communicable & other Group I": 1442.7,
        "Injuries": 190.4,
        "Noncommunicable diseases": 570.5
      },
      "Rwanda": {
        "Communicable & other Group I": 28.8,
        "Injuries": 10.7,
        "Noncommunicable diseases": 31.9
      },
      "Sao Tome and Principe": {
        "Communicable & other Group I": 0.5,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.6
      },
      "Senegal": {
        "Communicable & other Group I": 43.5,
        "Injuries": 10.9,
        "Noncommunicable diseases": 37.5
      },
      "Seychelles": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.6
      },
      "Sierra Leone": {
        "Communicable & other Group I": 54,
        "Injuries": 9,
        "Noncommunicable diseases": 28
      },
      "South Africa": {
        "Communicable & other Group I": 234.8,
        "Injuries": 42.6,
        "Noncommunicable diseases": 260.6
      },
      "Swaziland": {
        "Communicable & other Group I": 6.2,
        "Injuries": 1.2,
        "Noncommunicable diseases": 4.6
      },
      "Togo": {
        "Communicable & other Group I": 33.7,
        "Injuries": 6.9,
        "Noncommunicable diseases": 23.5
      },
      "Uganda": {
        "Communicable & other Group I": 154,
        "Injuries": 36.2,
        "Noncommunicable diseases": 100.9
      },
      "United Republic of Tanzania": {
        "Communicable & other Group I": 226.3,
        "Injuries": 46.3,
        "Noncommunicable diseases": 142.5
      },
      "Zambia": {
        "Communicable & other Group I": 77.8,
        "Injuries": 12.6,
        "Noncommunicable diseases": 37.7
      },
      "Zimbabwe": {
        "Communicable & other Group I": 78.1,
        "Injuries": null,
        "Noncommunicable diseases": 40.5
      }
    },
    "Americas": {
      "Antigua and Barbuda": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0,
        "Noncommunicable diseases": 0.4
      },
      "Argentina": {
        "Communicable & other Group I": 40.9,
        "Injuries": 23.5,
        "Noncommunicable diseases": 268.1
      },
      "Bahamas": {
        "Communicable & other Group I": 0.4,
        "Injuries": 0.2,
        "Noncommunicable diseases": 1.8
      },
      "Barbados": {
        "Communicable & other Group I": 0.4,
        "Injuries": 0.1,
        "Noncommunicable diseases": 2.6
      },
      "Belize": {
        "Communicable & other Group I": 0.4,
        "Injuries": 0.3,
        "Noncommunicable diseases": 1.4
      },
      "Bolivia (Plurinational State of)": {
        "Communicable & other Group I": 16.7,
        "Injuries": 10.8,
        "Noncommunicable diseases": 44.6
      },
      "Brazil": {
        "Communicable & other Group I": 176,
        "Injuries": 162.3,
        "Noncommunicable diseases": 928.2
      },
      "Canada": {
        "Communicable & other Group I": 13.8,
        "Injuries": 15.7,
        "Noncommunicable diseases": 219.4
      },
      "Chile": {
        "Communicable & other Group I": 9.2,
        "Injuries": 7.8,
        "Noncommunicable diseases": 87.9
      },
      "Colombia": {
        "Communicable & other Group I": 26,
        "Injuries": 41.8,
        "Noncommunicable diseases": 178.9
      },
      "Costa Rica": {
        "Communicable & other Group I": 1.5,
        "Injuries": 2.3,
        "Noncommunicable diseases": 19
      },
      "Cuba": {
        "Communicable & other Group I": 7.6,
        "Injuries": 7.4,
        "Noncommunicable diseases": 78.9
      },
      "Dominican Republic": {
        "Communicable & other Group I": 10.9,
        "Injuries": 8.5,
        "Noncommunicable diseases": 42.9
      },
      "Ecuador": {
        "Communicable & other Group I": 13.3,
        "Injuries": 10.5,
        "Noncommunicable diseases": 59.1
      },
      "El Salvador": {
        "Communicable & other Group I": 4.7,
        "Injuries": 7,
        "Noncommunicable diseases": 28.9
      },
      "Grenada": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.7
      },
      "Guatemala": {
        "Communicable & other Group I": 21.9,
        "Injuries": 15.8,
        "Noncommunicable diseases": 49.5
      },
      "Guyana": {
        "Communicable & other Group I": 1.3,
        "Injuries": 0.8,
        "Noncommunicable diseases": 4.3
      },
      "Haiti": {
        "Communicable & other Group I": 28.2,
        "Injuries": 11.6,
        "Noncommunicable diseases": 51.2
      },
      "Honduras": {
        "Communicable & other Group I": 5.3,
        "Injuries": 9.2,
        "Noncommunicable diseases": 21.5
      },
      "Jamaica": {
        "Communicable & other Group I": 2.2,
        "Injuries": 1.8,
        "Noncommunicable diseases": 15
      },
      "Mexico": {
        "Communicable & other Group I": 63.3,
        "Injuries": 66.9,
        "Noncommunicable diseases": 493
      },
      "Nicaragua": {
        "Communicable & other Group I": 3.6,
        "Injuries": 3.4,
        "Noncommunicable diseases": 22.2
      },
      "Panama": {
        "Communicable & other Group I": 3.2,
        "Injuries": 1.9,
        "Noncommunicable diseases": 14.6
      },
      "Paraguay": {
        "Communicable & other Group I": 5.3,
        "Injuries": 4.2,
        "Noncommunicable diseases": 26.1
      },
      "Peru": {
        "Communicable & other Group I": 37.2,
        "Injuries": 18.7,
        "Noncommunicable diseases": 113.7
      },
      "Saint Lucia": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 1.1
      },
      "Saint Vincent and the Grenadines": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.7
      },
      "Suriname": {
        "Communicable & other Group I": 0.5,
        "Injuries": 0.4,
        "Noncommunicable diseases": 2.9
      },
      "Trinidad and Tobago": {
        "Communicable & other Group I": 1.1,
        "Injuries": 1.1,
        "Noncommunicable diseases": 10.5
      },
      "United States of America": {
        "Communicable & other Group I": 142.1,
        "Injuries": 164.8,
        "Noncommunicable diseases": 2342.8
      },
      "Uruguay": {
        "Communicable & other Group I": 2.7,
        "Injuries": 2.5,
        "Noncommunicable diseases": 27.5
      },
      "Venezuela (Bolivarian Republic of)": {
        "Communicable & other Group I": 19.1,
        "Injuries": 34,
        "Noncommunicable diseases": 119.7
      }
    },
    "Western Pacific": {
      "Australia": {
        "Communicable & other Group I": 7.2,
        "Injuries": 8.8,
        "Noncommunicable diseases": 137
      },
      "Brunei Darussalam": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.1,
        "Noncommunicable diseases": 1.2
      },
      "Cambodia": {
        "Communicable & other Group I": 26.4,
        "Injuries": 9.8,
        "Noncommunicable diseases": 57.4
      },
      "China": {
        "Communicable & other Group I": 423,
        "Injuries": 696.3,
        "Noncommunicable diseases": 8792
      },
      "Fiji": {
        "Communicable & other Group I": 0.7,
        "Injuries": 0.3,
        "Noncommunicable diseases": 5.3
      },
      "Japan": {
        "Communicable & other Group I": 169,
        "Injuries": 69.6,
        "Noncommunicable diseases": 1071.7
      },
      "Kiribati": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.5
      },
      "Lao People's Democratic Republic": {
        "Communicable & other Group I": 16.5,
        "Injuries": 4.7,
        "Noncommunicable diseases": 26
      },
      "Malaysia": {
        "Communicable & other Group I": 30,
        "Injuries": 13.6,
        "Noncommunicable diseases": 107.5
      },
      "Micronesia (Federated States of)": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0,
        "Noncommunicable diseases": 0.5
      },
      "Mongolia": {
        "Communicable & other Group I": 2,
        "Injuries": 2.4,
        "Noncommunicable diseases": 15.4
      },
      "New Zealand": {
        "Communicable & other Group I": 1.3,
        "Injuries": 1.8,
        "Noncommunicable diseases": 27.4
      },
      "Papua New Guinea": {
        "Communicable & other Group I": 19.8,
        "Injuries": 5.7,
        "Noncommunicable diseases": 32.3
      },
      "Philippines": {
        "Communicable & other Group I": 169.2,
        "Injuries": 43.5,
        "Noncommunicable diseases": 458
      },
      "Republic of Korea": {
        "Communicable & other Group I": 27.1,
        "Injuries": 31.5,
        "Noncommunicable diseases": 220.4
      },
      "Samoa": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.8
      },
      "Singapore": {
        "Communicable & other Group I": 5.7,
        "Injuries": 1.2,
        "Noncommunicable diseases": 20.4
      },
      "Solomon Islands": {
        "Communicable & other Group I": 0.7,
        "Injuries": 0.3,
        "Noncommunicable diseases": 2.1
      },
      "Tonga": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0,
        "Noncommunicable diseases": 0.5
      },
      "Vanuatu": {
        "Communicable & other Group I": 0.2,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.9
      },
      "Viet Nam": {
        "Communicable & other Group I": 70.5,
        "Injuries": 60.2,
        "Noncommunicable diseases": 411.9
      }
    },
    "South-East Asia": {
      "Bangladesh": {
        "Communicable & other Group I": 219,
        "Injuries": 68,
        "Noncommunicable diseases": 580.3
      },
      "Bhutan": {
        "Communicable & other Group I": 1.1,
        "Injuries": 0.5,
        "Noncommunicable diseases": 3.3
      },
      "Democratic People's Republic of Korea": {
        "Communicable & other Group I": 27.7,
        "Injuries": 16.6,
        "Noncommunicable diseases": 188.7
      },
      "India": {
        "Communicable & other Group I": 2685.5,
        "Injuries": 1057.1,
        "Noncommunicable diseases": 5816.5
      },
      "Indonesia": {
        "Communicable & other Group I": 394.5,
        "Injuries": 108.4,
        "Noncommunicable diseases": 1339.5
      },
      "Maldives": {
        "Communicable & other Group I": 0.1,
        "Injuries": 0.1,
        "Noncommunicable diseases": 0.9
      },
      "Myanmar": {
        "Communicable & other Group I": 103.7,
        "Injuries": 35.7,
        "Noncommunicable diseases": 297.2
      },
      "Nepal": {
        "Communicable & other Group I": 44.9,
        "Injuries": 22,
        "Noncommunicable diseases": 121.7
      },
      "Sri Lanka": {
        "Communicable & other Group I": 11,
        "Injuries": 17.9,
        "Noncommunicable diseases": 113.6
      },
      "Thailand": {
        "Communicable & other Group I": 101.1,
        "Injuries": 57.5,
        "Noncommunicable diseases": 393.6
      },
      "Timor-Leste": {
        "Communicable & other Group I": 3.7,
        "Injuries": 0.7,
        "Noncommunicable diseases": 3.9
      }
    }
  }
 
]

let regionP,
    regionVal,
    regionI = 0,
    countryP,
    countryI,
    causeP,
    causeI,
    region,
    country,
    cause;

const points = [],
  causeName = {
    'Communicable & other Group I': 'Communicable diseases',
    'Noncommunicable diseases': 'Non-communicable diseases',
    Injuries: 'Injuries'
  };

for (region in data) {
  if (Object.hasOwnProperty.call(data, region)) {
      regionVal = 0;
      regionP = {
          id: 'id_' + regionI,
          name: region,
          color: Highcharts.getOptions().colors[regionI]
      };
      countryI = 0;
      for (country in data[region]) {
          if (Object.hasOwnProperty.call(data[region], country)) {
              countryP = {
                  id: regionP.id + '_' + countryI,
                  name: country,
                  parent: regionP.id
              };
              points.push(countryP);
              causeI = 0;
              for (cause in data[region][country]) {
                  if (Object.hasOwnProperty.call(
                      data[region][country], cause
                  )) {
                      causeP = {
                          id: countryP.id + '_' + causeI,
                          name: causeName[cause],
                          parent: countryP.id,
                          value: Math.round(+data[region][country][cause])
                      };
                      regionVal += causeP.value;
                      points.push(causeP);
                      causeI = causeI + 1;
                  }
              }
              countryI = countryI + 1;
          }
      }
      regionP.value = Math.round(regionVal / countryI);
      points.push(regionP);
      regionI = regionI + 1;
  }
}

const LargeTreeMap = () => {
  const options = {
    series: [{
      name: 'Regions',
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      allowDrillToNode: true,
      animationLimit: 1000,
      dataLabels: {
          enabled: false
      },
      levels: [{
          level: 1,
          dataLabels: {
              enabled: true
          },
          borderWidth: 3,
          levelIsConstant: false
      }, {
          level: 1,
          dataLabels: {
              style: {
                  fontSize: '14px'
              }
          }
      }],
      accessibility: {
          exposeAsGroupOnly: true
      },
      data: points
    }],
    subtitle: {
        text: 'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.',
        align: 'left'
    },
    title: {
        text: 'Global Mortality Rate 2012, per 100 000 population',
        align: 'left'
    }
  }; //options

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
export default LargeTreeMap;