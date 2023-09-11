import { Link } from "react-router-dom"
import "../Cookie.css"
import { useState } from "react";
import { CookieInfoH3 } from "./style/Title";
import { DarkSpan } from "./style/Spans";
import { ButtonYellow } from "./style/Buttons";
import { CookieContainerDiv, CookieDivBanner } from "./style/Wrappers";

export const CookieBanner = () => {

    const [cookieDiv, setCookieDiv] = useState("visible");

    function closeCookieBanner () {
        if (cookieDiv === "visible") {
            setCookieDiv("hidden")
        }
    }

    
    
    
    return <>
        <CookieDivBanner className={cookieDiv}>
            <CookieInfoH3>Cookies</CookieInfoH3>
            <CookieContainerDiv>
                <DarkSpan>Vi använder oss av cookies. För mer info klicka på länken.</DarkSpan>
                <DarkSpan><Link to={"/cookie"} style={{ color: 'blue' }}>Cookies</Link></DarkSpan>
                <ButtonYellow onClick={closeCookieBanner}>Stäng</ButtonYellow>
            </CookieContainerDiv>
        </CookieDivBanner>
    </>
}