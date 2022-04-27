import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import { getPersianDate } from "../Viwes/Components/utils/persianDate";
const DatePickerInput = ({ model, id, description }) => {
 
    const handleChange = (value) => {
        model[id]=getPersianDate(value);
    }


  return (
    <>
      <label htmlFor={id}>
        <b>{description}:</b>
      </label>
      <DatePicker
        className="form-control"
        timePicker={false}
        isGregorian={false}
        id={id}
        onChange={handleChange}
        type="text"
        value={moment(model[id]+"00:00","jYYYY/jM/jD HH:mm")}
      />
    </>
  );
};

export default DatePickerInput;
