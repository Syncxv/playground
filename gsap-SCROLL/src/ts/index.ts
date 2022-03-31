import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button } from './button'

gsap.registerPlugin(ScrollTrigger)
// gsap.to('.box', {
//     scrollTrigger: '.box',
//     x: 400
// })
const heroTimeline = gsap.timeline({ defaults: { duration: 1 } })
heroTimeline
    .from('.well', {
        transform:
            'translate(0%, 90.5334%) translate3d(0px, 0px, 0px) rotateX(-54.32deg) skew(0deg, 1.8107deg) scale(0.8189, 0.818933)',
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
        '-=0.7'
    )
;(window as any).heroTimeline = heroTimeline

document.querySelectorAll('.btn.brand').forEach(s => new Button({ el: s }))
;(window as any).Button = Button
window.gsap = gsap
//hi
