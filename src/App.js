import React, {useState} from 'react';
import './App.css';

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import React-Router-dom
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//toast
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//Components
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './context/UserContext';
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./config/firebaseConfig";

//initialize firebase
firebase.initializeApp(firebaseConfig);

function App() {
  
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
          <Route exact path={process.env.PUBLIC_URL+"/Signin"} component={Signin}/>
          <Route exact path={process.env.PUBLIC_URL+"/Signup"} component={Signup}/>
          <Route exact path={process.env.PUBLIC_URL+"*"} component={PageNotFound}/>
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
