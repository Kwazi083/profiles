import './App.css';
import Profile from './profile';
import EditProfile from './EditProfile';
import Dashboard from './dashboard';
import Login from './login';
import Form from './createProfile';
import Register from './register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/editProfile" component={EditProfile}/>
        <Route path="/createProfile" component={Form}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
