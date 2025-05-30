import { HashRouter, Route, Routes } from "react-router-dom";
import PrevaCare from "./pages/Homepage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PrevaCare />} />
      </Routes>
    </HashRouter>
  );
};

export default App;