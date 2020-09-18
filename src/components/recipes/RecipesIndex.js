import React from 'react'
import DisplayRecipes from './DisplayRecipes'

class RecipesIndex extends React.Component {
  state = {
    recipes: null
  }


  async componentDidMount() {
    
    const response = await ()
    console.log(response)
    console.log(response.data)
    
  }

  render()  {
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            { this.state.recipes.map(recipe => <DisplayRecipes key={recipe._id} {...recipe} /> )}
          </div>
        </div>
      </div>
    )
  }

}

export default RecipesIndex