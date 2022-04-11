import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import product from '../Product/Product';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
     const [products, setProducts] = useProducts()
      const [cart, setCart] = useState([]);

     
      useEffect(() => {
            const storedCart = getStoredCard();
            const savedCart = [];
            for (const id in storedCart) {
                  const addedProducts = products.find(product => product.id === id);
                  if (addedProducts) {
                        const quantity = storedCart[id];
                        addedProducts.quantity = quantity;
                        savedCart.push(addedProducts)
                  }
            }
            setCart(savedCart)
      }, [products])
      const handelAddToCart = (selectedProduct) => {
            console.log(selectedProduct)
            let newCart = []
            const exists = cart.find(product => product.id === selectedProduct.id);
            if (!exists) {
                  selectedProduct.quantity = 1;
                  newCart = [...cart, selectedProduct]
            } else {
                  const rest = cart.filter(product => product.id !== selectedProduct.id);
                  exists.quantity = exists.quantity + 1;
                  newCart =[...rest,exists]
            }
             
            setCart(newCart)
            addToDb(selectedProduct.id)
      }
      return (
            <div className='shop-container'>
                  <div className="product-container">
                        {
                              products.map(product => <Product
                                    key={product.id}
                                    product={product}
                                    handelAddToCart={handelAddToCart}
                              ></Product>)
                              
                        }
                  </div>
                  <div className="cart-container">
                        <Cart cart={cart}>
                              <Link to='/order'>
                                    <button>Review order</button>
                              </Link>
                        </Cart>
                  </div>
            </div>
      );
};

export default Shop;