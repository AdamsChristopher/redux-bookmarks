import React, { Component } from 'react';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './containers/BookmarkForm';
import bookmarks from './data/bookmarks.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookmarkList bookmarks={bookmarks} />
        <BookmarkForm />
      </div>
    );
  }
}

export default App;
