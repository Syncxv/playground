import Cursor from './cursor'
import './styles/_main.scss'

const cursor = new Cursor({
    container: 'body',
    className: 'cursor',
    overwrite: true,
    speed: 0.4,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    innerClassName: 'cursor-inner',
    mediaClassName: 'cursor-media',
    mediaBoxClassName: 'media-box',
    textClassName: 'cursor-text',
    hideTimeout: 300,
    showTimeout: 20,
    hiddenState: '-hidden',
    activeState: '-active',
    visible: true,
    hideOnLeave: true
})
console.log(cursor)
const menuButton = document.querySelector<HTMLButtonElement>('.menu-button')!
const bruh = document.querySelector<HTMLButtonElement>('.bruh')!
const sidebar = document.querySelector<HTMLDivElement>('.sidebar')!
const items = document.querySelector<HTMLDivElement>('.items')!
const arrItems = Array.from(items.children)
arrItems[0].classList.add('selected')
items.style.setProperty('--width', `${arrItems[0].getBoundingClientRect().width}px`)
menuButton.addEventListener('click', () => sidebar.classList.toggle('opened'))
bruh.addEventListener('click', () => sidebar.classList.remove('opened'))

const heheClick = (e: Event) => {
    arrItems.find(s => s.classList.contains('selected'))?.classList.remove('selected')
    ;(e.target as HTMLDivElement).classList.add('selected')
    const width = (e.target as HTMLDivElement).getBoundingClientRect().width
    const index = arrItems.indexOf(e.target as HTMLDivElement)
    items.style.setProperty('--width', `${width}px`)
    if (!index) return items.style.setProperty('--offset', `0px`)
    const offfsetWidth = arrItems
        .slice(0, index)
        .map(s => s.getBoundingClientRect().width)
        .reduce((prev, curr) => prev + curr)
    items.style.setProperty('--offset', `${offfsetWidth}px`)
}

arrItems.forEach(s => s.addEventListener('click', e => heheClick(e)))
//OOOH I NEED TO GET EVERY ONE NOT JUST THE LAST ONE IM SO STUPID
