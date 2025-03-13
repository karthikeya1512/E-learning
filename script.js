document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = event.target.elements[0].value;
    const password = event.target.elements[1].value;

    try {
        const response = await fetch('http://localhost:5001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful');
            window.location.href = 'dashboard.html'; // Redirect after login
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
