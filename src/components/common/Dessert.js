import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getDessert } from '../../lib/api'
import ListElement from './ListElement'


class Dessert extends Component {

  state = {
    dessert: null
  } 

  async componentDidMount() {
    const res = await getDessert()
    this.setState({ dessert: res.data.results })
    console.log(res.data)
  } 

  render() {
    if (this.state.dessert == null) return null
    
    return (
      <Fragment>
        

        <div className="dishType-content">

          <h1>Dessert Menu</h1>

          <div className="left-side">
            {this.state.dessert.map(recipe => <ListElement key={recipe.id} food={recipe} diet={true} />)}
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Dessert;