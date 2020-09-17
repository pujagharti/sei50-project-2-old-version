import React, { Component, Fragment } from 'react'


class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="front-container">
          <div className="home">
            <div className="searchingInput">
              <input type="text" className="home-search" />
            </div>
            <div className="home-icon home-one">one</div>
            <div className="home-icon home-two">two</div>
            <div className="home-icon home-three">three</div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Home