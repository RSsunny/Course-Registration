import PropTypes from 'prop-types';

const List = ({list,total,credit,creditRemining}) => {
    
    return (
        <div className="md:w-1/4 bg-white text-black p-4">
            <h1 className='text-lg font-bold text-[#2F80ED] border-b border-black py-3'>Credit Hour Remaining {creditRemining}hr</h1>
            <h1 className='text-xl font-bold my-5'>Course Name</h1>
            <ul className='border-b border-black pb-5'>
                {
                    list.map((data,i)=><h1 key={i} className='text-base font-normal border p-2 my-2 rounded-md'>{i+1}. {data.title_name}</h1>)
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
}
export default List;