import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button } from './button'
const textTransformTHingy =
    'translate3d(0px, 0px, 0px) rotateX(-56.8319deg) skew(0deg, 1.8944deg) scale(0.8106, 0.81056)'
gsap.registerPlugin(ScrollTrigger)
const textAnimation = (target: string, vars?: gsap.TweenVars) => {
    gsap.set(target, {
        transform: textTransformTHingy,
        y: 200,
        opacity: 0,
        willChange: 'transform'
    })
    gsap.to(target, {
        ...(vars || {}),
        scrollTrigger: {
            trigger: target,
            start: 'top bottom'
        },
        duration: 2.3,
        stagger: 0.15,
        ease: 'expo.out',
        y: 0,
        opacity: 1,
        transform: 'translate(0px, 0px)',
        willChange: 'auto'
    })
}
const heroTimeline = gsap.timeline({ defaults: { duration: 2.3 } })
heroTimeline
    .from('.well', {
        transform: textTransformTHingy,
        y: 100,
        opacity: 0,
        stagger: 0.15,
        ease: 'expo.out'
    })
    .from(
        '.hero-btn',
        {
            y: 100,
            opacity: 0,
            ease: 'expo.out'
        },
        '-=1.5'
    )
textAnimation('.sheesh')
textAnimation('.hi', { delay: 0.2 })
textAnimation('.hi2')
textAnimation('.hi3')

document.querySelectorAll('.btn.brand').forEach(s => new Button({ el: s }))
;(window as any).heroTimeline = heroTimeline
;(window as any).Button = Button
;(window as any).textTransformTHingy = textTransformTHingy
window.gsap = gsap
//hi
