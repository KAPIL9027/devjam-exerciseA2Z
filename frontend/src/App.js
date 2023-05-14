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
        <Route path="/bodyPart" element={<Parts/>}/>
        <Route path="/target" element={<Muscles/>} />
        <Route path="/equipment" element={<Equipment/>}/>
        <Route path="/:menu/:specific" element={<Specific/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
