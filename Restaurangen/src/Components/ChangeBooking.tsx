import { ICostumer, IFetchedBooking } from "../interfaces/interfaces";
import { ButtonGreen, ButtonRed } from "./style/Buttons";
import { LightPSmaller } from "./style/P";
import { H2 } from "./style/Title";


interface IChangeBookingProps {
  foundBookings: IFetchedBooking[];
  costumers: ICostumer[];
  removeBooking: (id: string) => void;
  setView: (view: string) => void;
  setBookingId: (id: string) => void;
}

export default function ChangeBooking(props: IChangeBookingProps) {
  const clicked = (bookingId: string) => {
    props.setView('2');
    props.setBookingId(bookingId);
  }

  return (
      props.costumers.map((costumer, i) => (
          <div key={props.foundBookings[i]._id}>
          <H2>
          {costumer.name} {costumer.lastname}
          </H2>
          <LightPSmaller>Tid: {props.foundBookings[i].time}, Antal personer: {props.foundBookings[i].numberOfGuests}</LightPSmaller>
          <ButtonRed onClick={() => props.removeBooking(props.foundBookings[i]._id)}>Ta bort bokning</ButtonRed>
          <ButtonGreen onClick={() => clicked(props.foundBookings[i]._id)}>Ändra bokning</ButtonGreen>
          </div>
      ))
  )
}