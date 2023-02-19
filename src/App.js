import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Main from './Pages/Main';
import Nopage from './Pages/Nopage';
import Projects from './Pages/Projects';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
      ]
    },
    {
      path: '*',
      element: <Nopage></Nopage>
    }
  ])
  return (
    <div >
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
