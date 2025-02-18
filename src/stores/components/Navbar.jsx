import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navsction">
                <div className="title">
                    <h2> E-Mart </h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="user">
                    <div className="user-details">
                        SigIn/SigOut

                    </div>
                </div>
                <div className="cart">
                    Cart

                </div>

            </div>
            <div className='subnavsction'>
                <ul>
                    <Link to='/mobiles'> <li>Mobiles</li></Link>
                    <Link to='/computer'><li>Computers</li></Link>
                    <Link to='/speaker'><li>Speaker</li> </Link>
                    <Link to='/men'><li>Mens's</li></Link>
                    <Link to='/woman'><li>Women's</li></Link>
                    <Link to='/tv'> <li>Smart TV</li></Link>
                    <Link to='/watch'><li>Watch</li></Link>
                    <Link to='/kitchen'><li>Kitchen</li></Link>
                    <Link to='/furniture'><li>Furniture</li></Link>
                    <Link to='/fridge'><li>Fridge</li></Link>
                    <Link to='/books'><li>Books</li></Link>
                    <Link to='/ac'><li>AC</li></Link>
                    
                </ul>
            </div>
        </>
    )
}

export default Navbar