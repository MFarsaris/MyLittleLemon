import React, {useState} from "react";


function ReservationsForm({availableTimes, dispatchAvailableTimes, submitForm}) {
  console.log(dispatchAvailableTimes)
  const [formData, setFormData] = useState({
    date: '',
    time: availableTimes[0], //for the first availiable time
    guests: 1,
    occasion: "Birthday"
  });



  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]:value
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map(time => <option key={time}>{time}</option>)

  return(
   <form onSubmit={handleSubmit}>
    <label htmlFor="res-date">Choose Date</label>
    <input type="date" required id="res-date" name="date" value={formData.date} onChange={handleDateChange} min={currentDate}></input>
    <label htmlFor="res-time">Choose time</label>
    <select required id="res-time" name="time" value={formData.time} onChange={handleChange}>
      {options}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" required placeholder="1" min={1} max={10} id="guests" name="guests" value={formData.guests} onChange={handleChange}></input>
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
      <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your Reservation"></input>
   </form>
  );
};
export default ReservationsForm;