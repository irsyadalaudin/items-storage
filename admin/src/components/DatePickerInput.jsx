// import { useState } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// const DatePickerInput = ({ selectedDate, handleDateChange }) => {
//     return (
//         <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             dateFormat='dd/mm/yyyy'
//             placeholder='DD/MM/YYY'
//         />
//     )
// }

const DatePickerInput = () => {
    const [startDate, setStartDate] =useState(new Date())

    return (
        <DatePicker 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat='dd/MM/yyyy'
            filterDate={date => date.getDate() != 5}
            showYearDropdown
            showMonthDropdown
        />
    )
}

export default DatePickerInput