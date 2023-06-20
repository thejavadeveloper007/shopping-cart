import React, { useEffect, useState } from 'react'
import Product from './Product';
import Simmer from './Simmer';

const Home = () => {
    const [products, setProducts] = useState("");
    useEffect(() =>{
        console.log('entry');
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=>{
            console.log('data',data);
            console.log('entry');
            // json.map((ele) => {
            //   return data.push({
            //     id: ele.id,
            //     name: ele.category,
            //     image: ele.image,
            //     price: ele.price,
            //     ratings: ele.rating?.rate
            //   });
            // })
            setProducts(data);
        }).catch((err) => console.log(err))
        
    },[]);

  return !products ? <Simmer /> : (
    <div className='home'>
        <div className='products'>
        {products.map((prod) => {
            return <Product prod={prod} key={prod.id} />
        })}
        </div>
    </div>
  )
}

export default Home;