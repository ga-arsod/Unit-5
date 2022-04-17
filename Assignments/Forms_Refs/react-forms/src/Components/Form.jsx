import { useState } from "react";

export const Form = () => {
    const [formState, setFormState] = useState({});

    const handleChange = (elem) => {
        const {id, value} = elem.target;

        setFormState({
            ...formState,
            [id]: value
        })
    }

    const handleSubmit = (elem) => {
        elem.preventDefault();

        fetch("http://localhost:5000/users", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formState)
        })
    }

    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" placeholder="Enter Your Name" id="name" required />
                <input onChange={handleChange} placeholder="Enter Your Age" type="number" id = "age" required/>
                <input onChange={handleChange} placeholder="Enter Your Adress" type="text" id="address" required/>
                <select onChange={handleChange} id="department" required>
                    <option value="">Select Department</option>
                    <option value="Human Resource">Human Resource</option>
                    <option value="Product Development">Product Development</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <input onChange={handleChange} placeholder="Enter Your Salary" type="text" id="salary" required/>

                <p id="stat">Marital Status</p>
                
                <div className="marital">
                    <p>Single: </p>
                    <input onChange={handleChange} className="check" type="checkbox" id="single"/>
                </div>

                <div className="marital">
                    <p>Married: </p>
                    <input onChange={handleChange} className="check" type="checkbox" id="married"/>
                </div>

                <input type="submit" />
            </form>
        </div>
    ) 
}