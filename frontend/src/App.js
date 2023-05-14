import Header from "./components/Header";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./screens/Home";
import Parts from "./screens/Parts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/parts" element={<Parts/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
