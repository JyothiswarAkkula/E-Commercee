import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Mobilepage = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {mobileData.map((iteam) => {
          return (
            <div>
              <Link to={`/mobiles/${iteam.id}`}>
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

export default Mobilepage