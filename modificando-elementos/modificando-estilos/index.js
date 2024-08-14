const header= document.querySelector('header')
const menu = document.getElementsByClassName('menu')
const button = document.getElementById('boton')



function esInvisible (){
    header.classList.toggle("invisible")
}

button.addEventListener('click', esInvisible ) 

/*for (let i = 0; i < menu.length; i++) {
    menu[i].style.backgroundColor = 'gray';
}*/

for (let i = 0; i < menu.length; i++) {
    menu[i].className = 'main-menu';
}








