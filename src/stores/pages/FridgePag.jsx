import React from 'react'
import Navbar from '../components/Navbar'
import {fridgeData} from '../data/fridge'
import { Link } from 'react-router-dom'

const FridgePag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {fridgeData.map((iteam) => {
          return (
            <div>
              <Link to={`/fridge/${iteam.id}`}>
                <div className="pageImg">
                  <img src={iteam.image} alt="notfound" />
                </div>
              </Link>
              <div className="proModel">
                {iteam.company},{iteam.model},{iteam.price}
              </div>
            </div>

          )

        })}

      </div>
    </>
  )
}

export default FridgePag
