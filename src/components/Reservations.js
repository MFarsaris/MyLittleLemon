import "./App.css"
import ReservationsForm from "./ReservationsForm";
import React,{ useReducer} from "react";


export default function Book() {
  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'SET_AVAILABLE_TIMES':
        return action.payload;
      default:
        return state;
    }
  };
  const initializeTimes = () => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
  };

  const updateTimes = (selectedDate) => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ]
  }



  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    null,
    initializeTimes
  );


  return(
   <>
    <h1 style={{textAlign: "center"}}>Reserve Your Table</h1>
   <ReservationsForm
   availableTimes={availableTimes}
   dispatchAvailableTimes={dispatchAvailableTimes}
   updateTimes={updateTimes}/>
   </>
  )

};
