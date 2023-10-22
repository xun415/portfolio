import myImg from '/src/assets/images/myImg.jpeg'
import {useEffect} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ProfileSection = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.profileSection',
                start: 'top 80%',
                end: '40% 100%',
                scrub: 1
            }
        })
            .from('.container h2', {opacity: 0, y: 200, duration: 1})
    }, [])

    return <section id={'profile'} className={'profileSection min-h-screen flex flex-col items-center justify-center'}>
        <div className={'container p-4'}>
            <h2 className={'text-[52px] mb-20'}>Hello, <br/> my name is Taehun ;)</h2>
            <div className={'md:flex justify-center gap-16'}>
                <div className={'flex items-center mb-10 md:mb-0'}>
                    <img className={'profileImg rounded-[50px]'} src={myImg} alt="내 사진"/>
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'w-full text-xl mb-10'}>안녕하세요. 반갑습니다.<br /> 3년차 프론트엔드 개발자 박태훈입니다.</p>
                    <p>
                        React, Typescript, Next.js를 사용하여 하이브리드앱 서비스와 백오피스를 개발하고 운영하고 있습니다.<br/><br/>
                        클린코드, 프론트엔드 아키텍처, UI 테스팅에 관심이 많습니다.<br/>좋은 설계를 통해 완성도 높은 제품을 만드는데 기여하고자 합니다. 감사합니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default ProfileSection