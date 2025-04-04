// Product array
const products = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' },
    { id: '3', name: 'Product C' },
];

// Populate the product select options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Increment review counter and store in localStorage
window.onload = function() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', reviewCount);
};

// Update review count on review.html
document.getElementById('reviewForm').onsubmit = function() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) + 1;
    localStorage.setItem('reviewCount', reviewCount);
};
