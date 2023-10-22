export type Props = {
    title: string
    contents: string | string[]
}
const TimelineCard = ({title, contents}: Props) => {
    return (
        <div className="timelineCard relative mb-[40px] ml-[20px] p-4 rounded-xl max-w-[500px] shadow-lg">
            <div className="info flex flex-col gap-[10px]">
                <div className={'absolute w-4 h-4 bg-white rounded-full left-[-30px] border-[3px] border-red-500'} />
                <h3 className="title text-xl">{title}</h3>
                {
                    Array.isArray(contents) ? contents.map(content => <p key={content} className={'text-sm'}>{content}</p>)
                    : <p className={'text-sm'}>{contents}</p>
                }
            </div>
        </div>
    )
}

export default TimelineCard