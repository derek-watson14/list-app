import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [hideForm, setHideForm] = useState(true);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', book: { title, author, reading: false }});
    setTitle('');
    setAuthor('');
  };

  const toggleHideForm = () => {
    setHideForm(!hideForm);
  }

  return (
      <div>
        <div onClick={toggleHideForm} className="menu-button">
          <h3>Add a book</h3>
          <div className="icon-container">
            {hideForm ? <FaPlus/> : <FaMinus/>}
          </div>
        </div>
        <form 
          onSubmit={handleSubmit} 
          style={ hideForm ? 
              {height: '0px', opacity: '0', visibility: 'hidden'} : 
              {height: '150px', opacity: '1'} }
        >
          <input type="text" placeholder="book title" value={title}
            onChange={(e) => setTitle(e.target.value)} required />
          <input type="text" placeholder="author" value={author}
            onChange={(e) => setAuthor(e.target.value)} required />
          <input type="submit" value="add book"/>
        </form>
      </div>
  );
}
 
export default NewBookForm;