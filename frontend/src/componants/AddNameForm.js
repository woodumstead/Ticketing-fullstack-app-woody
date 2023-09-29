import { useState } from "react";

const AddNameForm = ({handlerAddName}) => {
    const [AddName, setAddName] = useState("");
    const [passHolder, setPassHolder] = useState("");


    const handlerName = (event) => {
        setAddName(event.target.value);
    }

    const handlerPassHolder = (event) => {
      setPassHolder(event.target.value);
  }


    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: AddName,
            seasonPass: passHolder
        }
        handlerAddName(formData);
    }

    return (
        <div>
          <form onSubmit={handlerSubmit}>

            <input
              type='checkbox'
              id='myCheck'
              placeholder='Pass Holder'
              onChange={handlerPassHolder}
            />
            <button>Check if Pass Holder</button>
          </form>
            <input 
                type='text' 
                name='name' 
                placeholder='Add Name' 
                onChange={handlerName} 
            />
            <button>Name</button>
        </div>
      )
}

export default AddNameForm;