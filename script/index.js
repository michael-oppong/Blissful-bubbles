document.title = 'Blissful Bubbles';
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('ul')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('a').forEach(n =>n.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))

document.title = "Blissful Bubbles";

