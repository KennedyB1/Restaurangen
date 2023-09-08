import { ImageStaticPage } from "./style/Image"
import { Paragraf } from "./style/P"
import { HeaderH2Static } from "./style/Title"
import { LightWrapper, StaticPartWrapper, StaticTextWrapper, StaticWrapper } from "./style/Wrappers"
import { ImageStatic } from "./style/Image"

export const About = () => {
    return <>
    <ImageStatic src="src/assets/mainImage.jpg"></ImageStatic>
        <LightWrapper>
            <StaticWrapper>
                <HeaderH2Static> Om oss </HeaderH2Static>
                <StaticPartWrapper>
                    <StaticTextWrapper>
                    <Paragraf>Välkomna till oss på Hamburgerian. Hamngatan 1 i Halmstad, med utsikt över den vackra hamnen och bara ett stenkast från tågstation och centrum.</Paragraf>
                    <Paragraf>Hamburgerian är en liten mysig restaurang med fokus på kvalité och vardagslyx. Alla våra menyer är tillagade från grunden med ekologiska och närproducerade varor. Köttet är från svenska gårdar där betesdjuren fått gå ute och äta gräs och örter vilket medföljer att köttet blir naturligt mört och smakrikt. Tillbehören är noga balanserade för att ge en gastronomisk upplevelse som alla restaurangbesök ska ge. </Paragraf>
                    <Paragraf>Välkomna till oss på Hamburgerian! </Paragraf>
                    </StaticTextWrapper>
                    <ImageStaticPage src="src/assets/About.jpg"></ImageStaticPage>
                </StaticPartWrapper>
            </StaticWrapper>
        </LightWrapper>
    </>
}