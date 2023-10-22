
import {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Timeline from "../../components/ui/timeline/Timeline";

const TimelineSection = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // 타이틀 텍스트 등장s
        gsap.timeline({
            scrollTrigger: {
                trigger: '.timelineSection',
                start: '20% 100%',
                end: '0% 20%',
                scrub: 1,
            }
        })
            // .to('main', {backgroundColor: 'black', color:'white'}, 0)
            .from('.timelineSection h2', {opacity: 0, x: -200 })
            .from('.timelineCard', {opacity: 0, y: 20, stagger: 10, scrub: 2 })

    }, [])
    return <section id={'timeline'} className={'timelineSection md:flex justify-center items-center my-[10vh]'}>
        <div className={'flex text-7xl md:text-9xl text-gray-700 p-10'}>
            <h2>
                My <br />
                timeline
            </h2>
        </div>
        <Timeline>
            <Timeline.Card title={'동양미래대학교'} contents={'2013.03 ~ 2015. 02'}/>
            <Timeline.Card title={'비트캠프 UIUX Front 전문 개발자 양성과정 수료'} contents={'2020.08 ~ 2021. 01'}/>
            <Timeline.Card title={'정보처리기사 취득'} contents={'2021.06'}/>
            <Timeline.Card title={'평생교육진흥원 관광경영 학사 취득'} contents={'2020.06 ~ 2021. 08'}/>
            <Timeline.Card title={'주식회사 어솔루션'} contents={['2021.07 ~ 2022.03', '웹개발팀 / 자바 웹 풀스택 개발']}/>
            <Timeline.Card title={'(주) 엠포스'} contents={['2022.03 ~ 2023. 09', '커머스개발팀 / 프론트엔드 개발']}/>
        </Timeline>
    </section>
}

export default TimelineSection