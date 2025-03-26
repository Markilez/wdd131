const temples = [
    {
        name: "England Preston Temple",
        location: "Preston, England",
        dedicated: "1998",
        area: 69630,
        image: "images/prestontemple.jpg" // Replace with actual image URL
    },
    {
        name: "Gilbert Arizona Temple",
        location: "Gilbert, Arizona, USA",
        dedicated: "2014",
        area: 85326,
        image: "images/gilbertarizonatemple.jpg"
    },
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005",
        area: 11500,
        image: "images/abanigeriatemple.webp"
    },
    {
        name: "Durban Temple",
        location: "Durban, South Africa",
        dedicated: "2020",
        area: 19860,
        image: "images/durbantemple.webp"
    },
    {
        name: "Taylorsville Utah Temple",
        location: "Taylorsville, Utah, USA",
        dedicated: "2024",
        area: 73492,
        image: "images/taylorsvilleutahtemple.webp"
    },
    {
        name: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "2025",
        area: 6081,
        image: "images/nairobikenyatemple.jpg"
    },
    {
        name: "California Temple",
        location: "California, USA",
        dedicated: "1990",
        area: 95000,
        image: "images/californiatemple.jpg"
    },
    {
        name: "Brigham City Temple",
        location: "Brigham City, Utah, USA",
        dedicated: "2012",
        area: 36000,
        image: "images/BrighamCityTemple.jpg"
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893",
        area: 382207,
        image: "images/saltlakecitytemple.jpg"
    },
    // Add additional temple objects here
];

function displayTemples(temples) {
    const templeGrid = document.querySelector('.temple-grid');
    templeGrid.innerHTML = ''; // Clear existing content

    temples.forEach(temple => {
        const templeCard = document.createElement('figure');
        templeCard.innerHTML = `
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <figcaption>
                <h2>${temple.name}</h2>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            </figcaption>
        `;
        templeGrid.appendChild(templeCard);
    });
}

// Initial display of all temples
displayTemples(temples);

// Filter functionality
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute('data-filter');

        let filteredTemples = temples;

        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated) < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => parseInt(temple.dedicated) > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'all':
            default:
                break; // No filtering
        }

        displayTemples(filteredTemples);
    });
});

// Footer year and last modified
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
