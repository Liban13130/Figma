const burger = document.querySelector('.burger')

burger.addEventListener('click', handleClick)

function handleClick(){
    burger.classList.toggle('active')
}