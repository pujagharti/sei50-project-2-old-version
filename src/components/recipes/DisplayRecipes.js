import React from 'react'

import axios from 'axios'

const apiKey = 'da84782af61243d798ead659cf921e52'
const baseUrl = 'https://api.spoonacular.com/recipes/complexSearch'

class DisplayRecipes extends React.Component {
  state = {
    formData: {
      cuisine: '',
      diet: '',
      type: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { cuisine, type, diet } = this.state.formData
    const response = await axios.get(`${baseUrl}?apiKey=${apiKey}&cuisine=${cuisine}&diet=${diet}&type=${type}`)
    this.setState({ recipes: response.data })
  }

  render()  {
    return (
      <section>
        <div>Recipes </div>
        
      
      </section>
    )
  }
}

export default DisplayRecipes
