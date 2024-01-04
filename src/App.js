import './App.css';
import './Style.css';
import Login from './Login/Login';
import Header from './Common/Header';
import Signup from './Signup/Signup';
import Location from './Health/Location';
// Npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/Health-policy" element={<Location />} />
          <Route path="/" element={<Signup />} />
        </Routes>

      </Router>
    </>

  );
}
export default App;
