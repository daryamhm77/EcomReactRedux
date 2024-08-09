/* eslint-disable react/prop-types */
import { GiMoneyStack } from "react-icons/gi";
import { TfiWidgetized } from "react-icons/tfi";
import { FiArchive } from "react-icons/fi";

import styles from './BasketSideBar.module.css';
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";


const BasketSideBar = ({state}) => {
  const dispatch = useDispatch();
  
  return (
    <div className={styles.container}>
        <div>
            <GiMoneyStack/>
            <p>Total:</p>
            <span>{state.total}</span>
        </div>
        <div>
            <FiArchive/>
            <p>Quantity:</p>
            <span>{state.Counter}</span>
        </div>
        <div>
            <TfiWidgetized/>
            <p>Status:</p>
            <span>{!state.checkout && <p>Pending...</p>}</span>
        </div>
        <button onClick={()=>dispatch(checkout())}>Checkout</button>
    </div>
  )
}

export default BasketSideBar