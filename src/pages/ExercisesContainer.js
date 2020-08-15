import React, {useState, useEffect} from 'react';
import Exercises from './Exercises'
import Loader from '../components/Loader';
import FatalError from './500';

const ExercisesContainer =()=>{
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(()=>{
		const fetchExercises = async () => {
			try {
				let res = await fetch('http://localhost:8000/api/exercises');
				let data = await res.json();
				setData(data);
				setLoading(false);
				
			} catch (error) {
				setLoading(false);
				setError(error)
			}
		}
		fetchExercises();
	}, [] )

	if(loading)
		return <Loader/>;
	
	if(error)
		return <FatalError/>;
		
	return <Exercises 
			name="Bernardo"
			data={data}
		/>
}

export default ExercisesContainer