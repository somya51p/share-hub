import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing all the components here
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {Container} from 'react-bootstrap';
import NavBar from './components/Navbar';
import RenderItems from './components/RenderItems';
import ShareItem from './components/ShareItem';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import NotFound from "./components/NotFound";
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
      <Switch>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/logout" exact component={Logout}></Route>
        <Route path="/share" exact component={ShareItem}></Route>
        <Route path="/stuffs" exact component={RenderItems}></Route>
        <Route path="/" exact component={Home}></Route>
        <Redirect to="/not-found" />
      </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
