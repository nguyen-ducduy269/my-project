const clothes = [
  {
    name: "Women's Fashion",
    image: "./assets/image/women-clothes.png",
  },
  {
    name: "Men's Fashion",
    image: "./assets/image/men-clothes.png",
  },
  {
    name: "Phones & Telecommunications",
    image: "./assets/image/phone.png",
  },
  {
    name: "Computer, Office & Security",
    image: "./assets/image/computer.png",
  },
  {
    name: "Consumer Electronics",
    image: "./assets/image/electronic.png",
  },
  {
    name: "Jewelry & Watches",
    image: "./assets/image/jewelry.png",
  },
  {
    name: "Home, Pet & Appliances",
    image: "./assets/image/home.png",
  },
  {
    name: "Bags & Shoes",
    image: "./assets/image/bags.png",
  },
  {
    name: "Toys, Kids & Babies",
    image: "./assets/image/toys.png",
  },
  {
    name: "Outdoor Fun & Sports",
    image: "./assets/image/sports.png",
  },
  {
    name: "Beauty, Health & Hair",
    image: "./assets/image/beauty.png",
  },
  {
    name: "Automobiles & Motorcycles",
    image: "./assets/image/motorcycles.png",
  },
  {
    name: "Tools & Home Improvement",
    image: "./assets/image/improvement.png",
  },
];

const sale = [
  {
    image: "./assets/image/shopping guide.webp",
    discount: 39,
    name: "Shopping Guide",
  },
  {
    image: "./assets/image/amazing-markdown.webp",
    discount: 52,
    name: "Amazing markdowns",
  },
  {
    image: "./assets/image/top-brands.webp",
    discount: 67,
    name: "Top brands",
  },
  {
    image: "./assets/image/choice.webp",
    discount: 70,
    name: "Choice",
  },
  {
    image: "./assets/image/spend&save.webp",
    discount: 69,
    name: "Spend & Save",
  },
  {
    image: "./assets/image/enjoy-your-tech-live.webp",
    discount: 67,
    name: "Enjoy your tech life",
  },
  {
    image: "./assets/image/toy&hobbies.webp",
    discount: 62,
    name: "Toys & hobbies",
  },
  {
    image: "./assets/image/summer-home-refesh.webp",
    discount: 67,
    name: "Summer home refresh",
  },
  {
    image: "./assets/image/Consumer&electronics.webp",
    discount: 67,
    name: "Consumer electronics",
  },
  {
    image: "./assets/image/Home & garden.webp",
    discount: 62,
    name: "Home & garden",
  },
  {
    image: "./assets/image/Luggage & bags.webp",
    discount: 66,
    name: "Luggage & bags",
  },
  {
    image: "./assets/image/Phones & accessories.webp",
    discount: 54,
    name: "Phones & accessories",
  },
  {
    image: "./assets/image/Tools & home improvement.webp",
    discount: 29,
    name: "Tools & home improvement",
  },
  {
    image: "./assets/image/Computer & office.webp",
    discount: 41,
    name: "Computer & office",
  },
  {
    image: "./assets/image/Underwear & exotic apparel.webp",
    discount: 22,
    name: "Underwear & exotic apparel",
  },
  {
    image: "./assets/image/Men's clothing & watches.webp",
    discount: 44,
    name: "Men's clothing & watches",
  },
];

const products = [
  {
    id: 1,
    image:
      "./assets/image/product/Luminous-Dragon-Rings-Gothic-Adjustable-Metal-Resin-Rings-Unique-Men-Women-Jewellery-Vintage-Halloween-Anillos-Accessorie.jpg_220x220xz.jpg_.webp",
    price: 22.09,
    first_sold: "3,000+ sold",
    next_sold: "4.4",
    discription:
      "Luminous Dragon Rings Gothic Adjustable Metal Resin Rings Unique Men Women Jewellery Vintage Halloween Anillos Accessorie Gifts",
    type: "ring",
  },
  {
    id: 2,
    image:
      "./assets/image/product/Original-Pro6-TWS-Touch-Control-Wireless-Bluetooth-5-0-Headphones-Sport-Earbuds-Music-Headset-For-iphone.jpg_220x220xz.jpg_.webp",
    price: 70.968,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.3",
    discription:
      "Original Pro6 TWS Touch Control Wireless Bluetooth 5.0 Headphones Sport Earbuds Music Headset For iphone Xiaomi phones Earphones",
  },
  {
    id: 3,
    image:
      "./assets/image/product/Luxury-Fashion-Mens-Watches-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 46.764,
    before_price: 146.637,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.0",
    discription:
      "Luxury Fashion Mens Watches Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 4,
    image:
      "https://ae01.alicdn.com/kf/S1dacfcc879a94534a327e335e08c6cfcS/Delysia-King-Ring.jpg_220x220xz.jpg_.webp",
    price: 57.574,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "2,000+ sold",
    next_sold: "4.7",
    discription:
      "2023 New Rings For Women 100% 925 Sterling Silver Star Moon Colorful Zircon Rings Fine Wedding Engagement Birthday Jewelry Gifts",
    type: "ring",
  },
  {
    id: 5,
    image:
      "https://ae01.alicdn.com/kf/Sf9633bfdb5ec4eeba9d1666dae729f7cA/TWS-Pro60-Fone-Bluetooth-5-0-Earphones-Wireless-Headphones-HiFi-Stero-Headset-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp",
    price: 98.463,
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Pro60 Fone Bluetooth 5.0 Earphones Wireless Headphones HiFi Stero Headset Noise Reduction Sports Earbuds with Mic for Phone",
  },
  {
    id: 6,
    image:
      "https://ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_220x220xz.jpg_.webp",
    price: 66.269,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.4",
    discription:
      "TWS E6S Bluetooth Earphones Wireless bluetooth headset Noise Cancelling Headsets With Microphone Headphones For Xiaomi Redmi",
  },
  {
    id: 7,
    image:
      "https://ae01.alicdn.com/kf/S5dd07f6fcfcd409d98b24bcf2ea2a5bdT/Fashion-Mens-Watches-Luxury-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 80.603,
    before_price: 247.215,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "100K+ sold",
    next_sold: "4.4",
    discription:
      "Fashion Mens Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 8,
    image:
      "https://ae01.alicdn.com/kf/S7aa25fb0590b47f387fa10d8c34874e0o/Men-Watch-Sports-Quartz-Watches-Men-Waterproof-Chronograph-Wristwatch-Mens-Military-Clock-Man-Relogio-Masculino.jpg_220x220xz.jpg_.webp",
    after_price: 253.935,
    before_price: 761.853,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.6",
    discription:
      "Men Watch Sports Quartz Watches Men Waterproof Chronograph Wristwatch Mens Military Clock Man Relogio Masculino",
  },
  {
    id: 9,
    image:
      "https://ae01.alicdn.com/kf/S0eb22b5e0e1c47a39fd0951fc9b82712j/TWS-Bluetooth-Earphones-3500mAh-Charging-Box-Wireless-Headphone-Fone-Stereo-Wireless-Headset-with-Mic-Sports-Waterproof.jpg_220x220xz.jpg_.webp",
    price: 46.764,
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Bluetooth Earphones 3500mAh Charging Box Wireless Headphone Fone Stereo Wireless Headset with Mic Sports Waterproof Earbuds",
  },
  {
    id: 10,
    image:
      "https://ae01.alicdn.com/kf/S388da9fc1f044ad39fae434edd8421d83/New-2023-Usb-3-0-Pendrive-2TB-High-Speed-Pen-Drive-16TB-Metal-Cle-Usb-Flash.jpg_220x220xz.jpg_.webp",
    after_price: 30.475,
    before_price: 50.77,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "700+ sold",
    next_sold: "4.4",
    discription:
      "New 2023 Usb 3.0 Pendrive 2TB High Speed Pen Drive 16TB Metal Cle Usb Flash Drive 4TB 8TB Portable SSD Memoria Usb Free Shipping",
  },
  {
    id: 11,
    image:
      "https://ae01.alicdn.com/kf/S0c5659e1d52e465c9235c765491343efy/E7S-TWS-Wireless-Headphones-Bluetooth-earphone-Control-Sport-Headset-Waterproof-Microphone-Music-Earphone-Work-On-All.jpg_220x220xz.jpg_.webp",
    price: 68.853,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "E7S TWS Wireless Headphones Bluetooth earphone Control Sport Headset Waterproof Microphone Music Earphone Work On All Smartphone",
    more_details: [
      "https://ae01.alicdn.com/kf/S0c5659e1d52e465c9235c765491343efy/E7S-TWS-Wireless-Headphones-Bluetooth-earphone-Control-Sport-Headset-Waterproof-Microphone-Music-Earphone-Work-On-All.jpg_220x220xz.jpg_.webp",
    ],
  },
  {
    id: 12,
    image:
      "https://ae01.alicdn.com/kf/S443b3605f110411ab81e1edb0cc2b79e2/2023-USB-Electric-Lighters-Windproof-USB-Rechargeable-Touch-Windproof-Cigarette-Accessories-Electric-Lighter-Portable-e-ziggarte.jpg_220x220xz.jpg_.webp",
    after_price: 34.779,
    before_price: 74.023,
    choice: [
      "./assets/image/product/summer-sale.png",
      "./assets/image/product/top-selling.png",
    ],
    first_sold: "3000+ sold",
    next_sold: "4.7",
    discription:
      "2023 USB Electric Lighters Windproof USB Rechargeable Touch Windproof Cigarette Accessories Electric Lighter Portable e ziggarte",
  },
  {
    id: 13,
    image:
      "https://ae01.alicdn.com/kf/Sa8eaedc39d364a468a122eae8e66c516Q/Men-Military-Watch-Digital-50m-Waterproof-Wristwatch-LED-Quartz-Clock-Sport-Watch-Male-Big-Watches-Men.jpg_220x220xz.jpg_.webp",
    after_price: 159.091,
    before_price: 545.658,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.8",
    discription:
      "Men Military Watch Digital 50m Waterproof Wristwatch LED Quartz Clock Sport Watch Male Big Watches Men Relogios Masculino",
  },
  {
    id: 14,
    image:
      "https://ae01.alicdn.com/kf/S16956f3408594b6db3aeb6759379fde4k/Wireless-Headphones-5-1-Bluetooth-Earphones-HIFI-Lossless-Sound-Headsets-Sports-Mini-TWS-Earbuds-For-iphone.jpg_220x220xz.jpg_.webp",
    price: 253,
    first_sold: "5,000+ sold",
    next_sold: "4.4",
    discription:
      "Wireless Headphones 5.1 Bluetooth Earphones HIFI Lossless Sound Headsets Sports Mini TWS Earbuds For iphone XS Max Xiaomi Phones",
  },
  {
    id: 15,
    image:
      "https://ae01.alicdn.com/kf/S25f8ddcc017549f1ad928888487500edG/Huawei-General-Bluetooth-Headphones-Tws-Wireless-Earphone-Noise-Reduction-Waterproof-Low-Latency-9d-Hifi-Stereo-Long.jpg_220x220xz.jpg_.webp",
    price: 414.135,
    first_sold: "8 sold",
    next_sold: "3.0",
    discription:
      "Huawei General Bluetooth Headphones Tws Wireless Earphone Noise Reduction Waterproof Low Latency 9d Hifi Stereo Long Endurance",
  },
  {
    id: 16,
    image:
      "https://ae01.alicdn.com/kf/S624f58ebe30548b18c4ed9e3b078ec5aI/2pcs-Set-Fashion-Mens-Sports-Watches-Man-Business-Quartz-Wristwatch-Luxury-Men-Casual-Clock-Watch-Relogio.jpg_220x220xz.jpg_.webp",
    after_price: 53.814,
    before_price: 146.467,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "1,000+ sold",
    next_sold: "4.5",
    discription:
      "2pcs Set Fashion Mens Sports Watches Man Business Quartz Wristwatch Luxury Men Casual Clock Watch Relogio Masculino",
  },
  {
    id: 17,
    image:
      "https://ae01.alicdn.com/kf/S8c8de857462b4a929767114bc86f1753B/Drone-GPS-5G-6K-8K-HD-Drones-Professional-Aerial-Photography-Wifi-FPV-Obstacle-Avoidance-Folding-Quadcopter.jpg_220x220xz.jpg_.webp",
    price: 128.82,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "2,000+ sold",
    next_sold: "4.1",
    discription:
      "Drone GPS 5G 6K 8K HD Drones Professional Aerial Photography Wifi FPV Obstacle Avoidance Folding Quadcopter Rc Distance 3000M",
  },
  {
    id: 18,
    image:
      "https://ae01.alicdn.com/kf/Sc06a357efdfd4db18229f4de41ab97c8N/Luxury-Skull-Ring-for-Women-Men-Punk-Hip-Hop-Hollow-Skeleton-Adjustable-Opening-Rings-Halloween-Party.jpg_220x220xz.jpg_.webp",
    price: 37.129,
    type: "ring",
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "3 sold",
    next_sold: "1.2",
    discription:
      "Luxury Skull Ring for Women Men Punk Hip Hop Hollow Skeleton Adjustable Opening Rings Halloween Party Jewelry Accessories Gift",
  },
  {
    id: 19,
    image:
      "https://ae01.alicdn.com/kf/S1b267460fc174fac944b5ea6cf3b2b755/2022-New-Fashion-Female-Shoulder-Bag-Rhombus-Embroidered-Solid-Color-Chain-Women-Shoulder-Crossbody-Casual-Trendy.jpg_220x220xz.jpg_.webp",
    after_price: 53.344,
    before_price: 140.527,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "2022 New Fashion Female Shoulder Bag Rhombus Embroidered Solid Color Chain Women Shoulder Crossbody Casual Trendy Phone Bag",
  },
  {
    id: 20,
    image:
      "https://ae01.alicdn.com/kf/S3a11b85341d448ffa339d504553b5b3eB/Men-s-Wallet-Leather-Billfold-Slim-Hipster-Cowhide-Credit-Card-ID-Holders-Inserts-Coin-Purses-Luxury.jpg_220x220xz.jpg_.webp",
    after_price: 71.673,
    choice: [
      "./assets/image/product/top-selling.png",
      "./assets/image/product/190x64.webp",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "Men's Wallet Leather Billfold Slim Hipster Cowhide Credit Card/ID Holders Inserts Coin Purses Luxury Business Foldable Wallet",
  },
  {
    id: 21,
    image:
      "https://ae01.alicdn.com/kf/S9388e27c3a4445d492de00bea0519e12K/2023-Dragon-Ball-Z-Sports-Shorts-Cartoon-New-Men-s-Summer-Shorts-Anime-T-shirts-Oversized.jpg_220x220xz.jpg_.webp",
    price: 54.519,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "295+ sold",
    next_sold: "4.5",
    discription:
      "2023 Dragon Ball Z Sports Shorts Cartoon New Men's Summer Shorts Anime T-shirts Oversized Y2k Goku Vegeta Man Shorts Fashion",
  },
  {
    id: 22,
    image:
      "https://ae01.alicdn.com/kf/S63bc74e3da9d4dc5befcee58f1fee22c1/Quartz-Watch-Men-Business-Fashion-Fake-Three-Eye-Six-Pin-Calendar-Watch-For-Men-Mesh-Belt.jpg_220x220xz.jpg_.webp",
    after_price: 93.763,
    before_price: 246.745,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.0",
    discription:
      "Quartz Watch Men Business Fashion Fake Three Eye Six Pin Calendar Watch For Men Mesh Belt Men Watch Non Mechanical Boy",
  },
  {
    id: 23,
    image:
      "https://ae01.alicdn.com/kf/Sfb9d9c7461ef4d099357187e02749521B/Electric-Water-Storage-Gun-Pistol-Shooting-Toy-Portable-Children-Summer-Beach-Outdoor-Fight-Fantasy-Toys-for.jpg_220x220xz.jpg_.webp",
    after_price: 161.206,
    before_price: 489.259,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "425+ sold",
    next_sold: 0,
    discription:
      "Electric Water Storage Gun Pistol Shooting Toy Portable Children Summer Beach Outdoor Fight Fantasy Toys for Boys Kids Game",
  },
  {
    id: 24,
    image:
      "https://ae01.alicdn.com/kf/Sa81cd0c25ed647778b27db1c51435f9ca/Starry-Collection-Charms-Beads-Women-925-Silver-Sun-Stars-Moon-Dangle-Pendants-Fit-Original-Pandora-Jewelry.jpg_220x220xz.jpg_.webp",
    price: 81.476,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "3+ sold",
    next_sold: 0,
    discription:
      "Starry Collection Charms Beads Women 925 Silver Sun Stars Moon Dangle Pendants Fit Original Pandora Jewelry Bracelet Necklace",
  },
  {
    id: 25,
    image:
      "https://ae01.alicdn.com/kf/Se921fb855b8f454e8a64f4d86c4353ffL/SMAEL-New-Sport-Watch-Mens-50M-Waterproof-Clock-Alarm-Reloj-Hombre-1545D-Dual-Display-Wristwatch-Quartz.jpg_220x220xz.jpg_.webp",
    after_price: 140.057,
    before_price: 425.341,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "1,000+ sold",
    next_sold: "4.8",
    discription:
      "SMAEL New Sport Watch Mens 50M Waterproof Clock Alarm Reloj Hombre 1545D Dual Display Wristwatch Quartz Military Watches For Men",
  },
  {
    id: 26,
    image:
      "https://ae01.alicdn.com/kf/H35a86aa144784f6fab7f372ca69ba109i/Fashion-Letters-Embroidery-Women-Men-Baseball-Caps-Female-Male-Sport-Visors-Snapback-Cap-Sun-Hat-For.jpg_220x220xz.jpg_.webp",
    after_price: 88.123,
    before_price: 187.526,
    choice: [
      "./assets/image/product/summer-sale.png",
      "./assets/image/product/top-selling.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.6",
    discription:
      "Fashion Letters Embroidery  Women Men Baseball Caps Female Male Sport Visors Snapback Cap Sun Hat For Women Men",
  },
  {
    id: 27,
    image:
      "https://ae01.alicdn.com/kf/S3c0ea91fbee846b79af82217932ebdbbt/AOMEISHA-Retinol-Lifting-Firming-Cream-Remove-Wrinkle-Anti-Aging-Fade-Fine-Lines-Face-Whitening-Brighten-Skin.png_220x220xz.png_.webp",
    price: 280.505,
    sale_off: "Extra 3% off with coins",
    first_sold: "144+ sold",
    next_sold: "5",
    discription:
      "AOMEISHA Retinol Lifting Firming Cream Remove Wrinkle Anti-Aging Fade Fine Lines Face Whitening Brighten Skin Beauty Health Care",
  },
  {
    id: 28,
    image:
      "https://ae01.alicdn.com/kf/S95124749f6e444519179ac91cb7d34dbJ/Creative-Frameless-DIY-Wall-Clock-Wall-Decal-Home-Silent-Clock-Living-Room-Office-Wall-Decoration.jpg_220x220xz.jpg_.webp",
    after_price: 42.534,
    before_price: 134.417,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "Creative Frameless DIY Wall Clock Wall Decal Home Silent Clock Living Room Office Wall Decoration",
  },
  {
    id: 29,
    image:
      "https://ae01.alicdn.com/kf/Sc5538f3ba4a34c16a27f5d9ff9b8b230e/Metal-Stripe-Loud-Lighter-Unusual-Lighters-Cigarette-Lighter-Creative-Wheel-Lighter-Butane-Gas-Lighter-Open-Fire.jpg_220x220xz.jpg_.webp",
    price: 129.952,
    first_sold: "1,000+ sold",
    next_sold: "4.5",
    discription:
      "Metal Stripe Loud Lighter Unusual Lighters Cigarette Lighter Creative Wheel Lighter Butane Gas Lighter Open Fire Square Lighter",
  },
  {
    id: 30,
    image:
      "https://ae01.alicdn.com/kf/S36008550e7df48c19c6f28cbc79ca80cz/Men-s-Sneakers-2022-New-Lightweight-Men-Vulcanized-Shoes-Anti-skid-Breathable-Male-Trend-Casual-Shoes.jpg_220x220xz.jpg_.webphttps://ae01.alicdn.com/kf/S36008550e7df48c19c6f28cbc79ca80cz/Men-s-Sneakers-2022-New-Lightweight-Men-Vulcanized-Shoes-Anti-skid-Breathable-Male-Trend-Casual-Shoes.jpg_220x220xz.jpg_.webp",
    price: 232.645,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "20,000+ sold",
    next_sold: "4.8",
    discription:
      "Men's Sneakers 2022 New Lightweight Men Vulcanized Shoes Anti-skid Breathable Male Trend Casual Shoes Fashion Men's Sports Shoes",
  },
  {
    id: 27,
    image:
      "https://ae01.alicdn.com/kf/S3c0ea91fbee846b79af82217932ebdbbt/AOMEISHA-Retinol-Lifting-Firming-Cream-Remove-Wrinkle-Anti-Aging-Fade-Fine-Lines-Face-Whitening-Brighten-Skin.png_220x220xz.png_.webp",
    price: 280.505,
    sale_off: "Extra 3% off with coins",
    first_sold: "144+ sold",
    next_sold: "5",
    discription:
      "AOMEISHA Retinol Lifting Firming Cream Remove Wrinkle Anti-Aging Fade Fine Lines Face Whitening Brighten Skin Beauty Health Care",
  },
  {
    id: 20,
    image:
      "https://ae01.alicdn.com/kf/S3a11b85341d448ffa339d504553b5b3eB/Men-s-Wallet-Leather-Billfold-Slim-Hipster-Cowhide-Credit-Card-ID-Holders-Inserts-Coin-Purses-Luxury.jpg_220x220xz.jpg_.webp",
    after_price: 71.673,
    choice: [
      "./assets/image/product/top-selling.png",
      "./assets/image/product/190x64.webp",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "Men's Wallet Leather Billfold Slim Hipster Cowhide Credit Card/ID Holders Inserts Coin Purses Luxury Business Foldable Wallet",
  },
  {
    id: 21,
    image:
      "https://ae01.alicdn.com/kf/S9388e27c3a4445d492de00bea0519e12K/2023-Dragon-Ball-Z-Sports-Shorts-Cartoon-New-Men-s-Summer-Shorts-Anime-T-shirts-Oversized.jpg_220x220xz.jpg_.webp",
    price: 54.519,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "295+ sold",
    next_sold: "4.5",
    discription:
      "2023 Dragon Ball Z Sports Shorts Cartoon New Men's Summer Shorts Anime T-shirts Oversized Y2k Goku Vegeta Man Shorts Fashion",
  },
  {
    id: 22,
    image:
      "https://ae01.alicdn.com/kf/S63bc74e3da9d4dc5befcee58f1fee22c1/Quartz-Watch-Men-Business-Fashion-Fake-Three-Eye-Six-Pin-Calendar-Watch-For-Men-Mesh-Belt.jpg_220x220xz.jpg_.webp",
    after_price: 93.763,
    before_price: 246.745,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.0",
    discription:
      "Quartz Watch Men Business Fashion Fake Three Eye Six Pin Calendar Watch For Men Mesh Belt Men Watch Non Mechanical Boy",
  },
  {
    id: 23,
    image:
      "https://ae01.alicdn.com/kf/Sfb9d9c7461ef4d099357187e02749521B/Electric-Water-Storage-Gun-Pistol-Shooting-Toy-Portable-Children-Summer-Beach-Outdoor-Fight-Fantasy-Toys-for.jpg_220x220xz.jpg_.webp",
    after_price: 161.206,
    before_price: 489.259,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "425+ sold",
    next_sold: 0,
    discription:
      "Electric Water Storage Gun Pistol Shooting Toy Portable Children Summer Beach Outdoor Fight Fantasy Toys for Boys Kids Game",
  },
  {
    id: 24,
    image:
      "https://ae01.alicdn.com/kf/Sa81cd0c25ed647778b27db1c51435f9ca/Starry-Collection-Charms-Beads-Women-925-Silver-Sun-Stars-Moon-Dangle-Pendants-Fit-Original-Pandora-Jewelry.jpg_220x220xz.jpg_.webp",
    price: 81.476,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "3+ sold",
    next_sold: 0,
    discription:
      "Starry Collection Charms Beads Women 925 Silver Sun Stars Moon Dangle Pendants Fit Original Pandora Jewelry Bracelet Necklace",
  },
  {
    id: 1,
    image:
      "./assets/image/product/Luminous-Dragon-Rings-Gothic-Adjustable-Metal-Resin-Rings-Unique-Men-Women-Jewellery-Vintage-Halloween-Anillos-Accessorie.jpg_220x220xz.jpg_.webp",
    price: 22.09,
    first_sold: "3,000+ sold",
    next_sold: "4.4",
    discription:
      "Luminous Dragon Rings Gothic Adjustable Metal Resin Rings Unique Men Women Jewellery Vintage Halloween Anillos Accessorie Gifts",
    type: "ring",
  },
  {
    id: 2,
    image:
      "./assets/image/product/Original-Pro6-TWS-Touch-Control-Wireless-Bluetooth-5-0-Headphones-Sport-Earbuds-Music-Headset-For-iphone.jpg_220x220xz.jpg_.webp",
    price: 70.968,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.3",
    discription:
      "Original Pro6 TWS Touch Control Wireless Bluetooth 5.0 Headphones Sport Earbuds Music Headset For iphone Xiaomi phones Earphones",
  },
  {
    id: 3,
    image:
      "./assets/image/product/Luxury-Fashion-Mens-Watches-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 46.764,
    before_price: 146.637,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.0",
    discription:
      "Luxury Fashion Mens Watches Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 15,
    image:
      "https://ae01.alicdn.com/kf/S25f8ddcc017549f1ad928888487500edG/Huawei-General-Bluetooth-Headphones-Tws-Wireless-Earphone-Noise-Reduction-Waterproof-Low-Latency-9d-Hifi-Stereo-Long.jpg_220x220xz.jpg_.webp",
    price: 414.135,
    first_sold: "8 sold",
    next_sold: "3.0",
    discription:
      "Huawei General Bluetooth Headphones Tws Wireless Earphone Noise Reduction Waterproof Low Latency 9d Hifi Stereo Long Endurance",
  },
  {
    id: 16,
    image:
      "https://ae01.alicdn.com/kf/S624f58ebe30548b18c4ed9e3b078ec5aI/2pcs-Set-Fashion-Mens-Sports-Watches-Man-Business-Quartz-Wristwatch-Luxury-Men-Casual-Clock-Watch-Relogio.jpg_220x220xz.jpg_.webp",
    after_price: 53.814,
    before_price: 146.467,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "1,000+ sold",
    next_sold: "4.5",
    discription:
      "2pcs Set Fashion Mens Sports Watches Man Business Quartz Wristwatch Luxury Men Casual Clock Watch Relogio Masculino",
  },
  {
    id: 17,
    image:
      "https://ae01.alicdn.com/kf/S8c8de857462b4a929767114bc86f1753B/Drone-GPS-5G-6K-8K-HD-Drones-Professional-Aerial-Photography-Wifi-FPV-Obstacle-Avoidance-Folding-Quadcopter.jpg_220x220xz.jpg_.webp",
    price: 128.82,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "2,000+ sold",
    next_sold: "4.1",
    discription:
      "Drone GPS 5G 6K 8K HD Drones Professional Aerial Photography Wifi FPV Obstacle Avoidance Folding Quadcopter Rc Distance 3000M",
  },
  {
    id: 18,
    image:
      "https://ae01.alicdn.com/kf/Sc06a357efdfd4db18229f4de41ab97c8N/Luxury-Skull-Ring-for-Women-Men-Punk-Hip-Hop-Hollow-Skeleton-Adjustable-Opening-Rings-Halloween-Party.jpg_220x220xz.jpg_.webp",
    price: 37.129,
    type: "ring",
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "3 sold",
    next_sold: "1.2",
    discription:
      "Luxury Skull Ring for Women Men Punk Hip Hop Hollow Skeleton Adjustable Opening Rings Halloween Party Jewelry Accessories Gift",
  },
  {
    id: 26,
    image:
      "https://ae01.alicdn.com/kf/H35a86aa144784f6fab7f372ca69ba109i/Fashion-Letters-Embroidery-Women-Men-Baseball-Caps-Female-Male-Sport-Visors-Snapback-Cap-Sun-Hat-For.jpg_220x220xz.jpg_.webp",
    after_price: 88.123,
    before_price: 187.526,
    choice: [
      "./assets/image/product/summer-sale.png",
      "./assets/image/product/top-selling.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.6",
    discription:
      "Fashion Letters Embroidery  Women Men Baseball Caps Female Male Sport Visors Snapback Cap Sun Hat For Women Men",
  },
  {
    id: 27,
    image:
      "https://ae01.alicdn.com/kf/S3c0ea91fbee846b79af82217932ebdbbt/AOMEISHA-Retinol-Lifting-Firming-Cream-Remove-Wrinkle-Anti-Aging-Fade-Fine-Lines-Face-Whitening-Brighten-Skin.png_220x220xz.png_.webp",
    price: 280.505,
    sale_off: "Extra 3% off with coins",
    first_sold: "144+ sold",
    next_sold: "5",
    discription:
      "AOMEISHA Retinol Lifting Firming Cream Remove Wrinkle Anti-Aging Fade Fine Lines Face Whitening Brighten Skin Beauty Health Care",
  },
  {
    id: 28,
    image:
      "https://ae01.alicdn.com/kf/S95124749f6e444519179ac91cb7d34dbJ/Creative-Frameless-DIY-Wall-Clock-Wall-Decal-Home-Silent-Clock-Living-Room-Office-Wall-Decoration.jpg_220x220xz.jpg_.webp",
    after_price: 42.534,
    before_price: 134.417,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "Creative Frameless DIY Wall Clock Wall Decal Home Silent Clock Living Room Office Wall Decoration",
  },
  {
    id: 29,
    image:
      "https://ae01.alicdn.com/kf/Sc5538f3ba4a34c16a27f5d9ff9b8b230e/Metal-Stripe-Loud-Lighter-Unusual-Lighters-Cigarette-Lighter-Creative-Wheel-Lighter-Butane-Gas-Lighter-Open-Fire.jpg_220x220xz.jpg_.webp",
    price: 129.952,
    first_sold: "1,000+ sold",
    next_sold: "4.5",
    discription:
      "Metal Stripe Loud Lighter Unusual Lighters Cigarette Lighter Creative Wheel Lighter Butane Gas Lighter Open Fire Square Lighter",
  },
  {
    id: 30,
    image:
      "https://ae01.alicdn.com/kf/S36008550e7df48c19c6f28cbc79ca80cz/Men-s-Sneakers-2022-New-Lightweight-Men-Vulcanized-Shoes-Anti-skid-Breathable-Male-Trend-Casual-Shoes.jpg_220x220xz.jpg_.webphttps://ae01.alicdn.com/kf/S36008550e7df48c19c6f28cbc79ca80cz/Men-s-Sneakers-2022-New-Lightweight-Men-Vulcanized-Shoes-Anti-skid-Breathable-Male-Trend-Casual-Shoes.jpg_220x220xz.jpg_.webp",
    price: 232.645,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "20,000+ sold",
    next_sold: "4.8",
    discription:
      "Men's Sneakers 2022 New Lightweight Men Vulcanized Shoes Anti-skid Breathable Male Trend Casual Shoes Fashion Men's Sports Shoes",
  },
  {
    id: 5,
    image:
      "https://ae01.alicdn.com/kf/Sf9633bfdb5ec4eeba9d1666dae729f7cA/TWS-Pro60-Fone-Bluetooth-5-0-Earphones-Wireless-Headphones-HiFi-Stero-Headset-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp",
    price: 98.463,
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Pro60 Fone Bluetooth 5.0 Earphones Wireless Headphones HiFi Stero Headset Noise Reduction Sports Earbuds with Mic for Phone",
  },
  {
    id: 6,
    image:
      "https://ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_220x220xz.jpg_.webp",
    price: 66.269,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.4",
    discription:
      "TWS E6S Bluetooth Earphones Wireless bluetooth headset Noise Cancelling Headsets With Microphone Headphones For Xiaomi Redmi",
  },
  {
    id: 7,
    image:
      "https://ae01.alicdn.com/kf/S5dd07f6fcfcd409d98b24bcf2ea2a5bdT/Fashion-Mens-Watches-Luxury-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 80.603,
    before_price: 247.215,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "100K+ sold",
    next_sold: "4.4",
    discription:
      "Fashion Mens Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 8,
    image:
      "https://ae01.alicdn.com/kf/S7aa25fb0590b47f387fa10d8c34874e0o/Men-Watch-Sports-Quartz-Watches-Men-Waterproof-Chronograph-Wristwatch-Mens-Military-Clock-Man-Relogio-Masculino.jpg_220x220xz.jpg_.webp",
    after_price: 253.935,
    before_price: 761.853,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.6",
    discription:
      "Men Watch Sports Quartz Watches Men Waterproof Chronograph Wristwatch Mens Military Clock Man Relogio Masculino",
  },
  {
    id: 5,
    image:
      "https://ae01.alicdn.com/kf/Sf9633bfdb5ec4eeba9d1666dae729f7cA/TWS-Pro60-Fone-Bluetooth-5-0-Earphones-Wireless-Headphones-HiFi-Stero-Headset-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp",
    price: 98.463,
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Pro60 Fone Bluetooth 5.0 Earphones Wireless Headphones HiFi Stero Headset Noise Reduction Sports Earbuds with Mic for Phone",
  },
  {
    id: 6,
    image:
      "https://ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_220x220xz.jpg_.webp",
    price: 66.269,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.4",
    discription:
      "TWS E6S Bluetooth Earphones Wireless bluetooth headset Noise Cancelling Headsets With Microphone Headphones For Xiaomi Redmi",
  },
  {
    id: 7,
    image:
      "https://ae01.alicdn.com/kf/S5dd07f6fcfcd409d98b24bcf2ea2a5bdT/Fashion-Mens-Watches-Luxury-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 80.603,
    before_price: 247.215,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "100K+ sold",
    next_sold: "4.4",
    discription:
      "Fashion Mens Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 1,
    image:
      "./assets/image/product/Luminous-Dragon-Rings-Gothic-Adjustable-Metal-Resin-Rings-Unique-Men-Women-Jewellery-Vintage-Halloween-Anillos-Accessorie.jpg_220x220xz.jpg_.webp",
    price: 22.09,
    first_sold: "3,000+ sold",
    next_sold: "4.4",
    discription:
      "Luminous Dragon Rings Gothic Adjustable Metal Resin Rings Unique Men Women Jewellery Vintage Halloween Anillos Accessorie Gifts",
    type: "ring",
  },
  {
    id: 2,
    image:
      "./assets/image/product/Original-Pro6-TWS-Touch-Control-Wireless-Bluetooth-5-0-Headphones-Sport-Earbuds-Music-Headset-For-iphone.jpg_220x220xz.jpg_.webp",
    price: 70.968,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.3",
    discription:
      "Original Pro6 TWS Touch Control Wireless Bluetooth 5.0 Headphones Sport Earbuds Music Headset For iphone Xiaomi phones Earphones",
  },
  {
    id: 3,
    image:
      "./assets/image/product/Luxury-Fashion-Mens-Watches-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 46.764,
    before_price: 146.637,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.0",
    discription:
      "Luxury Fashion Mens Watches Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 4,
    image:
      "https://ae01.alicdn.com/kf/S1dacfcc879a94534a327e335e08c6cfcS/Delysia-King-Ring.jpg_220x220xz.jpg_.webp",
    price: 57.574,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "2,000+ sold",
    next_sold: "4.7",
    discription:
      "2023 New Rings For Women 100% 925 Sterling Silver Star Moon Colorful Zircon Rings Fine Wedding Engagement Birthday Jewelry Gifts",
    type: "ring",
  },
  {
    id: 5,
    image:
      "https://ae01.alicdn.com/kf/Sf9633bfdb5ec4eeba9d1666dae729f7cA/TWS-Pro60-Fone-Bluetooth-5-0-Earphones-Wireless-Headphones-HiFi-Stero-Headset-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp",
    price: 98.463,
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Pro60 Fone Bluetooth 5.0 Earphones Wireless Headphones HiFi Stero Headset Noise Reduction Sports Earbuds with Mic for Phone",
  },
  {
    id: 6,
    image:
      "https://ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_220x220xz.jpg_.webp",
    price: 66.269,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.4",
    discription:
      "TWS E6S Bluetooth Earphones Wireless bluetooth headset Noise Cancelling Headsets With Microphone Headphones For Xiaomi Redmi",
  },
  {
    id: 7,
    image:
      "https://ae01.alicdn.com/kf/S5dd07f6fcfcd409d98b24bcf2ea2a5bdT/Fashion-Mens-Watches-Luxury-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 80.603,
    before_price: 247.215,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "100K+ sold",
    next_sold: "4.4",
    discription:
      "Fashion Mens Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 4,
    image:
      "https://ae01.alicdn.com/kf/S1dacfcc879a94534a327e335e08c6cfcS/Delysia-King-Ring.jpg_220x220xz.jpg_.webp",
    price: 57.574,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "2,000+ sold",
    next_sold: "4.7",
    discription:
      "2023 New Rings For Women 100% 925 Sterling Silver Star Moon Colorful Zircon Rings Fine Wedding Engagement Birthday Jewelry Gifts",
    type: "ring",
  },
  {
    id: 5,
    image:
      "https://ae01.alicdn.com/kf/Sf9633bfdb5ec4eeba9d1666dae729f7cA/TWS-Pro60-Fone-Bluetooth-5-0-Earphones-Wireless-Headphones-HiFi-Stero-Headset-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp",
    price: 98.463,
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Pro60 Fone Bluetooth 5.0 Earphones Wireless Headphones HiFi Stero Headset Noise Reduction Sports Earbuds with Mic for Phone",
  },
  {
    id: 6,
    image:
      "https://ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_220x220xz.jpg_.webp",
    price: 66.269,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.4",
    discription:
      "TWS E6S Bluetooth Earphones Wireless bluetooth headset Noise Cancelling Headsets With Microphone Headphones For Xiaomi Redmi",
  },
  {
    id: 7,
    image:
      "https://ae01.alicdn.com/kf/S5dd07f6fcfcd409d98b24bcf2ea2a5bdT/Fashion-Mens-Watches-Luxury-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 80.603,
    before_price: 247.215,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "100K+ sold",
    next_sold: "4.4",
    discription:
      "Fashion Mens Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    id: 8,
    image:
      "https://ae01.alicdn.com/kf/S7aa25fb0590b47f387fa10d8c34874e0o/Men-Watch-Sports-Quartz-Watches-Men-Waterproof-Chronograph-Wristwatch-Mens-Military-Clock-Man-Relogio-Masculino.jpg_220x220xz.jpg_.webp",
    after_price: 253.935,
    before_price: 761.853,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.6",
    discription:
      "Men Watch Sports Quartz Watches Men Waterproof Chronograph Wristwatch Mens Military Clock Man Relogio Masculino",
  },
  {
    id: 9,
    image:
      "https://ae01.alicdn.com/kf/S0eb22b5e0e1c47a39fd0951fc9b82712j/TWS-Bluetooth-Earphones-3500mAh-Charging-Box-Wireless-Headphone-Fone-Stereo-Wireless-Headset-with-Mic-Sports-Waterproof.jpg_220x220xz.jpg_.webp",
    price: 46.764,
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Bluetooth Earphones 3500mAh Charging Box Wireless Headphone Fone Stereo Wireless Headset with Mic Sports Waterproof Earbuds",
  },
  {
    id: 10,
    image:
      "https://ae01.alicdn.com/kf/S388da9fc1f044ad39fae434edd8421d83/New-2023-Usb-3-0-Pendrive-2TB-High-Speed-Pen-Drive-16TB-Metal-Cle-Usb-Flash.jpg_220x220xz.jpg_.webp",
    after_price: 30.475,
    before_price: 50.77,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "700+ sold",
    next_sold: "4.4",
    discription:
      "New 2023 Usb 3.0 Pendrive 2TB High Speed Pen Drive 16TB Metal Cle Usb Flash Drive 4TB 8TB Portable SSD Memoria Usb Free Shipping",
  },
  {
    id: 11,
    image:
      "https://ae01.alicdn.com/kf/S0c5659e1d52e465c9235c765491343efy/E7S-TWS-Wireless-Headphones-Bluetooth-earphone-Control-Sport-Headset-Waterproof-Microphone-Music-Earphone-Work-On-All.jpg_220x220xz.jpg_.webp",
    price: 68.853,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "E7S TWS Wireless Headphones Bluetooth earphone Control Sport Headset Waterproof Microphone Music Earphone Work On All Smartphone",
    more_details: [
      "https://ae01.alicdn.com/kf/S0c5659e1d52e465c9235c765491343efy/E7S-TWS-Wireless-Headphones-Bluetooth-earphone-Control-Sport-Headset-Waterproof-Microphone-Music-Earphone-Work-On-All.jpg_220x220xz.jpg_.webp",
    ],
  },
  {
    id: 12,
    image:
      "https://ae01.alicdn.com/kf/S443b3605f110411ab81e1edb0cc2b79e2/2023-USB-Electric-Lighters-Windproof-USB-Rechargeable-Touch-Windproof-Cigarette-Accessories-Electric-Lighter-Portable-e-ziggarte.jpg_220x220xz.jpg_.webp",
    after_price: 34.779,
    before_price: 74.023,
    choice: [
      "./assets/image/product/summer-sale.png",
      "./assets/image/product/top-selling.png",
    ],
    first_sold: "3000+ sold",
    next_sold: "4.7",
    discription:
      "2023 USB Electric Lighters Windproof USB Rechargeable Touch Windproof Cigarette Accessories Electric Lighter Portable e ziggarte",
  },
  {
    id: 13,
    image:
      "https://ae01.alicdn.com/kf/Sa8eaedc39d364a468a122eae8e66c516Q/Men-Military-Watch-Digital-50m-Waterproof-Wristwatch-LED-Quartz-Clock-Sport-Watch-Male-Big-Watches-Men.jpg_220x220xz.jpg_.webp",
    after_price: 159.091,
    before_price: 545.658,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.8",
    discription:
      "Men Military Watch Digital 50m Waterproof Wristwatch LED Quartz Clock Sport Watch Male Big Watches Men Relogios Masculino",
  },
  {
    id: 14,
    image:
      "https://ae01.alicdn.com/kf/S16956f3408594b6db3aeb6759379fde4k/Wireless-Headphones-5-1-Bluetooth-Earphones-HIFI-Lossless-Sound-Headsets-Sports-Mini-TWS-Earbuds-For-iphone.jpg_220x220xz.jpg_.webp",
    price: 253,
    first_sold: "5,000+ sold",
    next_sold: "4.4",
    discription:
      "Wireless Headphones 5.1 Bluetooth Earphones HIFI Lossless Sound Headsets Sports Mini TWS Earbuds For iphone XS Max Xiaomi Phones",
  },
  {
    id: 15,
    image:
      "https://ae01.alicdn.com/kf/S25f8ddcc017549f1ad928888487500edG/Huawei-General-Bluetooth-Headphones-Tws-Wireless-Earphone-Noise-Reduction-Waterproof-Low-Latency-9d-Hifi-Stereo-Long.jpg_220x220xz.jpg_.webp",
    price: 414.135,
    first_sold: "8 sold",
    next_sold: "3.0",
    discription:
      "Huawei General Bluetooth Headphones Tws Wireless Earphone Noise Reduction Waterproof Low Latency 9d Hifi Stereo Long Endurance",
  },
  {
    id: 16,
    image:
      "https://ae01.alicdn.com/kf/S624f58ebe30548b18c4ed9e3b078ec5aI/2pcs-Set-Fashion-Mens-Sports-Watches-Man-Business-Quartz-Wristwatch-Luxury-Men-Casual-Clock-Watch-Relogio.jpg_220x220xz.jpg_.webp",
    after_price: 53.814,
    before_price: 146.467,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "1,000+ sold",
    next_sold: "4.5",
    discription:
      "2pcs Set Fashion Mens Sports Watches Man Business Quartz Wristwatch Luxury Men Casual Clock Watch Relogio Masculino",
  },
  {
    id: 17,
    image:
      "https://ae01.alicdn.com/kf/S8c8de857462b4a929767114bc86f1753B/Drone-GPS-5G-6K-8K-HD-Drones-Professional-Aerial-Photography-Wifi-FPV-Obstacle-Avoidance-Folding-Quadcopter.jpg_220x220xz.jpg_.webp",
    price: 128.82,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "2,000+ sold",
    next_sold: "4.1",
    discription:
      "Drone GPS 5G 6K 8K HD Drones Professional Aerial Photography Wifi FPV Obstacle Avoidance Folding Quadcopter Rc Distance 3000M",
  },
  {
    id: 18,
    image:
      "https://ae01.alicdn.com/kf/Sc06a357efdfd4db18229f4de41ab97c8N/Luxury-Skull-Ring-for-Women-Men-Punk-Hip-Hop-Hollow-Skeleton-Adjustable-Opening-Rings-Halloween-Party.jpg_220x220xz.jpg_.webp",
    price: 37.129,
    type: "ring",
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "3 sold",
    next_sold: "1.2",
    discription:
      "Luxury Skull Ring for Women Men Punk Hip Hop Hollow Skeleton Adjustable Opening Rings Halloween Party Jewelry Accessories Gift",
  },
  {
    id: 4,
    image:
      "https://ae01.alicdn.com/kf/S1dacfcc879a94534a327e335e08c6cfcS/Delysia-King-Ring.jpg_220x220xz.jpg_.webp",
    price: 57.574,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "2,000+ sold",
    next_sold: "4.7",
    discription:
      "2023 New Rings For Women 100% 925 Sterling Silver Star Moon Colorful Zircon Rings Fine Wedding Engagement Birthday Jewelry Gifts",
    type: "ring",
  },
  {
    id: 27,
    image:
      "https://ae01.alicdn.com/kf/S3c0ea91fbee846b79af82217932ebdbbt/AOMEISHA-Retinol-Lifting-Firming-Cream-Remove-Wrinkle-Anti-Aging-Fade-Fine-Lines-Face-Whitening-Brighten-Skin.png_220x220xz.png_.webp",
    price: 280.505,
    sale_off: "Extra 3% off with coins",
    first_sold: "144+ sold",
    next_sold: "5",
    discription:
      "AOMEISHA Retinol Lifting Firming Cream Remove Wrinkle Anti-Aging Fade Fine Lines Face Whitening Brighten Skin Beauty Health Care",
  },
  {
    id: 28,
    image:
      "https://ae01.alicdn.com/kf/S95124749f6e444519179ac91cb7d34dbJ/Creative-Frameless-DIY-Wall-Clock-Wall-Decal-Home-Silent-Clock-Living-Room-Office-Wall-Decoration.jpg_220x220xz.jpg_.webp",
    after_price: 42.534,
    before_price: 134.417,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "Creative Frameless DIY Wall Clock Wall Decal Home Silent Clock Living Room Office Wall Decoration",
  },
  {
    id: 29,
    image:
      "https://ae01.alicdn.com/kf/Sc5538f3ba4a34c16a27f5d9ff9b8b230e/Metal-Stripe-Loud-Lighter-Unusual-Lighters-Cigarette-Lighter-Creative-Wheel-Lighter-Butane-Gas-Lighter-Open-Fire.jpg_220x220xz.jpg_.webp",
    price: 129.952,
    first_sold: "1,000+ sold",
    next_sold: "4.5",
    discription:
      "Metal Stripe Loud Lighter Unusual Lighters Cigarette Lighter Creative Wheel Lighter Butane Gas Lighter Open Fire Square Lighter",
  },
  {
    id: 30,
    image:
      "https://ae01.alicdn.com/kf/S36008550e7df48c19c6f28cbc79ca80cz/Men-s-Sneakers-2022-New-Lightweight-Men-Vulcanized-Shoes-Anti-skid-Breathable-Male-Trend-Casual-Shoes.jpg_220x220xz.jpg_.webphttps://ae01.alicdn.com/kf/S36008550e7df48c19c6f28cbc79ca80cz/Men-s-Sneakers-2022-New-Lightweight-Men-Vulcanized-Shoes-Anti-skid-Breathable-Male-Trend-Casual-Shoes.jpg_220x220xz.jpg_.webp",
    price: 232.645,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "20,000+ sold",
    next_sold: "4.8",
    discription:
      "Men's Sneakers 2022 New Lightweight Men Vulcanized Shoes Anti-skid Breathable Male Trend Casual Shoes Fashion Men's Sports Shoes",
  },
  {
    id: 27,
    image:
      "https://ae01.alicdn.com/kf/S3c0ea91fbee846b79af82217932ebdbbt/AOMEISHA-Retinol-Lifting-Firming-Cream-Remove-Wrinkle-Anti-Aging-Fade-Fine-Lines-Face-Whitening-Brighten-Skin.png_220x220xz.png_.webp",
    price: 280.505,
    sale_off: "Extra 3% off with coins",
    first_sold: "144+ sold",
    next_sold: "5",
    discription:
      "AOMEISHA Retinol Lifting Firming Cream Remove Wrinkle Anti-Aging Fade Fine Lines Face Whitening Brighten Skin Beauty Health Care",
  },
  {
    id: 20,
    image:
      "https://ae01.alicdn.com/kf/S3a11b85341d448ffa339d504553b5b3eB/Men-s-Wallet-Leather-Billfold-Slim-Hipster-Cowhide-Credit-Card-ID-Holders-Inserts-Coin-Purses-Luxury.jpg_220x220xz.jpg_.webp",
    after_price: 71.673,
    choice: [
      "./assets/image/product/top-selling.png",
      "./assets/image/product/190x64.webp",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "Men's Wallet Leather Billfold Slim Hipster Cowhide Credit Card/ID Holders Inserts Coin Purses Luxury Business Foldable Wallet",
  },
];
export default { clothes, sale, products };
