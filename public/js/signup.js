const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const allergies = document.getElementById("allergy-signup").value;
  const diet = document.getElementById("diet-signup").value;
  console.log(username, password, allergies, diet);
  if (username && password && allergies && diet) {
    const response = await fetch("controllers/api/userRoutes.js", {
      method: "POST",
      body: JSON.stringify({ username, password, allergies, diet }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/myrecipes");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
