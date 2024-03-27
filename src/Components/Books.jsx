import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
//   console.log(books);
  return (
    <div>
      <div className="text-center font-bold text-4xl py-10">
        <h1>Books</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 px-10 gap-10">
        {
            books.map(book=><BookCard key={book.bookId} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default Books;
