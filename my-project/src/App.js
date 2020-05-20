import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'

import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

const initialFormValues = {
  username:'',
  email: '',
  password: '',
  
  //checkbox
  termsOfService: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  termsOfService: '',
}

//const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({ 
      ...formValues, 
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const {name} = evt.target
    const {checked} = evt.target

    setFormValues({...formValues, [name]:checked})
    
  }

  const onSubmit = evt => {
    evt.preventDefault()

    if (
      !formValues.username.trim() ||
      !formValues.email.trim() ||
      !formValues.password.trim() 
    ){
      return
    }
    const newUser = { ...formValues}
    setUsers([newUser, ...users])
    setFormValues(initialFormValues)
    
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
     <Form 
      values={formValues} 
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      disabled={disabled}
      errors={formErrors}
      onCheckboxChange={onCheckboxChange}
       />
    </div>
  );
}

export default App;

