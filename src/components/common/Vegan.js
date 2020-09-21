import React from 'react'
import { Link } from 'react-router-dom'
import { getVeganRecipes } from '../../lib/api'
import ListElement from './ListElement'

class Vegan extends React.Component {
  state = { 
    recipes: null
  }

  async componentDidMount() {
    const response = await getVeganRecipes()
    this.setState({ 
      recipes: response.data.results
    }) 
    //console.log(response.data.results)
    
  }

  render() {
    if (!this.state.recipes) return null
    return (
      
      <div className="dishType-content">

        <h1>Vegan Menu</h1>

        <div className="left-side">

          {this.state.recipes.map(recipe => <ListElement key={recipe.id} food={recipe} diet={true} />)}
        </div>
      </div>
      
    )
  }
}

export default Vegan
