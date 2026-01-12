let title = document.querySelector('h1');
console.log(title);

title.textContent = 'Web Page Components';

document.getElementById('topics').style.color = 'red';

let topic_title = document.getElementById('topics');

topic_title.style.color = 'red';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');

para.classList.add('background');

// para.style.backgroundColor = '#000';

let image = document.querySelector('img');

//image.setAttribute('src', 'images/logo.jpg');

image.src = 'images/logo.jpg';

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'black';
    document.querySelector('#css').style.color = 'black';
    document.querySelector('#js').style.color = 'black';
})
                
const newPara = document.createElement('p');
newPara.innerText = 'This paragraph was created with JavaScript.';