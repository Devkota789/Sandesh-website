// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Popular Destinations Data
const destinations = [
    {
        name: "Everest Base Camp Trek",
        image: "images/everest.jpg",
        duration: "14 Days",
        difficulty: "Challenging",
        description: "Experience the majesty of the world's highest peak"
    },
    {
        name: "Annapurna Circuit",
        image: "images/annapurna.jpg",
        duration: "12-16 Days",
        difficulty: "Moderate to Challenging",
        description: "Trek through diverse landscapes and traditional villages"
    },
    {
        name: "Langtang Valley Trek",
        image: "images/langtang.jpg",
        duration: "7 Days",
        difficulty: "Moderate",
        description: "Explore the beautiful Langtang region"
    }
];

// Populate Destinations
const destinationGrid = document.querySelector('.destination-grid');
destinations.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
        <h3>${dest.name}</h3>
        <p><strong>Duration:</strong> ${dest.duration}</p>
        <p><strong>Difficulty:</strong> ${dest.difficulty}</p>
        <p>${dest.description}</p>
    `;
    destinationGrid.appendChild(card);
});

// Testimonials Data
const testimonials = [
    {
        name: "John Smith",
        country: "USA",
        text: "An incredible experience with Sandesh! His knowledge and professionalism made our trek unforgettable.",
        image: "images/testimonial1.jpg"
    },
    {
        name: "Emma Wilson",
        country: "UK",
        text: "The best guide I could have asked for. Sandesh's expertise and friendly nature made the journey amazing.",
        image: "images/testimonial2.jpg"
    },
    {
        name: "Hans Mueller",
        country: "Germany",
        text: "Perfect organization and great attention to safety. Highly recommended!",
        image: "images/testimonial3.jpg"
    }
];

// Populate Testimonials
const testimonialSlider = document.querySelector('.testimonials-slider');
testimonials.forEach(testimonial => {
    const slide = document.createElement('div');
    slide.className = 'service-card';
    slide.setAttribute('data-aos', 'fade-up');
    slide.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 1rem;">
        <p style="font-style: italic;">"${testimonial.text}"</p>
        <h4>${testimonial.name}</h4>
        <p>${testimonial.country}</p>
    `;
    testimonialSlider.appendChild(slide);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
}); 