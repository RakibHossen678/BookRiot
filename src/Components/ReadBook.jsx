import {  useState } from "react";
import { getSaveData } from "../utils/localStorage";
import ReadBookCard from "./ReadBookCard";
import { RiArrowDropDownLine } from "react-icons/ri";

const ReadBook = () => {
    
   
    
    const [books, setBooks] = useState(()=>getSaveData()||[]);
    const [sortBook, setSortBook] = useState(()=>getSaveData()||[]);
   
   
  const handleSorting = (data) => {
    if (data === "rating") {
      const ratingSort = books.sort((a, b) => b.rating - a.rating);
      setSortBook(()=>ratingSort);
        console.log(sortBook)
    } else if (data === "pages") {
      const pageSort = books.sort((a, b) => b.totalPages - a.totalPages);
      setSortBook(pageSort);
    } else if (data === "year") {
      const yearSort = books.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setSortBook(yearSort);
    }
  };

 
  return (
    <>
      <div>
        
        <div className="dropdown flex justify-center my-14 absolute top-40 right-[670px]">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-500 text-lg text-white"
          >
            Sort By <RiArrowDropDownLine className="text-4xl font-medium" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleSorting("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSorting("pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSorting("year")}>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>
        <div>
          {sortBook.map((book) => (
            <ReadBookCard key={book.bookId} book={book}></ReadBookCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReadBook;
