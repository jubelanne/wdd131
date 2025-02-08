// JavaScript for form submission and dynamic content display

document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission on contact page
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
        });
    }
    
    // You can also include dynamic functionality like storing data in localStorage here
});
