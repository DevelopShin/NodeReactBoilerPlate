import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './pages/NavBar';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Register from './pages/Register/Register';
import Auth from './auth/auth';
function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="page2/*" element={Auth(Page2, true)} />
        <Route path="/register/*" element={<Register />} />
      </Routes>
 
    </div>
  );
}

export default App;

