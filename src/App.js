
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './componants/Courses';
import Home from './componants/Home';
import Login from './componants/Login';
import FAQ from './componants/FAQ';
import Register from './componants/Register';
import Main from './Layout/Main';
import PrivetRoute from './routes/PrivetRoute';
import Blog from './componants/Blog';
import ReadMore from './componants/ReadMore/ReadMore';
import CheckOut from './componants/ChechOut/CheckOut';
import PDF from './componants/PDF/PDF';
import NotFound404 from './componants/NotFound404/NotFound404';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/courses/:id',
          element: <Courses></Courses>,
        },
        {
          path: '/checkout/:id',
          element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path: '/pdf/:id',
          element: <PDF></PDF>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <NotFound404></NotFound404>
        },
        {
          path: '/readmore/:id',
          element: <ReadMore></ReadMore>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        }

      ]
    }

  ]);



  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
