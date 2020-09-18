import React from 'react'
import { getVegetarianRecipes } from '../../lib/api'

class Vegetarian extends React.Component {
  state = { 
    recipes: null
  }
  async componentDidMount() {
    const response = await getVegetarianRecipes()
    this.setState({ 
      recipes: response.data.results
    }) 
  }

  render() {
    if (!this.state.recipes) return null
    return (
      <div>
        {this.state.recipes.map(recipe => {
          return (
            <div key={recipe.id}>{recipe.title}</div>
          )
        })}
      </div>
      
    )
  }
}

export default Vegetarian
