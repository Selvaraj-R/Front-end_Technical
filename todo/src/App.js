import Todo from "./components/todo";
import header from "./components/todo";
import "./index.css";

const primaryColor = "#e1f8dc";

function App() {
  return (
    <div
      className="main-div"
      style={{
        width: "100%",
        height: "100%",
        background: primaryColor,
        position: "absolute",
      }}
    >
      <div className="div-holder">
          <Todo />
      </div>
    </div>
  );
}

export default App;
