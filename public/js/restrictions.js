const userRestrictions = async (event) => {
  event.preventDefault();
  const allergies = document.getElementById("#allergies-signup").value.trim();
  const diets = document.getElementById("#diets-signup").value.trim();
  const cuisine = document.getElementById("#cuisine-signup").value.trim();
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

const testing = document.getElementById("restrictions");
console.log(testing);
testing.addEventListener("submit", userRestrictions);
