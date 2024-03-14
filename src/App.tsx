import React from "react";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {" "}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Wolt Delivery Calculator
      </h1>
      <p className="mb-4 text-lg font-medium ">
        Fill in the inputs to find out your Delivery fee
      </p>
    </div>
  );
};

export default App;
