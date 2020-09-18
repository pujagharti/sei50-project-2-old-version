import React, { Component, Fragment } from 'react'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Breakfast from './components/common/Breakfast'
import Brunch from './components/common/Brunch'
import Lunch from './components/common/Lunch'
import Dinner from './components/common/Dinner'
class App extends Component {

  
    

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <div className="front-container">
          
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/breakfast" component={Breakfast} />
              <Route exact path="/brunch" component={Brunch} />
              <Route exact path="/lunch" component={Lunch} />
              <Route exact path="/dinner" component={Dinner} />
            </Switch>
          </div>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
