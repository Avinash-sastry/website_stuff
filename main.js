/* ==========================================================================
   IIFE to encapsulate all script logic
   ========================================================================== */
(function() {

    /* ==========================================================================
       Theme Toggle Logic
       ========================================================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Add click event listener to the toggle button if it exists
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Save the user's preference to localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }


    /* ==========================================================================
       Header Scroll Behavior (Only on Home Page)
       ========================================================================== */
    const header = document.querySelector('header');
    // This logic should only apply if a header exists and the hero image is active
    if (header && body.classList.contains('hero-image-active')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    /* ==========================================================================
       AOS (Animate on Scroll) Initialization
       ========================================================================== */
    // Check if AOS is defined before initializing
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 600,
            easing: 'ease-in-out'
        });
    }


    /* ==========================================================================
       Modal Logic (Home Page)
       ========================================================================== */
    function setupModal(cardId, modalId) {
        const card = document.getElementById(cardId);
        const modal = document.getElementById(modalId);

        // If either element doesn't exist, exit the function
        if (!card || !modal) return;

        const closeButton = modal.querySelector('.close-button');

        card.onclick = () => {
            modal.style.display = 'block';
        };

        if (closeButton) {
            closeButton.onclick = () => {
                modal.style.display = 'none';
            };
        }
    }

    // Set up all modals
    setupModal('academic-card', 'academic-modal');
    setupModal('skills-card', 'skills-modal');
    setupModal('extracurricular-card', 'extracurricular-modal');

    // Close modal when clicking outside of the content
    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };


    /* ==========================================================================
       Konami Code Easter Egg
       ========================================================================== */
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Check if confetti function is available
                if (typeof confetti !== 'undefined') {
                    confetti({
                        particleCount: 150,
                        spread: 90,
                        origin: {
                            y: 0.6
                        }
                    });
                }
                konamiIndex = 0; // Reset for next time
            }
        } else {
            konamiIndex = 0; // Reset if the sequence is broken
        }
    });


    /* ==========================================================================
       Contact Form Submission Logic (Home Page)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');

    // Only add the event listener if the form exists on the current page
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const formspreeEndpoint = 'https://formspree.io/f/xblyoykb';

            fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Redirect to the thank you page on success
                    window.location.href = '/thank-you.html';
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert('Oops! There was a problem submitting your form');
                        }
                    });
                }
            }).catch(error => {
                console.error('Form submission error:', error);
                alert('Oops! There was a network problem.');
            });
        });
    }

})(); // End of IIFE