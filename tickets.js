// Ticket prices
const TICKET_PRICES = {
    weekday: 49,
    weekend: 69,
    family: 199
};

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.querySelector('.booking-form');
    const ticketTypeSelect = document.getElementById('ticket-type');
    const quantityInput = document.getElementById('quantity');
    const visitDateInput = document.getElementById('visit-date');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    visitDateInput.min = today;

    // Update quantity max based on ticket type
    ticketTypeSelect.addEventListener('change', function() {
        if (this.value === 'family') {
            quantityInput.max = 4;
            quantityInput.value = 4;
        } else {
            quantityInput.max = 10;
        }
    });

    // Handle form submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const ticketType = ticketTypeSelect.value;
        const quantity = parseInt(quantityInput.value);
        const visitDate = visitDateInput.value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Calculate total price
        const totalPrice = TICKET_PRICES[ticketType] * quantity;

        // Create booking confirmation
        const confirmation = {
            ticketType: ticketType,
            quantity: quantity,
            visitDate: visitDate,
            name: name,
            email: email,
            phone: phone,
            totalPrice: totalPrice,
            bookingId: generateBookingId()
        };

        // Show confirmation message
        showConfirmation(confirmation);

        // Reset form
        bookingForm.reset();
    });
});

// Generate a random booking ID
function generateBookingId() {
    return 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Show booking confirmation
function showConfirmation(confirmation) {
    const confirmationHTML = `
        <div class="confirmation-modal">
            <div class="confirmation-content">
                <h2>Booking Confirmed!</h2>
                <p>Booking ID: ${confirmation.bookingId}</p>
                <p>Ticket Type: ${confirmation.ticketType.charAt(0).toUpperCase() + confirmation.ticketType.slice(1)} Pass</p>
                <p>Quantity: ${confirmation.quantity}</p>
                <p>Visit Date: ${confirmation.visitDate}</p>
                <p>Total Price: $${confirmation.totalPrice}</p>
                <p>A confirmation email has been sent to ${confirmation.email}</p>
                <button onclick="this.parentElement.parentElement.remove()" class="btn-primary">Close</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', confirmationHTML);
}

// Toggle procedure section
function toggleProcedure() {
    const procedureSteps = document.getElementById('procedure-steps');
    const procedureHeader = document.querySelector('.procedure-header');
    const procedureIcon = document.getElementById('procedure-icon');
    
    procedureSteps.classList.toggle('show');
    procedureHeader.classList.toggle('active');
    
    // Smooth scroll to the content when expanding
    if (procedureSteps.classList.contains('show')) {
        setTimeout(() => {
            procedureSteps.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
} 