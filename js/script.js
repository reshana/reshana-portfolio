/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");


/* Change active item when clicking */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* Change active item while scrolling */

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});





/* =========================================================
   DARK MODE
========================================================= */

const themeToggle = document.querySelector(".theme-toggle");

// Apply the saved theme when the page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeIcon();


// Switch theme when the button is clicked
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    updateThemeIcon();

});


// Update the button icon and accessibility label
function updateThemeIcon() {

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode ? "☀" : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );

}



/* MOBILE NAVIGATION */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu after selecting a section
navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

