import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>
      <div className="grid-container">
        <div className="webname">webname</div>
        <div className="menuBtn recipes"><button>recipes</button></div>
        <div className="menuBtn types" ><button>types</button></div>
      </div>  
    </Fragment>
  )
}
export default Navbar







