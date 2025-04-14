
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create query string from form data
    const queryParams = new URLSearchParams({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }).toString();

    // Redirect to the Thank You page with query parameters
    window.location.href = `thankyou.html?${queryParams}`;
});