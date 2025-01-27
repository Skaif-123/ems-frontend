import React, {useState} from 'react'

export const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleLastName(e){
        setLastName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveEmployee(e){
        e.preventDefault();

        const employee={firstName,lastName,email}
        console.log(employee)
    }

    return (
        <div className='container'>
            <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input type="text"
                                       name="firstName"
                                       id="firstName"
                                       placeholder='Enter  your first name'
                                       value={firstName}
                                       className='form-control'
                                       onChange={handleFirstName}
                                />

                                <label className='form-label'>Last Name</label>
                                <input type="text"
                                       name="lastName"
                                       id="lastName"
                                       placeholder='Enter  your Last name'
                                       value={lastName}
                                       className='form-control'
                                       onChange={handleLastName}
                                />

                                <label className='form-label'>Email</label>
                                <input type="text"
                                       name="email"
                                       id="email"
                                       placeholder='Enter  your Email ID'
                                       value={email}
                                       className='form-control'
                                       onChange={handleEmail}
                                />

                            </div>
                            <button className="btn btn-success" onClick={saveEmployee}>saveEmployee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent