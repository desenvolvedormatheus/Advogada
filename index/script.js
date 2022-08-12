function abrirmenu() {
    var btnmenu = document.querySelector('.btnmobile')
    btnmenu.style.transform = 'rotate(180deg)'
    var menu2 = document.querySelector('.menu2')
    menu2.style.right = '2rem'
}
function fecharmenu() {
    var btnmenu = document.querySelector('.btnmobile')
    btnmenu.style.transform = 'rotate(90deg)'
    var menu2 = document.querySelector('.menu2')
    menu2.style.right = '-8rem'
}