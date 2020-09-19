import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getDessert } from '../../lib/api'


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
        <div className="diet-content">
          {this.state.dessert.map(recipe => {
            return (
              <Link to={`singular/${recipe.id}`} key={recipe.id}>{recipe.title}</Link>
            )
          })}
        </div>
      </Fragment>
    )
  }
}
export default Dessert;