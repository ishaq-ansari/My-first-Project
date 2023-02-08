'use strict'

const $ = document.querySelector.bind(document);

const mainDiv = $('#main');
const todoTextInput = $('#todoContent');
const todoAddButton = $('#todoButton');

function addTodo(){
    var d = document.createElement('div');
    mainDiv.appendChild(d);
    d.innerHTML = todoTextInput.value;
    d.classList.add('todo');
    d.addEventListener('click', function(){
        d.className = 'completed';
    });
    todoTextInput.value = '';
}

todoAddButton.addEventListener('click', addTodo);