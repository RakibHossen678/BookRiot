import { useEffect, useState } from "react";
import { getSaveData } from "../utils/localStorage";
import ReadBookCard from "./ReadBookCard";

const ReadBook = () => {
    const [books ,setBooks]=useState([]);
    useEffect(()=>{
        const storedBook=getSaveData()
        if (setBooks !== 'undefined'){

            setBooks(storedBook)
        }
    },[])
    console.log(books)
    return (
        <div>
            {
                books.map(book=><ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default ReadBook;