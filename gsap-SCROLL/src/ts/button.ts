interface Options {
    el: Element
}
export class Button {
    el: Element
    fill: Element
    constructor({ el }: Options) {
        this.el = el
        this.fill = el.firstElementChild!
        this.bindHover()
    }
    bindHover() {
        this.el.addEventListener('mouseenter', () => {
            this.outTl().pause(), this.hoverTl().play(0)
        }),
            this.el.addEventListener('mouseleave', () => {
                this.hoverTl().pause(), this.outTl().play(0)
            })
    }

    hoverTl() {
        const t = gsap.timeline()
        return t
            .set(this.fill, {
                willChange: 'transform',
                scale: 1
            })
            .to(
                this.fill,
                {
                    scaleX: 1.03,
                    scaleY: 0.98,
                    duration: 1,
                    ease: 'elastic.out(1, 0.3)',
                    force3D: !0
                },
                0
            )
    }

    outTl() {
        const t = gsap.timeline()
        return (
            t.set(
                this.fill,
                {
                    scaleX: 1.03,
                    scaleY: 0.98,
                    willChange: 'transform'
                },
                0
            ),
            t.to(
                this.fill,
                {
                    scaleX: 1,
                    scaleY: 1,
                    ease: 'elastic.out(1, 0.3)',
                    duration: 1,
                    force3D: !0
                },
                0
            ),
            //what
            t.set(this.fill, {
                willChange: 'auto'
            })
        )
    }
}
