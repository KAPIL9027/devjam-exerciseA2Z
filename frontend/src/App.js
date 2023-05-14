import Header from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./screens/Home";
import Parts from "./screens/Parts";
import Muscles from "./screens/Muscles";
import Equipment from "./screens/Equipment";
import Specific from "./screens/Specific";
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
        <Route path="/:id" element={<Specific/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
