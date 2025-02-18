import React from 'react'
import {computerData} from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ComputersPage = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {computerData.map((iteam) => {
          return (
            <div>
              <Link to={`/computers/${iteam.id}`}>
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

export default ComputersPage