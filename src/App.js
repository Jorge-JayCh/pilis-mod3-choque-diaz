import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import UbicacionCreation from "./routes/Ubicacion/UbicacionCreation";
import UbicacionDisplay from "./routes/Ubicacion/UbicacionDisplay";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home/>}/>
            <Route path='ubicacion/create' element={<UbicacionCreation/>}/>
            <Route path='ubicacion/:id' element={<UbicacionDisplay/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
