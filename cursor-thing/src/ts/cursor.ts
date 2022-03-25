import gsap from 'gsap'

interface Options {
    className: string
    container: string
    overwrite: boolean
    speed: number
}
interface AllEvents {
    mousemove?: (e: MouseEvent) => any
}
export default class Cursor {
    el: HTMLDivElement | undefined
    container: HTMLElement
    options: Options
    skewing = false
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
    event: AllEvents
    constructor(opt: Options) {
        this.options = opt
        this.container = document.querySelector(this.options.container)!
        this.init()
        this.bind()
    }
    init() {
        this.el || this.create()
        this.event = {}
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
            console.log(this.pos, this.vel)
        }

        this.container.addEventListener('mousemove', this.event.mousemove!, { passive: true })
    }
    create() {
        ;(this.el = document.createElement('div')), (this.el.className = this.options.className)
        this.container.appendChild(this.el)
    }
}
