import {motion} from "framer-motion";
import {useEffect} from "react";

type Props = {
    onClick: () => void
}

const Overlay = ({onClick}: Props) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, []);

    return <motion.div
        onClick={onClick}
        className={'fixed top-0 w-full h-full bg-black/50 z-50'}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
    />
}

export default Overlay