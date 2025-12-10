// Fallback components script - loads without ES6 modules
console.log('Loading fallback components...');

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFallbackComponents);
} else {
    initFallbackComponents();
}

function initFallbackComponents() {
    console.log('Initializing fallback components...');
    
    // Load header and footer
    loadHeaderFallback();
    loadFooterFallback();
    
    // Initialize mobile navigation
    initMobileNavigationFallback();
    
    // Initialize scroll effects
    initScrollEffectsFallback();
    
    // Initialize map scroll fix
    initMapScrollFix();
    
    // Initialize product carousel (mobile-only)
    initProductCarousel();
    
    console.log('Fallback components initialized');
}

function loadHeaderFallback() {
    console.log('Loading header fallback...');
    
    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const isInProduktyDir = currentPath.includes('/produkty/');
    
    let basePath, pagesPath;
    if (isInProduktyDir) {
        // We're in /produkty/ or /produkty/dvere/ or /produkty/celoskla/
        const pathDepth = (currentPath.match(/\//g) || []).length;
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
        basePath = '../';
        pagesPath = '';
    } else {
        basePath = '';
        pagesPath = 'pages/';
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
            <div class="mobile-sidebar-header">
                <div class="mobile-sidebar-logo">
                    <img src="${basePath}sources/logo2.png" alt="WENS DOOR">
                </div>
                <button class="mobile-close-btn">✕</button>
            </div>
            <ul class="mobile-nav-menu">
                <li><a href="/" class="mobile-nav-link">Domov</a></li>
                <li><a href="/produkty/dvere/seria-a" class="mobile-nav-link">Produkty a služby</a></li>
                <li><a href="/o-nas" class="mobile-nav-link">O nás</a></li>
                <li><a href="/referencie" class="mobile-nav-link">Referencie</a></li>
                <li><a href="/blog" class="mobile-nav-link">Blog</a></li>
                <li><a href="/kontakt" class="mobile-nav-link">Kontakt</a></li>
            </ul>
        </div>
    `;
    
    const navigationContainer = document.getElementById('navigation-container');
    if (navigationContainer) {
        navigationContainer.innerHTML = navigationHTML;
        setActiveNavLink();
        console.log('Header loaded successfully');
    } else {
        console.error('Navigation container not found');
    }
}

function loadFooterFallback() {
    console.log('Loading footer fallback...');

    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const isInProduktyDir = currentPath.includes('/produkty/');
    const isKontaktPage = currentPath.includes('kontakt');

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
        basePath = '../';
        pagesPath = '';
    } else {
        basePath = '';
        pagesPath = 'pages/';
    }

    // Only show maps if NOT on kontakt page
    const mapSection = !isKontaktPage ? `
            <!-- Dual Map Section -->
            <div class="footer-maps-section">
                <div class="footer-map-container">
                    <div class="footer-map-item">
                        <h3>Sídlo spoločnosti - Prievidza</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5!2d18.6319563!3d48.7668253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714dd007de2beef%3A0xc7400751ed3942e9!2sWens%20door%20Prievidza!5e0!3m2!1ssk!2ssk!4v1638000000000!5m2!1ssk!2ssk"
                            width="100%"
                            height="400"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Wens door Prievidza">
                        </iframe>
                    </div>
                    <div class="footer-map-item">
                        <h3>Predajňa - Bratislava</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1234567890123!2d17.14397!3d48.18642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8edc9a1560b5%3A0xe07eb27db6fae3bb!2sWENS%20DOOR!5e0!3m2!1ssk!2ssk!4v1638000000000!5m2!1ssk!2ssk"
                            width="100%"
                            height="400"
                            style="border:0;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="WENS door Bratislava - Areál R1, Rožňavská 1">
                        </iframe>
                    </div>
                </div>
            </div>
    ` : '';

    const footerHTML = `
        <footer id="footer" class="footer">
            <!-- CTA Section -->
            <div class="footer-cta-section">
                <div class="footer-cta-content">
                    <div class="footer-cta-left">
                        <h2>Potrebujete interiérové dvere a nábytok na mieru?</h2>
                    </div>
                    <div class="footer-cta-right">
                        <a href="/kontakt" class="footer-cta-btn">Kontakt</a>
                    </div>
                </div>
            </div>

            ${mapSection}
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-main">
                    <div class="footer-logo">
                        <img src="${basePath}sources/footerlogo.png" alt="WENS DOOR Logo" class="footer-logo-image">
                    </div>
                    <div class="footer-navigation">
                        <h4>Navigácia</h4>
                        <div class="footer-nav-links">
                            <div class="footer-nav-col">
                                <a href="/">Domov</a>
                                <a href="/o-nas">O nás</a>
                                <a href="/produkty/dvere/seria-a">Produkty</a>
                                <a href="/kontakt">Kontakt</a>
                                <a href="/referencie">Portfólio</a>
                            </div>
                           
                        </div>
                    </div>
                    <div class="footer-contact">
                        <div class="footer-location">
                            <h4>Sídlo spoločnosti</h4>
                            <p>Vápenická 12<br>
                            971 01 Prievidza</p>
                            <p><a href="tel:+421902917898">+421 902 917 898</a><br>
                            <a href="mailto:info@wens.sk">info@wens.sk</a></p>
                        </div>
                        
                        <div class="footer-location">
                            <h4>Predajňa</h4>
                            <p>Areál R1<br>
                            Ružinovská 1<br>
                            831 04 Bratislava</p>
                            <p><a href="tel:+421903719247">+421 903 719 247</a><br>
                            <a href="mailto:predajna.ba@wens.sk">predajna.ba@wens.sk</a></p>
                        </div>
                    </div>
                    <div class="footer-social">
                        <span style="display: inline-block; opacity: 0.5; cursor: not-allowed;">
                            <img src="${basePath}sources/facebook-icon.png" alt="Facebook" style="width: 32px; height: 32px;">
                        </span>
                        <a href="https://www.instagram.com/wensdoor" target="_blank" rel="noopener">
                            <img src="${basePath}sources/instagram-icon.png" alt="Instagram" style="width: 32px; height: 32px;">
                        </a>
                        <span style="display: inline-block; opacity: 0.5; cursor: not-allowed;">
                            <img src="${basePath}sources/pinterest-icon.png" alt="Pinterest" style="width: 32px; height: 32px;">
                        </span>
                    </div>
                </div>
                
                <div class="footer-copyright">
                    <div class="footer-copyright-left">
                        <p>&copy; WENS DOOR s.r.o. 2025 &nbsp;&nbsp; <a href="/pages/ochrana-osobnych-udajov.html">Ochrana osobných údajov</a> &nbsp;&nbsp; <a href="#" onclick="openCookieSettings(); return false;">Nastavenia cookies</a></p>
                    </div>
                    <div class="footer-copyright-right">
                        <p><a href="https://aebdigital.sk" target="_blank" rel="noopener">Tvorba stránky - AEB Digital</a></p>
                    </div>
                </div>
            </div>
        </footer>
        
        <!-- Cookie Consent Popup -->
        <div id="cookie-consent" class="cookie-consent">
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <div class="cookie-icon">🍪</div>
                    <div class="cookie-message">
                        Používame cookies na zlepšenie vašej používateľskej skúsenosti a na analýzu návštevnosti. Kliknutím na "Súhlasím" súhlasíte s používaním všetkých cookies.
                    </div>
                </div>
                <div class="cookie-actions">
                    <button class="cookie-btn settings" onclick="openCookieSettings()">Nastavenia</button>
                    <button class="cookie-btn accept" onclick="acceptAllCookies()">Súhlasím</button>
                </div>
            </div>
        </div>
        
        <!-- Cookie Settings Modal -->
        <div id="cookie-settings-modal" class="cookie-settings-modal">
            <div class="cookie-settings-content">
                <div class="cookie-settings-header">
                    <h2 class="cookie-settings-title">Nastavenia cookies</h2>
                    <button class="cookie-settings-close" onclick="closeCookieSettings()">&times;</button>
                </div>
                <div class="cookie-settings-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Nevyhnutné cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="necessary-cookies" checked disabled>
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Tieto cookies sú potrebné pre základnú funkčnosť stránky a nemožno ich vypnúť.
                        </p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Analytické cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="analytics-cookies">
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli zlepšiť.
                        </p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Marketingové cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="marketing-cookies">
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Používajú sa na personalizáciu reklám a meranie ich účinnosti.
                        </p>
                    </div>
                </div>
                <div class="cookie-settings-footer">
                    <button class="cookie-settings-btn save" onclick="saveCookieSettings()">Uložiť nastavenia</button>
                    <button class="cookie-settings-btn accept-all" onclick="acceptAllCookies()">Súhlasím so všetkými</button>
                </div>
            </div>
        </div>
        
        <!-- Privacy Policy Popup -->
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        initFooterMapsFallback();
        console.log('Footer loaded successfully');
    } else {
        console.error('Footer container not found');
    }
}

function initFooterMapsFallback() {
    // Add click event to activate/deactivate map interaction
    document.addEventListener('click', function(e) {
        const mapItem = e.target.closest('.footer-map-item');

        if (mapItem) {
            // Clicking on a map - activate it
            mapItem.classList.add('active');
        } else {
            // Clicking outside any map - deactivate all maps
            const allMaps = document.querySelectorAll('.footer-map-item');
            allMaps.forEach(map => map.classList.remove('active'));
        }
    });
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

function initMobileNavigationFallback() {
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
        
        // Close mobile sidebar when clicking overlay, mobile link, or close button
        if (e.target.classList.contains('mobile-overlay') || e.target.classList.contains('mobile-nav-link') || e.target.classList.contains('mobile-close-btn')) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            if (mobileSidebar) mobileSidebar.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            if (navbar) navbar.classList.remove('mobile-menu-open');
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
                if (mobileOverlay) mobileOverlay.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                if (navbar) navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    });
}

function initScrollEffectsFallback() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const transparentNavbar = document.querySelector('.navbar-transparent');
    
    // Set initial navbar state on page load
    updateNavbarBackgroundFallback();
    
    // Minimal scroll listener like template
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress (minimal calculation)
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = scrollPercentage + '%';
        }
        
        // Update navbar background (lightweight)
        updateNavbarBackgroundFallback();
    });
}

function updateNavbarBackgroundFallback() {
    const scrollPosition = window.scrollY;
    const transparentNavbar = document.querySelector('.navbar-transparent');
    const logoImage = document.querySelector('.logo-image');

    if (!transparentNavbar) return;

    // 8vh trigger point for all pages
    const triggerPoint = window.innerHeight * 0.08;

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


// Mobile-only product tabs carousel
function initProductCarousel() {
    // Only initialize on mobile
    if (window.innerWidth > 768) return;
    
    const container = document.querySelector('.product-tabs-container');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    
    if (!container || !leftArrow || !rightArrow) return;
    
    let currentIndex = 0;
    const totalTabs = 6;
    
    // Tab data for redirects
    const tabData = [
        { tab: 'dvere', text: 'Dvere' },
        { tab: 'zarubne', text: 'Zárubne' },
        { tab: 'drevo-schody', text: 'Drevené schody' },
        { tab: 'nabytok', text: 'Nábytok na mieru' },
        { tab: 'celoskla', text: 'Celosklá' },
        { tab: 'obklady', text: 'Obklady' }
    ];
    
    function updateCarousel() {
        const translateX = -(currentIndex * 16.666); // Move by 1/6 of container width
        container.style.transform = `translateX(${translateX}%)`;
        
        // Update active tab
        const tabs = document.querySelectorAll('.product-tab-hero');
        tabs.forEach((tab, index) => {
            tab.classList.toggle('active', index === currentIndex);
        });
    }
    
    function redirectToTab(index) {
        const currentPath = window.location.pathname;
        const isInPagesDir = currentPath.includes('/pages/');
        const basePath = isInPagesDir ? '' : 'pages/';
        
        window.location.href = `${basePath}produkty-sluzby.html?tab=${tabData[index].tab}`;
    }
    
    leftArrow.addEventListener('click', () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : totalTabs - 1;
        redirectToTab(newIndex);
    });
    
    rightArrow.addEventListener('click', () => {
        const newIndex = currentIndex < totalTabs - 1 ? currentIndex + 1 : 0;
        redirectToTab(newIndex);
    });
    
    // Initialize
    updateCarousel();
}

// Fix Google Maps scroll interference
function initMapScrollFix() {
    const mapContainers = document.querySelectorAll('.location-map-container');
    
    mapContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.add('active');
        });
        
        // Deactivate when clicking outside
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                container.classList.remove('active');
            }
        });
    });
}

// Cookie Consent Functions
function showCookieConsent() {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
        document.getElementById('cookie-consent').classList.add('show');
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-cookies', 'true');
    localStorage.setItem('marketing-cookies', 'true');
    document.getElementById('cookie-consent').classList.remove('show');
    closeCookieSettings();
}

let cookieScrollPosition = 0;

function openCookieSettings() {
    // Load current settings
    const analyticsEnabled = localStorage.getItem('analytics-cookies') === 'true';
    const marketingEnabled = localStorage.getItem('marketing-cookies') === 'true';

    document.getElementById('analytics-cookies').checked = analyticsEnabled;
    document.getElementById('marketing-cookies').checked = marketingEnabled;

    document.getElementById('cookie-settings-modal').classList.add('show');
    // Save scroll position and prevent scrolling
    cookieScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.top = `-${cookieScrollPosition}px`;
    document.body.classList.add('no-scroll');
}

function closeCookieSettings() {
    document.getElementById('cookie-settings-modal').classList.remove('show');
    // Restore scrolling and scroll position
    document.body.classList.remove('no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, cookieScrollPosition);
}

function saveCookieSettings() {
    const analyticsEnabled = document.getElementById('analytics-cookies').checked;
    const marketingEnabled = document.getElementById('marketing-cookies').checked;
    
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('analytics-cookies', analyticsEnabled.toString());
    localStorage.setItem('marketing-cookies', marketingEnabled.toString());
    
    document.getElementById('cookie-consent').classList.remove('show');
    closeCookieSettings();
}

// Close modal when clicking on backdrop
document.addEventListener('click', function(e) {
    if (e.target.id === 'cookie-settings-modal') {
        closeCookieSettings();
    }
});

// Show cookie consent on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showCookieConsent, 1000); // Show after 1 second
});

// Minimal fallback - no complex animations that could conflict
console.log('Fallback: Using minimal approach like template');