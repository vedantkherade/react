import DoubleTriple from "./components/DoubleTriple"
import "./App.css";
import ToggleText from "./components/ToggleText";
import LiveInput from "./components/LiveInput";
import ColorChanger from "./components/ColorChanger";
import IncrementDecrement from "./components/IncrementDecrement";
import FruitList from "./components/FruitList";
import MiniForm from "./components/MiniForm";
import CountStep from "./components/CountStep";
import LightDarkTheme from "./components/LightDarkTheme";
import ExpenseTracker from "./components/ExpenseTracker";
import PostReactions from "./components/PostReactions";
import FontSizeSlider from "./components/FontSizeSlider";
import RandomNumberList from "./components/RandomNumberList";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CountStep/>
        <DoubleTriple />
        <ToggleText/>
        <LiveInput/>
        <ColorChanger/>
        <IncrementDecrement/>
        <FruitList/>
        <MiniForm/>
        <LightDarkTheme/>
        <ExpenseTracker/>
        <PostReactions/>
        <FontSizeSlider/>
        <RandomNumberList/>
      </div>
    </div>
  )
}

export default App