import PropTypes from 'prop-types';

const List = ({list}) => {
    return (
        <div className="md:w-1/4">
            <h1>Credit Hour Remaining 7 hr</h1>
            <h1>Course Name</h1>
            <ul>
                {
                    list.map((data,i)=><h1 key={i}>{i+1} {data.title_name}</h1>)
                }
            </ul>
            <h1>Total Credit Hour : 13</h1>
            <h1>Total Price : 48000 USD</h1>
        </div>
    );
};
List.propTypes={
    list:PropTypes.array.isRequired
}
export default List;