import React from 'react';
import "./styles/Card.css";

export default class Card extends React.Component{
    render(){
        const {bg,title,description,img} = this.props
        return(
            <div className="container card my-2 mx-auto"
                style={{
                        backgroundImage:`url(${bg || 'https://miro.medium.com/max/1501/1*dP81IJq-tGFxy1rIK3RYsg.png'})`
                }}
            >
                <div className="card-body">
                    <div className="row">
                        <div className="col-6 text-center">
                            <img src={img || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt=""/>
                        </div>
                        <div className="col-6 text-white text-center">
                            <h3>{title || " "}</h3>
                            <p>{description || " "}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}