/* eslint-disable no-unused-vars */
const shortext = (text)=>{
    return text.split(" ").slice(0,3).join("")
} 

const searchFilter = (search, products)=>{
    if(!search) return products;
    const result = products.filter(product=> product.title.toLowerCase().includes(search))
    return result;
}

const categoryFilter = (category, products) => {
    if (!category || category === 'all') return products;
    const result = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    console.log(result);
    return result;
}

    

const createQuery = (currentQuery, newQuery)=>{
    if(newQuery.category==='all'){
        const{category,...rest} = currentQuery;
        return rest;
    }
    if(newQuery.search===''){
        const{search,...rest} = currentQuery;
        return rest;
    }
    return{...currentQuery,...newQuery}
}
const getInitialQuery = (searchParams)=>{
    const query={};
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) query.category = category;
    if(search) query.search = search;
    return query;
}


const sumPrice = (items) => {
  return items.reduce((acc,current)=>acc + current.quantity * current.price,0).toFixed(2);
}
const sumQuantity = (items) => {
    return items.reduce((acc,current)=>acc + current.quantity,0);
}
const productFind = (state,id)=>{
    const product = state.selectedItems.findIndex(item=>item.id===id);
    if(product === -1) return 0;
    else{
       return state.selectedItems[product].quantity;
    }
}
const isInCart = (state,id)=>{
    const items = !!state.selectedItems.find(item=>item.id === id)
    return items
}
export {shortext,
    searchFilter,
    categoryFilter,createQuery,
    getInitialQuery,
    sumPrice,
    sumQuantity,
    productFind,
    isInCart};