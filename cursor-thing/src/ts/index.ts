const cursor = document.querySelector<HTMLDivElement>('.cursor')!

console.log(cursor)

addEventListener('mousemove', e => {
    console.log(e.x, e.y)
})
