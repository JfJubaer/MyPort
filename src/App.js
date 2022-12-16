
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Main from './Pages/Main';
import Nopage from './Pages/Nopage';
import ProjectDetails from './Pages/ProjectDetails';
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
          path: '/about',
          element: <About></About>
        },

        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/details/:id',
          element: <ProjectDetails></ProjectDetails>,
          loader: ({ params }) => fetch(`Fake.json/${params.id}`)
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
