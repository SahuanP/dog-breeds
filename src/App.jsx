import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BreedList from "./components/BreedList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<BreedList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
