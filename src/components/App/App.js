import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div className='app-container'>
      <Header isLoggedIn={isLoggedIn} />
      <Main isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
