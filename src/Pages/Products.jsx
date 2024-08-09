
import Card from '../Components/Card';
import {useDispatch, useSelector} from 'react-redux';

import { BiCategory } from "react-icons/bi";

import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { categoryFilter, createQuery, getInitialQuery, searchFilter } from '../Functions/Helper';
import { useSearchParams } from 'react-router-dom';
import Search from '../Components/Search';
import Loader from '../Components/Loader';
import { fetchProducts } from '../features/products/productsSlice';


const categories = [
  {id:1,type:'All'},
  {id:2,type:"Men's Clothing"},
  {id:3,type:"Women's Clothing"},
  {id:4,type:"Electronics"},
  {id:5,type:"jewelary"}
]

const Products = () => {
    const dispatch = useDispatch();
    const {products, loading} = useSelector(store=> store.products);
    console.log(products);
    const [search,setSearch]=useState("");
    const [data,setData] = useState([]);
    const [query,setQuery] = useState({});
    const [searchParams,setSearchParams] = useSearchParams();
    useEffect(()=>{
      dispatch(fetchProducts());
    },[])
    useEffect(()=>{
      setData(products);
      setQuery(getInitialQuery(searchParams))
      
    },[products])

    useEffect(()=>{
      setSearchParams(query);
      setSearch(query.search || "")
      
      let finalResult = searchFilter(query.search,products);
      finalResult = categoryFilter(query.category,finalResult);
      setData(finalResult);
      
    },[query])

    const categoryHandler = (event)=>{
      if (event.target.tagName.toLowerCase() !== "li") return;
      const category = event.currentTarget.innerText.toLowerCase()
      
      
      setQuery((query)=> createQuery(query,{category}))
    }
 
  return (
    <>
    <Search search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
      
      <div className={styles.products}>
        {loading && (<Loader/>)}
        {data.map(p=><Card key={p.id} data={p}/>)}
      </div>
      <div className={styles.sidebar}>
        <div>
        <h3>Category </h3>
        <BiCategory/>
        </div>
        <ul onClick = {categoryHandler}>
         {categories.map(p=>(
          <li key={p.id} className={p.type.toLowerCase()===query.category ? styles.selected : null}>
            {p.type}
          </li>
         ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Products;