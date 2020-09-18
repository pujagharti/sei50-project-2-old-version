import React, { Component, Fragment } from 'react'
import { getFoodName } from '../../lib/api'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Home extends Component {

  state = {
    recipes: [],
    foodNames: null,
    searchNames: null
  }

  async componentDidMount() {
    const res = await getFoodName()
    return this.setState({ foodNames: res.data })
  }
  
  handleSearch = (e) => {
    this.setState({ searchNames: e.target.value })
  }

  handleClick = async event => {
    event.preventDefault()
    const response = await 
    this.setState({ recipes: response.data})
  }

  
  render() {
    //const names = this.state.searchNames && this.state.foodNames && this.state.foodNames.results.filter(food => food.title.toLowerCase().includes([...this.state.searchNames.toLowerCase()]))

    //console.log(names)
    return (
      <Fragment>
        <div className="home">  
          <div className="searchingInput">
            <span>  Search for tasty recipes by Meal Type, Cuisine or Diet Type </span>
            <input type="text" name="searchNames" className="home-search" onChange={e=> this.handleSearch(e)} />
          </div>
          {/* Create 3 boxes with clickable images that takes user to API request for 3 types of diet */}
          
          <Link to="/vegetarian">
            <div className="home-icon home-one"><img onClick={this.state.handleClick} src={require('../../styles/thegirl.jpg')} alt="vegetarian"/></div>
          </Link>
          <div className="home-icon home-two"><img onClick="" src={require('../../styles/food.jpg')} alt="vegan"/></div>
          <div className="home-icon home-three"><img onClick="" src={require('../../styles/nutrition.jpg')} alt="keto"/></div>
        
        </div>
      </Fragment>
    )
  }
}
export default Home

