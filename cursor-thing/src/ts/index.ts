import Cursor from './cursor'

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
