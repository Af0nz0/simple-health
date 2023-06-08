
var dietDropdownItems = document.querySelectorAll(
  "#dropdown-menu .dropdown-item"
);
var fitnessLevelDropdownItems = document.querySelectorAll(
  "#dropdown-menu-fitness .dropdown-item"
);
var submitBtnEl = document.getElementById("submitButton");
var dietSelectEl = document.querySelector("#dietDropdown");
var fitnessLevelSelectEl = document.querySelector("#fitnessDropdown");
var resultsContainer = document.getElementById("resultsContainer");

// api key for spoonacular
const apiKeySpoon = "1d64cc9f05074215a8f6700fba9b13c2";
// api key for exercise ninja
const apiKeyExercise = "5448159d70mshd5840af61bc30f4p179a31jsn152d9ac45d5b";
// Make the API request

async function getMealPlan(chosenDiet) {
    var res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKeySpoon}&query=${chosenDiet}`
    );
    var data = await res.json();
    console.log(data);

    var resultElement = document.createElement("div");
      console.log("Total Results:", data.totalResults);
      console.log("hey");
      console.log("First Recipe Title:", data.results[0].title);
      resultElement.textContent = "Meal Plan Result: " + data.results[0].title; // Replace with your actual result data
      resultsContainer.appendChild(resultElement);


      // ...

      // You can also log the entire object as a string
      console.log("Data as String:", JSON.stringify(data));
}


async function getWorkoutPlan(difficultyLevel) {
  var resp = await fetch(
      `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficultyLevel}`,
    {
      method: "GET",
      headers: {
        "X-RapidApi-Key": apiKeyExercise, // Replace with your actual API key
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    })
    var data2 = await resp.json();
    console.log(data2);

    console.log("Name of exercise:", data2[0].name);

    var resultElement = document.createElement("div");
    resultElement.textContent = "Workout Plan Result: " + data2[0].name; // Replace with your actual result data
    resultsContainer.appendChild(resultElement);
}

// var difficultyLevel = "beginner"; // Replace with the desired difficulty level: beginner, intermediate, or expert
// function getWorkoutPlan() {
// fetch(
//   `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=${difficultyLevel}`,
//   {
//     method: "GET",
//     headers: {
//       "X-RapidApi-Key": apiKeyExercise, // Replace with your actual API key
//       "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
//     },
//   }
// )
//   .then((response) => {
//     console.log(response)

//     return response.json()
//   })
    
//   .then((data) => {
//     console.log("Workout Plan:");
//     console.log(data);
//     // Handle the retrieved workout plan data here
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// }



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

submitBtnEl.addEventListener('click', function() {
  var selectedDiet = dietSelectEl.value;
  var selectedFitnessLevel = fitnessLevelSelectEl.value;

  console.log("Selected Diet:", selectedDiet);
  console.log("Selected Fitness Level", selectedFitnessLevel);

  getMealPlan(selectedDiet);
  getWorkoutPlan(selectedFitnessLevel);
});
