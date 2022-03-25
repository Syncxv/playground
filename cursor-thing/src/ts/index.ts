import Cursor from './cursor'

const cursor = new Cursor({
    container: 'body',
    className: 'cursor',
    overwrite: true,
    speed: 0.55,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15
})
console.log(cursor)
