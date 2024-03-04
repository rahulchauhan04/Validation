// Select the form, input fields, and message elements
const form = document.getElementById('validationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMessage = document.getElementById('success-message');

// Validate the email input
function validateEmail() {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.style.display = 'none';
    } else {
        emailError.style.display = 'block';
        successMessage.style.display = 'none'; // Hide success message if email is invalid
    }
    checkValidations();
}

// Validate the password input
function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
        passwordError.style.display = 'none';
    } else {
        passwordError.style.display = 'block';
        successMessage.style.display = 'none'; // Hide success message if password is invalid
    }
    checkValidations();
}

// Check both validations and show success message if both are true
function checkValidations() {
    if (emailInput.value.length > 3 && emailInput.value.includes('@') && emailInput.value.includes('.') && passwordInput.value.length > 8) {
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
    }
}

// Attach event listeners to input fields for real-time validation feedback
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Handle the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Run the validations
    const isEmailValid = emailInput.value.length > 3 && emailInput.value.includes('@') && emailInput.value.includes('.');
    const isPasswordValid = passwordInput.value.length > 8;

    // Check if both validations passed
    if (isEmailValid && isPasswordValid) {
        // Confirm with the user to submit the form
        if (window.confirm('Do you want to submit the form?')) {
            alert('Successful signup!');
            // Here you could also submit the form or send the data to a server
            // For example: form.submit();
        } else {
            // Clear the form if user cancels
            emailInput.value = '';
            passwordInput.value = '';
            successMessage.style.display = 'none';
        }
    } else {
        successMessage.style.display = 'none';
    }
});

const emailPlaceholder = "example@domain.com";
let index = 0;

function updatePlaceholder() {
    if (index <= emailPlaceholder.length) {
        emailInput.placeholder = emailPlaceholder.substring(0, index++);
    } else {
        // Reset the animation
        index = 0;
    }
}

// Start the placeholder animation
setInterval(updatePlaceholder, 200); // Adjust the speed as necessary

// The rest of your JavaScript code remains unchanged
