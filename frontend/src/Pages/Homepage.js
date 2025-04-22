import React from 'react'
import { useState,useEffect } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Ccc from '../Components/Carousel';
import Footer from '../Components/Footer';

const Homepage = () => {
  const[Search,setSearch]=useState('')
  const[Data,setData]=useState([]);
  useEffect(()=>{
  const fetchdata = async ()=>{
    const response = await fetch('https://server-amber-iota-12.vercel.app/api/products/')
    const data=await response.json();
    setData(data); 
  };
  fetchdata();
},[])

  return (
    <>
    <div className='container-fluid pb-2'><Navbar setsearch={setSearch}/></div>
    <div className='container-fluid pt-5'><Ccc/></div>
    
    
      <div className='container-fluid' style={{padding:10}}>
       <div className='row'>
        {Data.filter((item)=>item.name.toLowerCase().includes(Search.toLowerCase())).map((item)=>(
          <div className='col-md-3 mb-5'>
            <Card name={item.name} image={item.images[0]} hover={item.images[1]} alt={item._id} brand={item.brand} price={item.price} dis={item.discountprice} cat={item.category} id={item._id}/>
          </div>
        ))}
       </div>
      </div>
      <div><Footer/></div>
    </>

  )
}

export default Homepage;