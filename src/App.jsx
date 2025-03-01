import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogBreed from "./pages/DogBreed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<DogBreed />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
