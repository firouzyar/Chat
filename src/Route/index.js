import {Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import history from "./history";


//route for components
const Home = lazy(() => import('../containers/Home/index'));
const Contact = lazy(() => import('../containers/Contact/index'));
const Profile = lazy(() => import('../containers/Profile/index'));
const Archived = lazy(() => import('../containers/Archived/index'));
const Message = lazy(() => import('../containers/Message/index'));
const NotFound = lazy(() => import('../containers/NotFound/index'));


const Routes = () => (
    <Router history={history}>
        <Suspense fallback={""}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/archived" component={Archived}/>
                <Route path="/message/:id" component={Message}/>
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    </Router>
);

export default Routes;