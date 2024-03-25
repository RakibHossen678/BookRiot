import { useLoaderData, useParams } from "react-router-dom";
const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books.find((book) => book.bookId === bookId);
  console.log(bookId, book);
  const {
    description,
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
    <div className="flex py-20">
      <div className="w-[50%]">
        <div className="">
          <img className="w-[70%] object-cover" src={image} alt="" />
        </div>
      </div>
      <div className="w-[50%]">
        <div>
          <h1 className="text-4xl font-semibold  py-3">{bookName}</h1>
          <div className="text-lg pb-3">
            <p className="">By: {author}</p>
          </div>
          <div className="text-lg border-t-2 border-b-2 py-2 mb-3">
            <h2>{category}</h2>
          </div>
        </div>
        <div className="pb-7"><span className="font-medium leading-normal">Review:</span>{description}</div>
        <div className="
        flex space-x-7 pb-8">
          <p className="font-bold">Tag</p>
          <div className="space-x-4">
            {tags.map((tag, idx) => (
              <span className="bg-green-300  px-3 py-1 rounded-full" key={idx}>#{tag}</span>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="flex  ">
            <p>Number of Pages:</p> <p className="pl-20 ml-2 font-bold">{totalPages}</p>
          </p>
          <p className="flex  ">
            <p>Publisher:</p> <p className="pl-36 font-bold">{publisher}</p>
          </p>
          <p className="flex  ">
            <p>Year of Publishing:</p> <p className="pl-20 ml-2 font-bold">{yearOfPublishing}</p>
          </p>
          <p className="flex  ">
            <p>Rating:</p> <p className="pl-40 ml-2 font-bold">{rating}</p>
          </p>
        </div>
        <div className="space-x-7 py-4">
          <button type="button" className=" hover:border-2 font-semibold rounded bg-[#50B1C9] hover:bg-transparent hover:text-black px-7 text-white py-3">
          Read
          </button>
          <button type="button" className=" font-semibold hover:border-2 rounded bg-[#50B1C9] hover:bg-transparent hover:text-black px-7 text-white py-3 ">
          Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
