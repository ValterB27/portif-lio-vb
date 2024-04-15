let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overley = document.getElementById('overlay-menu')

btnmenu.addEventListener('click',()=>{
    menu.classList.add('abrir')
})
menu.addEventListener('click',()=>{
    menu.classList.remove('abrir')
})
overley.addEventListener('click',()=>{
    menu.classList.remove('abrir')
})
