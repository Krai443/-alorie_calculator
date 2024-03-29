let stats = document.querySelector(".stats");

let meals = localStorage.getItem("meals_obj");
console.log(JSON.parse(meals));

let mealsObj = JSON.parse(meals);

function createFoodList(food_arr, parent_id) {
    let parent = document.querySelector(`#${parent_id}`);
    
    console.log(parent_id);
    console.log(parent);
    console.log(food_arr);
    let protall = 0;
    let carball = 0;
    let fatall = 0;

    food_arr.map((food) => {
        protall = protall+food.prot;
        carball = carball+food.carb;
        fatall = fatall+food.fat;
    parent.insertAdjacentHTML(
        "afterbegin",
        `
            <p style="display:flex; gap: 20px">
                <span>Название: ${food.name}</span>
                <span>Калории: ${food.calories}</span>
                <span>Граммы: ${food.gramm}</span>
            </p>
            `
    );
    });
    console.log(protall);
    console.log(carball);
    console.log(fatall);
    parent.insertAdjacentHTML(
        "beforeend",
        `
        <div class="grafic">
            <div class="prot" style="width:${protall}px" >prot</div>
            <div class="carb" style="width:${carball}px">carb</div>
            <div class="fat" style="width:${fatall}px">fat</div>
        </div>
            `);
    
}

mealsObj.map((meal) => {
    stats.insertAdjacentHTML(
    "afterbegin",
    `<li> 
        <h1>Дата: ${meal.date}</h1>
        <h2>${meal.eat_name}</h2>
        <h3>Тотально сьедено калорий: ${meal.total_ccal}</h3>
        <details>
            <summary>Детальнее</summary>
            <div id=${meal.eat_name}_${meal.date}></div>
        </details>
    </li>
            <br>
            `
    );
    createFoodList(meal.food, meal.eat_name + "_" + meal.date);
});

