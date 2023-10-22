import {useEffect, useState} from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard from "../../components/ui/ProjectCard";
import {motion} from "framer-motion";
import Overlay from "../../components/ui/Overlay";
import LayoutModal from "../../components/ui/LayoutModal";
import {projects} from "../../datas/project";
import ProjectDetailModal from "./ProjectDetail";

const ProjectSection = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
    const selectedProject = projects.find(project => project.title === selectedProjectId)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // 타이틀 텍스트 등장
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projectSection',
                start: '10% 100%',
                end: '0% 20%',
                scrub: 1,
            }
        })
            .fromTo('.projectSection h2 span:first-child',
                {x: '-100%', opacity: 0}, {opacity:1,x: '0%', ease: 'none', duration: 5}, 0)
            .fromTo('.projectSection h2 span:last-child',
                {x: '100%', opacity: 0}, {opacity:1,x: '0%', ease: 'none', duration: 5}, 0)

        // projectSection 등장 시 배경색
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projectSection',
                start: '10% 100%',
                end: '0 100%',
                scrub: 1,
            }
        })
            .to('main', {backgroundColor: '#000', color: '#fff'}, 0)
            // title 글자 position: fixed 적용
            .to('.projectSection h2', { position: 'fixed', ease: 'none', width: '100%', duration: 5, opacity: 1}, 0)

            // .workList에 marginTop을 적용해서 애니를 자연스럽게
            .to('.projectList', {position: 'relative', zIndex: 10, duration: 1}, 0)

        // 영역 끝
        gsap.timeline({
            scrollTrigger: {
                trigger: '.projectSection',
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1
            }
        })
            .to('.projectSection h2', { position: 'relative', opacity: 0})
            .to('.projectSection h2 span:first-child', { ease: 'none',x: -100, duration: 2, opacity: 0 }, '<')
            .to('.projectSection h2 span:last-child', { ease: 'none',x: 100, duration: 2, opacity: 0 }, '<')
    }, [])

    return (
        <section id={'project'} className={'projectSection mt-4 w-full relative overflow-hidden flex justify-center'}>
            <div className={'container relative'}>
                <h2 className={'font-bold text-[60px] md:text-[120px] text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}>
                    <span className={'inline-block'}>My</span><br />
                    <span className={'inline-block'}>Projects</span>
                </h2>
                <ul className={'projectList grid align-items-center md:grid-cols-2 gap-10 lg:gap-20 mt-[100vh] box-border'}>
                    {
                        projects.map(({title,thumbnail, desc, startAt, endAt, }, index) => (
                            <motion.li key={title} layoutId={title} className={index % 2 !== 0? 'md:mt-[300px]' : ''} onClick={() => {
                                setSelectedProjectId(title)
                            }}>
                                <ProjectCard title={title} img={thumbnail} info={desc} startAt={startAt} endAt={endAt} />
                            </motion.li>
                        ))
                    }
                </ul>
            </div>
            {/* overlay*/}
            {
                selectedProjectId !== null && selectedProject &&
                <>
                    {<Overlay onClick={() => setSelectedProjectId(null)} />}
                    <LayoutModal layoutId={selectedProjectId} onClickClose={() => setSelectedProjectId(null)}>
                        <ProjectDetailModal {...selectedProject}></ProjectDetailModal>
                    </LayoutModal>
                </>
            }
        </section>
    )
}

export default ProjectSection