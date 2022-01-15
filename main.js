// var number1 = prompt("Birinchi raqamni kiriting");
// var number2 = prompt("Ikkinchi raqamni kiriting");

// if (number1 >= number2) {
//     alert(number1);
// } else {
//     alert(number2);
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// var number1 = prompt("Birinchi raqamni kiriting");
// var number2 = prompt("Ikkinchi raqamni kiriting");
// var number3 = prompt("Uchinchi raqamni kiriting");

// if (number1 < 0) {
//     alert("😊 " + number1);
// } else if (number2 < 0) {
//     alert("😊 " + number2);
// } else if (number3 < 0) {
//     alert("😊 " + number3);
// } else {
//     alert("All good!!!")
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// var number1 = prompt("Birinchi raqamni kiriting");
// var number2 = prompt("Ikkinchi raqamni kiriting");
// var number3 = prompt("Uchinchi raqamni kiriting");

// if (number1 > number2 && number1 > number3) {
//     if (number2 > number3) {
//         document.write(number1 + " " + number2 + " " + number3);
//     } else {
//         document.write(number1 + " " + number3 + " " + number2);
//     }
// } else if (number2 > number1 && number2 > number3) {
//     if (number1 > number3) {
//         document.write(number2 + " " + number1 + " " + number3);
//     } else {
//         document.write(number2 + " " + number3 + " " + number1);
//     }
// } else if (number3 > number1 && number3 > number2) {
//     if (number1 > number2) {
//         document.write(number3 + " " + number1 + " " + number2);
//     } else {
//         document.write(number3 + " " + number2 + " " + number1);
//     }
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


var a = +prompt("Birinchi raqamni kiriting");
var b = +prompt("Ikkinchi raqamni kiriting");
var c = +prompt("Uchinchi raqamni kiriting");
var d = +prompt("Tortinchi raqamni kiriting");
var e = +prompt("Beshinchi raqamni kiriting");

if (a > b && a > c && a > d && a > e) {
    alert("The largest number is " + a);
} else if (b > a && b > c && b > d && b > e) {
    alert("The largest number is " + b);
} else if (c > a && c > b && c > d && c > e) {
    alert("The largest number is " + c);
} else if (d > a && d > b && d > c && d > e) {
    alert("The largest number is " + d);
} else {
    alert(e);
}