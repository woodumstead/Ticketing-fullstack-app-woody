const TicketDisplay = ({list}) => {
    return (
        <div>
            <h2>Purchase Tickets</h2>
            <ul>
            {list && 
                list.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.name}
                        {ticket.match}
                        {ticket.date}
                        {ticket.seat} </li>
                ))
            }
            </ul>
        </div>
    )
}

export default TicketDisplay;