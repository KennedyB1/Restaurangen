import { CookieP } from "./style/P"
import { CookieH2 } from "./style/Title"
import { BlackWrapper } from "./style/Wrappers"


export const CookieInfo = () => {

    const Cookieheader = "Cookie Policy";
    const TextFirstPart = "Hamburgerian använder sig av ”cookies” för att underlätta användningen, förbättra marknadsföringen och utnyttjandet av Hamburgerians webbplats. Du samtycker till Hamburgerians användande av cookies i enlighet med denna Cookie Policy genom att fortsätta använda webbplatsen och ha webbläsaren inställd på att tillåta cookies.";
    const TextSecondPart = "En cookie är en liten textbaserad datafil som en webbserver kan be att få spara på en webbplatsbesökares hårddisk. Cookien hjälper till att känna igen vilken typ av innehåll och vilka sidor som besökts på vår webbplats. Information som sparas med hjälp av en cookie kan röra hur en webbplatsanvändare utnyttjat webbplatsen, vilken typ av webbläsare webbanvändaren använder och vilka webbsidor användaren har besökt. Cookien möjliggör för Hamburgerian att förbättra ditt besök på Hamburgerian webbplats.";
    const TextFirthPart = "Vill du veta mer om vilka cookies vi använder så kan du kontakta oss på Hamburgerian via vår mail."
return <>
    <BlackWrapper>
        <CookieH2>{Cookieheader}</CookieH2>
        <CookieP>{TextFirstPart}</CookieP>
        <CookieP>{TextSecondPart}</CookieP>
    
        <CookieP>{TextFirthPart}</CookieP>
        
    </BlackWrapper>

</>
}
