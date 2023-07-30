const { DDB_PRODUCTS_TABLE_NAME, AWS_REGION } = require('./src/config/index.js');
const { ProductRepository } = require('./src/repositories/product.repository.js');

const productRepository = new ProductRepository(DDB_PRODUCTS_TABLE_NAME, AWS_REGION);

const products = [
  {
    name: "Dell Inspiron 7415 AMD R5 5500U 14 inches(35cm) FHD Touch Display 2 in 1 Business Laptop (8GB/512GB SSD/Intel Integrated Graphics/Win 10 + MSO/Backlit KB + FPR + Active Pen /Pebble Metal Color, 1.5kg)",
    price: 71300.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/I/514FlU4YKBS._SL1080_.jpg"
  },
  {
    name: "Acer Aspire C24 23.8 inch Full HD IPS All in One Desktop I Intel Core i3 1005G1 I 8GB DDR4 I 512GB SSD I Windows 11 Home I MS Office Home & Student 2021 I Full HD Camera I Wireless Keyboard & Mouse",
    price: 43990.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/814p2+0e4RL._SL1500_.jpg"
  },
  {
    name: "Redmi Note 10T 5G (Mint Green, 4GB RAM, 64GB Storage) | Dual5G | 90Hz Adaptive Refresh Rate | MediaTek Dimensity 700 7nm Processor | 22.5W Charger Included",
    price: 11999.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81I6652dKDL._SL1500_.jpg"
  },
  {
    name: "Lenovo IdeaCentre A340 Touchscreen 23.8-inch Full HD IPS All-in-One Desktop (Intel Core i5-10210U/16GB/512GB SSD/Windows 11/MS Office 2021/HD 720p Camera/Wireless Keyboard & Mouse/Black), F0E800YMIN",
    price: 66490.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/811zyFsMcoL._SL1500_.jpg"
  },
  {
    name: "DHRUVI TRENDZ Women Rayon Casual Wear Western Maxi Dress Gown for Girl/Women/Ladies",
    price: 419.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61sbFqt193S._UL1400_.jpg"
  },
  {
    name: "JEOURDH - Fitted bedsheets King Size with Elastic , Polycotton Elastic Fitted Double Bedsheet with 2 Pillow Covers (Black)",
    price: 699.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61lzIJkrV+L._SL1047_.jpg"
  },
  {
    name: "Ishin Women's Cotton Green & Off White Embroidered A-Line Kurta Palazzo Set",
    price: 999.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/618FsVWllAL._UL1500_.jpg"
  },
  {
    name: "boAt Wave Lite Smartwatch with 1.69\" HD Display, Sleek Metal Body, HR & SpO2 Level Monitor, 140+ Watch Faces, Activity Tracker, Multiple Sports Modes, IP68 & 7 Days Battery Life(Active Black)",
    price: 1999.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61KPI-ZFbvL._SL1500_.jpg"
  },
  {
    name: "VIYAANSH Mens Gold Printed Rayon Short Kurta",
    price: 549.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51hI-r5wdPL._UL1400_.jpg"
  },
  {
    name: "Horlicks Health & Nutrition Drink - 2Kg Refill Pack (Classic Malt)",
    price: 670.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61m+J581IPL._SL1100_.jpg"
  },
  {
    name: "Lakmé Cushion Matte Lipstick, Red Wine, 4.5 g",
    price: 239.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51QstHwmYZL._SL1000_.jpg"
  },
  {
    name: "iQOO Neo 6 5G (Dark Nova, 8GB RAM, 128GB Storage) | Snapdragon® 870 5G | 80W FlashCharge",
    price: 29999.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71WS-0ITj7L._SL1200_.jpg"
  },
  {
    name: "ASUS AIO V241, 23.8\" (60.45 cm) FHD, Intel Core i5 11th Gen All-in-One Desktop (8GB/1TB HDD + 256GB SSD/Office 2021/Windows 11/Black/5.4 Kg) V241EAK-BA014WS",
    price: 59999.00,
    currency: "INR",
    imageURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81f7Jp81leL._SL1500_.jpg"
  }
]

products.forEach(async (product, index) => {
  await productRepository.SaveItem(product);
  console.log(`Asynchronously seeding item ${index+1} of total ${products.length} item(s).`);
})