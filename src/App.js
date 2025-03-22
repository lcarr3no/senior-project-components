import './App.css';
import React from 'react';
import UploadPage from './pages/uploadPage';
import HomePage from './pages/homePage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
    path: '/',
    element: <HomePage />
   },
   {
      path: '/upload',
      element: <UploadPage />
   }
  ]);

  return (
    
      <div className="App">

     
        <RouterProvider router={router}/ >

      </div>

  );
}

export default App;