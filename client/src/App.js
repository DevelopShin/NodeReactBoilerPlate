import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './pages/NavBar';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Register from './pages/Register/Register';
import { Auth } from './auth/auth';
function App() {
  return (
    <div className="App">
      <BrowserRouter BrowserRouter>
        <Auth privateApp = {NavBar} />
        <Routes>
          <Route path="/" element={<Auth privateApp={MainPage} option={false}/>} />
          <Route path="/about/*" element={<Auth privateApp={Page2} option={true} />} />


          <Route path="/register/*" element={<Auth privateApp={Register} option={false}/>} />
          <Route path="*" element={<h4>잘못된 접근</h4>} />

        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;



/*
auth option
null :   Anyone Can go inside 개나소나 접근가능
true  : only logged in user can go inside  로그인 유저만 접근
false : logged in user can't go inside  로그인유저는 접근 금지
*/