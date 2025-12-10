// Header Component - Navigation functionality

export function initHeader() {
    loadNavigation();
    initMobileNavigation();
    initScrollEffects();
    initNavigationListeners();
}

// Make functions globally available for fallback - after function declarations

function loadNavigation() {
    // Determine current location and set appropriate paths
    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const isInProduktyDir = currentPath.includes('/produkty/');
    
    // Set navigation paths based on current location
    let basePath, pagesPath;
    
    if (isInProduktyDir) {
        // We're in /produkty/ or /produkty/dvere/ or /produkty/celoskla/
        // More specific path detection
        if (currentPath.includes('/produkty/dvere/') || currentPath.includes('/produkty/celoskla/')) {
            // /produkty/dvere/seria-a or /produkty/celoskla/celoskla-css (3+ slashes)
            basePath = '../../';
            pagesPath = '../../pages/';
        } else if (currentPath.includes('/produkty/')) {
            // /produkty/nabytok, /produkty/schody, /produkty/zarubne, /produkty/obklady (2 slashes)
            basePath = '../';
            pagesPath = '../pages/';
        } else {
            basePath = '../';
            pagesPath = '../pages/';
        }
    } else if (isInPagesDir) {
        // We're in /pages/
        basePath = '../';     // To reach root for index.html
        pagesPath = '';       // Other pages are in same directory (just filename.html)
    } else {
        // We're in root directory
        basePath = '';        // index.html is in same directory
        pagesPath = 'pages/'; // Other pages are in pages/ subdirectory
    }
    
    const navigationHTML = `
        <!-- Scroll Progress Indicator -->
        <div class="scroll-progress">
            <div class="scroll-progress-bar"></div>
        </div>

        <!-- Transparent Navigation -->
        <nav class="navbar navbar-transparent">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="/" class="logo-link">
                        <img src="${basePath}sources/whitelogo.png" alt="WENS DOOR s.r.o." class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu">
                    <li><a href="/" class="nav-link">Domov</a></li>
                    <li><a href="/produkty/dvere/seria-a" class="nav-link">Produkty</a></li>
                    <li><a href="/o-nas" class="nav-link">O nás</a></li>
                    <li><a href="/referencie" class="nav-link">Referencie</a></li>
                    <li><a href="/blog" class="nav-link">Blog</a></li>
                    <li><a href="/kontakt" class="nav-link">Kontakt</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <!-- Mobile Sidebar -->
        <div class="mobile-overlay"></div>
        <div class="mobile-sidebar">
            <ul class="mobile-nav-menu">
                <li><a href="${basePath}index.html" class="mobile-nav-link">Domov</a></li>
                <li><a href="/produkty/dvere/seria-a" class="mobile-nav-link">Produkty a služby</a></li>
                <li><a href="${pagesPath}o-nas.html" class="mobile-nav-link">O nás</a></li>
                <li><a href="${pagesPath}referencie.html" class="mobile-nav-link">Referencie</a></li>
                <li><a href="${pagesPath}blog.html" class="mobile-nav-link">Blog</a></li>
                <li><a href="${pagesPath}kontakt.html" class="mobile-nav-link">Kontakt</a></li>
            </ul>
        </div>
    `;
    
    const navigationContainer = document.getElementById('navigation-container');
    if (navigationContainer) {
        navigationContainer.innerHTML = navigationHTML;
        setActiveNavLink();
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Removed active link highlighting - only show on hover
    /*[...navLinks, ...mobileNavLinks].forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        if (currentPage === '/' || currentPage.includes('index.html')) {
            if (href.includes('index.html')) {
                link.classList.add('active');
            }
        } else if (currentPage.includes(href.split('/').pop())) {
            link.classList.add('active');
        }
    });*/
}

function initMobileNavigation() {
    document.addEventListener('click', function(e) {
        // Toggle mobile sidebar
        if (e.target.closest('.hamburger')) {
            const hamburger = e.target.closest('.hamburger');
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const navbar = document.querySelector('.navbar-transparent');
            
            hamburger.classList.toggle('active');
            mobileSidebar.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            
            if (hamburger.classList.contains('active')) {
                navbar.classList.add('mobile-menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
        
        // Close mobile sidebar when clicking overlay or mobile link
        if (e.target.classList.contains('mobile-overlay') || e.target.classList.contains('mobile-nav-link')) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            mobileSidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        }
    });
    
    // Close sidebar on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            if (mobileSidebar && mobileSidebar.classList.contains('active')) {
                mobileSidebar.classList.remove('active');
                mobileOverlay.classList.remove('active');
                hamburger.classList.remove('active');
                navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    });
}

function initScrollEffects() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const transparentNavbar = document.querySelector('.navbar-transparent');
    
    // Set initial navbar state on page load
    updateNavbarBackground();
    
    // Function to setup scroll listeners
    function setupScrollListeners() {
        // Check if Lenis is available and use its scroll events
        if (typeof window.lenis !== 'undefined' && window.lenis) {
            console.log('Using Lenis scroll events');
            window.lenis.on('scroll', function(e) {
                const scrollPosition = e.scroll;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                
                // Update scroll progress
                if (scrollProgress) {
                    const scrollPercentage = (scrollPosition / documentHeight) * 100;
                    scrollProgress.style.height = `${scrollPercentage}%`;
                }
                
                // Update navbar background with Lenis scroll position
                updateNavbarBackground(scrollPosition);
            });
        } else {
            console.log('Using native scroll events');
            // Fallback to native scroll if Lenis isn't available
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                
                // Update scroll progress
                if (scrollProgress) {
                    const scrollPercentage = (scrollPosition / documentHeight) * 100;
                    scrollProgress.style.height = `${scrollPercentage}%`;
                }
                
                // Update navbar background
                updateNavbarBackground();
            });
        }
    }
    
    // Try to setup scroll listeners, with retry for Lenis
    if (typeof window.lenis !== 'undefined' && window.lenis) {
        setupScrollListeners();
    } else {
        // Wait a bit for Lenis to initialize, then fallback to native scroll
        let retryCount = 0;
        const maxRetries = 10;
        
        const checkLenis = () => {
            if (typeof window.lenis !== 'undefined' && window.lenis) {
                setupScrollListeners();
            } else if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(checkLenis, 100);
            } else {
                // Fallback to native scroll after max retries
                setupScrollListeners();
            }
        };
        
        checkLenis();
    }
}

function updateNavbarBackground(lenisScrollPosition = null) {
    const scrollPosition = lenisScrollPosition !== null ? lenisScrollPosition : window.scrollY;
    const transparentNavbar = document.querySelector('.navbar-transparent');
    const logoImage = document.querySelector('.logo-image');

    if (!transparentNavbar) return;

    // 10vh trigger point for all pages
    const triggerPoint = window.innerHeight * 0.10;
    
    console.log(`Scroll position: ${scrollPosition}, Trigger point: ${triggerPoint}, Should be scrolled: ${scrollPosition > triggerPoint}`);

    // Determine logo path based on current location
    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const isInProduktyDir = currentPath.includes('/produkty/');

    let basePath;
    if (isInProduktyDir) {
        // We're in /produkty/ or /produkty/dvere/ or /produkty/celoskla/
        // More specific path detection
        if (currentPath.includes('/produkty/dvere/') || currentPath.includes('/produkty/celoskla/')) {
            // /produkty/dvere/seria-a or /produkty/celoskla/celoskla-css (3+ slashes)
            basePath = '../../';
        } else if (currentPath.includes('/produkty/')) {
            // /produkty/nabytok, /produkty/schody, /produkty/zarubne, /produkty/obklady (2 slashes)
            basePath = '../';
        } else {
            basePath = '../';
        }
    } else if (isInPagesDir) {
        basePath = '../';
    } else {
        basePath = '';
    }

    if (scrollPosition > triggerPoint) {
        transparentNavbar.classList.add('scrolled');
        if (logoImage) {
            logoImage.src = `${basePath}sources/logo2.png`;
        }
    } else {
        transparentNavbar.classList.remove('scrolled');
        if (logoImage) {
            logoImage.src = `${basePath}sources/whitelogo.png`;
        }
    }
}

function initNavigationListeners() {
    // Smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.loadNavigation = loadNavigation;
    window.initMobileNavigation = initMobileNavigation;
    window.initScrollEffects = initScrollEffects;
    window.initNavigationListeners = initNavigationListeners;
    window.updateNavbarBackground = updateNavbarBackground;
}