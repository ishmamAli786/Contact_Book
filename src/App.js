import React from 'react';
import './App.css';
import Contact from './components/contacts/Contact';
import NavBar from './components/elements/NavBar';
import {Provider} from 'react-redux';
import store from './store';
import {AddContact} from './components/contacts/AddContact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}> 
    <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <div class="py-3">
            <Switch>
                <Route exact path="/" component={Contact}></Route>
                <Route exact path="/contacts/add" component={AddContact}></Route>
            </Switch>
            </div>
          </div>
        </div>
    </Router>
    </Provider>
  );
}

export default App;
