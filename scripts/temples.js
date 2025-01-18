// Set Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set Last Modified Date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu Toggle
document.querySelector(".hamburger").addEventListener("click", function () {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
    this.textContent = nav.classList.contains("show") ? "✖" : "☰";
});

// Ensure Navigation Visibility on Larger Screens
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        document.querySelector("nav ul").classList.remove("show");
        document.querySelector(".hamburger").textContent = "☰";
    }
});
