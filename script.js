const $ = document.querySelector.bind(document);

// select an id
const clickBtn1=$('#btn1');
const clickBtn2=$('#btn2');

// create function
function btn1Clicked(){
    clickBtn1.className = 'change1'; //adding a class to a selected ID
}

function btn2Clicked(){
    clickBtn2.className = 'change2';
}