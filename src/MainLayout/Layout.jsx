import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar';
const Layout = () => {
    return (
        <div className='lg:w-9/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;