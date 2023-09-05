import { useState } from "react";
import DatePicker from "react-datepicker"
import "../calendar.css"


export default function Calendar() {
  const [date, setDate] = useState<Date>(new Date());
  const passedDates = (date: Date) => new Date() <= date;

  return(
  <>
    <DatePicker 
      showTimeSelect
      timeIntervals={180}
      filterDate={passedDates}
      minTime={new Date(0,0,0,18,0)}
      maxTime={new Date(0,0,0,21,0)}
      selected={date} 
      onChange={(date: Date) => setDate(date)}>
    </DatePicker>
  </>
  )
}