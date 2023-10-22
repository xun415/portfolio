import { Outlet } from 'react-router-dom'
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
    return (
        <div className={'font-sans-kr'}>
            <Header />
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout