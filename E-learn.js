document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");

    const nav = document.querySelector("nav ul");
    document.querySelector("nav").insertBefore(navToggle, nav);

    navToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Simulated authentication check
    function checkLogin() {
        const user = localStorage.getItem("user");
        if (user) {
            document.querySelector(".logo").innerText = `Welcome, ${user}`;
        }
    }

    checkLogin();

    // Simulated login function (replace with actual authentication)
    function login(username) {
        localStorage.setItem("user", username);
        alert("Login successful");
        checkLogin();
    }

    function logout() {
        localStorage.removeItem("user");
        alert("Logged out");
        location.reload();
    }

    // Attach login/logout events if necessary
    window.login = login;
    window.logout = logout;
});
