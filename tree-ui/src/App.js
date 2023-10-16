import React from "react";
import Provider from "./components/ContextProvider";
import DeptSectionV2 from "./components/Deptv2";
import "./stylesheet/component.scss";
function App() {
  return (
    <div className="App">
      <Provider>
        <DeptSectionV2 />
      </Provider>
    </div>
  );
}

export default App;
