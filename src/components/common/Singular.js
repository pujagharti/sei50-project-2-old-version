import React, { Component, Fragment } from 'react';
import { getSingular } from '../../lib/api';


class Singular extends Component {

  state = {
    food: ''
  }

  async componentDidMount() {
    const res = await getSingular(this.props.match.params.id)
    this.setState({ food: res.data })
    
  }



  render() {
    const { food } = this.state
    console.log(food)
    
    return (
      <Fragment>
        <div className="singular-content">
          <h1>{ food.title }</h1>
          <img src={food.image} />
        </div>

      </Fragment>
    )
  }
}
export default Singular;