'use strict';

console.log('This file is connected and ready to run');
//   new is a keyword      object that has properties, the date.
var today = new             Date();
//var is a keyword that makes
// the word today a variable


//allow to take the today variable and output to page.
var userName = prompt('Please enter your first name');

alert('Hello, ' + userName + ' click OK to proceed.');



var hourNow = prompt('What time is it, friend? Use Military time.');


//variable declaration for the greeting.
var greeting;

if(hourNow >= 0 && hourNow < 7){
    greeting = 'Good Morning, ' + userName;
} else if (hourNow >= 7 && hourNow <= 12){
    greeting = 'Good Mid Day, ' + userName;
} else if (hourNow > 12 && hourNow < 18){
    greeting = 'Good Afternoon, ' + userName;
} else if (hourNow >= 18 && hourNow <= 24){
    greeting = 'Good Evening, ' + userName;
} else {
    'Something went wrong!';
}



document.write('<h1 style="color:yellow">' + greeting + '</h1>');


var header = document.getElementById('removeThis');
header.remove();