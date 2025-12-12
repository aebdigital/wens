
// Pricelist Modal Component

// Turnstile Site Key
const TURNSTILE_SITE_KEY = '0x4AAAAAACGYVT8BFuj5uz3n';

export function initPricelistModal() {
    // Check if modal already exists
    if (document.getElementById('pricelist-modal')) return;

    // Load Turnstile script if not present
    if (!document.querySelector('script[src*="turnstile"]')) {
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }

    // Inject CSS if not present (fallback)
    if (!document.querySelector('link[href*="pricelist.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        // Adjust path based on location
        const depth = window.location.pathname.split('/').length - 2;
        const prefix = depth > 0 ? '../'.repeat(depth) : '';
        link.href = `${prefix}css/components/pricelist.css?v=1.0`;
        document.head.appendChild(link);
    }

    // Modal HTML
    const modalHTML = `
        <div id="pricelist-modal" class="pricelist-modal-overlay">
            <div class="pricelist-modal-content">
                <button class="pricelist-close-btn">&times;</button>
                <h2 class="pricelist-modal-title">Vyžiadať cenník</h2>
                <p class="pricelist-modal-desc">Zadajte váš email a my vám pošleme aktuálny cenník našich produktov.</p>

                <form id="pricelist-form">
                    <div class="pricelist-form-group">
                        <input type="email" id="pricelist-email" class="pricelist-input" placeholder="Váš email" required>
                    </div>
                    <div class="pricelist-form-group">
                        <div class="cf-turnstile" data-sitekey="${TURNSTILE_SITE_KEY}" data-theme="light"></div>
                    </div>
                    <button type="submit" class="btn-pricelist-submit">VYŽIADAŤ CENNÍK</button>
                    <div id="pricelist-message" class="pricelist-message"></div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    setupPricelistEvents();

    // Make global function available for buttons
    window.openPricelistModal = openPricelistModal;
}

function openPricelistModal() {
    const modal = document.getElementById('pricelist-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closePricelistModal() {
    const modal = document.getElementById('pricelist-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Reset form after delay
        setTimeout(() => {
            const form = document.getElementById('pricelist-form');
            const message = document.getElementById('pricelist-message');
            if (form) form.reset();
            if (message) {
                message.className = 'pricelist-message';
                message.textContent = '';
            }
        }, 300);
    }
}

function setupPricelistEvents() {
    const modal = document.getElementById('pricelist-modal');
    const closeBtn = modal.querySelector('.pricelist-close-btn');
    const form = document.getElementById('pricelist-form');

    // Close events
    closeBtn.addEventListener('click', closePricelistModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closePricelistModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePricelistModal();
        }
    });

    // Form Submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('pricelist-email');
        const submitBtn = modal.querySelector('.btn-pricelist-submit');
        const messageDiv = document.getElementById('pricelist-message');

        const email = emailInput.value;

        // Get Turnstile token
        const turnstileResponse = document.querySelector('[name="cf-turnstile-response"]');
        const turnstileToken = turnstileResponse ? turnstileResponse.value : '';

        if (!turnstileToken) {
            messageDiv.textContent = 'Prosím dokončite overenie.';
            messageDiv.className = 'pricelist-message error';
            return;
        }

        // UI Loading State
        submitBtn.disabled = true;
        submitBtn.textContent = 'ODOSIELAM...';
        messageDiv.style.display = 'none';

        try {
            const response = await fetch('/.netlify/functions/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType: 'pricelist',
                    email: email,
                    'cf-turnstile-response': turnstileToken
                }),
            });

            const data = await response.json();

            if (response.ok) {
                messageDiv.textContent = 'Cenník bol úspešne vyžiadaný. Skontrolujte si email.';
                messageDiv.className = 'pricelist-message success';
                form.reset();
                // Reset Turnstile widget
                if (window.turnstile) {
                    window.turnstile.reset();
                }
                setTimeout(closePricelistModal, 3000);
            } else {
                throw new Error(data.message || 'Chyba pri odosielaní');
            }
        } catch (error) {
            console.error('Submission error:', error);
            messageDiv.textContent = 'Nepodarilo sa odoslať žiadosť. Skúste to prosím neskôr.';
            messageDiv.className = 'pricelist-message error';
            // Reset Turnstile on error
            if (window.turnstile) {
                window.turnstile.reset();
            }
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'VYŽIADAŤ CENNÍK';
        }
    });
}
