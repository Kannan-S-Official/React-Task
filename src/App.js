import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:postId" component={PostPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
