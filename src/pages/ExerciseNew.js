import React from 'react';
import ExercisesForm from '../components/ExercisesForm';
import Card from '../components/Card';

const ExerciseNew =({form, onChange, onSubmit})=> (
            <div className="row">
                <div className="col-sm">
                    <Card
                        {...form}
                    />
                </div>
                <div className="col-sm">
                    <ExercisesForm 
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form={form}
                    />
                </div>
            </div>
    
)


export default ExerciseNew;