import {motion} from "framer-motion";
import { ReactElement} from "react";
import {AiOutlineClose} from "react-icons/ai";

type Props = {
    layoutId: string
    children: ReactElement | ReactElement[]
    onClickClose: () => void
}
const LayoutModal = ({ layoutId, onClickClose, children }: Props) => {
    return (
        <motion.div layoutId={layoutId} className={'mb-4 pb-12 fixed w-[90%] max-w-[800px] h-[90%] mx-auto top-[5%] z-50 bg-white z-50 rounded-lg text-black overflow-hidden'}>
            {/* modal header */}
            <div className={'p-4 flex justify-end text-black text-[24px] border-black/50 border-b-[1px]'}>
                <span className={'cursor-pointer'} onClick={onClickClose}><AiOutlineClose /></span>
            </div>

            {/* modal body */}
            <div className={'p-4 h-full overflow-y-auto mb-4 box-border' }>
                {children}
            </div>
    </motion.div>
    )
}

export default LayoutModal