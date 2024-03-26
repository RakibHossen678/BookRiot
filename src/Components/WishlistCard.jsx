import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdInsertPageBreak } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const WishlistCard = ({book}) => {
    const {
      bookId,
        bookName,
        author,
        image,
        tags,
        category,
        rating,
        totalPages,
        publisher,
        yearOfPublishing,
      } = book;
    return (
        <div className="flex lg:flex-row flex-col items-center border-2 rounded-xl mb-7 my-10 gap-5 py-2 mx-2">
      <div className="mx-2 my-2 bg-gray-200 rounded-lg">
      <div className="w-40 flex justify-center items-center  py-auto">
        <img className="py-5 w-ful " src={image} alt="" />
      </div>
      </div>
      <div className="">
        <h1 className="py-2 font-medium text-xl">{bookName}</h1>
        <p className="text-base py-1">By: {author}</p>
        <div
          className="
        flex space-x-7  py-4"
        >
          <div className="flex space-x-5 items-center ">
          <p className="font-bold">Tag</p>
          <div className="space-x-4">
            {tags.map((tag, idx) => (
              <span className="bg-green-300  px-3 py-1 rounded-full" key={idx}>
                #{tag}
              </span>
            ))}
          </div>
          </div>
          <div>
            <p className="flex items-center "> <CiLocationOn className="text-lg mr-2" /> Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex space-x-12 py-1 border-b-2 pb-2 text-gray-600">
            <p className="flex items-center"><BsPeople className="text-lg mr-2" />Publisher:{publisher}</p>
            <p className="flex items-center"><MdInsertPageBreak className="text-lg mr-2" />Page {totalPages}</p>
        </div>
        <div className="flex justify-between items-center py-2">
            <h1 className="bg-blue-300 px-2  rounded-full">Category: {category}</h1>
            <h1 className="bg-yellow-200 px-2 rounded-full">Rating: {rating}</h1>
            <Link to={`/book/${bookId}`}>
            <button className="px-2 py-2 rounded-full bg-green-400 ">View Details</button>
            </Link>

        </div>
      </div>
    </div>
    );
};
WishlistCard.propTypes ={
    book:PropTypes.object
}
export default WishlistCard;