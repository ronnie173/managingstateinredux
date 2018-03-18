export function selectBook(book) {
    //selectBook is an acction creator, it needs to returnn action, an object with a prioperty
    return{
        type:'BOOK_SELECTED',
        payload:book
    }


}