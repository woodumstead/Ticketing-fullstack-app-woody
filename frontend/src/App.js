import { useState, useEffect } from 'react';
import AddCustomerForm from './componants/AddCustomerForm';
import AddTicketsForm from './componants/AddTicketsForm';
import CustomerDisplay from './componants/CustomerDisplay';
import TicketDisplay from './componants/TicketsDisplay';
import './App.css';
import apiConn from './api/conn';

function App() {
  const [customer, setCustomer] = useState([
    {
      customer: 'text'
    }
  ]);
  const [tickets, setTickets] = useState([
    {
      match: 'text',
      date: 'date',
      seat: 'number',
      categoryId: 'number'
    }
  ]);

  const getCustomer = async () => {
    try {
      //http://localhost:3001/customer
      const response = await apiConn.get("/customer");
      console.log(response.data);
      setCustomer(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getTickets = async () => {
    try {
      const response = await apiConn.get("/ticketing");
      console.log(response.data);
      setTickets(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const createCustomer = async (formData) => {
    try {
      const response = await apiConn.post("/customer", {name: formData.customer, season_pass_holder: formData.seasonPass});
      console.log(response.data);
      getCustomer();
    } catch (error) {
      console.log(error.message);
    }
  }

  const createTicket = async (ticketData) => {
    console.log(ticketData)
    try {
      const response = await apiConn.post("/ticketing", ticketData);
      console.log(response.data);
      getTickets();
    } catch (error) {
      console.log(error.message);
    }
  }
    
  useEffect(() => {
    getCustomer();
    getTickets();
  }, []);


  return (
    <div classCustomer="App">
      <h1>Ticket Purchasing</h1>
      <CustomerDisplay list={customer} />
      <AddCustomerForm handlerAddCustomer={createCustomer} />
      <p>
        Not a Season Pass Holder?
        Purchase Tickets Below.
      </p>
      <TicketDisplay list={tickets} />
      <AddTicketsForm handlerAddTicket={createTicket} />
    </div>
  );
}

export default App;
