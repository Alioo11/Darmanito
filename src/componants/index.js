import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import MianPage from "./main page/MainPage";
import Membership from "./membership/Membership";
import ContactUs from "./contact-us/ContactUs";
import FAQ from "./FAQ/FAQ";

function Index() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MianPage />
          </Route>
          <Route exact path='/membership'>
            <Membership />
          </Route>
          <Route exact path='/FAQ'>
            <FAQ />
          </Route>
          <Route exact path='/contact-us'>
            <ContactUs />
          </Route>
          <Route exact path='*'>
            <h2>
              <div> unsupported page </div>
              <Link to='/'>home</Link>
            </h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Index;
