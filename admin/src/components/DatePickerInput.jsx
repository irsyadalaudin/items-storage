import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerInput = ({ selectedDate, handleDateChange }) => {

    return (
        <DatePicker 
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat='dd/MM/YYYY'
            showYearDropdown
            showMonthDropdown
        />
    )
}

export default DatePickerInput