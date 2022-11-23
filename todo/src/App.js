import Todo from "./components/review";
import "./index.css";

const primaryColor = "#e1f8dc";

const mainDivStyle = {
  width: "100%",
  height: "100%",
  background: primaryColor,
  position: "absolute",
}

function App() {
  return (
    <div
      className="main-div"
      style={mainDivStyle}
    >
      <div className="div-holder">
          <Todo />
      </div>
    </div>
  );
}

export default App;
