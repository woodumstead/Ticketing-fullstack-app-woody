import { useState } from "react";

const AddTicketsForm = ({handlerAddTicket}) => {

    const [ticketMatch, setTicketMatch] = useState("");
    const [ticketDate, setTicketDate] = useState("");
    const [ticketSeat, setTicketSeat] = useState("");
    const [ticketCategory, setTicketCategory] = useState("");



    const handlerMatch = (event) => {
        setTicketMatch(event.target.value);
    }

    const handlerDescription = (event) => {
        setTicketDate(event.target.value);
    }

    const handlerSeat = (event) => {
        setTicketSeat(event.target.value);
    }

    const handlerCategoryId = (event) => {
        setTicketCategory(event.target.value);
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = {

            match: ticketMatch,
            date: ticketDate,
            seat: ticketSeat,
            customer_id: ticketCategory
        }
        handlerAddTicket(formData);
    }

    return (
        <div>
          <form onSubmit={handlerSubmit}>

            <input 
                type='text' 
                name='match' 
                placeholder='Match' 
                onChange={handlerMatch} 
            />
            <input 
                type='date' 
                name='date' 
                placeholder='Date' 
                onChange={handlerDescription} 
            />
            <input
                type='integer'
                name='seat'
                placeholder='Seat'
                onChange={handlerSeat}
            />
            <input
                placeholder='customer ID'
                onChange={handlerCategoryId}
            />
            <button>Add</button>
          </form>
        </div>
      )
}

export default AddTicketsForm;