// Get elements
const signSection = document.getElementById('sign');
const successSection = document.getElementById('success');
const emailInput = document.getElementById('email');
const signBtn = document.getElementById('signbtn');
const dismissBtn = document.getElementById('dismissbtn');
const userEmailSpan = document.getElementById('user');
const errorLabel = document.querySelector('.error');

// Hide success section initially
successSection.style.display = 'none';
errorLabel.style.display = 'none';

// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Sign up button click event
signBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
        // Show success section and hide sign up section
        signSection.style.display = 'none';
        successSection.style.display = 'block';
        // Display user email
        userEmailSpan.textContent = email;
    } else {
        // Show error message
        errorLabel.style.display = 'block';
    }
});

// Dismiss button click event
dismissBtn.addEventListener('click', () => {
    // Hide success section and show sign up section
    successSection.style.display = 'none';
    signSection.style.display = 'block';
    // Clear email input
    emailInput.value = '';
    // Hide error message
    errorLabel.style.display = 'none';
});