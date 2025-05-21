document.addEventListener('DOMContentLoaded', function() {
    // Get all cards that should have modals
    const cards = document.querySelectorAll('.attraction-card, .restaurant-card, .entertainment-card, .gallery-card');
    
    cards.forEach(card => {
        // Create modal for each card
        const modalId = 'modal-' + Math.random().toString(36).substr(2, 9);
        const cardTitle = card.querySelector('h3').textContent;
        const cardDescription = card.querySelector('p').textContent;
        const cardImage = card.querySelector('img').src;
        
        // Get additional details based on card type
        let expandedDescription = '';
        let additionalDetails = '';
        
        if (card.classList.contains('attraction-card')) {
            expandedDescription = `${cardDescription} Experience the thrill of this amazing attraction that combines excitement with safety. Our state-of-the-art ride features cutting-edge technology and is regularly maintained by our expert team. Perfect for thrill-seekers and adventure enthusiasts, this attraction offers an unforgettable experience with multiple elements of surprise and excitement.`;
            additionalDetails = card.querySelector('.card-meta') ? card.querySelector('.card-meta').outerHTML : '';
        } else if (card.classList.contains('restaurant-card')) {
            expandedDescription = `${cardDescription} Indulge in a culinary journey at our renowned dining establishment. Our expert chefs use only the finest ingredients to create memorable dishes. The restaurant features a carefully curated menu that combines traditional flavors with innovative techniques. Enjoy your meal in our beautifully designed space that offers both comfort and elegance.`;
            additionalDetails = card.querySelector('.restaurant-features') ? card.querySelector('.restaurant-features').outerHTML : '';
        } else if (card.classList.contains('entertainment-card')) {
            expandedDescription = `${cardDescription} Immerse yourself in this spectacular entertainment experience. Our talented performers bring years of expertise and passion to create a show that will leave you amazed. The performance combines stunning visuals, captivating music, and engaging storytelling to create an unforgettable experience for the whole family.`;
            additionalDetails = card.querySelector('.show-details') ? card.querySelector('.show-details').outerHTML : '';
        } else if (card.classList.contains('gallery-card')) {
            expandedDescription = `${cardDescription} Capture the magic of this beautiful moment in our park. Each image tells a unique story of joy, excitement, and wonder. Our professional photographers work tirelessly to document these special moments, ensuring that every visitor can take home memories that will last a lifetime.`;
            additionalDetails = card.querySelector('.gallery-meta') ? card.querySelector('.gallery-meta').outerHTML : '';
        }
        
        // Create modal HTML
        const modalHTML = `
            <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="${modalId}Label">${cardTitle}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="${cardImage}" class="img-fluid rounded" alt="${cardTitle}">
                                </div>
                                <div class="col-md-6">
                                    <p class="modal-description">${expandedDescription}</p>
                                    ${additionalDetails}
                                    <div class="modal-features">
                                        <h6>Key Features:</h6>
                                        <ul>
                                            <li>Professional staff and expert guidance</li>
                                            <li>Regular maintenance and safety checks</li>
                                            <li>Family-friendly environment</li>
                                            <li>Accessible facilities</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Add click event to card
        card.addEventListener('click', function(e) {
            // Prevent default if there's a link in the card
            if (!e.target.closest('a')) {
                e.preventDefault();
                const modal = new bootstrap.Modal(document.getElementById(modalId));
                modal.show();
            }
        });
    });
}); 