import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Button } from './button'

gsap.registerPlugin(ScrollTrigger)
// gsap.to('.box', {
//     scrollTrigger: '.box',
//     x: 400
// })
const heroTimeline = gsap.timeline({ defaults: { duration: 1 }, delay: 2 })
heroTimeline
    .from('.well', {
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

new Button({ el: document.querySelector('.btn.brand.hero-btn')! })
new Button({ el: document.querySelector('.btn.brand')! })
;(window as any).Button = Button
window.gsap = gsap
//hi
