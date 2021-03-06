import React from 'react';


import { MainPage, ContactPage, AboutPage, Navbar, Footer, StatisticPage} from './components/index';
import { Switch, Route, Redirect } from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
        <React.Fragment>
          <Navbar />
            <Switch>
              <Redirect exact from="/" to="home" />
              <Route path='/home' component={MainPage} exact />
              <Route path='/contact-us' component={ContactPage} />
              <Route path='/about-project' component={AboutPage} />
              <Route path='/covid-stat' component={StatisticPage} />
            </Switch>
          <Footer />
        </React.Fragment>
    );
  }
}

export default App;
