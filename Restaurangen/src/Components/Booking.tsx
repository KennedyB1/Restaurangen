import { ChangeEvent, useEffect } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import DatePicker from "react-datepicker"
import "../calendar.css"


export const Booking = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [guests, setGuests] = useState<string>('1');
    console.log(guests)
    const passedDates = (date: Date) => new Date() <= date;

    useEffect(() => {
        console.log(date)
    }, [setDate, date]);

    return <>
        <div>
            <h2>När vill ni besöka oss?</h2>
            <DatePicker 
                showTimeSelect
                timeIntervals={180}
                filterDate={passedDates}
                minTime={new Date(0,0,0,18,0)}
                maxTime={new Date(0,0,0,21,0)}
                selected={date} 
                onChange={(date: Date) => setDate(date)}
                dateFormat="MMMM d, yyyy h:mmaa">
            </DatePicker>
        </div>
        <div>
            <h2>Hur många är ni?</h2>
            <input 
                type="number" 
                min="1" 
                max="20" 
                onChange={(e : ChangeEvent<HTMLInputElement>) => setGuests(e.target.value)}>
            </input>
        </div>
        <button>Vidare till bokning</button>
    </>
}