// WhatsApp Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsappLink');
    const whatsappClose = document.getElementById('whatsappClose');
    
    // Show/hide close button on hover
    whatsappLink.addEventListener('mouseenter', function() {
        whatsappClose.style.display = 'block';
    });
    
    whatsappLink.addEventListener('mouseleave', function() {
        whatsappClose.style.display = 'none';
    });
    
    // Close button functionality
    whatsappClose.addEventListener('click', function(e) {
        e.preventDefault();
        whatsappLink.style.display = 'none';
        whatsappClose.style.display = 'none';
        
        // Show the button again after 30 seconds
        setTimeout(function() {
            whatsappLink.style.display = 'flex';
        }, 30000);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});