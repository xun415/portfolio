import { ReactNode} from "react";

type Props = {
    children: ReactNode | ReactNode[]
}

const TimelineWrap = ({ children }: Props) => {

    return (
    <div className={'p-8'}>
        <div className="outer border-l-[2px] border-[#333] ">
        {children}
        </div>
    </div>
    )
}

export default TimelineWrap