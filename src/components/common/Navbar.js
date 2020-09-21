
import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends Component {


  render() {

    
    return (

      <Fragment>
        <div className="front-container">
          <div className="grid-container">
            <div className="webname"><Link to='/'>Food Life</Link></div>

            <Link className="menuBtn" to="/dishtype/breakfast" >Breakfast</Link>
            <Link className="menuBtn" to="/dishtype/lunch" >Lunch</Link>
            <Link className="menuBtn" to="/dishtype/dinner" >Dinner</Link>

          </div>

        </div>
      </Fragment>
    )
  }
}
export default withRouter(Navbar)

