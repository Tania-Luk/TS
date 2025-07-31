// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text"
//
// let button: HTMLButtonElement = document.getElementsByTagName ('button')[0];
// button.onclick = function () {
//    document.getElementById('text').remove();
//
// }

//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та
//     перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const userAge:HTMLElement = document.getElementById ('userAge');
// const btn = document.getElementById ('btn');
// const userMessage= document.getElementsByClassName('message');
// btn.addEventListener ('click', () =>{
//     const age = userAge.value
//         if (age < 18){
//             userMessage.innerText = 'Age less then 18'
//         }else {
//             userMessage.innerText = 'your age' + ':' + `${age}`
//         }
//
// })

// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. 
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. 
// Іншими словами : заповниои форму, натиснули кнопку, 
// під формою з'явився блок з вашим об'єктом

// const target = document.getElementById('target');
// const someForm = document.forms.someForm;
// someForm.addEventListener ('submit', (e)=> {
//     e.preventDefault();
// const nameValue = someForm.name.value;
// const surnameValue = someForm.surname.value;
// const ageValue = someForm.age.value;
// let obj = {nameValue, surnameValue, ageValue};
// target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + ageValue
// })

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// який при кожному перезавантажені сторінки буде додавати до неї +1
// let currentNumber = +localStorage.getItem ('number');
// currentNumber+= 1;
// localStorage.setItem ('number', currentNumber );
// const Div = document.getElementById ('number').innerText = currentNumber;

// #LhSfdhM3

// при відвідуванні якої в локальне сховще, в масив sessionsList зберігається
// інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
// а малювати в DOM
// let sessionsList = JSON.parse(localStorage.getItem ('sessionsList')) || [];
// sessionsList.push (new Date());
// localStorage.setItem ('sessionsList', JSON.stringify(sessionsList));
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
// const num = document.getElementById('num');
// const resultDiv = document.getElementById('result');
// num.oninput = function () {
//     const kilos =  +this.value;
//     const result = kilos * 2.2;
//     resultDiv.innerText = result;
// }

// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
// function addToLocalStorage(arrayName, objToAdd) {
//     lsItem = localStorage.getItem (arrayName);
//     if(!lsItem){
//         throw new Error ('there is not such array')
//     }
//     const array = JSON.parce(lsItem);
//     if(typeof objToAdd === 'object' ){
//         array.push (objToAdd);
//     }
//     localStorage.setItem (arrayName, JSON.stringify(array));
// }
//
//     #kUSgFqWY
//     Створити 3 інпута та кнопку. Один визначає кількість рядків,
//     другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і
//     формується табличка, з відповідним вмістом.


//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

//
//     const pairList = [];
//
//     function addPair() {
//     const input = document.getElementById('inputPair').value.trim();
//     const regex = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/;
//
//     const match = input.match(regex);
//     if (!match) {
//     alert("Invalid format. Use: name = value (alphanumeric only)");
//     return;
// }
//
//     const name = match[1];
//     const value = match[2];
//     pairList.push({ name, value });
//     updateList();
//     document.getElementById('inputPair').value = '';
// }
//
//     function updateList() {
//     const select = document.getElementById('pairList');
//     select.innerHTML = '';
//     pairList.forEach((pair, index) => {
//     const option = document.createElement('option');
//     option.value = index;
//     option.textContent = `${pair.name} = ${pair.value}`;
//     select.appendChild(option);
// });
// }
//
//     function sortBy(key) {
//     pairList.sort((a, b) => a[key].localeCompare(b[key]));
//     updateList();
// }
//
//     function deleteSelected() {
//     const select = document.getElementById('pairList');
//     const selectedIndices = Array.from(select.selectedOptions).map(option => parseInt(option.value));
//
//     // Remove in reverse to avoid index shift
//     selectedIndices.sort((a, b) => b - a).forEach(i => pairList.splice(i, 1));
//     updateList();
// }
//
