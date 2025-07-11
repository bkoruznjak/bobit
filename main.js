/* ==============================
   MAIN JAVASCRIPT FUNCTIONALITY
   ============================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeHeaderEffects();
    initializeAnimations();
});

/* ==============================
   SMOOTH SCROLLING
   ============================== */

function initializeSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==============================
   HEADER EFFECTS
   ============================== */

function initializeHeaderEffects() {
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    });
}

/* ==============================
   ANIMATIONS
   ============================== */

function initializeAnimations() {
    // Add animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize feature cards animation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

/* ==============================
   CONTACT FORM FUNCTIONALITY
   ============================== */

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Let the form submit naturally to FormSubmit
            // FormSubmit will handle the email sending and redirect to thank_you.html
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = 'Sending...';
                submitBtn.disabled = true;
            }
        });
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContactForm);

/* ==============================
   UTILITY FUNCTIONS
   ============================== */

// Function to show loading state on any button
function showLoadingState(button, loadingText = 'Loading...') {
    if (button) {
        button.dataset.originalText = button.textContent;
        button.textContent = loadingText;
        button.disabled = true;
    }
}

// Function to hide loading state
function hideLoadingState(button) {
    if (button && button.dataset.originalText) {
        button.textContent = button.dataset.originalText;
        button.disabled = false;
        delete button.dataset.originalText;
    }
}

// Function to animate elements into view
function animateIntoView(elements, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        animationClass: 'animate-in'
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(finalOptions.animationClass);
            }
        });
    }, finalOptions);
    
    elements.forEach(element => observer.observe(element));
} 