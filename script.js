// Main application script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Handle form interactions
    initForms();
    
    // Handle status selection buttons
    initStatusButtons();
    
    // Add intersection observer for scroll animations
    initIntersectionObserver();
});

function initAnimations() {
    // Add fade-in animation to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-fade-in-up');
    });
}

function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Ne bloque pas la soumission
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (!isValid) {
                e.preventDefault(); // ← on bloque seulement si invalide
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            }
            // Sinon, Formspree gère l'envoi et la redirection
        });
    });
}

function initStatusButtons() {
    const statusButtons = document.querySelectorAll('button[type="button"]');
    statusButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            statusButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
            
            // Add active class to clicked button
            this.classList.add('bg-primary', 'text-white');
        });
    });
}

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg transform transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});