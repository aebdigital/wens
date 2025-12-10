// Slider Component - Hero slider and other slider functionality


export function initSliders() {
    initHeroSlider();
    initHeroParallax();
    initCarousel();
}

function initHeroSlider() {
    const heroImages = document.querySelectorAll('.hero-bg-image');
    let currentImageIndex = 0;
    
    if (heroImages.length === 0) return;
    
    function cycleHeroImages() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }
    
    // Cycle images every 5 seconds
    setInterval(cycleHeroImages, 5000);
}

function initHeroParallax() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (!heroBackground) return;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.2; // 20% parallax speed
        const yPos = scrolled * parallaxSpeed;
        
        heroBackground.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
    
    // Check if Lenis is available and use its scroll events
    if (typeof window.lenis !== 'undefined' && window.lenis) {
        window.lenis.on('scroll', function(e) {
            const scrolled = e.scroll;
            const parallaxSpeed = 0.2; // 20% parallax speed
            const yPos = scrolled * parallaxSpeed;
            
            heroBackground.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    } else {
        // Fallback to native scroll with throttling for performance
        let ticking = false;
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        function handleScroll() {
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            requestTick();
        });
        
        // Set initial position
        updateParallax();
    }
}

function initCarousel() {
    let currentSlide = 0;
    const carousel = document.querySelector('.services-carousel');
    const cards = document.querySelectorAll('.services-carousel .service-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!carousel || cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 40; // card width + gap
    const maxSlides = Math.max(0, cards.length - 3); // Show 3 cards at a time
    
    function updateCarousel() {
        const translateX = -(currentSlide * cardWidth);
        carousel.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        if (prevBtn) prevBtn.disabled = currentSlide === 0;
        if (nextBtn) nextBtn.disabled = currentSlide >= maxSlides;
    }
    
    function nextSlide() {
        if (currentSlide < maxSlides) {
            currentSlide++;
            updateCarousel();
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Initialize carousel
    updateCarousel();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const newCardWidth = cards[0].offsetWidth + 40;
        if (newCardWidth !== cardWidth) {
            location.reload(); // Simple solution for responsive updates
        }
    });
}

// Export slider configuration for customization
export const sliderConfig = {
    heroImageInterval: 5000,
    transitionDuration: 200
};

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.initSliders = initSliders;
    window.initHeroImageSlider = initHeroSlider;
    window.initHeroParallax = initHeroParallax;
    window.initCarousel = initCarousel;
}