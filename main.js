            // 1) Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2») - двумя способами

// let myBrower = {
//     name: "Chrome",
//     version:9.2
// }
// console.log(myBrower);


// let myBrowerend = new Object({name:"Chrome", version:9.2});
// console.log(myBrowerend);



            // 2) Создать объект cinema со свойствами soldTickets (хранит в себе число,
            //    которое отображает кол-во проданных билетов) и ticketCost (цена билета) и задайте значения.
            //    Напишите функцию которая высчитывает сколько денег заработал кинотеатр за один сеанс.

// let cinema = {
//     soldTickets: 50
//     ticketCost: 100     
//   };
//   function calculateEarnings(cinema) {
//     let earnings = cinema.soldTickets * cinema.ticketCost;
//     return earnings;
//   } 
//   let earningsForSession = calculateEarnings(cinema);
//   console.log("Кинотеатр заработал " + earningsForSession + " за один сеанс.");
  


            // 3) Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида
            //    [[key, value], [key, value]]. То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }), 
            //    то результатом выполнения должен быть массив - [['a', 1], ['b', 2]]. 
            //    Для решения этой задачи вам нужны будут следующие методы: Object.keys() или Object.entries()

// function objectToArr(obj){
//     return Object.entries(obj);
// }
// const result = objectToArr({ a: 1, b:2})
// console.log(result)
        


            // 4) Дан объект. Нужно извлечь число 123 одной строкой

// const myCrazyObject = {
//     someArray: [7, 9, { purpose: 'пятница', number: 123 }, 3.3]
//   };
// const number = myCrazyObject.someArray[2].number;
//   console.log(number);
  


            // 5) Напишите функцию, которая проверяет, является ли элемент именно простым объектом, 
            //    а не массивом, null и т.п. Тут вам пригодится метод Array.isArray()

// function checkinDataTypes(obj){
//     return typeof obj === 'object' && !Array(obj) && obj !== null;
// }
// console.log(checkinDataTypes)
  


            // 6) Дан массив из имен например ['john', 'jane', 'kate', 'peter']. 
            //     Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.

// let names = ['john', 'jane', 'kate', 'peter'];
// let big = names.map(function(name) {
//   return name.charAt(0).toUpperCase() + name.slice(1);
// });
// console.log(big);




            // 7) Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона,
            //    и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
            //    Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
            //    Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.

// function range(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//       result.push(i);
//     }
//     return result;
//   }
  
// // 111
//   function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i];
//     }
//     return total;
//   }
  
// // 222
//   let numbers = range(1, 5);
//   let result = sum(numbers); 
//   console.log(result); 
  


            // 8) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
            //    запишите результаты округления в объект с ключами 'floor' и 'ceil'. Можете все оформить в функцию, 
            //    которая на входе будет принимать число и на выходе отдавать объект
// let result;
//     function calculate(number){
//         const square=Math.sqrt(number);
//         const floor=Math.floor(square);
//         const ceil=Math.ceil(square);
//         result={
//             floor:floor,
//             ceil:ceil
//         }
//         return result;
//     }
//     const resultSquare = calculate(587)
// console.log(resultSquare)
  


            // 9) Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
            //  С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. Для работы понадобится for...in

// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина',
//     'Стамбул' : 'Турция',
//     'бишкек' : 'Кыргызстан'
//   }
//   for (let key in obj) {
//     console.log(key + ' - это ' + obj[key] + '.');
//   }
  