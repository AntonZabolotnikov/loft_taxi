import React from 'react';
import { Profile } from "./Profile/Profile";
import { Map } from "./Map/Map";
import { Login } from "./Login/Login";
import { Signup } from "./Signup/Signup";
import { Header } from "./Header/Header";

const PAGES = {
  profile: setPage => <Profile setPage={setPage} />,
  map: setPage => <Map setPage={setPage} />,
  login: setPage => <Login setPage={setPage} />,
  signup: setPage => <Signup setPage={setPage} />,
};

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <>
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </>
  );
}

export default App;