document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const loginPage = document.getElementById("login");

    if (!loginForm || !loginPage) return;

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const loginMessage = document.getElementById("loginMessage");

    // Ambil bagian beranda selain halaman login
    const bagianBeranda = Array.from(
        document.body.children
    ).filter(function (bagian) {
        return bagian !== loginPage &&
               bagian.tagName !== "SCRIPT";
    });

    function tampilkanLogin() {
        loginPage.style.display = "";

        bagianBeranda.forEach(function (bagian) {
            bagian.style.display = "none";
        });
    }

    function tampilkanBeranda() {
        loginPage.style.display = "none";

        bagianBeranda.forEach(function (bagian) {
            bagian.style.display = "";
        });

        window.scrollTo(0, 0);
    }

    // Periksa status ketika website dibuka
    if (sessionStorage.getItem("ruangNovelLogin") === "berhasil") {
        tampilkanBeranda();
    } else {
        tampilkanLogin();
    }

    // Proses login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = username.value.trim();
        const sandi = password.value;

        usernameError.textContent = "";
        passwordError.textContent = "";
        loginMessage.textContent = "";
        loginMessage.className = "mt-3 text-center";

        let valid = true;
        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            usernameError.textContent = "Email wajib diisi.";
            valid = false;
        } else if (!polaEmail.test(email)) {
            usernameError.textContent = "Format email tidak valid.";
            valid = false;
        }

        if (sandi.trim() === "") {
            passwordError.textContent = "Password wajib diisi.";
            valid = false;
        } else if (sandi.length < 8) {
            passwordError.textContent =
                "Password minimal 8 karakter.";
            valid = false;
        }

        if (!valid) {
            loginMessage.textContent =
                "Periksa kembali email dan password kamu.";
            loginMessage.classList.add("text-danger");
            return;
        }

        loginMessage.textContent =
            "Login berhasil! Selamat datang di Ruang Novel ♡";
        loginMessage.classList.add("text-success");

        sessionStorage.setItem("ruangNovelLogin", "berhasil");

        setTimeout(function () {
            tampilkanBeranda();
        }, 800);
    });

});