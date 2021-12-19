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
      <Route path="/register/*" element={<Register />} />


      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

/*  
if auth
        null   Anyone Can go inside 개나소나 접근가능
        true   only logged in user can go inside  로그인 유저만 접근
        false  logged in user can't go inside  로그인유저는 접근 금지 
*/