import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./Pages/Main";
import Contacts from "./Pages/Contacts/Contacts";

import { Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import SingleProject from "./Pages/SingleProject/SingleProject";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />{" "}
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<SingleProject />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />{" "}
      </div>
    </div>
  );
}

export default App;
