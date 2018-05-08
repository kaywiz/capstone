//////////////////////////LOAD MAP//////////////////////////////
mapboxgl.accessToken = 'pk.eyJ1Ijoia2F5d2l6IiwiYSI6ImNqZzJuc3hxdDIwOXUyeHJxczRsN2FranQifQ.madkyNCQL4Q5Lonhk_FknA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  //style: 'mapbox://styles/kaywiz/cjgl8sqt9001c2rpk42l3czj5',
  zoom: 11,
  center: [-90.285404,38.638855]
});



//////////////////////////TEST SEARCH DATA//////////////////////////////
var places = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4377271,38.5129819 ]
    },
    "properties": {
    "name":"026 Pub N Biergarten",
    "lowercase":"026 pub n biergarten"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2621713,38.6413086 ]
    },
    "properties": {
    "name":"1764 Public House",
    "lowercase":"1764 public house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27479,38.64719 ]
    },
    "properties": {
    "name":"2Schae Cafe",
    "lowercase":"2schae cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1959005,38.6317503 ]
    },
    "properties": {
    "name":"314 The City Bar",
    "lowercase":"314 the city bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19104,38.62518 ]
    },
    "properties": {
    "name":"360 St. Louis",
    "lowercase":"360 st. louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3424149,38.6522903 ]
    },
    "properties": {
    "name":"5 Star Burgers",
    "lowercase":"5 star burgers"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.43976933,38.67154422 ]
    },
    "properties": {
    "name":"5 Star Burgers",
    "lowercase":"5 star burgers"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.362555,38.525932 ]
    },
    "properties": {
    "name":"54th Street Grill & Bar",
    "lowercase":"54th street grill & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4185999,38.5741651 ]
    },
    "properties": {
    "name":"612 Kitchen & Cocktails",
    "lowercase":"612 kitchen & cocktails"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3311972,38.6489932 ]
    },
    "properties": {
    "name":"801 Chophouse - St Louis",
    "lowercase":"801 chophouse - st louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33305,38.64798 ]
    },
    "properties": {
    "name":"801 Fish",
    "lowercase":"801 fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20663,38.60459 ]
    },
    "properties": {
    "name":"9th Street Deli",
    "lowercase":"9th street deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31731,38.55458 ]
    },
    "properties": {
    "name":"A Taste of China",
    "lowercase":"a taste of china"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25914,38.67732 ]
    },
    "properties": {
    "name":"AAA Fish House",
    "lowercase":"aaa fish house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31594,38.61332 ]
    },
    "properties": {
    "name":"Acero",
    "lowercase":"acero"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29013,38.6093667 ]
    },
    "properties": {
    "name":"Adam's Smokehouse",
    "lowercase":"adam's smokehouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.270662,38.617961 ]
    },
    "properties": {
    "name":"Adriana's",
    "lowercase":"adriana's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33396511,38.55045972 ]
    },
    "properties": {
    "name":"Affton Diner",
    "lowercase":"affton diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30420567,38.65620459 ]
    },
    "properties": {
    "name":"Al-Tarboush Deli",
    "lowercase":"al-tarboush deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2730431,38.5922821 ]
    },
    "properties": {
    "name":"Ali Baba Cafe",
    "lowercase":"ali baba cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.342501,38.6523046 ]
    },
    "properties": {
    "name":"Almond's",
    "lowercase":"almond's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.198986,38.629446 ]
    },
    "properties": {
    "name":"Alumni Saint Louis",
    "lowercase":"alumni saint louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32085903,38.55313849 ]
    },
    "properties": {
    "name":"Ambrosia Restaurant & Bar",
    "lowercase":"ambrosia restaurant & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36742,38.60901 ]
    },
    "properties": {
    "name":"Amighetti's",
    "lowercase":"amighetti's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27256,38.61582 ]
    },
    "properties": {
    "name":"Amighetti's Bakery & Cafe",
    "lowercase":"amighetti's bakery & cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.287216,38.608203 ]
    },
    "properties": {
    "name":"Amigo Joe's",
    "lowercase":"amigo joe's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2779599,38.61439 ]
    },
    "properties": {
    "name":"Anthonino's Taverna",
    "lowercase":"anthonino's taverna"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33432029,38.64309861 ]
    },
    "properties": {
    "name":"Anthony's Italian Eats",
    "lowercase":"anthony's italian eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35877005,38.52534473 ]
    },
    "properties": {
    "name":"Apollo Cafe",
    "lowercase":"apollo cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28463736,38.57048817 ]
    },
    "properties": {
    "name":"Apollonia",
    "lowercase":"apollonia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.333795,38.6195881 ]
    },
    "properties": {
    "name":"Applebee's Grill + Bar",
    "lowercase":"applebee's grill + bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.354897,38.71271 ]
    },
    "properties": {
    "name":"Applebee's Grill + Bar",
    "lowercase":"applebee's grill + bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.262098,38.63861 ]
    },
    "properties": {
    "name":"Applebee's Grill + Bar",
    "lowercase":"applebee's grill + bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3703105,38.5622501 ]
    },
    "properties": {
    "name":"Applebee's Grill + Bar",
    "lowercase":"applebee's grill + bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28320238,38.62587914 ]
    },
    "properties": {
    "name":"Arena Bar and Grill",
    "lowercase":"arena bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28939,38.60684 ]
    },
    "properties": {
    "name":"Ari's Restaurant",
    "lowercase":"ari's restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35254519,38.52544857 ]
    },
    "properties": {
    "name":"Ari's Restaurant",
    "lowercase":"ari's restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25315,38.65951 ]
    },
    "properties": {
    "name":"Arkansas Fried Chicken",
    "lowercase":"arkansas fried chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.196642,38.630818 ]
    },
    "properties": {
    "name":"Asia Gourmet",
    "lowercase":"asia gourmet"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3546,38.67427 ]
    },
    "properties": {
    "name":"Asian Kitchen Korean Cuisine",
    "lowercase":"asian kitchen korean cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25183596,38.62763263 ]
    },
    "properties": {
    "name":"Atomic Cowboy",
    "lowercase":"atomic cowboy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3394241,38.6506386 ]
    },
    "properties": {
    "name":"Avenue Restaurant",
    "lowercase":"avenue restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30680084,38.59036636 ]
    },
    "properties": {
    "name":"Aya Sofia",
    "lowercase":"aya sofia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.288916,38.6772729 ]
    },
    "properties": {
    "name":"Ba-Da-Bing BBQ",
    "lowercase":"ba-da-bing bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2430715,38.59956018 ]
    },
    "properties": {
    "name":"Baida Moroccan Restaurant",
    "lowercase":"baida moroccan restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2286429,38.63662474 ]
    },
    "properties": {
    "name":"BaiKu Sushi Lounge",
    "lowercase":"baiku sushi lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.212731,38.617555 ]
    },
    "properties": {
    "name":"Baileys' Chocolate Bar",
    "lowercase":"baileys' chocolate bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1945099,38.62887 ]
    },
    "properties": {
    "name":"Baileys' Range",
    "lowercase":"baileys' range"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19304657,38.63051987 ]
    },
    "properties": {
    "name":"Balkan Treat Box",
    "lowercase":"balkan treat box"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36448,38.60893 ]
    },
    "properties": {
    "name":"Bandana's Bar-B-Q",
    "lowercase":"bandana's bar-b-q"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.38584137,38.5305748 ]
    },
    "properties": {
    "name":"Bandana's Bar-B-Q",
    "lowercase":"bandana's bar-b-q"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2449199,38.5828599 ]
    },
    "properties": {
    "name":"Banh Mi So 1",
    "lowercase":"banh mi so 1"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26192,38.64504 ]
    },
    "properties": {
    "name":"Bar Italia Ristorante",
    "lowercase":"bar italia ristorante"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3342399,38.6430728 ]
    },
    "properties": {
    "name":"Bar Les Freres",
    "lowercase":"bar les freres"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33791769,38.65124875 ]
    },
    "properties": {
    "name":"BARcelona Tapas Restaurant",
    "lowercase":"barcelona tapas restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26514372,38.63567646 ]
    },
    "properties": {
    "name":"Barnes Jewish Hospital Cafeteria",
    "lowercase":"barnes jewish hospital cafeteria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2880295,38.6176418 ]
    },
    "properties": {
    "name":"Bartolino's Osteria",
    "lowercase":"bartolino's osteria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34594,38.52183 ]
    },
    "properties": {
    "name":"Bartolino's South",
    "lowercase":"bartolino's south"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24311,38.59979 ]
    },
    "properties": {
    "name":"Basil Spice Thai Cuisine",
    "lowercase":"basil spice thai cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30674905,38.63322919 ]
    },
    "properties": {
    "name":"Basso",
    "lowercase":"basso"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19196,38.61972 ]
    },
    "properties": {
    "name":"BB's Jazz Blues & Soups",
    "lowercase":"bb's jazz blues & soups"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2624588,38.64015961 ]
    },
    "properties": {
    "name":"BBQ Saloon",
    "lowercase":"bbq saloon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3123111,38.6431241 ]
    },
    "properties": {
    "name":"Bear's Den",
    "lowercase":"bear's den"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.38543,38.69071 ]
    },
    "properties": {
    "name":"Bek Hee Restaurant",
    "lowercase":"bek hee restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29384145,38.59151335 ]
    },
    "properties": {
    "name":"Bellacino's Pizza and Grinders",
    "lowercase":"bellacino's pizza and grinders"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21858595,38.59938358 ]
    },
    "properties": {
    "name":"Benton Park Café & Coffee Bar",
    "lowercase":"benton park café & coffee bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29965,38.52375 ]
    },
    "properties": {
    "name":"Berix Restaurant",
    "lowercase":"berix restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23154,38.63856 ]
    },
    "properties": {
    "name":"Best Steak House",
    "lowercase":"best steak house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33899233,38.58954996 ]
    },
    "properties": {
    "name":"Big Sky Cafe",
    "lowercase":"big sky cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.299,38.60167 ]
    },
    "properties": {
    "name":"Biggies Restaurant & Bar",
    "lowercase":"biggies restaurant & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2297075,38.6535185 ]
    },
    "properties": {
    "name":"Biker's Corner",
    "lowercase":"biker's corner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3336019,38.6427751 ]
    },
    "properties": {
    "name":"Billie Jean",
    "lowercase":"billie jean"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2001,38.60778 ]
    },
    "properties": {
    "name":"Billie's Fine Foods",
    "lowercase":"billie's fine foods"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2416185,38.6584309 ]
    },
    "properties": {
    "name":"Billy Burk's Snack Shop",
    "lowercase":"billy burk's snack shop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4078579,38.5813787 ]
    },
    "properties": {
    "name":"Billy G's Kirkwood",
    "lowercase":"billy g's kirkwood"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3054908,38.6557102 ]
    },
    "properties": {
    "name":"Bing Bing",
    "lowercase":"bing bing"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31634784,38.51326396 ]
    },
    "properties": {
    "name":"Biser Euro Market & Grill",
    "lowercase":"biser euro market & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20373535,38.67076492 ]
    },
    "properties": {
    "name":"Bissell Mansion Restaurant and Murder Mystery Dinner Theatre",
    "lowercase":"bissell mansion restaurant and murder mystery dinner theatre"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20323326,38.62463553 ]
    },
    "properties": {
    "name":"Bistro 14",
    "lowercase":"bistro 14"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2290868,38.59379388 ]
    },
    "properties": {
    "name":"Blanca Mexican",
    "lowercase":"blanca mexican"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2317839,38.5943473 ]
    },
    "properties": {
    "name":"Blank Space",
    "lowercase":"blank space"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40616,38.56458 ]
    },
    "properties": {
    "name":"Blaze Fast-Fire'd Pizza",
    "lowercase":"blaze fast-fire'd pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3374481,38.6290741 ]
    },
    "properties": {
    "name":"BLI Cafe",
    "lowercase":"bli cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24227,38.63583 ]
    },
    "properties": {
    "name":"Blk Mkt Eats",
    "lowercase":"blk mkt eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1985168,38.632431 ]
    },
    "properties": {
    "name":"Blondie's Coffee and Wine Bar",
    "lowercase":"blondie's coffee and wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2013358,38.6319967 ]
    },
    "properties": {
    "name":"Blood & Sand",
    "lowercase":"blood & sand"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3371902,38.6500282 ]
    },
    "properties": {
    "name":"Blue Elephant Royal Thai Cuisine",
    "lowercase":"blue elephant royal thai cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34447603,38.63615418 ]
    },
    "properties": {
    "name":"Blue Sky Tower Grill",
    "lowercase":"blue sky tower grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3049558,38.6558071 ]
    },
    "properties": {
    "name":"Blueberry Hill Restaurant & Bar",
    "lowercase":"blueberry hill restaurant & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2184098,38.605057 ]
    },
    "properties": {
    "name":"Blues City Deli",
    "lowercase":"blues city deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40873874,38.56658695 ]
    },
    "properties": {
    "name":"Blues Fired Pizza",
    "lowercase":"blues fired pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28392,38.57081 ]
    },
    "properties": {
    "name":"Bo Fung Chinese Kitchen",
    "lowercase":"bo fung chinese kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31815,38.61274 ]
    },
    "properties": {
    "name":"Boardwalk Waffles & Ice Cream",
    "lowercase":"boardwalk waffles & ice cream"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2836841,38.6401343 ]
    },
    "properties": {
    "name":"Boathouse",
    "lowercase":"boathouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28759,38.610591 ]
    },
    "properties": {
    "name":"Bobby's Place",
    "lowercase":"bobby's place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30032588,38.64974025 ]
    },
    "properties": {
    "name":"Bobo Noodle House",
    "lowercase":"bobo noodle house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31188592,38.55554323 ]
    },
    "properties": {
    "name":"Bommarito's Pizzeria",
    "lowercase":"bommarito's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34556459,38.62764494 ]
    },
    "properties": {
    "name":"Bonefish Grill",
    "lowercase":"bonefish grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2941959,38.5896382 ]
    },
    "properties": {
    "name":"Bono's Pizzeria",
    "lowercase":"bono's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31860352,38.61261368 ]
    },
    "properties": {
    "name":"Boogaloo",
    "lowercase":"boogaloo"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20689,38.63419 ]
    },
    "properties": {
    "name":"Bootleggin' BBQ Tavern",
    "lowercase":"bootleggin' bbq tavern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31597802,38.63420706 ]
    },
    "properties": {
    "name":"Boston Market",
    "lowercase":"boston market"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30626368,38.63303887 ]
    },
    "properties": {
    "name":"Boundary",
    "lowercase":"boundary"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.242638,38.598448 ]
    },
    "properties": {
    "name":"Brasilia",
    "lowercase":"brasilia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26186494,38.63998997 ]
    },
    "properties": {
    "name":"Brasserie by Niche",
    "lowercase":"brasserie by niche"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44767556,38.60211544 ]
    },
    "properties": {
    "name":"BRAVO! Cucina Italiana",
    "lowercase":"bravo! cucina italiana"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2927933,38.6076584 ]
    },
    "properties": {
    "name":"Brazie's Italian Restaurant",
    "lowercase":"brazie's italian restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3177,38.708758 ]
    },
    "properties": {
    "name":"Breakaway Cafe",
    "lowercase":"breakaway cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33433937,38.55059716 ]
    },
    "properties": {
    "name":"Breakfast and Burgers",
    "lowercase":"breakfast and burgers"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28137,38.63013 ]
    },
    "properties": {
    "name":"Brew Hub Taproom",
    "lowercase":"brew hub taproom"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4078657,38.6328651 ]
    },
    "properties": {
    "name":"BrickTop's",
    "lowercase":"bricktop's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19467106,38.6298536 ]
    },
    "properties": {
    "name":"Bridge Tap House and Wine Bar",
    "lowercase":"bridge tap house and wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4063797,38.63256454 ]
    },
    "properties": {
    "name":"Brio Tuscan Grille",
    "lowercase":"brio tuscan grille"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.443821,38.671402 ]
    },
    "properties": {
    "name":"Bristol Seafood Grill",
    "lowercase":"bristol seafood grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.192384,38.618778 ]
    },
    "properties": {
    "name":"Broadway Oyster Bar",
    "lowercase":"broadway oyster bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.319648,38.631822 ]
    },
    "properties": {
    "name":"Bud's Grill",
    "lowercase":"bud's grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1918187,38.6235334 ]
    },
    "properties": {
    "name":"Budweiser Brew House",
    "lowercase":"budweiser brew house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24454,38.59066 ]
    },
    "properties": {
    "name":"Buttery Restaurant",
    "lowercase":"buttery restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40352,38.67522 ]
    },
    "properties": {
    "name":"Buzz's Hawaiian Grill",
    "lowercase":"buzz's hawaiian grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22539909,38.59265009 ]
    },
    "properties": {
    "name":"Byrd & Barrel",
    "lowercase":"byrd & barrel"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2713138,38.6994258 ]
    },
    "properties": {
    "name":"C & K Barbecue",
    "lowercase":"c & k barbecue"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3596333,38.5931743 ]
    },
    "properties": {
    "name":"C J Muggs Restaurant",
    "lowercase":"c j muggs restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3473053,38.6347847 ]
    },
    "properties": {
    "name":"Cafe Bistro",
    "lowercase":"cafe bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.447929,38.600872 ]
    },
    "properties": {
    "name":"Cafe Bistro",
    "lowercase":"cafe bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25705191,38.61393434 ]
    },
    "properties": {
    "name":"Cafe Flora",
    "lowercase":"cafe flora"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29498,38.5748 ]
    },
    "properties": {
    "name":"Cafe Korzo",
    "lowercase":"cafe korzo"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25712158,38.60796131 ]
    },
    "properties": {
    "name":"Cafe Madeleine",
    "lowercase":"cafe madeleine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3351124,38.6436868 ]
    },
    "properties": {
    "name":"Cafe Manhattan",
    "lowercase":"cafe manhattan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2430835,38.5984327 ]
    },
    "properties": {
    "name":"Cafe Mochi",
    "lowercase":"cafe mochi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.336782,38.650461 ]
    },
    "properties": {
    "name":"Cafe Napoli",
    "lowercase":"cafe napoli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24272,38.598929 ]
    },
    "properties": {
    "name":"Cafe Natasha's",
    "lowercase":"cafe natasha's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.281582,38.579334 ]
    },
    "properties": {
    "name":"Cafe Nova",
    "lowercase":"cafe nova"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25705,38.64933 ]
    },
    "properties": {
    "name":"Café Osage",
    "lowercase":"café osage"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21786719,38.59677735 ]
    },
    "properties": {
    "name":"Cafe Piazza",
    "lowercase":"cafe piazza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40656455,38.57535236 ]
    },
    "properties": {
    "name":"Cafe Provencal",
    "lowercase":"cafe provencal"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29093988,38.5113301 ]
    },
    "properties": {
    "name":"Cafe Telegraph",
    "lowercase":"cafe telegraph"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24206543,38.63806152 ]
    },
    "properties": {
    "name":"Café Ventana",
    "lowercase":"café ventana"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3354081,38.6495859 ]
    },
    "properties": {
    "name":"Cantina Laredo - Clayton",
    "lowercase":"cantina laredo - clayton"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40700881,38.63082115 ]
    },
    "properties": {
    "name":"Canyon Cafe",
    "lowercase":"canyon cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.213675,38.600601 ]
    },
    "properties": {
    "name":"Capitalist Pig",
    "lowercase":"capitalist pig"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19221772,38.62386189 ]
    },
    "properties": {
    "name":"Cardinals Nation",
    "lowercase":"cardinals nation"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40700955,38.62937111 ]
    },
    "properties": {
    "name":"Cardwell's At the Plaza",
    "lowercase":"cardwell's at the plaza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24303667,38.59276916 ]
    },
    "properties": {
    "name":"Caribbean Delight",
    "lowercase":"caribbean delight"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30984,38.63425 ]
    },
    "properties": {
    "name":"Carl's Delicatessen Restaurant",
    "lowercase":"carl's delicatessen restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.354311,38.612737 ]
    },
    "properties": {
    "name":"Carl's Drive In",
    "lowercase":"carl's drive in"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23036,38.59376 ]
    },
    "properties": {
    "name":"Carniceria Latino Americana",
    "lowercase":"carniceria latino americana"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2602175,38.5414195 ]
    },
    "properties": {
    "name":"Carondelet Diner",
    "lowercase":"carondelet diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.194099,38.631001 ]
    },
    "properties": {
    "name":"Caruso's Deli",
    "lowercase":"caruso's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3466405,38.67342401 ]
    },
    "properties": {
    "name":"Cate Zone Chinese Cafe",
    "lowercase":"cate zone chinese cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2677078,38.6769485 ]
    },
    "properties": {
    "name":"CBS Barbeque",
    "lowercase":"cbs barbeque"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30022929,38.60033698 ]
    },
    "properties": {
    "name":"Cecil Whittaker's Pizzeria",
    "lowercase":"cecil whittaker's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26237,38.6399702 ]
    },
    "properties": {
    "name":"Central Table",
    "lowercase":"central table"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26747,38.6171 ]
    },
    "properties": {
    "name":"Cha Cha Chow",
    "lowercase":"cha cha chow"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34975838,38.6738626 ]
    },
    "properties": {
    "name":"Chao Zhou Cuisine",
    "lowercase":"chao zhou cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2305856,38.5937907 ]
    },
    "properties": {
    "name":"Chaparritos",
    "lowercase":"chaparritos"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.37715,38.60595 ]
    },
    "properties": {
    "name":"Charcoal House",
    "lowercase":"charcoal house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21359,38.62169 ]
    },
    "properties": {
    "name":"Charleville Brewery and Tavern",
    "lowercase":"charleville brewery and tavern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20689018,38.6294847 ]
    },
    "properties": {
    "name":"Charley's Steakery",
    "lowercase":"charley's steakery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27352,38.61773 ]
    },
    "properties": {
    "name":"Charlie Gitto's",
    "lowercase":"charlie gitto's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2645299,38.64426 ]
    },
    "properties": {
    "name":"Chase Club",
    "lowercase":"chase club"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3623691,38.6993947 ]
    },
    "properties": {
    "name":"Chef Ma's Chinese Gourmet Restaurant",
    "lowercase":"chef ma's chinese gourmet restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29425,38.59471 ]
    },
    "properties": {
    "name":"Chick-fil-A Hampton & Chippewa",
    "lowercase":"chick-fil-a hampton & chippewa"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36225,38.70245 ]
    },
    "properties": {
    "name":"Chimi's Fresh-Mex",
    "lowercase":"chimi's fresh-mex"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25353,38.57011 ]
    },
    "properties": {
    "name":"Chimichanga's Mexican Restaurant",
    "lowercase":"chimichanga's mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.333501,38.5725456 ]
    },
    "properties": {
    "name":"China 1",
    "lowercase":"china 1"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2686201,38.6124165 ]
    },
    "properties": {
    "name":"China Dish",
    "lowercase":"china dish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2847,38.57007 ]
    },
    "properties": {
    "name":"China Garden",
    "lowercase":"china garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4287019,38.6956653 ]
    },
    "properties": {
    "name":"China Inn",
    "lowercase":"china inn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3396048,38.6724746 ]
    },
    "properties": {
    "name":"China King",
    "lowercase":"china king"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26219,38.55772 ]
    },
    "properties": {
    "name":"China King",
    "lowercase":"china king"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2505187,38.591668 ]
    },
    "properties": {
    "name":"China King",
    "lowercase":"china king"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2926451,38.5485182 ]
    },
    "properties": {
    "name":"China Wok",
    "lowercase":"china wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2984947,38.6197227 ]
    },
    "properties": {
    "name":"China Wok Express",
    "lowercase":"china wok express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30561,38.63301 ]
    },
    "properties": {
    "name":"Chinese Express",
    "lowercase":"chinese express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35069091,38.61159636 ]
    },
    "properties": {
    "name":"Chinese Express",
    "lowercase":"chinese express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29759789,38.6550023 ]
    },
    "properties": {
    "name":"Chinese Noodle Café",
    "lowercase":"chinese noodle café"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24654262,38.64015721 ]
    },
    "properties": {
    "name":"Chong Wah",
    "lowercase":"chong wah"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1974,38.62848 ]
    },
    "properties": {
    "name":"Chris' @ The Docket",
    "lowercase":"chris' @ the docket"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28949,38.60927 ]
    },
    "properties": {
    "name":"Chris' Pancake & Dining",
    "lowercase":"chris' pancake & dining"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.354098,38.713298 ]
    },
    "properties": {
    "name":"Chuck A Burger",
    "lowercase":"chuck a burger"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26343,38.53287 ]
    },
    "properties": {
    "name":"Cibare Italian Kitchen",
    "lowercase":"cibare italian kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.429601,38.601166 ]
    },
    "properties": {
    "name":"Circle 7 Ranch",
    "lowercase":"circle 7 ranch"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40801,38.57683 ]
    },
    "properties": {
    "name":"Citizen Kane's Steak House",
    "lowercase":"citizen kane's steak house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3410958,38.6516397 ]
    },
    "properties": {
    "name":"City Coffeehouse & Crêperie",
    "lowercase":"city coffeehouse & crêperie"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24275688,38.60163728 ]
    },
    "properties": {
    "name":"City Diner",
    "lowercase":"city diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.261621,38.60242 ]
    },
    "properties": {
    "name":"City Park Grill",
    "lowercase":"city park grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3384666,38.6474253 ]
    },
    "properties": {
    "name":"CJ Muggs",
    "lowercase":"cj muggs"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19503,38.62371 ]
    },
    "properties": {
    "name":"Clark Street Grill",
    "lowercase":"clark street grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40610489,38.58251489 ]
    },
    "properties": {
    "name":"Club Taco",
    "lowercase":"club taco"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2616978,38.64463205 ]
    },
    "properties": {
    "name":"Coffee Cartel",
    "lowercase":"coffee cartel"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32645687,38.64848017 ]
    },
    "properties": {
    "name":"Colleen's",
    "lowercase":"colleen's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29688098,38.62043492 ]
    },
    "properties": {
    "name":"Colombo's Cafe & Tavern",
    "lowercase":"colombo's cafe & tavern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.432699,38.7044521 ]
    },
    "properties": {
    "name":"Companion Cafe - Saint Louis",
    "lowercase":"companion cafe - saint louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3902559,38.6383685 ]
    },
    "properties": {
    "name":"Companion Ladue Cafe",
    "lowercase":"companion ladue cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.197778,38.627222 ]
    },
    "properties": {
    "name":"Completely Sauced",
    "lowercase":"completely sauced"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26192643,38.62633646 ]
    },
    "properties": {
    "name":"Confluence Kombucha",
    "lowercase":"confluence kombucha"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.195935,38.631274 ]
    },
    "properties": {
    "name":"Copia Restaurant & Wine Garden",
    "lowercase":"copia restaurant & wine garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28436,38.58748 ]
    },
    "properties": {
    "name":"Copper Pig",
    "lowercase":"copper pig"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25783,38.64428 ]
    },
    "properties": {
    "name":"Cork n' Slice",
    "lowercase":"cork n' slice"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30652909,38.65624555 ]
    },
    "properties": {
    "name":"Corner 17",
    "lowercase":"corner 17"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2876206,38.5718322 ]
    },
    "properties": {
    "name":"Corner Bistro",
    "lowercase":"corner bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19994,38.66077 ]
    },
    "properties": {
    "name":"Cornerstone Cafe",
    "lowercase":"cornerstone cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25996439,38.67668755 ]
    },
    "properties": {
    "name":"Country Girl's Pie Shop",
    "lowercase":"country girl's pie shop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28757,38.6287499 ]
    },
    "properties": {
    "name":"Courtesy Diner",
    "lowercase":"courtesy diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.339645,38.567272 ]
    },
    "properties": {
    "name":"Courtesy Diner",
    "lowercase":"courtesy diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26951373,38.60353097 ]
    },
    "properties": {
    "name":"Courtesy Diner",
    "lowercase":"courtesy diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33235,38.6049999 ]
    },
    "properties": {
    "name":"Cousin Hugo's Bar & Grill",
    "lowercase":"cousin hugo's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23415,38.60887 ]
    },
    "properties": {
    "name":"Crafted",
    "lowercase":"crafted"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23544,38.62197 ]
    },
    "properties": {
    "name":"Crave Coffee House",
    "lowercase":"crave coffee house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36782,38.60892 ]
    },
    "properties": {
    "name":"Crazy Bowls & Wraps",
    "lowercase":"crazy bowls & wraps"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32719,38.64879 ]
    },
    "properties": {
    "name":"Crazy Bowls & Wraps",
    "lowercase":"crazy bowls & wraps"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.240563,38.638414 ]
    },
    "properties": {
    "name":"Crazy Bowls & Wraps",
    "lowercase":"crazy bowls & wraps"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25805669,38.60210038 ]
    },
    "properties": {
    "name":"Crispy Edge",
    "lowercase":"crispy edge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.243922,38.559845 ]
    },
    "properties": {
    "name":"Crossbones On Broadway",
    "lowercase":"crossbones on broadway"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19812,38.65144 ]
    },
    "properties": {
    "name":"Crown Candy Kitchen",
    "lowercase":"crown candy kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44032101,38.67138772 ]
    },
    "properties": {
    "name":"Crushed Red",
    "lowercase":"crushed red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.339802,38.652134 ]
    },
    "properties": {
    "name":"Crushed Red",
    "lowercase":"crushed red"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2404238,38.5765406 ]
    },
    "properties": {
    "name":"Crusoe's Original",
    "lowercase":"crusoe's original"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26133967,38.64486638 ]
    },
    "properties": {
    "name":"Culpeppers - Central West End",
    "lowercase":"culpeppers - central west end"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.280327,38.610248 ]
    },
    "properties": {
    "name":"Cunetto House of Pasta",
    "lowercase":"cunetto house of pasta"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28070831,38.5406189 ]
    },
    "properties": {
    "name":"Cusanellis",
    "lowercase":"cusanellis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34113535,38.59122372 ]
    },
    "properties": {
    "name":"Cyrano's",
    "lowercase":"cyrano's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2072451,38.6027348 ]
    },
    "properties": {
    "name":"D's Place",
    "lowercase":"d's place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29378,38.5813599 ]
    },
    "properties": {
    "name":"Dado's Cafe",
    "lowercase":"dado's cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.357275,38.672903 ]
    },
    "properties": {
    "name":"Dao Tien",
    "lowercase":"dao tien"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26698965,38.5816418 ]
    },
    "properties": {
    "name":"Das Bevo",
    "lowercase":"das bevo"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35703348,38.52422904 ]
    },
    "properties": {
    "name":"Dave's Diner",
    "lowercase":"dave's diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19957834,38.60956421 ]
    },
    "properties": {
    "name":"Db's Sports Bar",
    "lowercase":"db's sports bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4383939,38.7143951 ]
    },
    "properties": {
    "name":"DD Mau Vietnamese Eatery",
    "lowercase":"dd mau vietnamese eatery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3584596,38.6742249 ]
    },
    "properties": {
    "name":"De Palm Tree",
    "lowercase":"de palm tree"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25812531,38.70039749 ]
    },
    "properties": {
    "name":"Debbie's Delights",
    "lowercase":"debbie's delights"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31916,38.63342 ]
    },
    "properties": {
    "name":"Del Pietro's",
    "lowercase":"del pietro's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19616,38.63178093 ]
    },
    "properties": {
    "name":"Delfino's Pizza Brixx & Barley",
    "lowercase":"delfino's pizza brixx & barley"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28848164,38.62366443 ]
    },
    "properties": {
    "name":"Denny's",
    "lowercase":"denny's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.337833,38.65904 ]
    },
    "properties": {
    "name":"Dewey's Pizza",
    "lowercase":"dewey's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35365,38.59211 ]
    },
    "properties": {
    "name":"Dewey's Pizza",
    "lowercase":"dewey's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40606,38.58211 ]
    },
    "properties": {
    "name":"Deweys Pizza",
    "lowercase":"deweys pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.239635,38.635647 ]
    },
    "properties": {
    "name":"Diablitos Cantina",
    "lowercase":"diablitos cantina"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.347204,38.624224 ]
    },
    "properties": {
    "name":"Dickey's Barbecue Pit",
    "lowercase":"dickey's barbecue pit"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23154449,38.61949158 ]
    },
    "properties": {
    "name":"Diners Delight",
    "lowercase":"diners delight"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33794,38.56892 ]
    },
    "properties": {
    "name":"Dingho",
    "lowercase":"dingho"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44680487,38.70132047 ]
    },
    "properties": {
    "name":"Dino's Deli",
    "lowercase":"dino's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33643292,38.62634645 ]
    },
    "properties": {
    "name":"Dirty Dogz - Brentwood",
    "lowercase":"dirty dogz - brentwood"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23698892,38.63348672 ]
    },
    "properties": {
    "name":"Dixon's Smoke Company",
    "lowercase":"dixon's smoke company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27356,38.57048 ]
    },
    "properties": {
    "name":"DOC Haus",
    "lowercase":"doc haus"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27123,38.61567 ]
    },
    "properties": {
    "name":"Dominic's Restaurant",
    "lowercase":"dominic's restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34133,38.64741 ]
    },
    "properties": {
    "name":"Dominic's Trattoria",
    "lowercase":"dominic's trattoria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23036,38.59376 ]
    },
    "properties": {
    "name":"Don Carlos Restaurant",
    "lowercase":"don carlos restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25343482,38.54026817 ]
    },
    "properties": {
    "name":"Doughboy's Wood Fired Pizza",
    "lowercase":"doughboy's wood fired pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3043399,38.6557762 ]
    },
    "properties": {
    "name":"Doughocracy",
    "lowercase":"doughocracy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4408244,38.60192165 ]
    },
    "properties": {
    "name":"Down Under Restaurant & Pub",
    "lowercase":"down under restaurant & pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.248495,38.583357 ]
    },
    "properties": {
    "name":"Dragons Place",
    "lowercase":"dragons place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26114,38.64913 ]
    },
    "properties": {
    "name":"Dressel's Public House",
    "lowercase":"dressel's public house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19133044,38.62380113 ]
    },
    "properties": {
    "name":"Drunken Fish",
    "lowercase":"drunken fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44643372,38.70095051 ]
    },
    "properties": {
    "name":"Drunken Fish",
    "lowercase":"drunken fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2616629,38.64493786 ]
    },
    "properties": {
    "name":"Drunken Fish",
    "lowercase":"drunken fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21300852,38.65589642 ]
    },
    "properties": {
    "name":"Du Kum Inn",
    "lowercase":"du kum inn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2074,38.60802 ]
    },
    "properties": {
    "name":"Duke's",
    "lowercase":"duke's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33840559,38.59172456 ]
    },
    "properties": {
    "name":"Dvin Restaurant",
    "lowercase":"dvin restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.261106,38.602746 ]
    },
    "properties": {
    "name":"Eat Sandwiches",
    "lowercase":"eat sandwiches"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19547,38.6172899 ]
    },
    "properties": {
    "name":"Eat-Rite Diner",
    "lowercase":"eat-rite diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29866,38.65568 ]
    },
    "properties": {
    "name":"Eclipse Restaurant",
    "lowercase":"eclipse restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29411092,38.5794801 ]
    },
    "properties": {
    "name":"Edibles & Essentials",
    "lowercase":"edibles & essentials"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21972656,38.60609055 ]
    },
    "properties": {
    "name":"Egg",
    "lowercase":"egg"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3901749,38.5579231 ]
    },
    "properties": {
    "name":"El Agave",
    "lowercase":"el agave"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26148587,38.64521854 ]
    },
    "properties": {
    "name":"El Burro Loco",
    "lowercase":"el burro loco"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34691,38.70842 ]
    },
    "properties": {
    "name":"El Comal",
    "lowercase":"el comal"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.37757,38.60569 ]
    },
    "properties": {
    "name":"El Indio",
    "lowercase":"el indio"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.314888,38.5852623 ]
    },
    "properties": {
    "name":"El Maguey",
    "lowercase":"el maguey"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.272435,38.5926588 ]
    },
    "properties": {
    "name":"El Maguey",
    "lowercase":"el maguey"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36279655,38.52357997 ]
    },
    "properties": {
    "name":"El Maguey Mexican Restaurant",
    "lowercase":"el maguey mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3671654,38.7008467 ]
    },
    "properties": {
    "name":"El Mexiquense",
    "lowercase":"el mexiquense"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29947,38.60223 ]
    },
    "properties": {
    "name":"El Paisano Mexican Restaurant",
    "lowercase":"el paisano mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.292183,38.602261 ]
    },
    "properties": {
    "name":"El Tapatio",
    "lowercase":"el tapatio"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2555,38.61935 ]
    },
    "properties": {
    "name":"Elaia",
    "lowercase":"elaia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2247,38.59342 ]
    },
    "properties": {
    "name":"Elaine's Classic American Sandwiches",
    "lowercase":"elaine's classic american sandwiches"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2077548,38.6149034 ]
    },
    "properties": {
    "name":"Element Restaurant and Lounge",
    "lowercase":"element restaurant and lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21291941,38.61960417 ]
    },
    "properties": {
    "name":"Eleven Eleven",
    "lowercase":"eleven eleven"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2548228,38.6405258 ]
    },
    "properties": {
    "name":"Ellsworth Cafe",
    "lowercase":"ellsworth cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1941352,38.640361 ]
    },
    "properties": {
    "name":"Empress Express",
    "lowercase":"empress express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27836775,38.57519011 ]
    },
    "properties": {
    "name":"Eni's Pizza",
    "lowercase":"eni's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27513309,38.6147512 ]
    },
    "properties": {
    "name":"Eovaldi's Deli & Catering",
    "lowercase":"eovaldi's deli & catering"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20329,38.61049 ]
    },
    "properties": {
    "name":"Epic Pizza and Subs",
    "lowercase":"epic pizza and subs"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2195799,38.60216 ]
    },
    "properties": {
    "name":"Ernesto's Wine Bar",
    "lowercase":"ernesto's wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29410992,38.5794704 ]
    },
    "properties": {
    "name":"Essentially Fries",
    "lowercase":"essentially fries"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.260482,38.650036 ]
    },
    "properties": {
    "name":"Evangeline's Bistro and Music House",
    "lowercase":"evangeline's bistro and music house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25193,38.62794 ]
    },
    "properties": {
    "name":"Everest Cafe & Bar",
    "lowercase":"everest cafe & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2927799,38.5989099 ]
    },
    "properties": {
    "name":"F&B's Eatery",
    "lowercase":"f&b's eatery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30354,38.6185199 ]
    },
    "properties": {
    "name":"Failoni's Restaurant & Bar",
    "lowercase":"failoni's restaurant & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3675238,38.6733516 ]
    },
    "properties": {
    "name":"Fallon's Bar & Grill",
    "lowercase":"fallon's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19498173,38.62671586 ]
    },
    "properties": {
    "name":"Farm Truk",
    "lowercase":"farm truk"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30427,38.60415 ]
    },
    "properties": {
    "name":"Farmhaus Restaurant",
    "lowercase":"farmhaus restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26352,38.63752 ]
    },
    "properties": {
    "name":"Farmstead",
    "lowercase":"farmstead"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3649202,38.6093427 ]
    },
    "properties": {
    "name":"Farotto's Pasta & Pizzeria",
    "lowercase":"farotto's pasta & pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2739125,38.6114474 ]
    },
    "properties": {
    "name":"Favazza's",
    "lowercase":"favazza's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24414539,38.58077377 ]
    },
    "properties": {
    "name":"Feasting Fox Restaurant & Pub",
    "lowercase":"feasting fox restaurant & pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29311,38.6288399 ]
    },
    "properties": {
    "name":"Felix's Pizza Pub",
    "lowercase":"felix's pizza pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.361726,38.520803 ]
    },
    "properties": {
    "name":"Feraros Jersey Style Pizza",
    "lowercase":"feraros jersey style pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2916577,38.5289887 ]
    },
    "properties": {
    "name":"Fergie's Bar & Restaurant",
    "lowercase":"fergie's bar & restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25070815,38.61424262 ]
    },
    "properties": {
    "name":"Fiddlehead Fern Cafe",
    "lowercase":"fiddlehead fern cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22947906,38.63757159 ]
    },
    "properties": {
    "name":"Field House Pub & Grill",
    "lowercase":"field house pub & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.37791,38.605 ]
    },
    "properties": {
    "name":"Filomena's Italian Kitchen",
    "lowercase":"filomena's italian kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.197778,38.627222 ]
    },
    "properties": {
    "name":"Finger Foodies",
    "lowercase":"finger foodies"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25134,38.62743 ]
    },
    "properties": {
    "name":"Firecracker Pizza & Beer",
    "lowercase":"firecracker pizza & beer"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31880188,38.5110817 ]
    },
    "properties": {
    "name":"Firehouse Bar & Grill St. Louis",
    "lowercase":"firehouse bar & grill st. louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44227904,38.66914004 ]
    },
    "properties": {
    "name":"First Watch",
    "lowercase":"first watch"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33998,38.65078 ]
    },
    "properties": {
    "name":"First Watch",
    "lowercase":"first watch"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.341183,38.6290751 ]
    },
    "properties": {
    "name":"Fit-Flavors",
    "lowercase":"fit-flavors"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4397405,38.6709082 ]
    },
    "properties": {
    "name":"Fit-Flavors",
    "lowercase":"fit-flavors"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30554962,38.65626144 ]
    },
    "properties": {
    "name":"Fitz's",
    "lowercase":"fitz's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24832,38.61565 ]
    },
    "properties": {
    "name":"Five Aces Bar-B-Que",
    "lowercase":"five aces bar-b-que"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2478554,38.640378 ]
    },
    "properties": {
    "name":"Five Guys",
    "lowercase":"five guys"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19926,38.63197 ]
    },
    "properties": {
    "name":"Flannery's Pub",
    "lowercase":"flannery's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.446686,38.672511 ]
    },
    "properties": {
    "name":"Flavor of India",
    "lowercase":"flavor of india"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.406006,38.627734 ]
    },
    "properties": {
    "name":"Fleming's Prime Steakhouse & Wine Bar",
    "lowercase":"fleming's prime steakhouse & wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1961899,38.6231117 ]
    },
    "properties": {
    "name":"Flying Saucer",
    "lowercase":"flying saucer"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32079,38.60494 ]
    },
    "properties": {
    "name":"Foley's",
    "lowercase":"foley's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28617,38.61794 ]
    },
    "properties": {
    "name":"Forest Park Cafe & Lounge",
    "lowercase":"forest park cafe & lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2842088,38.6435549 ]
    },
    "properties": {
    "name":"Forest Perk Cafe",
    "lowercase":"forest perk cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29624728,38.65468228 ]
    },
    "properties": {
    "name":"Fork & Stix",
    "lowercase":"fork & stix"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33753204,38.61148071 ]
    },
    "properties": {
    "name":"Fort Taco",
    "lowercase":"fort taco"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3206809,38.5661267 ]
    },
    "properties": {
    "name":"Fortel's Pizza Den",
    "lowercase":"fortel's pizza den"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4425354,38.66712189 ]
    },
    "properties": {
    "name":"Fortel's Pizza Den",
    "lowercase":"fortel's pizza den"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3081,38.58914 ]
    },
    "properties": {
    "name":"Fortune Express",
    "lowercase":"fortune express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3169301,38.6132488 ]
    },
    "properties": {
    "name":"Foundation Grounds Coffeehouse & Cafe",
    "lowercase":"foundation grounds coffeehouse & cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19195098,38.62382032 ]
    },
    "properties": {
    "name":"Fox Sports Midwest Live",
    "lowercase":"fox sports midwest live"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.318997,38.631246 ]
    },
    "properties": {
    "name":"Fozzie's Sandwich Emporium",
    "lowercase":"fozzie's sandwich emporium"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4256654,38.5996579 ]
    },
    "properties": {
    "name":"Fozzie's Sandwich Emporium",
    "lowercase":"fozzie's sandwich emporium"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3486982,38.6202006 ]
    },
    "properties": {
    "name":"Frank Papa's Ristorante",
    "lowercase":"frank papa's ristorante"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22955,38.59354 ]
    },
    "properties": {
    "name":"Frankly on Cherokee",
    "lowercase":"frankly on cherokee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2163999,38.59907 ]
    },
    "properties": {
    "name":"Frazer's Restaurant & Lounge",
    "lowercase":"frazer's restaurant & lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.428794,38.6715376 ]
    },
    "properties": {
    "name":"Fred and Ricky's Plant Delicious Foods",
    "lowercase":"fred and ricky's plant delicious foods"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44117643,38.70882163 ]
    },
    "properties": {
    "name":"Fred and Ricky's Plant Delicious Foods",
    "lowercase":"fred and ricky's plant delicious foods"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33721959,38.66000496 ]
    },
    "properties": {
    "name":"Frida's",
    "lowercase":"frida's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2889264,38.6773486 ]
    },
    "properties": {
    "name":"Fried Rice Kitchen",
    "lowercase":"fried rice kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28569,38.545021 ]
    },
    "properties": {
    "name":"Friendly's Bar And Grill",
    "lowercase":"friendly's bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25384694,38.59454423 ]
    },
    "properties": {
    "name":"Friendly's Restaurant & Bar",
    "lowercase":"friendly's restaurant & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22165,38.60965 ]
    },
    "properties": {
    "name":"Fritanga",
    "lowercase":"fritanga"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4080765,38.5542359 ]
    },
    "properties": {
    "name":"Fuddruckers",
    "lowercase":"fuddruckers"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44695391,38.70150638 ]
    },
    "properties": {
    "name":"Fuzzy's Taco Shop",
    "lowercase":"fuzzy's taco shop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3434829,38.5674078 ]
    },
    "properties": {
    "name":"Fuzzy's Taco Shop",
    "lowercase":"fuzzy's taco shop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26149621,38.64456647 ]
    },
    "properties": {
    "name":"Gamlin Whiskey House",
    "lowercase":"gamlin whiskey house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.343071,38.6525707 ]
    },
    "properties": {
    "name":"Garbanzo's Mediterranean Grill",
    "lowercase":"garbanzo's mediterranean grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36194,38.70394 ]
    },
    "properties": {
    "name":"George Rivolo Diner",
    "lowercase":"george rivolo diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2769299,38.61692 ]
    },
    "properties": {
    "name":"Gian-Tony's On The Hill",
    "lowercase":"gian-tony's on the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1924885,38.6266808 ]
    },
    "properties": {
    "name":"Gio's Ristorante' & Bar",
    "lowercase":"gio's ristorante' & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2768,38.6174 ]
    },
    "properties": {
    "name":"Gioia's Deli",
    "lowercase":"gioia's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.194,38.62841 ]
    },
    "properties": {
    "name":"Gioia's Deli",
    "lowercase":"gioia's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44344282,38.6670562 ]
    },
    "properties": {
    "name":"Gioia's Deli",
    "lowercase":"gioia's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3504344,38.653356 ]
    },
    "properties": {
    "name":"Giovanni's Kitchen",
    "lowercase":"giovanni's kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27265,38.61809 ]
    },
    "properties": {
    "name":"Giovanni's On the Hill",
    "lowercase":"giovanni's on the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29619,38.65542 ]
    },
    "properties": {
    "name":"Gokul Indian Restaurant",
    "lowercase":"gokul indian restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24269,38.58836 ]
    },
    "properties": {
    "name":"Golliday's Bar and Grill",
    "lowercase":"golliday's bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2563,38.61939 ]
    },
    "properties": {
    "name":"Good Fortune",
    "lowercase":"good fortune"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2079773,38.6018982 ]
    },
    "properties": {
    "name":"Good Luck Bar and Grill",
    "lowercase":"good luck bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.243334,38.639283 ]
    },
    "properties": {
    "name":"Goody Cafe",
    "lowercase":"goody cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27301025,38.68684006 ]
    },
    "properties": {
    "name":"Goody Goody Diner",
    "lowercase":"goody goody diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23077,38.58646 ]
    },
    "properties": {
    "name":"Gooseberries",
    "lowercase":"gooseberries"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20171419,38.63438308 ]
    },
    "properties": {
    "name":"Gourmet Soul Restaurant and Catering",
    "lowercase":"gourmet soul restaurant and catering"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25662,38.62675 ]
    },
    "properties": {
    "name":"Grace Meat + Three",
    "lowercase":"grace meat + three"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.43349208,38.6721679 ]
    },
    "properties": {
    "name":"Granite City Food & Brewery",
    "lowercase":"granite city food & brewery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40813593,38.64357524 ]
    },
    "properties": {
    "name":"Grassi's Ristorante & Deli",
    "lowercase":"grassi's ristorante & deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2567,38.58786 ]
    },
    "properties": {
    "name":"Grbic Restaurant",
    "lowercase":"grbic restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40753,38.58156 ]
    },
    "properties": {
    "name":"Great Harvest Bread Company",
    "lowercase":"great harvest bread company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20096,38.67057 ]
    },
    "properties": {
    "name":"Gregg's Bar & Grill",
    "lowercase":"gregg's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23323038,38.60151112 ]
    },
    "properties": {
    "name":"Grove East Provisions",
    "lowercase":"grove east provisions"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29677,38.65487 ]
    },
    "properties": {
    "name":"Guerrilla Street Food",
    "lowercase":"guerrilla street food"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.281299,38.621431 ]
    },
    "properties": {
    "name":"Guerrilla Street Food",
    "lowercase":"guerrilla street food"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2703499,38.61748 ]
    },
    "properties": {
    "name":"Guido's Pizzeria & Tapas",
    "lowercase":"guido's pizzeria & tapas"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35851479,38.66029492 ]
    },
    "properties": {
    "name":"Guo Bin Chinese Restaurant",
    "lowercase":"guo bin chinese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2174225,38.5967484 ]
    },
    "properties": {
    "name":"Gus' Pretzels",
    "lowercase":"gus' pretzels"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32110995,38.61212871 ]
    },
    "properties": {
    "name":"Gus's World Famous Fried Chicken",
    "lowercase":"gus's world famous fried chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30072,38.65584 ]
    },
    "properties": {
    "name":"Gyro Grill",
    "lowercase":"gyro grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29798,38.65507 ]
    },
    "properties": {
    "name":"Gyro House",
    "lowercase":"gyro house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23390198,38.58724213 ]
    },
    "properties": {
    "name":"H & M Best Fried Fish",
    "lowercase":"h & m best fried fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.371935,38.606789 ]
    },
    "properties": {
    "name":"Hacienda Mexican Restaurant",
    "lowercase":"hacienda mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34285,38.6523664 ]
    },
    "properties": {
    "name":"Half & Half",
    "lowercase":"half & half"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36193,38.59299 ]
    },
    "properties": {
    "name":"Half & Half",
    "lowercase":"half & half"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20504,38.60663 ]
    },
    "properties": {
    "name":"Hammerstone's",
    "lowercase":"hammerstone's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.251275,38.627945 ]
    },
    "properties": {
    "name":"HandleBar",
    "lowercase":"handlebar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3382,38.56864 ]
    },
    "properties": {
    "name":"Happy Joe's Pizza & Ice Cream Parlor",
    "lowercase":"happy joe's pizza & ice cream parlor"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20820541,38.62760895 ]
    },
    "properties": {
    "name":"Hard Rock Cafe",
    "lowercase":"hard rock cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20704,38.60724 ]
    },
    "properties": {
    "name":"Harpos",
    "lowercase":"harpos"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25241,38.60247 ]
    },
    "properties": {
    "name":"Hartford Coffee Co",
    "lowercase":"hartford coffee co"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.37467342,38.68850474 ]
    },
    "properties": {
    "name":"Haveli Indian Restaurant",
    "lowercase":"haveli indian restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25959511,38.66504357 ]
    },
    "properties": {
    "name":"Hawaiian Grill",
    "lowercase":"hawaiian grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4064099,38.55297 ]
    },
    "properties": {
    "name":"Helen Fitzgeralds",
    "lowercase":"helen fitzgeralds"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34181213,38.65180206 ]
    },
    "properties": {
    "name":"Herbie’s Restraurant",
    "lowercase":"herbie’s restraurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.305623,38.632134 ]
    },
    "properties": {
    "name":"Hi-Pointe Drive-In",
    "lowercase":"hi-pointe drive-in"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.422,38.7130409 ]
    },
    "properties": {
    "name":"Hilary's Roadhouse Diner",
    "lowercase":"hilary's roadhouse diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.37464,38.60606 ]
    },
    "properties": {
    "name":"Himalayan Hut",
    "lowercase":"himalayan hut"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2715599,38.59521 ]
    },
    "properties": {
    "name":"Himalayan Yeti",
    "lowercase":"himalayan yeti"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19980658,38.63253509 ]
    },
    "properties": {
    "name":"Hiro Asian Kitchen",
    "lowercase":"hiro asian kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21846771,38.60638046 ]
    },
    "properties": {
    "name":"Hodak's",
    "lowercase":"hodak's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36283955,38.52359431 ]
    },
    "properties": {
    "name":"Hokkaido Supreme Buffet",
    "lowercase":"hokkaido supreme buffet"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2642746,38.58135605 ]
    },
    "properties": {
    "name":"Holy Crepe",
    "lowercase":"holy crepe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25861,38.63866 ]
    },
    "properties": {
    "name":"Hon's Wok",
    "lowercase":"hon's wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4074,38.56698 ]
    },
    "properties": {
    "name":"Honey Pit",
    "lowercase":"honey pit"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32798655,38.6831966 ]
    },
    "properties": {
    "name":"Hook Fish Chicken & Grill",
    "lowercase":"hook fish chicken & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19265,38.61987 ]
    },
    "properties": {
    "name":"Hot City Franks",
    "lowercase":"hot city franks"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33480072,38.62321091 ]
    },
    "properties": {
    "name":"Houlihan's",
    "lowercase":"houlihan's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3559915,38.6611271 ]
    },
    "properties": {
    "name":"House Of India",
    "lowercase":"house of india"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.378651,38.53775 ]
    },
    "properties": {
    "name":"Hsu's Hunan Yu",
    "lowercase":"hsu's hunan yu"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22482,38.63582 ]
    },
    "properties": {
    "name":"Hugo's Pizzeria",
    "lowercase":"hugo's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34812164,38.6167984 ]
    },
    "properties": {
    "name":"Hunan Wok",
    "lowercase":"hunan wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.338626,38.589913 ]
    },
    "properties": {
    "name":"Hwy 61 Roadhouse & Kitchen",
    "lowercase":"hwy 61 roadhouse & kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.334444,38.642803 ]
    },
    "properties": {
    "name":"I Fratellini",
    "lowercase":"i fratellini"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3786871,38.6742449 ]
    },
    "properties": {
    "name":"I Love Mr Sushi",
    "lowercase":"i love mr sushi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3104898,38.6470147 ]
    },
    "properties": {
    "name":"Ibby's Restaurant",
    "lowercase":"ibby's restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3443999,38.63829 ]
    },
    "properties": {
    "name":"IHOP",
    "lowercase":"ihop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4402,38.67104 ]
    },
    "properties": {
    "name":"Il Bel Lago",
    "lowercase":"il bel lago"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28664398,38.63058853 ]
    },
    "properties": {
    "name":"Imo's Pizza",
    "lowercase":"imo's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19104,38.62518 ]
    },
    "properties": {
    "name":"Imo's Pizza",
    "lowercase":"imo's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2614975,38.60007095 ]
    },
    "properties": {
    "name":"Imo's Pizza",
    "lowercase":"imo's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2621829,38.6412304 ]
    },
    "properties": {
    "name":"India Rasoi",
    "lowercase":"india rasoi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2298115,38.5884901 ]
    },
    "properties": {
    "name":"Iowa Buffet",
    "lowercase":"iowa buffet"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3547093,38.6738852 ]
    },
    "properties": {
    "name":"Irie Eats",
    "lowercase":"irie eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.218867,38.592205 ]
    },
    "properties": {
    "name":"Irish Corner Pub",
    "lowercase":"irish corner pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.271,38.61642 ]
    },
    "properties": {
    "name":"J Devoti Trattoria",
    "lowercase":"j devoti trattoria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44748,38.60187 ]
    },
    "properties": {
    "name":"J Gilbert's Wood-Fired Steaks & Seafood St Louis",
    "lowercase":"j gilbert's wood-fired steaks & seafood st louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27723,38.61537 ]
    },
    "properties": {
    "name":"J. Smugs GastroPit",
    "lowercase":"j. smugs gastropit"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26764,38.58129 ]
    },
    "properties": {
    "name":"J's Pitaria",
    "lowercase":"j's pitaria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1947847,38.62915277 ]
    },
    "properties": {
    "name":"Jack Patrick's Bar & Grill",
    "lowercase":"jack patrick's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24201202,38.65550613 ]
    },
    "properties": {
    "name":"Jaden's Diner",
    "lowercase":"jaden's diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40821854,38.5622574 ]
    },
    "properties": {
    "name":"Jason's Deli",
    "lowercase":"jason's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2311179,38.638457 ]
    },
    "properties": {
    "name":"Jazz St. Louis",
    "lowercase":"jazz st. louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2930298,38.5974388 ]
    },
    "properties": {
    "name":"Jet's Pizza",
    "lowercase":"jet's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3622029,38.593022 ]
    },
    "properties": {
    "name":"Jet's Pizza",
    "lowercase":"jet's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29332,38.58046 ]
    },
    "properties": {
    "name":"JJ Twig's Pizza & Pub",
    "lowercase":"jj twig's pizza & pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2079399,38.6071 ]
    },
    "properties": {
    "name":"Joanie's Pizzeria",
    "lowercase":"joanie's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.357811,38.564723 ]
    },
    "properties": {
    "name":"Joe Boccardi's Ristorante",
    "lowercase":"joe boccardi's ristorante"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2807799,38.61323 ]
    },
    "properties": {
    "name":"Joe Fassi Sandwich Factory",
    "lowercase":"joe fassi sandwich factory"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.287,38.61243 ]
    },
    "properties": {
    "name":"Joey B's On The Hill",
    "lowercase":"joey b's on the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36214598,38.52357036 ]
    },
    "properties": {
    "name":"Joey Bs",
    "lowercase":"joey bs"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21016,38.607565 ]
    },
    "properties": {
    "name":"John D. McGurk's Irish Pub",
    "lowercase":"john d. mcgurk's irish pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33786774,38.65102005 ]
    },
    "properties": {
    "name":"John P Fields",
    "lowercase":"john p fields"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33504486,38.61148071 ]
    },
    "properties": {
    "name":"Joy Luck Buffet",
    "lowercase":"joy luck buffet"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20020075,38.61055903 ]
    },
    "properties": {
    "name":"Juan More Tamale",
    "lowercase":"juan more tamale"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20020075,38.61055903 ]
    },
    "properties": {
    "name":"Julia's Market Cafe",
    "lowercase":"julia's market cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24972274,38.64275766 ]
    },
    "properties": {
    "name":"Juniper",
    "lowercase":"juniper"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.292191,38.654396 ]
    },
    "properties": {
    "name":"JUST Chicken",
    "lowercase":"just chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27622595,38.53386152 ]
    },
    "properties": {
    "name":"Kabul Express STL",
    "lowercase":"kabul express stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22436523,38.59334946 ]
    },
    "properties": {
    "name":"Kalbi Taco Shack",
    "lowercase":"kalbi taco shack"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19365,38.62694 ]
    },
    "properties": {
    "name":"Kaldi's Coffee",
    "lowercase":"kaldi's coffee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2630784,38.6350207 ]
    },
    "properties": {
    "name":"Kaldi's Coffee - Farrell",
    "lowercase":"kaldi's coffee - farrell"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30769183,38.6386892 ]
    },
    "properties": {
    "name":"Kaldi's Coffee Roasting Company",
    "lowercase":"kaldi's coffee roasting company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26328,38.64247 ]
    },
    "properties": {
    "name":"Kampai Sushi Bar",
    "lowercase":"kampai sushi bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.365922,38.608757 ]
    },
    "properties": {
    "name":"Katie's Pizza & Pasta Osteria",
    "lowercase":"katie's pizza & pasta osteria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30046354,38.64954569 ]
    },
    "properties": {
    "name":"Kayak's",
    "lowercase":"kayak's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2763,38.58429 ]
    },
    "properties": {
    "name":"Keeton's Double Play",
    "lowercase":"keeton's double play"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22250366,38.59316635 ]
    },
    "properties": {
    "name":"Kevin's Place",
    "lowercase":"kevin's place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2467099,38.55767 ]
    },
    "properties": {
    "name":"Kicker's Corner",
    "lowercase":"kicker's corner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24529,38.58665 ]
    },
    "properties": {
    "name":"Kim Ngan",
    "lowercase":"kim ngan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24278,38.6011499 ]
    },
    "properties": {
    "name":"King & I Thai",
    "lowercase":"king & i thai"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4055142,38.70416035 ]
    },
    "properties": {
    "name":"King Burrito",
    "lowercase":"king burrito"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36045319,38.56423765 ]
    },
    "properties": {
    "name":"King Edwards Fried Chicken",
    "lowercase":"king edwards fried chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26099,38.64506 ]
    },
    "properties": {
    "name":"Kingside Diner",
    "lowercase":"kingside diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.397127,38.599546 ]
    },
    "properties": {
    "name":"Kirkwood Brewhouse",
    "lowercase":"kirkwood brewhouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40661621,38.5827179 ]
    },
    "properties": {
    "name":"Kirkwood Ice & Fuel",
    "lowercase":"kirkwood ice & fuel"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40692,38.58684 ]
    },
    "properties": {
    "name":"Kirkwood Pizzeria",
    "lowercase":"kirkwood pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4056778,38.58253479 ]
    },
    "properties": {
    "name":"Kirkwood Station Brewing Company",
    "lowercase":"kirkwood station brewing company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.233536,38.60923 ]
    },
    "properties": {
    "name":"Kitchen House Coffee",
    "lowercase":"kitchen house coffee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.446441,38.701215 ]
    },
    "properties": {
    "name":"Kobe Steak House of Japan",
    "lowercase":"kobe steak house of japan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40868,38.67585 ]
    },
    "properties": {
    "name":"Kohn's Kosher Meat & Deli",
    "lowercase":"kohn's kosher meat & deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34882,38.61379 ]
    },
    "properties": {
    "name":"Kolache Factory",
    "lowercase":"kolache factory"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30144509,38.59511135 ]
    },
    "properties": {
    "name":"Kounter Kulture",
    "lowercase":"kounter kulture"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.405928,38.646671 ]
    },
    "properties": {
    "name":"Kreis Restaurant",
    "lowercase":"kreis restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40718079,38.64871816 ]
    },
    "properties": {
    "name":"Kreis'",
    "lowercase":"kreis'"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2556467,38.6197152 ]
    },
    "properties": {
    "name":"La Patisserie Chouquette",
    "lowercase":"la patisserie chouquette"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34829,38.66066 ]
    },
    "properties": {
    "name":"La Pizza",
    "lowercase":"la pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3509,38.67405 ]
    },
    "properties": {
    "name":"Lam's Garden",
    "lowercase":"lam's garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30273401,38.58321409 ]
    },
    "properties": {
    "name":"Lanai Coffee",
    "lowercase":"lanai coffee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2085311,38.62878199 ]
    },
    "properties": {
    "name":"Landry's Seafood House",
    "lowercase":"landry's seafood house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.213486,38.617748 ]
    },
    "properties": {
    "name":"Laredo on Lafayette Square",
    "lowercase":"laredo on lafayette square"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.321753,38.5647306 ]
    },
    "properties": {
    "name":"Las Fuentes",
    "lowercase":"las fuentes"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.319027,38.6127332 ]
    },
    "properties": {
    "name":"Las Palmas",
    "lowercase":"las palmas"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20634929,38.63387156 ]
    },
    "properties": {
    "name":"Las Palmas Mexican Restaurant",
    "lowercase":"las palmas mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.381886,38.690635 ]
    },
    "properties": {
    "name":"Las Palmas Mexican Restaurant",
    "lowercase":"las palmas mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2574943,38.6271854 ]
    },
    "properties": {
    "name":"Layla",
    "lowercase":"layla"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2941003,38.7023283 ]
    },
    "properties": {
    "name":"Lee's Famous Recipe Chicken",
    "lowercase":"lee's famous recipe chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27217,38.65287 ]
    },
    "properties": {
    "name":"Legacy Books and Cafe",
    "lowercase":"legacy books and cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27431,38.57703 ]
    },
    "properties": {
    "name":"Lemmons",
    "lowercase":"lemmons"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24263263,38.60074885 ]
    },
    "properties": {
    "name":"LemonGrass",
    "lowercase":"lemongrass"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21578,38.59321 ]
    },
    "properties": {
    "name":"Lemp Mansion Restaurant & Inn",
    "lowercase":"lemp mansion restaurant & inn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.392275,38.6372184 ]
    },
    "properties": {
    "name":"Lester's Restaurants",
    "lowercase":"lester's restaurants"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2400732,38.6394037 ]
    },
    "properties": {
    "name":"Like Home. Comme A La Maison",
    "lowercase":"like home. comme a la maison"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22990594,38.59373015 ]
    },
    "properties": {
    "name":"Lilly's Panaderia",
    "lowercase":"lilly's panaderia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2764802,38.5868288 ]
    },
    "properties": {
    "name":"Lily's Mexican Restaurant",
    "lowercase":"lily's mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33552851,38.62496737 ]
    },
    "properties": {
    "name":"Lion's Choice",
    "lowercase":"lion's choice"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26197604,38.64076223 ]
    },
    "properties": {
    "name":"Little Saigon Cafe",
    "lowercase":"little saigon cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.319753,38.610691 ]
    },
    "properties": {
    "name":"Living Room",
    "lowercase":"living room"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2605773,38.6484639 ]
    },
    "properties": {
    "name":"Llywelyn's Pub",
    "lowercase":"llywelyn's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3581193,38.59376124 ]
    },
    "properties": {
    "name":"Llywelyn's Pub",
    "lowercase":"llywelyn's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2032713,38.610071 ]
    },
    "properties": {
    "name":"Llywelyn's Pub",
    "lowercase":"llywelyn's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2102467,38.6279912 ]
    },
    "properties": {
    "name":"Lombardo's Trattoria",
    "lowercase":"lombardo's trattoria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2266888,38.61006256 ]
    },
    "properties": {
    "name":"Lona's Lil Eats",
    "lowercase":"lona's lil eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28652,38.67626 ]
    },
    "properties": {
    "name":"London's Wing House",
    "lowercase":"london's wing house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2747447,38.61776143 ]
    },
    "properties": {
    "name":"Lorenzo's Trattoria",
    "lowercase":"lorenzo's trattoria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29374,38.60687 ]
    },
    "properties": {
    "name":"LoRusso's Cucina",
    "lowercase":"lorusso's cucina"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23139,38.63964 ]
    },
    "properties": {
    "name":"LoRusso's on Grand",
    "lowercase":"lorusso's on grand"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30759,38.63841 ]
    },
    "properties": {
    "name":"Louie",
    "lowercase":"louie"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29294,38.58181 ]
    },
    "properties": {
    "name":"Louie's Pizza Company",
    "lowercase":"louie's pizza company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3367056,38.6498057 ]
    },
    "properties": {
    "name":"Louie's Wine Dive & Clayton Kitchen",
    "lowercase":"louie's wine dive & clayton kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3497235,38.6734823 ]
    },
    "properties": {
    "name":"Lu Lu Seafood",
    "lowercase":"lu lu seafood"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.198211,38.63181 ]
    },
    "properties": {
    "name":"Lucas Park Grille",
    "lowercase":"lucas park grille"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23151,38.63857 ]
    },
    "properties": {
    "name":"Lücha Mexican Soul Food",
    "lowercase":"lücha mexican soul food"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3403015,38.6290741 ]
    },
    "properties": {
    "name":"Lulu Chinese Express",
    "lowercase":"lulu chinese express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.37096225,38.60806009 ]
    },
    "properties": {
    "name":"Lulu's Chinese & Dim Sum",
    "lowercase":"lulu's chinese & dim sum"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.243148,38.598915 ]
    },
    "properties": {
    "name":"Lulu's Local Eatery",
    "lowercase":"lulu's local eatery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23397,38.59818 ]
    },
    "properties": {
    "name":"Lulu's Local Eatery",
    "lowercase":"lulu's local eatery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2118086,38.5999292 ]
    },
    "properties": {
    "name":"Lynch Street Tavern",
    "lowercase":"lynch street tavern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2930357,38.6277012 ]
    },
    "properties": {
    "name":"Mac's Local Eats",
    "lowercase":"mac's local eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3234673,38.5425149 ]
    },
    "properties": {
    "name":"Mackenzie Deli",
    "lowercase":"mackenzie deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28461,38.5862399 ]
    },
    "properties": {
    "name":"Macklind Avenue Deli",
    "lowercase":"macklind avenue deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34483781,38.63535353 ]
    },
    "properties": {
    "name":"Maggiano's Little Italy",
    "lowercase":"maggiano's little italy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2095871,38.62968445 ]
    },
    "properties": {
    "name":"Maggie O'Brien's",
    "lowercase":"maggie o'brien's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33753097,38.62752465 ]
    },
    "properties": {
    "name":"Mai Lee",
    "lowercase":"mai lee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.265179,38.582594 ]
    },
    "properties": {
    "name":"Majeed Mediterranean Restaurant",
    "lowercase":"majeed mediterranean restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27757487,38.5757527 ]
    },
    "properties": {
    "name":"Mak's Pub & Grub",
    "lowercase":"mak's pub & grub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28676771,38.53260945 ]
    },
    "properties": {
    "name":"Mama Mel's Pizzeria",
    "lowercase":"mama mel's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27784,38.61498 ]
    },
    "properties": {
    "name":"Mama Toscano's Ravioli",
    "lowercase":"mama toscano's ravioli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27499,38.61497 ]
    },
    "properties": {
    "name":"Mama's On the Hill",
    "lowercase":"mama's on the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.236129,38.6692 ]
    },
    "properties": {
    "name":"Mandarin Inn",
    "lowercase":"mandarin inn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24275,38.6016 ]
    },
    "properties": {
    "name":"Mangia Italiano",
    "lowercase":"mangia italiano"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19396173,38.63133252 ]
    },
    "properties": {
    "name":"Mango",
    "lowercase":"mango"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3366412,38.7025187 ]
    },
    "properties": {
    "name":"Maria's Deli",
    "lowercase":"maria's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2647934,38.58356094 ]
    },
    "properties": {
    "name":"Mariachi's II",
    "lowercase":"mariachi's ii"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.263709,38.584399 ]
    },
    "properties": {
    "name":"Mariscos El Gato",
    "lowercase":"mariscos el gato"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.260445,38.647853 ]
    },
    "properties": {
    "name":"MaryAnn's Tea Room",
    "lowercase":"maryann's tea room"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.231912,38.593897 ]
    },
    "properties": {
    "name":"Master Pieza Gourmet Pieza",
    "lowercase":"master pieza gourmet pieza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32082,38.60802 ]
    },
    "properties": {
    "name":"Mauhaus",
    "lowercase":"mauhaus"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31984846,38.611751 ]
    },
    "properties": {
    "name":"Maya Cafe",
    "lowercase":"maya cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3376827,38.6500653 ]
    },
    "properties": {
    "name":"Mayana Mexican Kitchen",
    "lowercase":"mayana mexican kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33113327,38.60419516 ]
    },
    "properties": {
    "name":"McAllister's Deli",
    "lowercase":"mcallister's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3144421,38.5145173 ]
    },
    "properties": {
    "name":"McArthur's Bakery Cafe",
    "lowercase":"mcarthur's bakery cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32518,38.60245 ]
    },
    "properties": {
    "name":"McLain's Corner Bar & Grill",
    "lowercase":"mclain's corner bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26192,38.64504 ]
    },
    "properties": {
    "name":"Medina Grill",
    "lowercase":"medina grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19869402,38.63222189 ]
    },
    "properties": {
    "name":"Medina Mediterranean Grill",
    "lowercase":"medina mediterranean grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24275,38.60198 ]
    },
    "properties": {
    "name":"Mekong Restaurant",
    "lowercase":"mekong restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4064529,38.5491355 ]
    },
    "properties": {
    "name":"Mellow Mushroom",
    "lowercase":"mellow mushroom"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.217996,38.605027 ]
    },
    "properties": {
    "name":"Melo's Pizzeria",
    "lowercase":"melo's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30692,38.66323 ]
    },
    "properties": {
    "name":"Merhaba",
    "lowercase":"merhaba"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.302339,38.655879 ]
    },
    "properties": {
    "name":"Meshuggah Café",
    "lowercase":"meshuggah café"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24256694,38.59868893 ]
    },
    "properties": {
    "name":"Meskerem Ethiopian Restaurant",
    "lowercase":"meskerem ethiopian restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2625351,38.58455658 ]
    },
    "properties": {
    "name":"Mi Lindo Michoacan",
    "lowercase":"mi lindo michoacan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3080181,38.6617066 ]
    },
    "properties": {
    "name":"Mi Ranchito",
    "lowercase":"mi ranchito"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31330872,38.67663574 ]
    },
    "properties": {
    "name":"Miami Grill",
    "lowercase":"miami grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31047821,38.61627197 ]
    },
    "properties": {
    "name":"Michael's Bar & Grill",
    "lowercase":"michael's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23719,38.63336 ]
    },
    "properties": {
    "name":"Midtown Sushi  and Ramen",
    "lowercase":"midtown sushi  and ramen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31644641,38.63327864 ]
    },
    "properties": {
    "name":"Mike Duffy's Pub & Grill",
    "lowercase":"mike duffy's pub & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2875,38.62921 ]
    },
    "properties": {
    "name":"Mike Talayna's Juke Box Restaurant",
    "lowercase":"mike talayna's juke box restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27299,38.61603 ]
    },
    "properties": {
    "name":"Milo's Tavern",
    "lowercase":"milo's tavern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22173,38.60942139 ]
    },
    "properties": {
    "name":"Milque Toast Bar",
    "lowercase":"milque toast bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30087289,38.65570652 ]
    },
    "properties": {
    "name":"Mission Taco Joint",
    "lowercase":"mission taco joint"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2607314,38.6480756 ]
    },
    "properties": {
    "name":"Mission Taco Joint",
    "lowercase":"mission taco joint"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20327,38.61059 ]
    },
    "properties": {
    "name":"Mission Taco Joint",
    "lowercase":"mission taco joint"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.275195,38.613624 ]
    },
    "properties": {
    "name":"Mission Taco Truck",
    "lowercase":"mission taco truck"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19675,38.63247 ]
    },
    "properties": {
    "name":"Missouri Bar & Grille",
    "lowercase":"missouri bar & grille"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19422479,38.63130592 ]
    },
    "properties": {
    "name":"Mizu Sushi Bar",
    "lowercase":"mizu sushi bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25881,38.56309 ]
    },
    "properties": {
    "name":"MJ'S On the Park",
    "lowercase":"mj's on the park"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24261569,38.60268656 ]
    },
    "properties": {
    "name":"MoKaBe's Coffee House",
    "lowercase":"mokabe's coffee house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3623446,38.519185 ]
    },
    "properties": {
    "name":"Molldeli's Delicatessen",
    "lowercase":"molldeli's delicatessen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33943892,38.65124861 ]
    },
    "properties": {
    "name":"Molly Darcy's",
    "lowercase":"molly darcy's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.204045,38.6082142 ]
    },
    "properties": {
    "name":"Molly's in Soulard",
    "lowercase":"molly's in soulard"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30929,38.59179 ]
    },
    "properties": {
    "name":"Mom's Deli",
    "lowercase":"mom's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27941,38.67243 ]
    },
    "properties": {
    "name":"Mom's Kitchen",
    "lowercase":"mom's kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26086,38.65194 ]
    },
    "properties": {
    "name":"Mom's Soul Food Kitchen",
    "lowercase":"mom's soul food kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33714294,38.66037691 ]
    },
    "properties": {
    "name":"Momo's Ouzaria Taverna",
    "lowercase":"momo's ouzaria taverna"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27513526,38.54951379 ]
    },
    "properties": {
    "name":"Monte Bello Pizzeria",
    "lowercase":"monte bello pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22095,38.6547 ]
    },
    "properties": {
    "name":"Mother's Best Fried Fish",
    "lowercase":"mother's best fried fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33821918,38.65006529 ]
    },
    "properties": {
    "name":"Mother's Fish",
    "lowercase":"mother's fish"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22203,38.63077 ]
    },
    "properties": {
    "name":"Mound City Sandwich Shop",
    "lowercase":"mound city sandwich shop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25764465,38.70070267 ]
    },
    "properties": {
    "name":"Mr. B's BBQ",
    "lowercase":"mr. b's bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3947754,38.6919289 ]
    },
    "properties": {
    "name":"Ms. Piggies Smokehouse",
    "lowercase":"ms. piggies smokehouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36843,38.60879 ]
    },
    "properties": {
    "name":"Nachomamas Tex-Mex",
    "lowercase":"nachomamas tex-mex"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2094,38.60891 ]
    },
    "properties": {
    "name":"Nadine's Gin Joint",
    "lowercase":"nadine's gin joint"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3380995,38.65090728 ]
    },
    "properties": {
    "name":"Nami Ramen",
    "lowercase":"nami ramen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.41696802,38.59916735 ]
    },
    "properties": {
    "name":"Nathaniel Reid Bakery",
    "lowercase":"nathaniel reid bakery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19139,38.61875 ]
    },
    "properties": {
    "name":"Nephew's Grille",
    "lowercase":"nephew's grille"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23017444,38.59392598 ]
    },
    "properties": {
    "name":"Neveria La Vallesana",
    "lowercase":"neveria la vallesana"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27232889,38.59273883 ]
    },
    "properties": {
    "name":"New China",
    "lowercase":"new china"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3386331,38.6379613 ]
    },
    "properties": {
    "name":"New Day Gluten Free",
    "lowercase":"new day gluten free"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3607305,38.7106704 ]
    },
    "properties": {
    "name":"Nick & Elena's Pizzeria",
    "lowercase":"nick & elena's pizzeria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28653709,38.62276749 ]
    },
    "properties": {
    "name":"Nick's Pub",
    "lowercase":"nick's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25603998,38.62002994 ]
    },
    "properties": {
    "name":"Nixta",
    "lowercase":"nixta"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35840607,38.67447281 ]
    },
    "properties": {
    "name":"Nobu's Japanese Restaurant",
    "lowercase":"nobu's japanese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3344567,38.62467396 ]
    },
    "properties": {
    "name":"Noodles & Company",
    "lowercase":"noodles & company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29263,38.62889 ]
    },
    "properties": {
    "name":"Nora's",
    "lowercase":"nora's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27945,38.5797389 ]
    },
    "properties": {
    "name":"Novella Wine Bar",
    "lowercase":"novella wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3381349,38.51675053 ]
    },
    "properties": {
    "name":"Nubby's",
    "lowercase":"nubby's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4334978,38.672485 ]
    },
    "properties": {
    "name":"Nudo House STL",
    "lowercase":"nudo house stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3819558,38.6906491 ]
    },
    "properties": {
    "name":"O! Wing Plus",
    "lowercase":"o! wing plus"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26494592,38.61745097 ]
    },
    "properties": {
    "name":"O'Connell's Pub",
    "lowercase":"o'connell's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2587222,38.6268568 ]
    },
    "properties": {
    "name":"O'Shay's Pub",
    "lowercase":"o'shay's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34838,38.62391 ]
    },
    "properties": {
    "name":"OB Clark's Restaurant",
    "lowercase":"ob clark's restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28513157,38.64823186 ]
    },
    "properties": {
    "name":"Ocean Grill STL",
    "lowercase":"ocean grill stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3410588,38.65177381 ]
    },
    "properties": {
    "name":"Oceano Bistro",
    "lowercase":"oceano bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4434549,38.6695458 ]
    },
    "properties": {
    "name":"Oishi Sushi",
    "lowercase":"oishi sushi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19626,38.61526 ]
    },
    "properties": {
    "name":"Old Rock House",
    "lowercase":"old rock house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27066,38.5904 ]
    },
    "properties": {
    "name":"Old St Louis Chop Suey",
    "lowercase":"old st louis chop suey"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25580545,38.61954263 ]
    },
    "properties": {
    "name":"Olio",
    "lowercase":"olio"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3591601,38.592852 ]
    },
    "properties": {
    "name":"Olive + Oak",
    "lowercase":"olive + oak"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.38715598,38.67310412 ]
    },
    "properties": {
    "name":"Olivette Diner",
    "lowercase":"olivette diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30811,38.62411 ]
    },
    "properties": {
    "name":"Olympia Kebob House and Taverna",
    "lowercase":"olympia kebob house and taverna"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4065379,38.5815485 ]
    },
    "properties": {
    "name":"One 19 North Tapas and Wine Bar",
    "lowercase":"one 19 north tapas and wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29388,38.57761 ]
    },
    "properties": {
    "name":"One Way Cafe And Bar",
    "lowercase":"one way cafe and bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28689,38.57659 ]
    },
    "properties": {
    "name":"Onesto Pizza & Trattoria",
    "lowercase":"onesto pizza & trattoria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.294733,38.702613 ]
    },
    "properties": {
    "name":"Oriental Chop Suey",
    "lowercase":"oriental chop suey"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36652374,38.52724457 ]
    },
    "properties": {
    "name":"Outback Steakhouse",
    "lowercase":"outback steakhouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34547389,38.63448483 ]
    },
    "properties": {
    "name":"P.F. Chang's",
    "lowercase":"p.f. chang's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3552115,38.5240222 ]
    },
    "properties": {
    "name":"P'sghetti's Pasta & Sandwiches",
    "lowercase":"p'sghetti's pasta & sandwiches"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3853302,38.60267639 ]
    },
    "properties": {
    "name":"P'sghetti's Pasta and Sandwiches",
    "lowercase":"p'sghetti's pasta and sandwiches"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19398,38.62088 ]
    },
    "properties": {
    "name":"Paddy O's",
    "lowercase":"paddy o's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2448349,38.5823555 ]
    },
    "properties": {
    "name":"Palacios Mexican Restaurant",
    "lowercase":"palacios mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.308185,38.623662 ]
    },
    "properties": {
    "name":"Pan D'olive",
    "lowercase":"pan d'olive"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40659204,38.57448332 ]
    },
    "properties": {
    "name":"Panda Chinese Restaurant",
    "lowercase":"panda chinese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2830199,38.59252 ]
    },
    "properties": {
    "name":"Panda Pavillion",
    "lowercase":"panda pavillion"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2946487,38.6390996 ]
    },
    "properties": {
    "name":"Panorama Restaurant",
    "lowercase":"panorama restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27651,38.59267 ]
    },
    "properties": {
    "name":"Papagayos",
    "lowercase":"papagayos"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3072524,38.6169486 ]
    },
    "properties": {
    "name":"Papagayos",
    "lowercase":"papagayos"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22400327,38.6351466 ]
    },
    "properties": {
    "name":"Pappy's Smokehouse",
    "lowercase":"pappy's smokehouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30505371,38.63271332 ]
    },
    "properties": {
    "name":"Par Lounge",
    "lowercase":"par lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34149032,38.64812074 ]
    },
    "properties": {
    "name":"Parigi",
    "lowercase":"parigi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3381786,38.6495173 ]
    },
    "properties": {
    "name":"Pasta Plus Restaurant",
    "lowercase":"pasta plus restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33571594,38.65005299 ]
    },
    "properties": {
    "name":"Pastaria",
    "lowercase":"pastaria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2140299,38.63547 ]
    },
    "properties": {
    "name":"Patois Eatery & Social Lounge",
    "lowercase":"patois eatery & social lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44744164,38.70179314 ]
    },
    "properties": {
    "name":"Paul Mineo's Trattoria",
    "lowercase":"paul mineo's trattoria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2155228,38.6031914 ]
    },
    "properties": {
    "name":"Peacemaker Lobster and Crab",
    "lowercase":"peacemaker lobster and crab"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3021164,38.6558228 ]
    },
    "properties": {
    "name":"Peacock Loop Diner",
    "lowercase":"peacock loop diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4056529,38.5489652 ]
    },
    "properties": {
    "name":"Penn Station East Coast Subs",
    "lowercase":"penn station east coast subs"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33331,38.64271 ]
    },
    "properties": {
    "name":"Peno",
    "lowercase":"peno"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.41555023,38.57034683 ]
    },
    "properties": {
    "name":"Peppe's Apt 2",
    "lowercase":"peppe's apt 2"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27123705,38.57817337 ]
    },
    "properties": {
    "name":"Pepper's Bar and Grill",
    "lowercase":"pepper's bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31622,38.55493 ]
    },
    "properties": {
    "name":"Phil's Bar B Que",
    "lowercase":"phil's bar b que"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24299,38.599449 ]
    },
    "properties": {
    "name":"Pho Grand Restaurant",
    "lowercase":"pho grand restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3583824,38.6742249 ]
    },
    "properties": {
    "name":"Pho Long",
    "lowercase":"pho long"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2606901,38.64886358 ]
    },
    "properties": {
    "name":"Pi Pizzeria - Central West End",
    "lowercase":"pi pizzeria - central west end"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29772,38.65496 ]
    },
    "properties": {
    "name":"Pi Pizzeria - Delmar Loop",
    "lowercase":"pi pizzeria - delmar loop"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2995748,38.655449 ]
    },
    "properties": {
    "name":"Piccione Pastry",
    "lowercase":"piccione pastry"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.238311,38.6351287 ]
    },
    "properties": {
    "name":"Pickleman's Gourmet Cafe",
    "lowercase":"pickleman's gourmet cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33806981,38.65082434 ]
    },
    "properties": {
    "name":"Pickleman's Gourmet Cafe",
    "lowercase":"pickleman's gourmet cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40590102,38.58013328 ]
    },
    "properties": {
    "name":"Pickleman's Gourmet Cafe",
    "lowercase":"pickleman's gourmet cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2616,38.64079 ]
    },
    "properties": {
    "name":"Pickles Deli",
    "lowercase":"pickles deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20026311,38.61167684 ]
    },
    "properties": {
    "name":"Pieces The St. Louis Board Game Bar & Cafe",
    "lowercase":"pieces the st. louis board game bar & cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2071,38.66433 ]
    },
    "properties": {
    "name":"Piekutowski's European Style Sausage",
    "lowercase":"piekutowski's european style sausage"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30146,38.5956199 ]
    },
    "properties": {
    "name":"Pietros Restaurant",
    "lowercase":"pietros restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2790182,38.6481684 ]
    },
    "properties": {
    "name":"Pig & Pickle",
    "lowercase":"pig & pickle"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24242,38.59936 ]
    },
    "properties": {
    "name":"Pizza Head",
    "lowercase":"pizza head"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30385,38.60601 ]
    },
    "properties": {
    "name":"Pizza-A-Go-Go",
    "lowercase":"pizza-a-go-go"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20881,38.60881 ]
    },
    "properties": {
    "name":"Pizzeoli Wood Fired Pizza",
    "lowercase":"pizzeoli wood fired pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28332174,38.57699482 ]
    },
    "properties": {
    "name":"Pizzeria Tivoli",
    "lowercase":"pizzeria tivoli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40767,38.5825699 ]
    },
    "properties": {
    "name":"Pj's Tavern In Kirkwood",
    "lowercase":"pj's tavern in kirkwood"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.194,38.62841 ]
    },
    "properties": {
    "name":"Planet Sub",
    "lowercase":"planet sub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21223113,38.62075612 ]
    },
    "properties": {
    "name":"Planter's House",
    "lowercase":"planter's house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3188839,38.6341282 ]
    },
    "properties": {
    "name":"Pointer's",
    "lowercase":"pointer's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21306,38.61756 ]
    },
    "properties": {
    "name":"Polite Society",
    "lowercase":"polite society"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3257795,38.6015412 ]
    },
    "properties": {
    "name":"Porter's Fried Chicken",
    "lowercase":"porter's fried chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.42985,38.6003 ]
    },
    "properties": {
    "name":"Pretzel Boys",
    "lowercase":"pretzel boys"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32405678,38.55221023 ]
    },
    "properties": {
    "name":"Pretzel Pretzel",
    "lowercase":"pretzel pretzel"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34634359,38.67348436 ]
    },
    "properties": {
    "name":"Private Kitchen",
    "lowercase":"private kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22907875,38.59370202 ]
    },
    "properties": {
    "name":"Propaganda",
    "lowercase":"propaganda"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33352661,38.6427269 ]
    },
    "properties": {
    "name":"Protzel's Delicatessen",
    "lowercase":"protzel's delicatessen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30794911,38.65631953 ]
    },
    "properties": {
    "name":"Público",
    "lowercase":"público"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29311,38.5845 ]
    },
    "properties": {
    "name":"Pueblo Solis",
    "lowercase":"pueblo solis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.42323112,38.67297158 ]
    },
    "properties": {
    "name":"Pumpernickles Delicatessen",
    "lowercase":"pumpernickles delicatessen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2784177,38.6482694 ]
    },
    "properties": {
    "name":"PuraVegan Cafe & Yoga",
    "lowercase":"puravegan cafe & yoga"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.212956,38.62134 ]
    },
    "properties": {
    "name":"PW Pizza",
    "lowercase":"pw pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19377,38.62664 ]
    },
    "properties": {
    "name":"Que Sazon",
    "lowercase":"que sazon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2861889,38.569474 ]
    },
    "properties": {
    "name":"Quincy Street Bistro",
    "lowercase":"quincy street bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33862728,38.59173023 ]
    },
    "properties": {
    "name":"Racanelli's",
    "lowercase":"racanelli's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23411,38.6262 ]
    },
    "properties": {
    "name":"Rally Point Bar and Grill",
    "lowercase":"rally point bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2323303,38.6158218 ]
    },
    "properties": {
    "name":"Ranell's Cafe",
    "lowercase":"ranell's cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30444,38.65603367 ]
    },
    "properties": {
    "name":"Ranoush",
    "lowercase":"ranoush"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.338928,38.647534 ]
    },
    "properties": {
    "name":"Rearn Thai",
    "lowercase":"rearn thai"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19153,38.62817 ]
    },
    "properties": {
    "name":"Red Door Chinese Eatery",
    "lowercase":"red door chinese eatery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.199484,38.632198 ]
    },
    "properties": {
    "name":"Red Oak",
    "lowercase":"red oak"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31805,38.61276 ]
    },
    "properties": {
    "name":"Reeds American Table",
    "lowercase":"reeds american table"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24661839,38.63723092 ]
    },
    "properties": {
    "name":"Retreat Gastropub",
    "lowercase":"retreat gastropub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3372037,38.6275416 ]
    },
    "properties": {
    "name":"Revel Kitchen",
    "lowercase":"revel kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.268696,38.616518 ]
    },
    "properties": {
    "name":"Rigazzi's",
    "lowercase":"rigazzi's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23985,38.60214 ]
    },
    "properties": {
    "name":"Riley's Pub",
    "lowercase":"riley's pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25334,38.627167 ]
    },
    "properties": {
    "name":"RISE Coffee House",
    "lowercase":"rise coffee house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26475717,38.54827238 ]
    },
    "properties": {
    "name":"River Des Peres Yacht Club",
    "lowercase":"river des peres yacht club"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31276,38.58762 ]
    },
    "properties": {
    "name":"River's Edge Social",
    "lowercase":"river's edge social"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31509399,38.61368942 ]
    },
    "properties": {
    "name":"Robata Maplewood",
    "lowercase":"robata maplewood"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.363259,38.523937 ]
    },
    "properties": {
    "name":"Roberto's Trattoria & Chophouse",
    "lowercase":"roberto's trattoria & chophouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19192547,38.62987563 ]
    },
    "properties": {
    "name":"Robie's",
    "lowercase":"robie's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3625891,38.5934969 ]
    },
    "properties": {
    "name":"Robust Wine Bar & Cafe",
    "lowercase":"robust wine bar & cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20043,38.63357 ]
    },
    "properties": {
    "name":"Rooftop Cafe At City Museum",
    "lowercase":"rooftop cafe at city museum"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1957371,38.6300227 ]
    },
    "properties": {
    "name":"Rooster",
    "lowercase":"rooster"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24188,38.60106 ]
    },
    "properties": {
    "name":"Rooster",
    "lowercase":"rooster"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1979099,38.6323099 ]
    },
    "properties": {
    "name":"Rosalita's Cantina",
    "lowercase":"rosalita's cantina"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35377,38.6736999 ]
    },
    "properties": {
    "name":"Royal Chinese BBQ",
    "lowercase":"royal chinese bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2547272,38.5688946 ]
    },
    "properties": {
    "name":"Royal Kebab Restaurant",
    "lowercase":"royal kebab restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.284507,38.586689 ]
    },
    "properties": {
    "name":"Russell's on Macklind",
    "lowercase":"russell's on macklind"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34162227,38.65085756 ]
    },
    "properties": {
    "name":"Ruth's Chris Steak House",
    "lowercase":"ruth's chris steak house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.244835,38.582355 ]
    },
    "properties": {
    "name":"Sabor A Mexico",
    "lowercase":"sabor a mexico"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.403676,38.68479 ]
    },
    "properties": {
    "name":"Saint Louis Kolache",
    "lowercase":"saint louis kolache"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30510024,38.65612122 ]
    },
    "properties": {
    "name":"Salt + Smoke",
    "lowercase":"salt + smoke"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29402,38.57999 ]
    },
    "properties": {
    "name":"Salt + Smoke",
    "lowercase":"salt + smoke"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30895,38.63294 ]
    },
    "properties": {
    "name":"Salume Beddu",
    "lowercase":"salume beddu"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34349442,38.54843393 ]
    },
    "properties": {
    "name":"Sam's Steakhouse",
    "lowercase":"sam's steakhouse"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25839,38.62706 ]
    },
    "properties": {
    "name":"Sameem Afghan Restaurant",
    "lowercase":"sameem afghan restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20043,38.63357 ]
    },
    "properties": {
    "name":"Samwiches",
    "lowercase":"samwiches"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35975128,38.594447 ]
    },
    "properties": {
    "name":"San Jose Mexican Restaurant",
    "lowercase":"san jose mexican restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2540299,38.6272097 ]
    },
    "properties": {
    "name":"Sanctuaria",
    "lowercase":"sanctuaria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27562,38.60539 ]
    },
    "properties": {
    "name":"Sandrina's",
    "lowercase":"sandrina's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33391792,38.62228368 ]
    },
    "properties": {
    "name":"SanSai Japanese Grill",
    "lowercase":"sansai japanese grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.407326,38.575508 ]
    },
    "properties": {
    "name":"Sapore Italian Cafe",
    "lowercase":"sapore italian cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22346,38.63544 ]
    },
    "properties": {
    "name":"Sapporo 2 Sushi& Thai",
    "lowercase":"sapporo 2 sushi& thai"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33568062,38.65018039 ]
    },
    "properties": {
    "name":"Sardella",
    "lowercase":"sardella"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30773565,38.63836095 ]
    },
    "properties": {
    "name":"Sasha's",
    "lowercase":"sasha's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25033,38.61636 ]
    },
    "properties": {
    "name":"Sasha's On Shaw",
    "lowercase":"sasha's on shaw"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25789236,38.61517522 ]
    },
    "properties": {
    "name":"Sassafras Cafe",
    "lowercase":"sassafras cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2952571,38.5936423 ]
    },
    "properties": {
    "name":"Sassy Pigs",
    "lowercase":"sassy pigs"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19206343,38.62978071 ]
    },
    "properties": {
    "name":"Sauce On The Side",
    "lowercase":"sauce on the side"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33747332,38.64997591 ]
    },
    "properties": {
    "name":"Sauce On the Side",
    "lowercase":"sauce on the side"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25668472,38.62710439 ]
    },
    "properties": {
    "name":"Sauce On The Side",
    "lowercase":"sauce on the side"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2632518,38.6449995 ]
    },
    "properties": {
    "name":"Scape American Bistro",
    "lowercase":"scape american bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25089264,38.63841248 ]
    },
    "properties": {
    "name":"Scarlett's Wine Bar",
    "lowercase":"scarlett's wine bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31496,38.61301 ]
    },
    "properties": {
    "name":"Schlafly Bottleworks",
    "lowercase":"schlafly bottleworks"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.405259,38.632122 ]
    },
    "properties": {
    "name":"Schneithorst Restaurant & Bar",
    "lowercase":"schneithorst restaurant & bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35607147,38.52445602 ]
    },
    "properties": {
    "name":"Schottzie's Bar & Grill",
    "lowercase":"schottzie's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19883,38.63249 ]
    },
    "properties": {
    "name":"Seafood By Crushed Velvet",
    "lowercase":"seafood by crushed velvet"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29272,38.62817 ]
    },
    "properties": {
    "name":"Seamus McDaniel's",
    "lowercase":"seamus mcdaniel's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2615241,38.60320986 ]
    },
    "properties": {
    "name":"Seed Sprout Spoon",
    "lowercase":"seed sprout spoon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3071518,38.6372833 ]
    },
    "properties": {
    "name":"Seedz Cafe",
    "lowercase":"seedz cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19379966,38.63090641 ]
    },
    "properties": {
    "name":"Sen Thai Asian Bistro",
    "lowercase":"sen thai asian bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4100066,38.6734249 ]
    },
    "properties": {
    "name":"Seoul Garden",
    "lowercase":"seoul garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30755615,38.65646744 ]
    },
    "properties": {
    "name":"Seoul Taco",
    "lowercase":"seoul taco"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30734,38.65781 ]
    },
    "properties": {
    "name":"Seoul Taco Food Truck",
    "lowercase":"seoul taco food truck"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40448761,38.55529785 ]
    },
    "properties": {
    "name":"Sesame Chinese Restaurant",
    "lowercase":"sesame chinese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2618172,38.6413575 ]
    },
    "properties": {
    "name":"Shake Shack",
    "lowercase":"shake shack"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2181085,38.5951278 ]
    },
    "properties": {
    "name":"Shameless Grounds",
    "lowercase":"shameless grounds"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2548064,38.6405726 ]
    },
    "properties": {
    "name":"Shapiro's Market",
    "lowercase":"shapiro's market"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3211187,38.5649554 ]
    },
    "properties": {
    "name":"SharpShooter Pit and Grill",
    "lowercase":"sharpshooter pit and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3054884,38.6557302 ]
    },
    "properties": {
    "name":"Shawarma King",
    "lowercase":"shawarma king"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24263,38.59844 ]
    },
    "properties": {
    "name":"Sheesh Restaurant",
    "lowercase":"sheesh restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25945678,38.66085218 ]
    },
    "properties": {
    "name":"Shell City Crab Shack",
    "lowercase":"shell city crab shack"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.39458,38.60047 ]
    },
    "properties": {
    "name":"Sho Wok",
    "lowercase":"sho wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36079,38.52426 ]
    },
    "properties": {
    "name":"Shogun Japanese Steak House",
    "lowercase":"shogun japanese steak house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3539714,38.674112 ]
    },
    "properties": {
    "name":"Shu Feng Restaurant",
    "lowercase":"shu feng restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2510529,38.6281013 ]
    },
    "properties": {
    "name":"Siam STL",
    "lowercase":"siam stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.217826,38.60344 ]
    },
    "properties": {
    "name":"Sidney Street Cafe",
    "lowercase":"sidney street cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.356406,38.67439 ]
    },
    "properties": {
    "name":"Simba Ugandan Restaurant",
    "lowercase":"simba ugandan restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21823,38.5896 ]
    },
    "properties": {
    "name":"Sister Cities",
    "lowercase":"sister cities"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1997375,38.6326904 ]
    },
    "properties": {
    "name":"Skip to Malou at Hiro's Asian Kitchen",
    "lowercase":"skip to malou at hiro's asian kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24953,38.61439 ]
    },
    "properties": {
    "name":"Slice Of The Hill",
    "lowercase":"slice of the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22184,38.63608 ]
    },
    "properties": {
    "name":"Small Batch",
    "lowercase":"small batch"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31081975,38.67571057 ]
    },
    "properties": {
    "name":"Smokehouse BBQ",
    "lowercase":"smokehouse bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28230786,38.57866601 ]
    },
    "properties": {
    "name":"Smoking Barrels BBQ",
    "lowercase":"smoking barrels bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.39899445,38.55514526 ]
    },
    "properties": {
    "name":"Smugala's Pizza Pub",
    "lowercase":"smugala's pizza pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.233418,38.631838 ]
    },
    "properties": {
    "name":"Snarf's",
    "lowercase":"snarf's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30009402,38.65166362 ]
    },
    "properties": {
    "name":"Snarf's",
    "lowercase":"snarf's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29991,38.59906 ]
    },
    "properties": {
    "name":"Snax Gastrobar",
    "lowercase":"snax gastrobar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3096518,38.532152 ]
    },
    "properties": {
    "name":"Social Bar & Grill",
    "lowercase":"social bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3553148,38.5240455 ]
    },
    "properties": {
    "name":"Soco's Gyros & Deli",
    "lowercase":"soco's gyros & deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.288101,38.611984 ]
    },
    "properties": {
    "name":"SOHA Bar and Grill",
    "lowercase":"soha bar and grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2052099,38.60833 ]
    },
    "properties": {
    "name":"Soulard Coffee Garden",
    "lowercase":"soulard coffee garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20922,38.6079099 ]
    },
    "properties": {
    "name":"Soulard Gyro",
    "lowercase":"soulard gyro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34562166,38.67331034 ]
    },
    "properties": {
    "name":"Soup Dumplings STL",
    "lowercase":"soup dumplings stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2241091,38.6352 ]
    },
    "properties": {
    "name":"Southern",
    "lowercase":"southern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2727,38.59297 ]
    },
    "properties": {
    "name":"Southtown Pub",
    "lowercase":"southtown pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30569,38.61342 ]
    },
    "properties": {
    "name":"Southwest Diner",
    "lowercase":"southwest diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27493581,38.61092448 ]
    },
    "properties": {
    "name":"Southwest Market Cuisine",
    "lowercase":"southwest market cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2269211,38.5878414 ]
    },
    "properties": {
    "name":"Spare No Rib",
    "lowercase":"spare no rib"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4065449,38.5795349 ]
    },
    "properties": {
    "name":"Spencer's Grill",
    "lowercase":"spencer's grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.311348,38.663113 ]
    },
    "properties": {
    "name":"Spice-n-Grill",
    "lowercase":"spice-n-grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2932,38.60653 ]
    },
    "properties": {
    "name":"Spiro's Restaurant",
    "lowercase":"spiro's restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.39219,38.63772 ]
    },
    "properties": {
    "name":"Sportsman's Park Restaurant",
    "lowercase":"sportsman's park restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21093965,38.61686862 ]
    },
    "properties": {
    "name":"Square One Brewery & Distillery",
    "lowercase":"square one brewery & distillery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23047,38.63829 ]
    },
    "properties": {
    "name":"Squatters Cafe",
    "lowercase":"squatters cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2116999,38.6161 ]
    },
    "properties": {
    "name":"SqWires Restaurant & Annex",
    "lowercase":"sqwires restaurant & annex"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2498437,38.5687666 ]
    },
    "properties": {
    "name":"St Cecilia Mexican Fish Fry",
    "lowercase":"st cecilia mexican fish fry"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28356171,38.66676712 ]
    },
    "properties": {
    "name":"St Louis Fish and Chicken",
    "lowercase":"st louis fish and chicken"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31927507,38.61285235 ]
    },
    "properties": {
    "name":"St Louis Kitchen",
    "lowercase":"st louis kitchen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25539398,38.71294785 ]
    },
    "properties": {
    "name":"St Louis Q",
    "lowercase":"st louis q"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34770012,38.61324899 ]
    },
    "properties": {
    "name":"St Mary Magdelan God's Cod Fish Fry",
    "lowercase":"st mary magdelan god's cod fish fry"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30799,38.65654 ]
    },
    "properties": {
    "name":"St. Louis Bubble Tea",
    "lowercase":"st. louis bubble tea"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.357122,38.674228 ]
    },
    "properties": {
    "name":"St. Louis Fish & Chicken Grill",
    "lowercase":"st. louis fish & chicken grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2928853,38.5861833 ]
    },
    "properties": {
    "name":"St. Louis Pizza & Wings",
    "lowercase":"st. louis pizza & wings"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2928853,38.5861833 ]
    },
    "properties": {
    "name":"St. Louis Pizza & Wings",
    "lowercase":"st. louis pizza & wings"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3746123,38.6063416 ]
    },
    "properties": {
    "name":"St. Louis Wing Company",
    "lowercase":"st. louis wing company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2622763,38.5491133 ]
    },
    "properties": {
    "name":"Stacked STL",
    "lowercase":"stacked stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2943032,38.563792 ]
    },
    "properties": {
    "name":"Steak 'n Shake",
    "lowercase":"steak 'n shake"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1994042,38.6270025 ]
    },
    "properties": {
    "name":"Steak Louie",
    "lowercase":"steak louie"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2623291,38.59883881 ]
    },
    "properties": {
    "name":"Stella Blues",
    "lowercase":"stella blues"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2733,38.61478 ]
    },
    "properties": {
    "name":"Steve's Hot Dogs On the Hill",
    "lowercase":"steve's hot dogs on the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.238995,38.606136 ]
    },
    "properties": {
    "name":"Steve's Hot Dogs Tower Grove",
    "lowercase":"steve's hot dogs tower grove"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22186,38.60064 ]
    },
    "properties": {
    "name":"STL BLT",
    "lowercase":"stl blt"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29266,38.62872 ]
    },
    "properties": {
    "name":"Stone Turtle",
    "lowercase":"stone turtle"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26104,38.64506 ]
    },
    "properties": {
    "name":"Sub Zero Vodka Bar",
    "lowercase":"sub zero vodka bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1994042,38.6270025 ]
    },
    "properties": {
    "name":"Sugar Fire BBQ",
    "lowercase":"sugar fire bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36758,38.6734 ]
    },
    "properties": {
    "name":"Sugarfire Smoke House",
    "lowercase":"sugarfire smoke house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4102885,38.6331564 ]
    },
    "properties": {
    "name":"Sugo's Spaghetteria",
    "lowercase":"sugo's spaghetteria"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22978,38.63814 ]
    },
    "properties": {
    "name":"Sunrise Chinese Restaurant",
    "lowercase":"sunrise chinese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40703729,38.58327024 ]
    },
    "properties": {
    "name":"Sunset 44 Bistro",
    "lowercase":"sunset 44 bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1939699,38.62873 ]
    },
    "properties": {
    "name":"Sushi Ai",
    "lowercase":"sushi ai"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26187,38.64054 ]
    },
    "properties": {
    "name":"SUSHI KOI",
    "lowercase":"sushi koi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35960941,38.59409854 ]
    },
    "properties": {
    "name":"Sushi Station",
    "lowercase":"sushi station"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.39742852,38.69570423 ]
    },
    "properties": {
    "name":"SuWaller's Bar & Grill",
    "lowercase":"suwaller's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24609,38.61171 ]
    },
    "properties": {
    "name":"SweetArt",
    "lowercase":"sweetart"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28551,38.64929 ]
    },
    "properties": {
    "name":"Sweetie Pie's Hamburger Heaven",
    "lowercase":"sweetie pie's hamburger heaven"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23175,38.64167 ]
    },
    "properties": {
    "name":"Sweetie Pies Upper Crust",
    "lowercase":"sweetie pies upper crust"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2981527,38.5614736 ]
    },
    "properties": {
    "name":"Syberg's Gravois",
    "lowercase":"syberg's gravois"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21240997,38.6312561 ]
    },
    "properties": {
    "name":"Syberg's on Market",
    "lowercase":"syberg's on market"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.41689,38.59916 ]
    },
    "properties": {
    "name":"Symbowl - Kirkwood",
    "lowercase":"symbowl - kirkwood"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32998179,38.653738 ]
    },
    "properties": {
    "name":"Taco Buddha",
    "lowercase":"taco buddha"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26829349,38.57819858 ]
    },
    "properties": {
    "name":"Taco Circus",
    "lowercase":"taco circus"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19353179,38.62633592 ]
    },
    "properties": {
    "name":"Taco Hidalguense",
    "lowercase":"taco hidalguense"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26242828,38.5853653 ]
    },
    "properties": {
    "name":"Taft Street Restaurant and Bar",
    "lowercase":"taft street restaurant and bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3569919,38.6739376 ]
    },
    "properties": {
    "name":"Tai Ke",
    "lowercase":"tai ke"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3054886,38.6557121 ]
    },
    "properties": {
    "name":"Taj Mahal Traditional Indian Cuisine",
    "lowercase":"taj mahal traditional indian cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3497225,38.67375053 ]
    },
    "properties": {
    "name":"Tang Palace",
    "lowercase":"tang palace"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3353628,38.649803 ]
    },
    "properties": {
    "name":"Tani Sushi Bistro",
    "lowercase":"tani sushi bistro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3164501,38.613391 ]
    },
    "properties": {
    "name":"Tapped",
    "lowercase":"tapped"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.38656197,38.69115539 ]
    },
    "properties": {
    "name":"Taqueria Durango",
    "lowercase":"taqueria durango"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23062738,38.59406192 ]
    },
    "properties": {
    "name":"Taqueria El Bronco",
    "lowercase":"taqueria el bronco"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22961,38.59406 ]
    },
    "properties": {
    "name":"Taqueria El Torito",
    "lowercase":"taqueria el torito"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26169,38.64567 ]
    },
    "properties": {
    "name":"Taste of Lebanon",
    "lowercase":"taste of lebanon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25166,38.59161 ]
    },
    "properties": {
    "name":"Tasty Shack",
    "lowercase":"tasty shack"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2233099,38.6389728 ]
    },
    "properties": {
    "name":"Tasty Treats",
    "lowercase":"tasty treats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2968351,38.6551578 ]
    },
    "properties": {
    "name":"Tavolo V",
    "lowercase":"tavolo v"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2620191,38.6399948 ]
    },
    "properties": {
    "name":"Taze Mediterranean Street Food",
    "lowercase":"taze mediterranean street food"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2258262,38.5931964 ]
    },
    "properties": {
    "name":"Teatopia",
    "lowercase":"teatopia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33832,38.59147 ]
    },
    "properties": {
    "name":"Tei Too",
    "lowercase":"tei too"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.265465,38.571584 ]
    },
    "properties": {
    "name":"Tenacious Eats",
    "lowercase":"tenacious eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3473247,38.6361854 ]
    },
    "properties": {
    "name":"Texas de Brazil",
    "lowercase":"texas de brazil"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3638,38.52619 ]
    },
    "properties": {
    "name":"TGI Fridays",
    "lowercase":"tgi fridays"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26159719,38.64447154 ]
    },
    "properties": {
    "name":"Thai 202",
    "lowercase":"thai 202"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30048788,38.65563834 ]
    },
    "properties": {
    "name":"Thai Country Cafe",
    "lowercase":"thai country cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30167,38.65538 ]
    },
    "properties": {
    "name":"Thai Gai Yang Cafe",
    "lowercase":"thai gai yang cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4237219,38.6735154 ]
    },
    "properties": {
    "name":"Thai Nivas Cafe",
    "lowercase":"thai nivas cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31401157,38.51466335 ]
    },
    "properties": {
    "name":"Thai Orchid Restaurant",
    "lowercase":"thai orchid restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36047363,38.5813942 ]
    },
    "properties": {
    "name":"The Art of Entertaining",
    "lowercase":"the art of entertaining"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33787,38.65073 ]
    },
    "properties": {
    "name":"The BAO",
    "lowercase":"the bao"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3849199,38.56354 ]
    },
    "properties": {
    "name":"The Barn",
    "lowercase":"the barn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3160923,38.613474 ]
    },
    "properties": {
    "name":"The Benevolent King",
    "lowercase":"the benevolent king"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21423893,38.59898479 ]
    },
    "properties": {
    "name":"The Biergarten at Anheuser-Busch",
    "lowercase":"the biergarten at anheuser-busch"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19476,38.61909 ]
    },
    "properties": {
    "name":"The Birdhouse STL",
    "lowercase":"the birdhouse stl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19249247,38.63104033 ]
    },
    "properties": {
    "name":"The Bistro and Bar",
    "lowercase":"the bistro and bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2464,38.59975 ]
    },
    "properties": {
    "name":"The Black Thorn Pub & Pizza",
    "lowercase":"the black thorn pub & pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.246528,38.63812 ]
    },
    "properties": {
    "name":"The Block",
    "lowercase":"the block"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.360879,38.593395 ]
    },
    "properties": {
    "name":"The Block",
    "lowercase":"the block"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27342,38.62886 ]
    },
    "properties": {
    "name":"The Bloom Café",
    "lowercase":"the bloom café"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3199813,38.6134111 ]
    },
    "properties": {
    "name":"The Blue Duck",
    "lowercase":"the blue duck"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30417506,38.6559962 ]
    },
    "properties": {
    "name":"The Blue Ocean",
    "lowercase":"the blue ocean"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23370121,38.59425263 ]
    },
    "properties": {
    "name":"The Blue Pearl",
    "lowercase":"the blue pearl"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33961564,38.59084537 ]
    },
    "properties": {
    "name":"The Boardwalk Cafe",
    "lowercase":"the boardwalk cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19965035,38.63182952 ]
    },
    "properties": {
    "name":"The Boom Boom Room",
    "lowercase":"the boom boom room"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3344326,38.6484761 ]
    },
    "properties": {
    "name":"The Capital Grille",
    "lowercase":"the capital grille"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19951947,38.61723639 ]
    },
    "properties": {
    "name":"The Cedars at St Raymond's",
    "lowercase":"the cedars at st raymond's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.197778,38.627222 ]
    },
    "properties": {
    "name":"The Cheese Shack",
    "lowercase":"the cheese shack"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34774139,38.6361499 ]
    },
    "properties": {
    "name":"The Cheesecake Factory",
    "lowercase":"the cheesecake factory"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22545,38.59531 ]
    },
    "properties": {
    "name":"The Choice Something Special By Lillian",
    "lowercase":"the choice something special by lillian"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.359102,38.592742 ]
    },
    "properties": {
    "name":"The Clover & the Bee",
    "lowercase":"the clover & the bee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35625458,38.5251236 ]
    },
    "properties": {
    "name":"The Concord Grill",
    "lowercase":"the concord grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3372335,38.6503023 ]
    },
    "properties": {
    "name":"The Crossing",
    "lowercase":"the crossing"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31835938,38.61268234 ]
    },
    "properties": {
    "name":"The Crow's Nest",
    "lowercase":"the crow's nest"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2618713,38.6020012 ]
    },
    "properties": {
    "name":"The Dam",
    "lowercase":"the dam"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.231657,38.640288 ]
    },
    "properties": {
    "name":"The Dark Room",
    "lowercase":"the dark room"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22303803,38.63619841 ]
    },
    "properties": {
    "name":"The Fountain On Locust",
    "lowercase":"the fountain on locust"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2557373,38.62734222 ]
    },
    "properties": {
    "name":"The Gramophone",
    "lowercase":"the gramophone"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3310084,38.6488026 ]
    },
    "properties": {
    "name":"The Grill at The Ritz-Carlton",
    "lowercase":"the grill at the ritz-carlton"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26238,38.62593 ]
    },
    "properties": {
    "name":"The Grove, St. Louis",
    "lowercase":"the grove, st. louis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.29238,38.56503 ]
    },
    "properties": {
    "name":"The Gyro Company",
    "lowercase":"the gyro company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27605438,38.56770325 ]
    },
    "properties": {
    "name":"The Haven",
    "lowercase":"the haven"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28804779,38.60663986 ]
    },
    "properties": {
    "name":"The Hideaway",
    "lowercase":"the hideaway"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.443835,38.666688 ]
    },
    "properties": {
    "name":"The Hive",
    "lowercase":"the hive"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22734,38.59325 ]
    },
    "properties": {
    "name":"The Juice",
    "lowercase":"the juice"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.331012,38.648363 ]
    },
    "properties": {
    "name":"The Lobby Lounge",
    "lowercase":"the lobby lounge"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27141526,38.68592178 ]
    },
    "properties": {
    "name":"The Lou's Best BBQ",
    "lowercase":"the lou's best bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.284446,38.587188 ]
    },
    "properties": {
    "name":"The Mack",
    "lowercase":"the mack"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34502,38.67281 ]
    },
    "properties": {
    "name":"The Mad Crab",
    "lowercase":"the mad crab"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3081297,38.656397 ]
    },
    "properties": {
    "name":"The Melting Pot - University City",
    "lowercase":"the melting pot - university city"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22215,38.59312 ]
    },
    "properties": {
    "name":"The Mud House",
    "lowercase":"the mud house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3201218,38.6115148 ]
    },
    "properties": {
    "name":"The Muddled Pig Gastropub",
    "lowercase":"the muddled pig gastropub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25559691,38.54959533 ]
    },
    "properties": {
    "name":"The Off Track Saloon",
    "lowercase":"the off track saloon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3501852,38.6533515 ]
    },
    "properties": {
    "name":"The Original Pancake House",
    "lowercase":"the original pancake house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19334675,38.63120384 ]
    },
    "properties": {
    "name":"The Over/Under Bar & Grill",
    "lowercase":"the over/under bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2909546,38.6336708 ]
    },
    "properties": {
    "name":"The Painted Giraffe",
    "lowercase":"the painted giraffe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23143768,38.59429169 ]
    },
    "properties": {
    "name":"The Palm Trees Restaurant",
    "lowercase":"the palm trees restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.313125,38.555065 ]
    },
    "properties": {
    "name":"The Pasta House",
    "lowercase":"the pasta house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2926636,38.6311302 ]
    },
    "properties": {
    "name":"The Pat Connolly Tavern",
    "lowercase":"the pat connolly tavern"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3355426,38.6475636 ]
    },
    "properties": {
    "name":"The Patio Cafe",
    "lowercase":"the patio cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31527,38.60438 ]
    },
    "properties": {
    "name":"The Piccadilly at Manhattan",
    "lowercase":"the piccadilly at manhattan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3356476,38.6485672 ]
    },
    "properties": {
    "name":"The Plaza Grill & Restaurant",
    "lowercase":"the plaza grill & restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34231,38.65245 ]
    },
    "properties": {
    "name":"The Posh Nosh",
    "lowercase":"the posh nosh"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.31932436,38.6126972 ]
    },
    "properties": {
    "name":"The Post Sports Bar & Grill",
    "lowercase":"the post sports bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26397363,38.64419345 ]
    },
    "properties": {
    "name":"The Preston",
    "lowercase":"the preston"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40712,38.63422 ]
    },
    "properties": {
    "name":"The Provinces",
    "lowercase":"the provinces"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26896,38.60399 ]
    },
    "properties": {
    "name":"The Royale Food & Spirits",
    "lowercase":"the royale food & spirits"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20986847,38.63299151 ]
    },
    "properties": {
    "name":"The Schlafly Tap Room",
    "lowercase":"the schlafly tap room"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24669765,38.63642438 ]
    },
    "properties": {
    "name":"The Scottish Arms",
    "lowercase":"the scottish arms"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40603,38.64414 ]
    },
    "properties": {
    "name":"The Shack - Frontenac",
    "lowercase":"the shack - frontenac"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.235876,38.603635 ]
    },
    "properties": {
    "name":"The Shaved Duck",
    "lowercase":"the shaved duck"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35732742,38.6858089 ]
    },
    "properties": {
    "name":"The Signature Club",
    "lowercase":"the signature club"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20049,38.63244005 ]
    },
    "properties": {
    "name":"The Sliced Pint",
    "lowercase":"the sliced pint"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36501378,38.60913679 ]
    },
    "properties": {
    "name":"The Slider House",
    "lowercase":"the slider house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.39888627,38.69070594 ]
    },
    "properties": {
    "name":"The Southerner",
    "lowercase":"the southerner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20799426,38.62931997 ]
    },
    "properties": {
    "name":"The Station Grille",
    "lowercase":"the station grille"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.265056,38.573088 ]
    },
    "properties": {
    "name":"The Stellar Hog",
    "lowercase":"the stellar hog"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22925846,38.59364639 ]
    },
    "properties": {
    "name":"The Taco and Ice Cream Joint",
    "lowercase":"the taco and ice cream joint"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.260704,38.647983 ]
    },
    "properties": {
    "name":"The Tavern Kitchen And Bar - Central West End",
    "lowercase":"the tavern kitchen and bar - central west end"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2640991,38.6448784 ]
    },
    "properties": {
    "name":"The Tenderloin Room",
    "lowercase":"the tenderloin room"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26184,38.6265 ]
    },
    "properties": {
    "name":"The U.R.B. - Urban Research Brewery",
    "lowercase":"the u.r.b. - urban research brewery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24280269,38.60054508 ]
    },
    "properties": {
    "name":"The Vine Mediterranean Cafe and Market",
    "lowercase":"the vine mediterranean cafe and market"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35004,38.65384 ]
    },
    "properties": {
    "name":"The Woman's Exchange",
    "lowercase":"the woman's exchange"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.20538,38.60893 ]
    },
    "properties": {
    "name":"The Wood Shack Soulard",
    "lowercase":"the wood shack soulard"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40741,38.63046 ]
    },
    "properties": {
    "name":"The Zodiac",
    "lowercase":"the zodiac"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.303,38.65605 ]
    },
    "properties": {
    "name":"Three Kings Public House",
    "lowercase":"three kings public house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.433397,38.602279 ]
    },
    "properties": {
    "name":"Three Kings Public House",
    "lowercase":"three kings public house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36337327,38.52879292 ]
    },
    "properties": {
    "name":"Three Kings Public House",
    "lowercase":"three kings public house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26167297,38.60267639 ]
    },
    "properties": {
    "name":"Three Monkeys",
    "lowercase":"three monkeys"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25123,38.61083 ]
    },
    "properties": {
    "name":"Thurman's in Shaw",
    "lowercase":"thurman's in shaw"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3199701,38.6124139 ]
    },
    "properties": {
    "name":"Tiffany's Original Diner",
    "lowercase":"tiffany's original diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25694,38.58878 ]
    },
    "properties": {
    "name":"Time Out Sports Bar & Grill",
    "lowercase":"time out sports bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.19649239,38.62419983 ]
    },
    "properties": {
    "name":"Tin Roof",
    "lowercase":"tin roof"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35238153,38.61225119 ]
    },
    "properties": {
    "name":"To Go Sushi",
    "lowercase":"to go sushi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.32411445,38.60925871 ]
    },
    "properties": {
    "name":"Toasty Subs",
    "lowercase":"toasty subs"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40753,38.55075 ]
    },
    "properties": {
    "name":"Tokyo Sushi",
    "lowercase":"tokyo sushi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.262068,38.639387 ]
    },
    "properties": {
    "name":"Tom's Bar & Grill",
    "lowercase":"tom's bar & grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.23631,38.59491 ]
    },
    "properties": {
    "name":"Tower Taco",
    "lowercase":"tower taco"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44669101,38.70166769 ]
    },
    "properties": {
    "name":"Trainwreck Saloon",
    "lowercase":"trainwreck saloon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35821533,38.61169434 ]
    },
    "properties": {
    "name":"Trainwreck Saloon",
    "lowercase":"trainwreck saloon"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30020142,38.59726715 ]
    },
    "properties": {
    "name":"Trattoria Marcella",
    "lowercase":"trattoria marcella"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.38357544,38.53338623 ]
    },
    "properties": {
    "name":"Trattoria Toscana",
    "lowercase":"trattoria toscana"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2428773,38.6001414 ]
    },
    "properties": {
    "name":"Tree House Vegetarian Restaurant",
    "lowercase":"tree house vegetarian restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2547487,38.6775993 ]
    },
    "properties": {
    "name":"Tripe City/Sampling's",
    "lowercase":"tripe city/sampling's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22889,38.63699 ]
    },
    "properties": {
    "name":"Triumph Grill",
    "lowercase":"triumph grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.247962,38.592109 ]
    },
    "properties": {
    "name":"Truc Lam",
    "lowercase":"truc lam"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2152357,38.602896 ]
    },
    "properties": {
    "name":"Trueman's Sports Bar",
    "lowercase":"trueman's sports bar"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3682288,38.6411287 ]
    },
    "properties": {
    "name":"Truffles Butchery",
    "lowercase":"truffles butchery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36820561,38.64122272 ]
    },
    "properties": {
    "name":"Truffles Restaurant",
    "lowercase":"truffles restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.21029,38.60727 ]
    },
    "properties": {
    "name":"Tucker's Place",
    "lowercase":"tucker's place"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33160686,38.51064851 ]
    },
    "properties": {
    "name":"Tucker's Place South",
    "lowercase":"tucker's place south"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22642131,38.63656648 ]
    },
    "properties": {
    "name":"Turn Restaurant",
    "lowercase":"turn restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33496,38.62295 ]
    },
    "properties": {
    "name":"Twin Oak Wood Fired Pizza & BBQ",
    "lowercase":"twin oak wood fired pizza & bbq"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33327,38.61851 ]
    },
    "properties": {
    "name":"Twin Peaks",
    "lowercase":"twin peaks"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.201351,38.60884996 ]
    },
    "properties": {
    "name":"Twisted Ranch",
    "lowercase":"twisted ranch"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4088272,38.5555083 ]
    },
    "properties": {
    "name":"Twisted Tree",
    "lowercase":"twisted tree"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22369,38.5997 ]
    },
    "properties": {
    "name":"Two Guys and a Chick",
    "lowercase":"two guys and a chick"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30853965,38.65691112 ]
    },
    "properties": {
    "name":"U-City Grill",
    "lowercase":"u-city grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2711999,38.59697 ]
    },
    "properties": {
    "name":"Uncle Bill's Pancake & Dinner House",
    "lowercase":"uncle bill's pancake & dinner house"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.35207346,38.52531575 ]
    },
    "properties": {
    "name":"Uncle Leo's Pizza",
    "lowercase":"uncle leo's pizza"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25600921,38.61975263 ]
    },
    "properties": {
    "name":"Union Loafers Cafe and Bread Bakery",
    "lowercase":"union loafers cafe and bread bakery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3399989,38.6488913 ]
    },
    "properties": {
    "name":"Uptown Cafe",
    "lowercase":"uptown cafe"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22582245,38.63788986 ]
    },
    "properties": {
    "name":"Urban Chestnut Brewing Company",
    "lowercase":"urban chestnut brewing company"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2410699,38.58081 ]
    },
    "properties": {
    "name":"Urban Eats",
    "lowercase":"urban eats"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.199427,38.630782 ]
    },
    "properties": {
    "name":"Urban Eats Cafe Central",
    "lowercase":"urban eats cafe central"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.41054092,38.63307282 ]
    },
    "properties": {
    "name":"Via Vino Enoteca",
    "lowercase":"via vino enoteca"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.25239826,38.63551131 ]
    },
    "properties": {
    "name":"Vicia",
    "lowercase":"vicia"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2128,38.62132 ]
    },
    "properties": {
    "name":"Vin de Set",
    "lowercase":"vin de set"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.30354,38.60555 ]
    },
    "properties": {
    "name":"Vinnie's Italian Beef and Gyros",
    "lowercase":"vinnie's italian beef and gyros"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22585,38.59344 ]
    },
    "properties": {
    "name":"Vista",
    "lowercase":"vista"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.38666591,38.58972014 ]
    },
    "properties": {
    "name":"Vitale's Deli",
    "lowercase":"vitale's deli"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2306,38.63703 ]
    },
    "properties": {
    "name":"Vito's Sicilian Pizzeria & Ristorante",
    "lowercase":"vito's sicilian pizzeria & ristorante"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4432699,38.511226 ]
    },
    "properties": {
    "name":"Vivianos Festa Italiano",
    "lowercase":"vivianos festa italiano"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.42866126,38.69535506 ]
    },
    "properties": {
    "name":"Vivola Express",
    "lowercase":"vivola express"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24298,38.60117 ]
    },
    "properties": {
    "name":"VP Square",
    "lowercase":"vp square"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.40961,38.55484 ]
    },
    "properties": {
    "name":"Walnut Grill - Sunset Hills",
    "lowercase":"walnut grill - sunset hills"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.43670386,38.60218048 ]
    },
    "properties": {
    "name":"Wan Fu Chinese Restaurant",
    "lowercase":"wan fu chinese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3473428,38.6361867 ]
    },
    "properties": {
    "name":"Weber Grill Restaurant",
    "lowercase":"weber grill restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3390485,38.5914895 ]
    },
    "properties": {
    "name":"Weber's Front Row",
    "lowercase":"weber's front row"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33932259,38.59056645 ]
    },
    "properties": {
    "name":"Webster Garden",
    "lowercase":"webster garden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33854357,38.59146614 ]
    },
    "properties": {
    "name":"Webster Wok",
    "lowercase":"webster wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24302,38.60038 ]
    },
    "properties": {
    "name":"Wei Hong Bakery & Restaurant",
    "lowercase":"wei hong bakery & restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33741,38.67183 ]
    },
    "properties": {
    "name":"Wei Hong Seafood Restaurant",
    "lowercase":"wei hong seafood restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.28675312,38.61679639 ]
    },
    "properties": {
    "name":"Wendy's",
    "lowercase":"wendy's"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24967,38.64252 ]
    },
    "properties": {
    "name":"West End Grill & Pub",
    "lowercase":"west end grill & pub"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.261507,38.6402265 ]
    },
    "properties": {
    "name":"West End Wok",
    "lowercase":"west end wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.4471,38.70051 ]
    },
    "properties": {
    "name":"Westport Social",
    "lowercase":"westport social"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.197057,38.623593 ]
    },
    "properties": {
    "name":"Wheelhouse Downtown",
    "lowercase":"wheelhouse downtown"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.43350272,38.60225883 ]
    },
    "properties": {
    "name":"Which Wich",
    "lowercase":"which wich"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.24762,38.62788 ]
    },
    "properties": {
    "name":"White Castle",
    "lowercase":"white castle"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.205847,38.631735 ]
    },
    "properties": {
    "name":"White Knight Diner",
    "lowercase":"white knight diner"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.332962,38.648304 ]
    },
    "properties": {
    "name":"Whitebox Eatery",
    "lowercase":"whitebox eatery"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33827089,38.65094665 ]
    },
    "properties": {
    "name":"Wicked Greenz",
    "lowercase":"wicked greenz"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2620669,38.6402038 ]
    },
    "properties": {
    "name":"Wild Flower Restaurant & Catering",
    "lowercase":"wild flower restaurant & catering"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3214037,38.6577059 ]
    },
    "properties": {
    "name":"Winslow's Home",
    "lowercase":"winslow's home"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3228233,38.6132513 ]
    },
    "properties": {
    "name":"Wong's Inn Chinese Restaurant",
    "lowercase":"wong's inn chinese restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3055295,38.6555097 ]
    },
    "properties": {
    "name":"Wong's Wok",
    "lowercase":"wong's wok"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34659639,38.67306822 ]
    },
    "properties": {
    "name":"Wonton King",
    "lowercase":"wonton king"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.277542,38.58414 ]
    },
    "properties": {
    "name":"Yapi Mediterranean Subs and Sandwiches",
    "lowercase":"yapi mediterranean subs and sandwiches"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2290474,38.593571 ]
    },
    "properties": {
    "name":"Yaquis",
    "lowercase":"yaquis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.22141,38.60018 ]
    },
    "properties": {
    "name":"Yemanja Brasil",
    "lowercase":"yemanja brasil"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.34527,38.6372 ]
    },
    "properties": {
    "name":"Yen Ching Restaurant",
    "lowercase":"yen ching restaurant"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27185,38.68604 ]
    },
    "properties": {
    "name":"Yet Bun Chop Suey",
    "lowercase":"yet bun chop suey"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.1915741,38.62918362 ]
    },
    "properties": {
    "name":"Yiro Gyro",
    "lowercase":"yiro gyro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.2421968,38.6358315 ]
    },
    "properties": {
    "name":"Yiro Gyro",
    "lowercase":"yiro gyro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.44362489,38.51241003 ]
    },
    "properties": {
    "name":"Yiro Gyro",
    "lowercase":"yiro gyro"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.36689238,38.56240863 ]
    },
    "properties": {
    "name":"Yolklore",
    "lowercase":"yolklore"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.33663773,38.70242577 ]
    },
    "properties": {
    "name":"Yummy Grill",
    "lowercase":"yummy grill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.344464,38.673689 ]
    },
    "properties": {
    "name":"Yummy17",
    "lowercase":"yummy17"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3741244,38.5581411 ]
    },
    "properties": {
    "name":"Z E N Thai & Japanese Cuisine",
    "lowercase":"z e n thai & japanese cuisine"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.274905,38.6159188 ]
    },
    "properties": {
    "name":"Zia's on the Hill",
    "lowercase":"zia's on the hill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.27049,38.57908 ]
    },
    "properties": {
    "name":"Zlatne Kapi",
    "lowercase":"zlatne kapi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.26393,38.58424 ]
    },
    "properties": {
    "name":"Zlatno Zito",
    "lowercase":"zlatno zito"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -90.3002,38.64966 ]
    },
    "properties": {
    "name":"ZZA Pizza + Salad",
    "lowercase":"zza pizza + salad"
    }
  }
]
};

//////////////////////////SEARCH FUNCTION//////////////////////////////
var layerIDs = []; // Will contain a list used to filter against.
var filterInput = document.getElementById('filter-input');

map.on('load', function() {
  // Add a GeoJSON source containing place coordinates and information.
  map.addSource('places', {
    "type": "geojson",
    "data": places
  });


  places.features.forEach(function(feature) {
    var symbol = feature.properties["lowercase"];
    var uppercase = feature.properties["name"];
    var layerID = 'poi-' + symbol;

    // Add a layer for this symbol type if it hasn't been added already.
    if (!map.getLayer(layerID)) {
      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "places",
        "layout": {
          //"icon-image": "dot-10",
          "icon-allow-overlap": true,
          //"text-field": uppercase,
          "text-font": ["Arial Unicode MS Bold"],
          "text-size": 9,
          // "text-transform": "uppercase",
          "text-letter-spacing": 0.05,
          // "text-offset": [0, 1.5]
        },
        "paint": {
          "text-color": "#202",
          "text-halo-color": "#fff",
          "text-halo-width": 2
        },
        "filter": ["==", "lowercase", symbol]
      });
      layerIDs.push(layerID);
    }
  });

  filterInput.addEventListener('keyup', function(e) {
    // If the input value matches a layerID set
    // it's visibility to 'visible' or else hide it.
    var value = e.target.value.trim().toLowerCase();
    layerIDs.forEach(function(layerID) {
      map.setLayoutProperty(layerID, 'visibility',
      layerID.indexOf(value) > -1 ? 'visible' : 'none');
    });
  });
});


map.on('load', function () {

  //////////////////////////CENSUS DATA//////////////////////////////
  // Join local JSON data with vector tile geometry
  // USA unemployment rate in 2009
  // Source https://data.bls.gov/timeseries/LNS14000000
  var maxValue_race = 100;
  var maxValue_income = 100000;
  var data_race = [
    {"fips":"29183310100","white":97.57},
    {"fips":"17133600402","white":98.29},
    {"fips":"29183311500","white":92.28},
    {"fips":"17163503203","white":98.54},
    {"fips":"17163503906","white":96.87},
    {"fips":"17083010300","white":97.2},
    {"fips":"17133600102","white":97.78},
    {"fips":"17163503100","white":95.36},
    {"fips":"29183980000","white":00},
    {"fips":"17119402803","white":95.35},
    {"fips":"17119404100","white":94.01},
    {"fips":"17163503202","white":84.91},
    {"fips":"17119403532","white":95.36},
    {"fips":"29189221621","white":95.32},
    {"fips":"17119400903","white":80.76},
    {"fips":"17133600401","white":98.12},
    {"fips":"17119402801","white":93.99},
    {"fips":"29189221502","white":96.08},
    {"fips":"17163503904","white":75.86},
    {"fips":"29099700503","white":98.3},
    {"fips":"29189221421","white":94.34},
    {"fips":"17119402721","white":92.72},
    {"fips":"29189210100","white":31.98},
    {"fips":"17119403101","white":81.34},
    {"fips":"29189221503","white":88.64},
    {"fips":"17119401903","white":95.1},
    {"fips":"29099700304","white":96.81},
    {"fips":"17163503404","white":83.13},
    {"fips":"17119402701","white":87.76},
    {"fips":"29189221629","white":88.81},
    {"fips":"17119403534","white":92.4},
    {"fips":"29099700109","white":96.78},
    {"fips":"29099700302","white":96.4},
    {"fips":"29099700107","white":97.36},
    {"fips":"29189221628","white":84.37},
    {"fips":"29189211401","white":72.34},
    {"fips":"29189210927","white":47.07},
    {"fips":"17163502404","white":58.21},
    {"fips":"17119403531","white":94.38},
    {"fips":"17163503304","white":77.11},
    {"fips":"29099700206","white":96.22},
    {"fips":"17119403533","white":93.08},
    {"fips":"29099700601","white":95.93},
    {"fips":"17119403502","white":89.58},
    {"fips":"29183311103","white":94.93},
    {"fips":"29189222100","white":93.27},
    {"fips":"17163502300","white":37.41},
    {"fips":"29183311148","white":93.96},
    {"fips":"29099700603","white":97.71},
    {"fips":"17163504353","white":84.09},
    {"fips":"29189217921","white":90.12},
    {"fips":"17163504500","white":1.02},
    {"fips":"29189215105","white":79.35},
    {"fips":"17163503412","white":87.38},
    {"fips":"29189210912","white":47.58},
    {"fips":"17119402722","white":95.36},
    {"fips":"17163503402","white":67.5},
    {"fips":"29099700211","white":95.47},
    {"fips":"29189213102","white":85.89},
    {"fips":"29189221423","white":95.51},
    {"fips":"17119403121","white":89.91},
    {"fips":"29189221627","white":91.45},
    {"fips":"29099700207","white":96.39},
    {"fips":"29183311132","white":94.43},
    {"fips":"17163502603","white":27.58},
    {"fips":"17133600101","white":97.63},
    {"fips":"29510127000","white":14.13},
    {"fips":"29189220444","white":96.29},
    {"fips":"29189221800","white":8.53},
    {"fips":"29189217701","white":87.44},
    {"fips":"29189215143","white":91.06},
    {"fips":"29189221626","white":91.97},
    {"fips":"29189217500","white":95.13},
    {"fips":"17119400200","white":84.98},
    {"fips":"29099700114","white":96.54},
    {"fips":"29189221201","white":94.4},
    {"fips":"29189217702","white":88.51},
    {"fips":"17163503905","white":97.84},
    {"fips":"17119401000","white":96.86},
    {"fips":"17163503323","white":80.82},
    {"fips":"29099700113","white":96.93},
    {"fips":"29189217600","white":93.82},
    {"fips":"29189215202","white":80.68},
    {"fips":"17163502100","white":54.26},
    {"fips":"29183311124","white":90.88},
    {"fips":"17119401701","white":86.61},
    {"fips":"17119401800","white":97.07},
    {"fips":"29189215201","white":79.16},
    {"fips":"29189210804","white":14.57},
    {"fips":"29189211334","white":81.25},
    {"fips":"29189215400","white":94.51},
    {"fips":"17119401901","white":96.52},
    {"fips":"29099700209","white":94.8},
    {"fips":"29189221202","white":95.71},
    {"fips":"17119402900","white":87.42},
    {"fips":"17163503800","white":81.89},
    {"fips":"29099700115","white":97.25},
    {"fips":"29183311322","white":91.67},
    {"fips":"17163503322","white":78.01},
    {"fips":"17163504355","white":79.54},
    {"fips":"17119403122","white":85.05},
    {"fips":"17163503211","white":78.79},
    {"fips":"29099700203","white":94.25},
    {"fips":"29189221335","white":95.25},
    {"fips":"29189220445","white":96.68},
    {"fips":"29189213101","white":71.08},
    {"fips":"17163502900","white":1.97},
    {"fips":"17163503414","white":72.24},
    {"fips":"29099700110","white":96.31},
    {"fips":"29189222000","white":96.73},
    {"fips":"29183311602","white":91.94},
    {"fips":"17119402400","white":67.57},
    {"fips":"29189220432","white":96.14},
    {"fips":"17119403402","white":81.03},
    {"fips":"29189218103","white":87},
    {"fips":"29099700208","white":96.06},
    {"fips":"29099700118","white":96.43},
    {"fips":"29189215302","white":87.41},
    {"fips":"29189215141","white":84.95},
    {"fips":"29189221422","white":94.09},
    {"fips":"17119401721","white":97.1},
    {"fips":"29189210921","white":50.28},
    {"fips":"29099700111","white":96.19},
    {"fips":"17163503411","white":85.55},
    {"fips":"29189215232","white":85.95},
    {"fips":"29189221301","white":95.33},
    {"fips":"17163504352","white":82.42},
    {"fips":"29189213700","white":32.2},
    {"fips":"29189215600","white":33.93},
    {"fips":"17119403002","white":89.32},
    {"fips":"29189220300","white":83.19},
    {"fips":"29510112100","white":65.55},
    {"fips":"29189217842","white":83.46},
    {"fips":"17119401200","white":98.04},
    {"fips":"29189217852","white":91.44},
    {"fips":"29183311151","white":85.46},
    {"fips":"17163501603","white":66.78},
    {"fips":"29189210600","white":30.95},
    {"fips":"29189211500","white":5.95},
    {"fips":"17163502602","white":35.55},
    {"fips":"29189220442","white":95.99},
    {"fips":"29189218003","white":89.6},
    {"fips":"17119402000","white":70.43},
    {"fips":"29183311312","white":92.07},
    {"fips":"29189215301","white":85.48},
    {"fips":"29099700210","white":95.44},
    {"fips":"29189215001","white":63.59},
    {"fips":"29099700119","white":96.92},
    {"fips":"29183311001","white":85.01},
    {"fips":"29189217802","white":90.84},
    {"fips":"17119403001","white":87.32},
    {"fips":"17163503334","white":66.16},
    {"fips":"17119400952","white":85.04},
    {"fips":"29183311736","white":90.11},
    {"fips":"29183312400","white":93.4},
    {"fips":"29189220601","white":93.35},
    {"fips":"29189211402","white":49.25},
    {"fips":"29189215144","white":81.16},
    {"fips":"17163503332","white":63.4},
    {"fips":"29183311114","white":92.31},
    {"fips":"29189218011","white":81.9},
    {"fips":"29183310201","white":92.31},
    {"fips":"29189221625","white":91.19},
    {"fips":"17163503413","white":61.85},
    {"fips":"29189211333","white":67.35},
    {"fips":"29189220100","white":92.46},
    {"fips":"29189218012","white":92.64},
    {"fips":"29189217806","white":90.78},
    {"fips":"29189213202","white":77.46},
    {"fips":"29189213203","white":87.22},
    {"fips":"17119401300","white":94.56},
    {"fips":"29183311732","white":91.29},
    {"fips":"17119400951","white":94.52},
    {"fips":"29099700303","white":96.61},
    {"fips":"29189215500","white":78.34},
    {"fips":"29189214900","white":68.92},
    {"fips":"17163504354","white":72.84},
    {"fips":"29183310602","white":94.38},
    {"fips":"29189210806","white":9.78},
    {"fips":"29189217923","white":89.48},
    {"fips":"29189221332","white":94.47},
    {"fips":"29189210805","white":15.1},
    {"fips":"29189212700","white":26.42},
    {"fips":"29189210702","white":18.88},
    {"fips":"29189220431","white":92.62},
    {"fips":"29189218900","white":63.09},
    {"fips":"29183311122","white":84.91},
    {"fips":"29189217807","white":90.16},
    {"fips":"29189217941","white":90.75},
    {"fips":"17163502800","white":2.1},
    {"fips":"17119400700","white":3.33},
    {"fips":"17163501300","white":0.98},
    {"fips":"29189220801","white":92.74},
    {"fips":"29189213300","white":54.29},
    {"fips":"29183311152","white":93.31},
    {"fips":"17163503324","white":55.35},
    {"fips":"29189215231","white":88.21},
    {"fips":"29189221100","white":94.6},
    {"fips":"29189211700","white":41.86},
    {"fips":"29189217932","white":82.35},
    {"fips":"29183311422","white":92.36},
    {"fips":"29189221302","white":92.75},
    {"fips":"29099700117","white":96.5},
    {"fips":"29189220803","white":94.96},
    {"fips":"29189219700","white":90.96},
    {"fips":"29183310802","white":89.75},
    {"fips":"29189219500","white":93.46},
    {"fips":"29189211000","white":56.64},
    {"fips":"17119402100","white":47.46},
    {"fips":"17119404000","white":78.01},
    {"fips":"29189210200","white":16.86},
    {"fips":"29510126900","white":1.04},
    {"fips":"17119400904","white":95.9},
    {"fips":"29189221424","white":94.94},
    {"fips":"29189213400","white":57.14},
    {"fips":"29189220602","white":94.97},
    {"fips":"29189217841","white":86.08},
    {"fips":"17163502200","white":5.57},
    {"fips":"17163502500","white":0.55},
    {"fips":"29189210803","white":40.69},
    {"fips":"29183311203","white":91.23},
    {"fips":"29189211600","white":41.35},
    {"fips":"29189211102","white":42.51},
    {"fips":"29510109700","white":4.62},
    {"fips":"29183310902","white":88.28},
    {"fips":"17163501200","white":0.64},
    {"fips":"29189215142","white":64.55},
    {"fips":"29183311145","white":91.19},
    {"fips":"29189220200","white":94.39},
    {"fips":"29189211201","white":57.27},
    {"fips":"17163501501","white":38.85},
    {"fips":"29189219400","white":96.58},
    {"fips":"29189217944","white":87.85},
    {"fips":"29189220502","white":90.28},
    {"fips":"29189219600","white":90.53},
    {"fips":"29189219800","white":91.82},
    {"fips":"17119401100","white":96.43},
    {"fips":"29183311211","white":88.46},
    {"fips":"17163503301","white":78.09},
    {"fips":"29189214300","white":31.96},
    {"fips":"29189215102","white":76.57},
    {"fips":"29189210703","white":21.54},
    {"fips":"29189212400","white":14.18},
    {"fips":"29189217931","white":89.39},
    {"fips":"29510126600","white":18.71},
    {"fips":"29189215003","white":83.68},
    {"fips":"29510127600","white":75.33},
    {"fips":"29183310202","white":91.51},
    {"fips":"17119402200","white":62.65},
    {"fips":"29189212001","white":9.82},
    {"fips":"17119401500","white":86.21},
    {"fips":"29189220441","white":94.3},
    {"fips":"29189215700","white":17.1},
    {"fips":"17119400802","white":91.37},
    {"fips":"29510101800","white":63.94},
    {"fips":"29189217942","white":87.5},
    {"fips":"29510127400","white":25.15},
    {"fips":"29189218402","white":95.65},
    {"fips":"29189221506","white":90.99},
    {"fips":"17119403401","white":83.05},
    {"fips":"29189220446","white":97.32},
    {"fips":"29189221624","white":90.45},
    {"fips":"17163501502","white":68.62},
    {"fips":"29189221900","white":94.58},
    {"fips":"17163501800","white":78.76},
    {"fips":"29189214200","white":8.13},
    {"fips":"29189215900","white":21.98},
    {"fips":"17119403200","white":90.19},
    {"fips":"29189211101","white":65.8},
    {"fips":"29189220802","white":92.3},
    {"fips":"29189212600","white":43.07},
    {"fips":"17163501604","white":54.81},
    {"fips":"29189210925","white":54.4},
    {"fips":"29189218800","white":96.74},
    {"fips":"29183310700","white":86.87},
    {"fips":"29183311721","white":88.89},
    {"fips":"29189214700","white":66.81},
    {"fips":"29183311149","white":91.46},
    {"fips":"29189211332","white":79.01},
    {"fips":"29183310301","white":95.39},
    {"fips":"29183311331","white":93.69},
    {"fips":"29183311735","white":90.78},
    {"fips":"29183311146","white":88.16},
    {"fips":"17163501602","white":68.12},
    {"fips":"29510108100","white":4.17},
    {"fips":"29183311154","white":91.47},
    {"fips":"17119402300","white":81.29},
    {"fips":"17163504600","white":1.21},
    {"fips":"29189215800","white":72.75},
    {"fips":"17163504351","white":76.67},
    {"fips":"29183311150","white":91.56},
    {"fips":"29189211301","white":86.6},
    {"fips":"29189213600","white":14.15},
    {"fips":"29510109600","white":0.48},
    {"fips":"29189214800","white":75.98},
    {"fips":"29183311296","white":93.68},
    {"fips":"29189220501","white":94.47},
    {"fips":"17119401400","white":88.27},
    {"fips":"29189217943","white":86.48},
    {"fips":"29183311221","white":92.34},
    {"fips":"29189218401","white":95.84},
    {"fips":"17163500900","white":0.71},
    {"fips":"29189210400","white":8.53},
    {"fips":"29189212200","white":3.22},
    {"fips":"29183311734","white":90.28},
    {"fips":"29189218300","white":87.92},
    {"fips":"29183311212","white":87.14},
    {"fips":"17163500400","white":0.49},
    {"fips":"29189218500","white":96},
    {"fips":"29189213500","white":68.81},
    {"fips":"29183310801","white":88.57},
    {"fips":"29189214400","white":70.76},
    {"fips":"29189218201","white":93.4},
    {"fips":"29189216200","white":81.32},
    {"fips":"29183311311","white":92.09},
    {"fips":"29189210501","white":4.12},
    {"fips":"29189211331","white":79.64},
    {"fips":"29183311004","white":80.89},
    {"fips":"29189212500","white":25.2},
    {"fips":"29510126800","white":83.32},
    {"fips":"29510124600","white":31.33},
    {"fips":"17163501700","white":64.95},
    {"fips":"29510118600","white":47.79},
    {"fips":"29189213204","white":56.99},
    {"fips":"29189218102","white":85.52},
    {"fips":"29189219900","white":90.91},
    {"fips":"29189215004","white":72.44},
    {"fips":"29189215005","white":70.82},
    {"fips":"29189216400","white":84.31},
    {"fips":"29510126700","white":22.58},
    {"fips":"29183311003","white":78.08},
    {"fips":"29510115600","white":45.63},
    {"fips":"29189220443","white":95.04},
    {"fips":"29189211801","white":13.01},
    {"fips":"29183310502","white":87.61},
    {"fips":"29189217851","white":91.45},
    {"fips":"29510102200","white":94.58},
    {"fips":"29183311147","white":92.1},
    {"fips":"29510125600","white":48.92},
    {"fips":"29183310302","white":88.19},
    {"fips":"29183311294","white":93.62},
    {"fips":"29189212300","white":16.16},
    {"fips":"29189210924","white":43.68},
    {"fips":"17119401904","white":98.17},
    {"fips":"29189210300","white":27.29},
    {"fips":"29189220701","white":94.95},
    {"fips":"17119400600","white":33.78},
    {"fips":"29189215103","white":74.89},
    {"fips":"29189220703","white":94.55},
    {"fips":"29183310903","white":89.82},
    {"fips":"29189221000","white":69.26},
    {"fips":"29189214500","white":70.25},
    {"fips":"29189210928","white":38.96},
    {"fips":"29189211202","white":89.8},
    {"fips":"29189216600","white":90.95},
    {"fips":"29189213800","white":2.3},
    {"fips":"29189210502","white":5.24},
    {"fips":"29189210923","white":65.94},
    {"fips":"29189213900","white":1.1},
    {"fips":"29510116200","white":64.28},
    {"fips":"17119400101","white":92.82},
    {"fips":"17163501100","white":0.28},
    {"fips":"29189218600","white":73.56},
    {"fips":"29183310501","white":80.64},
    {"fips":"29189217300","white":83.68},
    {"fips":"17119401722","white":97.39},
    {"fips":"29189216500","white":71.69},
    {"fips":"29183311733","white":91.45},
    {"fips":"29189220001","white":95.97},
    {"fips":"29189211900","white":6.97},
    {"fips":"29189217000","white":76.2},
    {"fips":"29189212002","white":4.08},
    {"fips":"29183311391","white":91.6},
    {"fips":"29510127300","white":27.59},
    {"fips":"29189214601","white":74.03},
    {"fips":"17119400102","white":85.53},
    {"fips":"17163501400","white":1.68},
    {"fips":"17119403300","white":84.75},
    {"fips":"29099700116","white":96.61},
    {"fips":"29189220702","white":95.98},
    {"fips":"29183310400","white":90.69},
    {"fips":"29510127200","white":76.07},
    {"fips":"29189216700","white":72.52},
    {"fips":"29189212101","white":8.16},
    {"fips":"17163502401","white":3.08},
    {"fips":"29189217400","white":89.71},
    {"fips":"29510101300","white":85.15},
    {"fips":"29189216300","white":76.44},
    {"fips":"29189219200","white":90.53},
    {"fips":"17119402600","white":69.11},
    {"fips":"17163501605","white":80.07},
    {"fips":"29510104500","white":77.09},
    {"fips":"17163502700","white":0.48},
    {"fips":"17163501900","white":85.06},
    {"fips":"29189219300","white":86.12},
    {"fips":"29183310601","white":91.31},
    {"fips":"29189211802","white":15.64},
    {"fips":"29189219100","white":94.72},
    {"fips":"29189214602","white":74.55},
    {"fips":"29510113500","white":94.38},
    {"fips":"29510127500","white":23.29},
    {"fips":"29183312300","white":95.57},
    {"fips":"29189212102","white":6.35},
    {"fips":"29510101500","white":62.7},
    {"fips":"29510127100","white":2.69},
    {"fips":"29510103800","white":92.59},
    {"fips":"29189216100","white":62.29},
    {"fips":"29183310901","white":82.41},
    {"fips":"17163500500","white":0.19},
    {"fips":"29510115300","white":54.4},
    {"fips":"29510107300","white":1.08},
    {"fips":"29510114102","white":93.77},
    {"fips":"29189210926","white":75.11},
    {"fips":"29510118100","white":26.81},
    {"fips":"29510102100","white":90.36},
    {"fips":"29189216800","white":86.27},
    {"fips":"29189210704","white":7.28},
    {"fips":"29510114200","white":83.65},
    {"fips":"29510125700","white":1.77},
    {"fips":"29510118400","white":62.81},
    {"fips":"29189220002","white":93.84},
    {"fips":"29510103600","white":89.01},
    {"fips":"29510114300","white":89.59},
    {"fips":"29510115200","white":51.92},
    {"fips":"17119400801","white":94.91},
    {"fips":"29510102300","white":92.15},
    {"fips":"17119402500","white":42.71},
    {"fips":"29510117200","white":46.97},
    {"fips":"29510110500","white":1.92},
    {"fips":"29510101100","white":87.85},
    {"fips":"29510106700","white":1.42},
    {"fips":"29510103100","white":88.63},
    {"fips":"29510115500","white":39.61},
    {"fips":"29510105500","white":2.84},
    {"fips":"29510119300","white":60.74},
    {"fips":"29510124300","white":64.96},
    {"fips":"29510107600","white":0.31},
    {"fips":"29510105198","white":70.83},
    {"fips":"29189217200","white":71.02},
    {"fips":"29510117400","white":56.77},
    {"fips":"29510115100","white":75.13},
    {"fips":"29510104200","white":87.15},
    {"fips":"29510123200","white":59.79},
    {"fips":"29510106400","white":0.92},
    {"fips":"29189214100","white":3.16},
    {"fips":"29510125500","white":60.24},
    {"fips":"29510121100","white":13.76},
    {"fips":"29510111100","white":2.96},
    {"fips":"29510107400","white":1.18},
    {"fips":"29510117100","white":70.01},
    {"fips":"29510101200","white":89.65},
    {"fips":"29510106200","white":1.04},
    {"fips":"29510106500","white":3.18},
    {"fips":"29510124100","white":22.83},
    {"fips":"29510111200","white":6.03},
    {"fips":"29510115700","white":34.9},
    {"fips":"29510123100","white":28.77},
    {"fips":"29510106300","white":0.81},
    {"fips":"29510116400","white":24.84},
    {"fips":"29510110100","white":1.14},
    {"fips":"29510115400","white":71.78},
    {"fips":"29510105300","white":6.04},
    {"fips":"29510106100","white":1.07},
    {"fips":"29510102500","white":89.78},
    {"fips":"29510111300","white":0.84},
    {"fips":"29510114101","white":71.48},
    {"fips":"29510110300","white":0.81},
    {"fips":"29510112400","white":68.13},
    {"fips":"29510123300","white":65},
    {"fips":"29510107500","white":1.36},
    {"fips":"29510111400","white":0.97},
    {"fips":"29510103700","white":89.29},
    {"fips":"29510103400","white":93.04},
    {"fips":"29510116500","white":42.9},
    {"fips":"29510110400","white":1.38},
    {"fips":"29510101400","white":64.71},
    {"fips":"29510121200","white":0.77},
    {"fips":"29510106600","white":0.84},
    {"fips":"29510112300","white":1.08},
    {"fips":"29510105200","white":37.2},
    {"fips":"29510108200","white":3.67},
    {"fips":"29510124200","white":29.3},
    {"fips":"29510111500","white":2.28},
    {"fips":"29510110200","white":1.66},
    {"fips":"29510116100","white":47.43},
    {"fips":"29510108300","white":5.43},
    {"fips":"29510119200","white":36.58},
    {"fips":"29510105400","white":8.9},
    {"fips":"29510112200","white":3.4},
    {"fips":"29189216000","white":9.87},
    {"fips":"29189216900","white":73.06},
    {"fips":"29510107200","white":1.49},
    {"fips":"29510116301","white":65.52},
    {"fips":"29510116302","white":27.07},
    {"fips":"29510102400","white":85.55},
    {"fips":"29510119102","white":63.89},
    {"fips":"29510120200","white":9.52},
    {"fips":"29510119101","white":52.09}];
    var data_income = [
      {"fips":"29183310100","income":25710},
      {"fips":"17133600402","income":34099},
      {"fips":"29183311500","income":20355},
      {"fips":"17163503203","income":31727},
      {"fips":"17163503906","income":33343},
      {"fips":"17083010300","income":27799},
      {"fips":"17133600102","income":45027},
      {"fips":"17163503100","income":24160},
      {"fips":"17119402803","income":35469},
      {"fips":"17119404100","income":24559},
      {"fips":"17163503202","income":30460},
      {"fips":"17119403532","income":33149},
      {"fips":"29189221621","income":57856},
      {"fips":"17119400903","income":23748},
      {"fips":"17133600401","income":33576},
      {"fips":"17119402801","income":34852},
      {"fips":"29189221502","income":40638},
      {"fips":"17163503904","income":36722},
      {"fips":"29099700503","income":23767},
      {"fips":"29189221421","income":40652},
      {"fips":"17119402721","income":31969},
      {"fips":"29189210100","income":20334},
      {"fips":"17119403101","income":26081},
      {"fips":"29189221503","income":35559},
      {"fips":"17119401903","income":23158},
      {"fips":"29099700304","income":28346},
      {"fips":"17163503404","income":47071},
      {"fips":"17119402701","income":32607},
      {"fips":"29189221629","income":69221},
      {"fips":"17119403534","income":39302},
      {"fips":"29099700109","income":30380},
      {"fips":"29099700302","income":25495},
      {"fips":"29099700107","income":29199},
      {"fips":"29189221628","income":55163},
      {"fips":"29189211401","income":26858},
      {"fips":"29189210927","income":43657},
      {"fips":"17163502404","income":15131},
      {"fips":"17119403531","income":31445},
      {"fips":"17163503304","income":25814},
      {"fips":"29099700206","income":21588},
      {"fips":"17119403533","income":41607},
      {"fips":"29099700601","income":25210},
      {"fips":"17119403502","income":35628},
      {"fips":"29183311103","income":55110},
      {"fips":"29189222100","income":50127},
      {"fips":"17163502300","income":13646},
      {"fips":"29183311148","income":39616},
      {"fips":"29099700603","income":26751},
      {"fips":"17163504353","income":45120},
      {"fips":"29189217921","income":54757},
      {"fips":"17163504500","income":9602},
      {"fips":"29189215105","income":42520},
      {"fips":"17163503412","income":33922},
      {"fips":"29189210912","income":37735},
      {"fips":"17119402722","income":38619},
      {"fips":"17163503402","income":30540},
      {"fips":"29099700211","income":26613},
      {"fips":"29189213102","income":29848},
      {"fips":"29189221423","income":41911},
      {"fips":"17119403121","income":39164},
      {"fips":"29189221627","income":78200},
      {"fips":"29099700207","income":22889},
      {"fips":"29183311132","income":47339},
      {"fips":"17163502603","income":13512},
      {"fips":"17133600101","income":39673},
      {"fips":"29510127000","income":10330},
      {"fips":"29189220444","income":38688},
      {"fips":"29189221800","income":18167},
      {"fips":"29189217701","income":91602},
      {"fips":"29189215143","income":28753},
      {"fips":"29189221626","income":63262},
      {"fips":"29189217500","income":78212},
      {"fips":"17119400200","income":17866},
      {"fips":"29099700114","income":25125},
      {"fips":"29189221201","income":65444},
      {"fips":"29189217702","income":60543},
      {"fips":"17163503905","income":37842},
      {"fips":"17119401000","income":19933},
      {"fips":"17163503323","income":48956},
      {"fips":"29099700113","income":30196},
      {"fips":"29189217600","income":75451},
      {"fips":"29189215202","income":61520},
      {"fips":"17163502100","income":13608},
      {"fips":"29183311124","income":36413},
      {"fips":"17119401701","income":17819},
      {"fips":"17119401800","income":28849},
      {"fips":"29189215201","income":64490},
      {"fips":"29189210804","income":23035},
      {"fips":"29189211334","income":23645},
      {"fips":"29189215400","income":99871},
      {"fips":"17119401901","income":29687},
      {"fips":"29099700209","income":31330},
      {"fips":"29189221202","income":48216},
      {"fips":"17119402900","income":32636},
      {"fips":"17163503800","income":32050},
      {"fips":"29099700115","income":29539},
      {"fips":"29183311322","income":36307},
      {"fips":"17163503322","income":35882},
      {"fips":"17163504355","income":39095},
      {"fips":"17119403122","income":36907},
      {"fips":"17163503211","income":44757},
      {"fips":"29099700203","income":29040},
      {"fips":"29189221335","income":38186},
      {"fips":"29189220445","income":51880},
      {"fips":"29189213101","income":25267},
      {"fips":"17163502900","income":19097},
      {"fips":"17163503414","income":28384},
      {"fips":"29099700110","income":29071},
      {"fips":"29189222000","income":50162},
      {"fips":"29183311602","income":31072},
      {"fips":"17119402400","income":22457},
      {"fips":"29189220432","income":33453},
      {"fips":"17119403402","income":24931},
      {"fips":"29189218103","income":42072},
      {"fips":"29099700208","income":25051},
      {"fips":"29099700118","income":24523},
      {"fips":"29189215302","income":82943},
      {"fips":"29189215141","income":49217},
      {"fips":"29189221422","income":35056},
      {"fips":"17119401721","income":30381},
      {"fips":"29189210921","income":25642},
      {"fips":"29099700111","income":21864},
      {"fips":"17163503411","income":25579},
      {"fips":"29189215232","income":54217},
      {"fips":"29189221301","income":29042},
      {"fips":"17163504352","income":32652},
      {"fips":"29189213700","income":24313},
      {"fips":"29189215600","income":24413},
      {"fips":"17119403002","income":35720},
      {"fips":"29189220300","income":19368},
      {"fips":"29510112100","income":57504},
      {"fips":"29189217842","income":63477},
      {"fips":"17119401200","income":25380},
      {"fips":"29189217852","income":49213},
      {"fips":"29183311151","income":42512},
      {"fips":"17163501603","income":19893},
      {"fips":"29189210600","income":19490},
      {"fips":"29189211500","income":16580},
      {"fips":"17163502602","income":17789},
      {"fips":"29189220442","income":31631},
      {"fips":"29189218003","income":45782},
      {"fips":"17119402000","income":19866},
      {"fips":"29183311312","income":39211},
      {"fips":"29189215301","income":72570},
      {"fips":"29099700210","income":22640},
      {"fips":"29189215001","income":26438},
      {"fips":"29099700119","income":28537},
      {"fips":"29183311001","income":34596},
      {"fips":"29189217802","income":43901},
      {"fips":"17119403001","income":27316},
      {"fips":"17163503334","income":30452},
      {"fips":"17119400952","income":23837},
      {"fips":"29183311736","income":37918},
      {"fips":"29183312400","income":22727},
      {"fips":"29189220601","income":31563},
      {"fips":"29189211402","income":27077},
      {"fips":"29189215144","income":36609},
      {"fips":"17163503332","income":26034},
      {"fips":"29183311114","income":38095},
      {"fips":"29189218011","income":40397},
      {"fips":"29183310201","income":39977},
      {"fips":"29189221625","income":40450},
      {"fips":"17163503413","income":30149},
      {"fips":"29189211333","income":34516},
      {"fips":"29189220100","income":21369},
      {"fips":"29189218012","income":52020},
      {"fips":"29189217806","income":31414},
      {"fips":"29189213202","income":29429},
      {"fips":"29189213203","income":32327},
      {"fips":"17119401300","income":23498},
      {"fips":"29183311732","income":30149},
      {"fips":"17119400951","income":30945},
      {"fips":"29099700303","income":25129},
      {"fips":"29189215500","income":63991},
      {"fips":"29189214900","income":22172},
      {"fips":"17163504354","income":40387},
      {"fips":"29183310602","income":37998},
      {"fips":"29189210806","income":24334},
      {"fips":"29189217923","income":37632},
      {"fips":"29189221332","income":34700},
      {"fips":"29189210805","income":21603},
      {"fips":"29189212700","income":17882},
      {"fips":"29189210702","income":19512},
      {"fips":"29189220431","income":35913},
      {"fips":"29189218900","income":32288},
      {"fips":"29183311122","income":33394},
      {"fips":"29189217807","income":43938},
      {"fips":"29189217941","income":33861},
      {"fips":"17163502800","income":10858},
      {"fips":"17119400700","income":13332},
      {"fips":"17163501300","income":14346},
      {"fips":"29189220801","income":36648},
      {"fips":"29189213300","income":22881},
      {"fips":"29183311152","income":39990},
      {"fips":"17163503324","income":33369},
      {"fips":"29189215231","income":44342},
      {"fips":"29189221100","income":53436},
      {"fips":"29189211700","income":25730},
      {"fips":"29189217932","income":41706},
      {"fips":"29183311422","income":31544},
      {"fips":"29189221302","income":32249},
      {"fips":"29099700117","income":28374},
      {"fips":"29189220803","income":42618},
      {"fips":"29189219700","income":30105},
      {"fips":"29183310802","income":25860},
      {"fips":"29189219500","income":39228},
      {"fips":"29189211000","income":27209},
      {"fips":"17119402100","income":18953},
      {"fips":"17119404000","income":14400},
      {"fips":"29189210200","income":12956},
      {"fips":"29510126900","income":13583},
      {"fips":"17119400904","income":25387},
      {"fips":"29189221424","income":44388},
      {"fips":"29189213400","income":20631},
      {"fips":"29189220602","income":26315},
      {"fips":"29189217841","income":43967},
      {"fips":"17163502200","income":10391},
      {"fips":"17163502500","income":12250},
      {"fips":"29189210803","income":33220},
      {"fips":"29183311203","income":33792},
      {"fips":"29189211600","income":23200},
      {"fips":"29189211102","income":21915},
      {"fips":"29510109700","income":10129},
      {"fips":"29183310902","income":35850},
      {"fips":"17163501200","income":17097},
      {"fips":"29189215142","income":36411},
      {"fips":"29183311145","income":36760},
      {"fips":"29189220200","income":19606},
      {"fips":"29189211201","income":22836},
      {"fips":"17163501501","income":24103},
      {"fips":"29189219400","income":49864},
      {"fips":"29189217944","income":51929},
      {"fips":"29189220502","income":30843},
      {"fips":"29189219600","income":35156},
      {"fips":"29189219800","income":26468},
      {"fips":"17119401100","income":22440},
      {"fips":"29183311211","income":40299},
      {"fips":"17163503301","income":25559},
      {"fips":"29189214300","income":17665},
      {"fips":"29189215102","income":46463},
      {"fips":"29189210703","income":19931},
      {"fips":"29189212400","income":20342},
      {"fips":"29189217931","income":33020},
      {"fips":"29510126600","income":11431},
      {"fips":"29189215003","income":38417},
      {"fips":"29510127600","income":43666},
      {"fips":"29183310202","income":32168},
      {"fips":"17119402200","income":21144},
      {"fips":"29189212001","income":17601},
      {"fips":"17119401500","income":16923},
      {"fips":"29189220441","income":32143},
      {"fips":"29189215700","income":21142},
      {"fips":"17119400802","income":22859},
      {"fips":"29510101800","income":19537},
      {"fips":"29189217942","income":37389},
      {"fips":"29510127400","income":23445},
      {"fips":"29189218402","income":52053},
      {"fips":"29189221506","income":44881},
      {"fips":"17119403401","income":27968},
      {"fips":"29189220446","income":40153},
      {"fips":"29189221624","income":42988},
      {"fips":"17163501502","income":22509},
      {"fips":"29189221900","income":39458},
      {"fips":"17163501800","income":21692},
      {"fips":"29189214200","income":15830},
      {"fips":"29189215900","income":30197},
      {"fips":"17119403200","income":21796},
      {"fips":"29189211101","income":24567},
      {"fips":"29189220802","income":32112},
      {"fips":"29189212600","income":22457},
      {"fips":"17163501604","income":22863},
      {"fips":"29189210925","income":23108},
      {"fips":"29189218800","income":59178},
      {"fips":"29183310700","income":24528},
      {"fips":"29183311721","income":36459},
      {"fips":"29189214700","income":20378},
      {"fips":"29183311149","income":28663},
      {"fips":"29189211332","income":25425},
      {"fips":"29183310301","income":33279},
      {"fips":"29183311331","income":32550},
      {"fips":"29183311735","income":31761},
      {"fips":"29183311146","income":41614},
      {"fips":"17163501602","income":23355},
      {"fips":"29510108100","income":18055},
      {"fips":"29183311154","income":43325},
      {"fips":"17119402300","income":33147},
      {"fips":"17163504600","income":15217},
      {"fips":"29189215800","income":64695},
      {"fips":"17163504351","income":35075},
      {"fips":"29183311150","income":37150},
      {"fips":"29189211301","income":24135},
      {"fips":"29189213600","income":15931},
      {"fips":"29510109600","income":17336},
      {"fips":"29189214800","income":25917},
      {"fips":"29183311296","income":31724},
      {"fips":"29189220501","income":24715},
      {"fips":"17119401400","income":21507},
      {"fips":"29189217943","income":37493},
      {"fips":"29183311221","income":31836},
      {"fips":"29189218401","income":55520},
      {"fips":"17163500900","income":9341},
      {"fips":"29189210400","income":21722},
      {"fips":"29189212200","income":15974},
      {"fips":"29183311734","income":32235},
      {"fips":"29189218300","income":40521},
      {"fips":"29183311212","income":30193},
      {"fips":"17163500400","income":19013},
      {"fips":"29189218500","income":45459},
      {"fips":"29189213500","income":21958},
      {"fips":"29183310801","income":46326},
      {"fips":"29189214400","income":23023},
      {"fips":"29189218201","income":43217},
      {"fips":"29189216200","income":64810},
      {"fips":"29183311311","income":32381},
      {"fips":"29189210501","income":18231},
      {"fips":"29189211331","income":24313},
      {"fips":"29183311004","income":31073},
      {"fips":"29189212500","income":20916},
      {"fips":"29510126800","income":33408},
      {"fips":"29510124600","income":12238},
      {"fips":"17163501700","income":18060},
      {"fips":"29510118600","income":23872},
      {"fips":"29189213204","income":26030},
      {"fips":"29189218102","income":28015},
      {"fips":"29189219900","income":24556},
      {"fips":"29189215004","income":30994},
      {"fips":"29189215005","income":40545},
      {"fips":"29189216400","income":61664},
      {"fips":"29510126700","income":11817},
      {"fips":"29183311003","income":31359},
      {"fips":"29510115600","income":15225},
      {"fips":"29189220443","income":30181},
      {"fips":"29189211801","income":18569},
      {"fips":"29183310502","income":27025},
      {"fips":"29189217851","income":49871},
      {"fips":"29510102200","income":43719},
      {"fips":"29183311147","income":33659},
      {"fips":"29510125600","income":43347},
      {"fips":"29183310302","income":25202},
      {"fips":"29183311294","income":36037},
      {"fips":"29189212300","income":24871},
      {"fips":"29189210924","income":25829},
      {"fips":"17119401904","income":28979},
      {"fips":"29189210300","income":18340},
      {"fips":"29189220701","income":29884},
      {"fips":"17119400600","income":13958},
      {"fips":"29189215103","income":38959},
      {"fips":"29189220703","income":35535},
      {"fips":"29183310903","income":31815},
      {"fips":"29189221000","income":26324},
      {"fips":"29189214500","income":22836},
      {"fips":"29189210928","income":30502},
      {"fips":"29189211202","income":27854},
      {"fips":"29189216600","income":73196},
      {"fips":"29189213800","income":15919},
      {"fips":"29189210502","income":15186},
      {"fips":"29189210923","income":23481},
      {"fips":"29189213900","income":8870},
      {"fips":"29510116200","income":33712},
      {"fips":"17119400101","income":27997},
      {"fips":"17163501100","income":15666},
      {"fips":"29189218600","income":54702},
      {"fips":"29183310501","income":15148},
      {"fips":"29189217300","income":35712},
      {"fips":"17119401722","income":32154},
      {"fips":"29189216500","income":77073},
      {"fips":"29183311733","income":33272},
      {"fips":"29189220001","income":30860},
      {"fips":"29189211900","income":15021},
      {"fips":"29189217000","income":31280},
      {"fips":"29189212002","income":16143},
      {"fips":"29183311391","income":32315},
      {"fips":"29510127300","income":24523},
      {"fips":"29189214601","income":23357},
      {"fips":"17119400102","income":21459},
      {"fips":"17163501400","income":16087},
      {"fips":"17119403300","income":19857},
      {"fips":"29099700116","income":27250},
      {"fips":"29189220702","income":33387},
      {"fips":"29183310400","income":26260},
      {"fips":"29510127200","income":33575},
      {"fips":"29189216700","income":50012},
      {"fips":"29189212101","income":13128},
      {"fips":"17163502401","income":9767},
      {"fips":"29189217400","income":57721},
      {"fips":"29510101300","income":35751},
      {"fips":"29189216300","income":27128},
      {"fips":"29189219200","income":54640},
      {"fips":"17119402600","income":20105},
      {"fips":"17163501605","income":29950},
      {"fips":"29510104500","income":43598},
      {"fips":"17163502700","income":7159},
      {"fips":"17163501900","income":27196},
      {"fips":"29189219300","income":47025},
      {"fips":"29183310601","income":13367},
      {"fips":"29189211802","income":15689},
      {"fips":"29189219100","income":47167},
      {"fips":"29189214602","income":21564},
      {"fips":"29510113500","income":32824},
      {"fips":"29510127500","income":20774},
      {"fips":"29183312300","income":41119},
      {"fips":"29189212102","income":14424},
      {"fips":"29510101500","income":14664},
      {"fips":"29510127100","income":12438},
      {"fips":"29510103800","income":34394},
      {"fips":"29189216100","income":39002},
      {"fips":"29183310901","income":26920},
      {"fips":"17163500500","income":12226},
      {"fips":"29510115300","income":17484},
      {"fips":"29510107300","income":13431},
      {"fips":"29510114102","income":39702},
      {"fips":"29189210926","income":27006},
      {"fips":"29510118100","income":24846},
      {"fips":"29510102100","income":30316},
      {"fips":"29189216800","income":42894},
      {"fips":"29189210704","income":20030},
      {"fips":"29510114200","income":33949},
      {"fips":"29510125700","income":8713},
      {"fips":"29510118400","income":6066},
      {"fips":"29189220002","income":30139},
      {"fips":"29510103600","income":31149},
      {"fips":"29510114300","income":38837},
      {"fips":"29510115200","income":16664},
      {"fips":"17119400801","income":31866},
      {"fips":"29510102300","income":26380},
      {"fips":"17119402500","income":22765},
      {"fips":"29510117200","income":36567},
      {"fips":"29510110500","income":13145},
      {"fips":"29510101100","income":26528},
      {"fips":"29510106700","income":16198},
      {"fips":"29510103100","income":38504},
      {"fips":"29510115500","income":14726},
      {"fips":"29510105500","income":22773},
      {"fips":"29510119300","income":14511},
      {"fips":"29510124300","income":40083},
      {"fips":"29510107600","income":14837},
      {"fips":"29510105198","income":45460},
      {"fips":"29189217200","income":27751},
      {"fips":"29510117400","income":35660},
      {"fips":"29510115100","income":21063},
      {"fips":"29510104200","income":41229},
      {"fips":"29510123200","income":43472},
      {"fips":"29510106400","income":13144},
      {"fips":"29189214100","income":12975},
      {"fips":"29510125500","income":66258},
      {"fips":"29510121100","income":14652},
      {"fips":"29510111100","income":17581},
      {"fips":"29510107400","income":12056},
      {"fips":"29510117100","income":27961},
      {"fips":"29510101200","income":31194},
      {"fips":"29510106200","income":10285},
      {"fips":"29510106500","income":20758},
      {"fips":"29510124100","income":12169},
      {"fips":"29510111200","income":10728},
      {"fips":"29510115700","income":13719},
      {"fips":"29510123100","income":25593},
      {"fips":"29510106300","income":14335},
      {"fips":"29510116400","income":11193},
      {"fips":"29510110100","income":13709},
      {"fips":"29510115400","income":17906},
      {"fips":"29510105300","income":19369},
      {"fips":"29510106100","income":13950},
      {"fips":"29510102500","income":25797},
      {"fips":"29510111300","income":17743},
      {"fips":"29510114101","income":32593},
      {"fips":"29510110300","income":13735},
      {"fips":"29510112400","income":61278},
      {"fips":"29510123300","income":34844},
      {"fips":"29510107500","income":14245},
      {"fips":"29510111400","income":11584},
      {"fips":"29510103700","income":31197},
      {"fips":"29510103400","income":34373},
      {"fips":"29510116500","income":24758},
      {"fips":"29510110400","income":16033},
      {"fips":"29510101400","income":23069},
      {"fips":"29510121200","income":10508},
      {"fips":"29510106600","income":11525},
      {"fips":"29510112300","income":13175},
      {"fips":"29510105200","income":35701},
      {"fips":"29510108200","income":17684},
      {"fips":"29510124200","income":14025},
      {"fips":"29510111500","income":13442},
      {"fips":"29510110200","income":15099},
      {"fips":"29510116100","income":28281},
      {"fips":"29510108300","income":18687},
      {"fips":"29510119200","income":37386},
      {"fips":"29510105400","income":14825},
      {"fips":"29510112200","income":14826},
      {"fips":"29189216000","income":20333},
      {"fips":"29189216900","income":29799},
      {"fips":"29510107200","income":13147},
      {"fips":"29510116301","income":31796},
      {"fips":"29510116302","income":15100},
      {"fips":"29510102400","income":20878},
      {"fips":"29510119102","income":34915},
      {"fips":"29510120200","income":8885},
      {"fips":"29510119101","income":39230}];
      var data_access = [
        {"fips":"29183310100","low access":"Not Low Income and Low Access"},
        {"fips":"17133600402","low access":"Not Low Income and Low Access"},
        {"fips":"29183311500","low access":"Not Low Income and Low Access"},
        {"fips":"17163503203","low access":"Not Low Income and Low Access"},
        {"fips":"17163503906","low access":"Not Low Income and Low Access"},
        {"fips":"17083010300","low access":"Not Low Income and Low Access"},
        {"fips":"17133600102","low access":"Not Low Income and Low Access"},
        {"fips":"17163503100","low access":"Not Low Income and Low Access"},
        {"fips":"29183980000","low access":"Not Low Income and Low Access"},
        {"fips":"17119402803","low access":"Not Low Income and Low Access"},
        {"fips":"17119404100","low access":"Not Low Income and Low Access"},
        {"fips":"17163503202","low access":"Not Low Income and Low Access"},
        {"fips":"17119403532","low access":"Not Low Income and Low Access"},
        {"fips":"29189221621","low access":"Not Low Income and Low Access"},
        {"fips":"17119400903","low access":"Not Low Income and Low Access"},
        {"fips":"17133600401","low access":"Not Low Income and Low Access"},
        {"fips":"17119402801","low access":"Not Low Income and Low Access"},
        {"fips":"29189221502","low access":"Not Low Income and Low Access"},
        {"fips":"17163503904","low access":"Not Low Income and Low Access"},
        {"fips":"29099700503","low access":"Not Low Income and Low Access"},
        {"fips":"29189221421","low access":"Not Low Income and Low Access"},
        {"fips":"17119402721","low access":"Not Low Income and Low Access"},
        {"fips":"29189210100","low access":"Low Income and Low Access"},
        {"fips":"17119403101","low access":"Not Low Income and Low Access"},
        {"fips":"29189221503","low access":"Not Low Income and Low Access"},
        {"fips":"17119401903","low access":"Low Income and Low Access"},
        {"fips":"29099700304","low access":"Not Low Income and Low Access"},
        {"fips":"17163503404","low access":"Not Low Income and Low Access"},
        {"fips":"17119402701","low access":"Not Low Income and Low Access"},
        {"fips":"29189221629","low access":"Not Low Income and Low Access"},
        {"fips":"17119403534","low access":"Not Low Income and Low Access"},
        {"fips":"29099700109","low access":"Not Low Income and Low Access"},
        {"fips":"29099700302","low access":"Not Low Income and Low Access"},
        {"fips":"29099700107","low access":"Not Low Income and Low Access"},
        {"fips":"29189221628","low access":"Not Low Income and Low Access"},
        {"fips":"29189211401","low access":"Not Low Income and Low Access"},
        {"fips":"29189210927","low access":"Not Low Income and Low Access"},
        {"fips":"17163502404","low access":"Low Income and Low Access"},
        {"fips":"17119403531","low access":"Not Low Income and Low Access"},
        {"fips":"17163503304","low access":"Not Low Income and Low Access"},
        {"fips":"29099700206","low access":"Not Low Income and Low Access"},
        {"fips":"17119403533","low access":"Not Low Income and Low Access"},
        {"fips":"29099700601","low access":"Not Low Income and Low Access"},
        {"fips":"17119403502","low access":"Not Low Income and Low Access"},
        {"fips":"29183311103","low access":"Not Low Income and Low Access"},
        {"fips":"29189222100","low access":"Not Low Income and Low Access"},
        {"fips":"17163502300","low access":"Low Income and Low Access"},
        {"fips":"29183311148","low access":"Not Low Income and Low Access"},
        {"fips":"29099700603","low access":"Not Low Income and Low Access"},
        {"fips":"17163504353","low access":"Not Low Income and Low Access"},
        {"fips":"29189217921","low access":"Not Low Income and Low Access"},
        {"fips":"17163504500","low access":"Low Income and Low Access"},
        {"fips":"29189215105","low access":"Not Low Income and Low Access"},
        {"fips":"17163503412","low access":"Not Low Income and Low Access"},
        {"fips":"29189210912","low access":"Not Low Income and Low Access"},
        {"fips":"17119402722","low access":"Not Low Income and Low Access"},
        {"fips":"17163503402","low access":"Not Low Income and Low Access"},
        {"fips":"29099700211","low access":"Not Low Income and Low Access"},
        {"fips":"29189213102","low access":"Not Low Income and Low Access"},
        {"fips":"29189221423","low access":"Not Low Income and Low Access"},
        {"fips":"17119403121","low access":"Not Low Income and Low Access"},
        {"fips":"29189221627","low access":"Not Low Income and Low Access"},
        {"fips":"29099700207","low access":"Not Low Income and Low Access"},
        {"fips":"29183311132","low access":"Not Low Income and Low Access"},
        {"fips":"17163502603","low access":"Low Income and Low Access"},
        {"fips":"17133600101","low access":"Not Low Income and Low Access"},
        {"fips":"29510127000","low access":"Not Low Income and Low Access"},
        {"fips":"29189220444","low access":"Not Low Income and Low Access"},
        {"fips":"29189221800","low access":"Low Income and Low Access"},
        {"fips":"29189217701","low access":"Not Low Income and Low Access"},
        {"fips":"29189215143","low access":"Not Low Income and Low Access"},
        {"fips":"29189221626","low access":"Not Low Income and Low Access"},
        {"fips":"29189217500","low access":"Not Low Income and Low Access"},
        {"fips":"17119400200","low access":"Low Income and Low Access"},
        {"fips":"29099700114","low access":"Not Low Income and Low Access"},
        {"fips":"29189221201","low access":"Not Low Income and Low Access"},
        {"fips":"29189217702","low access":"Not Low Income and Low Access"},
        {"fips":"17163503905","low access":"Not Low Income and Low Access"},
        {"fips":"17119401000","low access":"Low Income and Low Access"},
        {"fips":"17163503323","low access":"Not Low Income and Low Access"},
        {"fips":"29099700113","low access":"Not Low Income and Low Access"},
        {"fips":"29189217600","low access":"Not Low Income and Low Access"},
        {"fips":"29189215202","low access":"Not Low Income and Low Access"},
        {"fips":"17163502100","low access":"Low Income and Low Access"},
        {"fips":"29183311124","low access":"Not Low Income and Low Access"},
        {"fips":"17119401701","low access":"Low Income and Low Access"},
        {"fips":"17119401800","low access":"Not Low Income and Low Access"},
        {"fips":"29189215201","low access":"Not Low Income and Low Access"},
        {"fips":"29189210804","low access":"Not Low Income and Low Access"},
        {"fips":"29189211334","low access":"Not Low Income and Low Access"},
        {"fips":"29189215400","low access":"Not Low Income and Low Access"},
        {"fips":"17119401901","low access":"Not Low Income and Low Access"},
        {"fips":"29099700209","low access":"Not Low Income and Low Access"},
        {"fips":"29189221202","low access":"Not Low Income and Low Access"},
        {"fips":"17119402900","low access":"Not Low Income and Low Access"},
        {"fips":"17163503800","low access":"Not Low Income and Low Access"},
        {"fips":"29099700115","low access":"Not Low Income and Low Access"},
        {"fips":"29183311322","low access":"Not Low Income and Low Access"},
        {"fips":"17163503322","low access":"Not Low Income and Low Access"},
        {"fips":"17163504355","low access":"Not Low Income and Low Access"},
        {"fips":"17119403122","low access":"Not Low Income and Low Access"},
        {"fips":"17163503211","low access":"Not Low Income and Low Access"},
        {"fips":"29099700203","low access":"Not Low Income and Low Access"},
        {"fips":"29189221335","low access":"Not Low Income and Low Access"},
        {"fips":"29189220445","low access":"Not Low Income and Low Access"},
        {"fips":"29189213101","low access":"Low Income and Low Access"},
        {"fips":"17163502900","low access":"Low Income and Low Access"},
        {"fips":"17163503414","low access":"Not Low Income and Low Access"},
        {"fips":"29099700110","low access":"Not Low Income and Low Access"},
        {"fips":"29189222000","low access":"Not Low Income and Low Access"},
        {"fips":"29183311602","low access":"Not Low Income and Low Access"},
        {"fips":"17119402400","low access":"Low Income and Low Access"},
        {"fips":"29189220432","low access":"Not Low Income and Low Access"},
        {"fips":"17119403402","low access":"Not Low Income and Low Access"},
        {"fips":"29189218103","low access":"Not Low Income and Low Access"},
        {"fips":"29099700208","low access":"Low Income and Low Access"},
        {"fips":"29099700118","low access":"Not Low Income and Low Access"},
        {"fips":"29189215302","low access":"Not Low Income and Low Access"},
        {"fips":"29189215141","low access":"Not Low Income and Low Access"},
        {"fips":"29189221422","low access":"Not Low Income and Low Access"},
        {"fips":"17119401721","low access":"Not Low Income and Low Access"},
        {"fips":"29189210921","low access":"Not Low Income and Low Access"},
        {"fips":"29099700111","low access":"Low Income and Low Access"},
        {"fips":"17163503411","low access":"Not Low Income and Low Access"},
        {"fips":"29189215232","low access":"Not Low Income and Low Access"},
        {"fips":"29189221301","low access":"Not Low Income and Low Access"},
        {"fips":"17163504352","low access":"Not Low Income and Low Access"},
        {"fips":"29189213700","low access":"Low Income and Low Access"},
        {"fips":"29189215600","low access":"Low Income and Low Access"},
        {"fips":"17119403002","low access":"Not Low Income and Low Access"},
        {"fips":"29189220300","low access":"Low Income and Low Access"},
        {"fips":"29510112100","low access":"Not Low Income and Low Access"},
        {"fips":"29189217842","low access":"Not Low Income and Low Access"},
        {"fips":"17119401200","low access":"Not Low Income and Low Access"},
        {"fips":"29189217852","low access":"Not Low Income and Low Access"},
        {"fips":"29183311151","low access":"Not Low Income and Low Access"},
        {"fips":"17163501603","low access":"Low Income and Low Access"},
        {"fips":"29189210600","low access":"Low Income and Low Access"},
        {"fips":"29189211500","low access":"Low Income and Low Access"},
        {"fips":"17163502602","low access":"Low Income and Low Access"},
        {"fips":"29189220442","low access":"Not Low Income and Low Access"},
        {"fips":"29189218003","low access":"Not Low Income and Low Access"},
        {"fips":"17119402000","low access":"Low Income and Low Access"},
        {"fips":"29183311312","low access":"Not Low Income and Low Access"},
        {"fips":"29189215301","low access":"Not Low Income and Low Access"},
        {"fips":"29099700210","low access":"Low Income and Low Access"},
        {"fips":"29189215001","low access":"Low Income and Low Access"},
        {"fips":"29099700119","low access":"Not Low Income and Low Access"},
        {"fips":"29183311001","low access":"Not Low Income and Low Access"},
        {"fips":"29189217802","low access":"Not Low Income and Low Access"},
        {"fips":"17119403001","low access":"Not Low Income and Low Access"},
        {"fips":"17163503334","low access":"Not Low Income and Low Access"},
        {"fips":"17119400952","low access":"Low Income and Low Access"},
        {"fips":"29183311736","low access":"Not Low Income and Low Access"},
        {"fips":"29183312400","low access":"Low Income and Low Access"},
        {"fips":"29189220601","low access":"Not Low Income and Low Access"},
        {"fips":"29189211402","low access":"Low Income and Low Access"},
        {"fips":"29189215144","low access":"Not Low Income and Low Access"},
        {"fips":"17163503332","low access":"Not Low Income and Low Access"},
        {"fips":"29183311114","low access":"Not Low Income and Low Access"},
        {"fips":"29189218011","low access":"Not Low Income and Low Access"},
        {"fips":"29183310201","low access":"Not Low Income and Low Access"},
        {"fips":"29189221625","low access":"Not Low Income and Low Access"},
        {"fips":"17163503413","low access":"Not Low Income and Low Access"},
        {"fips":"29189211333","low access":"Not Low Income and Low Access"},
        {"fips":"29189220100","low access":"Low Income and Low Access"},
        {"fips":"29189218012","low access":"Not Low Income and Low Access"},
        {"fips":"29189217806","low access":"Not Low Income and Low Access"},
        {"fips":"29189213202","low access":"Not Low Income and Low Access"},
        {"fips":"29189213203","low access":"Not Low Income and Low Access"},
        {"fips":"17119401300","low access":"Low Income and Low Access"},
        {"fips":"29183311732","low access":"Not Low Income and Low Access"},
        {"fips":"17119400951","low access":"Not Low Income and Low Access"},
        {"fips":"29099700303","low access":"Not Low Income and Low Access"},
        {"fips":"29189215500","low access":"Not Low Income and Low Access"},
        {"fips":"29189214900","low access":"Low Income and Low Access"},
        {"fips":"17163504354","low access":"Not Low Income and Low Access"},
        {"fips":"29183310602","low access":"Not Low Income and Low Access"},
        {"fips":"29189210806","low access":"Not Low Income and Low Access"},
        {"fips":"29189217923","low access":"Not Low Income and Low Access"},
        {"fips":"29189221332","low access":"Not Low Income and Low Access"},
        {"fips":"29189210805","low access":"Low Income and Low Access"},
        {"fips":"29189212700","low access":"Low Income and Low Access"},
        {"fips":"29189210702","low access":"Low Income and Low Access"},
        {"fips":"29189220431","low access":"Not Low Income and Low Access"},
        {"fips":"29189218900","low access":"Not Low Income and Low Access"},
        {"fips":"29183311122","low access":"Not Low Income and Low Access"},
        {"fips":"29189217807","low access":"Not Low Income and Low Access"},
        {"fips":"29189217941","low access":"Not Low Income and Low Access"},
        {"fips":"17163502800","low access":"Low Income and Low Access"},
        {"fips":"17119400700","low access":"Low Income and Low Access"},
        {"fips":"17163501300","low access":"Low Income and Low Access"},
        {"fips":"29189220801","low access":"Not Low Income and Low Access"},
        {"fips":"29189213300","low access":"Low Income and Low Access"},
        {"fips":"29183311152","low access":"Not Low Income and Low Access"},
        {"fips":"17163503324","low access":"Not Low Income and Low Access"},
        {"fips":"29189215231","low access":"Not Low Income and Low Access"},
        {"fips":"29189221100","low access":"Not Low Income and Low Access"},
        {"fips":"29189211700","low access":"Low Income and Low Access"},
        {"fips":"29189217932","low access":"Not Low Income and Low Access"},
        {"fips":"29183311422","low access":"Not Low Income and Low Access"},
        {"fips":"29189221302","low access":"Not Low Income and Low Access"},
        {"fips":"29099700117","low access":"Not Low Income and Low Access"},
        {"fips":"29189220803","low access":"Not Low Income and Low Access"},
        {"fips":"29189219700","low access":"Not Low Income and Low Access"},
        {"fips":"29183310802","low access":"Not Low Income and Low Access"},
        {"fips":"29189219500","low access":"Not Low Income and Low Access"},
        {"fips":"29189211000","low access":"Not Low Income and Low Access"},
        {"fips":"17119402100","low access":"Low Income and Low Access"},
        {"fips":"17119404000","low access":"Low Income and Low Access"},
        {"fips":"29189210200","low access":"Low Income and Low Access"},
        {"fips":"29510126900","low access":"Low Income and Low Access"},
        {"fips":"17119400904","low access":"Not Low Income and Low Access"},
        {"fips":"29189221424","low access":"Not Low Income and Low Access"},
        {"fips":"29189213400","low access":"Low Income and Low Access"},
        {"fips":"29189220602","low access":"Not Low Income and Low Access"},
        {"fips":"29189217841","low access":"Not Low Income and Low Access"},
        {"fips":"17163502200","low access":"Low Income and Low Access"},
        {"fips":"17163502500","low access":"Low Income and Low Access"},
        {"fips":"29189210803","low access":"Not Low Income and Low Access"},
        {"fips":"29183311203","low access":"Not Low Income and Low Access"},
        {"fips":"29189211600","low access":"Low Income and Low Access"},
        {"fips":"29189211102","low access":"Not Low Income and Low Access"},
        {"fips":"29510109700","low access":"Low Income and Low Access"},
        {"fips":"29183310902","low access":"Not Low Income and Low Access"},
        {"fips":"17163501200","low access":"Low Income and Low Access"},
        {"fips":"29189215142","low access":"Not Low Income and Low Access"},
        {"fips":"29183311145","low access":"Not Low Income and Low Access"},
        {"fips":"29189220200","low access":"Low Income and Low Access"},
        {"fips":"29189211201","low access":"Low Income and Low Access"},
        {"fips":"17163501501","low access":"Low Income and Low Access"},
        {"fips":"29189219400","low access":"Not Low Income and Low Access"},
        {"fips":"29189217944","low access":"Not Low Income and Low Access"},
        {"fips":"29189220502","low access":"Low Income and Low Access"},
        {"fips":"29189219600","low access":"Not Low Income and Low Access"},
        {"fips":"29189219800","low access":"Not Low Income and Low Access"},
        {"fips":"17119401100","low access":"Not Low Income and Low Access"},
        {"fips":"29183311211","low access":"Not Low Income and Low Access"},
        {"fips":"17163503301","low access":"Low Income and Low Access"},
        {"fips":"29189214300","low access":"Low Income and Low Access"},
        {"fips":"29189215102","low access":"Not Low Income and Low Access"},
        {"fips":"29189210703","low access":"Low Income and Low Access"},
        {"fips":"29189212400","low access":"Low Income and Low Access"},
        {"fips":"29189217931","low access":"Not Low Income and Low Access"},
        {"fips":"29510126600","low access":"Low Income and Low Access"},
        {"fips":"29189215003","low access":"Not Low Income and Low Access"},
        {"fips":"29510127600","low access":"Not Low Income and Low Access"},
        {"fips":"29183310202","low access":"Not Low Income and Low Access"},
        {"fips":"17119402200","low access":"Low Income and Low Access"},
        {"fips":"29189212001","low access":"Low Income and Low Access"},
        {"fips":"17119401500","low access":"Low Income and Low Access"},
        {"fips":"29189220441","low access":"Not Low Income and Low Access"},
        {"fips":"29189215700","low access":"Low Income and Low Access"},
        {"fips":"17119400802","low access":"Not Low Income and Low Access"},
        {"fips":"29510101800","low access":"Low Income and Low Access"},
        {"fips":"29189217942","low access":"Not Low Income and Low Access"},
        {"fips":"29510127400","low access":"Not Low Income and Low Access"},
        {"fips":"29189218402","low access":"Not Low Income and Low Access"},
        {"fips":"29189221506","low access":"Not Low Income and Low Access"},
        {"fips":"17119403401","low access":"Not Low Income and Low Access"},
        {"fips":"29189220446","low access":"Not Low Income and Low Access"},
        {"fips":"29189221624","low access":"Not Low Income and Low Access"},
        {"fips":"17163501502","low access":"Not Low Income and Low Access"},
        {"fips":"29189221900","low access":"Not Low Income and Low Access"},
        {"fips":"17163501800","low access":"Low Income and Low Access"},
        {"fips":"29189214200","low access":"Low Income and Low Access"},
        {"fips":"29189215900","low access":"Not Low Income and Low Access"},
        {"fips":"17119403200","low access":"Low Income and Low Access"},
        {"fips":"29189211101","low access":"Low Income and Low Access"},
        {"fips":"29189220802","low access":"Not Low Income and Low Access"},
        {"fips":"29189212600","low access":"Low Income and Low Access"},
        {"fips":"17163501604","low access":"Low Income and Low Access"},
        {"fips":"29189210925","low access":"Not Low Income and Low Access"},
        {"fips":"29189218800","low access":"Not Low Income and Low Access"},
        {"fips":"29183310700","low access":"Low Income and Low Access"},
        {"fips":"29183311721","low access":"Not Low Income and Low Access"},
        {"fips":"29189214700","low access":"Low Income and Low Access"},
        {"fips":"29183311149","low access":"Not Low Income and Low Access"},
        {"fips":"29189211332","low access":"Not Low Income and Low Access"},
        {"fips":"29183310301","low access":"Not Low Income and Low Access"},
        {"fips":"29183311331","low access":"Not Low Income and Low Access"},
        {"fips":"29183311735","low access":"Not Low Income and Low Access"},
        {"fips":"29183311146","low access":"Not Low Income and Low Access"},
        {"fips":"17163501602","low access":"Low Income and Low Access"},
        {"fips":"29510108100","low access":"Low Income and Low Access"},
        {"fips":"29183311154","low access":"Not Low Income and Low Access"},
        {"fips":"17119402300","low access":"Not Low Income and Low Access"},
        {"fips":"17163504600","low access":"Not Low Income and Low Access"},
        {"fips":"29189215800","low access":"Not Low Income and Low Access"},
        {"fips":"17163504351","low access":"Not Low Income and Low Access"},
        {"fips":"29183311150","low access":"Not Low Income and Low Access"},
        {"fips":"29189211301","low access":"Not Low Income and Low Access"},
        {"fips":"29189213600","low access":"Low Income and Low Access"},
        {"fips":"29510109600","low access":"Low Income and Low Access"},
        {"fips":"29189214800","low access":"Low Income and Low Access"},
        {"fips":"29183311296","low access":"Not Low Income and Low Access"},
        {"fips":"29189220501","low access":"Low Income and Low Access"},
        {"fips":"17119401400","low access":"Low Income and Low Access"},
        {"fips":"29189217943","low access":"Not Low Income and Low Access"},
        {"fips":"29183311221","low access":"Not Low Income and Low Access"},
        {"fips":"29189218401","low access":"Not Low Income and Low Access"},
        {"fips":"17163500900","low access":"Low Income and Low Access"},
        {"fips":"29189210400","low access":"Low Income and Low Access"},
        {"fips":"29189212200","low access":"Low Income and Low Access"},
        {"fips":"29183311734","low access":"Not Low Income and Low Access"},
        {"fips":"29189218300","low access":"Not Low Income and Low Access"},
        {"fips":"29183311212","low access":"Not Low Income and Low Access"},
        {"fips":"17163500400","low access":"Low Income and Low Access"},
        {"fips":"29189218500","low access":"Not Low Income and Low Access"},
        {"fips":"29189213500","low access":"Low Income and Low Access"},
        {"fips":"29183310801","low access":"Not Low Income and Low Access"},
        {"fips":"29189214400","low access":"Low Income and Low Access"},
        {"fips":"29189218201","low access":"Not Low Income and Low Access"},
        {"fips":"29189216200","low access":"Not Low Income and Low Access"},
        {"fips":"29183311311","low access":"Not Low Income and Low Access"},
        {"fips":"29189210501","low access":"Low Income and Low Access"},
        {"fips":"29189211331","low access":"Not Low Income and Low Access"},
        {"fips":"29183311004","low access":"Not Low Income and Low Access"},
        {"fips":"29189212500","low access":"Low Income and Low Access"},
        {"fips":"29510126800","low access":"Not Low Income and Low Access"},
        {"fips":"29510124600","low access":"Not Low Income and Low Access"},
        {"fips":"17163501700","low access":"Low Income and Low Access"},
        {"fips":"29510118600","low access":"Low Income and Low Access"},
        {"fips":"29189213204","low access":"Low Income and Low Access"},
        {"fips":"29189218102","low access":"Not Low Income and Low Access"},
        {"fips":"29189219900","low access":"Not Low Income and Low Access"},
        {"fips":"29189215004","low access":"Not Low Income and Low Access"},
        {"fips":"29189215005","low access":"Not Low Income and Low Access"},
        {"fips":"29189216400","low access":"Not Low Income and Low Access"},
        {"fips":"29510126700","low access":"Low Income and Low Access"},
        {"fips":"29183311003","low access":"Low Income and Low Access"},
        {"fips":"29510115600","low access":"Low Income and Low Access"},
        {"fips":"29189220443","low access":"Not Low Income and Low Access"},
        {"fips":"29189211801","low access":"Low Income and Low Access"},
        {"fips":"29183310502","low access":"Not Low Income and Low Access"},
        {"fips":"29189217851","low access":"Not Low Income and Low Access"},
        {"fips":"29510102200","low access":"Not Low Income and Low Access"},
        {"fips":"29183311147","low access":"Not Low Income and Low Access"},
        {"fips":"29510125600","low access":"Not Low Income and Low Access"},
        {"fips":"29183310302","low access":"Not Low Income and Low Access"},
        {"fips":"29183311294","low access":"Not Low Income and Low Access"},
        {"fips":"29189212300","low access":"Low Income and Low Access"},
        {"fips":"29189210924","low access":"Not Low Income and Low Access"},
        {"fips":"17119401904","low access":"Not Low Income and Low Access"},
        {"fips":"29189210300","low access":"Low Income and Low Access"},
        {"fips":"29189220701","low access":"Not Low Income and Low Access"},
        {"fips":"17119400600","low access":"Low Income and Low Access"},
        {"fips":"29189215103","low access":"Not Low Income and Low Access"},
        {"fips":"29189220703","low access":"Not Low Income and Low Access"},
        {"fips":"29183310903","low access":"Not Low Income and Low Access"},
        {"fips":"29189221000","low access":"Not Low Income and Low Access"},
        {"fips":"29189214500","low access":"Low Income and Low Access"},
        {"fips":"29189210928","low access":"Not Low Income and Low Access"},
        {"fips":"29189211202","low access":"Not Low Income and Low Access"},
        {"fips":"29189216600","low access":"Not Low Income and Low Access"},
        {"fips":"29189213800","low access":"Low Income and Low Access"},
        {"fips":"29189210502","low access":"Low Income and Low Access"},
        {"fips":"29189210923","low access":"Not Low Income and Low Access"},
        {"fips":"29189213900","low access":"Low Income and Low Access"},
        {"fips":"29510116200","low access":"Not Low Income and Low Access"},
        {"fips":"17119400101","low access":"Low Income and Low Access"},
        {"fips":"17163501100","low access":"Low Income and Low Access"},
        {"fips":"29189218600","low access":"Not Low Income and Low Access"},
        {"fips":"29183310501","low access":"Low Income and Low Access"},
        {"fips":"29189217300","low access":"Not Low Income and Low Access"},
        {"fips":"17119401722","low access":"Not Low Income and Low Access"},
        {"fips":"29189216500","low access":"Not Low Income and Low Access"},
        {"fips":"29183311733","low access":"Not Low Income and Low Access"},
        {"fips":"29189220001","low access":"Not Low Income and Low Access"},
        {"fips":"29189211900","low access":"Low Income and Low Access"},
        {"fips":"29189217000","low access":"Low Income and Low Access"},
        {"fips":"29189212002","low access":"Low Income and Low Access"},
        {"fips":"29183311391","low access":"Not Low Income and Low Access"},
        {"fips":"29510127300","low access":"Low Income and Low Access"},
        {"fips":"29189214601","low access":"Low Income and Low Access"},
        {"fips":"17119400102","low access":"Low Income and Low Access"},
        {"fips":"17163501400","low access":"Low Income and Low Access"},
        {"fips":"17119403300","low access":"Low Income and Low Access"},
        {"fips":"29099700116","low access":"Not Low Income and Low Access"},
        {"fips":"29189220702","low access":"Not Low Income and Low Access"},
        {"fips":"29183310400","low access":"Not Low Income and Low Access"},
        {"fips":"29510127200","low access":"Not Low Income and Low Access"},
        {"fips":"29189216700","low access":"Not Low Income and Low Access"},
        {"fips":"29189212101","low access":"Low Income and Low Access"},
        {"fips":"17163502401","low access":"Low Income and Low Access"},
        {"fips":"29189217400","low access":"Not Low Income and Low Access"},
        {"fips":"29510101300","low access":"Not Low Income and Low Access"},
        {"fips":"29189216300","low access":"Not Low Income and Low Access"},
        {"fips":"29189219200","low access":"Not Low Income and Low Access"},
        {"fips":"17119402600","low access":"Low Income and Low Access"},
        {"fips":"17163501605","low access":"Not Low Income and Low Access"},
        {"fips":"29510104500","low access":"Not Low Income and Low Access"},
        {"fips":"17163502700","low access":"Low Income and Low Access"},
        {"fips":"17163501900","low access":"Not Low Income and Low Access"},
        {"fips":"29189219300","low access":"Not Low Income and Low Access"},
        {"fips":"29183310601","low access":"Not Low Income and Low Access"},
        {"fips":"29189211802","low access":"Low Income and Low Access"},
        {"fips":"29189219100","low access":"Not Low Income and Low Access"},
        {"fips":"29189214602","low access":"Low Income and Low Access"},
        {"fips":"29510113500","low access":"Not Low Income and Low Access"},
        {"fips":"29510127500","low access":"Low Income and Low Access"},
        {"fips":"29183312300","low access":"Not Low Income and Low Access"},
        {"fips":"29189212102","low access":"Low Income and Low Access"},
        {"fips":"29510101500","low access":"Low Income and Low Access"},
        {"fips":"29510127100","low access":"Low Income and Low Access"},
        {"fips":"29510103800","low access":"Not Low Income and Low Access"},
        {"fips":"29189216100","low access":"Not Low Income and Low Access"},
        {"fips":"29183310901","low access":"Low Income and Low Access"},
        {"fips":"17163500500","low access":"Low Income and Low Access"},
        {"fips":"29510115300","low access":"Low Income and Low Access"},
        {"fips":"29510107300","low access":"Low Income and Low Access"},
        {"fips":"29510114102","low access":"Not Low Income and Low Access"},
        {"fips":"29189210926","low access":"Not Low Income and Low Access"},
        {"fips":"29510118100","low access":"Low Income and Low Access"},
        {"fips":"29510102100","low access":"Not Low Income and Low Access"},
        {"fips":"29189216800","low access":"Not Low Income and Low Access"},
        {"fips":"29189210704","low access":"Low Income and Low Access"},
        {"fips":"29510114200","low access":"Not Low Income and Low Access"},
        {"fips":"29510125700","low access":"Low Income and Low Access"},
        {"fips":"29510118400","low access":"Low Income and Low Access"},
        {"fips":"29189220002","low access":"Not Low Income and Low Access"},
        {"fips":"29510103600","low access":"Not Low Income and Low Access"},
        {"fips":"29510114300","low access":"Not Low Income and Low Access"},
        {"fips":"29510115200","low access":"Low Income and Low Access"},
        {"fips":"17119400801","low access":"Not Low Income and Low Access"},
        {"fips":"29510102300","low access":"Not Low Income and Low Access"},
        {"fips":"17119402500","low access":"Low Income and Low Access"},
        {"fips":"29510117200","low access":"Low Income and Low Access"},
        {"fips":"29510110500","low access":"Low Income and Low Access"},
        {"fips":"29510101100","low access":"Not Low Income and Low Access"},
        {"fips":"29510106700","low access":"Low Income and Low Access"},
        {"fips":"29510103100","low access":"Not Low Income and Low Access"},
        {"fips":"29510115500","low access":"Low Income and Low Access"},
        {"fips":"29510105500","low access":"Low Income and Low Access"},
        {"fips":"29510119300","low access":"Low Income and Low Access"},
        {"fips":"29510124300","low access":"Not Low Income and Low Access"},
        {"fips":"29510107600","low access":"Low Income and Low Access"},
        {"fips":"29510105198","low access":"Low Income and Low Access"},
        {"fips":"29189217200","low access":"Not Low Income and Low Access"},
        {"fips":"29510117400","low access":"Not Low Income and Low Access"},
        {"fips":"29510115100","low access":"Low Income and Low Access"},
        {"fips":"29510104200","low access":"Not Low Income and Low Access"},
        {"fips":"29510123200","low access":"Not Low Income and Low Access"},
        {"fips":"29510106400","low access":"Not Low Income and Low Access"},
        {"fips":"29189214100","low access":"Not Low Income and Low Access"},
        {"fips":"29510125500","low access":"Not Low Income and Low Access"},
        {"fips":"29510121100","low access":"Low Income and Low Access"},
        {"fips":"29510111100","low access":"Low Income and Low Access"},
        {"fips":"29510107400","low access":"Low Income and Low Access"},
        {"fips":"29510117100","low access":"Low Income and Low Access"},
        {"fips":"29510101200","low access":"Not Low Income and Low Access"},
        {"fips":"29510106200","low access":"Low Income and Low Access"},
        {"fips":"29510106500","low access":"Low Income and Low Access"},
        {"fips":"29510124100","low access":"Low Income and Low Access"},
        {"fips":"29510111200","low access":"Low Income and Low Access"},
        {"fips":"29510115700","low access":"Low Income and Low Access"},
        {"fips":"29510123100","low access":"Low Income and Low Access"},
        {"fips":"29510106300","low access":"Low Income and Low Access"},
        {"fips":"29510116400","low access":"Not Low Income and Low Access"},
        {"fips":"29510110100","low access":"Not Low Income and Low Access"},
        {"fips":"29510115400","low access":"Low Income and Low Access"},
        {"fips":"29510105300","low access":"Low Income and Low Access"},
        {"fips":"29510106100","low access":"Low Income and Low Access"},
        {"fips":"29510102500","low access":"Not Low Income and Low Access"},
        {"fips":"29510111300","low access":"Not Low Income and Low Access"},
        {"fips":"29510114101","low access":"Not Low Income and Low Access"},
        {"fips":"29510110300","low access":"Low Income and Low Access"},
        {"fips":"29510112400","low access":"Not Low Income and Low Access"},
        {"fips":"29510123300","low access":"Not Low Income and Low Access"},
        {"fips":"29510107500","low access":"Low Income and Low Access"},
        {"fips":"29510111400","low access":"Low Income and Low Access"},
        {"fips":"29510103700","low access":"Not Low Income and Low Access"},
        {"fips":"29510103400","low access":"Not Low Income and Low Access"},
        {"fips":"29510116500","low access":"Low Income and Low Access"},
        {"fips":"29510110400","low access":"Low Income and Low Access"},
        {"fips":"29510101400","low access":"Not Low Income and Low Access"},
        {"fips":"29510121200","low access":"Low Income and Low Access"},
        {"fips":"29510106600","low access":"Not Low Income and Low Access"},
        {"fips":"29510112300","low access":"Low Income and Low Access"},
        {"fips":"29510105200","low access":"Not Low Income and Low Access"},
        {"fips":"29510108200","low access":"Not Low Income and Low Access"},
        {"fips":"29510124200","low access":"Low Income and Low Access"},
        {"fips":"29510111500","low access":"Not Low Income and Low Access"},
        {"fips":"29510110200","low access":"Low Income and Low Access"},
        {"fips":"29510116100","low access":"Not Low Income and Low Access"},
        {"fips":"29510108300","low access":"Low Income and Low Access"},
        {"fips":"29510119200","low access":"Not Low Income and Low Access"},
        {"fips":"29510105400","low access":"Low Income and Low Access"},
        {"fips":"29510112200","low access":"Not Low Income and Low Access"},
        {"fips":"29189216000","low access":"Low Income and Low Access"},
        {"fips":"29189216900","low access":"Not Low Income and Low Access"},
        {"fips":"29510107200","low access":"Low Income and Low Access"},
        {"fips":"29510116301","low access":"Not Low Income and Low Access"},
        {"fips":"29510116302","low access":"Not Low Income and Low Access"},
        {"fips":"29510102400","low access":"Not Low Income and Low Access"},
        {"fips":"29510119102","low access":"Not Low Income and Low Access"},
        {"fips":"29510120200","low access":"Not Low Income and Low Access"},
        {"fips":"29510119101","low access":"Not Low Income and Low Access"}];

        // Add source for state polygons hosted on Mapbox, based on US Census Data:
        // https://www.census.gov/geo/maps-data/data/cbf/cbf_state.html
        map.addSource("tracts", {
          type: "vector",
          url: "mapbox://kaywiz.3skkxo9w"
        });

        var expression = ["match", ["get", "GEOID"]];
        var expression2 = ["match", ["get", "GEOID"]];
        var expression3 = ["match", ["get", "GEOID"]];

        // Calculate color for each tract based on the race percent
        data_race.forEach(function(row) {
          var green = (row["white"] / maxValue_race) * 100;
          var color = "hsla(" + 358 + ", " + green + "%, " + 50 + "%, .4)";
          //var color = "rgba(0,5,255,1)";
          expression.push(row["fips"], color);
        });

        // Calculate color for each tract based on the income percent
        data_income.forEach(function(row) {
          var green = (row["income"] / maxValue_income) * 100;
          var color = "hsla(" + 358 + ", " + green + "%, " + 50 + "%, .4)";
          //var color = "rgba(0,5,255,1)";
          expression2.push(row["fips"], color);
        });

        // Calculate color for each tract based on food access
        data_access.forEach(function(row) {
          var color = "hsla(0,0%,0%,0)";
          // if (row["low access"] == "Not Low Income and Low Access"){
          //   color = "hsla(358,80%,50%,.4)"
          // }
          if (row["low access"] == "Low Income and Low Access"){
            color = "hsla(358,30%,50%,.4)"
          }
          expression3.push(row["fips"], color);
        });

        // Last value is the default, used where there is no data
        expression.push("rgba(0,0,0,0)");
        expression2.push("rgba(0,0,0,0)");
        expression3.push("rgba(0,0,0,0)");

        // Add layer from the vector tile source with data-driven style
        map.addLayer({
          "id": "% White (2010)",
          "type": "fill",
          "source": "tracts",
          "source-layer": "29-9kp9k5",
          'layout': {
            visibility: "none"
          },
          "paint": {
            "fill-color": expression
          }
        }, 'waterway-label');

        map.addLayer({
          "id": "Income Levels (2012-2016)",
          "type": "fill",
          "source": "tracts",
          "source-layer": "29-9kp9k5",
          'layout': {
            visibility: "none"
          },
          "paint": {
            "fill-color": expression2
          }
        });

        map.addLayer({
          "id": "Food Access (2015)",
          "type": "fill",
          "source": "tracts",
          "source-layer": "29-9kp9k5",
          'layout': {
            visibility: "none"
          },
          "paint": {
            "fill-color": expression3
          }
        });

  //////////////////////////YELP DATA//////////////////////////////
  //ratings layer
  map.addLayer({
    'id': 'Ratings',
    'type': 'circle',
    'sprite': "mapbox://sprites/mapbox/bright-v8",
    'source': {
      type: 'vector',
      url: 'mapbox://kaywiz.3v0qxyft'
    },
    'source-layer': 'yelpstl_all_noreviews_4-6jvwy2',
    'paint': {
      'circle-radius': {
        property: 'rating',
        type: 'exponential',
        stops: [
          [2.5, 1],
          [5, 3]
        ]
      },
      'circle-opacity': 0.3,
      // color circles by ethnicity, using a match expression
      // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
      'circle-color': "#223b53"
    }
  });

  //reviews layer
  map.addLayer({
    'id': 'Reviews',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: 'mapbox://kaywiz.3v0qxyft'
    },
    'source-layer': 'yelpstl_all_noreviews_4-6jvwy2',
    'paint': {
      'circle-radius': {
        property: 'reviews',
        type: 'exponential',
        stops: [
          [1, 2],
          [759, 15]
        ]
      },
      'circle-opacity': 0.0,
      'circle-stroke-width': .25,
      'circle-stroke-opacity': 1,
      // color circles by ethnicity, using a match expression
      // https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
      'circle-stroke-color': "#223b53"
    }
  });

  //////////////////////////POPUPS//////////////////////////////
  //popup layer
  map.addLayer({
    'id': 'Popup',
    'type': 'circle',
    'source': {
      type: 'vector',
      url: 'mapbox://kaywiz.cjgllquro069kdvo7h5vhw4fd-864wh'
    },
    'source-layer': 'yelpstl_all_noreviews',
    'paint': {
      'circle-radius': {
        base: 10,
        stops: [
          [1, 10],
          [30, 200]
        ]
      },
      'circle-opacity': 0.0
    }
  });

  //////////////////////////KEYWORD MENTIONS//////////////////////////////
  map.addSource('heatmapdata', {
    type: 'vector',
    url: 'mapbox://kaywiz.cjgl8720k016e9ym0e2hkiipr-1ycpt'
  });

  //sketchy heatmap
  map.addLayer({
    'id': 'Sketchy',
    'type': 'heatmap',
    'source': 'heatmapdata',
    'source-layer': 'heatmap2',
    'layout': {
      visibility: "none"
    },
    "paint": {
      // Increase the heatmap weight based on frequency and property magnitude
      "heatmap-weight": {
        property: 'sketchy',
        type: 'exponential',
        stops: [
          [0.01, 0],
          [.1, 10]
        ]
      },
      'heatmap-opacity': {
        default: .75,
        stops: [
          [0, .5],
          [.5, .5]
        ]
      },
      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
      // Begin color ramp at 0-stop with a 0-transparancy color
      // to create a blur-like effect.
      "heatmap-color": [
        "interpolate",
        ["linear"],
        ["heatmap-density"],
        0, "#ffeda0",
        0.33, "#ffeda0",
        0.67, "#feb24c",
        1, "#f03b20"
      ],
      // Adjust the heatmap radius by zoom level
      "heatmap-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0, 1,
        12, 10
      ],
    }
  }
);

//hipster heatmap
map.addLayer({
  'id': 'Hipster',
  'type': 'heatmap',
  'source': 'heatmapdata',
  'source-layer': 'heatmap2',
  'layout': {
    visibility: "none"
  },
  "paint": {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": {
      property: 'hipster',
      type: 'exponential',
      stops: [
        [0.02, 0],
        [0.17, 10]
      ]
    },
    'heatmap-opacity': {
      default: .75,
      stops: [
        [0, .5],
        [.5, .5]
      ]
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0, "#ffeda0",
      0.33, "#edf8b1",
      0.67, "#7fcdbb",
      1, "#2c7fb8"
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 1,
      12, 10
    ],
  }

}
);

//cozy heatmap
map.addLayer({
  'id': 'Cozy',
  'type': 'heatmap',
  'source': 'heatmapdata',
  'source-layer': 'heatmap2',
  'layout': {
    visibility: "none"
  },
  "paint": {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": {
      property: 'cozy',
      type: 'exponential',
      stops: [
        [0.01, 0],
        [0.25, 10]
      ]
    },
    'heatmap-opacity': {
      default: .75,
      stops: [
        [0, .5],
        [.5, .5]
      ]
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0, "#ffeda0",
      0.33, "#edf8b1",
      0.67, "#7fcdbb",
      1, "#2c7fb8"
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 1,
      12, 10
    ],
  }
}
);

//friendly heatmap
map.addLayer({
  'id': 'Friendly',
  'type': 'heatmap',
  'source': 'heatmapdata',
  'source-layer': 'heatmap2',
  'layout': {
    visibility: "none"
  },
  "paint": {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": {
      property: 'friendly',
      type: 'exponential',
      stops: [
        [0.01, 0],
        [0.7, 10]
      ]
    },
    'heatmap-opacity': {
      default: .75,
      stops: [
        [0, .5],
        [.5, .5]
      ]
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0, "#ffeda0",
      0.33, "#edf8b1",
      0.67, "#7fcdbb",
      1, "#2c7fb8"
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 1,
      12, 10
    ],
  }
}
);

//rude heatmap
map.addLayer({
  'id': 'Rude',
  'type': 'heatmap',
  'source': 'heatmapdata',
  'source-layer': 'heatmap2',
  'layout': {
    visibility: "none"
  },
  "paint": {
    // Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": {
      property: 'rude',
      type: 'exponential',
      stops: [
        [0.01, 0],
        [0.35, 10]
      ]
    },
    'heatmap-opacity': {
      default: .75,
      stops: [
        [0, .5],
        [.5, .5]
      ]
    },
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0, "#ffeda0",
      0.33, "#ffeda0",
      0.67, "#feb24c",
      1, "#f03b20"
    ],
    // Adjust the heatmap radius by zoom level
    "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 1,
      12, 10
    ],
  }
}
);

      //////////////////////////POPUPS//////////////////////////////
      // Create a popup, but don't add it to the map yet.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      //reviews popup
      map.on('mouseenter', 'Popup', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var html = e.features[0].properties.HTML;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates)
        .setHTML(html)
        .addTo(map);
      });

      map.on('mouseleave', 'Popup', function() {

        map.getCanvas().style.cursor = '';
        popup.remove();
      });

      //////////////////////////TOGGLE LAYERS//////////////////////////////
      //layer toggle
      var toggleableLayerIds1 = [ 'Reviews', 'Ratings' ];
      var title1 = document.createElement('b');
      title1.textContent = "Yelp Data";
      var layers = document.getElementById('menu');
      layers.appendChild(title1);

      var toggleableLayerIds2 = [ 'Hipster', 'Cozy', 'Friendly', 'Sketchy', 'Rude'   ];
      var title2 = document.createElement('b');
      title2.textContent = "Keyword Mentions";
      var layers2 = document.getElementById('menu2');
      layers2.appendChild(title2);

      var toggleableLayerIds3 = [ '% White (2010)','Income Levels (2012-2016)', 'Food Access (2015)' ];
      var title3 = document.createElement('b');
      title3.textContent = "Census Data";
      var layers3 = document.getElementById('menu3');
      layers3.appendChild(title3);


      for (var i = 0; i < toggleableLayerIds1.length; i++) {
        var id = toggleableLayerIds1[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = id;

        link.onclick = function (e) {
          var clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

          if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
          } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
          }
        };

        layers.appendChild(link);

      }

      for (var i = 0; i < toggleableLayerIds2.length; i++) {
        var id = toggleableLayerIds2[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'inactive';
        link.textContent = id;

        link.onclick = function (e) {
          var clickedLayer = this.textContent;
          // e.preventDefault();
          // e.stopPropagation();

          var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
          map.setLayoutProperty(clickedLayer, 'visibility', 'none');

          if (this.className === 'inactive') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = 'inactive';
          }
          if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
          } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
          }
        };

        layers2.appendChild(link);
      }

      for (var i = 0; i < toggleableLayerIds3.length; i++) {
        var id = toggleableLayerIds3[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'inactive';
        link.textContent = id;

        link.onclick = function (e) {
          var clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
          map.setLayoutProperty(clickedLayer, 'visibility', 'none');

          if (this.className === 'inactive') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = 'inactive';
          }
          if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
          } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
          }
        };

        layers3.appendChild(link);
      }
    });

    // map.on('mousemove', function (e) {
    //     var features = map.queryRenderedFeatures(e.point);
    //     document.getElementById('features').innerHTML = JSON.stringify(features, null, 2);
    // });
