const toggle = document.querySelector('.toggle')
const body = document.querySelector('body')

toggle.addEventListener('click', handleClick)

function handleClick(){
    body.classList.toggle('open')
}