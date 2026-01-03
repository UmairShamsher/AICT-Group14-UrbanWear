function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Dummy login data
    var correctEmail = "urbanwear@gmail.com";
    var correctPassword = "123";

    if (email === correctEmail && password === correctPassword) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText =
            "Invalid email or password";
    }
}
