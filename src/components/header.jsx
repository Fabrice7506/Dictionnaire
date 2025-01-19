import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { InputContext } from "../App";

export default function Header() {
  const [data, setData] = useState("");

  const {inputValue, setInputValue} = useContext(InputContext);

  const handleData = (e) => setData(e.target.value);

  function handleSubmit(){
    setInputValue(data);
    setData("");
  }

  function handleKeyDown(e){
    if(e.key == "Enter"){
        setInputValue(data);
        setData('');
    }
  }
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white ">
          Dictionnaire Only
        </h1>
        <p className="text-center mt-1 mb-10 text-slate-200 text-lg">
        Find the definition of a word !
        </p>

        <div className="flex items-center justify-center mt-5">
          <div className="flex border-2 border-gray-200 rounded">
            <input
              className="px-4 py-2 md:w-80"
              type="text"
              name=""
              placeholder="Search..."
              id=""
              onChange={handleData}
              onKeyDown={handleKeyDown}
            />
            <button className="bg-blue-400 border-l px-4 py-2 text-white" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
        { inputValue && (
           <h3 className="text-gray-50 text-center mt-4">
            Result of : <span className="text-white font-bold">{inputValue}</span>
          </h3>
        )}
        
      </div>
    </div>
  );
}
