import React, { useState } from 'react'
import { Fragment } from 'react'
import Card from './Card'
import { useEffect } from 'react'
const Home = () => { 

  const [carddata,setcarddata] = useState([]);
  useEffect(()=>
  {
    fetch('http://localhost:8900/homedatafetching').then((response)=> response.json()).then((data)=>{
      setcarddata(data);
      console.log(data)

    }); 
  },[]);

  return <Fragment>
    <h1>Top-3 Coins</h1>
    <div className='holder'>
      {carddata.map((res) => <Card key={res._id} cname={res.coinname} price ={res.price} current={res.current} /> )}
    </div>
    <h1>Top Watchlist</h1>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <h1>24h High</h1>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <h1>24h Low</h1>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div className='holder'>
      <Card/>
      <Card/>
      <Card/>
    </div>
  
  </Fragment>
}

export default Home
