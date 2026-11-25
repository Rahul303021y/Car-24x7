"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");
  const loginRoot = document.querySelector(".login-root");
  const loginSuccess = document.getElementById("loginSuccess");
  const logoutButton = document.getElementById("Log-out-btn");

  // Check if token exists
  if (token) {
    loginRoot.style.display = "none";
    loginSuccess.style.display = "flex";
  } else {
    loginRoot.style.display = "flex";
    loginSuccess.style.display = "none";
  }

  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const togglePasswordIcon = togglePassword.querySelector("i");

  togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle the eye icon
    togglePasswordIcon.classList.toggle("bx-show");
    togglePasswordIcon.classList.toggle("bx-hide");
  });

  // Login form submission
  const loginForm = document.getElementById("stripe-login");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;

    // Fixed credentials
    const fixedUsername = "admin";
    const fixedPassword = "qwerty123";

    if (username === fixedUsername && password === fixedPassword) {
      // Store a login flag
      localStorage.setItem("token", "admin");

      // Hide login form and show success message
      loginRoot.style.display = "none";
      loginSuccess.style.display = "flex";
    } else {
      alert("Username or password incorrect");
    }
  });
});

// Dark and light mode
let moodBtn = document.querySelector("#Moon");

document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.querySelector(".mode-switch");

  // Save in local Storage
  const darkModeStored = localStorage.getItem("darkMode");

  // Check if it's dark or light
  if (darkModeStored === "true") {
    document.documentElement.classList.add("dark");
    modeSwitch.classList.add("active");
  }

  modeSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");

    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark")
    );
  });
});