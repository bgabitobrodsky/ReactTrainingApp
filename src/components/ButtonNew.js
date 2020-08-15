import React from 'react';
import {Link} from 'react-router-dom';

const ButtonNew =()=> (
        <div className="text-center">
                    <Link to="/exercises/new" className="btn btn-warning">+</Link>
        </div>
)

export default ButtonNew