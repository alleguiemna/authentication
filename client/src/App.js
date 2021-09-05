import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={Register}/>
         <Route path="/login" exact component={Login}/>
         {/* <Route path="/profile" exact component={Profile}/> */} 
       </Switch>
     </Router>
    </div>
  );
}

export default App;
