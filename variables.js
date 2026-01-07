const PI = 3.14;
let radius = 3;
                  
let area = PI * radius * radius;
console.log("Area of circle: " + area);

radius = 20;
area = PI * radius * radius;
console.log("Area of circle: " + area);

radius = 50;
area = PI * radius * radius;
console.log("Area of circle: " + area);

//type coercion
const one = 1;
const two = '2';

let result = one * two; //string concatenation
console.log("Result of one * two: " + result); //works fine, JS converts '2' to 2

result = one + two; //string concatenation
console.log("Result of one + two: " + result); //does not work as intended, JS converts 1 to '1' and concatenates


//scope 

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    
                