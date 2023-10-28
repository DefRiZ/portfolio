import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./Pages/Main";
import Contacts from "./Pages/Contacts/Contacts";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
