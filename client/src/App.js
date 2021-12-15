import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './pages/NavBar';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Register from './pages/Register/Register';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/page2/*" element={<Page2 />} />
      <Route path="/Register/*" element={<Register />} />


      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
