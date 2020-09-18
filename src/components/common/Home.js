import React, { Component, Fragment } from 'react'
import { getFoodName } from '../../api/api'



class Home extends Component {

  state = {
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
          <div className="home-icon home-one"><img src={require('../../styles/thegirl.jpg')} /> </div>
          <div className="home-icon home-two"><img src={require('../../styles/food.jpg')} /></div>
          <div className="home-icon home-three"><img src={require('../../styles/nutrition.jpg')} /></div>

        </div>
      </Fragment>
    )
  }
}
export default Home