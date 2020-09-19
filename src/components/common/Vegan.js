import React from 'react'
import { Link } from 'react-router-dom'
import { getVeganRecipes } from '../../lib/api'

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
      <div className="diet-content">
        {this.state.recipes.map(recipe => {
          return (
            <Link to={`/singular/${recipe.id}`} key={recipe.id}>{recipe.title}</Link>
          )
        })}
      </div>
      
    )
  }
}

export default Vegan
