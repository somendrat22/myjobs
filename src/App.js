import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from './Components/Signup/Signup';
import Feeds from './Components/Feeds/Feeds';
import Forgotpassword from './Components/Forgotpassword/Forgotpassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Postjob from './Components/PostJob/Postjob';
import { connect } from 'react-redux';
function App({user}) {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path = "/" component = {Home}></Route>
            <Route exact path = "/login" component = {Login}></Route>
            <Route exact path = "/signup" component = {Signup}></Route>
            <Route exact path = "/forgotpassword" component = {Forgotpassword}></Route>
            <Route exact path = "/resetpassword" component = {ResetPassword}></Route>
          { 
           
            user ? (
              <>
              <Route exact path = "/feeds" component = {Feeds}></Route>
              <Route exact path = "/postjob" component = {Postjob}></Route>
              </>
              ) : (
                <Redirect to = "/"></Redirect>
              )
          }
              
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (store) => {
  return{
    user : store.user,
  }
}

export default connect(mapStateToProps,)(App);
