var a = 'My script is ';
var b = a + "longer";

console.log(b);

var c = 5;
var d = 2;
var i = 2.5;

function div(a, b) {
    return c / d;
}

var str = `result of division of division ${c} by ${d} is ${div(c,d)}`; //` = ё новые скобки в новом стандарте
console.log(str);



var stri = `My beautiful string`;
console.log(stri.length);
console.log(stri[3]); // выводит символ под номером в строке
console.log(stri.charCodeAt(3)); //выводит код элемента

/* concat(string) - соединяет 2 массива*/
var arr1 = [1, 2, 3];
var arr2 = [7, 8, 9];

var res = arr1.concat(arr2, [4, 5, 6]);
console.log(res);


/* fromCharCode(value1, value,...) - действие обратное чаркод (вбиваем код элемента и получаем результат)*/
/* indexof(substring,index) - возвращается первое включение индекса чего то там */

var strin = `My beautiful string`;
var res1 = strin.indexOf('u');
console.log(res1);

/*slice(start, end) - вырезает все, кроме куска строки от указанного первого индекса до указанного последнего*/

var res2 = strin.slice(3, 5);
console.log(res2);

var res3 = strin.substr(3, 5); //метод substr имеет 2 значение: 1- номер ид от которого начинать вырезать, 2 - количество символов
console.log(res3);

var res4 = strin.split('u'); //метод split разбивает на символы
console.log(res4);

var res5 = res4.join('-'); //метод split вчтавляет какой то элемент при склеивании в строку
console.log(res5);


var wear = `My beautiful string`;

function eee(string) {
    return string.split(' ').length; // показывает количество слов в строке после разбивки на слова между знаками пробела
}

console.log(eee(wear));



function ааа(string) {

    return string.split('').reverse().join(''); // показывает количество слов в строке после разбивки на слова между знаками пробела
}

console.log(ааа(wear));

//НАПИСАТЬ ФУНКЦИЮ КОТОРАЯ ПРИМЕТ СТРОКУ 'Th2is i3s th1e st4ring' а выведет по порядку "зе зис из стринг"