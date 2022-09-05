import React from 'react'
import PropTypes from 'prop-types';

export default function FormLogIn() {

    const [formValues, setFormValues] = React.useState({
        'userNameOrEmail' : '',
        'password' : ''
    })

    function handleInputValue(event) {
       let newData = {}
       newData[event.target.name] = event.target.value
       setFormValues(
        (previousData) => {
            return {
                ...previousData, ...newData
            }
        })
    }

    return(
        <form>
            <div>
                <label htmlFor="userNameOrEmail">Username or Email</label>
                <input type="text"
                    name="userNameOrEmail"
                    value={formValues.userNameOrEmail}
                    id="userNameOrEmail"
                    onChange={handleInputValue}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    value={formValues.password}
                    id="password"
                    onChange={handleInputValue}
                />
            </div>    
        </form>
    );
    
}

FormLogIn.propTypes = {
    setToken: PropTypes.func.isRequired
}