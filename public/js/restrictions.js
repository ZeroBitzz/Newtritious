// const User = require("../../models/User");

const userRestrictions = async (event) => {
  if (allergies && diet && cuisine) {
    console.log(allergies);
    const response = await fetch(`/api/users/restrictions`, {
      method: "POST",
      body: JSON.stringify({ allergies }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/myrecipes");
    } else {
      alert(response.statusText);
    }
  }
};

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const form = document.getElementById("restrictions");
const allergies = [{ user_id: "2" }];
const diet = [];
const cuisine = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkboxes.forEach((checkbox) => {
    // if (checkbox.checked) {
    console.log(checkbox.checked);

    const currentFormId = checkbox.value;
    console.log(currentFormId);
    switch (currentFormId) {
      case "peanuts":
        allergies.push({ peanuts: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "treeNuts":
        allergies.push({ treeNuts: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "lactose":
        allergies.push({ lactose: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "gluten":
        allergies.push({ gluten: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "shellfish":
        allergies.push({ shellfish: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "keto":
        diet.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "paleo":
        diet.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "vegan":
        diet.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "vegetarian":
        diet.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "calorieRestriction":
        diet.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "glutenFree":
        diet.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "african":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "american":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "british":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "cajun":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "caribbean":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "chines":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "easternEuropean":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "european":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "french":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "german":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "greek":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "irish":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "indian":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "italian":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "japanese":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "jewish":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "korean":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "latinAmerican":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "mediterranean":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "mexican":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "middleEastern":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "nordic":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "southern":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "spanish":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "thai":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "vietnamese":
        cuisine.push({ currentFormId: checkbox.checked });
        break;
    }
    // }
  });
  console.log(allergies);
  console.log(diet);
  console.log(cuisine);

  userRestrictions();
});
