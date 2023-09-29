import { useState, useEffect } from 'react';
import AddNameForm from './componants/AddNameForm';
import AddTicketsForm from './componants/AddTicketsForm';
import NameDisplay from './componants/NameDisplay';
import TicketDisplay from './componants/TicketsDisplay';
import './App.css';
import apiConn from './api/conn';

function App() {
  const [name, setName] = useState([
    {
      name: 'text'
    }
  ]);
  const [tickets, setTickets] = useState([
    {
      name: 'text',
      match: 'text',
      date: 'date',
      seat: 'number',
      categoryId: 'number'
    }
  ]);

  const getName = async () => {
    try {
      //http://localhost:3001/name
      const response = await apiConn.get("/name");
      console.log(response.data);
      setName(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const getTickets = async () => {
    try {
      const response = await apiConn.get("/tickets");
      console.log(response.data);
      setTickets(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const createName = async (formData) => {
    try {
      const response = await apiConn.post("/name", {name: formData.name});
      console.log(response.data);
      getName();
    } catch (error) {
      console.log(error.message);
    }
  }

  const createTicket = async (ticketData) => {
    console.log(ticketData)
    try {
      const response = await apiConn.post("/tickets", ticketData);
      console.log(response.data);
      getTickets();
    } catch (error) {
      console.log(error.message);
    }
  }
    
  useEffect(() => {
    getName();
    getTickets();
  }, []);


  return (
    <div className="App">
      <h1>Ticket Purchasing</h1>
      <NameDisplay list={name} />
      <AddNameForm handlerAddName={createName} />
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
