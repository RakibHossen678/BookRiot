import { toast } from "react-toastify"
import { getSaveData } from "./localStorage"

export const getSaveDataOfWishlist=()=>{
    let books=[]
    const storedBook=localStorage.getItem('WishlistBook')
    if(storedBook){
        books=JSON.parse(storedBook)
    }
    return books
}

export const saveWishlistBookToLocal=(book)=>{
    let books=getSaveDataOfWishlist()
    const readListData=getSaveData()
    const isExist=books.find(Book=>Book.bookId===book.bookId)
    const isFind=readListData.find(data=>data.bookId===book.bookId)
    if(isFind){
        return toast.error('Already Added')
    }
    else if(isExist){
            
        return toast.error('Already Added')
    }
    else{
        books.push(book)
        localStorage.setItem('WishlistBook',JSON.stringify(books))
        return toast.success('Successfully added to Wish list')
    }
}