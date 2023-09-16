const getStorCart=()=>{
    const cart=localStorage.getItem('cart')
    if(cart){
        return JSON.parse(cart)
    }
    return []
}

const saveTOLs=(newCart)=>{
    const cartstringify=JSON.stringify(newCart)
    localStorage.setItem('cart',cartstringify)
}
const addToCart=id=>{
    const cart=getStorCart()
    const newCart=[...cart,id]
    console.log(newCart);
    saveTOLs(newCart)
}
export {addToCart, getStorCart}
// optional 