import React, {useEffect, useState} from 'react'
import {createEmployee, getEmployee, updateEmployee} from "../services/EmployeeService.js";
import {useNavigate, useParams} from "react-router-dom";

export const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const navigator = useNavigate();
    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })
    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id]);

    const handleFirstName = (e) => setFirstName(e.target.value);


    const handleLastName = (e) => setLastName(e.target.value);


    const handleEmail = (e) => setEmail(e.target.value);


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        if (validateForm()) {


            const employee = {firstName, lastName, email}
            console.log(employee)

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator("/employees")
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator("/employees")
                }).catch(error => {
                    console.error(error);
                })
            }
        }

    }


    function validateForm() {
        let valid = true;
        const errorsCopy = {...errors}

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First Name Is Required'
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last Name Is Required'
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email ID Is Required'
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div className='container'>
            <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input type="text"
                                       name="firstName"
                                       id="firstName"
                                       placeholder='Enter  your first name'
                                       value={firstName}
                                       className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                       onChange={handleFirstName}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                <label className='form-label'>Last Name</label>
                                <input type="text"
                                       name="lastName"
                                       id="lastName"
                                       placeholder='Enter  your Last name'
                                       value={lastName}
                                       className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                       onChange={handleLastName}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                <label className='form-label'>Email</label>
                                <input type="text"
                                       name="email"
                                       id="email"
                                       placeholder='Enter  your Email ID'
                                       value={email}
                                       className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                       onChange={handleEmail}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className="btn btn-success" onClick={saveOrUpdateEmployee}>saveEmployee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent