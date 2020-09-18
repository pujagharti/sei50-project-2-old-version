import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class Navbar extends Component {

  state = {
    dropCuisines: false,
    dropTypes: false
  }

  handleDropDown = (e) => {
    if (e === 'cuisines') {
      this.setState({ dropTypes: false })
      return this.setState({ dropCuisines: !this.state.dropCuisines })
    }
    if (e === 'types') {
      this.setState({ dropCuisines: false })
      return this.setState({ dropTypes: !this.state.dropTypes })
    }
  }
  render() {

    
    return (
      <Fragment>
        <div className="front-container">
          <div className="grid-container">
            <div className="webname"><Link to='/'>MENU</Link></div>
            

            <div className="buttonCuisinesSize" style={{position: 'relative'}}>
              <div className="menuBtn cuisines"><button onClick={e=>this.handleDropDown('cuisines')}>Choose Cuisines</button></div>
              {
                this.state.dropCuisines && <Fragment>
                  <div className="navi">
                    
                  </div>
                </Fragment>
              }
            </div>
              
            
            
            <div className="buttonTypesSize" style={{ position: 'relative' }}>
              <div className="menuBtn types" ><button onClick={e=>this.handleDropDown('types')}>Meal Types</button></div>
              {
                this.state.dropTypes && <Fragment>
                  <div className="navi2">
                    <div className="nav"><Link to="/breakfast">breakfast</Link></div>
                    <div className="nav"><Link to="/brunch"> brunch </Link></div>
                    <div className="nav"><Link to="/lunch"> Lunch </Link></div>
                    <div className="nav"><Link to="/dinner"> Dinner </Link></div>
                  </div>
                </Fragment>
              }
              
            </div>
          </div>

        </div>
        
      </Fragment>
    )
  }
}
export default Navbar