import React from 'react'
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { booksData } from '../stores/data/books';

const BooksSingle = () => {
    const { id } = useParams();
    
      
      const product = booksData.find((item) => item.id === id);
  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="Books image not found" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button className="in-button"> Add to Cart</button>
    
        </div>
      </div>
    </>
  )
}

export default BooksSingle