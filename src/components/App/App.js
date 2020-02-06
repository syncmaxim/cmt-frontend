import React from 'react';
import { useSelector } from "react-redux";
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Backdrop, CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function App() {
  const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);
  const userData = useSelector(state => state.user);
  const isLoading = useSelector(state => state.preloader.isLoading);

  const classes = useStyles();


  return (
    <div className='app-container'>
      <Header isLoggedIn={isLoggedIn} userData={userData} />
      <Main isLoggedIn={isLoggedIn} />


      <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
