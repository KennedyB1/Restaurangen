import { ImageStaticPage } from "./style/Image"
import { Paragraf } from "./style/P"
import { HeaderH2Static } from "./style/Title"
import { LightWrapper, StaticPartWrapper, StaticTextWrapper, StaticWrapper } from "./style/Wrappers"
import { Image } from "./style/Image"

export const About = () => {
    return <>
    <Image src="src/assets/mainImage.jpg"></Image>
        <LightWrapper>
            <StaticWrapper>
                <HeaderH2Static> Om oss </HeaderH2Static>
                <StaticPartWrapper>
                    <StaticTextWrapper>
                        <Paragraf>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</Paragraf>
                        <Paragraf>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraf>
                    </StaticTextWrapper>
                    <ImageStaticPage src="src/assets/About.jpg"></ImageStaticPage>
                </StaticPartWrapper>
            </StaticWrapper>
        </LightWrapper>
    </>
}