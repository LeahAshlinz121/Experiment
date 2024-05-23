document.addEventListener('DOMContentLoaded', function() {
    const listings = [
        {
            title: "Blog Website",
            description: "A well-established blog with a large following.",
            price: "$2000"
        },
        {
            title: "E-commerce Website",
            description: "A fully functional e-commerce site with inventory management.",
            price: "$5000"
        },
        {
            title: "Portfolio Website",
            description: "A sleek portfolio website suitable for freelancers.",
            price: "$800"
        }
    ];

    const websiteList = document.getElementById('website-list');

    listings.forEach(listing => {
        const listingDiv = document.createElement('div');
        listingDiv.classList.add('listing');

        const title = document.createElement('h3');
        title.textContent = listing.title;

        const description = document.createElement('p');
        description.textContent = listing.description;

        const price = document.createElement('p');
        price.textContent = `Price: ${listing.price}`;

        listingDiv.appendChild(title);
        listingDiv.appendChild(description);
        listingDiv.appendChild(price);

        websiteList.appendChild(listingDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. We will get back to you shortly.');
        contactForm.reset();
    });
});
