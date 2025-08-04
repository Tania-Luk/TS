"use strict";
// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// const cartsdiv = document.getElementById('carts');
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(cartsObject => {
//         const {carts}=cartsObject
//         console.log(carts)
//
//         for (const cart of carts){
//             const div = document.createElement ('div')
//             div.classList.add ('cart-container');
//             const divWithInfo = document.createElement('div')
//             divWithInfo.innerText = `
//                   "id": ${cart.id},
//                   "total": ${cart.total},
//                   "discountedTotal": ${cart.discountedTotal},
//                   "userId": ${cart.userId},
//                   "totalProducts": ${cart.totalProducts},
//                   "totalQuantity": ${cart.totalQuantity}
//                  `
//             const ol = document.createElement('ol');
//             for (const product of cart.products){
//             const li = document.createElement('li')
//                 const info = document.createElement ('p')
//                 info.innerText=`
//                   "id": ${product.id},
//                   "title": ${product.title},
//                   "price": ${product.price},
//                   "quantity": ${product.quantity},
//                   "total": ${product.total},
//                   "discountPercentage": ${product.discountPercentage},
//                   "discountedTotal": ${product.discountedTotal}
//                   `
//
//                 const img = document.createElement('img');
//                 img.src = product.thumbnail;
//                 li.append(img, info);
//                 ol.appendChild(li);
//             }
//         div.append(divWithInfo, ol);
//         cartsdiv.appendChild (div);
//         }
//     });
//     #whXxOBlYS0H
//  - взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
//  1 варіант робила сама
// const recipesDiv = document.getElementById ('recipes') ;
// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(recipesObject => {
//         const {recipes} = recipesObject;
//         console.log(recipes);
//
//         for (const recipe of recipes) {
//             const div = document.createElement('div');
//             div.classList.add('recipe-article');
//             const info = document.createElement('div');
//             info.innerText = `
//                 "id": ${recipe.id},
//                 "name": ${recipe.name},
//                 "instructions": ${recipe.instructions},
//                 "prepTimeMinutes": ${recipe.prepTimeMinutes},
//                 "cookTimeMinutes": ${recipe.cookTimeMinutes},
//                 "servings": ${recipe.servings},
//                 "difficulty": ${recipe.difficulty},
//                 "cuisine": "${recipe.cuisine},
//                 "caloriesPerServing":${recipe.caloriesPerServing},
//                 "tags": ${recipe.tags},
//                 "userId": ${recipe.userId},
//                 "rating": ${recipe.rating},
//                 "reviewCount": ${recipe.reviewCount},
//                 "mealType": ${recipe.mealType}
//             `;
//             const ul = document.createElement('ul');
//             const li = document.createElement('li');
//             li.innerText = `${recipe.ingredients}`;
//             const img = document.createElement('img');
//             img.src = recipe.image;
//             ul.append(li, img);
//             div.append(info,ul);
//             recipesDiv.appendChild(div);
//         }
//         });
// 2 варіант зробила з розв'язком'
const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
    const { recipes } = recipesObject;
    console.log(recipes);
    for (const recipe of recipes) {
        console.log(recipe);
        const recipeDiv = document.createElement('div');
        for (const recipeKey in recipe) {
            if (Array.isArray(recipe[recipeKey])) {
                const arrayAndTitleDiv = document.createElement('div');
                const title = document.createElement('div');
                title.innerText = `${recipeKey} : `;
                const ol = document.createElement('ol');
                const array = recipe[recipeKey];
                for (const item of array) {
                    const li = document.createElement('li');
                    li.innerText = item;
                    ol.appendChild(li);
                }
                arrayAndTitleDiv.append(title, ol);
                recipeDiv.appendChild(arrayAndTitleDiv);
            }
            else {
                if (recipeKey !== 'image') {
                    const keyDiv = document.createElement('div');
                    keyDiv.innerText = `${recipeKey} : ${recipe[recipeKey]}`;
                    recipeDiv.appendChild(keyDiv);
                }
            }
        }
        const img = document.createElement('img');
        img.src = recipe.image;
        recipeDiv.appendChild(img);
        recipesDiv.appendChild(recipeDiv);
    }
});
