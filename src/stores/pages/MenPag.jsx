import React from 'react'
import Navbar from '../components/Navbar'
import {menData} from '../data/men'
import { Link } from 'react-router-dom'

const MenPag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {menData.map((iteam) => {
          return (
            <div>
              <Link to={`/men/${iteam.id}`}>
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

export default MenPag