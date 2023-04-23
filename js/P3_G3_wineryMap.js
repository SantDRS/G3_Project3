// An array of cities and their locations
let cities = [
  {
    "address": " Via Mazzini, 22, 25080 Polpenazze del Garda BS, Italy\",\"Maselva",
    "lat": 45.5321,
    "lng": 10.5449
  },
  {
    "address": " Via Martiri della Libert�, 10, 24060 Grumello del Monte BG, Italy\",\"Ernesto Ruffo",
    "lat": 45.6601,
    "lng": 9.7662
  },
  {
    "address": " Convento de Santa Maria Scala Coeli, Estrada Nacional 4, 7000-804 �vora, Portugal\",\"Cartuxa",
    "lat": 38.5551,
    "lng": -7.9076
  },
  {
    "address": " 3100 Old Sonoma Rd, Napa, CA 94558, United States\",\"Schrader",
    "lat": 38.3275,
    "lng": -122.3016
  },
  {
    "address": " 4008 Silverado Trail, Calistoga, CA 94515, United States\",\"Hundred Acre",
    "lat": 38.5932,
    "lng": -122.5258
  },
  {
    "address": " 2209 Pellerin Rd, Ventura, CA 93003, United States\",\"Sine Qua Non",
    "lat": 34.2846,
    "lng": -119.2063
  },
  {
    "address": " 1445 St. Helena Hwy, St Helena, CA 94574, United States\",\"Del Dotto",
    "lat": 38.5464,
    "lng": -122.4583
  },
  {
    "address": " 4240 Silverado Trail, Napa, CA 94558, United States\",\"Darioush",
    "lat": 38.4215,
    "lng": -122.3598
  },
  {
    "address": " Via Garbole, 29, 37031 Illasi VR, Italy\",\"Garbole",
    "lat": 45.4612,
    "lng": 11.1371
  },
  {
    "address": " 5544 Silverado Trail, Napa, CA 94558, United States\",\"Scarecrow",
    "lat": 38.4486,
    "lng": -122.4025
  },
  {
    "address": " Route Nationale 86, 69420 Ampuis, France\",\"E. Guigal",
    "lat": 45.4891,
    "lng": 4.7838
  },
  {
    "address": " 4 Route de Gevrey, 21220 Gevrey-Chambertin, France\",\"Domaine Armand Rousseau",
    "lat": 47.2255,
    "lng": 4.9478
  },
  {
    "address": " Cobos s/n, Luj�n de Cuyo, Mendoza, Argentina\",\"Catena Zapata",
    "lat": -33.0575,
    "lng": -68.8215
  },
  {
    "address": " Ctra. de Roa, s/n, 09314 Gumiel de Mercado, Burgos, Spain\",\"Bodegas Valduero",
    "lat": 41.6905,
    "lng": -3.9757
  },
  {
    "address": " 1615 Silverado Trail, St Helena, CA 94574, USA\",\"Brion",
    "lat": 45.7382,
    "lng": 4.8079
  },
  {
    "address": " 575 Oakville Cross Rd, Oakville, CA 94562, USA\",\"Gargiulo",
    "lat": 38.4016,
    "lng": -122.3738
  },
  {
    "address": " Via Gustavo Modena, 20, 12064 La Morra CN, Italy\",\"Conterno",
    "lat": 44.6365,
    "lng": 8.0453
  },
  {
    "address": " 3130 Old Lawley Toll Rd, Calistoga, CA 94515, USA\",\"Amici",
    "lat": 38.5113,
    "lng": -122.4669
  },
  {
    "address": " Polkadraai Rd, Stellenbosch, 7600, South Africa\",\"De Toren",
    "lat": -33.8437,
    "lng": 18.8007
  },
  {
    "address": " 703 Oakville Cross Rd, Napa, CA 94558, USA\",\"B Cellars",
    "lat": 38.4464,
    "lng": -122.409
  },
  {
    "address": " 401 St Helena Hwy S, St Helena, CA 94574, USA\",\"Hall",
    "lat": 38.4664,
    "lng": -122.4224
  },
  {
    "address": " 9291 West Dry Creek Rd, Healdsburg, CA 95448, USA\",\"4G",
    "lat": 41.8274,
    "lng": 1.5376
  },
  {
    "address": " 1000 Lodi Ln, St Helena, CA 94574, USA\",\"Dana",
    "lat": 38.4829,
    "lng": -122.438
  },
  {
    "address": " 7773 Szeksz�rd, B�tasz�ki �t, Hungary\",\"Takler",
    "lat": 46.8906,
    "lng": 16.9286
  },
  {
    "address": " 8 Travers de Le Pin, 33500 Pomerol, France\",\"Le Pin",
    "lat": 44.9339,
    "lng": 0.1838
  },
  {
    "address": " 1883 London Ranch Rd, Glen Ellen, CA 95442, United States \",\"Benziger",
    "lat": 38.4048,
    "lng": -122.5391
  },
  {
    "address": " Lugar Veiga, 36860 Ponteareas, Pontevedra, Spain \",\"Veiga",
    "lat": 41.7788,
    "lng": -6.8267
  },
  {
    "address": " 150 Langhorne Creek Rd, Langhorne Creek SA 5255, Australia \",\"Small Gully",
    "lat": -34.5852,
    "lng": 138.9066
  },
  {
    "address": " R. C�ndido dos Reis 670, 4430-330 Avintes, Portugal \",\"Casa Ferreirinha",
    "lat": 41.0771,
    "lng": -8.2189
  },
  {
    "address": " Carretera de Soria, s/n, 47359 Valbuena de Duero, Valladolid, Spain \",\"Vega Sicilia",
    "lat": 41.6167,
    "lng": -4.1172
  },
  {
    "address": " Rue Saint-Julien, 33250 Pauillac, France \",\"Ch�teau Latour",
    "lat": 45.1857,
    "lng": -0.7457
  },
  {
    "address": " Ruta 7, km 1056, Perdriel, Luj�n de Cuyo, Mendoza, Argentina \",\"Vi�a Cobos",
    "lat": -33.1191,
    "lng": -69.3483
  },
  {
    "address": " 33460 Margaux, France \",\"Ch�teau Margaux",
    "lat": 45.0462,
    "lng": -0.6765
  },
  {
    "address": " 33500 Pomerol, France \",\"P�trus",
    "lat": 44.917,
    "lng": 0.2538
  },
  {
    "address": " Via Cer�, 26, 37020 Negrar VR, Italy \",\"Quintarelli Giuseppe",
    "lat": 45.48199,
    "lng": 10.95826
  },
  {
    "address": " 33250 Pauillac, France \",\"Ch�teau Lafite Rothschild",
    "lat": 45.16846,
    "lng": -0.72726
  },
  {
    "address": " Via Case Sparse, 22, 53047 San Giovanni d'Asso SI, Italy \",\"Masseto",
    "lat": 43.33701,
    "lng": 10.97729
  },
  {
    "address": " Saint-�milion, 33330 Saint-�milion, France \",\"Ch�teau Cheval Blanc",
    "lat": 44.92292,
    "lng": -0.24411
  },
  {
    "address": " Via Bolgherese, 275, 57022 Castagneto Carducci LI, Italy \",\"Tenuta San Guido",
    "lat": 43.22547,
    "lng": 10.59461
  },
  {
    "address": " 8300 St Helena Hwy, Rutherford, CA 94573, United States \",\"Cakebread",
    "lat": 38.42754,
    "lng": -122.36081
  },
  {
    "address": " 8383 Silverado Trail, Napa, CA 94558, United States \",\"ZD Wines",
    "lat": 38.41426,
    "lng": -122.36346
  },
  {
    "address": " 1091 Larkmead Ln, Calistoga, CA 94515, United States \",\"Frank Family",
    "lat": 38.50817,
    "lng": -122.46715
  },
  {
    "address": " 78 Penfold Road, Magill SA 5072, Australia \",\"Penfolds",
    "lat": -34.91604,
    "lng": 138.67521
  },
  {
    "address": " 1551 Sage Canyon Rd, St Helena, CA 94574, United States\",\"Harlan Estate",
    "lat": 38.50378,
    "lng": -122.45285
  },
  {
    "address": " 5901 Silverado Trail, Napa, CA 94558, United States \",\"Tusk",
    "lat": 38.50292,
    "lng": -122.44697
  },
  {
    "address": " Apalta, Colchagua Valley, Chile \",\"Montes",
    "lat": -34.61552,
    "lng": -70.98575
  },
  {
    "address": " 3787 Spring Mountain Rd, St Helena, CA 94574, United States \",\"Lokoya",
    "lat": 38.44821,
    "lng": -122.36416
  },
  {
    "address": " 7800 Money Rd, Oakville, CA 94562, United States \",\"Screaming Eagle",
    "lat": 38.47605,
    "lng": -122.43567
  },
  {
    "address": " R.N. 7, km. 1056, Vista Flores, Mendoza, Argentina \",\"Monteviejo",
    "lat": -33.52267,
    "lng": -69.97283
  },
  {
    "address": " 6154 Silverado Trail, Napa, CA 94558, United States \",\"Shafer",
    "lat": 38.39422,
    "lng": -122.32883
  },
  {
    "address": " 4029 Hagen Rd, Napa, CA 94558, United States \",\"Palmaz",
    "lat": 38.35412,
    "lng": -122.23626
  },
  {
    "address": " Rua Cidade de Espinho, 24, 5085-215 Pinh�o, Portugal \",\"Douro Boys",
    "lat": 41.14626,
    "lng": -7.57389
  },
  {
    "address": " Mendoza, Argentina \",\"Tres Mil Botellas",
    "lat": 38.49867,
    "lng": -69.31979
  },
  {
    "address": " Hauptstraße 58, 7142 Illmitz, Austria\",\"Scheiblhofer",
    "lat": 47.8269,
    "lng": 16.78811
  },
  {
    "address": " 33250 Pauillac, France \",\"Ch�teau Mouton Rothschild",
    "lat": 45.2268,
    "lng": -0.7461
  },
  {
    "address": " 1795 Sage Canyon Rd, St Helena, CA 94574, United States \",\"Promontory",
    "lat": 38.5602,
    "lng": -122.4122
  },
  {
    "address": " Via Torino, 36, 12050 Barbaresco CN, Italy \",\"Gaja",
    "lat": 44.6946,
    "lng": 8.0533
  },
  {
    "address": " 200 Taplin Rd, St Helena, CA 94574, United States \",\"Joseph Phelps",
    "lat": 38.5023,
    "lng": -122.4693
  },
  {
    "address": " Via Rinaldi, 23, 12060 Castiglione Falletto CN, Italy \",\"Villa Rinaldi",
    "lat": 45.0828,
    "lng": 7.8829
  },
  {
    "address": " Via Strada Bianca, 11, 12065 Monforte d'Alba CN, Italy \",\"Bovin",
    "lat": 45.9434,
    "lng": 13.4674
  },
  {
    "address": " Strada Provinciale del Brunello, 53024 Montalcino SI, Italy\",\"Soldera",
    "lat": 42.9669,
    "lng": 11.2237
  },
  {
    "address": " Henschke Rd, Keyneton SA 5353, Australia \",\"Henschke",
    "lat": -34.4888,
    "lng": 138.8612
  },
  {
    "address": " 30 Rue de la Font de l'Orme, 84230 Ch�teauneuf-du-Pape, France\",\"Henri Bonneau",
    "lat": 44.0295,
    "lng": 4.8423
  },
  {
    "address": " Via C� Salgari, 2, 37031 Illasi VR, Italy\",\"Dal Forno Romano",
    "lat": 45.5053,
    "lng": 10.9662
  },
  {
    "address": " 33250 Pauillac, France \",\"Baron Philippe de Rothschild",
    "lat": 45.1826,
    "lng": -0.7505
  },
  {
    "address": " 8700 Conn Creek Rd, Rutherford, CA 94573, United States \",\"Bond",
    "lat": 38.5539,
    "lng": -122.4637
  },
  {
    "address": " 33330 Saint-�milion, France \",\"Ch�teau Ausone",
    "lat": 44.8912,
    "lng": -0.1565
  },
  {
    "address": " 2598 Whitehall Ln, Saint Helena, CA 94574, United States \",\"Bevan Cellars",
    "lat": 38.4986,
    "lng": -122.4666
  },
  {
    "address": " Ctra. San Vicente, s/n, 26320 San Vicente de la Sonsierra, La Rioja, Spain \",\"Bodega Contador (Benjam�n Romeo)",
    "lat": 42.5617,
    "lng": -2.7686
  },
  {
    "address": " 1560 Silverado Trail, St Helena, CA 94574, United States \",\"Cirq",
    "lat": 38.5176,
    "lng": -122.4924
  },
  {
    "address": " 7481 St Helena Hwy, Oakville, CA 94562, United States \",\"Memento Mori",
    "lat": 38.4188,
    "lng": -122.4397
  },
  {
    "address": " 4550 Silverado Trail, Calistoga, CA 94515, United States \",\"Maybach Family Vineyards",
    "lat": 38.4796,
    "lng": -122.4571
  },
  {
    "address": " 500 Oakville Cross Rd, Napa, CA 94558, United States\",\"Rudd",
    "lat": 38.4927,
    "lng": -122.4279
  },
  {
    "address": " Rua da Galeira, 25, 5050-041 Celeirós, Portugal\",\"Vale D. Maria",
    "lat": 41.1739,
    "lng": -7.7451
  },
  {
    "address": " 20, Rue de la Grand Cour, 21700 Meursault, France\",\"Domaine Comte Georges de Vog��",
    "lat": 47.0118,
    "lng": 4.7829
  },
  {
    "address": " Strada Provinciale del vino, 31, 12050 Barolo CN, Italy\",\"Ferrag�",
    "lat": 44.6284,
    "lng": 7.9808
  },
  {
    "address": " 84190 Châteauneuf-du-Pape, France\",\"Ch�teau Rayas",
    "lat": 44.0547,
    "lng": 4.8715
  },
  {
    "address": " 270 Kreuzer Ln, Napa, CA 94559, USA\",\"Moone-Tsai",
    "lat": 38.3075,
    "lng": -122.2889
  },
  {
    "address": " 360 Howell Mountain Rd S, Angwin, CA 94508, USA\",\"Cade",
    "lat": 38.5706,
    "lng": -122.4638
  },
  {
    "address": " 2926 Orchard Ave, Napa, CA 94558, USA\",\"Favia",
    "lat": 38.3402,
    "lng": -122.3084
  },
  {
    "address": " 8700 Conn Creek Rd, Rutherford, CA 94573, USA \",\"David Arthur",
    "lat": 38.5367,
    "lng": -122.4215
  },
  {
    "address": " 3478 Barossa Valley Way, Marananga SA 5355, Australia \",\"Torbreck",
    "lat": -34.5555,
    "lng": 138.9562
  },
  {
    "address": " 1500 Whitehall Ln, Saint Helena, CA 94574, USA \",\"The Crane Assembly",
    "lat": 38.2988,
    "lng": -122.2869
  },
  {
    "address": " 1560 Silverado Trail, Saint Helena, CA 94574, USA \",\"Futo",
    "lat": 38.4754,
    "lng": -122.4861
  },
  {
    "address": " 1082 Dowdell Ln, Napa, CA 94558, USA \",\"Burly",
    "lat": 38.5329,
    "lng": -122.4762
  },
  {
    "address": " Via Monte Faustino, 12, 37022 Fumane VR, Italy \",\"Monte Faustino",
    "lat": 45.5454,
    "lng": 10.9042
  },
  {
    "address": " Ctra. de Peñafiel, km 1,5, 47300 Ribera del Duero, Valladolid, Spain \",\"Pago de Carraovejas",
    "lat": 41.6783,
    "lng": -3.7056
  },
  {
    "address": " Ctra. Falset a Gratallops, s/n, 43737 Gratallops, Tarragona, Spain \",\"Álvaro Palacios",
    "lat": 41.1302,
    "lng": 0.8881
  },
  {
    "address": " 7600 St Helena Hwy, Oakville, CA 94562, USA \",\"Pulido-Walker",
    "lat": 38.4829,
    "lng": -122.4686
  },
  {
    "address": " Località Bussia, 39, 12065 Monforte d'Alba CN, Italy\",\"Parusso",
    "lat": 44.6326,
    "lng": 7.9688
  }
 ];


// An array that will store the created cityMarkers
let cityMarkers = [];

for (let i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, and push it to the cityMarkers array
  cityMarkers.push(
    L.marker([cities[i].lat, cities[i].lng]).bindPopup("<h1>" + cities[i].address + "</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now, we can handle them as one group instead of referencing each one individually.
let cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
let baseMaps = {
  Street: street,
  Topography: topo
};

// Overlays that can be toggled on or off
let overlayMaps = {
  Cities: cityLayer
};

// Create a map object, and set the default layers.
let myMap = L.map("map", {
  center: [0, 0],
  zoom: 2,
  layers: [street, cityLayer]
});

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);



