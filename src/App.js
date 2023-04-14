import React from "react";
import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Dev Skills</h1>
    <SkillList/>
      <hr />
    <NewSkillForm/>
    </div>
  );
}

export default App;
