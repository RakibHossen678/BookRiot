import { toast } from "react-toastify"

export const getSaveData=()=>{
    let books=[]
    const storedBook=localStorage.getItem('book')
    if(storedBook){
        books=JSON.parse(storedBook)
    }
    return books
}

export const saveBookToLocal=(book)=>{
    let books=getSaveData()
    const isExist=books.find(Book=>Book.bookId===book.bookId)
    if(isExist){
        return toast.error('Already Added')
    }
    else{
        books.push(book)
        localStorage.setItem('book',JSON.stringify(books))
        return toast.success('Successfully added to listed book')
    }
}