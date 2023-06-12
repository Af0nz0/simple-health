# Simple-Health


This project aims to provide a simple web-based application for creating customized diet and exercise routines based on user input. Users can select their dietary preferences and fitness levels to receive personalized recommendations.


## Technologies Used


The project is implemented using the following technologies:


- HTML
- CSS (Bulma framework)
- JavaScript (jQuery library)






## Usage


1. On the Simple-Health homepage, you will see the navigation bar with options for "Saved Meal Plans," "Saved Workouts," and "About Me."
2. Scroll down to the form section where you can input your goals.
3. In the "I have a diet of" dropdown, select your dietary preference.
4. In the "My fitness level is" dropdown, select your fitness level.
5. Click the "Submit" button to submit your information.
6. Your customized diet and exercise routine will be displayed in the "Your Results" section.


## API Usage


The project integrates with the following APIs:


- [Spoonacular API](https://spoonacular.com/food-api) is used to retrieve meal plans based on the selected diet.
- [Exercise Ninja API](https://rapidapi.com/apininja/api/exercise-ninja) is used to fetch workout plans based on the selected fitness level.


## Code


The JavaScript code provided in the project includes functionality to interact with the APIs and display the results in the results container.


- The `getMealPlan()` function makes an API request to Spoonacular to retrieve meal plans based on the chosen diet.
- The `getWorkoutPlan()` function makes an API request to Exercise Ninja to fetch workout plans based on the chosen fitness level.
- The event listeners and functions ensure that the selected diet and fitness level values are captured when the user clicks the "Submit" button.
- The results are displayed in the `resultsContainer` element on the webpage.


## Contributing


Contributions to the project are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on the project's repository.


## License


The project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Acknowledgements


The project makes use of the following resources:


- [Bulma CSS framework](https://bulma.io/) for responsive styling.
- [jQuery library](https://jquery.com/) for simplified DOM manipulation and event handling.
- [Spoonacular API](https://spoonacular.com/food-api) for meal planning data.
- [Exercise Ninja API](https://rapidapi.com/apininja/api/exercise-ninja) for workout planning data.


Thank you for your interest in Simple-Health! We hope this application helps you achieve your health and fitness goal
