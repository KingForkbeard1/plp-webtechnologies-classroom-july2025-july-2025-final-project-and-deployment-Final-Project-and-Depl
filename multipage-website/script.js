// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(name === '' || email === '' || message === ''){
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
}
