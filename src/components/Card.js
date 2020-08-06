import React from 'react';
import "./styles/Card.css";

export default class Card extends React.Component{
    
    

    render(){
        const {title,description,img,bg,imgAlign} = this.props;

        return(
            <div className="container card my-2 mx-auto"
                style={{backgroundImage:`url(${bg})`}}
            >
                <div className="card-body">
                    <div className="row">
                        <div className="col-6 text-center">
                            <img src={img} alt=""/>
                        </div>
                        <div className="col-6 text-white text-center">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}