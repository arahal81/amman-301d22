import React from 'react';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton'
import Profile from './profile';

class App extends React.Component {
  render() {
    return (
      <>
        <h2>Auth Demo</h2>
        <LoginButton />
        <Profile/>
        <LogoutButton/>
      </>
    )
  }
}

export default App;
