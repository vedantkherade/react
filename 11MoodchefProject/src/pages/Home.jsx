import { useState } from "react";
import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import RecipesList from "../components/RecipesList";

export default function Home() {
  const [activeMood, setActiveMood] = useState("Happy");

  return (
    <div className="container">
      <Header />

      <MoodSelector 
        activeMood={activeMood} 
        setActiveMood={setActiveMood} 
      />

      <RecipesList activeMood={activeMood} />
    </div>
  );
}
