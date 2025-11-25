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
import CustomCard from "./components/CustomCard";
import Drilling4lvl from "./components/Drilling4lvl";
import List from "./components/List";
import Wrapper from "./components/Wrapper";
import CardComp from "./components/CardComp";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ShowMessage />
        <DiscMsg />
        <ReturnAge />

        <Greeting name="Aarav" city="Delhi" />
        <MutipleData name="Rohan" age={21} isOnline="true" />
        <Skills list={["HTML", "CSS", "React"]} />
        <User info={{ name: "Sara", age: 20, email: "sara@mail.com" }} />
        <Button text="Login" color="green" />
        <Button text="Signup" color="blue" />
        <ProductCard title="iPhone" inStock={false} />
        <Child onPress={() => alert("Pressed!")} />
        <PropsDrilling />
        <ChildrenPropDrill />
        <UserRole name="Aarav" role="admin" />
        <UserRole name="Aarav" role="user" />

        <CustomCard title="My Card">
          <p>This is card content.</p>
        </CustomCard>

        <CustomCard>
          <p>This card has no title.</p>
        </CustomCard>

        <Drilling4lvl />
        <List items={[10, 20, 30]}>
          <h2>Numbers List</h2>
        </List>

        <Wrapper onClick={() => alert("Box clicked!")}>
          <h2>Content inside wrapper</h2>
        </Wrapper>

        <CardComp title="Notifications" icon={<span>🔔</span>} />
      </div>
    </div>
  );
}

export default App