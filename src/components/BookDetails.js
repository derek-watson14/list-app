import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import MarkRead from '../components/MarkRead';
import { FaTrashAlt } from 'react-icons/fa';
import { Draggable } from 'react-beautiful-dnd';

const BookDetails = ({ book, index }) => {
  const { dispatch } = useContext(BookContext);
  const [hovered, setHovered] = useState(false);

  const flipHovered = () => {
    setHovered(!hovered)
  }

  return (
    <Draggable
      draggableId={book.id}
      index={index}
      key={book.id}
    >
      {(provided, snapshot) => (
        <div 
          className="container"
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <li className={snapshot.isDragging ? 
            book.reading ? "dragging in-progress" : "dragging" :
            book.reading ? "in-progress" : ""
          }>
            <div className={hovered ? "book-info book-info-remove" : "book-info"}>
              <div className="title">{ book.title }</div>
              <div className="author">{ book.author }</div>
            </div>
            <div 
              className="remove-book" 
              onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}
              onMouseOverCapture={flipHovered}
              onMouseOutCapture={flipHovered}
            >
              <span title="Remove from list">
                <FaTrashAlt />
              </span>
            </div>
            <div className="toggle-reading">
              <MarkRead id={book.id} reading={book.reading}/>
            </div>
          </li>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}
 
export default BookDetails;
