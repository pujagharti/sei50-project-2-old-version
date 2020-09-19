
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {


  

  render() {
    return (

      <Fragment>
        <div className="front-container">
          <div className="grid-container">
            <div className="webname"><Link to='/'>Food Life</Link></div>

            <button className="menuBtn breakfast"><Link to="/dishtype/breakfast" >Breakfast</Link></button>
            <button className="menuBtn lunch" ><Link to="/dishtype/lunch" >Lunch</Link></button>
            <button className="menuBtn dinner" ><Link to="/dishtype/dinner" >Dinner</Link> </button>

          </div>

        </div>
      </Fragment>
    )
  }
}
export default Navbar

