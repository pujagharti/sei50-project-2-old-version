import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getSingular } from '../../lib/api';



class ListElement extends Component {

  state = {
    element: null
  }

  async componentDidMount() {
    const res = await getSingular(this.props.food.id)
    this.setState({element: res.data})
    console.log(res.data)
  }


  render() {
    if (this.state.element == null) return null
    const { element:{ id, title} } = this.state

    return (
      <Fragment>
        <div className="listElement" style={{width: '100%'}}>
          <Link to={`/singular/${id}`}>{title}</Link>
          {
            this.state.element.vegan && ": Vegan"
          }
        </div>
      </Fragment>
    )
  }
}
export default ListElement