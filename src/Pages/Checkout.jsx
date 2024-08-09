import { useSelector } from 'react-redux';
import BasketCard from '../Components/BasketCard';
import BasketSideBar from '../Components/BasketSideBar';

import empty from '../assets/e.svg';

import styles from './Checkout.module.css'

const Checkout = () => {
  const state = useSelector(store => store.cart);
  
  console.log(state);
  
  return (
    <div className={styles.container}>
      <BasketSideBar state={state} />
      <div className={styles.products}>
      {state.selectedItems.map(item=><BasketCard key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default Checkout