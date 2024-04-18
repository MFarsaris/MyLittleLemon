import React, {useState} from "react";

function ReservationsForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");


  const [availiableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === "date"){
      setDate(value);
    } else if (name === "time"){
      setTime(value);
    } else if (name === "guests"){
      setGuests(parseInt(value));
    } else if (name === "occasion"){
      setOccasion(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({date, time, guests, occasion});
  };

  return(
   <form style={{display:"grid", width:"500px", gap:"20px"}} onSubmit={handleSubmit}>
    <label htmlfor="res-date">Choose Date</label>
    <input type="date" id="res-date" name="date" value={date} onChange={handleChange}></input>
    <label htmlfor="rst-time">Choose time</label>
    <select id="res-time" name="time" value={time} onChange={handleChange}>
      {availiableTimes.map((timeOption, index) => (
        <option key={index}>{timeOption}</option>
      ))};
    </select>
    <label htmlfor="guests">Number of guests</label>
    <input type="number" placeholder="1" min={1} max={10} id="guests" name="guests" value={guests} onChange={handleChange}></input>
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" name="occasion" value={occasion} onChange={handleChange}>
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your Reservation"></input>
   </form>
  );
};
export default ReservationsForm;