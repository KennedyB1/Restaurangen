import { ImageStatic, ImageStaticPage } from "./style/Image"
import { Paragraf } from "./style/P"
import { HeaderH2Static, HeaderH3Static } from "./style/Title"
import { LightWrapper, StaticPartWrapper, StaticTextWrapper, StaticWrapper } from "./style/Wrappers"

const header1 = "After Work"
const header2 = "Livemusik"
const header3 = "Måndagsrebjudande"

const text1 = "På onsdag har vi speciella erbjudande i restaurangen. 10% rabatt på drickar. Välkomna att boka bord!"
const text2 = "På fredag är det livemusik med en härlig countrygrupp. Välkomna att boka bord!"
const text3 = "10% rabatt på på vår BBQ burgare."


export const Home = () => {
    return <>
    <ImageStatic src="src/assets/mainImage.jpg"></ImageStatic>
    <LightWrapper>
        <StaticWrapper>
            <HeaderH2Static>Specialerbjudande</HeaderH2Static>
            <StaticPartWrapper>
                <StaticTextWrapper>
                    <HeaderH3Static>{header1}</HeaderH3Static>
                    <Paragraf>{text1}</Paragraf>
                    <HeaderH3Static>{header2}</HeaderH3Static>
                    <Paragraf>{text2}</Paragraf>
                    <HeaderH3Static>{header3}</HeaderH3Static>
                    <Paragraf>{text3}</Paragraf>
                </StaticTextWrapper>
                <ImageStaticPage src="src/assets/Erbjudande.jpg"></ImageStaticPage>
            </StaticPartWrapper>
        </StaticWrapper>
    </LightWrapper>
    </>
}