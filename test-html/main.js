'use strict'

var button = document.querySelector('button');
var ul = document.querySelector('ul');

button.addEventListener('click', function() {
  ul.classList.toggle('hidden')
})