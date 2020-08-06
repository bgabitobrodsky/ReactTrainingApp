import React from 'react';
import Card from './Card';

export default function ExcercisesList(props) {
    return(
        props.data.map(item => <Card title={item.title} description={item.description} img={item.img} bg={item.bg}/>)
    );
}