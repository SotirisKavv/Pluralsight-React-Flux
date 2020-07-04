import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import Header from './common/Header';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return(
    <Router>
      <>
        <div className="container-fluid">
          <ToastContainer autoClose={3000} />
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/courses" component={CoursesPage}/>
            <Route path="/course/:slug" component={ManageCoursePage}/>
            <Route path="/course" component={ManageCoursePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
