import { createContext, useState } from "react";
import { useContext } from "react";
import Header from "./components/header";
import Result from "./components/ResultData";


export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);
  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
       <Result/>
      </div>
    </InputContext.Provider>
  );
}

export default App;
