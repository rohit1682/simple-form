/** Handle Sign-Up Form Submission */
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = { username, email, password };

    // Save user to localStorage
    localStorage.setItem(username, JSON.stringify(user));

    alert("Sign-Up Successful! You can now login.");
    signupForm.reset();
  });
}

/** Handle Login Form Validation */
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve user from localStorage
    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
      alert("Login Successful! Welcome back, " + user.username);
    } else {
      alert("Invalid username or password!");
    }

    loginForm.reset();
  });
}