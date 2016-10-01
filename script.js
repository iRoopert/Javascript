function gr(greet, name) {
    if (!greet && name) {
        var z = 'Hi' + ' ' + name;
        console.log(z);
    } else if (greet && !name) {
        var d = greet + ' ' + 'Stranger'
        console.log(d);
    } else if (!greet && !name) {
        var d = 'Hi' + ' ' + 'Stranger'
        console.log(d);
    } else {
        var x = greet + ' ' + name;
        console.log(x);
    }
}

gr('sssssss', 'fffffffff');


function greeting(hello, name) {
    if (arguments.length < 2) {
        return 'not all arguments in';
    }
    hello = hello || 'Hi';
    name = name || 'Stranger';

    return hello + ' ' + name;
}

var res = greeting('sefse', 'sdfsdf')
var res1 = greeting('serse', '')
var res2 = greeting('', 'sefsef')
var res3 = greeting('', '')

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);

var a = {
    first: 1
}

function changeob(obj) {
    obj.second = 5;
}

console.log(a);
changeob(a);
console.log(a);


var d = [3, 6]


function hy(arr) {
    for (var i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);

    }
}
hy(d, 'sd', 'sadasd', true, 5, 8);
console.log(d);


var rat = [1, 2, 3, 4, -5, 43, 333];


function nums(arr) {
    var ret = {
        odd: [],
        even: []
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) { //проверяет на четное и пушит значение в свойство обьекта odd
            ret.even.push(arr[i]);
        } else { //проверяет на четное и пушит значение в свойство обьекта even
            ret.odd.push(arr[i]);

        }


    }
    return ret;
}
nums(rat);
var tyu = nums(rat);
console.log(tyu);


function countUnseen(n) {
    return (n < 2) ?
        0 :
        Math.pow(n - 2, 3);
}

var result1 = countUnseen(2);
var result2 = countUnseen(3);
var result3 = countUnseen(4);
var result4 = countUnseen(5);

console.log(result1, result2, result3, result4);

//все глобальные переменные и функции являются частью глобального обьекта. var a = ### , window.a = ### это одно и то же
// Function Declaration создаются сразу работающими

console.log(a1);
console.log(test());

var a1 = 5;

function test() {
    console.log('Hello from function');
}
//defer в html позволяет выполняться скриптам поочередно

//var foo = 1;
//
//function bar() {
//    //var foo = undefined;
//    if (!foo) {
//        var foo = 10;
//    }
//    alert(foo);
//}
//bar();
//
//function bar1() {
//    //var foo = undefined;
//    if (!foo) {
//        foo = 10;
//    }
//    alert(foo);
//}
//bar();

var ff = 1;

function drf() {
    ff = 10;
    return;

    //function ff() {}
}
drf();
console.log(ff);

var a = 1;