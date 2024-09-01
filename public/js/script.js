document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('my-form-button');
    const statusElement = document.getElementById('my-form-status');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        statusElement.textContent = '';
        statusElement.style.color = 'red';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value.trim();
        const comments = document.getElementById('area-text').value.trim();

        let isValid = true;

        if (!name) {
            statusElement.textContent += 'Name is required. ';
            isValid = false;
        }

        if (!email) {
            statusElement.textContent += 'Email is required. ';
            isValid = false;
        } else if (!validateEmail(email)) {
            statusElement.textContent += 'Email is invalid. ';
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

        if (isValid) {
            // Example of an AJAX form submission
            const formData = new FormData(form);

            fetch('/submit-form', { // Replace with your form handler URL
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                statusElement.textContent = 'Form submitted successfully!';
                statusElement.style.color = 'green';
                form.reset();
            })
            .catch(error => {
                statusElement.textContent = 'There was an error submitting the form.';
            });
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  });

  server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
  });

  // Import the Firebase modules
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Example usage
const auth = firebase.auth();
const firestore = firebase.firestore();

  