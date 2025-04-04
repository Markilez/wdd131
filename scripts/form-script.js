// Product array
const products = [
    { id: '1', name: 'Engine Cleaner' },
    { id: '2', name: 'Engine Oil' },
    { id: '3', name: 'Tyre Polish' },
];

// Populate the product select options
const productSelect = document.getElementById('productName');
if (productSelect) {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
} else {
    console.error('Product select element not found.');
}

// Increment review counter and store in localStorage
window.onload = function() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    localStorage.setItem('reviewCount', reviewCount);
};

// Update review count on form submission
document.getElementById('reviewForm').onsubmit = function() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) + 1;
    localStorage.setItem('reviewCount', reviewCount);
};
