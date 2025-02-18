import React from 'react'
import Navbar from '../components/Navbar'
import {booksData} from '../data/books'
import { Link } from 'react-router-dom'

const BooksPage = () => {
  return (
    <>
      <Navbar />
      <div className='pagesection'>
        {booksData.map((iteam) => {
          return (
            <div>
              <Link to={`/books/${iteam.id}`}>
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

export default BooksPage