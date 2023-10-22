import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

import {TypeAnimation} from "react-type-animation";
import VueLogo from '/src/assets/images/logo/vue.png'
import ReactLogo from '/src/assets/images/logo/react.png'
import NextLogo from '/src/assets/images/logo/nextjs.png'
import TsLogo from '/src/assets/images/logo/ts.png'
import SASSLogo from '/src/assets/images/logo/sass.png'
import JsLogo from '/src/assets/images/logo/js.png'
import { useEffect } from "react";

const IntroSection = () => {
    const TypeAnimationSequence = [
        '철학하는',
        1000,
        '주도적인',
        1000,
        '스스로 성장하는',
        1000,
        '백엔드 출신',
        1000,
        '클린코더',
        1000
    ]

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger)
        // gsap
        gsap.timeline()
            .from('.vueIcon' ,{ y: 0, x: -100, duration: .5, opacity: 0 })
            .from('.reactIcon', { y: -100, x: -100, duration: .5, opacity: 0 }, '<')
            .from('.nextIcon', { y: 100, duration: .5, opacity: 0 })
            .from('.sassIcon', { x: 100, duration: .5, opacity: 0 },'<')
            .from('.tsIcon', { y: 100, x: 100, duration: .5, opacity: 0 })
            .from('.jsIcon', { y: 100, duration: .5, opacity: 0}, '<')

        gsap.timeline({
            scrollTrigger: {
                trigger: '.intro-section',
                start: '35% 20%',
                end: '70% 30%',
                scrub: 1,
            }
        })
            .to('.vueIcon', {opacity: 0, y: -200,x:100, duration: .5, scale: 1.5, rotate: 360})
            .to('.jsIcon', {opacity: 0, y: -200,x:100, duration: .5, scale: 1.5, rotate: 360}, '<')
            .to('.reactIcon', {opacity: 0, x: -200, duration: 2, scale: 1.2, rotate: 360})
            .to('.nextIcon', {opacity: 0, y: -200, duration: 2, scale: 1.5, rotate: 360}, '<')
            .to('.tsIcon', {opacity: 0, y: 200,x:100, duration: 2, scale: 2, rotate: 360}, '<')
            .to('.sassIcon', {opacity: 0, y: -200,x:100, duration: 2, scale: 1.5, rotate: 360}, '<')

    }, [])

    return (
        <section id={'intro'} className={'intro-section relative h-screen flex justify-center items-center'}>
            <p className={'text-center text-[36px] md:text-[72px] font-bold z-10'}>
                안녕하세요 :) <br/>
                <TypeAnimation
                    wrapper="span"
                    speed={50}
                    sequence={TypeAnimationSequence}
                    preRenderFirstString={false}
                    className={'text-sky-400'}
                    repeat={Infinity}
                /><br/>
                프론트엔드 개발자<br/>
                박태훈입니다.
            </p>
            <img className={'iconImg vueIcon w-24 md:w-40 absolute top-[15%] left-[2%] rotate-1'} src={VueLogo} alt="vue logo"/>
            <img className={'iconImg reactIcon w-24 md:w-40 absolute top-[35%] left-[12%]'} src={ReactLogo} alt="react logo"/>
            <img className={'iconImg nextIcon w-24 md:w-40 absolute top-[90%] left-[23%] rotate-[-10deg]'} src={NextLogo} alt="next logo"/>
            <img className={'iconImg sassIcon w-24 md:w-40 absolute top-[55%] right-[5%] rotate-12'} src={SASSLogo} alt="sass logo"/>
            <img className={'iconImg tsIcon w-24 md:w-40 absolute bottom-[15%] right-[40%] rotate-12'} src={TsLogo} alt="typescript logo"/>
            <img className={'iconImg jsIcon w-24 md:w-40 absolute top-[15%] right-[10%] rotate-[-20deg]'} src={JsLogo} alt="js logo"/>
        </section>
    )
}

export default IntroSection