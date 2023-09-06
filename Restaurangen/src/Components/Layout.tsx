import { Link, Outlet } from "react-router-dom";
import { BlackWrapperFotter } from "./style/Wrappers";
import { IconImage } from "./style/Image";
import { FooterSpan } from "./style/Spans";


export const Layout = () => {
    return <>
        <header></header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <BlackWrapperFotter>
                <IconImage src="src/assets/Burger.jpg" />
                <FooterSpan><Link to={"/kontakt"}>Kontakt</Link></FooterSpan>
                <FooterSpan><Link to={"/om"}>Om oss</Link></FooterSpan>
                <FooterSpan><Link to={""}>Cookies</Link></FooterSpan>
                <FooterSpan><Link to={"/bokning"}>Boka bord</Link></FooterSpan>
                <FooterSpan><Link to={"/admin"}>Adminläge</Link></FooterSpan>
            </BlackWrapperFotter>

        </footer>
    </>
}