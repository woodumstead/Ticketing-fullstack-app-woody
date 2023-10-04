import { useState } from "react";

const AddCustomerForm = ({handlerAddCustomer}) => {
    const [AddCustomer, setAddCustomer] = useState("");
    const [passHolder, setPassHolder] = useState(false);


    const handlerCustomer = (event) => {
        setAddCustomer(event.target.value);
    }

    const handlerPassHolder = (event) => {
      setPassHolder(!passHolder);
  }


    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = {
            customer: AddCustomer,
            seasonPass: passHolder
        }
        handlerAddCustomer(formData);
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
          
            <input 
                type='text' 
                customer='customer' 
                placeholder='Add Customer' 
                onChange={handlerCustomer} 
            />
            <button>Customer</button>
            </form>
        </div>
      )
}

export default AddCustomerForm;