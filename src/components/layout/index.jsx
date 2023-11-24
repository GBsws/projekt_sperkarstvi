import { Outlet } from 'react-router-dom';
import { Header } from "../header"
import {Footer} from '../footer';
import { Content } from '../content';

export const Layout = () => (
    <>
        <Header />
        <Content>
            <Outlet />
        </Content>
        <Footer />
    </>
)