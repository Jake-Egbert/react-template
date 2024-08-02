import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Navigation />
        <h1>Footer</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
