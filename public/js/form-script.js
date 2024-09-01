document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('my-form-button').addEventListener('click', function() {
        // Clear previous status message
        const statusElement = document.getElementById('my-form-status');
        statusElement.textContent = '';
        statusElement.style.color = 'red';

        // Get form elements
        const form = document.getElementById('contactForm');
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value.trim();
        const comments = document.getElementById('area-text').value.trim();

        let isValid = true;

        // Validate fields
        if (!name) {
            statusElement.textContent += 'Name is required. ';
            isValid = false;
        }

        if (!email) {
            statusElement.textContent += 'Email is required. ';
            isValid = false;
        }

        if (!service) {
            statusElement.textContent += 'Please select a service. ';
            isValid = false;
        }

        if (!date) {
            statusElement.textContent += 'Date is required. ';
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            form.submit();
        }
    });
});
