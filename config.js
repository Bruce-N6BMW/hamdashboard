const topBarCenterText = `N6BMW - CM87ss`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KMUX_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
    "SATELLITE CONUS",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "SATELLITE PSW",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/psw/EXTENT3/GOES16-PSW-EXTENT3-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ca.png",
  ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "SW BROADCAST",
    // "http://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=48.60|52.67|-9.42|-17.53|46.34|50.73|50.89|6.23|43.51|52.67|46.34|-21.96|34.38|-17.76|34.38|39.75|39.36|27.46|39.91|46.34|36.21|27.46|31.13|27.46|36.28|39.36|21.14|36.28|27.46|34.38|18.22|21.14|40.08|36.21|40.08|30.65|-21.96|33.50|-38.83|36.28|36.21&lon=11.55|9.75|160.05|146.05|-67.83|4.39|-113.85|-10.70|-79.63|9.75|-67.83|27.64|108.61|168.36|108.61|116.81|75.72|-80.93|-76.58|-67.83|-86.89|-80.93|30.07|-80.93|-86.10|75.72|105.42|-86.10|-80.93|108.61|-63.02|105.42|126.11|-86.89|126.11|-87.09|27.64|-86.47|176.42|-86.10|-86.89&freq=3955|3975|5020|5055|5130|5780|6030|6050|6070|6160|6160|6195|7205|7260|7285|7325|7415|7730|9265|9330|9350|9395|9440|9455|9475|9600|9730|9930|9955|11770|11775|11885|13760|13845|15245|15555|15580|15610|15720|15810|15825&az=ND|ND|ND|ND|245|ND|ND|ND|ND|ND|245|350|252|ND|317|193|308|44|242|245|85|355|325|285|50|308|320|180|160|317|320|320|28|90|325|5|350|85|35|40|46",
     "https://hf.dxview.org/",
  ],
  ["10/6/4/FM/2 Meters PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];
