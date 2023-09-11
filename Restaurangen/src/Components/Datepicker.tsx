import DatePicker, { registerLocale } from "react-datepicker";
import sv from 'date-fns/locale/sv';
registerLocale('sv', sv)

interface IDatepickerProps {
    setDate: (date: Date) => void;
    date: Date | undefined;
}

export default function Datepicker (props: IDatepickerProps) {
  const passedDates = (date: Date) => new Date() < date;
  return (
    <DatePicker 
    //filterDate={passedDates}
    locale='sv'
    selected={props.date} 
    placeholderText="Välj datum"
    onChange={(date: Date) => 
      {
        console.log(date);
        props.setDate(date)
      }}
    dateFormat="yyyy-MM-dd"
    required>
  </DatePicker>
  )

}