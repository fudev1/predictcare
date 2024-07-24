import { Outlet } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Nav from './Nav';

export default function Layout() {
    return (
        <>
            <Header />
            <Nav />
            <Main>
                <Outlet />
            </Main>
        </>
        
    )
}