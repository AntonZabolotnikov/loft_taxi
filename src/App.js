import React, { useState, createContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Profile from "./Profile/Profile";
import Map from "./Map/Map";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Header from "./Header/Header";

export const { Provider, Consumer } = createContext();

const App = () => {
  const [page, setPage] = useState("login");

  const [isLogged, setLogged] = useState(false);
  const authStatus = {
    login: (email, password) => {
      if (email === '1' && password === '1') {
        setLogged(true);
        setPage('map');
      }
    },

    logout: () => {
      setLogged(false);
      setPage('login');
    }
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    authStatus.login(formElements.login.value, formElements.password.value);
  }

  const PAGES = {
    profile: setPage => <Profile name="Profile" />,
    map: setPage => <Map name="Map" />,
    login: setPage => <Login name="Login" submitLogin={submitLogin}/>,
    signup: setPage => <Signup name="Signup" />,
  };

  return (
    
    <Provider value={authStatus}>
      <CssBaseline />
      <Container maxWidth="lg">
        {isLogged && <Header page={page} setLogged={setLogged} setPage={setPage} />}
        {PAGES[page](setPage)}
      </Container>
    </Provider>
    
  );
}

export default App;