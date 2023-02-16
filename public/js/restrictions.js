// const User = require("../../models/User");

const userRestrictions = async (event) => {
  //removed && diet && cuisine from 5
  if (allergies) {
    const allergyRoute = await fetch(`/api/users/allergies`, {
      method: "POST",
      body: JSON.stringify({ allergies }),
      headers: { "Content-Type": "application/json" },
    });
  }
  if (cuisine) {
    const cuisineRoute = await fetch(`/api/users/cuisines`, {
      method: "POST",
      body: JSON.stringify({ cuisine }),
      headers: { "Content-Type": "application/json" },
    });
  }
  //   if (diet) {
  //     console.log("checking");
  //     const dietRoute = await fetch(`/api/users/diets`, {
  //       method: "POST",
  //       body: JSON.stringify({ diet }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   }

  if (allergies && cuisine && diet) {
    document.location.replace("/myrecipes");
  } else {
    alert(response.statusText);
  }
};
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const form = document.getElementById("restrictions");
const allergies = [{ user_id: "2" }];
const diet = [{ user_id: "2" }];
const cuisine = [{ user_id: "2" }];

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
      case "paleo":
        diet.push({ paleo: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "vegan":
        diet.push({ vegan: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "vegetarian":
        diet.push({ vegetarian: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "keto":
        diet.push({ keto: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "calorieRestriction":
        diet.push({ calorieRestriction: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "glutenFree":
        diet.push({ glutenFree: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "african":
        cuisine.push({ african: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "american":
        cuisine.push({ american: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "british":
        cuisine.push({ british: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "cajun":
        cuisine.push({ cajun: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "caribbean":
        cuisine.push({ caribbean: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "chinese":
        cuisine.push({ chinese: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "easternEuropean":
        cuisine.push({ easternEuropean: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "european":
        cuisine.push({ european: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "french":
        cuisine.push({ french: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "german":
        cuisine.push({ german: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "greek":
        cuisine.push({ greek: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "irish":
        cuisine.push({ irish: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "indian":
        cuisine.push({ indian: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "italian":
        cuisine.push({ italian: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "japanese":
        cuisine.push({ japanese: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "jewish":
        cuisine.push({ jewish: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "korean":
        cuisine.push({ korean: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "latinAmerican":
        cuisine.push({ latinAmerican: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "mediterranean":
        cuisine.push({ mediterranean: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "mexican":
        cuisine.push({ mexican: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "middleEastern":
        cuisine.push({ middleEastern: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "nordic":
        cuisine.push({ nordic: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "southern":
        cuisine.push({ southern: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "spanish":
        cuisine.push({ spanish: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "thai":
        cuisine.push({ thai: checkbox.checked });
        break;
    }
    switch (currentFormId) {
      case "vietnamese":
        cuisine.push({ vietnamese: checkbox.checked });
        break;
    }
    // }
  });

  userRestrictions();
});
