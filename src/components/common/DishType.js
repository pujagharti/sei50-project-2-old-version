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


  render() {

    


    const { foodByType } = this.state;
    console.log(foodByType)
    return (
      <Fragment>
        <div className="dayTime-content">
          <h1>{this.props.match.params.type}</h1>
          {
            foodByType && foodByType.map(food => <ListElement key={food.id} food={food} />)
          }
        </div>
  
      </Fragment>
    )
  }
}
export default DishType;