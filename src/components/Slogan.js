import React from 'react'

export default function Slogan(props) {

    return(
        <div className='slogan'>
           {props.formStage === 'log-in' ?
            'Accedi per visualizzare un fantastico contenuto'
           : 'Registrati per visualizzare un fantastico contenuto' }
        </div>
    );
}