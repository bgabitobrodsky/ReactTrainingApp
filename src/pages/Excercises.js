import React from 'react';
import ExcercisesList from '../components/ExcercisesList';
import Welcome from '../components/Welcome';
import ButtonNew from '../components/ButtonNew';

export default class Excercises extends React.Component{
	// Babel me crea el constructor(props)
	state = {
		data : [{
			id : 1,
			title : "Abdominales",
			description : "Ejercita los musculos de tu panza",
			img : "https://image.flaticon.com/icons/svg/1028/1028337.svg",
			bg : "https://miro.medium.com/max/1501/1*dP81IJq-tGFxy1rIK3RYsg.png"
		},
		{
			id : 2,
			title : "Biceps",
			description : "Trabajemos esos brazos escualidos",
			img : "https://image.flaticon.com/icons/svg/2936/2936880.svg",
			bg : "https://static.vecteezy.com/system/resources/previews/000/693/323/non_2x/abstract-gradient-pink-purple-stripes-on-purple-background-vector.jpg"
		},
		{
			id : 3,
			title : "Piernas",
			description : "Trabajemos esas piernas de tero que tenes salame",
			img : "https://image.flaticon.com/icons/svg/3159/3159083.svg",
			bg : "https://images.vexels.com/media/users/3/166931/preview2/3591dd11d2111368da21e0249824aa9f-fondo-degradado-abstracto-diseno.jpg"
		}]
	}

	render() {
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