import gsap from 'gsap'

interface Options {
    className: string
    container: string
    overwrite: boolean
    speed: number
    skewingDelta: number
    skewingDeltaMax: number
    innerClassName: string
    textClassName: string
    mediaClassName: string
    mediaBoxClassName: string
}
interface AllEvents {
    mousemove?: (e: MouseEvent) => any
}
interface Setter {
    [key: string]: any
}
export default class Cursor {
    el: HTMLDivElement
    container: HTMLElement
    inner: HTMLDivElement
    text: HTMLDivElement
    media: HTMLDivElement
    mediaBox: HTMLDivElement

    options: Options
    setter: Setter
    event: AllEvents
    ticker: any
    skewing = 4
    initalPos = [-window.innerWidth, -window.innerHeight]
    pos = {
        x: this.initalPos[0],
        y: this.initalPos[1]
    }
    vel = {
        x: 0,
        y: 0
    }
    visible = true
    constructor(opt: Options) {
        this.options = opt
        this.container = document.querySelector(this.options.container)!
        this.init()
        this.render(!0)
        ;(this.ticker = this.render.bind(this, !1)), gsap.ticker.add(this.ticker)
    }
    init() {
        this.el || this.create()
        this.event = {}
        this.createSetter()
        this.bind()
    }
    bind() {
        this.event.mousemove = e => {
            gsap.to(this.pos, {
                x: e.clientX,
                y: e.clientY,
                overwrite: this.options.overwrite,
                ease: 'expo.out' /*this.options.ease*/,
                duration: this.visible ? this.options.speed : 0,
                onUpdate: () => {
                    this.vel = {
                        x: e.clientX - this.pos.x,
                        y: e.clientY - this.pos.y
                    }
                }
            })
        }

        this.container.addEventListener('mousemove', this.event.mousemove!, { passive: true })
    }
    create() {
        ;(this.el = document.createElement('div')),
            (this.el.className = this.options.className),
            (this.inner = document.createElement('div')),
            (this.inner.className = this.options.innerClassName),
            (this.text = document.createElement('div')),
            (this.text.className = this.options.textClassName),
            (this.media = document.createElement('div')),
            (this.media.className = this.options.mediaClassName),
            (this.mediaBox = document.createElement('div')),
            (this.mediaBox.className = this.options.mediaBoxClassName),
            this.media.appendChild(this.mediaBox),
            this.inner.appendChild(this.media),
            this.inner.appendChild(this.text),
            this.el.appendChild(this.inner),
            this.container.appendChild(this.el)
    }
    createSetter() {
        this.setter = {
            x: gsap.quickSetter(this.el, 'x', 'px'),
            y: gsap.quickSetter(this.el, 'y', 'px'),
            rotation: gsap.quickSetter(this.el, 'rotation', 'deg'),
            scaleX: gsap.quickSetter(this.el, 'scaleX'),
            scaleY: gsap.quickSetter(this.el, 'scaleY'),
            wc: gsap.quickSetter(this.el, 'willChange'),
            inner: {
                rotation: gsap.quickSetter(this.inner, 'rotation', 'deg')
            }
        }
    }
    render(notFirst: boolean) {
        if (notFirst || (0 !== this.vel.y && 0 !== this.vel.x)) {
            if (
                (this.setter.wc('transform'),
                this.setter.x(this.pos.x),
                this.setter.y(this.pos.y),
                this.skewing)
            ) {
                var e = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2)),
                    n = Math.min(e * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing,
                    i = (180 * Math.atan2(this.vel.y, this.vel.x)) / Math.PI
                this.setter.rotation(i)
                this.setter.scaleX(1 + n)
                this.setter.scaleY(1 - n)
                this.setter.inner.rotation(-i)
            }
        } else {
            this.setter.wc('auto')
        }
    }
}
