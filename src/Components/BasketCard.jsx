/* eslint-disable react/prop-types */
import { shortext } from "../Functions/Helper"
import { FaRegTrashCan } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";

import styles from './BasketCard.module.css';
import {useDispatch} from 'react-redux';
import { decrease, increase, removeItem } from "../features/cart/cartSlice";


const BasketCard = ({data}) => {
  const dispatch = useDispatch();
 
  return (
    <div className={styles.card}>
        <img src={data.image}/>
        <p>{shortext(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity === 1 && (<button onClick={()=> dispatch(removeItem(data))}><FaRegTrashCan/></button>)}
            {data.quantity > 1 && (<button onClick={()=> dispatch(decrease(data))}><TiMinus/></button>)}
            <span>{data.quantity}</span>
            <button onClick={()=> dispatch(increase(data)) }><IoMdAdd/></button>
            
        </div>
    </div>
  )
}

export default BasketCard