import {React, useEffect} from 'react';
import { Route, Routes, useNavigate,  } from 'react-router-dom';
import App from './App.jsx';
import IssueDegree from './pages/issueDegree.jsx';
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
// import NotFound from './NotFound.jsx';

const Test = () => {
  return (
    <div>
      {/* <h1>Hello from App</h1> */}
      <Routes>
        <Route index element={<RedirectToStaticPage />} /> {/* This is the equivalent of `exact path="/"` in v5 */}
        <Route path="/issue" element={<App />} />
        <Route path="/issueDegree" element={<IssueDegree />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<RedirectToStaticPage/>} />
      </Routes>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
};

const StaticPage = () => {
    return <iframe src="../static/index.html" title="Static Page" />;
  };

  const RedirectToStaticPage = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      // Redirect to the static HTML page
      window.location.href = '../static/index.html';
    }, []);
  
    return null;
  };

  export default Test;


