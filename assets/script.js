
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
var savedMealPlansLink = document.getElementById("savedMealPlansLink");
var savedWorkoutsLink = document.getElementById("savedWorkoutsLink");
var aboutUsLink = document.getElementById("aboutUsLink");

function redirectToAboutUsPage(event) {
  event.preventDefault();
  // Redirect to the about us page
  window.location.href = "about-us.html";
}
// api key for spoonacular
const apiKeySpoon = "6183a54844d84957afa9d1512dd3fa34";
// api key for exercise ninja
const apiKeyExercise = "5448159d70mshd5840af61bc30f4p179a31jsn152d9ac45d5b";
// Make the API request

async function getMealPlan(chosenDiet) {
    var res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKeySpoon}&query=${chosenDiet}`
    );
    var data = await res.json();
    console.log(data);
    var index = Math.floor(Math.random()*data.results.length);


    var resultElement = document.createElement("div");
    console.log("Total Results:", data.totalResults);
    //console.log("First Recipe Title:", data.results[index].title);
    resultElement.textContent = "Meal Plan Result: " + data.results[index].title; 
    resultsContainer.appendChild(resultElement);
    
    var localData = localStorage.getItem("Meal Name");
    var savedMeals = [];

    if (localData) {
      try {
        savedMeals = JSON.parse(localData);

        if (!Array.isArray(savedMeals)) {
          savedMeals = [savedMeals];
        }
      } catch (error) {
        console.error("Error parsing", error);
      }
    }

    var newItem = data.results[index].title;
    savedMeals.push(newItem);

    localStorage.setItem("Meal Name", JSON.stringify(savedMeals));

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
    var index = Math.floor(Math.random()*data2.length);

    var resultElement = document.createElement("div");
    resultElement.textContent = "Workout Plan Result: " + data2[index].name; // Replace with your actual result data
    resultsContainer.appendChild(resultElement);
    // save into local storage
    var localData = localStorage.getItem("Exercise Name");
    var savedWorkouts =[];

    if (localData) {
      try {
        savedWorkouts = JSON.parse(localData);
      
      if (!Array.isArray(savedWorkouts)) {
        savedWorkouts = [savedWorkouts];
      }
    } catch(error) {
      console.error('Error', error);
    }
    }

      var newItem = data2[index].name;
      savedWorkouts.unshift(newItem); // Add the new workout plan at the beginning of the array

      if (savedWorkouts.length > 10) {
        savedWorkouts = savedWorkouts.slice(0, 10); // Keep only the latest 10 workout plans
      }

      localStorage.setItem("Exercise Name", JSON.stringify(savedWorkouts));
    // var newItem = data2[index].name;
    // savedWorkouts.push(newItem);

    // localStorage.setItem("Exercise Name", JSON.stringify(savedWorkouts));
}


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


function displayAllMealPlans() {

  const mealPlans = localStorage.getItem("Meal Name");
  // Split the meal plans into separate entries
  const mealPlanEntries = mealPlans ? mealPlans.split(",") : [];
  // Select the latest 10 meal plans
  const latestMealPlans = mealPlanEntries.slice(-10);
  // Clear the MealPlansContainer element
  const mealPlansContainer = document.getElementById("mealPlansContainer");
  mealPlansContainer.innerHTML = "";

  // Display the latest meal plans
  latestMealPlans.forEach(function (mealPlan, index) {
    const mealPlanElement = document.createElement("div");
    mealPlanElement.innerHTML = `Meal Plan ${index + 1}: ${mealPlan}`;
    mealPlansContainer.appendChild(mealPlanElement);

    if (index === latestMealPlans.length - 1) {
      mealPlanElement.innerHTML = mealPlanElement.innerHTML.replace(/.$/, "");
    }
  });
}

function displayAllWorkouts() {
  var workouts = localStorage.getItem("Exercise Name");
  var workoutParsed = workouts ? JSON.parse(workouts) : [];
  console.log(workoutParsed);
  // Split the workout plans into separate entries
  // Select the latest 10 workout plans
  var latestWorkout = workoutParsed.slice(-10);
  // Clear the WorkoutContainer element
  const workoutContainer = document.getElementById("workoutContainer");
  workoutContainer.innerHTML = "";

  // Display the latest workout plans
    const workoutElement = document.createElement("div");
    workoutElement.innerHTML = `Workout : ${latestWorkout}`;
    workoutContainer.appendChild(workoutElement);
}

submitBtnEl.addEventListener('click', function() {
  var selectedDiet = dietSelectEl.value;
  var selectedFitnessLevel = fitnessLevelSelectEl.value;

  console.log("Selected Diet:", selectedDiet);
  console.log("Selected Fitness Level", selectedFitnessLevel);

  getMealPlan(selectedDiet);
  getWorkoutPlan(selectedFitnessLevel);
});

savedMealPlansLink.addEventListener("click", displayAllMealPlans);
savedWorkoutsLink.addEventListener("click", displayAllWorkouts);
aboutUsLink.addEventListener("click", redirectToAboutUsPage);

