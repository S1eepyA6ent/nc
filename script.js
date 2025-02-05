// Add optional animations or interactivity here
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });
  

  // Handle form switching
document.getElementById("to-signup").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
});

document.getElementById("to-login").addEventListener("click", function() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

// Login form validation
document.getElementById("login").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Simple validation (this can be replaced with a backend check)
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // You can send login credentials to a server here
  alert("Login Successful!");

  // Clear fields after submission
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
});

// Signup form validation
document.getElementById("signup").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Simple validation (this can be replaced with a backend check)
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // You can send signup details to a server here
  alert("Signup Successful!");

  // Clear fields after submission
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
});
// Handle form switching
document.getElementById("to-signup").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
});

document.getElementById("to-login").addEventListener("click", function() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

// Login form validation
document.getElementById("login").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Simple validation (this can be replaced with a backend check)
  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // You can send login credentials to a server here
  alert("Login Successful!");

  // Clear fields after submission
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
});

// Signup form validation
document.getElementById("signup").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Simple validation (this can be replaced with a backend check)
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // You can send signup details to a server here
  alert("Signup Successful!");

  // Clear fields after submission
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
});


// Toggle between login and sign-up forms
function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const signUpForm = document.getElementById("signUpForm");

  if (loginForm.classList.contains("hidden")) {
    loginForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
  } else {
    loginForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
  }
}

// Validate sign-up form
document.getElementById("signup").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Simulate storing user data (for demonstration only)
  alert("Sign-Up Successful! Now, log in.");
  toggleForms();
});

// Validate login form
document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Simulated check (in production, compare with server-side database)
  if (email && password) {
    alert("Login Successful!");
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
