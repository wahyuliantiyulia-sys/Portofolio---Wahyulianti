// Smooth scroll behavior
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

// Add interaction effect on cards
const cards = document.querySelectorAll('.hobby-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Parallax effect for bubbles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        const speed = 0.5 + (index * 0.1);
        bubble.style.transform = 'translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)';
    });
});

// Dynamic greeting based on time
function setGreeting() {
    const hour = new Date().getHours();
    const quoteText = document.querySelector('.quote-text');
    
    if (quoteText) {
        if (hour < 12) {
            quoteText.innerHTML = 'Good morning! Dream big, work hard, stay focused ✨';
        } else if (hour < 18) {
            quoteText.innerHTML = 'Good afternoon! Keep shining bright 🌟';
        } else {
            quoteText.innerHTML = 'Good evening! Dream big, work hard, stay focused ✨';
        }
    }
}

// Call greeting function on load
window.addEventListener('load', setGreeting);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Interactive hover effect for profile photo
const photoContainer = document.querySelector('.photo-container');
if (photoContainer) {
    photoContainer.addEventListener('mousemove', (e) => {
        const rect = photoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        photoContainer.style.transform = 'perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)';
    });
    
    photoContainer.addEventListener('mouseleave', () => {
        photoContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}