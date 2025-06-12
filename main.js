/* ==========================================================================
   IIFE to encapsulate all script logic
   ========================================================================== */
(function() {


    /* ==========================================================================
       PAGE TRANSITION LOGIC (NEW)
       ========================================================================== */
    window.addEventListener('load', () => {
        const transitionScreen = document.querySelector('.transition-screen');
        if (transitionScreen) {
            transitionScreen.classList.add('is-active');
        }
    });

    const allLinks = document.querySelectorAll('a:not([target="_blank"]):not([href*="#"])');

    allLinks.forEach(link => {
        link.addEventListener('click', e => {
            // Check if it's a link to a file (like a PDF) and ignore it for transitions
            if (link.href.match(/\.(pdf|jpg|jpeg|png|gif)$/i)) {
                return;
            }

            e.preventDefault();
            const transitionScreen = document.querySelector('.transition-screen');
            const destination = link.href;
            
            if (transitionScreen) {
                transitionScreen.classList.remove('is-active');
            }
            
            setTimeout(() => {
                window.location.href = destination;
            }, 500); // Match this duration to the CSS transition time
        });
    });

    

   /* ==========================================================================
       2. HERO PARAGRAPH TYPEWRITER EFFECT (CORRECTED)
       ========================================================================== */
    // This event fires when the initial HTML document has been completely loaded and parsed.
    document.addEventListener('DOMContentLoaded', () => {
        const paragraphElement = document.getElementById('hero-paragraph-typewriter');

        // Only run this code if we are on the home page (where the element exists)
        if (!paragraphElement) {
            return;
        }

        const textToType = paragraphElement.textContent.trim();
        let animationStarted = false;

        function startTypewriter() {
            if (animationStarted) return;
            animationStarted = true;

            paragraphElement.textContent = ''; // Clear the paragraph initially

            let i = 0;
            const typingSpeed = 25; // Speed in milliseconds

            function type() {
                if (i < textToType.length) {
                    paragraphElement.textContent += textToType.charAt(i);
                    i++;
                    setTimeout(type, typingSpeed);
                }
            }
            type(); // Start the animation
        }

        // Start the animation after the page transition has finished.
        setTimeout(startTypewriter, 500);
    });


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

    setupModal('academic-card', 'academic-modal');
    setupModal('skills-card', 'skills-modal');
    setupModal('extracurricular-card', 'extracurricular-modal');

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
                if (typeof confetti !== 'undefined') {
                    confetti({
                        particleCount: 150,
                        spread: 90,
                        origin: { y: 0.6 }
                    });
                }
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });


    /* ==========================================================================
       Contact Form Submission Logic (Home Page)
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');

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


    /* ==========================================================================
       3D TILT EFFECT INITIALIZATION (NEW)
       ========================================================================== */
    // Check if the VanillaTilt library is loaded before trying to use it
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 15,        // Max tilt rotation (degrees)
            speed: 400,     // Speed of the enter/exit transition
            glare: true,    // If it should have a "glare" effect
            "max-glare": 0.5 // The glare opacity (0.5 = 50%)
        });
    }


})(); // End of IIFE