console.log("more in javascript pracitces...programs..!");

// string function
let text = "Hello World...!";
text = text.length;
// alert(text);

var newText = "we are 'javacriptians'";
console.log(newText);

// conctenating the strings;
var string1 = "im string ist";
var string2 = "im string second";
var concate = string1 + " " + string2;
console.log(concate);

// jsString Method;
var string = "this is position string";
// console.log(string.charAt(8));
console.log(string.indexOf("p"));
// console.log(string[0]);

var hadi = "im a string for string methods";
console.log(hadi.slice(5, 11));

console.log(hadi.split(""));
console.log(hadi.replace("im", "this is"));

// arrays;
let array = ["cars", "bikes", "cycles"];
console.log(array[0]);
// change the first item of the array;
array[0] = "Mercedes";
console.log(array[0]);

var cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

// function of string just importance;
let myString =
  "my name is hanzla saeed im form fsd for now  and then goes to islmabad in future 'INSHALLAH'";
console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
var parts = myString.split(" ");
parts.shift();
// var result;
// if(parts instanceof Array){
// result= parts.join;
// }
// else{result = parts;}

console.log(parts);

console.log(myString.replace("my", ""));
console.log(myString.replace("form", ""));
console.log(myString.slice(11, 17));
console.log(myString.substring());

// function of arrays;
let marks = [10, 20, 30, 40, 50, 60];

console.log(marks.pop());
console.log(marks.shift());
console.log(marks.unshift(0));
console.log(marks.push(70));

console.log(marks.reverse());

let marks2 = [100, 200, 300, 400, 500, 600];
console.log(marks.concat(marks2));
