/*   Масиви та об'єкти:*/
/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let arr = ['Kate', 'Ann', 'Luna', 'Daria', 'Maria', 'Yulia', 'Emma', 'Lidia', 'Pam', 'Rita'];
console.log(arr);
console.log(arr.length);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
  let book1 = {
    title: 'Pet cemetery',
    pageCount: 400,
    genre: 'horror'
  }

  let book2 = {
    title: 'Heartless',
    pageCount: 450,
    genre: 'fantasy'
  }

  let book3 = {
    title: 'The distant echo',
    pageCount: 490,
    genre: 'crime fiction'
  }
/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

  let bestBook1 = {
     title: 'Bloody holiday',
     pageCount: 500,
     genre: 'crime fiction',
     authors: [
         {name: 'Julia', age: 35},
         {name: 'Robert', age: 37},
         {name: 'Maria', age: 32}
     ]
  }

  let bestBook2 = {
  title: 'Mars goes on the offensive',
  pageCount: 350,
  genre: 'science fiction',
  authors: [
    {name: 'Fabia', age: 35},
    {name: 'Marina', age: 37},
    {name: 'Alex', age: 32}
  ]
  }

  let bestBook3 = {
  title: 'The wedding',
  pageCount: 425,
  genre: 'chicklit',
  authors: [
    {name: 'Mike', age: 36},
    {name: 'Charles', age: 33},
    {name: 'Ophelia', age: 31}
  ]
  }
  /*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/
  let user = [
  {name: 'Julia',  username: 'pink', password: '123'},
  {name: 'Anna',   username: 'white', password: '456'},
  {name: 'Maria',  username: 'blue', password: '126'},
  {name: 'Tonny',  username: 'black', password: '235'},
  {name: 'Micky',  username: 'red', password: '156'},
  {name: 'John',  username: 'nightingale', password: '1256'},
  {name: 'Sandra',  username: 'princess', password: '123456'},
  {name: 'Jim',  username: 'jimbeam', password: '3456'},
  {name: 'Scoth',  username: 'dreamer', password: '2256'},
  {name: 'Frank',  username: 'best', password: '12345'}
]
console.log('Three number passwords:', user[0].password, user[1].password, user[2].password, user[3].password, user[4].password);
console.log('More than three number passwords:', user[5].password, user[6].password, user[7].password, user[8].password, user[9].password);

/*Логічні розгалуження:*/
/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = +prompt('Please enter any number');
console.log(x);
if (x != 0){
  console.log('Вірно')
} else {
  console.log('Невірно')
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/
let time = +prompt('Please enter current minutes 0-59');

if( time >= 0 && time < 16){
  console.log('This is the first quater of the hour');
} else if (time > 15 && time <=30){
  console.log('This is the second quater of the hour');
} else if (time > 30 && time <= 45){
  console.log('This is the third quater of the hour');
} else if (time > 45 && time <= 59){
  console.log('This is the fourth quater of the hour');
} else {
  console.log('Error:the incorrect number of minutes');
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/
let day = +prompt('Please enter the current date in the month');
if (day >=1 && day <= 10){
  console.log('This is the first decade');
} else if (day > 10 && day <= 20){
  console.log('This is the second decade');
} else if (day > 20 && day <=31){
  console.log('This is the third decade');
} else {
  console.log('Error: the invalid number of the day in a month');
}

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
let dayOfWeek = +prompt('Please enter the number of the day in a week 1-7');

switch (dayOfWeek){
  case 1:
    console.log('Sunday');
    break;
  case 2:
     console.log('Monday');
     break;
  case 3:
     console.log('Tuesday');
     break;
  case 4:
    console.log('Wednesday');
    break;
  case 5:
    console.log('Thursday');
    break;
  case 6:
    console.log('Friday');
    break;
  case 7:
    console.log('Saturday');
    break;
  default:
    console.log('The invalid number of the day in a week');
}

/*- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/
let a = +prompt('Please enter any number');
let b = +prompt('Please enter any other number');
if (a > b){
  console.log('The biggest number is', a);
}else if (a < b){
  console.log('The biggest number is', b);
}else {
  console.log('The numbers are equal');
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/
let x1 = 0;
if(x1 === '' || x1 === null || x1 === undefined || x1 === 0){
  x1 = 'default';
}
console.log(x1);

/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
  console.log(coursesAndDurationArray[0].title, 'SUPER!');
}
if(coursesAndDurationArray[1].monthDuration > 5){
  console.log(coursesAndDurationArray[1].title, 'SUPER!');
}
if(coursesAndDurationArray[2].monthDuration > 5){
  console.log(coursesAndDurationArray[2].title, 'SUPER!');
}
if(coursesAndDurationArray[3].monthDuration > 5){
  console.log(coursesAndDurationArray[3].title, 'SUPER!');
}
if(coursesAndDurationArray[4].monthDuration > 5){
  console.log(coursesAndDurationArray[4].title, 'SUPER!');
}
if(coursesAndDurationArray[5].monthDuration > 5){
  console.log(coursesAndDurationArray[5].title, 'SUPER!');
}