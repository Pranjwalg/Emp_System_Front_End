import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Employee_service from '../services/Employee_service';
const EmployeeList = () => {
  const [employees, setEmployees] = useState([

    // Add more employees as needed
  ]);
  const[Delete,setdelete]=useState(false);
 
  useEffect(() => {
    Employee_service.getEmployees().then((res) => res.json()).then(data => {
      console.log(data)
      setEmployees(data)
    })
  }, [Delete])
  const nav = useNavigate()

  const [selectedEmployee, setSelectedEmployee] = useState(null);
 
  const handleDelete = (id) => {
   employees.find((employee) =>{
      if(employee.id===id){
        setSelectedEmployee(employee)
        setdelete(false)
       
      }
   });

    
    
  };

  const handleConfirmDelete = () => {
   Employee_service. permanentlyDeleteEmployee(selectedEmployee.id).then((res) => res.json()).then(data => {  
    
    
    }  );
    // You can implement actual delete operation here
    // For now, let's just log the action
    setSelectedEmployee(null)
   nav('/dashboard')
   setdelete(true)
    console.log(`Employee ID ${selectedEmployee.id} has been deleted.`);
    };

  

  const handleAddEmployee = () => {
 setdelete(false)
    nav('/add')
    console.log('Add Employee clicked');
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Employee List</h1>


      <button
        onClick={handleAddEmployee}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Employee
      </button>



      {selectedEmployee && (
        <div className="bg-white fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-8 max-w-md rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">{`Are you sure you want to delete ${selectedEmployee.name}?`}</p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded mr-4"
              >
                Confirm
              </button>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Salary</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? <tr><td colSpan="4" className="text-center">No Employees</td></tr> :
              <>
                {employees?.map((employee) => (
                  <tr key={employee.id}>
                    <td className="border p-2">{employee.name}</td>
                    <td className="border p-2">{employee.salary}</td>
                    <td className="border p-2">{employee.address}</td>
                    <td className="border p-2">
                      <button onClick={() => handleDelete(employee.id)} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                        Delete
                      </button>
                     
                    </td>
                  </tr>
                ))}
              </>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
