const userRestrictions = async (event) => {
  event.preventDefault();

  const allergies = document
    .querySelector("allergies-signup")
    .addEventListener("click", function () {
      let checked = document.querySelectorAll("input[type='checkbox']:checked");
      checked.forEach(function (cb) {
        console.log(cb.value);
      });
    });
  const diets = document.getElementById("diets-signup").value;
  const cuisine = document.getElementById("cuisine-signup").value;
  console.log(allergies, diets, cuisine);
  if (allergies && diets && cuisine) {
    const response = await fetch("/api/users/:id", {
      method: "POST",
      body: JSON.stringify({ allergies, diets, cuisine }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("myrecipes");
    } else {
      alert(response.statusText);
    }
  }
};

// const testing = document.getElementById("restrictions");
// testing.addEventListener("submit", userRestrictions);

document
  .getElementById("restrictions")
  .addEventListener("submit", userRestrictions);
