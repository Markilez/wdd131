// Product array with features
const products = [
    { id: '1', name: 'Engine Cleaner', features: ['Grease Removal', 'Engine Protection', 'Corrosion Prevention', 'Easy Application'] },
    { id: '2', name: 'Engine Oil', features: ['Viscosity', 'Engine Protection', 'Heat Resistance', 'Fuel Efficiency'] },
    { id: '3', name: 'Tyre Polish', features: ['Durability', 'Tread Life', 'Wet Grip', 'Noise Reduction'] },
];

// Populate the product select options
document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('productName');
    const featuresContainer = document.getElementById('featuresContainer');

    if (productSelect) {
        // Clear existing options
        productSelect.innerHTML = '<option value="" disabled selected>Select a Product ...</option>';

        // Add product options
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            option.setAttribute('data-features', product.features.join(',')); // Add features as data attribute
            productSelect.appendChild(option);
        });

        // Handle product selection change
        productSelect.addEventListener('change', function () {
            const selectedProduct = productSelect.options[productSelect.selectedIndex];
            const features = selectedProduct.getAttribute('data-features').split(',');

            // Clear previous features
            featuresContainer.innerHTML = '';

            // Add new features
            features.forEach(feature => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="features" value="${feature}"> ${feature}`;
                featuresContainer.appendChild(label);
            });
        });
    } else {
        console.error('Product select element not found.');
    }
});

// Increment review counter and store in localStorage
window.onload = function () {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    localStorage.setItem('reviewCount', reviewCount);
};

// Update review count on form submission
document.getElementById('reviewForm').addEventListener('submit', function () {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);
});
