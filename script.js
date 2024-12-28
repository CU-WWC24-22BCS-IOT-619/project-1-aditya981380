document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll
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

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = e.target.querySelector('input');
            if (emailInput && emailInput.value) {
                alert(Thank you for subscribing with ${emailInput.value}!);
                e.target.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = [
        {
            text: "This platform has been a lifeline for our family. The resources and support we've found here are invaluable.",
            author: "Sarah M., Parent"
        },
        {
            text: "Finding local support groups through this website has made such a difference in our journey.",
            author: "James P., Caregiver"
        },
        {
            text: "The professional services directory helped us find exactly the support we needed.",
            author: "Maria L., Family Member"
        }
    ];

    function updateTestimonial() {
        const testimonialContainer = document.querySelector('.testimonial');
        if (testimonialContainer && testimonials.length > 0) {
            const testimonial = testimonials[currentTestimonial];
            testimonialContainer.innerHTML = `
                <p>"${testimonial.text}"</p>
                <cite>- ${testimonial.author}</cite>
            `;
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
    }

    // Initialize and update testimonials if testimonials exist
    if (testimonials.length > 0) {
        updateTestimonial();
        setInterval(updateTestimonial, 5000);
    }
});