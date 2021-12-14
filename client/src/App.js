import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './pages/NavBar';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <h2>sds</h2>
      {/* <Routes>
        <Route />
        <Route />
        <Route />

      </Routes> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
