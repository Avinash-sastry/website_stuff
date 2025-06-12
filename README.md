

Welcome to the repository for my personal portfolio website. This project is a fully responsive and interactive single-page application designed to showcase my skills, projects, and professional journey as an Electronics and Communication Engineering student with a passion for VLSI, AI, and modern web technologies.

This portfolio was built from the ground up with a strong focus on clean code, modern design principles, and creating a unique and memorable user experience through fluid animations and thematic details.

### [View Live Demo](https://avinash-sastry-007.netlify.app/)

---

### ✨ Key Features

This portfolio is more than just a static page; it's packed with features designed to be engaging and professional:

-   **Stunning Animations & Transitions:**
    -   **Smooth Page Transitions:** A seamless fade-in/fade-out effect makes navigating the site feel like using a single, cohesive application.
    -   **Slick Logo Glitch Effect:** The name logo features a high-tech digital glitch animation on hover, reinforcing the tech theme.
    -   **Interactive 3D Tilt:** All project and highlight cards have a subtle 3D tilt effect that responds to the user's cursor, creating a sense of depth.
    -   **Dynamic Typewriter:** The "About Me" section features an engaging typewriter effect that animates on page load.
    -   **Animate on Scroll:** Elements gracefully fade into view as the user scrolls down the page, powered by AOS.

-   **Custom Thematic UI:**
    -   **Thematic Custom Cursor:** A custom-designed NOT gate SVG serves as the cursor, adding a unique, nerdy touch that reflects my ECE background.
    -   **Light/Dark Mode:** A fully functional theme toggle that respects user preference by saving the choice in `localStorage`.

-   **Interactive Elements:**
    -   **Detailed Modals:** Clickable highlight cards on the homepage open modals with detailed academic, skill, and extracurricular information.
    -   **Functional Contact Form:** An integrated contact form using Formspree allows visitors to get in touch easily.
    -   **Konami Code Easter Egg:** A hidden surprise for those in the know! (`↑ ↑ ↓ ↓ ← → ← → B A`)

-   **Code & Design:**
    -   **Fully Responsive:** The layout is meticulously crafted to look and work beautifully on all devices, from mobile phones to desktop screens.
    -   **Clean & Maintainable:** Built with semantic HTML5, modern CSS3 (using variables), and well-organized, modular JavaScript.

---

### 🚀 Technology Stack

-   **Frontend:**
    -   HTML5
    -   CSS3 (with CSS Variables for theming)
    -   JavaScript (ES6)

-   **Libraries:**
    -   [Font Awesome](https://fontawesome.com/) - For high-quality icons.
    -   [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) - For scroll animations.
    -   [Vanilla-Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) - For the 3D card tilt effect.
    -   [Canvas Confetti](https://github.com/catdad/canvas-confetti) - For the Konami code easter egg.

-   **Services:**
    -   [Formspree](https://formspree.io/) - For the backend processing of the contact form.
    -   [Netlify](https://www.netlify.com/) - For hosting and deployment.

---

### 📂 File Structure

The project is organized with a clean and intuitive file structure.

```
/
├── 📄 index.html             # Main landing page
├── 📄 projects.html          # Projects showcase page
├── 📄 certifications.html    # Certifications page
├── 📄 thank-you.html         # Contact form submission success page
│
├── 📄 style.css              # All styles for the website
├── 📄 main.js                # All JavaScript functionality
│── 📄 not-gate-cursor.svg # Custom cursor image
│── 📄 hero-image.jpg      # Background image for the hero section
├
│
│
├── 📂 reports/                # PDF reports for projects
│   └── ...
│
├── 📂 credentials/            # PDF versions of certifications
│   └── ...
│
└── 📄 README.md               # You are here!
```

---

### 🔧 Setup and Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Avinash-sastry/website_stuff.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd website_stuff
    ```

3.  **Open `index.html` in your browser.**
    -   For the best experience and to ensure the custom cursor works correctly (due to local file access restrictions in some browsers), it's recommended to use a live server. If you are using Visual Studio Code, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

---

### ✍️ Customization

To customize this portfolio for your own use:

-   **Hero Section Text:** Edit the `<h1>` and `<p>` tags inside the `<section class="hero">` in `index.html`.
-   **Projects & Certifications:** Add or modify the `project-card` divs in `projects.html` and `certifications.html`. Remember to place your report/credential PDFs in the appropriate folders.
-   **Modal Content:** The content for the modals on the home page is located at the bottom of `index.html`.
-   **Contact Form:** To receive messages at your own email, create a new form on [Formspree](https://formspree.io/) and replace the endpoint URL in `main.js`.

---

### 📞 Contact

Avinash Sastry – [aa0207@srmist.edu.in](mailto:aa0207@srmist.edu.in)

Project Link: [https://github.com/Avinash-sastry/website_stuff](https://github.com/Avinash-sastry/website_stuff)

---

