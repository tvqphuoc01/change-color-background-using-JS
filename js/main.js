const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorBtn = document.querySelector('#colorBtn');
const colorBg = document.querySelector('body');
const hex = document.querySelector('.hexCode');

colorBtn.addEventListener('click',changeColor);

function changeColor() {
    let randomCode = '#';
    for(let i = 0; i < 6; i++){
       let  random = Math.floor(Math.random()*hexNumber.length);
       randomCode += hexNumber[random];
    }
    colorBg.style.backgroundColor = randomCode;
    hex.textContent = randomCode;
}