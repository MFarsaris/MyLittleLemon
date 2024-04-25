import {render, screen} from "@testing-library/react";
import Reservations from "./components/Reservations";
import {initializeTimes, updateTimes } from "./components/Reservations";

test("Renders the ReservationsForm heading", () =>{
    render(<Reservations />);
    const headingElement = screen.getByText("Reserve Your Table");
    expect(headingElement).toBeInTheDocument();
});

