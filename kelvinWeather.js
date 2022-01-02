const kelvin = 293;
// 293 current temperature in kelvin is assigned to the constant kelvin which cannot change.
const celsius = 293 - 273;
//  created a constant called celsius and stored in it the result of converting kelvin to celsius
let fahrenheit = celsius * (9 / 5) + 32;
// created a variable called fahrenheit to hold the result of the converting celsius to fahrenheit.
fahrenheit = Math.floor(fahrenheit);
// to eliminate decimals, rounded down fahrenheit variable and stored the result in the fahrenheit variable.
//console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. `);
//used string interpolation to console.log.
document.write(`The temperature is ${fahrenheit} degrees Fahrenheit. `);
//used string interpolation to show the output on the website

//more practice below.
/* Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console*/
let Newton = celsius * (33/100);
Newton  = Math.floor(Newton);
document.write(`The temperature is ${Newton} degrees Newton.`);