import React from 'react'

const Form = (props) => {
    const { 
        values, 
        onInputChange, 
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form submit' >
                <h2>Onboard Member Here</h2>
                <button disabled={disabled}>Submit</button>
            </div>

            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
            </div>

            <div className='form inputs'>
                <h3>User Info</h3>
                <label>First Name:&nbsp;
                    <input
                        type='text'
                        placeholder='type name here'
                        maxLength='30'
                        name='first_name'
                        value={values.first_name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Last Name:&nbsp;
                    <input
                        type='text'
                        placeholder='type name here'
                        maxLength='30'
                        name='last_name'
                        value={values.last_name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Email:&nbsp;
                    <input
                        type='text'
                        placeholder='type name here'
                        maxLength='30'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />  
                </label>
                <label>Password:&nbsp;
                    <input
                        type='password'
                        name='password'
                        minLength='8'
                        maxLength='20'
                        placeholder='type password here'
                        value={values.password}
                        onChange={onInputChange}
                    />
                </label>
                <label>Check to agree to the terms
                    <input
                        type='checkbox'
                        name='termsOfService'
                        checked={values.termsOfService}
                        onChange={onCheckboxChange}
                    />
                    
                </label>
            </div>
        </form>
    )
}
export default Form