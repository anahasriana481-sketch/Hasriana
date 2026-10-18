
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const loginMessage = document.getElementById("loginMessage");

    usernameError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";
    loginMessage.className = "mt-3 text-center";

    let valid = true;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username === "") {
        usernameError.textContent = "Email wajib diisi.";
        valid = false;
    } else if (!polaEmail.test(username)) {
        usernameError.textContent = "Email harus valid, contoh nama@gmail.com.";
        valid = false;
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password wajib diisi.";
        valid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password minimal 8 karakter.";
        valid = false;
    }

    if (!valid) {
        loginMessage.textContent = "Periksa kembali input kamu.";
        loginMessage.classList.add("text-danger");
        return;
    }

    loginMessage.textContent = "Validasi berhasil!";
    loginMessage.classList.add("alert", "alert-success");
});