import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteEmployee, listEmployees} from "../services/EmployeeService";
import error from "eslint-plugin-react/lib/util/error.js";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="container">
            <h1 className="text-center">
                Employee List
            </h1>
            <button type="button" className="btn btn-primary mb-3" onClick={addNewEmployee}>
                Add Employee
            </button>
            <br/>
            <table className="table table-bordered border border-3 border-secondary">
                <thead className='border border-3 border-secondary'>
                <tr >
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th className='text-center'>Actions:Update</th>
                    <th className='text-center'>Actions:Delete</th>
                </tr>
                </thead>
                <tbody className='border border-3 border-secondary'>
                {employees.map((employee) => (
                    <tr className='border border-3 border-secondary' key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td className='text-center'>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                        </td>
                        <td className='text-center'>
                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
