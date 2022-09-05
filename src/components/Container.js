/*
 Contiene una frase di presentazione (<Slogan />),
          uno dei due form di login (<FormLogIn />) o di registrazione (<FormSignIn />)
          il selettore del form (<Selection />)
*/

import React from 'react'
import Slogan from './Slogan'
import FormLogIn from './FormLogIn'
import FormSignIn from './FormSignIn'
import Selection from './Selection'

export default function Container() {

    const [token, setToken] = React.useState()
    const [formStage, setFormStage] = React.useState('log-in')

    if(!token) {
        return(
            <div className='container'>
                <Slogan formStage={formStage}
                />
                <div className='form'>
                    {formStage === 'log-in' ?
                    <FormLogIn setToken={setToken} 
                    /> :
                    <FormSignIn />}
                </div>
                <Selection formStage={formStage}
                           changeForm={setFormStage}
                />
            </div>
        );
    }
    
}