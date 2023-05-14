import Header from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./screens/Home";
import Parts from "./screens/Parts";
import Muscles from "./screens/Muscles";
import Equipment from "./screens/Equipment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/body" element={<Parts/>}/>
        <Route path="/muscles" element={<Muscles/>} />
        <Route path="/equipments" element={<Equipment/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
