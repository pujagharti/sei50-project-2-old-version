import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getKeto } from '../../lib/api';


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
        <div className="diet-content">
          {this.state.keto.map(keto => {
            return (
              <Link to={`/singular/${keto.id}`} key={keto.id}>{keto.title}</Link>
            )
          })}
        </div>
      </Fragment>
    )
  }
}
export default Keto;