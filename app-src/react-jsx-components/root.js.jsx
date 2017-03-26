import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/dashboard" component={MainApp}>
        <IndexRoute component={MainView}/>
        <Route path="newsfeeds" component={NewsfeedsView}></Route>
        <Route path="lessons" component={LessonsView}></Route>
      </Route>
    </Router>
  </Provider>
  );

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;