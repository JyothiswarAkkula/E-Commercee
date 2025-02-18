import React from 'react'
import Navbar from '../components/Navbar'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom'

const WatchPag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {watchData.map((iteam) => {
          return (
            <div>
              <Link to={`/watch/${iteam.id}`}>
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

export default WatchPag