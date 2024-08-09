/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useSelector} from 'react-redux';
import styles from './Layout.module.css';

const Layout = ({children}) => {
    const state = useSelector(store => store.cart);
    console.log(state);
  return (
    <div>
        <header className={styles.header}>
            <Link to='/products'>SeaShop</Link>
            <Link to='/checkout'>
            <AiOutlineShoppingCart/>
            <span>{state.counter > 0 && state.counter}</span>
            
            </Link>
        </header>
        {children}
        <footer className={styles.footer}>Made By Darya</footer>npm
    </div>
  )
}

export default Layout