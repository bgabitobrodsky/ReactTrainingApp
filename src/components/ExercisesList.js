import React from 'react';
import Card from './Card';

const ExercisesList =({data,onClick})=> (
    data.map(item => <Card key={item.id} title={item.title} description={item.description} img={item.img} bg={item.bg}/>)
)

export default ExercisesList;