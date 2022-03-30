import gsap from 'gsap'

interface Options {
    el: Element
}
export class Button {
    el: Element
    fill: Element
    ripple: Element[]
    hoverTl: gsap.core.Timeline
    outTl: gsap.core.Timeline
    constructor({ el }: Options) {
        this.el = el
        this.fill = el.firstElementChild!
        this.ripple = Array.from(this.fill.children)
        this.hoverTl = this.tlHover()
        this.outTl = this.tlOut()
        this.bindHover()
        console.log(this)
    }
    bindHover() {
        this.ripple.length &&
            gsap.set(this.ripple, {
                display: 'block'
            })
        this.outTl.pause()
        this.hoverTl.play(0)
        this.hoverTl.pause()
        this.outTl.play(0)
        this.el.addEventListener('mouseenter', () => {
            this.outTl.pause()
            this.hoverTl.play(0)
        })
        this.el.addEventListener('mouseleave', () => {
            this.hoverTl.pause()
            this.outTl.play(0)
        })
    }

    tlHover() {
        const t = gsap.timeline()
        t.set(this.fill, {
            willChange: 'transform',
            scale: 1
        }).to(
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
        this.ripple.length &&
            t
                .set(this.ripple, {
                    willChange: 'transform'
                })
                .fromTo(
                    this.ripple,
                    {
                        yPercent: -100
                    },
                    {
                        yPercent: 0,
                        stagger: {
                            each: 0.2
                        },
                        duration: 1,
                        ease: 'expo.out',
                        force3D: !0
                    },
                    0
                )
                .set(this.ripple, {
                    willChange: 'auto'
                })
        return t
    }

    tlOut() {
        const t = gsap.timeline()
        t.set(
            this.fill,
            {
                scaleX: 1.03,
                scaleY: 0.98,
                willChange: 'transform'
            },
            0
        )
            .to(
                this.fill,
                {
                    scaleX: 1,
                    scaleY: 1,
                    ease: 'elastic.out(1, 0.3)',
                    duration: 1,
                    force3D: !0
                },
                0
            )
            .set(this.fill, {
                willChange: 'auto'
            })
        this.ripple.length &&
            t
                .set(this.ripple, {
                    willChange: 'transform'
                })
                .set(
                    this.ripple,
                    {
                        yPercent: 0
                    },
                    0
                )
                .to(
                    this.ripple,
                    {
                        yPercent: 100,
                        stagger: {
                            each: 0.2,
                            from: 'end'
                        },
                        duration: 1,
                        ease: 'expo.out',
                        immediateRender: !1,
                        force3D: !0
                    },
                    0
                )
                .set(this.ripple, {
                    willChange: 'auto'
                })
        return t
    }
}
