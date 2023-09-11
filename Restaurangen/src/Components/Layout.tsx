import { Link, Outlet } from "react-router-dom";
import { BlackWrapperFotter, BlackWrapperHeader } from "./style/Wrappers";
import { IconImage, IconImageHeader } from "./style/Image";
import { FooterSpan, } from "./style/Spans";
import { HeaderLi, HeaderUl, Nav } from "./style/Nav";
import { HeaderH1 } from "./style/Title";
import { HeaderButtonYellow } from "./style/Buttons";
import "../hamburger.css"
import { useState } from "react";
import { CookieBanner } from "./CookieBanner";

export const Layout = () => {
    
    const [burgerClass, setBurgerClass] = useState("hidden");

    function SwitchBurgerMenu () {
        //console.log("Klickad")
        if (burgerClass === "hidden") {
            setBurgerClass("visible")
        } else {
            setBurgerClass("hidden")
        }
    }

    function closeBurger () {
        console.log("klickad");
        if (burgerClass === "visible") {
            setBurgerClass("hidden")
        }
    }

    return <>
        <header>
            <BlackWrapperHeader>
                <IconImageHeader src="src/assets/Burger.jpg" onClick={SwitchBurgerMenu}/>
                <HeaderH1>Hamburgerian</HeaderH1>
                <Nav className= {burgerClass}> 
                    <HeaderUl>
                    <HeaderLi onClick={closeBurger}><Link  to={"/"} style={{ color: '#F3EDC9' }}>Hem</Link></HeaderLi>
                    <HeaderLi onClick={closeBurger}><Link to={"/meny"} style={{ color: '#F3EDC9' }}>Meny</Link></HeaderLi>
                    <HeaderLi onClick={closeBurger}><Link to={"/om"} style={{ color: '#F3EDC9' }}>Om oss</Link></HeaderLi>
                    <HeaderLi onClick={closeBurger}><Link to={"/kontakt"} style={{ color: '#F3EDC9' }}>Kontakt</Link></HeaderLi>
                    </HeaderUl>  
                </Nav>
                <HeaderButtonYellow as={Link} to={'/bokning'} > Boka bord </HeaderButtonYellow>
            </BlackWrapperHeader>
        </header>
        <main>
            <CookieBanner></CookieBanner>
            <Outlet></Outlet>
            
        </main>
        <footer>
            <BlackWrapperFotter>
                <IconImage src="src/assets/Burger.jpg" />
                <FooterSpan><Link to={"/kontakt"} style={{ color: '#F3EDC9' }}>Kontakt</Link></FooterSpan>
                <FooterSpan><Link to={"/om"} style={{ color: '#F3EDC9' }}>Om oss</Link></FooterSpan>
                <FooterSpan><Link to={"/cookie"} style={{ color: '#F3EDC9' }}>Cookies</Link></FooterSpan>
                <FooterSpan><Link to={"/bokning"} style={{ color: '#F3EDC9' }}>Boka bord</Link></FooterSpan>
                <FooterSpan><Link to={"/admin"} style={{ color: '#F3EDC9' }}>Adminläge</Link></FooterSpan>
            </BlackWrapperFotter>

        </footer>
    </>
}