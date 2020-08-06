import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Excercises from '../pages/Excercises';
import ExcerciseNew from '../pages/ExcerciseNew';
import NotFound from '../pages/NotFound';

const App =()=> (
    <BrowserRouter>
        <Switch>
            <Route exact path="/excercises" component={Excercises}/>
            <Route exact path="/excercises/new" component={ExcerciseNew}/>
            
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App;