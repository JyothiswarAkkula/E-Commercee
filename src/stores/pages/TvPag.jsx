import React from 'react'
import Navbar from '../components/Navbar'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom'

const TvPag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {tvData.map((iteam) => {
          return (
            <div>
              <Link to={`/tv/${iteam.id}`}>
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

export default TvPag