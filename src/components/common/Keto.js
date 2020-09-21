import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getKeto } from '../../lib/api';
import ListElement from './ListElement';


class Keto extends Component {

  state = {
    keto: null
  }

  async componentDidMount() {
    const res = await getKeto()
    this.setState({ keto: res.data.results })
    console.log(res.data.results)
  }

  render() {
    if (this.state.keto == null) return null
    
    return (
      <Fragment>
        
        <div className="dishType-content">

          <h1>Keto Menu</h1>

          <div className="left-side">

            {this.state.keto.map(keto => <ListElement key={keto.id} food={keto} diet={true} />)}
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Keto;