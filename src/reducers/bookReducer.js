import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        reading: false,
        id: uuid()
      }]
    case 'MARK_READING':
      const target = action.id;
      const updatedList =
        state.map(book => {
          if (book.id === target) book.reading = !book.reading;
          return book;
        })
      return updatedList;
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id)
    case 'REORDER_LIST':
      return action.newBooklist
    default:
      return state
  }
}