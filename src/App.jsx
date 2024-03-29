import { useState } from 'react';
import './App.css';
import Login from './screens/Login';
import Home from './screens/Home';
import ErrorPage from './error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Home />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='globe-container'>
        <div className='globe'></div>

      </div> */}
    </>
  )
}

export default App
