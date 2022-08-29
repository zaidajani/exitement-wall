import "./App.css";
import { FromPage } from "./screens/form.screen";
import { Galery } from "./screens/gallery.screen";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FromPage />} />
        <Route path="/gallery" element={<Galery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
