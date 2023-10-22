import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

type LinkAttr = {
    to: string
    title: string
}

const links: LinkAttr[] = [
    {
        to: '#intro',
        title: 'intro'
    },
    {
        to: '#profile',
        title: 'profile'
    },
    {
        to: '#timeline',
        title: 'timeline'
    },
    {
        to: '#project',
        title: 'project'
    },
    {
        to: '#contact',
        title: 'contact'
    },
]

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleOpenMenu = () => {
        setIsOpenMenu(prev => !prev)
    }

    return <header className={`w-full fixed top-0 left-0 z-50 flex justify-center items-center border-y-2 bg-white h-16 uppercase font-bold`}>
        <div className={'container flex justify-between p-4'}>
            <h1 className={'text-xl font-bold'}>
                <a href={'/'}>
                    Taehun's PORTFOLIO
                </a>
            </h1>
            <nav className={'flex gap-4 text-sm hidden md:flex '}>
                {
                    links.map(link =>
                        <a key={link.title} onClick={event => {
                            event.preventDefault()
                            document.getElementById(link.title)!.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }} className={'transition-colors hover:text-blue-400'}>{link.title}</a>
                    )
                }
            </nav>
            <div className={'md:hidden flex items-center cursor-pointer'}
                 onClick={toggleOpenMenu}
            >
                {isOpenMenu? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
        </div>
        {
            isOpenMenu &&
            <nav className={'md:hidden top-16 fixed w-full py-2 flex flex-col gap-4  text-center bg-white border-b-2 text-sm'}>
                {
                    links.map(link =>
                        <a key={link.title} href={link.to} onClick={event => {
                            event.preventDefault()
                            document.getElementById(link.title)!.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }} className={'transition-colors hover:text-blue-400'}>{link.title}</a>
                    )
                }
            </nav>
        }
    </header>
}

export default Header