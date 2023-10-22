import { motion } from "framer-motion";
import {useState} from "react";

export type Props = {
    title: string
    img: string
    info: string
    startAt: string
    endAt: string
}

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const ProjectCard = ({title, img, info}: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    return (
        <motion.article
            initial={false}
            animate={
                isLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            viewport={{ once: false }}
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
            className={'relative w-full p-4 cursor-pointer transition duration-300 brightness-50 hover:brightness-100 text-center '}
        >
            <img src={img} alt={title+' 이미지'} className={'w-full max-h-[50vh] h-full object-contain'} onLoad={() => setIsLoaded(true)}/>
            <h3 className={'font-bold text-[28px] md:text-[36px]'}>{title}</h3>
            <p>{info}</p>
        </motion.article>
    )
}

export default ProjectCard