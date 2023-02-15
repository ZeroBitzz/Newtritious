const userRestrictions = async (event) => {
  event.preventDefault();
  console.log(allergies, diet, cuisine);
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

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const form = document.getElementById("restrictions");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("why?!");
  const allergies = [];
  const diet = [];
  const cuisine = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const currentFormId = checkbox.value;
      switch (currentFormId) {
        case "peanuts":
          allergies.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "treeNuts":
          allergies.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "lactose":
          allergies.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "gluten":
          allergies.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "shellfish":
          allergies.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "keto":
          diet.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "paleo":
          diet.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "vegan":
          diet.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "vegetarian":
          diet.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "calorieRestriction":
          diet.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "glutenFree":
          diet.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "african":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "american":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "british":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "cajun":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "caribbean":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "chines":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "easternEuropean":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "european":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "french":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "german":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "greek":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "irish":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "indian":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "italian":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "japanese":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "jewish":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "korean":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "latinAmerican":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "mediterranean":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "mexican":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "middleEastern":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "nordic":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "southern":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "spanish":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "thai":
          cuisine.push(currentFormId);
          break;
      }
      switch (currentFormId) {
        case "vietnamese":
          cuisine.push(currentFormId);
          break;
      }
    }
  });
  console.log(allergies);
  console.log(diet);
  console.log(cuisine);

  userRestrictions();
});
