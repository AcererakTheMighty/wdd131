let pets = ['goldfish', 'dog', 'rhino'];

console.log(pets.length);

pets[0] = 'bunny';

pets.push('lizard');

console.log(pets);

const steps = ['one', 'two', 'three'];

//.forEach call a function for every item in the array
steps.forEach(function(item) {
    console.log(item);
});

steps.forEach(showStep);
function showStep(item) {
    console.log(item);
}

let myList = document.querySelector('#myList');

//.map also calls a function but creates a new array from the original array

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
}

myList.innerHTML = stepsHtml.join('');

//.map

let grades = ['A', 'B', 'D'];

let points; 

let gpaPoints = grades.map(convert)

function convert(grade) {
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('Invalid grade: ' + grade);
    }
    return points;
}

console.log(gpaPoints);
console.log(grades);

//.reduce -- reduce down to a single value with an accumulator

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);
let gpaAverage = totalPoints / gpaPoints.length;
console.log(gpaAverage);

//.filter -- filter out items that do not meet a condition

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(function(word){
    return word.length <= 6;
});

console.log(shortWords);

const classes = [
    {name: 'Math', students: 30},
    {name: 'History', students: 25},
    {name: 'Science', students: 28},
    {name: 'Art', students: 20}
]

let container = document.querySelector('#classes');

classes.forEach(function(item){let name = document.createElement('div');

    let html = `<span>${item.name}</span>`;

    name.innerHTML = html;
    container.appendChild(name);

});
    
