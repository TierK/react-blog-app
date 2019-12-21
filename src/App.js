import React from 'react';
import './App.css';
import Header from './Header/Header';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import Main from './Main/Main';
import RightSideBar from './RightSideBar/RightSideBar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="blog-wrapper">
      <Header />
      <LeftSideBar/>
      <Main/>
      <RightSideBar/>
      <Footer/>
    </div>
  );
}

export default App;
