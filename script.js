// Fade-in on scroll for sections
const faders = document.querySelectorAll('.about, .contact, .contact-card');
const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// WhatsApp button click effect
const floatingWhatsApp = document.querySelector('.floating-whatsapp');
floatingWhatsApp.addEventListener('mousedown', () => {
    floatingWhatsApp.style.transform = 'scale(0.95)';
});
floatingWhatsApp.addEventListener('mouseup', () => {
    floatingWhatsApp.style.transform = 'scale(1)';
});
floatingWhatsApp.addEventListener('mouseleave', () => {
    floatingWhatsApp.style.transform = 'scale(1)';
});

// Optional: Animate register button
const registerBtn = document.querySelector('.register-btn');
if (registerBtn) {
    registerBtn.addEventListener('mouseenter', () => {
        registerBtn.style.boxShadow = '0 4px 16px rgba(255,235,59,0.18)';
    });
    registerBtn.addEventListener('mouseleave', () => {
        registerBtn.style.boxShadow = 'none';
    });
} 