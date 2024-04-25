import React, {useState} from "react";

function ReservationsForm({availableTimes, dispatchAvailableTimes}) {
  const [formData, setFormData] = useState({
    date: '', // date needs '' to be written correctly
    time: availableTimes[0], //for the first availiable time
    guests: 1,
    occasion: "Birthday"
  });



  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === 'date'){
      //dispatchAvailableTimes({type: 'SET_AVAILABLE_TIMES', payload: availableTimes});
    }

    setFormData({
      ...formData,
      [name]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return(
   <form onSubmit={handleSubmit}>
    <label htmlFor="res-date">Choose Date</label>
    <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange}></input>
    <label htmlFor="rst-time">Choose time</label>
    <select id="res-time" name="time" value={formData.time} onChange={handleChange}>
      {availableTimes.map((timeOption, index) => (
        <option key={index}>{timeOption}</option>
      ))};
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min={1} max={10} id="guests" name="guests" value={formData.guests} onChange={handleChange}></input>
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