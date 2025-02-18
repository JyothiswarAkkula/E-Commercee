import React from 'react'
import Navbar from '../components/Navbar'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom'


const AcPage = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {acData.map((iteam) => {
          return (
            <div>
              <Link to={`/ac/${iteam.id}`}>
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

export default AcPage