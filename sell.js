// Sell Page JavaScript

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target % 1 === 0 ? target : target.toFixed(1);
      clearInterval(timer);
    } else {
      element.textContent = current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
    }
  }, 16);
}

// Intersection Observer for Counter Animation
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        animateCounter(stat, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe stats section
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.sell-stats-container');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all FAQ items
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Button Click Handlers
  const registerNowBtn = document.getElementById('registerNowBtn');
  const getStartedBtn = document.getElementById('getStartedBtn');
  
  if (registerNowBtn) {
    registerNowBtn.addEventListener('click', () => {
      showRegistrationModal();
    });
  }

  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      scrollToSection('.sell-how-it-works');
    });
  }

  // All CTA buttons
  const ctaButtons = document.querySelectorAll('.cta-btn-primary, .pricing-btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showRegistrationModal();
    });
  });

  // Learn More buttons
  const learnMoreButtons = document.querySelectorAll('.cta-btn-secondary');
  learnMoreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      scrollToSection('.sell-benefits');
    });
  });

  // Generate placeholder image if needed
  generatePlaceholderImage();

  // Smooth scroll for back to top
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Add scroll animations
  addScrollAnimations();
});

// Scroll to Section
function scrollToSection(selector) {
  const section = document.querySelector(selector);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Show Registration Modal
function showRegistrationModal() {
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'registration-modal';
  modal.innerHTML = `
    <div class="registration-overlay"></div>
    <div class="registration-content">
      <button class="close-registration">&times;</button>
      <h2>Start Selling on Nexus</h2>
      <p class="registration-subtitle">Join thousands of successful sellers today</p>
      <form class="registration-form" id="registrationForm">
        <div class="form-group">
          <label for="businessName">Business Name</label>
          <input type="text" id="businessName" name="businessName" required placeholder="Enter your business name">
        </div>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name">
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number">
        </div>
        <div class="form-group">
          <label for="sellingPlan">Selling Plan</label>
          <select id="sellingPlan" name="sellingPlan" required>
            <option value="">Select a plan</option>
            <option value="individual">Individual - EG0/month</option>
            <option value="professional">Professional - EG0/month (Limited Offer)</option>
            <option value="business">Business - Custom Pricing</option>
          </select>
        </div>
        <div class="form-group checkbox-group">
          <label>
            <input type="checkbox" name="terms" required>
            <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
          </label>
        </div>
        <button type="submit" class="submit-registration-btn">Create Seller Account</button>
      </form>
      <p class="registration-note">Already have an account? <a href="#" id="signInLink">Sign in</a></p>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Add styles for modal
  addModalStyles();

  // Animate modal in
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);

  // Close modal handlers
  const closeBtn = modal.querySelector('.close-registration');
  const overlay = modal.querySelector('.registration-overlay');

  closeBtn.addEventListener('click', () => closeModal(modal));
  overlay.addEventListener('click', () => closeModal(modal));

  // Form submission
  const form = modal.querySelector('#registrationForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleRegistration(form, modal);
  });

  // Sign in link
  const signInLink = modal.querySelector('#signInLink');
  signInLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(modal);
    // You can add sign-in modal here
    alert('Sign in functionality would be implemented here');
  });
}

// Close Modal
function closeModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = '';
  }, 300);
}

// Handle Registration
function handleRegistration(form, modal) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Show loading state
  const submitBtn = form.querySelector('.submit-registration-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Creating Account...';
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    console.log('Registration data:', data);
    
    // Show success message
    showSuccessMessage(modal, data.businessName);
  }, 2000);
}

// Show Success Message
function showSuccessMessage(modal, businessName) {
  const content = modal.querySelector('.registration-content');
  content.innerHTML = `
    <div class="success-message">
      <div class="success-icon">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h2>Welcome to Nexus Seller Central!</h2>
      <p>Your seller account for <strong>${businessName}</strong> has been created successfully.</p>
      <p class="success-note">We've sent a confirmation email with next steps to get started.</p>
      <button class="success-btn" onclick="location.reload()">Go to Dashboard</button>
    </div>
  `;
}

// Add Modal Styles
function addModalStyles() {
  if (document.getElementById('modal-styles')) return;

  const style = document.createElement('style');
  style.id = 'modal-styles';
  style.textContent = `
    .registration-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .registration-modal.active {
      opacity: 1;
    }

    .registration-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(5px);
    }

    .registration-content {
      position: relative;
      background: white;
      border-radius: 20px;
      padding: 40px;
      max-width: 500px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      transform: scale(0.9);
      transition: transform 0.3s ease;
    }

    .registration-modal.active .registration-content {
      transform: scale(1);
    }

    .close-registration {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      font-size: 30px;
      color: #64748b;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .close-registration:hover {
      background: #f1f5f9;
      color: #0f172a;
    }

    .registration-content h2 {
      font-size: 28px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 10px;
    }

    .registration-subtitle {
      font-size: 16px;
      color: #64748b;
      margin-bottom: 30px;
    }

    .registration-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .form-group label {
      font-size: 14px;
      font-weight: 600;
      color: #0f172a;
    }

    .form-group input,
    .form-group select {
      padding: 12px 16px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 15px;
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none;
      border-color: #10b981;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }

    .checkbox-group label {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 400;
      font-size: 14px;
      color: #475569;
    }

    .checkbox-group input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    .checkbox-group a {
      color: #10b981;
      text-decoration: none;
    }

    .checkbox-group a:hover {
      text-decoration: underline;
    }

    .submit-registration-btn {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      padding: 14px 30px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
    }

    .submit-registration-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }

    .submit-registration-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .registration-note {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: #64748b;
    }

    .registration-note a {
      color: #10b981;
      text-decoration: none;
      font-weight: 600;
    }

    .registration-note a:hover {
      text-decoration: underline;
    }

    .success-message {
      text-align: center;
      padding: 20px 0;
    }

    .success-icon {
      width: 100px;
      height: 100px;
      margin: 0 auto 30px;
      background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: scaleIn 0.5s ease;
    }

    .success-icon svg {
      color: #10b981;
    }

    @keyframes scaleIn {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }

    .success-message h2 {
      color: #10b981;
      margin-bottom: 15px;
    }

    .success-message p {
      font-size: 16px;
      color: #475569;
      margin-bottom: 15px;
      line-height: 1.6;
    }

    .success-note {
      font-size: 14px !important;
      color: #64748b !important;
    }

    .success-btn {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      border: none;
      padding: 14px 40px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 20px;
    }

    .success-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }
  `;
  document.head.appendChild(style);
}

// Generate Placeholder Image
function generatePlaceholderImage() {
  const heroImg = document.getElementById('heroPackageImg');
  if (!heroImg) return;

  // Check if image exists
  heroImg.onerror = function() {
    // Create canvas for placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');

    // Draw gradient background
    const gradient = ctx.createLinearGradient(0, 0, 500, 500);
    gradient.addColorStop(0, '#f97316');
    gradient.addColorStop(1, '#ea580c');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);

    // Draw box shape
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(100, 150, 300, 200);

    // Draw smile
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(250, 280, 80, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();

    // Draw arrow
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.moveTo(380, 250);
    ctx.lineTo(420, 280);
    ctx.lineTo(380, 310);
    ctx.fill();

    // Set canvas as image source
    heroImg.src = canvas.toDataURL();
  };
}

// Add Scroll Animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements
  const elements = document.querySelectorAll('.benefit-card, .pricing-card, .testimonial-card, .step-item');
  elements.forEach(el => observer.observe(el));
}

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.sell-hero-image img');
  
  if (heroImage && scrolled < 600) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});
