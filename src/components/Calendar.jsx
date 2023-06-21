import propTypes from "prop-types";
import { useEffect, useState } from "react";
import "./style.css";
export const Calendar = ({ date, setDate }) => {
  const [dateInCalendar, setDateInCalendar] = useState("");
  useEffect(() => {
    setDateInCalendar(date);
  }, [date]);
  return (
    <input
      type="date"
      value={dateInCalendar}
      onChange={(e) => {
        setDate(e.target.value);
      }}
    ></input>
  );
};

Calendar.propTypes = {
  date: propTypes.string.isRequired,
  setDate: propTypes.func.isRequired,
};
