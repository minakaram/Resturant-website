
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Story from './Story';
import Menu from './Menu';
import Contact from './Contact';
import Navbar from './Navbar';
import Update from './Update';
import "./style/app.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/Story" element={<Story/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Update" element={<Update/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
