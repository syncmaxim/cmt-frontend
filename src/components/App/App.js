import React from 'react';
import { useSelector } from "react-redux";
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);

  return (
    <div className='app-container'>
      <Header isLoggedIn={isLoggedIn} />
      <Main isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
