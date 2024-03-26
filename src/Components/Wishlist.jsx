import { useEffect, useState } from "react";
import { getSaveDataOfWishlist } from "../utils/wishlistLoacalStorage";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBook = getSaveDataOfWishlist();
    if (setBooks) {
      setBooks(storedBook);
    }
  }, []);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <WishlistCard key={book.bookId} book={book}></WishlistCard>
      ))}
    </div>
  );
};

export default Wishlist;
