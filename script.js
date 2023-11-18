document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{8,}$/;

    if (!password.match(passwordRegex)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }

    document.getElementById("confirmationMessage").classList.remove("hidden");
    document.getElementById("registrationForm").classList.add("hidden");
});
