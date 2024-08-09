/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';

import { CgDetailsMore } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import { isInCart, productFind, shortext } from '../Functions/Helper';
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import styles from './Card.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { addItem, decrease, increase, removeItem } from '../features/cart/cartSlice';

const Card = ({data}) => {
  const{id,title,image,price} = data;
  const state = useSelector(store => store.cart)
  const dispatch = useDispatch();
  const quantity = productFind(state,id)
 
  return (
    <div className={styles.card}>
      <img src={image} alt="title" style={{width:'150px'}}/>
      <h3>{shortext(title)}</h3>
      <p>$ {price}</p>
      <div className={styles.actions}>
      <Link to={`/products/${id}`}>
      <CgDetailsMore/>

      </Link>
      {
              quantity === 1 && ( <button onClick={()=>dispatch(removeItem(data))}>
                <FaRegTrashCan/>
            </button>)
            }
            {quantity > 1 && (<button onClick={()=>dispatch(decrease(data))}>
                <TiMinus/>
            </button>)}
      <p>{ quantity > 0 && quantity}</p>
      {isInCart(state,id) ? <button onClick={()=>dispatch(increase(data))}><IoMdAdd/></button> :
      <button onClick={()=>dispatch(addItem(data))}><FiShoppingBag/></button>}
      </div>
    </div>
  )
}

export default Card