import "./App.scss";
import Content from "./components/Content/Content";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div>
      <div className="container">
        <main>
          <SideBar />
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
