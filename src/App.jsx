import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogBreedInfo from "./pages/DogBreedInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/breed/:id" element={<DogBreedInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
