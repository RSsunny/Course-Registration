import { useEffect } from "react";
import { useState } from "react";
import Cart from "./cart";


const Carts = () => {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('LoadData.json')
            .then(res=>res.json())
            .then(data=>setCart(data))
    },[])
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center md:w-3/4 ">
            {
                cart && cart?.map((data, i)=><Cart key={i} cart={data}></Cart>)
            }
        </div>
    );
};

export default Carts;