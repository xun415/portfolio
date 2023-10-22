import {projects, Project} from "../../datas/project";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination"


type Props = Omit<Project, 'thumbnail' | 'subject'>

const ProjectDetailModal = ({title, startAt, endAt, images, desc, skills, role, works, links}: Props) => {
    return (
        <>
            <div className={'flex flex-col items-center gap-2 mb-4'}>
                <h3 className={'font-bold text-3xl'}>{title}</h3>
                <p className={'text-sm text-black/50'}>{startAt} ~ {endAt}</p>
            </div>
            <div className={'flex justify-center h-[40vh]'}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 3000
                    }}
                    pagination
                >
                    {
                        images.map((image, index) =>
                            <SwiperSlide key={image} >
                                <div className={'flex justify-center h-full'}>
                                    <img src={image} alt={`${title} 이미지 ${index}`} className={'object-contain'} />
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>

            </div>
            <div className={'text-sm p-4 flex flex-col gap-4'}>
                <p>{desc}</p>
                <ul className={'flex flex-wrap gap-2 content-start'}>
                    {
                        skills.map(skill => <li key={skill} className={'px-2 py-1 border-[1px] border-black/20 rounded-full'}>{skill}</li>)
                    }
                </ul>
                <h4 className={'font-bold text-lg'}>역할</h4>
                <p>{role}</p>
                <h4 className={'font-bold text-lg'}>주요 작업 내용</h4>
                <ul className={'flex flex-col gap-2'}>
                    {
                        works.map(work => <li key={work}>{work}</li>)
                    }
                </ul>
                {
                    links && <>
                        <h4 className={'font-bold text-lg'}>관련 링크</h4>
                        <ul className={'flex flex-col gap-2 list-disc list-inside text-blue-700'}>
                            {
                                links.map(link => <li key={link.name}>
                                    <a className={'text-blue-700 hover:underline'} href={link.link} target={'_blank'}>{link.name}</a>
                                </li>)
                            }
                        </ul>
                    </>
                }

            </div>
        </>
    )
}

export default ProjectDetailModal