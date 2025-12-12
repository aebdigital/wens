
// Contact Form Component

export function initForms() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleContactSubmit);
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message') || createMessageDiv(form);
    
    // Get values
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // UI Loading
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Odosielam...';
    messageDiv.style.display = 'none';
    messageDiv.className = 'form-message'; // Reset classes

    try {
        const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formType: 'contact',
                ...data
            }),
        });

        const resData = await response.json();

        if (response.ok) {
            messageDiv.textContent = 'Správa bola úspešne odoslaná. Ďakujeme!';
            messageDiv.className = 'form-message success';
            messageDiv.style.display = 'block';
            form.reset();
        } else {
            throw new Error(resData.message || 'Chyba pri odosielaní');
        }
    } catch (error) {
        console.error('Submission error:', error);
        messageDiv.textContent = 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr.';
        messageDiv.className = 'form-message error';
        messageDiv.style.display = 'block';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
}

function createMessageDiv(form) {
    const div = document.createElement('div');
    div.id = 'form-message';
    div.className = 'form-message';
    form.appendChild(div);
    return div;
}
