
    // Parse query parameters from the URL
    const params = new URLSearchParams(window.location.search);

    // Display the submitted data dynamically
    const submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = `
    <p><strong>Name:</strong> ${params.get('name')}</p>
    <p><strong>Email:</strong> ${params.get('email')}</p>
    <p><strong>Message:</strong> ${params.get('message')}</p>
    `;

    // Generate and display the current timestamp
    const timestamp = new Date();
    document.getElementById('timestamp').textContent = timestamp.toLocaleString();
