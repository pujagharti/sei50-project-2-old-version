import React, { Component, Fragment } from 'react'
import { getFoodName } from '../../lib/api'
import { Link } from 'react-router-dom'


class Home extends Component {

  state = {
    recipes: [],
    foodNames: null,
    searchNames: null
  }

  async componentDidMount() {
    const res = await getFoodName()
    return this.setState({ foodNames: res.data.results })
  }
  

  handleChange = (e) => {
    this.setState({ searchNames: e.target.value })

  }
  

  /* handleClick = async event => {
    event.preventDefault()
    const response = await 
    this.setState({ recipes: response.data})
  } */

  
  render() {
    if ( this.state.foodNames == null) return null
    const names = this.state.searchNames && this.state.foodNames.filter(element => [...element.title].toString().toLowerCase().includes([...this.state.searchNames].toString().toLowerCase()))
    console.log(names)
    return (
      <Fragment>
        <div className="home">
          <div className="searchingInput">
            <span> Search for tasty recipes by Meal Type, Cuisine or Diet Type </span>
            <input onChange = {e =>this.handleChange(e)} type="text" name="searchNames" className="home-search" />
            {
              names && <div className="foodlist">{names.map(name => 
                <Link key={name.id} to={`/singular/${name.id}`} >{ name.title }</Link>
              )}</div>
            }
            
          </div>
          
          <div className="home-icon home-one"><Link to="/vegan"><img onClick={this.state.handleClick} src={require('../../styles/thegirl.jpg')} alt="vegan"/></Link></div>
          
          <div className="home-icon home-two"><Link to="/keto"><img src={require('../../styles/keto.jpg')} alt="keto"/></Link></div>
          
          <div className="home-icon home-three"><Link to="/dessert"><img src={require('../../styles/tart.jpg')} alt="dessert"/></Link></div>
        
        </div>
      </Fragment>
    )
  }
}
export default Home

