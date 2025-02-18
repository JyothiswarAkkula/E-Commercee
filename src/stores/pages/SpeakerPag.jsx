import React from 'react'
import Navbar from '../components/Navbar'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'

const SpeakerPag = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {speakerData.map((iteam) => {
          return (
            <div>
              <Link to={`/speaker/${iteam.id}`}>
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

export default SpeakerPag