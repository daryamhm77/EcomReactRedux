import {Link, useParams} from 'react-router-dom';


import { FaMoneyCheckAlt } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi";
import { RxActivityLog } from "react-icons/rx";

import styles from './ProductDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../features/products/productsSlice';

const ProductsDetails = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  })
  const details = useSelector(store=> store.products.products.find(item=> item.id === +id))
  return (
    <div className={styles.container}>
      
        <img src={details.image} alt={details.title}/>
      
      <div className={styles.info}>
        <h3 className={styles.title}>{details.title}</h3>
        <p className={styles.description}>{details.description}</p>
        <p className={styles.category}> <RxActivityLog/> {details.category}</p>
      <div>
        <span className={styles.price}>
         <FaMoneyCheckAlt/> ${details.price}
        </span>
        <Link to='/products'> <HiChevronLeft/> Back To Shop</Link>
      </div>
      </div>
    </div>
  )
}

export default ProductsDetails