import {useLoaderData,useParams} from 'react-router-dom'
const BookDetails = () => {
    const books = useLoaderData()
    const {bookId}=useParams()
    const book=books.find(book=>book.bookId===bookId)
    console.log(bookId,book)

    return (
        <div>
            <h1>Bookddd</h1>
        </div>
    );
};

export default BookDetails;