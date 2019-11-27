import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { FaBook, FaBookOpen } from 'react-icons/fa';

const MarkRead = ({ id, reading }) => {
  const { dispatch } = useContext(BookContext);
  const markRead = () => {
    dispatch({type: 'MARK_READING', id});
  };
  return (
    <div className="toggle-reading" onClick={markRead}>
      <span title="Mark as currently reading">
        {reading ? <FaBookOpen /> : <FaBook />}
      </span>
    </div>
  );
}
 
export default MarkRead;