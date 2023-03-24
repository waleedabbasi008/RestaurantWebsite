import React from 'react'

const Navbar = ({filteritem, menu, Allitems}) => {
  return (
    <>
    <nav className="navbar">
    {
        menu.map((currele)=>{
            return (
                <>
                <button className="btn btn-outline-secondry" onClick={()=>filteritem(currele)}> {currele} </button>
                </>
            )
        })
    }
           <button className="btn btn-outline-secondry" onClick={Allitems}> All </button>
          
    
    </nav>
    </>
  )
}

export default Navbar;