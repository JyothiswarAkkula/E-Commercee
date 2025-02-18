import React from 'react'
import Navbar from '../components/Navbar'
import {kitchenData} from '../data/kitchen'
import { Link } from 'react-router-dom'

const KitchenPag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {kitchenData.map((iteam) => {
          return (
            <div>
              <Link to={`/kitchen/${iteam.id}`}>
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

export default KitchenPag