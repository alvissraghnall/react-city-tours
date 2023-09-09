import { PropsWithChildren } from "react";
import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

export default Layout;