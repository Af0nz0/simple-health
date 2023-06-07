//  const TestAPIURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2';



// var dietDropdownValEl = document.querySelector("dropdown - item");
//   var dietDropdownEl = document.querySelector("#dropdown is-hoverable");
  
var dietDropdownItems = document.querySelectorAll(
  "#dropdown-menu .dropdown-item"
);
var fitnessLevelDropdownItems = document.querySelectorAll(
  "#dropdown-menu-fitness .dropdown-item"
);
var submitBtnEl = document.getElementById("submitButton");
var selectEl = document.querySelector("select");

//var submitBtnEl = document.querySelector("#submitButton");


// api key for spoonacular
const apiKeySpoon = "1d64cc9f05074215a8f6700fba9b13c2";
// api key for exercise ninja
const apiKeyExercise = "5448159d70mshd5840af61bc30f4p179a31jsn152d9ac45d5b";
// Make the API request

function getMealPlan(chosenDiet) {

  console.log("hey");
fetch(
  `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKeySpoon}&query=${chosenDiet}`
)
  
  .then((response) => response.json())
  .then((data) => {
    // Process the response data
    console.log("hi");
    const recipes = data.results;

    // Loop through each recipe
    recipes.forEach((recipe) => {
      console.log("hello");
      console.log(recipe.title);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
    console.log("hi1");
  });
}

var difficultyLevel = "beginner"; // Replace with the desired difficulty level: beginner, intermediate, or expert
function getWorkoutPlan() {
fetch(
  `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficultyLevel}`,
  {
    method: "GET",
    headers: {
      "X-RapidApi-Key": apiKeyExercise, // Replace with your actual API key
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    console.log(response)

    return response.json()
  })
    
  .then((data) => {
    console.log("Workout Plan:");
    console.log(data);
    // Handle the retrieved workout plan data here
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

// dietDropdownItems.forEach(function (item) {
//   item.addEventListener("click", function (event) {
//     var element = event.target;
//     var selectedDiet = event.target.textContent;
//     element.setAttribute("class", "is-active");
//     console.log("Selected Diet:", selectedDiet);
//     return selectedDiet;
//     // Use the selected diet value as needed
//   });
// });

dietDropdownItems.forEach(function (item) {
  item.addEventListener("click", function (event) {
    var element = event.target;
    var selectedDiet = event.target.textContent;
    dietDropdownItems.forEach(function (item) {
      item.classList.remove("is-active");
    });
    element.classList.add("is-active");
    console.log("Selected Diet:", selectedDiet);
    // Use the selected diet value as needed
  });
});



//getWorkoutPlan();

submitBtnEl.addEventListener("click", getMealPlan(selectEl.value));
