import React, { Fragment } from 'react'
import Sidebar from './Sidebar';
import Home from './Home';
import Coins from './Coins';
import Topgainers from './Topgainers'
import Toplosers from './Toplosers'; 
import Wallet from './Wallet';
import Watchlist from './Watchlist'
import Myportfolio from './Myportfolio';
import Signup from './Sign up';
import Signin from './Sign in';
import Myprofile from './Myprofile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const Container = () => {
  return <Fragment>
    <div className='parts'>
    <div className='part1'><Sidebar/></div>
    <div className='part2'>
    <BrowserRouter>
    <Routes>
       <Route path="/" exact element={<Home/>}></Route>
       <Route path="/myportfolio" exact element={<Myportfolio/>}></Route>
       <Route path="/coins" exact element={<Coins/>}></Route>
       <Route path="/Watchlist" exact element={<Watchlist/>}></Route>
       <Route path="/topgainers" exact element={<Topgainers/>}></Route>
       <Route path="/toplosers" exact element={<Toplosers/>}></Route>
       <Route path="/wallet" exact element={<Wallet/>}></Route>
       <Route path="/sign in" exact element={<Signin/>}></Route>
       <Route path="/sign up" exact element={<Signup/>}></Route>
       <Route path='/myprofile' exact element={<Myprofile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </div>
  </Fragment>
}

export default Container;
