const temples = [
    {
        name: "Washington DC Temple",
        location: "Washington, D.C.",
        dedicated: "November 19, 1974",
        area: 160000,
        imageUrl: "https://i.ibb.co/NFDPQ2N/EU7-W27-BCWJZN7-EGBYYSMZAWCU4.jpg"
    },
    {
        name: "Palmyra NY Temple",
        location: "Palmyra, New York",
        dedicated: "April 6, 2000",
        area: 10700,
        imageUrl: "https://i.ibb.co/dp11y2G/Palmyra-Temple-01.jpg"
    },
    {
        name: "Salt Lake City Temple",
        location: "Salt Lake City, Utah",
        dedicated: "April 6, 1893",
        area: 253015,
        imageUrl: "https://i.ibb.co/k8mmgN5/190419150647-salt-lake-city-temple.jpg"
    },
    // Add at least 3 more temples
];

// Function to display temples
function displayTemples(filteredTemples) {
    const templeGrid = document.getElementById("templeGrid");
    templeGrid.innerHTML = ""; // Clear grid before adding filtered temples

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
        `;
        templeGrid.appendChild(card);
    });
}

// Function to filter temples
function filterTemples(category) {
    let filteredTemples = [];

    switch (category) {
        case "old":
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[1]) < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[1]) > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

// Event Listeners for filtering
document.getElementById("filter-home").addEventListener("click", () => filterTemples("home"));
document.getElementById("filter-old").addEventListener("click", () => filterTemples("old"));
document.getElementById("filter-new").addEventListener("click", () => filterTemples("new"));
document.getElementById("filter-large").addEventListener("click", () => filterTemples("large"));
document.getElementById("filter-small").addEventListener("click", () => filterTemples("small"));

// Load all temples on page load
window.onload = () => displayTemples(temples);

// Footer Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
