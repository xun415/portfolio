import {useEffect} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {AiOutlineCopy, AiOutlineDownload} from "react-icons/ai";
import {TypeAnimation} from "react-type-animation";
import {copyText} from "../../lib/browser/clipboard";
import {useDialogStore} from "../../store/dialog";
import {Button} from "@/components/ui/Button";
import resume from '@/assets/resume.pdf'
import {download} from "@/lib/browser/download";


const ContactSection = () => {
    const {setDialogShow} = useDialogStore()
    const EMAIL = 'xun415@naver.com'
    const TypeAnimationSequence = [
        EMAIL,
        1000,
    ]

    const onClickCopyMail = () => {
        copyText(EMAIL, () => {
            setDialogShow({
                content: '복사 되었습니다.',
            })
        })
    }

    const onClickDownloadResume = () => {
        download(resume, '박태훈_이력서')
        setDialogShow?.({
            content: '이력서가 다운로드 되었습니다.',
        })
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // 타이틀 텍스트 등장
        gsap.timeline({
            scrollTrigger: {
                trigger: '.contactSection',
                start: '10% 100%',
                end: '0% 20%',
                scrub: 1,
            }
        })
            .to('.projectSection h2', { position: 'relative', zIndex: -1})
            .to('main', { background: 'white', color: 'black'  })

    })
    return (
        <section id={'contact'} className={'h-screen contactSection flex flex-col gap-20 items-center justify-center'}>
            <h2 className={'text-5xl md:text-7xl uppercase'}>contact</h2>
            <div className={'flex flex-col gap-4 text-xl md:text-3xl cursor-pointer'}>
                <TypeAnimation
                    wrapper="span"
                    speed={50}
                    sequence={TypeAnimationSequence}
                />
                <Button onClick={onClickCopyMail} className={'mt-4'}>
                    <span className={'text-xl mr-2'}><AiOutlineCopy/></span>Copy to ClipBoard
                </Button>
            </div>


            <div className={'flex flex-col gap-4 w-[200px] md:w-[300px] border-t-2 p-4'}>
                <h3 className={'text-center text-3xl md:text-5xl uppercase mb-4'}>resume</h3>
                <Button onClick={onClickDownloadResume}>
                    <span className={'text-xl mr-2'}><AiOutlineDownload/></span>Download
                </Button>
            </div>
        </section>
    )
}

export default ContactSection