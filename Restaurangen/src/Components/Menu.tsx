import { ImageMenu } from "./style/Image"
import { MenuParagraf, Paragraf } from "./style/P"
import { HeaderH2Menu, HeaderH2Static, HeaderH3Menu, HeaderH3Static } from "./style/Title"
import { MenuPartWrapper, LightWrapper, MenuTextWrapper, StaticPartWrapper, StaticTextWrapper, StaticWrapper } from "./style/Wrappers"
import { Image } from "./style/Image"

export const Menu = () => {
    return <>
        <Image src="src/assets/mainImage.jpg"></Image>
        <LightWrapper>
            <StaticWrapper>
                <HeaderH2Menu>Meny</HeaderH2Menu>
                <StaticPartWrapper>
                    <MenuTextWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>Cheese Burger</HeaderH3Menu>
                            <MenuParagraf>- cheddarost, lök, pickels, tomatsås och senap</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>Bacon Burger</HeaderH3Menu>
                            <MenuParagraf>-  bacon, cheddarost, lök, pickels, mayo</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>The Classic</HeaderH3Menu>
                            <MenuParagraf>-  cheddarost, tomat, sallad, lök, pickels, mayo</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>Veg Burger</HeaderH3Menu>
                            <MenuParagraf>-  halloumi, cheddarost, syltad rödlök, tomat, sallad, chili mayo </MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>BBQ Burger</HeaderH3Menu>
                            <MenuParagraf>-  cheddarost, sallad, tomat, rostad lök, BBQ mayo </MenuParagraf>
                        </MenuPartWrapper>
                    </MenuTextWrapper>
                    <ImageMenu src="src/assets/Menu.jpg"></ImageMenu>
                </StaticPartWrapper>
            </StaticWrapper>
        </LightWrapper>
    </>
}