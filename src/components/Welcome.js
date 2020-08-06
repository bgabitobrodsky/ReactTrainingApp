import React from 'react';
import "./styles/Welcome.css";

const Welcome =({name})=>(
    <div className="container">
        <div className="App-user-info">
            <h1>
                Hola {name}!
            </h1>
            <p>¿Qué vas a hacer hoy?</p>
        </div>
    </div>
)

export default Welcome;