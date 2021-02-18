import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import Login from './components/Auth section/Login'
import SignUp from './components/Auth section/SignUp'
import Welcome from './components/Auth section/Welcome'
import ForgetPassword from './components/Auth section/ForgetPassword'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/forgot-password' component={ForgetPassword}/>
        <Route path="/" exact component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
