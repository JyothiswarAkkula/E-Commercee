import React from 'react'
import Navbar from '../components/Navbar'
import {furnitureData} from '../data/furniture'
import { Link } from 'react-router-dom'

const FurniturePag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {furnitureData.map((iteam) => {
          return (
            <div>
              <Link to={`/furniture/${iteam.id}`}>
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

export default FurniturePag