import React from 'react';
import {Link} from 'react-router-dom';


export default function ButtonNew(){
    return(
        <div className="text-center">
                    <Link to="/excercises/new" className="btn btn-warning">+</Link>
        </div>
    );
}