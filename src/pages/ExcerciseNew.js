import React from 'react';
import ExercisesForm from '../components/ExercisesForm';
import Card from '../components/Card';

export default class ExcercisesNew extends React.Component{

    state = {
        form: {
            title : '',
            description : '',
            img : '',
            bg : ''
        }
    }

    handleSubmit = async (event)=> {
        event.preventDefault();
        try {
            let config = {
                method : 'POST',
                headers : {
                    'Accept' :'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises', config);
            let json = await res.json();
            console.log(json);

        } catch (error) {
            
        }
    }

    handleChange =(event)=> {
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]:event.target.value
            }
        });
    }  

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card
                        {...this.state.form}
                    />
                </div>
                <div className="col-sm">
                    <ExercisesForm 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}