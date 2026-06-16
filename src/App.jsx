import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import UserRegisterPage from './pages/UserRegisterPage';
import UserDataRegisterPage from './pages/UserDataRegisterPage';

function App() {
  return <>
    <LoginPage/>
    <UserRegisterPage/>
    <UserDataRegisterPage/>
  </>
}

export default App
