import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
