
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";
import client from '../apollo-client'

import Home from './Home';
import Test from './Test';
import Navbar from './layout/Navbar';
/* user */
import userCreate from './user/Create';
import userLogin from './login';
import userLogout from './user/Logout';
/* tasks */
import tasks from './tasks/Index';
import taskCreate from './tasks/Create';
import taskShow from './tasks/Show';
import taskEdit from './tasks/Edit';
/* task_pages  */
import taskPages from './task_pages/Index';
/* notes */
import notes from './notes/Index';
import noteCreate from './notes/Create';
import noteShow from './notes/Show';
import noteEdit from './notes/Edit';

class App extends Component {
  render() {
    return (
    <div className="App bg-white">
      <Router>
        <div>
        <ApolloProvider client={client}>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/test' component={Test} />
          {/* users */}
          <Route path='/user_create' component={userCreate} />
          <Route path='/login' component={userLogin} />
          <Route path='/logout' component={userLogout} />
          {/* tasks */}
          <Route path='/tasks' component={tasks} />
          <Route path='/task_create' component={taskCreate} />
          <Route path='/task_show/:id' component={taskShow} />
          <Route path='/task_edit/:id' component={taskEdit} />
          <Route path='/task_pages' component={taskPages} />
          {/* notes */}
          <Route path='/notes' component={notes} />
          <Route path='/note_create' component={noteCreate} />
          <Route path='/note_show/:id' component={noteShow} />
          <Route path='/note_edit/:id' component={noteEdit} />
        </ApolloProvider>
        </div>
      </Router>
    </div>
    );
  }
}
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}