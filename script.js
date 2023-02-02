const $ = document.querySelector.bind(document);

// select an id
const clickBtn1=$('#btn1');
const clickBtn2=$('#btn2');

// create function
function btn1Clicked(){
    clickBtn1.classList.toggle('change1'); //adds change1 it't not there and and removes if it's there
}

function btn2Hovered(){
    clickBtn2.className = 'change2'; //adding a class to a selected ID
}

function btn2UnHovered(){
    clickBtn2.classList.remove('change2'); //remoce the class change2
}