// Shared JavaScript for all pages
// Product Data Structure
const products = [
  {
    id: 0,
    name: 'Gaming Laptop Pro 15"',
    price: 899.99,
    originalPrice: 1299.99,
    category: "Electronics",
    image: "images/laptop.jpg",
    rating: 5,
    reviews: 2345,
    description:
      "High-performance gaming laptop with RTX graphics, 16GB RAM, and 512GB SSD. Perfect for gaming and professional work.",
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
    description:
      "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
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
    description:
      "Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life.",
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
    description:
      "Feature-rich smartwatch with health tracking, GPS, and water resistance up to 50m.",
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
    description:
      "Professional tablet with stunning display, powerful processor, and support for Apple Pencil.",
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
    description:
      "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery.",
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
    description:
      "RGB mechanical keyboard with customizable keys, anti-ghosting technology, and ergonomic design.",
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
    description:
      "Crystal-clear 4K monitor with HDR support, fast refresh rate, and adjustable stand.",
    badge: null,
    stock: 8,
  },
  {
    id: 8,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    category: "Fashion",
    image: "images/tshirt.jpg",
    rating: 4,
    reviews: 5678,
    description:
      "Comfortable cotton t-shirt with modern fit, available in multiple colors and sizes.",
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
    description:
      "Classic fit jeans with stretch fabric, durable construction, and timeless style.",
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
    description:
      "Professional running shoes with advanced cushioning, breathable mesh, and superior traction.",
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
    description:
      "Insulated winter jacket with water-resistant exterior and cozy fleece lining.",
    badge: null,
    stock: 15,
  },
  {
    id: 12,
    name: "Espresso Coffee Maker",
    price: 159.99,
    category: "Home & Kitchen",
    image: "images/coffee-maker.jpg",
    rating: 5,
    reviews: 3456,
    description:
      "Professional espresso machine with milk frother, programmable settings, and compact design.",
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
    description:
      "High-powered blender with multiple speed settings, perfect for smoothies and food prep.",
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
    description:
      "Smart robot vacuum with app control, mapping technology, and self-emptying base.",
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
    description:
      "Large capacity air fryer with digital display, multiple cooking modes, and easy-clean design.",
    badge: null,
    stock: 14,
  },
  {
    id: 16,
    name: "The Great Gatsby",
    price: 12.99,
    category: "Books",
    image: "images/gatsby.jpg",
    rating: 5,
    reviews: 1234,
    description:
      "Classic American novel by F. Scott Fitzgerald, a masterpiece of American literature.",
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
    description:
      "Harper Lee's Pulitzer Prize-winning novel about racial injustice in the American South.",
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
    description:
      "Dystopian novel about totalitarianism and surveillance, a timeless classic.",
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
    description:
      "Jane Austen's beloved romantic novel about Elizabeth Bennet and Mr. Darcy.",
    stock: 110,
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
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
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
    });
  }

  if (switchToSignIn) {
    switchToSignIn.addEventListener("click", () => {
      document.getElementById("createAccountTab").style.display = "none";
      document.getElementById("signInTab").style.display = "block";
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
    signOutBtn.addEventListener("click", signOut);
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
  const product = products[productId];
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
  'deals': {
    title: 'Today\'s Deals - Nexus',
    render: () => renderCategoryPage('Deals')
  },
  'orders': {
    title: 'Your Orders - Nexus',
    render: renderOrdersPage
  },
  'customer-service': {
    title: 'Customer Service - Nexus',
    render: renderInfoPage
  },
  'registry': {
    title: 'Registry - Nexus',
    render: renderInfoPage
  },
  'gift-cards': {
    title: 'Gift Cards - Nexus',
    render: renderInfoPage
  },
  'sell': {
    title: 'Sell on Nexus',
    render: renderInfoPage
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
  
  // Render products for each section
  setTimeout(() => {
    // Get products with deals (those with originalPrice)
    const dealsProducts = products.filter(p => p.originalPrice).slice(0, 4);
    renderProductsInGrid(dealsProducts, 'dealsGrid');
    
    // Render category products
    renderProductsByCategory('Electronics', 'electronicsGrid', 4);
    renderProductsByCategory('Fashion', 'fashionGrid', 4);
    renderProductsByCategory('Home & Kitchen', 'homeKitchenGrid', 4);
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

function renderInfoPage() {
  const appContent = document.getElementById('app-content');
  if (!appContent) return;
  
  const route = window.location.hash.slice(1);
  const titles = {
    'customer-service': 'Customer Service',
    'registry': 'Registry',
    'gift-cards': 'Gift Cards',
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
