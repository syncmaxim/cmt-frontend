import React from 'react';
import { useSelector } from "react-redux";
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);
  const userData = useSelector(state => state.user);

  return (
    <div className='app-container'>
      <Header isLoggedIn={isLoggedIn} userData={userData} />
      <Main isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
