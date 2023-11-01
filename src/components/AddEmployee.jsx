import React, { useState } from 'react';
import Employee_service from '../services/Employee_service';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    salary: '',
    address: '',
  });
    const[success,setsuccess]=useState('')
    const[error,seterror]=useState('')
  const navigate=   useNavigate()

  const handleInputChange = (e) => {
    
    setNewEmployee({...newEmployee ,[e.target.name]: e.target.value });
    console.log(e.target.name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Employee_service.createEmployee(newEmployee).then((res)=>{
      res.json().then((data)=>{
        if(data.message==="Employee saved successfully"){
          setsuccess(data.message)
          seterror('')
          setNewEmployee({name:'',salary:'',address:''})
          navigate('/')
        }
        else{
          seterror('Failed to add employee please try again ')
          setsuccess('')
        }
      }).catch((err)=>{
        console.log(JSON.stringify(err))
        seterror('Failed to add employee please try again ')
        setsuccess('')
      }

      )

    })
   
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add Employee</h2>
      {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded relative">{success}</div>}
      {error&& <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block font-bold mb-2">Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={newEmployee.salary}
            onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-bold mb-2">address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newEmployee.address}
            onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
