// EditEmployeeForm.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditEmployeeForm = ({ employee, onUpdate }) => {
  const [editedEmployee, setEditedEmployee] = useState(employee);
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedEmployee);
    history.push('/dashboard'); // Dusre component par redirect kare
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedEmployee.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          value={editedEmployee.salary}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={editedEmployee.address}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployeeForm;
