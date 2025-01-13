import { Route, Routes } from "react-router";
import "./App.css";
import RaMContainer from "./components/ram-container/RaMContainer";
import RaMPage from "./components/ram-container/ram-page/RaMPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RaMContainer />} />
        <Route path="/:id" element={<RaMPage />} />
      </Routes>
    </>
  );
}

export default App;
