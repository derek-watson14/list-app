import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

// * The context is the data and funtions, not stylistic

const BookContextProvider = (props) => {
  // * Empty array is the 'state' in bookReducer, third param is function 
  // * which can set default 
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  // * When books changes, set the value in local storage
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])
  return (
    <BookContext.Provider value={{books, dispatch}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;



  // * Add/remove functions without reducer (must import useState & uuid)
  // const [books, setBooks] = useState([
  //   {title: 'name of the wind', author: 'patrick rothfuss', id: uuid()},
  //   {title: 'the final empire', author: 'brandon sanderson', id: uuid()}
  // ]);
  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuid()}])
  // };
  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id));
  // };
  // return (
  //   <BookContext.Provider value={{books, addBook, removeBook}}>
  //     { props.children }
  //   </BookContext.Provider>
  // )