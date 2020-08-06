import React from 'react';
import "./styles/Welcome.css";

export default function Welcome(props){
    return(
        <div className="container">
            <div className="App-user-info">
                <h1>
                    Hola {props.name}!
                </h1>
                <p>¿Qué vas a hacer hoy?</p>
            </div>
        </div>
    )
}