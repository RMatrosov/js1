
/* let tc =prompt("Задайте температуру в градусах по Цельсию");
        
let tf = Math.ceil((9 / 5) * tc + 32);
        
alert(tf);
    
        
let admin;
        
let name = "Василий";
        
admin = name;
        
alert (admin);
        
alert(1000+"108"); */


/* var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   выводится 2 потому, что в переменную а было добавлено число 1 до самой а и переменная а является числом 2
d = b++; alert(d);           // 1   выводится 1 потому, что в переменную b было добавлено число 1 после самой b и переменная b является числом 2
c = (2+ ++a); alert(c);      // 5   работает тот же принцип что описан сверху если ++ до переменной то число плюсуется в этой строчке -->
d = (2+ b++); alert(d);      // 4   --> если после переменной то со следующей строчки.
alert(a);                    // 3   по итогу обе переиенные являются числом 3 т.к. в них было занесено одинаковое количество.
alert(b);                    // 3 */


/* var a = 2;
var x = 1 + (a *= 2);   //a *= 2 - присваивание с умножением, то есть имеет значение "1 + (2 * 2)"
console.log(x) */

///////////////////////////  1

/* var a = -7;
var b = -6;
if (a > 0 && b > 0){
x = a - b;
alert(x);
} else if (a < 0 && b < 0){
x = a * b;
alert (x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
x = a + b;
alert (x);
}
		
///////////////////////// 1
/* 
///////////////////////////2
 */

/*  var a = 5;
 switch (a) {
    case 1:
        alert("1")
        break;
    case 2:
        alert("2")
        break;
    case 3:
        alert("3")
        break;
    case 4:
        alert("4")
        break;
    case 5:
        alert("5")
        break;
    case 6:
        alert("6")
        break;
    case 7:
        alert("7")
        break;
    case 8:
        alert("8")
        break;
    case 9:
        alert("9")
        break;
    case 10:
        alert("10")
        break;
    case 11:
        alert("11")
        break;
    case 12:
        alert("13")
        break;
    case 14:
        alert("14")
        break;
    case 15:
        alert("15")
        break;
 }
 */
 ///////////////////////////2 */

 //////////////////////////3

var a = 34;
var b = 67;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}


//////////////////////////////

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'умножение':
                return arg1 * arg2;
            break;
             case 'деление':
                return arg1 / arg2;
            break;
        case 'сложение':
                return arg1 + arg2;
                break;
            case 'вычитание':
                return arg1 - arg2;
            break;
         case 'деление':
                return arg1 / arg2;
            break;
        }     
}

//////////////////////////

const power = (val, pow) => {
    if (pow != 1) {
        return val * power(val, pow - 1);
    } else if (pow <= 0) {
        alert("Введите число большее или равное 1");
    } else {
        return val;
    }
}  