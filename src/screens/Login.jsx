import { useState } from 'react';
import './../styles/HomeScreenStyles.css';
import HALTitleLogo from './../assets/HALTitleLogo.png';
import HALLogo from './../assets/HALLogo.png';
import { Link } from 'react-router-dom';

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={HALLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={HALTitleLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Link to={`/dashboard`}>Login</Link>
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

      </div>
    </>
  )
}

export default Login;
