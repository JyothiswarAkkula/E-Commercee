import React from 'react'
import Navbar from '../components/Navbar'
import {womanData} from '../data/woman'
import { Link } from 'react-router-dom'

const WomanPag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {womanData.map((iteam) => {
          return (
            <div>
              <Link to={`/woman/${iteam.id}`}>
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

export default WomanPag