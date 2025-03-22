import './App.css';
import React from 'react';
import NavBar from './ui-components/navBar/navBar';
import UploadPage from './pages/uploadPage';
import HomePage from './pages/homePage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter();
  return (
    
      <div className="App">

     
        <RouterProvider router={router}/ >

      </div>

  );
}

export default App;