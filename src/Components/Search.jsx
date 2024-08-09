/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { createQuery } from "../Functions/Helper";
import styles from './Search.module.css';

const Search = ({setQuery,search,setSearch}) => {
    const searchHandler = ()=>{
        setQuery((query)=>createQuery(query,{search}))
      }
  return (
    <div className={styles.search}>
        <input placeholder='search here' value={search} onChange={(event)=>setSearch(event.target.value.toLowerCase().trim())}/>
        <button onClick={searchHandler}>
          <BsSearch/>
        </button>
      </div>
  )
}

export default Search