import { Link, Outlet } from "react-router-dom";
import { BlackWrapperFotter, BlackWrapperHeader } from "./style/Wrappers";
import { IconImage, IconImageHeader } from "./style/Image";
import { FooterSpan, } from "./style/Spans";
import { HeaderLi, HeaderUl, Nav } from "./style/Nav";
import { HeaderH1 } from "./style/Title";
import { HeaderButtonYellow } from "./style/Buttons";

export const Layout = () => {
    return <>
        <header>
            <BlackWrapperHeader>
                <IconImageHeader src="src/assets/Burger.jpg" />
                <HeaderH1>Hamburgerian</HeaderH1>
                <Nav> 
                    <HeaderUl>
                    <HeaderLi><Link to={"/"} style={{ color: '#F3EDC9' }}>Hem</Link></HeaderLi>
                    <HeaderLi><Link to={"/meny"} style={{ color: '#F3EDC9' }}>Meny</Link></HeaderLi>
                    <HeaderLi><Link to={"/om"} style={{ color: '#F3EDC9' }}>Om oss</Link></HeaderLi>
                    <HeaderLi><Link to={"/kontakt"} style={{ color: '#F3EDC9' }}>Kontakt</Link></HeaderLi>
                    </HeaderUl>  
                </Nav>
                <HeaderButtonYellow as={Link} to={'/bokning'} > Boka bord </HeaderButtonYellow>
            </BlackWrapperHeader>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <BlackWrapperFotter>
                <IconImage src="src/assets/Burger.jpg" />
                <FooterSpan><Link to={"/kontakt"} style={{ color: '#F3EDC9' }}>Kontakt</Link></FooterSpan>
                <FooterSpan><Link to={"/om"} style={{ color: '#F3EDC9' }}>Om oss</Link></FooterSpan>
                <FooterSpan><Link to={""} style={{ color: '#F3EDC9' }}>Cookies</Link></FooterSpan>
                <FooterSpan><Link to={"/bokning"} style={{ color: '#F3EDC9' }}>Boka bord</Link></FooterSpan>
                <FooterSpan><Link to={"/admin"} style={{ color: '#F3EDC9' }}>Adminläge</Link></FooterSpan>
            </BlackWrapperFotter>

        </footer>
    </>
}