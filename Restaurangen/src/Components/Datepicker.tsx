import DatePicker, { registerLocale } from "react-datepicker";
import sv from 'date-fns/locale/sv';
registerLocale('sv', sv)

interface IDatepickerProps {
    setDate: (date: Date) => void;
    date: Date;
}

export default function Datepicker (props: IDatepickerProps) {
    // const isDateDisabled = (date: Date) => {
    //   return date > new Date();
    // };

    return (
      <DatePicker
        locale='sv'
        selected={props.date}
        onChange={(date: Date) => {
          props.setDate(date);
        }}
        dateFormat="yyyy-MM-dd"
        required
        //filterDate={isDateDisabled}
      />
    );
  }