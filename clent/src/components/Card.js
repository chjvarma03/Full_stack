import React from 'react'
import { Fragment } from 'react'
import pic2 from '../assets/pic2.jpg'
const data = 10;
const Card = (props) => {
  return <Fragment>
    <div className='card'>
          <img src={pic2} alt="some error"/>
          <h4>{props.cname}</h4>
          <h5>price : {props.price}</h5>
          <h5>24h High : {props.current}</h5>
          <h5>24h Low : {data} </h5>
          <button id ="buy">Buy Now</button>
    </div>
  </Fragment>
}

export default Card
