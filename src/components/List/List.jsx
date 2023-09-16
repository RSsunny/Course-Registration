import PropTypes from 'prop-types';
import {AiOutlineMinusSquare} from 'react-icons/ai';
const List = ({list,total,credit,creditRemining,handleRemove}) => {
    return (
        <div className="md:w-1/4 bg-white text-black p-4  border-black">
            <h1 className='text-lg font-bold text-[#2F80ED] border-b border-black py-3'>Credit Hour Remaining {creditRemining}hr</h1>
            <h1 className='text-xl font-bold my-5'>Course Name</h1>
            <ul className='border-b border-black pb-5 '>
                {
                    list.map((data,i)=>
                    <div key={i} className='text-sm font-normal border p-2 my-2 rounded-md flex justify-between items-center bg-white hover:bg-gray-50 '>
                        <h1  >{i+1}. {data.title_name} </h1>
                        <span onClick={()=>handleRemove(data)} className='text-lg cursor-pointer'><AiOutlineMinusSquare></AiOutlineMinusSquare></span>
                    </div>)
                }
               
            </ul>
            <h1 className='text-base font-medium my-3 border-b border-black pb-3'>Total Credit Hour : {credit}</h1>
            <h1 className='text-base font-medium my-3'>Total Price : {total} USD</h1>
        </div>
    );
};
List.propTypes={
    list:PropTypes.array.isRequired,
    total:PropTypes.number.isRequired,
    credit:PropTypes.number.isRequired,
    creditRemining:PropTypes.number.isRequired,
    handleRemove: PropTypes.func.isRequired
}
export default List;