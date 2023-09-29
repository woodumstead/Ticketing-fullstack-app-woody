const NameDisplay = ({list}) => {
    return (
        <div>
            <h2>Name of Season Pass Holder</h2>
            <ul>
            {list && 
                list.map((name) => (
                    <li key={name.id}>{name.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default NameDisplay;