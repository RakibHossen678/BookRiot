import { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";

const AuthorData = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("books.json")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, []);
    console.log(books)
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 py-10">
            {
                books.map(book=><AuthorCard key={book.bookId} book={book}></AuthorCard>)
            }
        </div>
    );
};

export default AuthorData;