import ReservationsForm from "./ReservationsForm";
import React, {useReducer, useState} from "react";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom"



export default function Book() {

  const [date, setDate] = useState(new Date())

  function initializeTimes(date){
    return fetchAPI(date)
  };

  function updateTimes(date){
    //const dateObj = new Date(date)
    return fetchAPI(date)
  };

  const navigate = useNavigate();

  function submitForm(formData){
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/Confirmed");
    }
  }

  const availableTimesReducer = (state, action) => {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate)
        break;

      default:
        throw new Error()
    }
    return newState;
  };

  const [availableTimes, dispatchAvailableTimes] = useReducer(availableTimesReducer, initializeTimes(date));

  return(
   <>
    <h1 style={{textAlign: "center"}}>Reserve Your Table</h1>
   <ReservationsForm
   availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm} />
   </>
  )

};
