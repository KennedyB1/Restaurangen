import { Link } from "react-router-dom";
import { ButtonGreen } from "./style/Buttons";
import burger from '../../public/assets/burger.png';
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";
import { H2centered } from "./style/Title";
import { ImgConfirmation } from "./style/Image";

interface IConformationPageProps {
    name: string;
    date: Date;
    time: string;
}

export default function ConfirmationPage(props: IConformationPageProps) {
    return (
      <BookingSection>
        <BookingWrapper>
            <H2centered>Tack för din bokning {props.name},<br></br> vi ses den {props.date.toISOString().slice(0, 10)} kl {props.time} 🔥 🔥</H2centered>
            <Link to='/meny'><ButtonGreen>Ta en titt på vår meny</ButtonGreen> </Link>
            <ImgConfirmation src={burger} alt="a burger" width='100'/>
        </BookingWrapper>
      </BookingSection>
    )
}