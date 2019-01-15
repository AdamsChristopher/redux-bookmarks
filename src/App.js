import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import BookmarkListContainer from './containers/BookmarkListContainer';
import TagListContainer from './containers/TagListContainer';
import BookmarkForm from './containers/BookmarkForm';
import BookmarkEdit from './containers/BookmarkEdit';
import TagForm from './containers/TagForm';
import TagEdit from './containers/TagEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Menu">
          <Link to="/">Bookmarks</Link>
          <Link to="/add-bookmark">Add Bookmark</Link>
          <Link to="/tags">Tags</Link>
          <Link to="/add-tag">Add Tag</Link>
        </div>
        <Route
          path="/"
          exact
          component={BookmarkListContainer}
        />
        <Route
          path="/tags"
          exact
          component={TagListContainer}
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
        <Route
          path="/edit-tag/:id"
          exact
          component={TagEdit}
        />
        <Route
          path="/add-tag"
          exact
          component={TagForm}
        />

      </div>
    );
  }
}

export default App;
