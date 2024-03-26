import { useEffect, useState } from "react";
import { getSaveData } from "../utils/localStorage";
import ReadBookCard from "./ReadBookCard";

const ReadBook = ({sortBook}) => {
    console.log(sortBook)

    const [books ,setBooks]=useState([]);
    useEffect(()=>{
        const storedBook=getSaveData()
        if (setBooks){

            setBooks(storedBook)
        }
    },[])
    
    // console.log(books)
    return (
        <div>
            {
                sortBook.map(book=><ReadBookCard key={book.bookId} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default ReadBook;