class Employee_service{


    getEmployees() {
        return fetch('http://localhost:8080/emp',
        {
            method:'GET',
        })
            
    }

    // getEmployee(id) {
    //     return fetch(`http://localhost:8000/api/employees/${id}`)
    //         .then(response => response.json());
    // }

  

    permanentlyDeleteEmployee(id) {
        return fetch(`http://localhost:8080/emp/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    createEmployee(employee) {
        return fetch(`http://localhost:8080/emp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            
    }

    // updateEmployee(id, employee) {
    //     return fetch(`http://localhost:8000/api/employees/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(employee),
    //     })
    //         .then(response => response.json());
    // }

    // restoreEmployee(id) {
    //     return fetch(`http://localhost:8000/api/employees/${id}/restore`, {
    //         method: 'PUT',
    //     })
    //         .then(response => response.json());
    // }

}

export default new Employee_service();