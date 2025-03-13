document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const fullName = form.elements[0].value;
        const email = form.elements[1].value;
        const password = form.elements[2].value;

        const response = await fetch("http://localhost:5001/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullName, email, password })
        });

        const result = await response.json();
        alert(result.message);
    });
});
