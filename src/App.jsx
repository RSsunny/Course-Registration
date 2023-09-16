
import {useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'
import List from './components/List/List'
import { toast } from 'react-toastify';
import { addToCart } from './components/LocalStorage/LocalStorage'


function App() {
 const [list,setList]=useState([])
 const [total,setTotal]=useState(0)
 const [credit,setCredit]=useState(0)
 const [creditRemining,setCreditRemining]=useState(20)
 const handleAdd=cart=>{
  const findlist=list.find(data=>data.title_name==cart.title_name)
  if(findlist){
    return   toast.error('cart alrady Exist', {
      position: toast.POSITION.TOP_CENTER, 
      
      autoClose: 3000
    });
  
  }
  else{
    const newCredit=credit+cart.credits
    if(newCredit>20){
      return  toast.error('credit over', {
        position: toast.POSITION.TOP_CENTER, 
        autoClose: 3000
      });
    }
    addToCart(cart.title_name)
    const newTotal=total+ cart.price
    const newList=[...list,cart]
    const totalRemaining=creditRemining-cart.credits
    setCredit(newCredit)
    setCreditRemining(totalRemaining)
    setTotal((newTotal))
    setList(newList)
  }
 }
 const handleRemove=data=>{
  const listRemove=list.filter(item=> item.title_name !== data.title_name)
  const newTotal=total-data.price
  const newCredit=credit-data.credits
  const newCreditRemining=creditRemining+data.credits
  setCreditRemining(newCreditRemining)
  setCredit(newCredit)
  setTotal(newTotal)
  setList(listRemove)
    
 }
  return (
    <>
    <div className='max-w-7xl mx-auto px-5 '>
        <Header></Header>
        <div className='flex flex-col-reverse md:flex-row gap-5'>
            <Carts handleAdd={handleAdd}></Carts>
            <List 
                list={list} total={total} creditRemining={creditRemining} credit={credit} handleRemove={handleRemove}>
            </List>
        </div>
    </div>
    </>
  )
}

export default App
