import React from 'react';
import ExercisesList from '../components/ExercisesList';
import Welcome from '../components/Welcome';
import ButtonNew from '../components/ButtonNew';

const Exercises = ({name,data})=>(
    <React.Fragment>
        <Welcome
            name={name}
        />
        <ExercisesList
            data={data}
        />
        <ButtonNew />
    </React.Fragment>
)

export default Exercises