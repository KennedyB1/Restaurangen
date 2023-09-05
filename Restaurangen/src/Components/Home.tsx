import { ImageStaticPage } from "./style/Image"
import { Paragraf } from "./style/P"
import { HeaderH2Static, HeaderH3Static } from "./style/Title"
import { LightWrapper, StaticPartWrapper, StaticTextWrapper, StaticWrapper } from "./style/Wrappers"
import { Image } from "./style/Image"

export const Home = () => {
    return <>
    <Image src="src/assets/mainImage.jpg"></Image>
    <LightWrapper>
        <StaticWrapper>
            <HeaderH2Static>Specialerbjudande</HeaderH2Static>
            <StaticPartWrapper>
                <StaticTextWrapper>
                    <HeaderH3Static>After Work</HeaderH3Static>
                    <Paragraf>På onsdag har vi speciella erbjudande i restaurangen. 10% rabatt på drickar. Välkomna att boka bord!</Paragraf>
                    <HeaderH3Static>Livemusik</HeaderH3Static>
                    <Paragraf>På fredag är det livemusik med en härlig countrygrupp. Välkomna att boka bord!</Paragraf>
                    <HeaderH3Static>Måndagsrebjudande</HeaderH3Static>
                    <Paragraf>10% rabatt på på vår BBQ burgare.</Paragraf>
                </StaticTextWrapper>
                <ImageStaticPage src="src/assets/Erbjudande.jpg"></ImageStaticPage>
            </StaticPartWrapper>
        </StaticWrapper>
        

    </LightWrapper>
    </>
}