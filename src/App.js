import { HashRouter, Route, Routes } from "react-router-dom";
import Preva from "./pages/Homepage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Preva />} />
      </Routes>
    </HashRouter>
  );
};

export default App;