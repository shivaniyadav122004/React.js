import React from "react";
import Input from "./Components/Input";
import Taskbox from "./Components/Taskbox";
import { useContext } from "react";
import { MyAllTask } from "./Context/Context";

const App = () => {

  
    

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-xl font-bold">To Do App</h1>
      <div>
        <Input />
      </div>
      <div>
        <Taskbox></Taskbox>
      </div>
    </div>
  );
};

export default App;
