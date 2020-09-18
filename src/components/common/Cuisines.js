import React, { Component, Fragment } from 'react';



class Cuisines extends Component {

  
    state = {
      api: this.props.foodAPI,
      cuisine: this.props.cuisine
    }

    render() {

      const { api } = this.state
      //const data = api.map(food => food)


      const cuisines = api.apis[16].operations[0].parameters[2].allowableValues.values
      const selection = cuisines.map(cuisine => <option value={cuisine}>{cuisine}</option>)
      console.log(selection)
      return (

        <Fragment>
          <select className="menuBtn cuisines" value={this.state.cuisine} onChange={ e=>this.setState({cuisine: e.target.value })}>
            
            {selection}
          </select>


        </Fragment>
      )
    }
}
export default Cuisines;