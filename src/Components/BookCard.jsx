import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, tags, category, rating } = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="max-w-xs hover:scale-105 hover:border-green-500 p-3 rounded-md border-2  ">
        <div className="h-52 bg-gray-200 rounded-xl py-2">
          <img
            src={image}
            alt=""
            className="object-cover object-center  rounded-md h-full bg-cover bg-center mx-auto"
          />
        </div>
        <div className="mt-6 mb-2">
          <div className="space-x-5 pb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-green-200 text-green-900 font-medium px-2 py-1 rounded-xl"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
        </div>
        <div className="border-b-2 pb-4 border-dashed">
          <p className="">By: {author}</p>
        </div>
        <div className="pt-3 flex justify-between">
          <span>{category}</span>
          <div className="flex items-center space-x-1">
            <span>{rating}</span>
            <span>
              <CiStar className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
};
export default BookCard;
