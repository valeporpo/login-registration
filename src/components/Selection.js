import React from 'react'

export default function Selection(props) {

    function handleClick(currentState) {
        let newState
        newState = currentState === 'sign-in' ? 'log-in' : 'sign-in'
        props.changeForm(newState)
    }

    return(
        <div className='selection'>
            <a onClick={() => handleClick(props.formStage)}>
                {props.formStage === 'log-in' ?
                'sign-in'
                : 'log-in'}
            </a>
            
        </div>
    );
}