import React from 'react';
const Navbar = ({ filteritem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        menuList.map((currele) => {
                            return (
                                <>
                                    <button className="btn-group--item btn-outline-secondary btn" onClick={() => filteritem( currele )}> {currele} </button>
                                    
                                </>
                            )
                        })
                    }
                </div>
            </nav>

        </>
    )
}

export default Navbar;