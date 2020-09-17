import React, { Fragment, useState } from 'react'
const Navbar = () => {
  const [navi, setNavi] = useState(false)
  return (
    <Fragment>
      <div className="grid-container">
        <div className="webname">webname</div>
        <div className="menuBtn recipes"><button>recipes</button></div>
        <div className="menuBtn types" onClick={e=>setNavi(!navi)}><button>types</button></div>
      </div>
      {
        navi && <div className='navi'>navi</div>
      }
    </Fragment>
  )
}
export default Navbar





