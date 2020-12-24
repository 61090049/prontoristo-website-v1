<<<<<<< HEAD
import React, { useState } from "react";
import {BookingContainer, BookingButton} from './BookingElements';
import DatePicker from 'react-date-picker';

const Booking = () => {
    const [value, onChange] = useState(new Date());
    return (
        <BookingContainer>
            <h1>Booking Detail</h1>
            <p>Adult: </p>
            <p>Child: </p>
            <p>Date: </p>
            <DatePicker
                onChange={onChange}
                value={value}
            />
            <p>Time</p>
            <BookingButton>Confirm Booking</BookingButton>
        </BookingContainer>
  );
};


export default Booking;

 
=======
import React from "react";
import {BookingContainer} from './BookingElements'

const Booking = () => {
  return (
    <BookingContainer>
      <h1>Booking Detail</h1>
    </BookingContainer>
  );
};

export default Booking;
>>>>>>> 69545764686b55dd3ba837915565c92d833e74af
