import { getByTestId, render, screen, fireEvent, getByText,waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Booking from '..//Components/Booking'


jest.mock('axios');
jest.mock('react-router-dom');


describe("Testing the Booking Details",()=>
{
    test('Testing the booking title',()=>
    {
         render(<Booking/>);
         const bookingheader = screen.getByTestId("bookinghead");
         expect(bookingheader).toBeInTheDocument();
    });

    test('Testing the Booking Navbar',()=>
    {
        render(<Booking/>);
        const bookingnavcontent =screen.getByTestId("navheader");
        expect(bookingnavcontent).toBeInTheDocument();
        expect(bookingnavcontent).toHaveTextContent("Pet Shop Mangement")
    }
    );

    
});




