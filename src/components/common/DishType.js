import React, { Fragment, Component } from 'react';
import { getByType } from '../../lib/api';
import ListElement from './ListElement';

class DishType extends Component {

  state = {
    foodByType: null
  }
  
  async componentDidMount () {
    const res = await getByType(this.props.match.params.type)
    this.setState({ foodByType: res.data.results })
    console.log(res.data.results)
  }
  async componentDidUpdate(prevProps, prevState) {
    if ( prevProps.match.params.type !== this.props.match.params.type) {
      const res = await getByType(this.props.match.params.type)
      this.setState({ foodByType: res.data.results })
      console.log(res.data.results)
    }
  }
  

  render() {

    const { foodByType } = this.state;
    const {match} = this.props

    const type = match.params.type.charAt(0).toUpperCase() + match.params.type.slice(1)

    console.log(foodByType)
    return (
      <Fragment>
        <div className="dishType-content">

          <h1>{type} Menu</h1>

          <div className="left-side">

            {
              foodByType && foodByType.map(food => <ListElement key={food.id} food={food} />)
            }
          </div>
        </div>
  
      </Fragment>
    )
  }
}
export default DishType;