import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Contact from './Contact.component';
import About from './About';
import Home from './Home';
import Nav from './Nav.component'

function Navbar() {
    return (
        <Router>
            <div>
                <Nav/>
        
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>

            </div>

        </Router>
      
       
    )
}

export default Navbar
