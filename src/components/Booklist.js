import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Booklist = () => {
  const { books, dispatch } = useContext(BookContext)

  const onDragEnd = result => {
    const {destination, source} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const beingMoved = books[source.index];
    const newBooklist = Array.from(books);
    
    newBooklist.splice(source.index, 1);
    newBooklist.splice(destination.index, 0, beingMoved);

    dispatch({type: 'REORDER_LIST', newBooklist});
  };
  
  return books.length ? (
    <div className="book-list">
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="main-booklist"
          type="task"
          direction="vertical"
        >
          {provided => (
            <ul 
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
              {books.map((book, index) => {
                return (
                  <BookDetails book={book} key={book.id} index={index} />
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  ) : (
    <div className="empty">Your list is empty</div>
  );
}
 
export default Booklist;