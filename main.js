'use strict';
console.log("JavaScript подключен успешно! \nJavaScript connected successfully!");

/*menu*/
const menuBtn = document.getElementById('menuAside');
const asideMenu = document.querySelector('aside');

menuBtn.addEventListener('click', function(event) {
  asideMenu.classList.toggle('active');
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  if (!asideMenu.contains(event.target) && event.target !== menuBtn) {
    asideMenu.classList.remove('active');
  }
});
