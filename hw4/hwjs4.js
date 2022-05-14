//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

   //  function rectangle(a, b) {
   //      let result = a*b;
   //      return result;
   //  }
   //
   // let answer = rectangle(15, 20);
   //  console.log(answer);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//     function circle(p, r ) {
//         let result = p*(r*r);
//         return result;
//     }
//
//    let answer = circle(3.14, 6);
//     console.log(answer);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    // function celinder (r, h) {
    //     return 3.14 * h * r * 2;
    // }
    //
    // console.log(celinder(6, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

    // function main(array) {
    //     for (const arrayElement of array) {
    //         console.log(arrayElement);
    //     }
    // }
    //   let menu = ['about', 'main', 'contacts', 'team', 'xxx', 'yyy'];
    //
    //     main(menu);
    //
    // let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    //
    // main(listOfItems);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraph(`Hello!`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    // function list(number) {
    //     document.write(`<ul>
    //         <li>${number}</li>
    //         <li>${number}</li>
    //         <li>${number}</li>
    //     </ul>`);
    //
    // }
    // list('blabla');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

    // function list(text, num) {
    //     document.write(`<ul>`);
    //     for (let i = 0; i < num; i++) {
    //         document.write(`<li>${text}</li>`);
    //     }
    //     document.write(`</ul>`);
    // }
    // list('hola', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    // let array = [59, 18, 42, 'sonechko', 'kovbasa', false];
    // function main(array) {
    //     document.write(`<ul>`);
    //     for (const item of array) {
    //         document.write(`<li>${item}</li>`);
    //     }
    //     document.write(`</ul>`);
    // }
    // main(array);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

    // let array = [
//     {
//         id: 1,
//         name: 'Ivan',
//         age: 18,
//     },
//     {
//         id: 2,
//         name: 'Stepan',
//         age: 20,
//     },
//     {
//         id: 3,
//         name: 'Semen',
//         age: 25,
//     }
// ];
// function users(array) {
//     for (const item of array) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
// }
// users(array);

// - створити функцію яка повертає найменьше число з масиву
// let numbers = [100, 3956, 95, 15, 42, 64];
// function minNum(numbers) {
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
//
// console.log(minNum(numbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [100, 3956];
// function arr(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// console.log(arr(numbers));
