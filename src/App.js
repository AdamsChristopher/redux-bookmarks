import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookmarkListContainer from './containers/BookmarkListContainer';
import BookmarkForm from './containers/BookmarkForm';
import BookmarkEdit from './containers/BookmarkEdit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Menu">
          <Link to="/">Bookmarks</Link>
          <Link to="/add-bookmark">Add Bookmark</Link>
        </div>
        <Route
          path="/"
          exact
          component={BookmarkListContainer}
        />
        <Route
          path="/edit-bookmark/:id"
          exact
          component={BookmarkEdit}
        />
        <Route
          path="/add-bookmark"
          exact
          component={BookmarkForm}
        />
      </div>
    );
  }
}

export default App;
