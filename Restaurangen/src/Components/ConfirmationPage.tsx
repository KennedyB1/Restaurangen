import { Link } from "react-router-dom";
import { ButtonGreen } from "./style/Buttons";
import burger from '/public/burger.svg';

interface IConformationPageProps {
    name: string;
    date: Date;
    time: string;
}

export default function ConfirmationPage(props: IConformationPageProps) {
    return (
        <div>
          <>
            <h3>Tack för din bokning {props.name}, vi ses den {props.date.toISOString().slice(0, 10)} kl {props.time}</h3>
            <Link to='/meny'><ButtonGreen>Ta en titt på vår meny</ButtonGreen> </Link>
            <img src={burger} alt="a burger" width='100'/>
          </>
        </div>
    )
}