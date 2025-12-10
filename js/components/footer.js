// Footer Component - Footer content and privacy functionality

export function initFooter() {
    loadFooter();
    initCookieModal();
    initFooterMaps();
}

function ensureFooterCSSLoaded() {
    // Check if footer CSS is already loaded
    const existingLink = document.querySelector('link[href*="footer.css"]');
    if (existingLink) return;
    
    // Determine CSS path based on current location
    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const isInProduktyDir = currentPath.includes('/produkty/');
    
    let cssPath;
    if (isInProduktyDir) {
        // More specific path detection
        if (currentPath.includes('/produkty/dvere/') || currentPath.includes('/produkty/celoskla/')) {
            // /produkty/dvere/seria-a or /produkty/celoskla/celoskla-css (3+ slashes)
            cssPath = '../../css/components/footer.css?v=4.2';
        } else if (currentPath.includes('/produkty/')) {
            // /produkty/nabytok, /produkty/schody, /produkty/zarubne, /produkty/obklady (2 slashes)
            cssPath = '../css/components/footer.css?v=4.2';
        } else {
            cssPath = '../css/components/footer.css?v=4.2';
        }
    } else if (isInPagesDir) {
        cssPath = '../css/components/footer.css?v=4.2';
    } else {
        cssPath = 'css/components/footer.css?v=4.2';
    }
    
    // Create and inject CSS link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);
}

function loadFooter() {
    // Ensure footer CSS is loaded
    ensureFooterCSSLoaded();
    
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
        // We're in /pages/ - stay in pages directory for other pages
        basePath = '../';     // To reach root for index.html
        pagesPath = '';       // Other pages are in same directory
    } else {
        // We're in root directory
        basePath = '';
        pagesPath = 'pages/';
    }
    
    // Check if we're on kontakt page to hide maps
    const isKontaktPage = window.location.pathname.includes('kontakt');

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

            <!-- Dual Map Section (hidden on kontakt page) -->
            <div class="footer-maps-section" style="${isKontaktPage ? 'display: none;' : ''}">
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

            <div class="footer-divider"></div>
            
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="footer-main">
                    <div class="footer-logo">
                        <img src="${basePath}sources/footerlogo.png" alt="WENS DOOR Logo" class="footer-logo-image">
                    </div>
                    <div class="footer-nav-col">
                        <a href="/">Domov</a>
                        <a href="/o-nas">O nás</a>
                        <a href="/produkty/dvere/seria-a">Produkty</a>
                        <a href="/kontakt">Kontakt</a>
                        <a href="/referencie">Portfólio</a>
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
                        <a href="https://www.instagram.com/wensdoor" target="_blank">
                            <img src="${basePath}sources/instagram-icon-white.svg" alt="Instagram" style="width: 20px; height: 20px;">
                        </a>
                    </div>
                </div>
                
                <div class="footer-copyright">
                    <p>&copy; WENS DOOR s.r.o. 2025 &nbsp;&nbsp; <a href="/pages/ochrana-osobnych-udajov.html">Ochrana osobných údajov</a> &nbsp;&nbsp; <a href="#" onclick="openCookieSettings(); return false;">Nastavenia cookies</a></p>
                </div>
            </div>
        </footer>
        
        <!-- Privacy Policy Popup -->
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}


function initFooterMaps() {
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

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.loadFooter = loadFooter;
    window.initFooterMaps = initFooterMaps;
    window.ensureFooterCSSLoaded = ensureFooterCSSLoaded;
}