import React from 'react'

export default function FormSignIn() {

    const [formValues, setFormValues] = React.useState({
        'userName' : '',
        'email' : '',
        'password' : '',
        'passwordConfirm' : ''
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
                <label htmlFor="userName">Username</label>
                <input type="text"
                    name="userName"
                    value={formValues.userName}
                    id="userName"
                    onChange={handleInputValue}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text"
                    name="email"
                    value={formValues.email}
                    id="email"
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
            <div>
                <label htmlFor="passwordConfirm">Please, confirm password</label>
                <input type="password"
                    name="passwordConfirm"
                    value={formValues.passwordConfirm}
                    id="passwordConfirm"
                    onChange={handleInputValue}
                /> 
            </div> 
        </form>
    );
}