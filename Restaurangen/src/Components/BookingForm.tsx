import { ChangeEvent, FormEvent } from "react";
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";
import { LightP } from "./style/P";
import { Input, Textarea } from "./style/Form";
import { ButtonYellow } from "./style/Buttons";

interface IBookingFormProps {
  sendBooking: (e: FormEvent) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
}

export default function BookingForm(props: IBookingFormProps) {
  console.log(props)
return (
  <BookingSection>
      <BookingWrapper>
        <div>
          <LightP>Det finns lediga bord detta datumet och tiden, vi behöver bara några uppgifter från dig</LightP>
          <form onSubmit={props.sendBooking}>
              <div>
                  <Input type='text' placeholder="Förnamn" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setName(e.target.value)} required></Input>
                  <Input type='text' placeholder="Efternamn" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setLastName(e.target.value)} required></Input>
              </div>
              <div>
                  <Input type='text' placeholder="Telefonnummer" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setPhoneNumber(e.target.value)} required></Input>
                  <Input type='email' placeholder="E-post" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setEmail(e.target.value)} required></Input>
              </div>
              <LightP>Har du andra frågor till restaurangen?</LightP>
              <Textarea></Textarea>
              <ButtonYellow type="submit">Boka</ButtonYellow>
          </form>   
        </div>
      </BookingWrapper>
  </BookingSection>
)
}