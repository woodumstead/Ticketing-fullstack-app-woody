const CustomerDisplay = ({list}) => {
    return (
        <div>
            <h2>Name of Season Pass Holder</h2>
            <ul>
            {list && 
                list.map((customer) => (
                    <li key={customer.id}>{customer.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default CustomerDisplay;