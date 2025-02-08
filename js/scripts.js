// Sample product array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
];

// Function to populate the product select options dynamically
window.onload = function() {
    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
};

// Store and update review count in localStorage
document.getElementById("product-review-form").onsubmit = function() {
    let reviewCount = localStorage.getItem("reviewCount");
    if (reviewCount) {
        reviewCount = parseInt(reviewCount) + 1;
    } else {
        reviewCount = 1;
    }
    localStorage.setItem("reviewCount", reviewCount);
};
