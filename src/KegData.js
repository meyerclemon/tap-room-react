const kegs = [
    {
      id: 1,
      img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Left_Hand_Logo.jpg",
      brewery: 'Left Hand',
      name: 'Milk Stout',
      pint: '9',
      growler: 'N/A',
      origin: 'CO',
      abv: '6.0'
    },
    {
      id: 2,
      img:
        "https://static1.squarespace.com/static/56e9c0392b8dde82024235de/56eae893cf80a134e998803d/56eb418fc2ea518028b3047d/1458588507751/Sublogo-WEB.png?format=500w",
        brewery: 'Modern Times',
        name: 'Black House w/ Coconut/Cocoa ',
        pint: '6.5',
        growler: 'N/A',
        origin: 'CA',
        abv: '5.8'
    },
    {
      id: 3,
      img:
        "https://static1.squarespace.com/static/538fa264e4b09eb4feac4903/t/53e16aa5e4b068f76d2b3d0d/1407358950087/logo?format=1500w",
        brewery: 'Ground Breaker',
        name: 'IPA #5 (Gluten Free)',
        pint: '8.5',
        growler: '26',
        origin: 'OR',
        abv: '5.6'
    },
    {
      id: 4,
      img:
        "https://lh3.googleusercontent.com/hiYEFLr4q36WgA3qMGGxRe9DJDqC2PUPhFzxOLAR7SRHqHq5-3pOuZf5elCDpT-AeX4OTgGMGEQJPJNiITRsvARSNJag=s150",
        brewery: '2 Towns',
        name: 'Pacific Pineapple Cider',
        pint: '5.50',
        growler: '17',
        origin: 'OR',
        abv: '5.0'
    },
    {
      id: 5,
      img:
        "https://lh3.googleusercontent.com/Kk2X8fuCUgzzPkiD5ubBuycgaK-EvFvG0sWTvdhoRvi8BhcPt1h2y59nqK-1qdPRdu2kxlPI5kWrpsvHGGVkmd3np9ailw=s150",
        brewery: 'Whitewood',
        name: 'Lil\' Rosybloom Crabapple Cider',
        pint: '6.5',
        growler: '38',
        origin: 'WA',
        abv: '10.7'
    },
    {
      id: 6,
      img:
        "http://reverendnatshardcider.com/wp-content/themes/natscider/img/logo.png",
        brewery: 'Reverend Nat\'s',
        name: 'Sacrilege Sour Cherry Cider',
        pint: '5.5',
        growler: '17',
        origin: 'OR',
        abv: '6.5'
    },
    {
      id: 7,
      img: "https://logos.chinookbook.com/OrganizationImages/a0P8000000EFIw1EAH.png",
      brewery: 'Schilling',
      name: 'London Dry Cider',
      pint: '6.5',
      growler: '20',
      origin: 'WA',
      abv: '6.5'
    },
    {
      id: 8,
      img: "http://www.brouwerscafe.com/wp-content/uploads/2017/05/finnriver_logo_color.jpeg",
      brewery: 'Finnriver',
      name: 'Oaken Haben Cider',
      pint: '10.50',
      growler: '32',
      origin: 'WA',
      abv: '6.5'
    },
    {
      id: 9,
      img: "https://scontent-sea1-1.cdninstagram.com/vp/61d35120832cad013223d52bad2b621a/5DB741E7/t51.2885-19/s320x320/52153159_562728197563287_4691845548578177024_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com",
      brewery: 'Seattle Mead Company',
      name: 'Double Berry Tart Mead',
      pint: '9',
      growler: 'N/A',
      origin: 'WA',
      abv: '9.5'
    },
    {
      id: 10,
      img: "http://www.washingtonbeerblog.com/wp-content/uploads/2019/05/Mirage-beer-co-feat-2.jpg",
      brewery: 'Mirage/Chuck\'s',
      name: 'I Know Kung Fu Hazy IPA',
      pint: '7',
      growler: '21',
      origin: 'WA',
      abv: '6.2'
    },
    {
      id: 11,
      img: "http://www.stoupbrewing.com/wp-content/uploads/2019/06/StoupBeerRunnersLogo.png",
      brewery: 'Stoup',
      name: 'Kristallweizen',
      pint: '5',
      growler: '15',
      origin: 'WA',
      abv: '4.8'
    },
    {
      id: 12,
      img: "https://lh3.googleusercontent.com/6uOfPnOqryax7lgYreUjJEdSOVuSennjp5ZwsUaazMSvlK9XZna0QNbgjSapkLXQqcQIQLn9Z_yh8-MU-dKvlDOi2Y0ZNA=s150",
      brewery: 'Standard	',
      name: 'Last Beer on the Left IPA',
      pint: '5.5',
      growler: '17',
      origin: 'WA',
      abv: '6.0'
    },
    {
      id: 13,
      img: "https://static1.squarespace.com/static/587e5604440243b3a687eb94/t/5acbdc79aa4a998f3f89d8b8/1523309713334/Dwinell+Seal+wtih+Stars+%5BRecovered%5D.png?format=750w",
      brewery: 'Dwinell Country Ales',
      name: 'Horsethief Farmhouse Pale',
      pint: '7',
      growler: '21',
      origin: 'WA',
      abv: '7.1'
    },
    {
      id: 14,
      img: "https://upload.wikimedia.org/wikipedia/en/9/98/Fremont_Brewing_logo.png",
      brewery: 'Fremont',
      name: 'Brother IIPA	',
      pint: '8.50',
      growler: '26',
      origin: 'WA',
      abv: '8.5'
    },
    {
      id: 15,
      img: "https://cdn2.shopify.com/s/files/1/1250/2903/t/2/assets/logo.png?14",
      brewery: 'Gigantic',
      name: 'Most Most Premium Stout',
      pint: '6.50',
      growler: 'N/A',
      origin: 'OR',
      abv: '10.0'
    },
    {
      id: 16,
      img: "",
      brewery: 'Lost Abbey',
      name: 'Judgment Day Quad',
      pint: '7.50',
      growler: '23',
      origin: 'CA',
      abv: '10.2'
    },
    {
      id: 17,
      img: "",
      brewery: 'White Bluffs',
      name: 'Red Altbier',
      pint: '7',
      growler: '21',
      origin: 'WA',
      abv: '6.4'
    },
    {
      id: 18,
      img: "",
      brewery: 'Cloudburst',
      name: 'Art Deco Stuff IIPA',
      pint: '6.5',
      growler: '20',
      origin: 'WA',
      abv: '8.3'
    },
    {
      id: 19,
      img: "",
      brewery: 'Wander',
      name: 'Earlybird BA Breakfast Stout',
      pint: '8',
      growler: '48',
      origin: 'WA',
      abv: '9.6'
    },
    {
      id: 20,
      img: "",
      brewery: 'Boulevard',
      name: 'Tank 7 Saison',
      pint: '8',
      growler: '24',
      origin: 'MO',
      abv: '8.0'
    },
    {
      id: 21,
      img: "",
      brewery: 'Cloudburst',
      name: 'In Those Jeans IPA',
      pint: '5.5',
      growler: '17',
      origin: 'WA',
      abv: '7.0'
    },
    {
      id: 22,
      img: "",
      brewery: 'Upright',
      name: 'Heart\'s Beat Cherry Sour',
      pint: '7.5',
      growler: '23',
      origin: 'OR',
      abv: '6.8'
    },
    {
      id: 23,
      img: "",
      brewery: 'Skookum',
      name: 'Next New IPA',
      pint: '6',
      growler: '18',
      origin: 'WA',
      abv: '7.1'
    },
    {
      id: 24,
      img: "",
      brewery: 'Founders',
      name: 'Blushing Monk Raspberry Belg.',
      pint: '5.5',
      growler: '33',
      origin: 'MI',
      abv: '9.2'
    },
    {
      id: 25,
      img: "",
      brewery: 'Matchless',
      name: 'Cherry Matchless Bar Stout',
      pint: '7',
      growler: '41',
      origin: 'WA',
      abv: '11.2'
    },
    {
      id: 26,
      img: "",
      brewery: 'Bale Breaker',
      name: 'Mango IPA',
      pint: '7.5',
      growler: '23',
      origin: 'WA',
      abv: '5.9'
    },
    {
      id: 27,
      img: "",
      brewery: 'Wayfinder	',
      name: 'Songs of Courtship Kellerbier',
      pint: '7',
      growler: '21',
      origin: 'OR',
      abv: '5.5'
    },
    {
      id: 28,
      img: "",
      brewery: 'Cloudburst',
      name: 'This Is My Friday Keller Pilsner',
      pint: '5.5',
      growler: '17',
      origin: 'WA',
      abv: '5.3'
    },
    {
      id: 29,
      img: "",
      brewery: 'Matchless',
      name: 'Sunbreak Summer IPA',
      pint: '5.5',
      growler: '17',
      origin: 'WA',
      abv: '6.3'
    },
    {
      id: 30,
      img: "",
      brewery: 'Holy Mountain',
      name: 'Kristallweizen',
      pint: '6.5',
      growler: 'N/A',
      origin: 'WA',
      abv: '5.5'
    },
    {
      id: 31,
      img: "",
      brewery: 'Mazama',
      name: 'Rye BA Baltic Porter',
      pint: '7',
      growler: '42',
      origin: 'OR',
      abv: '9.0'
    },
    {
      id: 32,
      img: "",
      brewery: 'Schöfferhofer',
      name: 'Grapefruit Hefeweizen Radler',
      pint: '5',
      growler: '15',
      origin: 'GER',
      abv: '2.5'
    },
    {
      id: 33,
      img: "",
      brewery: 'Modern Times',
      name: 'Gravity Hammer Berliner',
      pint: '6.5',
      growler: '39',
      origin: 'CA',
      abv: '10.0'
    },
    {
      brewery: 'Machine House',
      name: 'KristalSummer Alelweizen',
      pint: '6.5',
      growler: '20',
      origin: 'WA',
      abv: '4.6'
    },
    {
      id: 34,
      img: "",
      brewery: 'Georgetown',
      name: 'Johnny Utah Citra Pale Ale',
      pint: '6',
      growler: '18',
      origin: 'WA',
      abv: '5.6'
    },
    {
      id: 35,
      img: "",
      brewery: 'Oskar Blues',
      name: 'Old Chub Scotch Ale',
      pint: '5.5',
      growler: '17',
      origin: 'CO',
      abv: '8.0'
    },
    {
      id: 36,
      img: "",
      brewery: 'E9',
      name: 'Realize, Real Lies IPA',
      pint: '5',
      growler: '15',
      origin: 'WA',
      abv: '6.0'
    }
  ]
  
  export default kegs;
  