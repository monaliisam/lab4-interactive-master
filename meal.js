/*
    <div class="meals">
        <div class="meal-header">
            <img src="https://www.themealdb.com/images/ingredients/Lime.png" alt="">
        </div>
        <div class="meal-body">
            <h3>Meal Name</h3>
            <button class="fav-btn">
                <i class="far fa-heart"></i>
            </button>
        </div>
    </div>
*/

let meals = document.getElementById("meals");
getRandomMeal();
//Start your code from here


async function getRandomMeal()
{
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const randomData = await resp.json(); 
    const randomMeal = randomData.meals[0];
    
    addMeal(randomMeal);
}


function addMeal(mealData, random = false)
{
    //console.log(mealData.meals[0]);
    const meal = document.createElement('div');
    meal.classList.add('meal');
    
    meal.innerHTML = `
    <div class="meal-header">
        <img 
            src="${mealData.strMealThumb}" 
            alt="${mealData.strMeal}"/>
    </div>
    <div class="meal-body">
        <h3>${mealData.strMeal}</h3>
        <button class="fav-btn">
            <i class="far fa-heart"></i>
        </button>
    </div>
    `
    meals.appendChild(meal);
}