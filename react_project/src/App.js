import "./App.css";
import { Routes, Route } from "react-router-dom";
import Member from "./pages/Member/Member";
import Add from "./pages/Add/Add";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Member />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

