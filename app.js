
// Product Data Structure
const products = [
  // ========== ELECTRONICS (20 products) ==========
  {
    id: 0,
    name: 'Gaming Laptop Pro 15"',
    price: 899.99,
    originalPrice: 1299.99,
    category: "Electronics",
    image: "images/laptop.jpg",
    rating: 5,
    reviews: 2345,
    description: "High-performance gaming laptop with RTX graphics, 16GB RAM, and 512GB SSD. Perfect for gaming and professional work.",
    badge: "-30%",
    stock: 15,
  },
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 149.99,
    originalPrice: 199.99,
    category: "Electronics",
    image: "images/headphones.jpg",
    rating: 4,
    reviews: 1892,
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
    badge: "-25%",
    stock: 25,
  },
  {
    id: 2,
    name: "Smartphone X Pro 256GB",
    price: 599.99,
    originalPrice: 999.99,
    category: "Electronics",
    image: "images/smartphone.jpg",
    rating: 5,
    reviews: 5234,
    description: "Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life.",
    badge: "-40%",
    stock: 10,
  },
  {
    id: 3,
    name: "Smart Watch Series 8",
    price: 239.99,
    originalPrice: 299.99,
    category: "Electronics",
    image: "images/smartwatch.jpg",
    rating: 4,
    reviews: 3456,
    description: "Feature-rich smartwatch with health tracking, GPS, and water resistance up to 50m.",
    badge: "-20%",
    stock: 20,
  },
  {
    id: 4,
    name: 'Tablet Pro 12.9"',
    price: 449.99,
    category: "Electronics",
    image: "images/tablet.jpg",
    rating: 5,
    reviews: 4123,
    description: "Professional tablet with stunning display, powerful processor, and support for Apple Pencil.",
    badge: null,
    stock: 12,
  },
  {
    id: 5,
    name: "Bluetooth Speaker Premium",
    price: 79.99,
    category: "Electronics",
    image: "images/speaker.jpg",
    rating: 4,
    reviews: 2789,
    description: "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery.",
    badge: null,
    stock: 30,
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    category: "Electronics",
    image: "images/keyboard.jpg",
    rating: 5,
    reviews: 1567,
    description: "RGB mechanical keyboard with customizable keys, anti-ghosting technology, and ergonomic design.",
    badge: null,
    stock: 18,
  },
  {
    id: 7,
    name: '4K Ultra HD Monitor 27"',
    price: 349.99,
    category: "Electronics",
    image: "images/monitor.jpg",
    rating: 4,
    reviews: 3234,
    description: "Crystal-clear 4K monitor with HDR support, fast refresh rate, and adjustable stand.",
    badge: null,
    stock: 8,
  },
  {
    id: 20,
    name: "Wireless Gaming Mouse RGB",
    price: 59.99,
    category: "Electronics",
    image: "images/mouse.jpg",
    rating: 5,
    reviews: 2156,
    description: "Precision wireless gaming mouse with customizable RGB lighting, 16000 DPI, and programmable buttons.",
    badge: null,
    stock: 45,
  },
  {
    id: 21,
    name: "HD Webcam 1080p",
    price: 89.99,
    category: "Electronics",
    image: "images/webcam.jpg",
    rating: 4,
    reviews: 1834,
    description: "Professional webcam with auto-focus, built-in microphone, and wide-angle lens for video calls.",
    badge: null,
    stock: 28,
  },
  {
    id: 22,
    name: "USB-C Hub 7-in-1",
    price: 39.99,
    category: "Electronics",
    image: "images/usb-hub.jpg",
    rating: 4,
    reviews: 3421,
    description: "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.",
    badge: null,
    stock: 60,
  },
  {
    id: 23,
    name: "External SSD 1TB",
    price: 129.99,
    category: "Electronics",
    image: "images/ssd.jpg",
    rating: 5,
    reviews: 4567,
    description: "Ultra-fast portable SSD with USB-C connectivity, shock-resistant design, and 1TB storage.",
    badge: null,
    stock: 22,
  },
  {
    id: 24,
    name: "True Wireless Earbuds Pro",
    price: 99.99,
    category: "Electronics",
    image: "images/earbuds.jpg",
    rating: 5,
    reviews: 5678,
    description: "Premium wireless earbuds with active noise cancellation, 24-hour battery life, and IPX7 waterproof.",
    badge: null,
    stock: 40,
  },
  {
    id: 25,
    name: "Ergonomic Gaming Chair",
    price: 299.99,
    category: "Electronics",
    image: "images/gaming-chair.jpg",
    rating: 4,
    reviews: 2890,
    description: "Professional gaming chair with lumbar support, adjustable armrests, and premium leather.",
    badge: null,
    stock: 12,
  },
  {
    id: 26,
    name: "USB Condenser Microphone",
    price: 79.99,
    category: "Electronics",
    image: "images/microphone.jpg",
    rating: 5,
    reviews: 3245,
    description: "Studio-quality USB microphone with pop filter, shock mount, and adjustable stand.",
    badge: null,
    stock: 35,
  },
  {
    id: 27,
    name: "Adjustable Laptop Stand",
    price: 34.99,
    category: "Electronics",
    image: "images/laptop-stand.jpg",
    rating: 4,
    reviews: 4123,
    description: "Aluminum laptop stand with adjustable height and angle, compatible with all laptops.",
    badge: null,
    stock: 55,
  },
  {
    id: 28,
    name: "Cable Management Kit",
    price: 19.99,
    category: "Electronics",
    image: "images/cable-kit.jpg",
    rating: 4,
    reviews: 2567,
    description: "Complete cable management solution with clips, sleeves, and organizers for a clean desk.",
    badge: null,
    stock: 80,
  },
  {
    id: 29,
    name: "Portable Power Bank 20000mAh",
    price: 49.99,
    category: "Electronics",
    image: "images/power-bank.jpg",
    rating: 5,
    reviews: 6234,
    description: "High-capacity power bank with fast charging, dual USB ports, and LED display.",
    badge: null,
    stock: 50,
  },
  {
    id: 30,
    name: "Smart LED Light Bulbs 4-Pack",
    price: 44.99,
    category: "Electronics",
    image: "images/smart-bulbs.jpg",
    rating: 4,
    reviews: 3890,
    description: "WiFi-enabled smart bulbs with 16 million colors, voice control, and scheduling features.",
    badge: null,
    stock: 38,
  },
  {
    id: 31,
    name: "Streaming Camera 4K",
    price: 199.99,
    category: "Electronics",
    image: "images/stream-camera.jpg",
    rating: 5,
    reviews: 2345,
    description: "Professional 4K streaming camera with auto-tracking, HDR, and dual microphones.",
    badge: null,
    stock: 18,
  },

  // ========== FASHION (20 products) ==========
  {
    id: 8,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    category: "Fashion",
    image: "images/tshirt.jpg",
    rating: 4,
    reviews: 5678,
    description: "Comfortable cotton t-shirt with modern fit, available in multiple colors and sizes.",
    badge: null,
    stock: 50,
  },
  {
    id: 9,
    name: "Classic Fit Jeans",
    price: 49.99,
    category: "Fashion",
    image: "images/jeans.jpg",
    rating: 5,
    reviews: 4234,
    description: "Classic fit jeans with stretch fabric, durable construction, and timeless style.",
    badge: null,
    stock: 35,
  },
  {
    id: 10,
    name: "Running Sneakers Pro",
    price: 89.99,
    category: "Fashion",
    image: "images/sneakers.jpg",
    rating: 5,
    reviews: 6789,
    description: "Professional running shoes with advanced cushioning, breathable mesh, and superior traction.",
    badge: null,
    stock: 22,
  },
  {
    id: 11,
    name: "Winter Jacket Warm",
    price: 79.99,
    category: "Fashion",
    image: "images/jacket.jpg",
    rating: 4,
    reviews: 2345,
    description: "Insulated winter jacket with water-resistant exterior and cozy fleece lining.",
    badge: null,
    stock: 15,
  },
  {
    id: 32,
    name: "Formal Dress Shirt",
    price: 39.99,
    category: "Fashion",
    image: "images/dress-shirt.jpg",
    rating: 5,
    reviews: 3456,
    description: "Classic dress shirt with wrinkle-free fabric, perfect for office and formal occasions.",
    badge: null,
    stock: 42,
  },
  {
    id: 33,
    name: "Polo Shirt Premium",
    price: 34.99,
    category: "Fashion",
    image: "images/polo.jpg",
    rating: 4,
    reviews: 2890,
    description: "Stylish polo shirt with moisture-wicking fabric and modern fit.",
    badge: null,
    stock: 48,
  },
  {
    id: 34,
    name: "Comfortable Hoodie",
    price: 44.99,
    category: "Fashion",
    image: "images/hoodie.jpg",
    rating: 5,
    reviews: 5234,
    description: "Cozy fleece hoodie with kangaroo pocket and adjustable drawstring hood.",
    badge: null,
    stock: 55,
  },
  {
    id: 35,
    name: "Athletic Sweatpants",
    price: 39.99,
    category: "Fashion",
    image: "images/sweatpants.jpg",
    rating: 4,
    reviews: 3678,
    description: "Comfortable sweatpants with elastic waistband and zippered pockets.",
    badge: null,
    stock: 40,
  },
  {
    id: 36,
    name: "Leather Dress Shoes",
    price: 119.99,
    category: "Fashion",
    image: "images/dress-shoes.jpg",
    rating: 5,
    reviews: 2567,
    description: "Elegant leather dress shoes with cushioned insole and classic design.",
    badge: null,
    stock: 25,
  },
  {
    id: 37,
    name: "Casual Canvas Sneakers",
    price: 54.99,
    category: "Fashion",
    image: "images/canvas-sneakers.jpg",
    rating: 4,
    reviews: 4123,
    description: "Versatile canvas sneakers perfect for everyday wear with comfortable fit.",
    badge: null,
    stock: 60,
  },
  {
    id: 38,
    name: "Hiking Boots Waterproof",
    price: 129.99,
    category: "Fashion",
    image: "images/boots.jpg",
    rating: 5,
    reviews: 3890,
    description: "Durable waterproof hiking boots with ankle support and rugged sole.",
    badge: null,
    stock: 28,
  },
  {
    id: 39,
    name: "Travel Backpack 40L",
    price: 69.99,
    category: "Fashion",
    image: "images/backpack.jpg",
    rating: 5,
    reviews: 5678,
    description: "Spacious travel backpack with laptop compartment, USB charging port, and water-resistant material.",
    badge: null,
    stock: 35,
  },
  {
    id: 40,
    name: "Luxury Analog Watch",
    price: 199.99,
    category: "Fashion",
    image: "images/watch.jpg",
    rating: 5,
    reviews: 2345,
    description: "Elegant analog watch with stainless steel case, leather strap, and water resistance.",
    badge: null,
    stock: 20,
  },
  {
    id: 41,
    name: "Polarized Sunglasses",
    price: 79.99,
    category: "Fashion",
    image: "images/sunglasses.jpg",
    rating: 4,
    reviews: 4567,
    description: "Stylish polarized sunglasses with UV protection and durable frame.",
    badge: null,
    stock: 45,
  },
  {
    id: 42,
    name: "Leather Belt Classic",
    price: 29.99,
    category: "Fashion",
    image: "images/belt.jpg",
    rating: 4,
    reviews: 3234,
    description: "Genuine leather belt with reversible design and elegant buckle.",
    badge: null,
    stock: 65,
  },
  {
    id: 43,
    name: "Bifold Leather Wallet",
    price: 39.99,
    category: "Fashion",
    image: "images/wallet.jpg",
    rating: 5,
    reviews: 4890,
    description: "Premium leather wallet with RFID blocking and multiple card slots.",
    badge: null,
    stock: 50,
  },
  {
    id: 44,
    name: "Baseball Cap Adjustable",
    price: 19.99,
    category: "Fashion",
    image: "images/cap.jpg",
    rating: 4,
    reviews: 5234,
    description: "Classic baseball cap with adjustable strap and breathable fabric.",
    badge: null,
    stock: 75,
  },
  {
    id: 45,
    name: "Wool Scarf Winter",
    price: 34.99,
    category: "Fashion",
    image: "images/scarf.jpg",
    rating: 5,
    reviews: 2678,
    description: "Soft wool scarf with elegant pattern, perfect for cold weather.",
    badge: null,
    stock: 40,
  },
  {
    id: 46,
    name: "Touchscreen Winter Gloves",
    price: 24.99,
    category: "Fashion",
    image: "images/gloves.jpg",
    rating: 4,
    reviews: 3456,
    description: "Warm winter gloves with touchscreen-compatible fingertips and fleece lining.",
    badge: null,
    stock: 55,
  },
  {
    id: 47,
    name: "Designer Handbag",
    price: 149.99,
    category: "Fashion",
    image: "images/handbag.jpg",
    rating: 5,
    reviews: 2890,
    description: "Elegant designer handbag with premium materials and spacious interior.",
    badge: null,
    stock: 18,
  },

  // ========== HOME & KITCHEN (20 products) ==========
  {
    id: 12,
    name: "Espresso Coffee Maker",
    price: 159.99,
    category: "Home & Kitchen",
    image: "images/coffee-maker.jpg",
    rating: 5,
    reviews: 3456,
    description: "Professional espresso machine with milk frother, programmable settings, and compact design.",
    badge: null,
    stock: 10,
  },
  {
    id: 13,
    name: "Professional Blender",
    price: 99.99,
    category: "Home & Kitchen",
    image: "images/blender.jpg",
    rating: 4,
    reviews: 2123,
    description: "High-powered blender with multiple speed settings, perfect for smoothies and food prep.",
    badge: null,
    stock: 20,
  },
  {
    id: 14,
    name: "Robot Vacuum Cleaner",
    price: 299.99,
    category: "Home & Kitchen",
    image: "images/vacuum.jpg",
    rating: 5,
    reviews: 4567,
    description: "Smart robot vacuum with app control, mapping technology, and self-emptying base.",
    badge: null,
    stock: 7,
  },
  {
    id: 15,
    name: "Digital Air Fryer 5.5L",
    price: 119.99,
    category: "Home & Kitchen",
    image: "images/air-fryer.jpg",
    rating: 4,
    reviews: 3789,
    description: "Large capacity air fryer with digital display, multiple cooking modes, and easy-clean design.",
    badge: null,
    stock: 14,
  },
  {
    id: 48,
    name: "Stainless Steel Toaster 4-Slice",
    price: 49.99,
    category: "Home & Kitchen",
    image: "images/toaster.jpg",
    rating: 4,
    reviews: 2890,
    description: "Modern 4-slice toaster with adjustable browning control and defrost function.",
    badge: null,
    stock: 32,
  },
  {
    id: 49,
    name: "Microwave Oven 1.1 Cu Ft",
    price: 129.99,
    category: "Home & Kitchen",
    image: "images/microwave.jpg",
    rating: 5,
    reviews: 4123,
    description: "Powerful microwave with sensor cooking, 10 power levels, and easy-clean interior.",
    badge: null,
    stock: 18,
  },
  {
    id: 50,
    name: "Electric Rice Cooker 10-Cup",
    price: 59.99,
    category: "Home & Kitchen",
    image: "images/rice-cooker.jpg",
    rating: 4,
    reviews: 3567,
    description: "Versatile rice cooker with steamer basket, keep-warm function, and non-stick pot.",
    badge: null,
    stock: 25,
  },
  {
    id: 51,
    name: "Programmable Slow Cooker 6Qt",
    price: 79.99,
    category: "Home & Kitchen",
    image: "images/slow-cooker.jpg",
    rating: 5,
    reviews: 2678,
    description: "Digital slow cooker with timer, multiple heat settings, and dishwasher-safe pot.",
    badge: null,
    stock: 22,
  },
  {
    id: 52,
    name: "Food Processor 12-Cup",
    price: 89.99,
    category: "Home & Kitchen",
    image: "images/food-processor.jpg",
    rating: 4,
    reviews: 3234,
    description: "Powerful food processor with multiple blades, large capacity, and pulse function.",
    badge: null,
    stock: 20,
  },
  {
    id: 53,
    name: "Professional Knife Set 15-Piece",
    price: 149.99,
    category: "Home & Kitchen",
    image: "images/knife-set.jpg",
    rating: 5,
    reviews: 4567,
    description: "Complete knife set with German steel blades, wooden block, and sharpening steel.",
    badge: null,
    stock: 15,
  },
  {
    id: 54,
    name: "Non-Stick Cookware Set 10-Piece",
    price: 199.99,
    category: "Home & Kitchen",
    image: "images/cookware.jpg",
    rating: 5,
    reviews: 3890,
    description: "Premium cookware set with non-stick coating, heat-resistant handles, and glass lids.",
    badge: null,
    stock: 12,
  },
  {
    id: 55,
    name: "Porcelain Dinnerware Set 16-Piece",
    price: 79.99,
    category: "Home & Kitchen",
    image: "images/dinnerware.jpg",
    rating: 4,
    reviews: 2345,
    description: "Elegant dinnerware set for 4, microwave and dishwasher safe.",
    badge: null,
    stock: 28,
  },
  {
    id: 56,
    name: "Egyptian Cotton Bed Sheets Queen",
    price: 89.99,
    category: "Home & Kitchen",
    image: "images/bedsheets.jpg",
    rating: 5,
    reviews: 5678,
    description: "Luxurious 800-thread count Egyptian cotton sheets with deep pockets.",
    badge: null,
    stock: 35,
  },
  {
    id: 57,
    name: "Memory Foam Pillows 2-Pack",
    price: 49.99,
    category: "Home & Kitchen",
    image: "images/pillows.jpg",
    rating: 4,
    reviews: 4234,
    description: "Supportive memory foam pillows with cooling gel and hypoallergenic cover.",
    badge: null,
    stock: 40,
  },
  {
    id: 58,
    name: "Luxury Bath Towel Set 6-Piece",
    price: 59.99,
    category: "Home & Kitchen",
    image: "images/towels.jpg",
    rating: 5,
    reviews: 3456,
    description: "Soft and absorbent Turkish cotton towels in multiple sizes.",
    badge: null,
    stock: 30,
  },
  {
    id: 59,
    name: "Fabric Shower Curtain with Hooks",
    price: 29.99,
    category: "Home & Kitchen",
    image: "images/shower-curtain.jpg",
    rating: 4,
    reviews: 2890,
    description: "Water-repellent shower curtain with modern design and rust-proof hooks.",
    badge: null,
    stock: 45,
  },
  {
    id: 60,
    name: "Stainless Steel Trash Can 13-Gallon",
    price: 69.99,
    category: "Home & Kitchen",
    image: "images/trash-can.jpg",
    rating: 4,
    reviews: 3123,
    description: "Step-on trash can with fingerprint-proof finish and removable inner bucket.",
    badge: null,
    stock: 25,
  },
  {
    id: 61,
    name: "Electric Kettle 1.7L",
    price: 39.99,
    category: "Home & Kitchen",
    image: "images/kettle.jpg",
    rating: 5,
    reviews: 4567,
    description: "Fast-boiling electric kettle with auto shut-off and temperature control.",
    badge: null,
    stock: 38,
  },
  {
    id: 62,
    name: "Stand Mixer 6-Quart",
    price: 249.99,
    category: "Home & Kitchen",
    image: "images/mixer.jpg",
    rating: 5,
    reviews: 2345,
    description: "Professional stand mixer with multiple attachments and 10 speeds.",
    badge: null,
    stock: 10,
  },
  {
    id: 63,
    name: "Instant Pot 8-Quart",
    price: 139.99,
    category: "Home & Kitchen",
    image: "images/instant-pot.jpg",
    rating: 5,
    reviews: 8901,
    description: "Multi-functional pressure cooker with 7-in-1 capabilities and smart programs.",
    badge: null,
    stock: 16,
  },

  // ========== BOOKS (20 products) ==========
  {
    id: 16,
    name: "The Great Gatsby",
    price: 12.99,
    category: "Books",
    image: "images/gatsby.jpg",
    rating: 5,
    reviews: 1234,
    description: "Classic American novel by F. Scott Fitzgerald, a masterpiece of American literature.",
    badge: null,
    stock: 100,
  },
  {
    id: 17,
    name: "To Kill a Mockingbird",
    price: 14.99,
    category: "Books",
    image: "images/mockingbird.jpg",
    rating: 5,
    reviews: 2345,
    description: "Harper Lee's Pulitzer Prize-winning novel about racial injustice in the American South.",
    badge: null,
    stock: 85,
  },
  {
    id: 18,
    name: "1984 by George Orwell",
    price: 13.99,
    category: "Books",
    image: "images/1984.jpg",
    rating: 5,
    reviews: 3456,
    description: "Dystopian novel about totalitarianism and surveillance, a timeless classic.",
    badge: null,
    stock: 95,
  },
  {
    id: 19,
    name: "Pride and Prejudice",
    price: 11.99,
    category: "Books",
    image: "images/pride.jpg",
    rating: 5,
    reviews: 4567,
    description: "Jane Austen's beloved romantic novel about Elizabeth Bennet and Mr. Darcy.",
    badge: null,
    stock: 110,
  },
  {
    id: 64,
    name: "Harry Potter Complete Collection",
    price: 89.99,
    category: "Books",
    image: "images/harry-potter.jpg",
    rating: 5,
    reviews: 12345,
    description: "Complete Harry Potter series box set with all 7 books by J.K. Rowling.",
    badge: null,
    stock: 45,
  },
  {
    id: 65,
    name: "The Lord of the Rings Trilogy",
    price: 34.99,
    category: "Books",
    image: "images/lotr.jpg",
    rating: 5,
    reviews: 8901,
    description: "Epic fantasy trilogy by J.R.R. Tolkien in a beautiful box set.",
    badge: null,
    stock: 52,
  },
  {
    id: 66,
    name: "The Hobbit",
    price: 15.99,
    category: "Books",
    image: "images/hobbit.jpg",
    rating: 5,
    reviews: 6789,
    description: "Classic fantasy adventure by J.R.R. Tolkien, prequel to Lord of the Rings.",
    badge: null,
    stock: 68,
  },
  {
    id: 67,
    name: "Dune by Frank Herbert",
    price: 16.99,
    category: "Books",
    image: "images/dune.jpg",
    rating: 5,
    reviews: 5432,
    description: "Science fiction masterpiece set on the desert planet Arrakis.",
    badge: null,
    stock: 55,
  },
  {
    id: 68,
    name: "Foundation by Isaac Asimov",
    price: 14.99,
    category: "Books",
    image: "images/foundation.jpg",
    rating: 5,
    reviews: 4321,
    description: "Classic science fiction novel about the fall and rise of civilizations.",
    badge: null,
    stock: 48,
  },
  {
    id: 69,
    name: "Ender's Game",
    price: 13.99,
    category: "Books",
    image: "images/enders-game.jpg",
    rating: 5,
    reviews: 7890,
    description: "Award-winning science fiction novel by Orson Scott Card.",
    badge: null,
    stock: 62,
  },
  {
    id: 70,
    name: "The Martian by Andy Weir",
    price: 15.99,
    category: "Books",
    image: "images/martian.jpg",
    rating: 5,
    reviews: 9012,
    description: "Thrilling survival story of an astronaut stranded on Mars.",
    badge: null,
    stock: 58,
  },
  {
    id: 71,
    name: "Project Hail Mary",
    price: 17.99,
    category: "Books",
    image: "images/hail-mary.jpg",
    rating: 5,
    reviews: 6543,
    description: "Latest sci-fi thriller from the author of The Martian.",
    badge: null,
    stock: 42,
  },
  {
    id: 72,
    name: "The Hunger Games Trilogy",
    price: 29.99,
    category: "Books",
    image: "images/hunger-games.jpg",
    rating: 5,
    reviews: 10234,
    description: "Complete dystopian trilogy by Suzanne Collins in box set.",
    badge: null,
    stock: 50,
  },
  {
    id: 73,
    name: "Divergent Series Box Set",
    price: 27.99,
    category: "Books",
    image: "images/divergent.jpg",
    rating: 4,
    reviews: 5678,
    description: "Complete Divergent trilogy by Veronica Roth.",
    badge: null,
    stock: 38,
  },
  {
    id: 74,
    name: "The Maze Runner Series",
    price: 32.99,
    category: "Books",
    image: "images/maze-runner.jpg",
    rating: 4,
    reviews: 4567,
    description: "Action-packed dystopian series by James Dashner.",
    badge: null,
    stock: 35,
  },
  {
    id: 75,
    name: "Percy Jackson Complete Series",
    price: 39.99,
    category: "Books",
    image: "images/percy-jackson.jpg",
    rating: 5,
    reviews: 8765,
    description: "All 5 books of Percy Jackson and the Olympians by Rick Riordan.",
    badge: null,
    stock: 48,
  },
  {
    id: 76,
    name: "A Game of Thrones",
    price: 18.99,
    category: "Books",
    image: "images/got.jpg",
    rating: 5,
    reviews: 11234,
    description: "First book in the epic fantasy series by George R.R. Martin.",
    badge: null,
    stock: 65,
  },
  {
    id: 77,
    name: "The Da Vinci Code",
    price: 14.99,
    category: "Books",
    image: "images/da-vinci.jpg",
    rating: 4,
    reviews: 9876,
    description: "International bestselling thriller by Dan Brown.",
    badge: null,
    stock: 72,
  },
  {
    id: 78,
    name: "Sapiens by Yuval Noah Harari",
    price: 19.99,
    category: "Books",
    image: "images/sapiens.jpg",
    rating: 5,
    reviews: 7654,
    description: "A brief history of humankind, exploring human evolution and society.",
    badge: null,
    stock: 55,
  },
  {
    id: 79,
    name: "Atomic Habits",
    price: 16.99,
    category: "Books",
    image: "images/atomic-habits.jpg",
    rating: 5,
    reviews: 8901,
    description: "Practical guide to building good habits and breaking bad ones by James Clear.",
    badge: null,
    stock: 60,
  },

  // ========== SPORTS & OUTDOORS (15 products) ==========
  {
    id: 80,
    name: "Premium Yoga Mat with Strap",
    price: 29.99,
    category: "Sports & Outdoors",
    image: "images/yoga-mat.jpg",
    rating: 5,
    reviews: 4567,
    description: "Non-slip yoga mat with extra cushioning and carrying strap.",
    badge: null,
    stock: 45,
  },
  {
    id: 81,
    name: "Adjustable Dumbbell Set 50lbs",
    price: 149.99,
    category: "Sports & Outdoors",
    image: "images/dumbbells.jpg",
    rating: 5,
    reviews: 3456,
    description: "Space-saving adjustable dumbbells with quick-change weight system.",
    badge: null,
    stock: 22,
  },
  {
    id: 82,
    name: "Resistance Bands Set 5-Pack",
    price: 24.99,
    category: "Sports & Outdoors",
    image: "images/resistance-bands.jpg",
    rating: 4,
    reviews: 5678,
    description: "Versatile resistance bands with different strength levels and carry bag.",
    badge: null,
    stock: 60,
  },
  {
    id: 83,
    name: "Speed Jump Rope",
    price: 14.99,
    category: "Sports & Outdoors",
    image: "images/jump-rope.jpg",
    rating: 4,
    reviews: 2890,
    description: "Professional speed jump rope with adjustable length and ball bearings.",
    badge: null,
    stock: 75,
  },
  {
    id: 84,
    name: "Exercise Ball 65cm",
    price: 19.99,
    category: "Sports & Outdoors",
    image: "images/exercise-ball.jpg",
    rating: 4,
    reviews: 3234,
    description: "Anti-burst exercise ball with pump, perfect for yoga and fitness.",
    badge: null,
    stock: 50,
  },
  {
    id: 85,
    name: "4-Person Camping Tent",
    price: 129.99,
    category: "Sports & Outdoors",
    image: "images/tent.jpg",
    rating: 5,
    reviews: 2345,
    description: "Waterproof camping tent with easy setup and ventilation windows.",
    badge: null,
    stock: 18,
  },
  {
    id: 86,
    name: "Sleeping Bag 3-Season",
    price: 49.99,
    category: "Sports & Outdoors",
    image: "images/sleeping-bag.jpg",
    rating: 4,
    reviews: 3567,
    description: "Comfortable sleeping bag rated for 20°F with compression sack.",
    badge: null,
    stock: 32,
  },
  {
    id: 87,
    name: "Hiking Backpack 50L",
    price: 89.99,
    category: "Sports & Outdoors",
    image: "images/hiking-backpack.jpg",
    rating: 5,
    reviews: 2678,
    description: "Durable hiking backpack with rain cover and multiple compartments.",
    badge: null,
    stock: 28,
  },
  {
    id: 88,
    name: "Insulated Water Bottle 32oz",
    price: 29.99,
    category: "Sports & Outdoors",
    image: "images/water-bottle.jpg",
    rating: 5,
    reviews: 6789,
    description: "Stainless steel water bottle keeps drinks cold for 24 hours.",
    badge: null,
    stock: 85,
  },
  {
    id: 89,
    name: "Mountain Bike 27.5\"",
    price: 399.99,
    category: "Sports & Outdoors",
    image: "images/bicycle.jpg",
    rating: 5,
    reviews: 1234,
    description: "21-speed mountain bike with front suspension and disc brakes.",
    badge: null,
    stock: 12,
  },
  {
    id: 90,
    name: "Professional Skateboard",
    price: 79.99,
    category: "Sports & Outdoors",
    image: "images/skateboard.jpg",
    rating: 4,
    reviews: 2890,
    description: "Complete skateboard with maple deck and ABEC-9 bearings.",
    badge: null,
    stock: 35,
  },
  {
    id: 91,
    name: "Basketball Official Size",
    price: 24.99,
    category: "Sports & Outdoors",
    image: "images/basketball.jpg",
    rating: 5,
    reviews: 4567,
    description: "Official size basketball with superior grip and durability.",
    badge: null,
    stock: 55,
  },
  {
    id: 92,
    name: "Soccer Ball Size 5",
    price: 19.99,
    category: "Sports & Outdoors",
    image: "images/soccer-ball.jpg",
    rating: 4,
    reviews: 3456,
    description: "Professional soccer ball with hand-stitched panels.",
    badge: null,
    stock: 65,
  },
  {
    id: 93,
    name: "Tennis Racket with Case",
    price: 89.99,
    category: "Sports & Outdoors",
    image: "images/tennis-racket.jpg",
    rating: 5,
    reviews: 2345,
    description: "Lightweight tennis racket with graphite frame and carrying case.",
    badge: null,
    stock: 28,
  },
  {
    id: 94,
    name: "Golf Club Set 12-Piece",
    price: 299.99,
    category: "Sports & Outdoors",
    image: "images/golf-clubs.jpg",
    rating: 4,
    reviews: 1567,
    description: "Complete golf club set with bag for right-handed players.",
    badge: null,
    stock: 15,
  },

  // ========== TOYS & GAMES (12 products) ==========
  {
    id: 95,
    name: "LEGO Creator Expert Set",
    price: 79.99,
    category: "Toys & Games",
    image: "images/lego.jpg",
    rating: 5,
    reviews: 3456,
    description: "Advanced LEGO building set with 2000+ pieces for ages 12+.",
    badge: null,
    stock: 30,
  },
  {
    id: 96,
    name: "Strategy Board Game Collection",
    price: 44.99,
    category: "Toys & Games",
    image: "images/board-game.jpg",
    rating: 5,
    reviews: 2890,
    description: "Classic strategy board game for 2-4 players, ages 8+.",
    badge: null,
    stock: 42,
  },
  {
    id: 97,
    name: "1000-Piece Jigsaw Puzzle",
    price: 19.99,
    category: "Toys & Games",
    image: "images/puzzle.jpg",
    rating: 4,
    reviews: 4567,
    description: "Beautiful landscape puzzle with premium quality pieces.",
    badge: null,
    stock: 55,
  },
  {
    id: 98,
    name: "Action Figure Collectible",
    price: 34.99,
    category: "Toys & Games",
    image: "images/action-figure.jpg",
    rating: 5,
    reviews: 2345,
    description: "Highly detailed action figure with multiple points of articulation.",
    badge: null,
    stock: 38,
  },
  {
    id: 99,
    name: "Fashion Doll Playset",
    price: 29.99,
    category: "Toys & Games",
    image: "images/doll.jpg",
    rating: 4,
    reviews: 3678,
    description: "Deluxe doll playset with accessories and outfit changes.",
    badge: null,
    stock: 45,
  },
  {
    id: 100,
    name: "RC Racing Car",
    price: 69.99,
    category: "Toys & Games",
    image: "images/rc-car.jpg",
    rating: 5,
    reviews: 2567,
    description: "High-speed remote control car with rechargeable battery.",
    badge: null,
    stock: 32,
  },
  {
    id: 101,
    name: "Latest Video Game Release",
    price: 59.99,
    category: "Toys & Games",
    image: "images/video-game.jpg",
    rating: 5,
    reviews: 8901,
    description: "Blockbuster video game for current generation consoles.",
    badge: null,
    stock: 75,
  },
  {
    id: 102,
    name: "Gaming Console Bundle",
    price: 499.99,
    category: "Toys & Games",
    image: "images/console.jpg",
    rating: 5,
    reviews: 5432,
    description: "Next-gen gaming console with controller and game bundle.",
    badge: null,
    stock: 8,
  },
  {
    id: 103,
    name: "Premium Playing Cards Set",
    price: 12.99,
    category: "Toys & Games",
    image: "images/cards.jpg",
    rating: 4,
    reviews: 3234,
    description: "Professional quality playing cards with elegant design.",
    badge: null,
    stock: 90,
  },
  {
    id: 104,
    name: "Wooden Chess Set",
    price: 49.99,
    category: "Toys & Games",
    image: "images/chess.jpg",
    rating: 5,
    reviews: 2890,
    description: "Handcrafted wooden chess set with folding board.",
    badge: null,
    stock: 25,
  },
  {
    id: 105,
    name: "Speed Cube 3x3",
    price: 14.99,
    category: "Toys & Games",
    image: "images/rubiks-cube.jpg",
    rating: 4,
    reviews: 4567,
    description: "Professional speed cube with smooth turning mechanism.",
    badge: null,
    stock: 68,
  },
  {
    id: 106,
    name: "Camera Drone with GPS",
    price: 249.99,
    category: "Toys & Games",
    image: "images/drone.jpg",
    rating: 5,
    reviews: 1890,
    description: "4K camera drone with GPS, auto-return, and 25-minute flight time.",
    badge: null,
    stock: 18,
  },
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Refresh cart items with current product data (fixes old image paths)
function refreshCartData() {
  if (cart.length > 0) {
    cart = cart.map(cartItem => {
      const currentProduct = products.find(p => p.id === cartItem.id);
      if (currentProduct) {
        // Merge current product data with cart quantity
        return {
          ...currentProduct,
          quantity: cartItem.quantity
        };
      }
      return cartItem;
    });
    saveCart();
  }
}

// User Authentication
let currentUser = null;
let orders = [];
let users = JSON.parse(localStorage.getItem("users")) || [];

// Reviews Storage
// Format: { productId: [ { user, rating, comment, date }, ... ] }
let reviews = {};

// Load from localStorage on initialization
try {
  const storedUser = localStorage.getItem("currentUser");
  const storedOrders = localStorage.getItem("orders");
  const storedReviews = localStorage.getItem("reviews");
  
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
  }
  if (storedOrders) {
    orders = JSON.parse(storedOrders);
  }
  if (storedReviews) {
    reviews = JSON.parse(storedReviews);
  } else {
    // Initialize with dummy reviews for demonstration
    reviews = {
      "0": [ // Gaming Laptop Pro 15"
        {
          user: "Ahmed Hassan",
          rating: 5,
          comment: "Absolutely amazing laptop! The performance is outstanding and it handles all my games at max settings. Highly recommend!",
          date: new Date("2024-11-15").toISOString()
        },
        {
          user: "Sarah Mohamed",
          rating: 4,
          comment: "Great laptop for the price. Battery life could be better, but overall very satisfied with the purchase.",
          date: new Date("2024-11-20").toISOString()
        },
        {
          user: "Omar Ali",
          rating: 5,
          comment: "Best gaming laptop I've ever owned. Fast delivery and excellent customer service!",
          date: new Date("2024-11-22").toISOString()
        }
      ],
      "1": [ // Wireless Noise Cancelling Headphones
        {
          user: "Fatima Ibrahim",
          rating: 5,
          comment: "The noise cancellation is incredible! Perfect for my daily commute. Sound quality is top-notch.",
          date: new Date("2024-11-18").toISOString()
        },
        {
          user: "Karim Youssef",
          rating: 4,
          comment: "Very comfortable and great sound. The battery lasts all day. Only wish they came in more colors.",
          date: new Date("2024-11-21").toISOString()
        }
      ],
      "2": [ // Smartphone X Pro 256GB
        {
          user: "Nour Ahmed",
          rating: 5,
          comment: "This phone is a game changer! The camera quality is phenomenal and the battery easily lasts two days.",
          date: new Date("2024-11-10").toISOString()
        },
        {
          user: "Hassan Mahmoud",
          rating: 5,
          comment: "Best smartphone I've ever had. Super fast, great display, and the 256GB storage is perfect.",
          date: new Date("2024-11-16").toISOString()
        },
        {
          user: "Layla Khaled",
          rating: 4,
          comment: "Excellent phone overall. A bit pricey but worth it for the features and performance.",
          date: new Date("2024-11-23").toISOString()
        }
      ]
    };
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }
} catch (e) {
  console.error("Error loading user data:", e);
  currentUser = null;
  orders = [];
  reviews = {};
}

// Validation Functions
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password && password.length >= 6;
}

function showError(message, elementId = null) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  errorDiv.style.cssText = 'background: #f8d7da; color: #721c24; padding: 10px; margin: 10px 0; border-radius: 4px; border: 1px solid #f5c6cb;';
  
  if (elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      const existingError = element.parentElement.querySelector('.error-message');
      if (existingError) existingError.remove();
      element.parentElement.insertBefore(errorDiv, element.nextSibling);
    }
  } else {
    alert(message);
  }
  
  setTimeout(() => errorDiv.remove(), 5000);
}

function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = message;
  successDiv.style.cssText = 'background: #d4edda; color: #155724; padding: 10px; margin: 10px 0; border-radius: 4px; border: 1px solid #c3e6cb; position: fixed; top: 80px; right: 20px; z-index: 10000; min-width: 250px;';
  document.body.appendChild(successDiv);
  setTimeout(() => successDiv.remove(), 3000);
}

// Initialize Common Functions
// Carousel functionality
function initializeCarousel() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  setInterval(nextSlide, 5000);
}

function initializeCommon() {
  updateCartCount();
  initializeSearch();
  initializeCart();
  initializeModals();
  initializeAuth();
  updateHeaderUserInfo();
  initializeAddToCartButtons();

  // Make logo clickable
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.onclick = () => {
      window.location.hash = "#home";
    };
  }

  // Back to top
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// Initialize Add to Cart buttons
function initializeAddToCartButtons() {
  const buttons = document.querySelectorAll(".add-to-cart-btn");
  console.log(`Found ${buttons.length} add-to-cart buttons`);
  
  buttons.forEach((button) => {
    // Remove any existing listeners by cloning
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    
    newButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = parseInt(this.getAttribute("data-product-id"));
      console.log(`Add to cart clicked for product ID: ${productId}`);
      
      if (!isNaN(productId)) {
        addToCart(productId);
      } else {
        console.error("Invalid product ID:", this.getAttribute("data-product-id"));
      }
    });
  });
}

// Authentication Functions
function initializeAuth() {
  const signInItem =
    document.getElementById("signInHeaderItem") ||
    document.querySelector(".header-item:not(.cart)");
  const ordersItem =
    document.getElementById("ordersHeaderItem") ||
    document.querySelectorAll(".header-item:not(.cart)")[1];

  if (signInItem) {
    signInItem.style.cursor = "pointer";
    signInItem.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      openSignInModal();
    };
  }

  if (ordersItem) {
    ordersItem.style.cursor = "pointer";
    ordersItem.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (currentUser) {
        window.location.hash = "#orders";
      } else {
        openSignInModal();
      }
    };
  }
}

function updateHeaderUserInfo() {
  const signInItem =
    document.getElementById("signInHeaderItem") ||
    document.querySelector(".header-item:not(.cart)");
  if (signInItem && currentUser) {
    const line1 = signInItem.querySelector(".header-line-1");
    const line2 = signInItem.querySelector(".header-line-2");
    if (line1) line1.textContent = `Hello, ${currentUser.name.split(" ")[0]}`;
    if (line2) line2.textContent = "Account & Lists";
  } else if (signInItem && !currentUser) {
    const line1 = signInItem.querySelector(".header-line-1");
    if (line1) line1.textContent = "Hello, Sign in";
  }
}

function openSignInModal() {
  const modal = document.getElementById("signInModal");
  if (modal) {
    // Check if user is already signed in
    if (currentUser) {
      // Show account menu instead of sign-in form
      showAccountMenu();
    } else {
      // Show sign-in form for non-authenticated users
      document.getElementById("signInTab").style.display = "block";
      document.getElementById("createAccountTab").style.display = "none";
      document.getElementById("accountMenuTab").style.display = "none";
    }
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function showAccountMenu() {
  // Hide other tabs
  document.getElementById("signInTab").style.display = "none";
  document.getElementById("createAccountTab").style.display = "none";
  
  // Show account menu
  const accountMenuTab = document.getElementById("accountMenuTab");
  if (accountMenuTab) {
    accountMenuTab.style.display = "block";
    
    // Update user info in the account menu
    const userName = document.getElementById("accountUserName");
    const userEmail = document.getElementById("accountUserEmail");
    
    if (userName && currentUser) {
      userName.textContent = currentUser.name.split(" ")[0];
    }
    if (userEmail && currentUser) {
      userEmail.textContent = currentUser.email;
    }
  }
}


function closeSignInModal() {
  const modal = document.getElementById("signInModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Sign In - for existing users only
function signIn(email, password) {
  console.log('Sign in attempt:', email);
  
  // Validate inputs
  if (!email || !password) {
    showError('Please fill in all fields');
    return false;
  }
  
  if (!validateEmail(email)) {
    showError('Please enter a valid email address');
    return false;
  }
  
  // Check if user exists
  const existingUser = users.find(u => u.email === email);
  
  if (!existingUser) {
    showError('No account found with this email. Please create an account.');
    return false;
  }
  
  // Check password
  if (existingUser.password !== password) {
    showError('Incorrect password. Please try again.');
    return false;
  }
  
  // Sign in successful
  currentUser = {
    email: existingUser.email,
    name: existingUser.name,
    signInDate: new Date().toISOString(),
  };
  
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateHeaderUserInfo();
  closeSignInModal();
  showSuccess(`Welcome back, ${currentUser.name}!`);
  console.log('Sign in successful:', currentUser);
  return true;
}

// Create Account - for new users only
function createAccount(name, email, password) {
  console.log('Create account attempt:', email);
  
  // Validate inputs
  if (!name || !email || !password) {
    showError('Please fill in all fields');
    return false;
  }
  
  if (!validateEmail(email)) {
    showError('Please enter a valid email address');
    return false;
  }
  
  if (!validatePassword(password)) {
    showError('Password must be at least 6 characters long');
    return false;
  }
  
  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    showError('An account with this email already exists. Please sign in.');
    return false;
  }
  
  // Create new user
  const newUser = {
    email: email,
    password: password,
    name: name,
    createdDate: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  
  // Auto sign in the new user
  currentUser = {
    email: newUser.email,
    name: newUser.name,
    signInDate: new Date().toISOString(),
  };
  
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateHeaderUserInfo();
  closeSignInModal();
  showSuccess(`Welcome, ${currentUser.name}! Your account has been created.`);
  console.log('Account created and signed in:', currentUser);
  return true;
}

function signOut() {
  if (!currentUser) return;
  
  const userName = currentUser.name;
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateHeaderUserInfo();

  const signInItem = document.querySelector(".header-item:not(.cart)");
  if (signInItem) {
    const line1 = signInItem.querySelector(".header-line-1");
    if (line1) line1.textContent = "Hello, Sign in";
  }

  showSuccess(`Goodbye, ${userName}! You have been signed out.`);
  
  // Redirect to home if on orders page
  if (window.location.hash === '#orders') {
    setTimeout(() => window.location.hash = '#home', 1500);
  }
}

function initializeSignIn() {
  const signInForm = document.getElementById("signInForm");
  const createAccountForm = document.getElementById("createAccountForm");
  const closeSignIn = document.getElementById("closeSignIn");
  const signInOverlay = document.getElementById("signInOverlay");
  const switchToCreate = document.getElementById("switchToCreate");
  const switchToSignIn = document.getElementById("switchToSignIn");
  const switchToSignInFromAccount = document.getElementById("switchToSignInFromAccount");
  const signOutBtn = document.getElementById("signOutBtn");

  if (closeSignIn) {
    closeSignIn.addEventListener("click", closeSignInModal);
  }
  if (signInOverlay) {
    signInOverlay.addEventListener("click", closeSignInModal);
  }

  if (switchToCreate) {
    switchToCreate.addEventListener("click", () => {
      document.getElementById("signInTab").style.display = "none";
      document.getElementById("createAccountTab").style.display = "block";
      document.getElementById("accountMenuTab").style.display = "none";
      // Update header text
      const headerText = document.getElementById("modalHeaderText");
      if (headerText) headerText.textContent = "Create Account";
    });
  }

  if (switchToSignIn) {
    switchToSignIn.addEventListener("click", () => {
      document.getElementById("createAccountTab").style.display = "none";
      document.getElementById("signInTab").style.display = "block";
      document.getElementById("accountMenuTab").style.display = "none";
      // Update header text
      const headerText = document.getElementById("modalHeaderText");
      if (headerText) headerText.textContent = "Sign in";
    });
  }

  // Handle "Sign in with another account" link
  if (switchToSignInFromAccount) {
    switchToSignInFromAccount.addEventListener("click", (e) => {
      e.preventDefault();
      // Sign out current user first
      signOut();
      // Show sign-in form
      document.getElementById("accountMenuTab").style.display = "none";
      document.getElementById("createAccountTab").style.display = "none";
      document.getElementById("signInTab").style.display = "block";
      // Update header text
      const headerText = document.getElementById("modalHeaderText");
      if (headerText) headerText.textContent = "Sign in";
    });
  }

  // Sign In Form Handler
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log('Sign in form submitted');
      
      const email = document.getElementById("signInEmail").value.trim();
      const password = document.getElementById("signInPassword").value;

      if (signIn(email, password)) {
        signInForm.reset();
      }
    });
  }

  // Create Account Form Handler
  if (createAccountForm) {
    createAccountForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log('Create account form submitted');
      
      const name = document.getElementById("createName").value.trim();
      const email = document.getElementById("createEmail").value.trim();
      const password = document.getElementById("createPassword").value;

      if (createAccount(name, email, password)) {
        createAccountForm.reset();
      }
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener("click", () => {
      signOut();
      closeSignInModal();
    });
  }
}

// Card Type Detection
function getCardType(cardNumber) {
  const patterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
  };
  
  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(cardNumber)) {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  }
  return 'Unknown';
}

// Orders Management
function saveOrder(orderData) {
  const order = {
    id: "ORD-" + Date.now(),
    date: new Date().toISOString(),
    items: orderData.items,
    subtotal: orderData.subtotal,
    tax: orderData.tax,
    total: orderData.total,
    shippingInfo: orderData.shippingInfo,
    paymentInfo: orderData.paymentInfo || null,
    status: "Processing",
  };

  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  return order;
}

function getOrders() {
  return orders;
}

// ========================================
// CHECKOUT SERVICE - Business Logic Layer
// ========================================
const CheckoutService = {
  /**
   * Submit an order with shipping and payment details
   * @param {Object} shippingDetails - User's shipping information
   * @param {Object} paymentDetails - User's payment information
   * @returns {Promise} Resolves with {success: true, orderId: '...'} or rejects with error message
   */
  async submitOrder(shippingDetails, paymentDetails) {
    // Defensive check: Ensure cart is not empty
    if (!cart || cart.length === 0) {
      throw new Error('Your cart is empty. Please add items before checking out.');
    }

    // STEP 1: Stock Validation
    // Loop through cart and verify each item has sufficient stock
    for (const item of cart) {
      const product = products[item.id];
      
      if (!product) {
        throw new Error(`Product "${item.name}" is no longer available.`);
      }
      
      if (!product.stock || product.stock < item.quantity) {
        throw new Error(
          `Insufficient stock for "${item.name}". Available: ${product.stock || 0}, Requested: ${item.quantity}`
        );
      }
    }

    // STEP 2: Recalculate Totals (Never trust UI values)
    // Calculate subtotal from cart items
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    
    // Calculate tax at 14%
    const tax = subtotal * 0.14;
    
    // Calculate total
    const total = subtotal + tax;

    // STEP 3: Backend Simulation
    // In production, replace this with: await fetch('/api/checkout', {...})
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // STEP 4: Payment Validation (Simulated)
          // In production, this would be handled by a payment gateway
          if (paymentDetails.cvv === '000') {
            reject(new Error('Payment declined. Please check your card details and try again.'));
            return;
          }

          // STEP 5: Create Order
          const orderId = 'ORD-' + Date.now();
          
          const order = {
            id: orderId,
            date: new Date().toISOString(),
            items: [...cart], // Clone cart items
            subtotal: subtotal,
            tax: tax,
            total: total,
            shippingInfo: { ...shippingDetails }, // Clone shipping details
            paymentInfo: {
              cardType: getCardType(paymentDetails.cardNumber),
              lastFourDigits: paymentDetails.cardNumber.slice(-4)
            },
            status: 'Processing'
          };

          // STEP 6: Save Order to localStorage
          orders.push(order);
          localStorage.setItem('orders', JSON.stringify(orders));

          // STEP 7: Update Inventory (Deduct purchased quantities)
          // In production, this would be handled by the backend
          cart.forEach(item => {
            const product = products[item.id];
            if (product) {
              product.stock -= item.quantity;
              console.log(`Updated stock for ${product.name}: ${product.stock} remaining`);
            }
          });

          // STEP 8: Clear Cart
          cart.length = 0; // Clear the global cart array
          localStorage.setItem('cart', JSON.stringify(cart));

          // STEP 9: Return Success Response
          resolve({
            success: true,
            orderId: orderId,
            order: order
          });

        } catch (error) {
          reject(new Error('An unexpected error occurred while processing your order. Please try again.'));
        }
      }, 1500); // Simulate 1500ms network delay
    });
  }
};

// ========================================
// REVIEW MANAGEMENT - User Reviews & Ratings
// ========================================

/**
 * Get all reviews for a specific product
 * @param {number|string} productId - The product ID
 * @returns {Array} Array of review objects
 */
function getProductReviews(productId) {
  return reviews[productId] || [];
}

/**
 * Submit a new review for a product
 * @param {number|string} productId - The product ID
 * @param {number} rating - Rating from 1-5
 * @param {string} comment - Review comment
 * @returns {Object} Result object with success status and message
 */
function submitReview(productId, rating, comment) {
  // Validation: Check if user is logged in
  if (!currentUser) {
    return {
      success: false,
      message: "Please sign in to submit a review."
    };
  }

  // Validation: Check rating is between 1-5
  if (!rating || rating < 1 || rating > 5) {
    return {
      success: false,
      message: "Please select a rating between 1 and 5 stars."
    };
  }

  // Validation: Check comment is not empty and has minimum length
  if (!comment || comment.trim().length < 10) {
    return {
      success: false,
      message: "Please write a review with at least 10 characters."
    };
  }

  // Check if user has already reviewed this product
  const productReviews = getProductReviews(productId);
  const existingReview = productReviews.find(
    review => review.user === currentUser.name
  );

  if (existingReview) {
    return {
      success: false,
      message: "You have already reviewed this product."
    };
  }

  // Create review object
  const review = {
    user: currentUser.name,
    rating: parseInt(rating),
    comment: comment.trim(),
    date: new Date().toISOString()
  };

  // Add review to reviews array
  if (!reviews[productId]) {
    reviews[productId] = [];
  }
  reviews[productId].push(review);

  // Save to localStorage
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Update product rating
  updateProductRating(productId);

  return {
    success: true,
    message: "Thank you for your review!",
    review: review
  };
}

/**
 * Recalculate and update product rating based on all reviews
 * @param {number|string} productId - The product ID
 */
function updateProductRating(productId) {
  const productReviews = getProductReviews(productId);
  
  if (productReviews.length === 0) {
    return;
  }

  // Calculate average rating
  const totalRating = productReviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const averageRating = Math.round(totalRating / productReviews.length);

  // Update product in products array
  const product = products[productId];
  if (product) {
    product.rating = averageRating;
    product.reviews = productReviews.length;
    console.log(`Updated rating for ${product.name}: ${averageRating} stars (${productReviews.length} reviews)`);
  }
}

// Update Cart Count
function updateCartCount() {
  const cartCountEl = document.getElementById("cartCount");
  if (cartCountEl) {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = count;
  }
}

// Add to Cart
function addToCart(productId) {
  const product = products[productId];
  if (!product) {
    showError('Product not found');
    return;
  }

  // Check stock availability
  if (!product.stock || product.stock <= 0) {
    showError('Sorry, this product is out of stock');
    return;
  }

  const existingItem = cart.find((item) => item.id === productId);
  const currentQuantity = existingItem ? existingItem.quantity : 0;
  
  // Check if adding one more exceeds stock
  if (currentQuantity >= product.stock) {
    showError(`Only ${product.stock} items available in stock`);
    return;
  }
  
  // Check quantity limit per order (max 10 per item)
  const MAX_QUANTITY_PER_ITEM = 10;
  if (currentQuantity >= MAX_QUANTITY_PER_ITEM) {
    showError(`Maximum ${MAX_QUANTITY_PER_ITEM} items allowed per product`);
    return;
  }

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartCount();
  if (typeof updateCartDisplay === "function") {
    updateCartDisplay();
  }

  // Button feedback
  const button = document.querySelector(`[data-product-id="${productId}"]`);
  if (button) {
    const originalText = button.textContent;
    button.textContent = "Added!";
    button.style.backgroundColor = "#238823";
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "#ffd814";
    }, 1000);
  }
  
  showSuccess(`${product.name} added to cart`);
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartCount();
  if (typeof updateCartDisplay === "function") {
    updateCartDisplay();
  }
}

// Update Quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;
  
  const product = products[productId];
  const newQuantity = item.quantity + change;
  
  // Check minimum
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  // Check stock availability
  if (product && newQuantity > product.stock) {
    showError(`Only ${product.stock} items available in stock`);
    return;
  }
  
  // Check maximum limit
  const MAX_QUANTITY_PER_ITEM = 10;
  if (newQuantity > MAX_QUANTITY_PER_ITEM) {
    showError(`Maximum ${MAX_QUANTITY_PER_ITEM} items allowed per product`);
    return;
  }
  
  item.quantity = newQuantity;
  saveCart();
  updateCartCount();
  if (typeof updateCartDisplay === "function") {
    updateCartDisplay();
  }
}

// Save Cart to Local Storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Initialize Cart
function initializeCart() {
  if (typeof updateCartDisplay === "function") {
    updateCartDisplay();
  }
  const closeCartBtn = document.getElementById("closeCart");
  const cartOverlay = document.getElementById("cartOverlay");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", closeCart);
  }
  if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCart);
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", openCheckout);
  }
}

// Open/Close Cart
function openCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const cartOverlay = document.getElementById("cartOverlay");
  if (cartSidebar) {
    cartSidebar.classList.add("active");
    if (cartOverlay) cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    if (typeof updateCartDisplay === "function") {
      updateCartDisplay();
    }
  }
}

function closeCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const cartOverlay = document.getElementById("cartOverlay");
  if (cartSidebar) {
    cartSidebar.classList.remove("active");
    if (cartOverlay) cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Update Cart Display
function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");
  if (!cartItems) return;

  const emptyCart = cartItems.querySelector(".empty-cart");

  if (cart.length === 0) {
    if (!emptyCart) {
      cartItems.innerHTML =
        '<div class="empty-cart"><p>Your cart is empty</p><button class="continue-shopping-btn" onclick="closeCart()">Continue Shopping</button></div>';
    }
    if (cartFooter) cartFooter.style.display = "none";
  } else {
    if (emptyCart) emptyCart.remove();
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='1.jpg'">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">EG${item.price.toFixed(2)}</p>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${
                          item.id
                        }, -1)">-</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${
                          item.id
                        }, 1)">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${
                  item.id
                })">Remove</button>
            </div>
        `
      )
      .join("");

    if (cartFooter) cartFooter.style.display = "block";
    updateCartTotals();
  }
}

// Update Cart Totals
function updateCartTotals() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.14;
  const total = subtotal + tax;

  const subtotalEl = document.getElementById("cartSubtotal");
  const taxEl = document.getElementById("cartTax");
  const totalEl = document.getElementById("cartTotal");

  if (subtotalEl) subtotalEl.textContent = `EG${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `EG${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `EG${total.toFixed(2)}`;
}

// Search Functionality
function initializeSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const categorySelect = document.querySelector(".search-category");

  if (!searchInput || !searchBtn) return;

  function performSearch() {
    const query = searchInput.value.toLowerCase();
    const category = categorySelect ? categorySelect.value : "All";
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      const title = card.querySelector(".product-title");
      if (!title) return;

      const titleText = title.textContent.toLowerCase();
      const button = card.querySelector(".add-to-cart-btn");
      if (!button) return;

      const productId = parseInt(button.getAttribute("data-product-id"));
      const product = products[productId];

      if (!product) return;

      const matchesSearch = !query || titleText.includes(query);
      const matchesCategory =
        category === "All" || product.category === category;

      card.style.display = matchesSearch && matchesCategory ? "block" : "none";
    });
  }

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });
  if (categorySelect) {
    categorySelect.addEventListener("change", performSearch);
  }
}

// Product Detail Modal
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("productModal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) return;

  // Get product reviews
  const productReviews = getProductReviews(productId);
  
  // Calculate average rating from reviews (if any)
  let displayRating = product.rating;
  let reviewCount = productReviews.length;
  
  if (reviewCount > 0) {
    const totalRating = productReviews.reduce((sum, r) => sum + r.rating, 0);
    displayRating = Math.round(totalRating / reviewCount);
  }

  // Format reviews HTML
  const reviewsHTML = productReviews.length > 0
    ? productReviews.map(review => {
        const reviewDate = new Date(review.date);
        const formattedDate = reviewDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        return `
          <div class="review-item">
            <div class="review-header">
              <strong>${review.user}</strong>
              <span class="review-rating">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
            </div>
            <p class="review-comment">${review.comment}</p>
            <span class="review-date">Posted on: ${formattedDate}</span>
          </div>
        `;
      }).join('')
    : '<p class="no-reviews">No reviews yet. Be the first to review this product!</p>';

  // Review form HTML (show only if user is logged in)
  const reviewFormHTML = currentUser
    ? `
      <div class="review-form">
        <h3>Write a Review</h3>
        <div class="star-rating-input" id="starRatingInput-${productId}">
          <span class="star" data-rating="1">☆</span>
          <span class="star" data-rating="2">☆</span>
          <span class="star" data-rating="3">☆</span>
          <span class="star" data-rating="4">☆</span>
          <span class="star" data-rating="5">☆</span>
        </div>
        <textarea 
          id="reviewComment-${productId}" 
          placeholder="Share your experience with this product (minimum 10 characters)..."
          rows="4"
        ></textarea>
        <button class="submit-review-btn" onclick="handleReviewSubmit(${productId})">
          Submit Review
        </button>
      </div>
    `
    : `
      <div class="review-form-signin">
        <p>Please <a href="#" onclick="closeProductModal(); openSignInModal(); return false;">sign in</a> to write a review.</p>
      </div>
    `;

  modalBody.innerHTML = `
        <div class="product-detail">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="detail-info">
                <h2>${product.name}</h2>
                <div class="detail-rating" id="productRating-${productId}">
                    ${"★".repeat(displayRating)}${"☆".repeat(5 - displayRating)}
                    <span>(${reviewCount} ${reviewCount === 1 ? 'review' : 'reviews'})</span>
                </div>
                <div class="detail-price">
                    <span class="price-current">EG${product.price.toFixed(2)}</span>
                    ${
                      product.originalPrice
                        ? `<span class="price-original">EG${product.originalPrice.toFixed(2)}</span>`
                        : ""
                    }
                </div>
                <p class="detail-description">${product.description}</p>
                <div class="detail-actions">
                    <button class="add-to-cart-btn-large" onclick="addToCart(${
                      product.id
                    }); closeProductModal(); openCart();">
                        Add to Cart
                    </button>
                    <button class="buy-now-btn" onclick="buyNow(${product.id})">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        
        <div class="reviews-section">
          <h3>Customer Reviews</h3>
          <div class="reviews-list">
            ${reviewsHTML}
          </div>
          
          ${reviewFormHTML}
        </div>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  
  // Initialize star rating input if user is logged in
  if (currentUser) {
    initializeStarRatingInput(productId);
  }
}

/**
 * Initialize interactive star rating input
 * @param {number|string} productId - The product ID
 */
function initializeStarRatingInput(productId) {
  const starContainer = document.getElementById(`starRatingInput-${productId}`);
  if (!starContainer) return;

  const stars = starContainer.querySelectorAll('.star');
  let selectedRating = 0;

  stars.forEach(star => {
    // Hover effect
    star.addEventListener('mouseenter', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      highlightStars(stars, rating);
    });

    // Click to select
    star.addEventListener('click', function() {
      selectedRating = parseInt(this.getAttribute('data-rating'));
      highlightStars(stars, selectedRating);
      // Store selected rating in a data attribute
      starContainer.setAttribute('data-selected-rating', selectedRating);
    });
  });

  // Reset on mouse leave if no rating selected
  starContainer.addEventListener('mouseleave', function() {
    if (selectedRating > 0) {
      highlightStars(stars, selectedRating);
    } else {
      highlightStars(stars, 0);
    }
  });
}

/**
 * Highlight stars up to the given rating
 * @param {NodeList} stars - Star elements
 * @param {number} rating - Rating to highlight
 */
function highlightStars(stars, rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.textContent = '★';
      star.style.color = '#ffa41c';
    } else {
      star.textContent = '☆';
      star.style.color = '#ccc';
    }
  });
}

/**
 * Handle review submission
 * @param {number|string} productId - The product ID
 */
function handleReviewSubmit(productId) {
  const starContainer = document.getElementById(`starRatingInput-${productId}`);
  const commentTextarea = document.getElementById(`reviewComment-${productId}`);
  
  if (!starContainer || !commentTextarea) return;

  const rating = parseInt(starContainer.getAttribute('data-selected-rating') || 0);
  const comment = commentTextarea.value;

  // Submit review
  const result = submitReview(productId, rating, comment);

  if (result.success) {
    showSuccess(result.message);
    // Refresh the product detail view to show the new review
    setTimeout(() => {
      showProductDetail(productId);
    }, 500);
  } else {
    showError(result.message);
  }
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function buyNow(productId) {
  cart = [{ ...products[productId], quantity: 1 }];
  saveCart();
  updateCartCount();
  closeProductModal();
  openCheckout();
}

// Initialize Modals
function initializeModals() {
  const closeModal = document.getElementById("closeModal");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeCheckout = document.getElementById("closeCheckout");
  const checkoutOverlay = document.getElementById("checkoutOverlay");

  if (closeModal) {
    closeModal.addEventListener("click", closeProductModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeProductModal);
  }
  if (closeCheckout) {
    closeCheckout.addEventListener("click", closeCheckoutFunc);
  }
  if (checkoutOverlay) {
    checkoutOverlay.addEventListener("click", closeCheckoutFunc);
  }
}

// Checkout
function openCheckout() {
  if (cart.length === 0) {
    showError("Your cart is empty!");
    return;
  }
  
  // Require sign-in for checkout
  if (!currentUser) {
    closeCart();
    showError('Please sign in to proceed to checkout');
    setTimeout(() => openSignInModal(), 500);
    return;
  }
  
  // Validate cart items against stock
  let hasStockIssue = false;
  cart.forEach(item => {
    const product = products[item.id];
    if (!product || !product.stock || item.quantity > product.stock) {
      showError(`${item.name} has insufficient stock. Please update your cart.`);
      hasStockIssue = true;
    }
  });
  
  if (hasStockIssue) return;

  closeCart();
  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutItems = document.getElementById("checkoutItems");
  if (!checkoutModal || !checkoutItems) return;

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='1.jpg'">
            <div>
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity} × EG${item.price.toFixed(2)}</p>
            </div>
            <span>EG${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `
    )
    .join("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.14;
  const total = subtotal + tax;

  const subtotalEl = document.getElementById("checkoutSubtotal");
  const taxEl = document.getElementById("checkoutTax");
  const totalEl = document.getElementById("checkoutTotal");

  if (subtotalEl) subtotalEl.textContent = `EG${subtotal.toFixed(2)}`;
  if (taxEl) taxEl.textContent = `EG${tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `EG${total.toFixed(2)}`;

  checkoutModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutFunc() {
  const checkoutModal = document.getElementById("checkoutModal");
  if (checkoutModal) {
    checkoutModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Place Order
function initializePlaceOrder() {
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  console.log("Initializing Place Order button:", placeOrderBtn);
  
  if (placeOrderBtn) {
    console.log("Adding click listener to Place Order button");
    placeOrderBtn.addEventListener("click", async function (e) {
      console.log("Place Order button clicked!");
      e.preventDefault(); // Prevent any default behavior
      e.stopPropagation(); // Stop event bubbling
      
      // Check if user is signed in
      if (!currentUser) {
        console.log("User not signed in");
        showError("Please sign in to place an order.");
        closeCheckoutFunc();
        openSignInModal();
        return;
      }
      
      // Defensive check: Ensure cart is not empty
      if (!cart || cart.length === 0) {
        showError("Your cart is empty. Please add items before checking out.");
        closeCheckoutFunc();
        return;
      }
      
      console.log("User signed in, validating form...");
      
      // Get all form values
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const address = document.getElementById("address").value.trim();
      const city = document.getElementById("city").value.trim();
      const zipCode = document.getElementById("zipCode").value.trim();
      const country = document.getElementById("country").value;
      const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
      const expiryDate = document.getElementById("expiryDate").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
      
      // Validate shipping information
      if (!fullName) {
        showError('Please enter your full name');
        document.getElementById("fullName").focus();
        return;
      }
      
      if (!email) {
        showError('Please enter your email address');
        document.getElementById("email").focus();
        return;
      }
      
      if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        document.getElementById("email").focus();
        return;
      }
      
      if (!phone) {
        showError('Please enter your phone number');
        document.getElementById("phone").focus();
        return;
      }
      
      if (!address) {
        showError('Please enter your street address');
        document.getElementById("address").focus();
        return;
      }
      
      if (!city) {
        showError('Please enter your city');
        document.getElementById("city").focus();
        return;
      }
      
      if (!zipCode) {
        showError('Please enter your ZIP code');
        document.getElementById("zipCode").focus();
        return;
      }
      
      if (!country) {
        showError('Please select your country');
        document.getElementById("country").focus();
        return;
      }
      
      // Validate payment information
      if (!cardNumber) {
        showError('Please enter your card number');
        document.getElementById("cardNumber").focus();
        return;
      }
      
      if (cardNumber.length < 13 || cardNumber.length > 19) {
        showError('Please enter a valid card number (13-19 digits)');
        document.getElementById("cardNumber").focus();
        return;
      }
      
      if (!expiryDate) {
        showError('Please enter the expiry date');
        document.getElementById("expiryDate").focus();
        return;
      }
      
      if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        showError('Please enter a valid expiry date (MM/YY)');
        document.getElementById("expiryDate").focus();
        return;
      }
      
      if (!cvv) {
        showError('Please enter the CVV');
        document.getElementById("cvv").focus();
        return;
      }
      
      if (cvv.length < 3 || cvv.length > 4) {
        showError('Please enter a valid CVV (3-4 digits)');
        document.getElementById("cvv").focus();
        return;
      }
      
      // Check if card is expired
      const [expMonth, expYear] = expiryDate.split('/');
      const expDate = new Date(2000 + parseInt(expYear), parseInt(expMonth) - 1);
      const today = new Date();
      if (expDate < today) {
        showError('Card has expired. Please use a valid card.');
        document.getElementById("expiryDate").focus();
        return;
      }
      
      // Prepare shipping and payment details for CheckoutService
      const shippingDetails = {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        city: city,
        zipCode: zipCode,
        country: country
      };
      
      const paymentDetails = {
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv
      };
      
      // Show loading state
      const originalText = placeOrderBtn.textContent;
      placeOrderBtn.textContent = "Processing...";
      placeOrderBtn.disabled = true;
      placeOrderBtn.style.opacity = "0.6";
      placeOrderBtn.style.cursor = "not-allowed";

      try {
        // Call CheckoutService to process the order
        // This simulates a backend API call with stock validation and payment processing
        console.log("Submitting order to CheckoutService...");
        const result = await CheckoutService.submitOrder(shippingDetails, paymentDetails);
        
        console.log("Order processed successfully:", result);
        
        // Update UI with order ID
        const orderIdEl = document.getElementById("orderId");
        if (orderIdEl) orderIdEl.textContent = result.orderId;
        
        // Update cart display
        updateCartCount();
        
        // Close checkout modal
        closeCheckoutFunc();
        
        // Show success modal
        const successModal = document.getElementById("successModal");
        if (successModal) {
          successModal.classList.add("active");
        }
        
        showSuccess('Payment successful! Order confirmed.');
        
      } catch (error) {
        // Handle errors from CheckoutService
        console.error('Checkout error:', error);
        showError(error.message || 'Payment failed. Please try again.');
        
      } finally {
        // Reset button state (whether success or failure)
        placeOrderBtn.textContent = originalText;
        placeOrderBtn.disabled = false;
        placeOrderBtn.style.opacity = "1";
        placeOrderBtn.style.cursor = "pointer";
      }
    });
  } else {
    console.error("Place Order button not found! ID: placeOrderBtn");
    
    // Add delegated event listener as backup
    document.addEventListener("click", function(e) {
      if (e.target && e.target.id === "placeOrderBtn") {
        console.log("Place Order clicked via delegation");
        e.preventDefault();
        e.stopPropagation();
        // Trigger the same logic
        initializePlaceOrder();
      }
    });
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  if (successModal) {
    successModal.classList.remove("active");
  }
}

// Format inputs
function initializeInputFormatters() {
  const cardNumber = document.getElementById("cardNumber");
  const expiryDate = document.getElementById("expiryDate");

  if (cardNumber) {
    cardNumber.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\s/g, "");
      let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
      e.target.value = formattedValue;
    });
  }

  if (expiryDate) {
    expiryDate.addEventListener("input", function (e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length >= 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
      e.target.value = value;
    });
  }
}

// Render Products by Category
function renderProductsByCategory(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filteredProducts =
    category === "All" || category === "Deals"
      ? products
      : products.filter((p) => p.category === category);

  // For deals, show only products with badges
  const productsToShow =
    category === "Deals"
      ? filteredProducts.filter((p) => p.badge)
      : filteredProducts;

  if (productsToShow.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; padding: 40px; color: #666;">No products found in this category.</p>';
    return;
  }

  container.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card">
            ${
              product.badge
                ? `<div class="product-badge">${product.badge}</div>`
                : ""
            }
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="showProductDetail(${
                  product.id
                })">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${"★".repeat(
                      product.rating
                    )}${"☆".repeat(5 - product.rating)}</span>
                    <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-price">
                    <span class="price-current">EG${product.price.toFixed(
                      2
                    )}</span>
                    ${
                      product.originalPrice
                        ? `<span class="price-original">EG${product.originalPrice.toFixed(
                            2
                          )}</span>`
                        : ""
                    }
                </div>
                <button class="add-to-cart-btn" data-product-id="${
                  product.id
                }">Add to Cart</button>
            </div>
        </div>
    `
    )
    .join("");

  // Initialize product buttons
  const buttons = container.querySelectorAll(".add-to-cart-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = parseInt(this.getAttribute("data-product-id"));
      addToCart(productId);
    });
  });

  // Initialize product titles
  const titles = container.querySelectorAll(".product-title");
  titles.forEach((title) => {
    title.style.cursor = "pointer";
  });
}

// Display Orders
function displayOrders() {
  const ordersContainer = document.getElementById("ordersContainer");
  const signOutBtn = document.getElementById("signOutBtn");
  
  if (!ordersContainer) return;
  
  // Check if user is signed in
  if (!currentUser) {
    ordersContainer.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <h3 style="color: #666; margin-bottom: 20px;">Please sign in to view your orders</h3>
        <button onclick="openSignInModal()" style="background: #ffd814; border: none; padding: 12px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500;">Sign In</button>
      </div>
    `;
    return;
  }
  
  // Show sign out button
  if (signOutBtn) {
    signOutBtn.style.display = "block";
  }
  
  // Get user's orders
  const userOrders = orders.filter(order => 
    order.shippingInfo && order.shippingInfo.email === currentUser.email
  );
  
  if (userOrders.length === 0) {
    ordersContainer.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <h3 style="color: #666; margin-bottom: 20px;">You haven't placed any orders yet</h3>
        <button onclick="window.location.href='index.html'" style="background: #ffd814; border: none; padding: 12px 30px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500;">Start Shopping</button>
      </div>
    `;
    return;
  }
  
  // Display orders
  ordersContainer.innerHTML = userOrders.map(order => `
    <div class="order-card" style="background: white; border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
      <div class="order-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
        <div>
          <h3 style="margin: 0 0 5px 0; color: #232f3e;">Order #${order.id}</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">Placed on ${new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div>
          <span class="order-status" style="background: ${order.status === 'Delivered' ? '#d4edda' : order.status === 'Processing' ? '#fff3cd' : '#cce5ff'}; color: ${order.status === 'Delivered' ? '#155724' : order.status === 'Processing' ? '#856404' : '#004085'}; padding: 6px 12px; border-radius: 4px; font-size: 14px; font-weight: 500;">${order.status}</span>
        </div>
      </div>
      <div class="order-items" style="margin-bottom: 15px;">
        ${order.items.map(item => `
          <div class="order-item" style="display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px; margin-right: 15px;" onerror="this.src='1.jpg'">
            <div style="flex: 1;">
              <h4 style="margin: 0 0 5px 0; font-size: 16px;">${item.name}</h4>
              <p style="margin: 0; color: #666; font-size: 14px;">Quantity: ${item.quantity}</p>
              <p style="margin: 5px 0 0 0; font-weight: 600; color: #b12704;">EG${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="order-summary" style="display: flex; justify-content: space-between; align-items: center; padding-top: 15px; border-top: 1px solid #eee;">
        <div style="color: #666;">
          <p style="margin: 0 0 5px 0; font-size: 14px;">Shipping to: ${order.shippingInfo.fullName}</p>
          <p style="margin: 0 0 5px 0; font-size: 14px;">${order.shippingInfo.address}, ${order.shippingInfo.city}</p>
          ${order.paymentInfo ? `<p style="margin: 5px 0 0 0; font-size: 13px; color: #888;">Paid with ${order.paymentInfo.cardType} •••• ${order.paymentInfo.lastFourDigits}</p>` : ''}
        </div>
        <div style="text-align: right;">
          <p style="margin: 0 0 5px 0; font-size: 14px; color: #666;">Total Amount</p>
          <p style="margin: 0; font-size: 24px; font-weight: 700; color: #b12704;">EG${order.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize Category Pages
function initializeCategoryPage(category) {
  const productGrid = document.getElementById("productGrid");
  if (productGrid) {
    renderProductsByCategory(category, "productGrid");
  }
}

// ========================================
// SPA ROUTER - Single Page Application
// ========================================

const routes = {
  'home': {
    title: 'Nexus - Online Shopping',
    render: renderHomePage
  },
  'electronics': {
    title: 'Electronics - Nexus',
    render: () => renderCategoryPage('Electronics')
  },
  'fashion': {
    title: 'Fashion - Nexus',
    render: () => renderCategoryPage('Fashion')
  },
  'home-kitchen': {
    title: 'Home & Kitchen - Nexus',
    render: () => renderCategoryPage('Home & Kitchen')
  },
  'books': {
    title: 'Books - Nexus',
    render: () => renderCategoryPage('Books')
  },
  'sports-outdoors': {
    title: 'Sports & Outdoors - Nexus',
    render: () => renderCategoryPage('Sports & Outdoors')
  },
  'toys-games': {
    title: 'Toys & Games - Nexus',
    render: () => renderCategoryPage('Toys & Games')
  },
  'deals': {
    title: 'Today\'s Deals - Nexus',
    render: () => renderCategoryPage('Deals')
  },
  'orders': {
    title: 'Your Orders - Nexus',
    render: renderOrdersPage
  },
  'gift-cards': {
    title: 'Gift Cards - Nexus',
    render: renderGiftCardsPage
  },
  'registry': {
    title: 'Registry - Nexus',
    render: renderRegistryPage
  },
  'customer-service': {
    title: 'Customer Service - Nexus',
    render: renderInfoPage
  },
  'help-center': {
    title: 'Help Center - Nexus',
    render: renderHelpCenterPage
  }
};

function navigate(route) {
  console.log('Navigating to:', route);
  
  const routeConfig = routes[route] || routes['home'];
  
  // Update page title
  document.title = routeConfig.title;
  
  // Render the page
  routeConfig.render();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Update active nav link
  updateActiveNavLink(route);
}

function updateActiveNavLink(route) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${route}`) {
      link.classList.add('active');
    }
  });
}

function renderHomePage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  appContent.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero-section" id="home-hero">
      <div class="hero-carousel">
        <div class="hero-slide active">
          <div class="hero-content">
            <h2>Shop the Latest Electronics</h2>
            <p>Up to 50% off on selected items</p>
            <button class="hero-btn" onclick="window.location.hash='#electronics'">Shop Now</button>
          </div>
        </div>
        <div class="hero-slide">
          <div class="hero-content">
            <h2>Fashion Sale</h2>
            <p>New arrivals with amazing discounts</p>
            <button class="hero-btn" onclick="window.location.hash='#fashion'">Explore</button>
          </div>
        </div>
        <div class="hero-slide">
          <div class="hero-content">
            <h2>Home & Kitchen</h2>
            <p>Transform your living space</p>
            <button class="hero-btn" onclick="window.location.hash='#home-kitchen'">Discover</button>
          </div>
        </div>
      </div>
      <div class="carousel-dots">
        <span class="dot active" data-slide="0"></span>
        <span class="dot" data-slide="1"></span>
        <span class="dot" data-slide="2"></span>
      </div>
    </section>

    <!-- Product Grid -->
    <main class="main-content">
      ${renderHomeProductSections()}
    </main>
  `;
  
  // Re-initialize carousel
  initializeCarousel();
  
  // Render products for each section (showing 10 products per section)
  setTimeout(() => {
    // Get products with deals (those with originalPrice)
    const dealsProducts = products.filter(p => p.originalPrice).slice(0, 10);
    renderProductsInGrid(dealsProducts, 'dealsGrid');
    
    // Render category products (10 per category)
    renderProductsByCategory('Electronics', 'electronicsGrid', 10);
    renderProductsByCategory('Fashion', 'fashionGrid', 10);
    renderProductsByCategory('Home & Kitchen', 'homeKitchenGrid', 10);
    renderProductsByCategory('Books', 'booksGrid', 10);
    renderProductsByCategory('Sports & Outdoors', 'sportsGrid', 10);
    renderProductsByCategory('Toys & Games', 'toysGrid', 10);
  }, 0);
}

// Helper function to render products in a grid
function renderProductsInGrid(productsList, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = productsList.map(product => `
    <div class="product-card">
      ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='1.jpg'">
      </div>
      <div class="product-info">
        <h3 class="product-title" onclick="showProductDetail(${product.id})">${product.name}</h3>
        <div class="product-rating">
          ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
          <span class="review-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">EG${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="price-original">EG${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `).join('');
  
  // Re-initialize add to cart buttons
  initializeAddToCartButtons();
}

function renderHomeProductSections() {
  return `
    <!-- Today's Deals -->
    <section class="product-section">
      <div class="section-header">
        <h2>Today's Deals</h2>
        <a href="#deals" class="see-all">See all deals</a>
      </div>
      <div class="product-grid" id="dealsGrid"></div>
    </section>

    <!-- Electronics -->
    <section class="product-section">
      <div class="section-header">
        <h2>Electronics</h2>
        <a href="#electronics" class="see-all">Shop now</a>
      </div>
      <div class="product-grid" id="electronicsGrid"></div>
    </section>

    <!-- Fashion -->
    <section class="product-section">
      <div class="section-header">
        <h2>Fashion</h2>
        <a href="#fashion" class="see-all">Shop now</a>
      </div>
      <div class="product-grid" id="fashionGrid"></div>
    </section>

    <!-- Home & Kitchen -->
    <section class="product-section">
      <div class="section-header">
        <h2>Home & Kitchen</h2>
        <a href="#home-kitchen" class="see-all">Shop now</a>
      </div>
      <div class="product-grid" id="homeKitchenGrid"></div>
    </section>

    <!-- Books -->
    <section class="product-section">
      <div class="section-header">
        <h2>Books</h2>
        <a href="#books" class="see-all">Shop now</a>
      </div>
      <div class="product-grid" id="booksGrid"></div>
    </section>

    <!-- Sports & Outdoors -->
    <section class="product-section">
      <div class="section-header">
        <h2>Sports & Outdoors</h2>
        <a href="#sports-outdoors" class="see-all">Shop now</a>
      </div>
      <div class="product-grid" id="sportsGrid"></div>
    </section>

    <!-- Toys & Games -->
    <section class="product-section">
      <div class="section-header">
        <h2>Toys & Games</h2>
        <a href="#toys-games" class="see-all">Shop now</a>
      </div>
      <div class="product-grid" id="toysGrid"></div>
    </section>
  `;
}

function renderCategoryPage(category) {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  appContent.innerHTML = `
    <main class="main-content">
      <section class="product-section">
        <div class="section-header">
          <h2>${category}</h2>
        </div>
        <div class="product-grid" id="categoryProductGrid"></div>
      </section>
    </main>
  `;
  
  // Render products for this category
  renderProductsByCategory(category, 'categoryProductGrid');
}

function renderOrdersPage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  appContent.innerHTML = `
    <main class="main-content">
      <section class="orders-section" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h1 style="font-size: 28px; margin-bottom: 20px;">Your Orders</h1>
        <div id="ordersContainer"></div>
      </section>
    </main>
  `;
  
  // Display orders
  displayOrders();
}

// Gift Cards Page
function renderGiftCardsPage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  appContent.innerHTML = `
    <main class="main-content">
      <section class="gift-cards-section" style="padding: 40px 20px; max-width: 1400px; margin: 0 auto;">
        <h1 style="font-size: 36px; margin-bottom: 10px; text-align: center;">Nexus Gift Cards</h1>
        <p style="text-align: center; color: #666; margin-bottom: 40px; font-size: 18px;">
          The perfect gift for any occasion. Let them choose exactly what they want.
        </p>
        
        <!-- Tab Navigation -->
        <div style="display: flex; gap: 10px; margin-bottom: 30px; border-bottom: 2px solid #ddd; justify-content: center;">
          <button class="gift-tab active" data-tab="purchase" style="padding: 15px 30px; border: none; background: none; font-size: 16px; font-weight: 500; cursor: pointer; border-bottom: 3px solid #ff9900; color: #ff9900;">
            Purchase Gift Card
          </button>
          <button class="gift-tab" data-tab="balance" style="padding: 15px 30px; border: none; background: none; font-size: 16px; font-weight: 500; cursor: pointer; border-bottom: 3px solid transparent; color: #666;">
            Check Balance
          </button>
          <button class="gift-tab" data-tab="redeem" style="padding: 15px 30px; border: none; background: none; font-size: 16px; font-weight: 500; cursor: pointer; border-bottom: 3px solid transparent; color: #666;">
            Redeem Card
          </button>
        </div>
        
        <!-- Purchase Tab -->
        <div id="purchaseTab" class="tab-content" style="display: block;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 50px;">
            <!-- Left Column: Card Configuration -->
            <div>
              <!-- Gift Card Designs -->
              <div style="margin-bottom: 30px;">
                <h2 style="font-size: 24px; margin-bottom: 20px;">Choose a Design</h2>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                  <div class="gift-card-design" data-design="birthday" data-gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" data-text="Happy Birthday" style="cursor: pointer; border: 3px solid transparent; border-radius: 8px; padding: 10px; transition: all 0.3s;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: bold;">
                      Happy Birthday
                    </div>
                  </div>
                  <div class="gift-card-design" data-design="celebration" data-gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" data-text="Celebration" style="cursor: pointer; border: 3px solid transparent; border-radius: 8px; padding: 10px; transition: all 0.3s;">
                    <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: bold;">
                      Celebration
                    </div>
                  </div>
                  <div class="gift-card-design" data-design="thankyou" data-gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" data-text="Thank You" style="cursor: pointer; border: 3px solid transparent; border-radius: 8px; padding: 10px; transition: all 0.3s;">
                    <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: bold;">
                      Thank You
                    </div>
                  </div>
                  <div class="gift-card-design active" data-design="classic" data-gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)" data-text="Gift Card" style="cursor: pointer; border: 3px solid #ff9900; border-radius: 8px; padding: 10px; transition: all 0.3s;">
                    <div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); height: 120px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: bold;">
                      Gift Card
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Amount Selection -->
              <div style="margin-bottom: 30px;">
                <h2 style="font-size: 24px; margin-bottom: 20px;">Select Amount</h2>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
                  <button class="amount-btn" data-amount="25" style="padding: 12px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s;">EG25</button>
                  <button class="amount-btn" data-amount="50" style="padding: 12px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s;">EG50</button>
                  <button class="amount-btn active" data-amount="100" style="padding: 12px; border: 2px solid #ff9900; background: #fff3e6; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s;">EG100</button>
                  <button class="amount-btn" data-amount="200" style="padding: 12px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s;">EG200</button>
                  <button class="amount-btn" data-amount="500" style="padding: 12px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s;">EG500</button>
                  <button class="amount-btn" data-amount="1000" style="padding: 12px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: all 0.3s;">EG1000</button>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <label style="font-weight: 500; min-width: 120px;">Custom Amount:</label>
                  <input type="number" id="customAmount" placeholder="EG 10 - 5000" min="10" max="5000" style="padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; flex: 1;">
                </div>
              </div>
              
              <!-- Quantity -->
              <div style="margin-bottom: 30px;">
                <h2 style="font-size: 24px; margin-bottom: 20px;">Quantity</h2>
                <div style="display: flex; align-items: center; gap: 15px;">
                  <button id="decreaseQty" style="width: 40px; height: 40px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 20px; cursor: pointer; font-weight: bold;">−</button>
                  <input type="number" id="giftCardQty" value="1" min="1" max="50" style="width: 80px; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 18px; text-align: center; font-weight: bold;">
                  <button id="increaseQty" style="width: 40px; height: 40px; border: 2px solid #ddd; background: white; border-radius: 8px; font-size: 20px; cursor: pointer; font-weight: bold;">+</button>
                  <span style="color: #666; font-size: 14px;">Save 5% on 5+ cards</span>
                </div>
              </div>
              
              <!-- Recipient Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="font-size: 24px; margin-bottom: 20px;">Recipient Information</h2>
                <div style="display: grid; gap: 12px;">
                  <input type="text" id="recipientName" placeholder="Recipient's Name *" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
                  <input type="email" id="recipientEmail" placeholder="Recipient's Email *" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
                  <textarea id="giftMessage" placeholder="Personal Message (Optional - max 200 characters)" maxlength="200" rows="3" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; resize: vertical;"></textarea>
                  <div style="display: flex; gap: 10px;">
                    <input type="date" id="deliveryDate" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; flex: 1;">
                    <select id="deliveryTime" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
                      <option value="">Send Now</option>
                      <option value="morning">Morning (8 AM)</option>
                      <option value="noon">Noon (12 PM)</option>
                      <option value="evening">Evening (6 PM)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <!-- Sender Information -->
              <div style="margin-bottom: 30px;">
                <h2 style="font-size: 24px; margin-bottom: 20px;">Your Information</h2>
                <div style="display: grid; gap: 12px;">
                  <input type="text" id="senderName" placeholder="Your Name *" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
                  <input type="email" id="senderEmail" placeholder="Your Email (for receipt) *" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
                  <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                    <input type="checkbox" id="sendCopyToSelf" style="width: 18px; height: 18px; cursor: pointer;">
                    <span>Send me a copy of the gift card</span>
                  </label>
                </div>
              </div>
            </div>
            
            <!-- Right Column: Live Preview & Summary -->
            <div>
              <!-- Live Preview -->
              <div style="position: sticky; top: 20px;">
                <h2 style="font-size: 24px; margin-bottom: 20px;">Preview</h2>
                <div id="cardPreview" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 12px; padding: 40px; min-height: 250px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 30px rgba(0,0,0,0.2); margin-bottom: 30px;">
                  <div style="text-align: center; color: white;">
                    <div style="font-size: 48px; font-weight: bold; margin-bottom: 10px;">NEXUS</div>
                    <div style="font-size: 24px; font-weight: 500;" id="previewText">Gift Card</div>
                  </div>
                  <div style="text-align: center; color: white;">
                    <div style="font-size: 36px; font-weight: bold;" id="previewAmount">EG100</div>
                    <div style="font-size: 14px; opacity: 0.9; margin-top: 10px;">Code: XXXX-XXXX-XXXX</div>
                  </div>
                </div>
                
                <!-- Order Summary -->
                <div style="background: #f8f9fa; padding: 25px; border-radius: 12px;">
                  <h3 style="font-size: 20px; margin-bottom: 20px;">Order Summary</h3>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 16px;">
                    <span>Card Amount:</span>
                    <span id="summaryAmount" style="font-weight: bold;">EG100.00</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 16px;">
                    <span>Quantity:</span>
                    <span id="summaryQty" style="font-weight: bold;">1</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 16px; color: #28a745;">
                    <span>Discount:</span>
                    <span id="summaryDiscount">EG0.00</span>
                  </div>
                  <div style="border-top: 2px solid #ddd; margin: 15px 0;"></div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 25px; font-size: 22px; font-weight: bold;">
                    <span>Total:</span>
                    <span id="summaryTotal" style="color: #ff9900;">EG100.00</span>
                  </div>
                  <button id="purchaseGiftCardBtn" class="hero-btn" style="width: 100%; padding: 15px; font-size: 18px; background: #ff9900; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; margin-bottom: 10px;">
                    Purchase Gift Card
                  </button>
                  <button id="printPreviewBtn" style="width: 100%; padding: 12px; font-size: 16px; background: white; color: #333; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; font-weight: 500;">
                    🖨️ Print Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Balance Tab -->
        <div id="balanceTab" class="tab-content" style="display: none;">
          <div style="max-width: 700px; margin: 0 auto; padding: 40px 0;">
            <h2 style="font-size: 28px; margin-bottom: 20px; text-align: center;">Check Gift Card Balance</h2>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">Enter your gift card code to check the remaining balance</p>
            
            <!-- Help Box -->
            <div style="background: #e7f3ff; border-left: 4px solid #2196f3; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <h3 style="font-size: 18px; margin-bottom: 15px; color: #1976d2;">📧 Where to Find Your Gift Card Information</h3>
              <ul style="margin: 0; padding-left: 20px; color: #555; line-height: 1.8;">
                <li><strong>Gift Card Code:</strong> Found in the email you received when the gift card was purchased. Look for a 12-16 character code (e.g., ABCD-1234-EFGH-5678)</li>
                <li><strong>PIN:</strong> The last 4 digits of the gift card code, also included in the email</li>
                <li><strong>Can't find your email?</strong> Check your spam folder or <a href="#" style="color: #2196f3; text-decoration: underline;">contact support</a></li>
              </ul>
            </div>
            
            <div style="background: #f8f9fa; padding: 40px; border-radius: 12px;">
              <input type="text" id="balanceCardCode" placeholder="Enter Gift Card Code (e.g., XXXX-XXXX-XXXX)" style="width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; margin-bottom: 15px; text-transform: uppercase;">
              <input type="text" id="balanceCardPin" placeholder="Enter PIN (last 4 digits)" maxlength="4" style="width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; margin-bottom: 20px;">
              <button id="checkBalanceBtn" class="hero-btn" style="width: 100%; padding: 15px; font-size: 18px; background: #ff9900; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                Check Balance
              </button>
              <div id="balanceResult" style="margin-top: 30px; display: none;">
                <div style="text-align: center; padding: 30px; background: white; border-radius: 8px; border: 2px solid #28a745;">
                  <div style="font-size: 48px; margin-bottom: 10px;">💳</div>
                  <div style="font-size: 18px; color: #666; margin-bottom: 10px;">Current Balance</div>
                  <div id="balanceAmount" style="font-size: 42px; font-weight: bold; color: #28a745; margin-bottom: 15px;">EG0.00</div>
                  <div style="font-size: 14px; color: #666;">Card Status: <span id="cardStatus" style="font-weight: bold; color: #28a745;">Active</span></div>
                </div>
              </div>
            </div>
            
            <!-- Additional Help -->
            <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
              <p>Need help? <a href="#" style="color: #ff9900; text-decoration: underline;">View sample gift card email</a> | <a href="#" style="color: #ff9900; text-decoration: underline;">Contact Support</a></p>
            </div>
          </div>
        </div>
        
        <!-- Redeem Tab -->
        <div id="redeemTab" class="tab-content" style="display: none;">
          <div style="max-width: 700px; margin: 0 auto; padding: 40px 0;">
            <h2 style="font-size: 28px; margin-bottom: 20px; text-align: center;">Redeem Gift Card</h2>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">Add your gift card to your Nexus account balance</p>
            
            <!-- Help Box -->
            <div style="background: #fff3e6; border-left: 4px solid #ff9900; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <h3 style="font-size: 18px; margin-bottom: 15px; color: #e67e00;">🎁 How to Redeem Your Gift Card</h3>
              <ol style="margin: 0; padding-left: 20px; color: #555; line-height: 1.8;">
                <li>Find your gift card code in the email you received</li>
                <li>Enter the full code and PIN below</li>
                <li>The balance will be added to your Nexus account</li>
                <li>Use your balance for any purchase on Nexus</li>
              </ol>
              <div style="margin-top: 15px; padding: 12px; background: white; border-radius: 6px; font-size: 14px;">
                <strong>Example Gift Card Code:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px; font-family: monospace;">NEXUS-2024-GIFT-1234</code>
              </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 40px; border-radius: 12px;">
              <input type="text" id="redeemCardCode" placeholder="Enter Gift Card Code" style="width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; margin-bottom: 15px; text-transform: uppercase;">
              <input type="text" id="redeemCardPin" placeholder="Enter PIN (last 4 digits)" maxlength="4" style="width: 100%; padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; margin-bottom: 20px;">
              <button id="redeemCardBtn" class="hero-btn" style="width: 100%; padding: 15px; font-size: 18px; background: #ff9900; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                Redeem to Account
              </button>
              <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; border-left: 4px solid #2196f3;">
                <strong>Note:</strong> Once redeemed, the gift card balance will be added to your Nexus account and can be used for any purchase. This action cannot be undone.
              </div>
            </div>
            
            <!-- FAQ -->
            <div style="margin-top: 40px; padding: 25px; background: white; border: 1px solid #ddd; border-radius: 12px;">
              <h3 style="font-size: 20px; margin-bottom: 20px;">Frequently Asked Questions</h3>
              <div style="margin-bottom: 15px;">
                <strong style="color: #333;">Q: Can I use my gift card without redeeming it?</strong>
                <p style="color: #666; margin: 5px 0 0 0;">Yes! You can enter the gift card code at checkout without redeeming it to your account.</p>
              </div>
              <div style="margin-bottom: 15px;">
                <strong style="color: #333;">Q: What happens after I redeem?</strong>
                <p style="color: #666; margin: 5px 0 0 0;">The balance is added to your account and can be used for any future purchases.</p>
              </div>
              <div>
                <strong style="color: #333;">Q: Do gift cards expire?</strong>
                <p style="color: #666; margin: 5px 0 0 0;">No! Nexus gift cards never expire and have no fees.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Features -->
        <div style="margin-top: 60px; padding-top: 60px; border-top: 2px solid #ddd;">
          <h2 style="font-size: 28px; margin-bottom: 40px; text-align: center;">Why Choose Nexus Gift Cards?</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px;">
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">📧</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Instant Delivery</h3>
              <p style="color: #666; font-size: 14px;">Email delivery within minutes or schedule for later</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">🔒</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">100% Secure</h3>
              <p style="color: #666; font-size: 14px;">Encrypted transactions and fraud protection</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">♾️</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Never Expires</h3>
              <p style="color: #666; font-size: 14px;">No expiration date or hidden fees</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">🛍️</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Shop Anything</h3>
              <p style="color: #666; font-size: 14px;">Valid on millions of products</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">🎁</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Bulk Discounts</h3>
              <p style="color: #666; font-size: 14px;">Save 5% on 5+ cards, 10% on 10+</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">📱</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Easy to Use</h3>
              <p style="color: #666; font-size: 14px;">Redeem online or check balance anytime</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
  
  // Initialize gift card interactions
  initializeEnhancedGiftCardPage();
}

// Registry Page
function renderRegistryPage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  appContent.innerHTML = `
    <main class="main-content">
      <section class="registry-section" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <h1 style="font-size: 36px; margin-bottom: 10px; text-align: center;">Nexus Registry</h1>
        <p style="text-align: center; color: #666; margin-bottom: 40px; font-size: 18px;">
          Create your perfect registry for weddings, baby showers, birthdays, and more.
        </p>
        
        <!-- Registry Options -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 50px;">
          <div class="registry-card" style="background: white; border: 2px solid #ddd; border-radius: 12px; padding: 30px; text-align: center; cursor: pointer; transition: all 0.3s;">
            <div style="font-size: 64px; margin-bottom: 15px;">💍</div>
            <h3 style="font-size: 24px; margin-bottom: 10px;">Wedding Registry</h3>
            <p style="color: #666; margin-bottom: 20px;">Start your new life together with everything you need</p>
            <button class="hero-btn" onclick="createRegistry('wedding')" style="padding: 12px 30px;">Create Wedding Registry</button>
          </div>
          
          <div class="registry-card" style="background: white; border: 2px solid #ddd; border-radius: 12px; padding: 30px; text-align: center; cursor: pointer; transition: all 0.3s;">
            <div style="font-size: 64px; margin-bottom: 15px;">👶</div>
            <h3 style="font-size: 24px; margin-bottom: 10px;">Baby Registry</h3>
            <p style="color: #666; margin-bottom: 20px;">Prepare for your little one's arrival</p>
            <button class="hero-btn" onclick="createRegistry('baby')" style="padding: 12px 30px;">Create Baby Registry</button>
          </div>
          
          <div class="registry-card" style="background: white; border: 2px solid #ddd; border-radius: 12px; padding: 30px; text-align: center; cursor: pointer; transition: all 0.3s;">
            <div style="font-size: 64px; margin-bottom: 15px;">🎂</div>
            <h3 style="font-size: 24px; margin-bottom: 10px;">Birthday Registry</h3>
            <p style="color: #666; margin-bottom: 20px;">Make your special day even more memorable</p>
            <button class="hero-btn" onclick="createRegistry('birthday')" style="padding: 12px 30px;">Create Birthday Registry</button>
          </div>
        </div>
        
        <!-- Find a Registry -->
        <div style="background: #f8f9fa; padding: 40px; border-radius: 12px; margin-bottom: 50px;">
          <h2 style="font-size: 28px; margin-bottom: 20px; text-align: center;">Find a Registry</h2>
          <div style="max-width: 600px; margin: 0 auto;">
            <div style="display: grid; gap: 15px;">
              <input type="text" id="registrySearchName" placeholder="Registrant's Name" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <select id="registrySearchType" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
                  <option value="">Registry Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby">Baby</option>
                  <option value="birthday">Birthday</option>
                </select>
                <input type="date" id="registrySearchDate" style="padding: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
              </div>
              <button class="hero-btn" onclick="searchRegistry()" style="padding: 15px; font-size: 18px; width: 100%;">Search Registry</button>
            </div>
          </div>
        </div>
        
        <!-- Registry Benefits -->
        <div>
          <h2 style="font-size: 28px; margin-bottom: 30px; text-align: center;">Why Create a Nexus Registry?</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">🎁</div>
              <h3 style="font-size: 20px; margin-bottom: 10px;">Millions of Products</h3>
              <p style="color: #666;">Choose from our entire catalog of products</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">📱</div>
              <h3 style="font-size: 20px; margin-bottom: 10px;">Easy to Manage</h3>
              <p style="color: #666;">Update your registry anytime, anywhere</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">🚚</div>
              <h3 style="font-size: 20px; margin-bottom: 10px;">Free Shipping</h3>
              <p style="color: #666;">Complimentary shipping on registry items</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">💝</div>
              <h3 style="font-size: 20px; margin-bottom: 10px;">Group Gifting</h3>
              <p style="color: #666;">Friends can contribute to larger items</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">🔄</div>
              <h3 style="font-size: 20px; margin-bottom: 10px;">Easy Returns</h3>
              <p style="color: #666;">180-day return window for registry items</p>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">🎉</div>
              <h3 style="font-size: 20px; margin-bottom: 10px;">Completion Discount</h3>
              <p style="color: #666;">Get 10% off remaining items after your event</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
  
  // Add hover effects
  const registryCards = document.querySelectorAll('.registry-card');
  registryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.borderColor = '#ff9900';
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.borderColor = '#ddd';
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
}

// Initialize Gift Card Page Interactions
function initializeGiftCardPage() {
  let selectedDesign = 'classic';
  let selectedAmount = 100;
  
  // Design selection
  const designCards = document.querySelectorAll('.gift-card-design');
  designCards.forEach(card => {
    card.addEventListener('click', function() {
      designCards.forEach(c => {
        c.classList.remove('active');
        c.style.borderColor = 'transparent';
      });
      this.classList.add('active');
      this.style.borderColor = '#ff9900';
      selectedDesign = this.dataset.design;
    });
    
    // Hover effect
    card.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.borderColor = '#ffc266';
      }
    });
    card.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.borderColor = 'transparent';
      }
    });
  });
  
  // Amount selection
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('customAmount');
  const summaryAmount = document.getElementById('summaryAmount');
  const summaryTotal = document.getElementById('summaryTotal');
  
  function updateSummary(amount) {
    selectedAmount = amount;
    summaryAmount.textContent = `EG${amount.toFixed(2)}`;
    summaryTotal.textContent = `EG${amount.toFixed(2)}`;
  }
  
  amountBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      amountBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = '#ddd';
        b.style.background = 'white';
      });
      this.classList.add('active');
      this.style.borderColor = '#ff9900';
      this.style.background = '#fff3e6';
      customAmountInput.value = '';
      updateSummary(parseFloat(this.dataset.amount));
    });
  });
  
  customAmountInput.addEventListener('input', function() {
    const amount = parseFloat(this.value);
    if (amount >= 10 && amount <= 5000) {
      amountBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = '#ddd';
        b.style.background = 'white';
      });
      updateSummary(amount);
    }
  });
  
  // Purchase button
  const purchaseBtn = document.getElementById('purchaseGiftCardBtn');
  purchaseBtn.addEventListener('click', function() {
    const recipientName = document.getElementById('recipientName').value;
    const recipientEmail = document.getElementById('recipientEmail').value;
    
    if (!recipientName || !recipientEmail) {
      alert('Please enter recipient name and email');
      return;
    }
    
    if (!recipientEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Show success message
    const message = `Gift card of EG${selectedAmount.toFixed(2)} will be sent to ${recipientEmail}`;
    showSuccess(message);
    
    // Reset form
    setTimeout(() => {
      document.getElementById('recipientName').value = '';
      document.getElementById('recipientEmail').value = '';
      document.getElementById('giftMessage').value = '';
      document.getElementById('deliveryDate').value = '';
    }, 2000);
  });
}

// Registry Functions
function createRegistry(type) {
  const typeNames = {
    'wedding': 'Wedding',
    'baby': 'Baby',
    'birthday': 'Birthday'
  };
  
  const typeEmojis = {
    'wedding': '💍',
    'baby': '👶',
    'birthday': '🎂'
  };
  
  // Create modal overlay
  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'registryCreationModal';
  modalOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: 20px;
  `;
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    border-radius: 12px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 40px;
    position: relative;
  `;
  
  modalContent.innerHTML = `
    <button id="closeRegistryModal" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 28px; cursor: pointer; color: #666; line-height: 1;">&times;</button>
    
    <div style="text-align: center; margin-bottom: 30px;">
      <div style="font-size: 64px; margin-bottom: 10px;">${typeEmojis[type]}</div>
      <h2 style="font-size: 28px; margin-bottom: 10px;">Create ${typeNames[type]} Registry</h2>
      <p style="color: #666;">Fill in the details below to create your registry</p>
    </div>
    
    <form id="registryCreationForm">
      <!-- Event Details -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Event Details</h3>
        <div style="display: grid; gap: 15px;">
          <input type="text" id="eventName" placeholder="${typeNames[type]} Event Name" required style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
          <input type="date" id="eventDate" required style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
          ${type === 'wedding' ? `
            <input type="text" id="partnerName" placeholder="Partner's Name" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
          ` : ''}
          ${type === 'baby' ? `
            <select id="babyGender" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
              <option value="">Baby Gender (Optional)</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
              <option value="surprise">Surprise</option>
            </select>
          ` : ''}
        </div>
      </div>
      
      <!-- Personal Information -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Your Information</h3>
        <div style="display: grid; gap: 15px;">
          <input type="text" id="registrantName" placeholder="Your Full Name" required style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
          <input type="email" id="registrantEmail" placeholder="Your Email" required style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
          <input type="tel" id="registrantPhone" placeholder="Phone Number" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px;">
          <textarea id="registryMessage" placeholder="Message to Gift Givers (Optional)" rows="3" style="padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; resize: vertical;"></textarea>
        </div>
      </div>
      
      <!-- Registry Preferences -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Registry Preferences</h3>
        <div style="display: grid; gap: 12px;">
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="allowGroupGifting" checked style="width: 18px; height: 18px; cursor: pointer;">
            <span>Allow group gifting for expensive items</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="hideAddress" style="width: 18px; height: 18px; cursor: pointer;">
            <span>Keep shipping address private</span>
          </label>
          <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
            <input type="checkbox" id="sendUpdates" checked style="width: 18px; height: 18px; cursor: pointer;">
            <span>Send me email updates when items are purchased</span>
          </label>
        </div>
      </div>
      
      <button type="submit" class="hero-btn" style="width: 100%; padding: 15px; font-size: 18px; background: #ff9900; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
        Create Registry
      </button>
    </form>
  `;
  
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);
  
  // Close modal function
  function closeModal() {
    modalOverlay.remove();
    document.body.style.overflow = '';
  }
  
  // Close button handler
  document.getElementById('closeRegistryModal').addEventListener('click', closeModal);
  
  // Click outside to close
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
  
  // Form submission
  document.getElementById('registryCreationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const registrantName = document.getElementById('registrantName').value;
    const registrantEmail = document.getElementById('registrantEmail').value;
    
    if (!eventName || !eventDate || !registrantName || !registrantEmail) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Show success message
    showSuccess(`${typeNames[type]} Registry created successfully! You can now start adding items.`);
    
    // Close modal
    closeModal();
    
    // In a real app, this would save to database and redirect to registry management page
    setTimeout(() => {
      showSuccess('Redirecting to your registry...');
    }, 2000);
  });
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function searchRegistry() {
  const name = document.getElementById('registrySearchName').value;
  const type = document.getElementById('registrySearchType').value;
  
  if (!name) {
    alert('Please enter a registrant name');
    return;
  }
  
  showSuccess(`Searching for ${name}'s registry...`);
  
  // In a real app, this would query the database and show results
  setTimeout(() => {
    showSuccess('In a real application, this would display matching registries.');
  }, 1500);
}

// Help Center Page
function renderHelpCenterPage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  appContent.innerHTML = `
    <main class="main-content">
      <section class="help-center-section" style="padding: 40px 20px; max-width: 1200px; margin: 0 auto;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 50px;">
          <h1 style="font-size: 36px; margin-bottom: 15px;">Help Center</h1>
          <p style="font-size: 18px; color: #666; margin-bottom: 30px;">
            Find answers to your questions and get the support you need
          </p>
          
          <!-- Search Box -->
          <div style="max-width: 600px; margin: 0 auto;">
            <input 
              type="text" 
              id="helpSearch" 
              placeholder="Search for help articles, FAQs, or topics..." 
              style="width: 100%; padding: 15px 20px; border: 2px solid #ddd; border-radius: 25px; font-size: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
            >
          </div>
        </div>
        
        <!-- Quick Links -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 50px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px; text-align: center; color: white; cursor: pointer;" onclick="scrollToSection('orders')">
            <div style="font-size: 48px; margin-bottom: 10px;">📦</div>
            <h3 style="font-size: 20px; margin-bottom: 5px;">Orders & Tracking</h3>
            <p style="font-size: 14px; opacity: 0.9;">Track, modify, or cancel orders</p>
          </div>
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 30px; border-radius: 12px; text-align: center; color: white; cursor: pointer;" onclick="scrollToSection('shipping')">
            <div style="font-size: 48px; margin-bottom: 10px;">🚚</div>
            <h3 style="font-size: 20px; margin-bottom: 5px;">Shipping & Delivery</h3>
            <p style="font-size: 14px; opacity: 0.9;">Shipping options and times</p>
          </div>
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 30px; border-radius: 12px; text-align: center; color: white; cursor: pointer;" onclick="scrollToSection('returns')">
            <div style="font-size: 48px; margin-bottom: 10px;">↩️</div>
            <h3 style="font-size: 20px; margin-bottom: 5px;">Returns & Refunds</h3>
            <p style="font-size: 14px; opacity: 0.9;">Return policy and process</p>
          </div>
          <div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); padding: 30px; border-radius: 12px; text-align: center; color: white; cursor: pointer;" onclick="scrollToSection('account')">
            <div style="font-size: 48px; margin-bottom: 10px;">👤</div>
            <h3 style="font-size: 20px; margin-bottom: 5px;">Account & Security</h3>
            <p style="font-size: 14px; opacity: 0.9;">Manage your account</p>
          </div>
        </div>
        
        <!-- FAQ Sections -->
        <div style="max-width: 900px; margin: 0 auto;">
          <h2 style="font-size: 28px; margin-bottom: 30px; text-align: center;">Frequently Asked Questions</h2>
          
          <!-- Orders & Tracking -->
          <div id="orders" class="faq-category" style="margin-bottom: 40px;">
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">📦 Orders & Tracking</h3>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>How can I track my order?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                You can track your order by going to "Your Orders" in your account. Click on the order you want to track and you'll see real-time tracking information. You'll also receive tracking updates via email.
              </div>
            </div>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>Can I cancel or modify my order?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                You can cancel or modify your order within 1 hour of placing it. Go to "Your Orders", select the order, and click "Cancel Order" or "Modify Order". After this window, please contact customer service for assistance.
              </div>
            </div>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>What if my order hasn't arrived?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                If your order hasn't arrived within the estimated delivery time, first check the tracking information. If it shows delivered but you haven't received it, check with neighbors or building management. Contact us within 48 hours and we'll investigate and resolve the issue.
              </div>
            </div>
          </div>
          
          <!-- Shipping & Delivery -->
          <div id="shipping" class="faq-category" style="margin-bottom: 40px;">
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">🚚 Shipping & Delivery</h3>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>What are the shipping options and costs?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                We offer several shipping options:<br>
                • Standard Shipping (5-7 business days): Free on orders over EG100<br>
                • Express Shipping (2-3 business days): EG15<br>
                • Next-Day Delivery: EG25<br>
                Shipping costs are calculated at checkout based on your location and order weight.
              </div>
            </div>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>Do you ship internationally?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                Yes! We ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs fees and import duties may apply and are the responsibility of the customer.
              </div>
            </div>
          </div>
          
          <!-- Returns & Refunds -->
          <div id="returns" class="faq-category" style="margin-bottom: 40px;">
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">↩️ Returns & Refunds</h3>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>What is your return policy?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                We offer a 30-day return policy for most items. Products must be unused, in original packaging, and with all tags attached. Some items like personalized products, perishables, and intimate items cannot be returned. Registry items have a 180-day return window.
              </div>
            </div>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>How do I return an item?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                To return an item:<br>
                1. Go to "Your Orders" and select the item<br>
                2. Click "Return Item" and select a reason<br>
                3. Print the prepaid return label<br>
                4. Pack the item securely and attach the label<br>
                5. Drop off at any authorized shipping location<br>
                You'll receive a refund within 5-7 business days after we receive your return.
              </div>
            </div>
          </div>
          
          <!-- Account & Security -->
          <div id="account" class="faq-category" style="margin-bottom: 40px;">
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">👤 Account & Security</h3>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>How do I reset my password?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                Click on "Sign In" and then "Forgot Password". Enter your email address and we'll send you a password reset link. Follow the instructions in the email to create a new password. For security, the link expires after 24 hours.
              </div>
            </div>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>How do I update my account information?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                Sign in to your account and click on your name in the top right corner. Select "Account Settings" to update your email, password, shipping addresses, and payment methods. Changes are saved automatically.
              </div>
            </div>
          </div>
          
          <!-- Payment -->
          <div id="payment" class="faq-category" style="margin-bottom: 40px;">
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">💳 Payment & Billing</h3>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>What payment methods do you accept?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, Apple Pay, Google Pay, and Nexus Gift Cards. All transactions are encrypted and secure.
              </div>
            </div>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>Is my payment information secure?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                Yes! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers. All transactions are processed through secure, PCI-compliant payment gateways.
              </div>
            </div>
          </div>
          
          <!-- Products -->
          <div id="products" class="faq-category" style="margin-bottom: 40px;">
            <h3 style="font-size: 24px; margin-bottom: 20px; color: #333; border-bottom: 2px solid #ff9900; padding-bottom: 10px;">🛍️ Products & Stock</h3>
            
            <div class="faq-item" style="background: white; border: 1px solid #ddd; border-radius: 8px; margin-bottom: 15px; overflow: hidden;">
              <div class="faq-question" style="padding: 20px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center;" onclick="toggleFAQ(this)">
                <span>When will out-of-stock items be available?</span>
                <span style="font-size: 24px; transition: transform 0.3s;">+</span>
              </div>
              <div class="faq-answer" style="display: none; padding: 0 20px 20px 20px; color: #666; line-height: 1.6;">
                Restock dates vary by product. You can sign up for email notifications on the product page to be alerted when an item is back in stock. We typically restock popular items within 2-4 weeks.
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Section -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 30px; border-radius: 12px; margin-top: 60px; text-align: center; color: white;">
          <h2 style="font-size: 32px; margin-bottom: 15px;">Still Need Help?</h2>
          <p style="font-size: 18px; margin-bottom: 30px; opacity: 0.9;">Our customer support team is here to assist you</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; max-width: 800px; margin: 0 auto;">
            <div style="background: rgba(255,255,255,0.2); padding: 25px; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px; margin-bottom: 10px;">📧</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Email Support</h3>
              <p style="font-size: 14px; margin-bottom: 10px; opacity: 0.9;">support@nexus.com</p>
              <p style="font-size: 12px; opacity: 0.8;">Response within 24 hours</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.2); padding: 25px; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px; margin-bottom: 10px;">💬</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Live Chat</h3>
              <button class="hero-btn" style="background: white; color: #667eea; padding: 10px 20px; margin-top: 10px;" onclick="alert('Live chat feature coming soon!')">Start Chat</button>
              <p style="font-size: 12px; opacity: 0.8; margin-top: 10px;">Available 9 AM - 9 PM</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.2); padding: 25px; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 36px; margin-bottom: 10px;">📞</div>
              <h3 style="font-size: 18px; margin-bottom: 10px;">Phone Support</h3>
              <p style="font-size: 14px; margin-bottom: 10px; opacity: 0.9;">1-800-NEXUS-HELP</p>
              <p style="font-size: 12px; opacity: 0.8;">Mon-Fri: 8 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
  
  // Initialize FAQ functionality
  initializeHelpCenter();
}

// Help Center Initialization
function initializeHelpCenter() {
  // Search functionality
  const searchInput = document.getElementById('helpSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (question.includes(query) || answer.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = query ? 'none' : 'block';
        }
      });
    });
  }
}

// Toggle FAQ Answer
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('span:last-child');
  
  if (answer.style.display === 'none' || !answer.style.display) {
    answer.style.display = 'block';
    icon.textContent = '−';
    icon.style.transform = 'rotate(0deg)';
  } else {
    answer.style.display = 'none';
    icon.textContent = '+';
    icon.style.transform = 'rotate(0deg)';
  }
}

// Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    // Remove highlight from all sections first
    const allSections = document.querySelectorAll('.faq-category');
    allSections.forEach(s => s.classList.remove('faq-highlight'));
    
    // Calculate the position with offset for sticky header
    const headerOffset = 170; // Account for sticky header height + some padding
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    // Scroll to the section with offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Add highlight effect after a short delay to ensure scroll has started
    setTimeout(() => {
      section.classList.add('faq-highlight');
      
      // Remove highlight after animation completes
      setTimeout(() => {
        section.classList.remove('faq-highlight');
      }, 2000);
    }, 500);
  }
}

function renderInfoPage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  const route = window.location.hash.slice(1);
  const titles = {
    'customer-service': 'Customer Service',
    'sell': 'Sell on Nexus'
  };
  
  appContent.innerHTML = `
    <main class="main-content">
      <section class="info-section" style="padding: 60px 20px; text-align: center; max-width: 800px; margin: 0 auto;">
        <h1 style="font-size: 36px; margin-bottom: 20px;">${titles[route] || 'Information'}</h1>
        <p style="font-size: 18px; color: #666; margin-bottom: 30px;">
          This is a demo page. In a real Nexus, this would contain ${titles[route] || 'information'} content.
        </p>
        <button class="hero-btn" onclick="window.location.hash='#home'" style="padding: 12px 30px; font-size: 16px;">
          Back to Home
        </button>
      </section>
    </main>
  `;
}

// Handle hash change
window.addEventListener('hashchange', function() {
  const hash = window.location.hash.slice(1) || 'home';
  navigate(hash);
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Refresh cart data with current product information
  refreshCartData();
  
  initializeCommon();
  initializePlaceOrder();
  initializeInputFormatters();
  initializeSignIn();

  // Initialize SPA Router
  const hash = window.location.hash.slice(1) || 'home';
  navigate(hash);
  
  console.log('SPA initialized. Current route:', hash);
});
// Enhanced Gift Card Page Initialization
function initializeEnhancedGiftCardPage() {
  let selectedDesign = 'classic';
  let selectedGradient = 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)';
  let selectedText = 'Gift Card';
  let selectedAmount = 100;
  let quantity = 1;
  
  // Tab switching
  const tabs = document.querySelectorAll('.gift-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.style.borderBottom = '3px solid transparent';
        t.style.color = '#666';
      });
      this.classList.add('active');
      this.style.borderBottom = '3px solid #ff9900';
      this.style.color = '#ff9900';
      
      const tabName = this.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
      });
      document.getElementById(`${tabName}Tab`).style.display = 'block';
    });
  });
  
  // Design selection with preview update
  const designCards = document.querySelectorAll('.gift-card-design');
  const cardPreview = document.getElementById('cardPreview');
  const previewText = document.getElementById('previewText');
  
  designCards.forEach(card => {
    card.addEventListener('click', function() {
      designCards.forEach(c => {
        c.classList.remove('active');
        c.style.borderColor = 'transparent';
      });
      this.classList.add('active');
      this.style.borderColor = '#ff9900';
      
      selectedDesign = this.dataset.design;
      selectedGradient = this.dataset.gradient;
      selectedText = this.dataset.text;
      
      cardPreview.style.background = selectedGradient;
      previewText.textContent = selectedText;
    });
    
    card.addEventListener('mouseenter', function() {
      if (!this.classList.contains('active')) {
        this.style.borderColor = '#ffc266';
      }
    });
    card.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.borderColor = 'transparent';
      }
    });
  });
  
  // Amount selection with preview update
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('customAmount');
  const previewAmount = document.getElementById('previewAmount');
  
  function updateSummary() {
    const amount = selectedAmount;
    const qty = quantity;
    const subtotal = amount * qty;
    
    // Calculate discount
    let discount = 0;
    if (qty >= 10) {
      discount = subtotal * 0.10; // 10% off for 10+
    } else if (qty >= 5) {
      discount = subtotal * 0.05; // 5% off for 5+
    }
    
    const total = subtotal - discount;
    
    document.getElementById('summaryAmount').textContent = `EG${amount.toFixed(2)}`;
    document.getElementById('summaryQty').textContent = qty;
    document.getElementById('summaryDiscount').textContent = discount > 0 ? `-EG${discount.toFixed(2)}` : 'EG0.00';
    document.getElementById('summaryTotal').textContent = `EG${total.toFixed(2)}`;
    previewAmount.textContent = `EG${amount}`;
  }
  
  amountBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      amountBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = '#ddd';
        b.style.background = 'white';
      });
      this.classList.add('active');
      this.style.borderColor = '#ff9900';
      this.style.background = '#fff3e6';
      customAmountInput.value = '';
      selectedAmount = parseFloat(this.dataset.amount);
      updateSummary();
    });
  });
  
  customAmountInput.addEventListener('input', function() {
    const amount = parseFloat(this.value);
    if (amount >= 10 && amount <= 5000) {
      amountBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = '#ddd';
        b.style.background = 'white';
      });
      selectedAmount = amount;
      updateSummary();
    }
  });
  
  // Quantity controls
  const qtyInput = document.getElementById('giftCardQty');
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  
  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyInput.value = quantity;
      updateSummary();
    }
  });
  
  increaseBtn.addEventListener('click', () => {
    if (quantity < 50) {
      quantity++;
      qtyInput.value = quantity;
      updateSummary();
    }
  });
  
  qtyInput.addEventListener('change', function() {
    let val = parseInt(this.value);
    if (val < 1) val = 1;
    if (val > 50) val = 50;
    quantity = val;
    this.value = val;
    updateSummary();
  });
  
  // Purchase button
  const purchaseBtn = document.getElementById('purchaseGiftCardBtn');
  purchaseBtn.addEventListener('click', function() {
    const recipientName = document.getElementById('recipientName').value;
    const recipientEmail = document.getElementById('recipientEmail').value;
    const senderName = document.getElementById('senderName').value;
    const senderEmail = document.getElementById('senderEmail').value;
    
    if (!recipientName || !recipientEmail || !senderName || !senderEmail) {
      alert('Please fill in all required fields (marked with *)');
      return;
    }
    
    if (!recipientEmail.includes('@') || !senderEmail.includes('@')) {
      alert('Please enter valid email addresses');
      return;
    }
    
    const total = (selectedAmount * quantity) - (quantity >= 10 ? (selectedAmount * quantity * 0.10) : quantity >= 5 ? (selectedAmount * quantity * 0.05) : 0);
    showSuccess(`${quantity} gift card(s) totaling EG${total.toFixed(2)} will be sent to ${recipientEmail}`);
    
    // Reset form
    setTimeout(() => {
      document.getElementById('recipientName').value = '';
      document.getElementById('recipientEmail').value = '';
      document.getElementById('giftMessage').value = '';
      document.getElementById('deliveryDate').value = '';
      document.getElementById('senderName').value = '';
      document.getElementById('senderEmail').value = '';
      quantity = 1;
      qtyInput.value = 1;
      updateSummary();
    }, 2000);
  });
  
  // Print Preview button
  const printBtn = document.getElementById('printPreviewBtn');
  printBtn.addEventListener('click', () => {
    showSuccess('Print preview would open in a new window. This is a demo feature.');
  });
  
  // Balance Check
  const checkBalanceBtn = document.getElementById('checkBalanceBtn');
  checkBalanceBtn.addEventListener('click', () => {
    const code = document.getElementById('balanceCardCode').value;
    const pin = document.getElementById('balanceCardPin').value;
    
    if (!code || !pin) {
      alert('Please enter both gift card code and PIN');
      return;
    }
    
    // Simulate balance check
    const randomBalance = (Math.random() * 500 + 50).toFixed(2);
    document.getElementById('balanceAmount').textContent = `EG${randomBalance}`;
    document.getElementById('balanceResult').style.display = 'block';
    showSuccess('Balance retrieved successfully!');
  });
  
  // Redeem Card
  const redeemBtn = document.getElementById('redeemCardBtn');
  redeemBtn.addEventListener('click', () => {
    const code = document.getElementById('redeemCardCode').value;
    const pin = document.getElementById('redeemCardPin').value;
    
    if (!code || !pin) {
      alert('Please enter both gift card code and PIN');
      return;
    }
    
    if (!currentUser) {
      alert('Please sign in to redeem gift cards');
      return;
    }
    
    const randomAmount = (Math.random() * 500 + 50).toFixed(2);
    showSuccess(`EG${randomAmount} has been added to your account balance!`);
    
    setTimeout(() => {
      document.getElementById('redeemCardCode').value = '';
      document.getElementById('redeemCardPin').value = '';
    }, 2000);
  });
  
  // Initial summary update
  updateSummary();
}
