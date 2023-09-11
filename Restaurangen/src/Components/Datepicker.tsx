import DatePicker from "react-datepicker";

interface IDatepickerProps {
    setDate: (date: Date) => void;
    date: Date | undefined;
}

export default function Datepicker (props: IDatepickerProps) {
  const passedDates = (date: Date) => new Date() < date;
  return (
    <DatePicker 
    //filterDate={passedDates}
    selected={props.date} 
    placeholderText="Välj datum"
    onChange={(date: Date) => props.setDate(date)}
    dateFormat="yyyy-MM-dd"
    required>
  </DatePicker>
  )

}