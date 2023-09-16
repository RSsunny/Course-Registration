import {BsCurrencyDollar,BsBook} from 'react-icons/bs';

import PropTypes from 'prop-types';

const Cart = ({cart,handleAdd}) => {
    const {cover,credits,details,price,title_name}=cart
    
    return (
        <div className='p-2 bg-white text-black rounded-md'>
            <div className="card ">
                    <figure ><img className='w-full hover:scale-125 overflow-hidden duration-700' src={cover} alt="Shoes" /></figure>
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold my-3">{title_name}</h2>
                        <p className='text-sm font-normal'>{details}</p>
                        <div className='flex justify-evenly   items-center gap-1'>
                        <span><BsCurrencyDollar></BsCurrencyDollar></span>
                        <span className='text-base font-normal'>Price : {price}</span>
                        <span><BsBook></BsBook></span>
                        <span> Credit : {credits}hr</span>
                        </div>
                        <div className="card-actions ">
                        <button onClick={()=>handleAdd(cart)} className="btn btn-accent w-full text-xl font-normal">Select</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired
}

export default Cart;