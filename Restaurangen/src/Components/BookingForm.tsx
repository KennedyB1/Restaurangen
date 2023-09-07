import { ChangeEvent, FormEvent } from "react";
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";
import { LightPSmall } from "./style/P";
import { Input, Textarea } from "./style/Form";
import { ButtonYellow, CancelBtn } from "./style/Buttons";
import { Form, CheckLabel } from "./style/Form";
import { H2centered } from "./style/Title";
import { Link } from "react-router-dom";

interface IBookingFormProps {
  sendBooking: (e: FormEvent) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setIsAvaible: (avaible: string) => void;
}

export default function BookingForm(props: IBookingFormProps) {
  const linkStyle = {
    color: '#F3EDC9',
  }

return (
  <BookingSection>
      <BookingWrapper>
          <H2centered>Det finns lediga bord detta datumet och tiden, <br></br>vi behöver bara några uppgifter från dig</H2centered>
          <Form onSubmit={props.sendBooking}>
              <div>
                  <Input type='text' placeholder="Förnamn" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setName(e.target.value)} required></Input>
                  <Input type='text' placeholder="Efternamn" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setLastName(e.target.value)} required></Input>
              </div>
              <div>
                  <Input type='text' placeholder="Telefonnummer" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setPhoneNumber(e.target.value)} required></Input>
                  <Input type='email' placeholder="E-post" onChange={(e : ChangeEvent<HTMLInputElement>) => props.setEmail(e.target.value)} required></Input>
              </div>
              <LightPSmall>Har du andra frågor till restaurangen?</LightPSmall>
              <Textarea></Textarea><br></br>
              <input type="checkbox" id="gdpr" name="gdpr" required/>
              <CheckLabel htmlFor="gdpr">Jag godkänner hantering av <Link style={linkStyle} to="/gdpr" target="_blank" rel="noopener noreferrer">personuppgifter</Link></CheckLabel><br></br>
              <ButtonYellow type="submit">Boka</ButtonYellow>
              <CancelBtn type="button" onClick={() => props.setIsAvaible('')}>Avbryt bokning</CancelBtn>
          </Form>   
      </BookingWrapper>
  </BookingSection>
)
}