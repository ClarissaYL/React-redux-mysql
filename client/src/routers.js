import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/homePage/Home";
import SignPage from './components/signupPage/SignupPage';
import LoginPage from './components/loginPage/LoginPage';
import MyResourcePage from './components/myResourcePage/ResourcePage';
import MyResourceForm from './components/myResourcePage/ResourceForm';
import LocationResourcePage from './components/locationResourcePage/ResourcePage';
import LocationResourceForm from './components/locationResourcePage/ResourceForm';
import AllWebResourceForm from './components/allWebResourcePage/ResourceForm';
import requireLogin from './utils/requireLogin';

export default (
    <div className="container">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/signup" component={SignPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/resources" component={requireLogin(MyResourcePage)}/>
        <Route path="/resources/upload" component={requireLogin(MyResourceForm)}/>
        <Route path="/resource/:id" component={requireLogin(MyResourceForm)}/>
        <Route exact path="/locationResources" component={LocationResourcePage}/>
        <Route path="/locationResource/:id" component={requireLogin(LocationResourceForm)}/>
        <Route path="/allWebResources/upload" component={requireLogin(AllWebResourceForm)}/>
    </div>
)