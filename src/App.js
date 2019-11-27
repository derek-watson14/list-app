import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <hr/>
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
