// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let div: HTMLDivElement =document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// div.innerText='Freedom';
// let cloneNode: HTMLDivElement = div.cloneNode (true) as HTMLDivElement;
// document.body.append (div, cloneNode);
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arr: string[]  =  ['Main','Products','About us','Contacts'];
// const menu:HTMLUListElement = document.createElement ('ul');
// menu.classList.add('menu');
//     for (let item of arr){
//         const li: HTMLLIElement = document.createElement ('li');
//         li.innerText = item;
//         menu.appendChild(li)
//     }
// document.body.appendChild(menu);
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// for (const course of coursesAndDurationArray ){
//     const div:HTMLDivElement = document.createElement ('div');
//     div.innerText= `${course.title}  ${course.monthDuration}`;
//     document.body.appendChild (div);
// }

// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// // в якому буде <h1 class='heading'>  з title  елементу,
// // та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
// for (const course of coursesAndDurationArray){
//         let div: HTMLDivElement=document.createElement('div');
//         div.classList.add('item');
//
//         let h1:HTMLHeadingElement=document.createElement ('h1');
//         h1.classList.add('heading');
//         h1.innerText = course.title ;
//         let p:HTMLParagraphElement = document.createElement ('p');
//         p.classList.add('description');
//         p.innerText= course.monthDuration;
//         div.append (h1, p);
//
//         document.body.appendChild(div);
// }
