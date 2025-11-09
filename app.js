// Shared JavaScript for all pages
// Product Data Structure
const products = [
  {
    id: 0,
    name: 'Gaming Laptop Pro 15"',
    price: 899.99,
    originalPrice: 1299.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 5,
    reviews: 2345,
    description:
      "High-performance gaming laptop with RTX graphics, 16GB RAM, and 512GB SSD. Perfect for gaming and professional work.",
    badge: "-30%",
  },
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 149.99,
    originalPrice: 199.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 4,
    reviews: 1892,
    description:
      "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
    badge: "-25%",
  },
  {
    id: 2,
    name: "Smartphone X Pro 256GB",
    price: 599.99,
    originalPrice: 999.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 5,
    reviews: 5234,
    description:
      "Latest flagship smartphone with advanced camera system, 5G connectivity, and all-day battery life.",
    badge: "-40%",
  },
  {
    id: 3,
    name: "Smart Watch Series 8",
    price: 239.99,
    originalPrice: 299.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 4,
    reviews: 3456,
    description:
      "Feature-rich smartwatch with health tracking, GPS, and water resistance up to 50m.",
    badge: "-20%",
  },
  {
    id: 4,
    name: 'Tablet Pro 12.9"',
    price: 449.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 5,
    reviews: 4123,
    description:
      "Professional tablet with stunning display, powerful processor, and support for Apple Pencil.",
    badge: null,
  },
  {
    id: 5,
    name: "Bluetooth Speaker Premium",
    price: 79.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 4,
    reviews: 2789,
    description:
      "Portable Bluetooth speaker with 360-degree sound, waterproof design, and 20-hour battery.",
    badge: null,
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 5,
    reviews: 1567,
    description:
      "RGB mechanical keyboard with customizable keys, anti-ghosting technology, and ergonomic design.",
    badge: null,
  },
  {
    id: 7,
    name: '4K Ultra HD Monitor 27"',
    price: 349.99,
    category: "Electronics",
    image: "1.jpg",
    rating: 4,
    reviews: 3234,
    description:
      "Crystal-clear 4K monitor with HDR support, fast refresh rate, and adjustable stand.",
    badge: null,
  },
  {
    id: 8,
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    category: "Fashion",
    image: "1.jpg",
    rating: 4,
    reviews: 5678,
    description:
      "Comfortable cotton t-shirt with modern fit, available in multiple colors and sizes.",
    badge: null,
  },
  {
    id: 9,
    name: "Classic Fit Jeans",
    price: 49.99,
    category: "Fashion",
    image: "1.jpg",
    rating: 5,
    reviews: 4234,
    description:
      "Classic fit jeans with stretch fabric, durable construction, and timeless style.",
    badge: null,
  },
  {
    id: 10,
    name: "Running Sneakers Pro",
    price: 89.99,
    category: "Fashion",
    image: "1.jpg",
    rating: 5,
    reviews: 6789,
    description:
      "Professional running shoes with advanced cushioning, breathable mesh, and superior traction.",
    badge: null,
  },
  {
    id: 11,
    name: "Winter Jacket Warm",
    price: 79.99,
    category: "Fashion",
    image: "1.jpg",
    rating: 4,
    reviews: 2345,
    description:
      "Insulated winter jacket with water-resistant exterior and cozy fleece lining.",
    badge: null,
  },
  {
    id: 12,
    name: "Espresso Coffee Maker",
    price: 159.99,
    category: "Home & Kitchen",
    image: "1.jpg",
    rating: 5,
    reviews: 3456,
    description:
      "Professional espresso machine with milk frother, programmable settings, and compact design.",
    badge: null,
  },
  {
    id: 13,
    name: "Professional Blender",
    price: 99.99,
    category: "Home & Kitchen",
    image: "1.jpg",
    rating: 4,
    reviews: 2123,
    description:
      "High-powered blender with multiple speed settings, perfect for smoothies and food prep.",
    badge: null,
  },
  {
    id: 14,
    name: "Robot Vacuum Cleaner",
    price: 299.99,
    category: "Home & Kitchen",
    image: "1.jpg",
    rating: 5,
    reviews: 4567,
    description:
      "Smart robot vacuum with app control, mapping technology, and self-emptying base.",
    badge: null,
  },
  {
    id: 15,
    name: "Digital Air Fryer 5.5L",
    price: 119.99,
    category: "Home & Kitchen",
    image: "1.jpg",
    rating: 4,
    reviews: 3789,
    description:
      "Large capacity air fryer with digital display, multiple cooking modes, and easy-clean design.",
    badge: null,
  },
  {
    id: 16,
    name: "The Great Gatsby",
    price: 12.99,
    category: "Books",
    image: "1.jpg",
    rating: 5,
    reviews: 1234,
    description:
      "Classic American novel by F. Scott Fitzgerald, a masterpiece of American literature.",
    badge: null,
  },
  {
    id: 17,
    name: "To Kill a Mockingbird",
    price: 14.99,
    category: "Books",
    image: "1.jpg",
    rating: 5,
    reviews: 2345,
    description:
      "Harper Lee's Pulitzer Prize-winning novel about racial injustice in the American South.",
    badge: null,
  },
  {
    id: 18,
    name: "1984 by George Orwell",
    price: 13.99,
    category: "Books",
    image: "1.jpg",
    rating: 5,
    reviews: 3456,
    description:
      "Dystopian novel about totalitarianism and surveillance, a timeless classic.",
    badge: null,
  },
  {
    id: 19,
    name: "Pride and Prejudice",
    price: 11.99,
    category: "Books",
    image: "1.jpg",
    rating: 5,
    reviews: 4567,
    description:
      "Jane Austen's beloved romantic novel about Elizabeth Bennet and Mr. Darcy.",
    badge: null,
  },
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// User Authentication
let currentUser = null;
let orders = [];

// Load from localStorage on initialization
try {
  const storedUser = localStorage.getItem("currentUser");
  const storedOrders = localStorage.getItem("orders");
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
  }
  if (storedOrders) {
    orders = JSON.parse(storedOrders);
  }
} catch (e) {
  console.error("Error loading user data:", e);
  currentUser = null;
  orders = [];
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

  // Make logo clickable
  const logo = document.querySelector(".logo");
  if (logo && !logo.hasAttribute("onclick")) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
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
        window.location.href = "orders.html";
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

function signIn(email, password, name) {
  // Simple authentication (in real app, this would check with a server)
  currentUser = {
    email: email,
    name: name || email.split("@")[0],
    signInDate: new Date().toISOString(),
  };
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateHeaderUserInfo();
  closeSignInModal();

  // Show success message
  alert(`Welcome back, ${currentUser.name}!`);
}

function signOut() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateHeaderUserInfo();

  const signInItem = document.querySelector(".header-item:not(.cart)");
  if (signInItem) {
    const line1 = signInItem.querySelector(".header-line-1");
    if (line1) line1.textContent = "Hello, Sign in";
  }

  alert("You have been signed out.");
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

  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signInEmail").value;
      const password = document.getElementById("signInPassword").value;
      const name =
        document.getElementById("signInName")?.value || email.split("@")[0];

      if (email && password) {
        signIn(email, password, name);
        signInForm.reset();
      }
    });
  }

  if (createAccountForm) {
    createAccountForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("createName").value;
      const email = document.getElementById("createEmail").value;
      const password = document.getElementById("createPassword").value;

      if (name && email && password) {
        signIn(email, password, name);
        createAccountForm.reset();
        alert("Account created successfully!");
      }
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener("click", signOut);
  }
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
    status: "Processing",
  };

  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
  return order;
}

function getOrders() {
  return orders;
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
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

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
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartCount();
      if (typeof updateCartDisplay === "function") {
        updateCartDisplay();
      }
    }
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
                    <img src="${item.image}" alt="${item.name}">
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
                        <button class="remove-btn" onclick="removeFromCart(${
                          item.id
                        })">Remove</button>
                    </div>
                </div>
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

  modalBody.innerHTML = `
        <div class="product-detail">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="detail-info">
                <h2>${product.name}</h2>
                <div class="detail-rating">
                    ${"★".repeat(product.rating)}${"☆".repeat(
    5 - product.rating
  )}
                    <span>(${product.reviews.toLocaleString()} reviews)</span>
                </div>
                <div class="detail-price">
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
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
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
    alert("Your cart is empty!");
    return;
  }

  closeCart();
  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutItems = document.getElementById("checkoutItems");
  if (!checkoutModal || !checkoutItems) return;

  checkoutItems.innerHTML = cart
    .map(
      (item) => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}">
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
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", function () {
      const form = document.querySelector(".checkout-form");
      if (form && form.checkValidity()) {
        // Check if user is signed in
        if (!currentUser) {
          alert("Please sign in to place an order.");
          closeCheckoutFunc();
          openSignInModal();
          return;
        }

        const subtotal = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const tax = subtotal * 0.14;
        const total = subtotal + tax;

        const shippingInfo = {
          fullName: document.getElementById("fullName").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value,
          city: document.getElementById("city").value,
          zipCode: document.getElementById("zipCode").value,
          country: document.getElementById("country").value,
        };

        const order = saveOrder({
          items: [...cart],
          subtotal: subtotal,
          tax: tax,
          total: total,
          shippingInfo: shippingInfo,
        });

        const orderIdEl = document.getElementById("orderId");
        if (orderIdEl) orderIdEl.textContent = order.id;

        cart = [];
        saveCart();
        updateCartCount();

        closeCheckoutFunc();
        const successModal = document.getElementById("successModal");
        if (successModal) {
          successModal.classList.add("active");
        }
      } else if (form) {
        form.reportValidity();
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

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  initializeCommon();
  initializePlaceOrder();
  initializeInputFormatters();
  initializeSignIn();

  // Initialize products on index page
  if (typeof initializeProducts === "function") {
    initializeProducts();
  }

  // Initialize carousel if it exists
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 0) {
    initializeCarousel();
  }
});
