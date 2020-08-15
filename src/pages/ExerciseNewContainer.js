import React from 'react';
import FatalError from './500';
import Loader from '../components/Loader';
import ExerciseNew from './ExerciseNew';

export default class ExercisesNewContainer extends React.Component{

    state = {
        form: {
            title : '',
            description : '',
            img : '',
            bg : ''
        },
        loading: false,
        error: null
    }

    handleSubmit = async (event)=> {
        event.preventDefault();
        this.setState({
            loading : true
        })
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
            this.setState({
                loading : false
            })
            this.props.history.push('/exercises')
        } catch (error) {
            this.setState({
                loading : false,
                error
            })
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
        if(this.state.loading)
			return <Loader/>;
        if(this.state.error)
			return <FatalError/>;
        return <ExerciseNew
            form = {this.state.form}
            onChange = {this.handleChange}
            onSubmit = {this.handleSubmit}
        />
    }
}