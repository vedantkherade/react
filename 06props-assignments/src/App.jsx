import "./App.css";
import ArrayProp from "./components/Skills";
import DiscMsg from "./components/DiscMsg";
import Greeting from "./components/Greeting";
import MutipleData from "./components/MutipleData";
import ReturnAge from "./components/ReturnAge";
import ShowMessage from "./components/ShowMessage";
import Skills from "./components/Skills";
import User from "./components/User";
import Button from "./components/Button";
import ProductCard from "./components/ProductCard ";
import Child from "./components/Child";
import PropsDrilling from "./components/PropsDrilling";
import Card from "./components/ChildrenPropDrill";
import ChildrenPropDrill from "./components/ChildrenPropDrill";
import UserRole from "./components/UserRole";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ShowMessage/>
        <DiscMsg/>
        <ReturnAge/>

        <Greeting name="Aarav" city="Delhi" />
        <MutipleData name ="Rohan" age = {21} isOnline = "true"/>
        <Skills list={["HTML", "CSS", "React"]}/>
        <User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />
        <Button text="Login" color="green" />
        <Button text="Signup" color="blue" />
        <ProductCard title="iPhone" inStock={false} />
        <Child  onPress={() => alert("Pressed!")}/>
        <PropsDrilling />
        <ChildrenPropDrill/>
        <UserRole name = "Aarav" role = "admin"/>
        <UserRole name = "Aarav" role = "user"/>
      </div>
    </div>
  )
}

export default App