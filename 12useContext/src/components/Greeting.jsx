import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Greeting() {
  let { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div>
      {language === "en" ? <h1>Hello</h1> : <h1>Hola</h1>}
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}
