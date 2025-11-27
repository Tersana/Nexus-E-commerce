# 🏗️ System Overview - Amazon Clone

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                        │
├─────────────────────────────────────────────────────────────┤
│  index.html  │ electronics.html │ fashion.html │ books.html │
│  deals.html  │ home-kitchen.html │ orders.html │            │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    JAVASCRIPT LAYER (app.js)                 │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ AUTHENTICATION│  │  CART MGMT   │  │  ORDER MGMT  │      │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│  │ • Sign Up    │  │ • Add Item   │  │ • Save Order │      │
│  │ • Sign In    │  │ • Remove     │  │ • Get Orders │      │
│  │ • Sign Out   │  │ • Update Qty │  │ • Display    │      │
│  │ • Validate   │  │ • Validate   │  │ • Filter     │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   CHECKOUT   │  │  CATEGORIES  │  │   UI/UX      │      │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│  │ • Open       │  │ • Filter     │  │ • Errors     │      │
│  │ • Validate   │  │ • Render     │  │ • Success    │      │
│  │ • Process    │  │ • Initialize │  │ • Loading    │      │
│  │ • Confirm    │  │ • Search     │  │ • Feedback   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER (localStorage)                 │
├─────────────────────────────────────────────────────────────┤
│  • cart          → Shopping cart items                       │
│  • currentUser   → Active user session                       │
│  • orders        → All orders history                        │
│  • users         → User database                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### 1. User Registration Flow

```
User Input (Form)
      │
      ▼
Validate Email ──────────► Invalid? → Show Error
      │                           ▲
      │ Valid                     │
      ▼                           │
Validate Password ────────► Invalid? → Show Error
      │                           ▲
      │ Valid                     │
      ▼                           │
Check Duplicate ──────────► Exists? → Show Error
      │
      │ New User
      ▼
Create User Object
      │
      ▼
Save to localStorage
      │
      ▼
Set Current User
      │
      ▼
Update Header
      │
      ▼
Show Success Message
      │
      ▼
Close Modal
```

### 2. Add to Cart Flow

```
Click "Add to Cart"
      │
      ▼
Get Product by ID
      │
      ▼
Check Stock ──────────────► Out of Stock? → Show Error
      │                              ▲
      │ In Stock                     │
      ▼                              │
Check Current Qty ─────────► >= Stock? → Show Error
      │                              ▲
      │ Available                    │
      ▼                              │
Check Limit ───────────────► >= 10? → Show Error
      │
      │ OK
      ▼
Add to Cart Array
      │
      ▼
Save to localStorage
      │
      ▼
Update Cart Count
      │
      ▼
Show Button Feedback
      │
      ▼
Show Success Toast
```

### 3. Checkout Flow

```
Click "Proceed to Checkout"
      │
      ▼
Check Cart Empty ──────────► Empty? → Show Error
      │                           ▲
      │ Has Items                 │
      ▼                           │
Check User Signed In ──────► Not Signed In? → Show Error + Open Sign In
      │                           ▲
      │ Signed In                 │
      ▼                           │
Validate Stock ────────────► Insufficient? → Show Error
      │
      │ OK
      ▼
Open Checkout Modal
      │
      ▼
Display Items & Totals
      │
      ▼
User Fills Form
      │
      ▼
Click "Place Order"
      │
      ▼
Validate Form ─────────────► Invalid? → Show Errors
      │
      │ Valid
      ▼
Show Loading State
      │
      ▼
Create Order Object
      │
      ▼
Save to Orders Array
      │
      ▼
Save to localStorage
      │
      ▼
Clear Cart
      │
      ▼
Update Cart Count
      │
      ▼
Close Checkout Modal
      │
      ▼
Show Success Modal
      │
      ▼
Display Order ID
```

### 4. View Orders Flow

```
Navigate to orders.html
      │
      ▼
Check User Signed In ──────► Not Signed In? → Show "Sign In" Message
      │
      │ Signed In
      ▼
Load Orders from localStorage
      │
      ▼
Filter by User Email
      │
      ▼
Check Orders Count ────────► No Orders? → Show "No Orders" Message
      │
      │ Has Orders
      ▼
Generate Order Cards HTML
      │
      ▼
Display on Page
      │
      ▼
Show Sign Out Button
```

---

## Component Breakdown

### Authentication Module
```javascript
Functions:
├── validateEmail(email)
├── validatePassword(password)
├── showError(message, elementId)
├── showSuccess(message)
├── signIn(email, password, name)
├── signOut()
├── updateHeaderUserInfo()
├── openSignInModal()
├── closeSignInModal()
└── initializeSignIn()

Data:
├── currentUser (object)
│   ├── email
│   ├── name
│   └── signInDate
└── users (array)
    └── [user objects]
```

### Cart Module
```javascript
Functions:
├── addToCart(productId)
├── removeFromCart(productId)
├── updateQuantity(productId, change)
├── updateCartCount()
├── updateCartDisplay()
├── updateCartTotals()
├── saveCart()
├── openCart()
├── closeCart()
└── initializeCart()

Data:
└── cart (array)
    └── [product objects with quantity]
```

### Checkout Module
```javascript
Functions:
├── openCheckout()
├── closeCheckoutFunc()
├── initializePlaceOrder()
└── initializeInputFormatters()

Validation:
├── Check user signed in
├── Check cart not empty
├── Validate stock availability
├── Validate form fields
└── Process payment (simulated)
```

### Order Module
```javascript
Functions:
├── saveOrder(orderData)
├── getOrders()
└── displayOrders()

Data:
└── orders (array)
    └── [order objects]
        ├── id
        ├── date
        ├── items
        ├── subtotal
        ├── tax
        ├── total
        ├── shippingInfo
        └── status
```

### Product Module
```javascript
Data:
└── products (array)
    └── [product objects]
        ├── id
        ├── name
        ├── price
        ├── originalPrice
        ├── category
        ├── image
        ├── rating
        ├── reviews
        ├── description
        ├── badge
        └── stock

Functions:
├── renderProductsByCategory(category, containerId)
├── showProductDetail(productId)
├── closeProductModal()
├── buyNow(productId)
└── initializeCategoryPage(category)
```

---

## State Management

### Global State Variables

```javascript
// User State
let currentUser = null;           // Current logged-in user
let users = [];                   // All registered users

// Cart State
let cart = [];                    // Shopping cart items

// Order State
let orders = [];                  // All orders

// Product State
const products = [...];           // Product catalog (constant)
```

### localStorage Keys

```javascript
localStorage.cart          // Shopping cart
localStorage.currentUser   // Active session
localStorage.orders        // Order history
localStorage.users         // User database
```

---

## Event Flow

### Page Load
```
1. DOM Content Loaded
2. Load data from localStorage
3. Initialize common functions
4. Update cart count
5. Update header user info
6. Initialize search
7. Initialize cart sidebar
8. Initialize modals
9. Initialize authentication
10. Initialize page-specific content
    ├── Home: Initialize carousel
    ├── Category: Render products
    └── Orders: Display orders
```

### User Interaction Events

```
Click Events:
├── Add to Cart Button → addToCart()
├── Cart Icon → openCart()
├── Checkout Button → openCheckout()
├── Sign In Link → openSignInModal()
├── Sign Out Button → signOut()
├── Product Title → showProductDetail()
├── Quantity Buttons → updateQuantity()
├── Remove Button → removeFromCart()
└── Place Order → initializePlaceOrder()

Form Events:
├── Sign In Submit → signIn()
├── Create Account Submit → signIn()
└── Checkout Submit → Place Order

Input Events:
├── Search Input → performSearch()
├── Category Select → performSearch()
└── Card Number Input → Format input
```

---

## Security Considerations

### Current Implementation (Demo)
```
✓ Input validation
✓ Email format checking
✓ Password length requirement
✓ Duplicate email prevention
✓ Session management
✓ User-specific data filtering

✗ Plain text passwords (localStorage)
✗ No encryption
✗ No server-side validation
✗ No CSRF protection
✗ No rate limiting
✗ No XSS protection
```

### Production Requirements
```
Required:
├── Backend API (Node.js/Python/PHP)
├── Database (MongoDB/PostgreSQL)
├── Password hashing (bcrypt)
├── JWT authentication
├── HTTPS enforcement
├── Input sanitization
├── CSRF tokens
├── Rate limiting
├── Email verification
└── Payment gateway integration
```

---

## Performance Optimization

### Current Optimizations
```
✓ LocalStorage for fast data access
✓ Event delegation where possible
✓ Minimal DOM manipulation
✓ Efficient array operations
✓ Image fallbacks
```

### Future Optimizations
```
Recommended:
├── Lazy loading images
├── Virtual scrolling for products
├── Debounced search
├── Cached product data
├── Service worker for offline
├── Code splitting
├── Minification
└── CDN for assets
```

---

## Browser Compatibility

### Supported Features
```
✓ ES6 JavaScript
✓ LocalStorage API
✓ Fetch API (not used yet)
✓ CSS Grid/Flexbox
✓ Modern selectors
```

### Minimum Requirements
```
Chrome:  v60+
Firefox: v55+
Safari:  v11+
Edge:    v79+
```

---

## File Dependencies

```
index.html
├── styles.css
└── app.js
    ├── products (data)
    ├── cart (data)
    ├── users (data)
    ├── orders (data)
    └── localStorage

electronics.html
├── styles.css
└── app.js (same)

fashion.html
├── styles.css
└── app.js (same)

... (all pages share same structure)
```

---

## API Surface (Functions)

### Public Functions (Global Scope)
```javascript
// Authentication
signIn(email, password, name)
signOut()
openSignInModal()
closeSignInModal()

// Cart
addToCart(productId)
removeFromCart(productId)
updateQuantity(productId, change)
openCart()
closeCart()

// Checkout
openCheckout()
closeCheckoutFunc()

// Products
showProductDetail(productId)
closeProductModal()
buyNow(productId)

// Orders
displayOrders()
closeSuccessModal()

// UI
showError(message, elementId)
showSuccess(message)
```

---

## Testing Strategy

### Unit Tests (Recommended)
```javascript
// Authentication
test('validateEmail returns true for valid email')
test('validatePassword requires min 6 characters')
test('signIn creates user session')

// Cart
test('addToCart increases quantity')
test('addToCart respects stock limits')
test('updateQuantity removes at 0')

// Checkout
test('openCheckout requires sign-in')
test('checkout validates stock')

// Orders
test('displayOrders filters by user')
test('saveOrder creates unique ID')
```

### Integration Tests (Recommended)
```javascript
test('Complete purchase flow')
test('User registration to order')
test('Cart persistence across pages')
test('Order history after purchase')
```

---

## Deployment Checklist

### Before Deployment
- [ ] Generate/add all product images
- [ ] Test all features
- [ ] Check browser console for errors
- [ ] Verify responsive design
- [ ] Test on multiple browsers
- [ ] Optimize images
- [ ] Minify JavaScript
- [ ] Minify CSS
- [ ] Add meta tags for SEO
- [ ] Add favicon
- [ ] Test loading speed
- [ ] Verify all links work

### For Production
- [ ] Set up backend API
- [ ] Configure database
- [ ] Implement real authentication
- [ ] Add payment gateway
- [ ] Set up email service
- [ ] Configure CDN
- [ ] Enable HTTPS
- [ ] Add analytics
- [ ] Set up error logging
- [ ] Configure backups
- [ ] Add monitoring
- [ ] Create admin panel

---

**This system overview provides a complete technical understanding of the Amazon clone architecture.**
