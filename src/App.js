import React, { Component } from 'react';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './containers/BookmarkForm';
import bookmarks from './data/bookmarks.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: bookmarks
    };
    this.addBookmark = this.addBookmark.bind(this);
  }

  addBookmark(bookmark) {
    this.setState(prevState => ({
      bookmarks: [...prevState.bookmarks, bookmark]
    }));
  }

  render() {
    const { bookmarks } = this.state;
    return (
      <div className="App">
        <BookmarkForm addBookmark={this.addBookmark} />
        <BookmarkList bookmarks={bookmarks} />
      </div>
    );
  }
}

export default App;
