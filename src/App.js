import React, { Component, Fragment } from 'react'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Vegan from './components/common/Vegan'
import Keto from './components/common/Keto'
import Dessert from './components/common/Dessert'
import Singular from './components/common/Singular'
import DishType from './components/common/DishType'

class App extends Component {

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <div className="front-container">
          
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/vegan" component={Vegan} />
              <Route exact path="/keto" component={Keto} />
              <Route exact path="/dessert" component={Dessert} />
              <Route exact path="/singular/:id" component={Singular} />
              <Route exact path="/dishtype/:type" component={DishType} />
            </Switch>
          </div>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
