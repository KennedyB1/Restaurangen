import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker"
import "../calendar.css"
import 'react-datepicker/dist/react-datepicker.css'
import { createBooking, getBookings } from "../services/restaurantServices";
import { restaurantIdContext } from "../contexts/restaurantIdContext";
import { checkAviability } from "../functions/checkAviability";
import { IBooking, IFetchedBooking } from "../interfaces/interfaces";
import burger from '/public/burger.svg'
import { ButtonYellow, ButtonGreen } from "./style/Buttons";
import { BookingSection } from "./style/BookingStyle";
import { LightP } from "./style/P";
import { BookingWrapper } from "./style/Wrappers";
import { H2 } from "./style/Title";
import { Input, Select, Textarea } from "./style/Form";

export const Booking = () => {
    const restaurantId = useContext(restaurantIdContext);
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<string>('18:00');
    const [guests, setGuests] = useState<string>('1');
    const [bookings, setBookings] = useState<IFetchedBooking[]>([]);
    const [isAvaible, setIsAvailable] = useState<boolean | string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [view, setView] = useState<number>(1);
    const passedDates = (date: Date) => new Date() <= date;

    useEffect(() => {
        async function fetchBookings() {
            const bookings = await getBookings(restaurantId);
            setBookings(bookings);
        }
        fetchBookings();
    },[restaurantId]);

    const clickFunction = (e: FormEvent) => {
        e.preventDefault();
        setIsAvailable(checkAviability(time, date, guests, bookings));
        if(isAvaible === true) {
            setView(2);
        }
    }

    const sendBooking = (e: FormEvent) => {
        e.preventDefault();
        const booking: IBooking = {
            'restaurantId': restaurantId,
            'date': date.toISOString().slice(0, 10),
            'time': time,
            'numberOfGuests': parseInt(guests),
                'customer': {
                'name': name,
                'lastname': lastName,
                'email': email,
                'phone': phoneNumber
             }
        }
        createBooking(booking);
        setView(3);
    }

    const notAvaible = (
    <LightP>
        Tyvärr har vi inte tillräckligt många lediga bord 
        detta datumet och tiden, testa en annan dag eller annan tid
    </LightP>)

    const BookingForm = (
    <div>
        <LightP>Det finns lediga bord detta datumet och tiden, vi behöver bara några uppgifter från dig</LightP>
        <form onSubmit={sendBooking}>
            <div>
                <Input type='text' placeholder="Förnamn" onChange={(e : ChangeEvent<HTMLInputElement>) => setName(e.target.value)} required></Input>
                <Input type='text' placeholder="Efternamn" onChange={(e : ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} required></Input>
            </div>
            <div>
                <Input type='text' placeholder="Telefonnummer" onChange={(e : ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} required></Input>
                <Input type='email' placeholder="E-post" onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required></Input>
            </div>
            <LightP>Har du andra frågor till restaurangen?</LightP>
            <Textarea></Textarea>
            <ButtonYellow type="submit">Boka</ButtonYellow>
        </form>   
    </div>)

    if(view === 1) {
    return (
        <BookingSection>
            <BookingWrapper>
                <form onSubmit={clickFunction}>
                    <div>
                        <H2>När vill ni besöka oss?</H2>
                        <div>
                            <DatePicker 
                                filterDate={passedDates}
                                selected={date} 
                                onChange={(date: Date) => setDate(date)}
                                dateFormat="yyyy-MM-dd"
                                required>
                            </DatePicker>
                            <Select onChange={(e : ChangeEvent<HTMLSelectElement>) => setTime(e.target.value)} required>
                                <option value="18:00">18:00</option>
                                <option value="21:00">21:00</option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <H2>Hur många är ni?</H2>
                        <Input 
                            type="number" 
                            min="1" 
                            max="24" 
                            onChange={(e : ChangeEvent<HTMLInputElement>) => setGuests(e.target.value)}
                            required>
                        </Input>
                    </div>
                    <ButtonYellow type='submit'>Kontrollera tillgänglighet</ButtonYellow>
                </form>
                {isAvaible === false ? notAvaible : isAvaible === '' ? '' : ''}
            </BookingWrapper>
        </BookingSection>)
    } else if(view === 2) {
        return (
            <BookingSection>
                <BookingWrapper>
                    {BookingForm}
                </BookingWrapper>
            </BookingSection>
        )
    } else if(view === 3) {
        return (
            <>
                <h3>Tack för din bokning {name}, vi ses den {date.toISOString().slice(0, 10)} kl {time}</h3>
                <Link to='/meny'><ButtonGreen>Ta en titt på vår meny</ButtonGreen> </Link>
                <img src={burger} alt="a burger" width='100'/>
            </>
        )
    }
}
