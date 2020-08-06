import React from 'react';
import Card from './Card';

const ExcercisesList =({data})=> (
    data.map(item => <Card key={item.id} title={item.title} description={item.description} img={item.img} bg={item.bg}/>)
)

export default ExcercisesList;