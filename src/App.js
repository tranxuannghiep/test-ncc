import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div>
      <div className="container">
        <main>
          <SideBar />
          <div>
            <Content />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
