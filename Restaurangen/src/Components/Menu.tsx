import { ImageMenu } from "./style/Image"
import { MenuParagraf,  } from "./style/P"
import { HeaderH2Menu,  HeaderH3Menu, } from "./style/Title"
import { MenuPartWrapper, LightWrapper, MenuTextWrapper, StaticPartWrapper, StaticWrapper } from "./style/Wrappers"
import { ImageStatic } from "./style/Image"

export const Menu = () => {

const menu1 = "Cheese Burger"
const menu2 = "Bacon Burger"
const menu3 = "The Classic"
const menu4 = "Veg Burger"
const menu5 = "BBQ Burger"

const text1 = "- cheddarost, lök, pickels, tomatsås och senap"
const text2 = "-  bacon, cheddarost, lök, pickels, mayo"
const text3 = "-  cheddarost, tomat, sallad, lök, pickels, mayo"
const text4 = "-  halloumi, cheddarost, syltad rödlök, tomat, sallad, chili mayo "
const text5 = "-  cheddarost, sallad, tomat, rostad lök, BBQ mayo "

    return <>
        <ImageStatic src="src/assets/mainImage.jpg"></ImageStatic>
        <LightWrapper>
            <StaticWrapper>
                <HeaderH2Menu>Meny</HeaderH2Menu>
                <StaticPartWrapper>
                    <MenuTextWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>{menu1}</HeaderH3Menu>
                            <MenuParagraf>{text1}</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>{menu2}</HeaderH3Menu>
                            <MenuParagraf>{text2}</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>{menu3}</HeaderH3Menu>
                            <MenuParagraf>{text3}</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>{menu4}</HeaderH3Menu>
                            <MenuParagraf>{text4}</MenuParagraf>
                        </MenuPartWrapper>
                        <MenuPartWrapper>
                            <HeaderH3Menu>{menu5}</HeaderH3Menu>
                            <MenuParagraf>{text5}</MenuParagraf>
                        </MenuPartWrapper>
                    </MenuTextWrapper>
                    <ImageMenu src="src/assets/Menu.jpg"></ImageMenu>
                </StaticPartWrapper>
            </StaticWrapper>
        </LightWrapper>
    </>
}