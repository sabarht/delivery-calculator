import React, { useState } from "react";
import DeliveryPrice from "./components/DeliveryPrice";
import Form from "./components/Form";
import "./App.css";

const App: React.FC = () => {
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Wolt Delivery Calculator
      </h1>
      <p className="mb-4 text-lg font-medium ">
        Fill in the inputs to find out your Delivery fee
      </p>
      <Form setDeliveryPrice={setDeliveryPrice} />
      <DeliveryPrice deliveryPrice={deliveryPrice} />
    </div>
  );
};

export default App;
