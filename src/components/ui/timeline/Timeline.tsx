import {FC, ReactNode} from "react";
import TimelineCard from './TimelineCard'

type Props = {
    children: ReactNode | ReactNode[]
}

type TimelineComponent = FC<Props> & {
    Card?: typeof TimelineCard
}

const Timeline:TimelineComponent = ({ children }) => {

    return (
    <div className={'p-8'}>
        <div className="outer border-l-[2px] border-[#333] ">
        {children}
        </div>
    </div>
    )
}

Timeline.Card = TimelineCard


export default Timeline