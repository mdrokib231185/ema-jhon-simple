import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
      const { product, handelRemoveProduct } = props
      // console.log(product)
      const { name, img, price, shipping, quantity } = props.product;
      
      return (
            <div className='review-item'>
                  <div>
                        <img src={img} alt="" />
                  </div>
                  <div className="review-item-details-container">
                        <div className="review-item-details">
                              
                              <p className="product-name" title={name}>
                                    {name.length > 20 ? name.slice(0, 20) + '...' :name}
                              </p>
                                    <p>Price:$ {price}</p>
                              <p>Shipping: ${shipping}</p>
                              <p>Quantity: {quantity}</p>
                        </div>
                         <div className="delete-container">
                              <button onClick={() => handelRemoveProduct(product)}  className='delete-button'>
                                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                              </button>
                              </div>
                        
                  </div>
            </div>
      );
};

export default ReviewItem;