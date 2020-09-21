import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getSingular } from '../../lib/api';



class ListElement extends Component {

  state = {
    element: null
  }

  async componentDidMount() {
    const res = await getSingular(this.props.food.id)
    this.setState({ element: res.data })
    console.log(res.data)
  }


  render() {
    if (this.state.element == null) return null
    const { element:{ id, title} } = this.state

    return (
      <Fragment>
        <div className="list-element" style={{ width: '100%' }}>
          <Link to={`/singular/${id}`}>{title}</Link>
          <div className="list-labels">
            {
              !this.props.diet && this.state.element.vegetarian && <div className="list-label">Vegetarian</div>
            }
            {
              this.state.element.glutenFree && <div className="list-label">Gluten free</div>
            }
            {
              !this.props.diet && this.state.element.vegan && <div className="list-label">Vegan</div>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}
export default ListElement