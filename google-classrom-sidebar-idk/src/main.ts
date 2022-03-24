import './styles/_main.scss'

const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!
const bruh = document.querySelector<HTMLButtonElement>('.bruh')!
const sidebar = document.querySelector<HTMLDivElement>('.sidebar')!
console.log(sidebar)
menuButton.addEventListener('click', () => sidebar.classList.toggle('opened'))
bruh.addEventListener('click', () => sidebar.classList.remove('opened'))
