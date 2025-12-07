// ============================================
// Navigation Functionality
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Scroll Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.skill-item, .skill-card, .project-card, .certificate-card, .timeline-item');
animateElements.forEach(el => observer.observe(el));

// Animate skill progress bars
const skillProgressBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width + '%';
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

skillProgressBars.forEach(bar => skillObserver.observe(bar));

// ============================================
// Form Validation and Submission
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

nameInput.addEventListener('blur', () => validateField(nameInput));
emailInput.addEventListener('blur', () => validateField(emailInput));
messageInput.addEventListener('blur', () => validateField(messageInput));

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field === nameInput) {
        if (value.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters';
        }
    } else if (field === emailInput) {
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field === messageInput) {
        if (value.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters';
        }
    }

    if (!isValid) {
        field.style.borderColor = '#dc3545';
        showFieldError(field, errorMessage);
    } else {
        field.style.borderColor = '#8B6F47';
        clearFieldError(field);
    }

    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
}

function clearFieldError(field) {
    const errorDiv = field.parentElement.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isMessageValid = validateField(messageInput);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
        showFormMessage('Please fill in all fields correctly.', 'error');
        return;
    }

    // Get form data
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };

    // Show loading state
    const submitButton = contactForm.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitButton.disabled = true;

    // Simulate form submission (replace with actual API call)
    try {
        // In a real application, you would send this to your backend
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        // });
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulate success response
        showFormMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
        contactForm.reset();
        
        // Reset label positions
        nameInput.dispatchEvent(new Event('blur'));
        emailInput.dispatchEvent(new Event('blur'));
        messageInput.dispatchEvent(new Event('blur'));
        
    } catch (error) {
        showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
    } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ============================================
// Download CV Functionality
// ============================================

const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // CV file path - update this with your actual CV filename
    const cvPath = 'files/Tsehaye_Tadesse_CV.pdf';
    const cvFileName = 'Tsehaye_Tadesse_CV.pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFileName;
    link.style.display = 'none';
    
    // Add to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show success message
    setTimeout(() => {
        const message = document.createElement('div');
        message.textContent = 'CV download started!';
        message.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--accent);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 300);
        }, 2000);
    }, 100);
});

// ============================================
// Active Navigation Link Highlighting
// ============================================

const sections = document.querySelectorAll('section[id]');

function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent);
        font-weight: 600;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// Image Placeholder Handling
// ============================================

// Handle missing images with placeholders
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('error', function() {
        // Create a colored placeholder
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.width = '100%';
        placeholder.style.height = '100%';
        placeholder.style.background = 'linear-gradient(135deg, #8B6F47 0%, #A68B5B 100%)';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.color = 'white';
        placeholder.style.fontSize = '3rem';
        placeholder.innerHTML = '📷';
        this.parentElement.appendChild(placeholder);
    });
});

// ============================================
// Performance Optimization
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// Initialize on DOM Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial active section
    highlightActiveSection();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
    
    console.log('Portfolio website loaded successfully!');
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    highlightActiveSection();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

