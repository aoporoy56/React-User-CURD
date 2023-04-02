import Header from "./Compents/Header";
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Create from "./Create";
import View from "./View";
import Update from "./Update";

function App() {
  return (
    <div className="">
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view" element={<View />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
