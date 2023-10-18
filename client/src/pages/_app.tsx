import { HomePage } from "../containers/HomePage/HomePage";
import { DetailPage } from "../containers/DetailPage/DetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:shortName" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
