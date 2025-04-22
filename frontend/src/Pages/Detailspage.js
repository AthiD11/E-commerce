import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Detail from '../Components/details';

export const Detailspage = () => {

   const {id}=useParams();
   const[detail,setdetail]=useState([]);

   useEffect(()=>{
    const fetchData=async()=>{
        const response=await fetch(`https://server-amber-iota-12.vercel.app/api/products/${id}`);
        const data=await response.json();
        setdetail(data)
    }
    fetchData();
   },[])

  return (
    <>
    <Navbar/>
    <div className='container mt-5'>
        <Detail detail={detail}/>
    </div>
    <Footer/>
    </>
  )
}