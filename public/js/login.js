const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
  if (username && password) {
    console.log(username, password);
    // Send a POST request to the API endpoint
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("is it working?");
      // If successful, redirect the browser to the profile page
      document.location.replace("preferences");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
