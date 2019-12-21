import React from 'react';
import './App.css';
import 'normalize.css';
import Header from './Header/Header';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer from './Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import Dialogs from './Main/Dialogs/Dialogs';
import Settings from './Main/Settings/Settings';
import Profile from './Main/Profile/Profile';
import Feeds from './Main/Feeds/Feeds';

function App() {
  return (
    <BrowserRouter>
      <div className="blog-wrapper">
        <Header />
        <LeftSideBar/>
        <div className="blog-wrapper-content">
            <Route path='/feeds' component={Feeds}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/settings' component={Settings}/>
        </div>
        <RightSideBar/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
