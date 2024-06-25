import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickerInput = ({ className, selectedDate, handleDateChange }) => {

    return (
        <DatePicker
            className={className}
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat='dd/MM/yyyy'
            showYearDropdown
            showMonthDropdown
        />
    )
}

export default DatePickerInput