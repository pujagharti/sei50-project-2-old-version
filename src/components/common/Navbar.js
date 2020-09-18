
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getCuisines } from '../../api/api'
import Cuisines from './Cuisines'


class Navbar extends Component {


  state = {
    dropCuisines: false,
    dropTypes: false,
    foodAPI: [],
    cuisine: 'Choose Cuisine'
  }

  async componentDidMount() {
    const res = await getCuisines()
    this.setState({ foodAPI: res.data })

  }
  /* async componentDidUpdate() {
    const res = await getCuisines()
    this.setState({ foodAPI: res.data })
  }
 */
  
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
    const { foodAPI } = this.state
    if (!foodAPI) return null

    
    return (

      <Fragment>
        <div className="front-container">
          <div className="grid-container">
            <div className="webname"><Link to='/'>webname</Link></div>

            {
              foodAPI && <>
                <div className="buttonCuisinesSize" style={{ position: 'relative' }}>
            <div className="menuBtn cuisines"><button onClick={e=>this.handleDropDown('cuisines')}>{this.state.cuisine}</button></div>
                  {
                    this.state.dropCuisines && <Fragment>
                      <div className="navi">
                        <Cuisines foodAPI={foodAPI} cuisine={this.state.cuisine} />
                      </div>
                    </Fragment>
                  }
                </div>
              </>
            }
            


              
            <div className="buttonTypesSize" style={{ position: 'relative' }}>
              <div className="menuBtn types" ><button onClick={e=>this.handleDropDown('types')}>Meal Types</button></div>
              {
                this.state.dropTypes && <Fragment>
                  <div className="navi2">
                    <div className="nav"><Link to="/breakfast">breakfast</Link></div>
                    <div className="nav"><Link to="/brunch"> brunch </Link></div>
                    <div className="nav"><Link to="/lunch"> lunch </Link></div>
                    <div className="nav"><Link to="/dinner"> dinner </Link></div>
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

