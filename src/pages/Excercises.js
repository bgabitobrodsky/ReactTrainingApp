import React from 'react';
import ExcercisesList from '../components/ExcercisesList';
import Welcome from '../components/Welcome';
import ButtonNew from '../components/ButtonNew';
import Loader from '../components/Loader';
import FatalError from './500';

export default class Excercises extends React.Component{
	// Babel me crea el constructor(props)
	state = {
		data : [],
		loading : true,
		error : null
	}

	async componentDidMount(){
		await this.fetchExercises();
	}

	async fetchExercises(){
		try {
			let res = await fetch('http://localhost:8000/api/exercises');
			let data = await res.json();
			this.setState({
				data,
				loading : false
			})
			
		} catch (error) {
			this.setState({
				loading : false,
				error
			})
		}
	}

	render() {
		if(this.state.loading)
			return <Loader/>;
		
		if(this.state.error)
			return <FatalError/>;
			
		return(
			<div>
				<Welcome
					name="Bernardo"
				/>
				<ExcercisesList
					data={this.state.data}
				/>
				<ButtonNew />
			</div>
		)
	}
}