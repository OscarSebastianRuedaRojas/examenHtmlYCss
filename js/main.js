let boton = document.querySelector('.botonMenu')
let aside = document.querySelector('aside')
let section = document.querySelector('section')

boton.addEventListener('click', function(){
    aside.classList.toggle('active')
    section.classList.toggle('active')
})