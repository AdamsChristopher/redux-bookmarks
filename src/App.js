import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookmarkList from './components/BookmarkList';
import BookmarkForm from './containers/BookmarkForm';
import bookmarks from './data/bookmarks.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
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
        <div>
          <Link to="/">Bookmarks</Link>
          <Link to="/add-bookmark">Add Bookmark</Link>
        </div>
        <Route
          path="/"
          exact
          render={props => <BookmarkList {...props} bookmarks={bookmarks} />}
        />
        <Route
          path="/add-bookmark"
          exact
          render={props => <BookmarkForm {...props} addBookmark={this.addBookmark} />}
        />
      </div>
    );
  }
}

export default App;
