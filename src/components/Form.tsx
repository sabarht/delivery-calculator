import React, { useState } from "react";
import FormInput from "./FormInput";
import calculate from "./Calculate";
interface FormProps {
  setDeliveryPrice: React.Dispatch<React.SetStateAction<number | null>>;
}
const Form: React.FC<FormProps> = ({ setDeliveryPrice }) => {
  const [cartValue, setCartValue] = useState("");
  const [deliveryDistance, setDeliveryDistance] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [orderTime, setOrderTime] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredCartValue = parseFloat(cartValue);
    const enteredDistance = parseInt(deliveryDistance);
    const enteredItems = parseInt(numberOfItems);
    const price = calculate(
      enteredCartValue,
      enteredDistance,
      enteredItems,
      orderTime
    );
    setDeliveryPrice(price);
    setCartValue("");
    setDeliveryDistance("");
    setNumberOfItems("");
    setOrderTime("");
  };

  return (
    <section>
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <FormInput
          label="Cart Value"
          type="number"
          name="cart-value"
          id="cart-value"
          testId="cartValue"
          min="0"
          value={cartValue}
          onChange={(e) => setCartValue(e.target.value)}
        />
        <FormInput
          label="Delivery Distance"
          type="number"
          name="delivery-distance"
          id="delivery-distance"
          testId="DeliveryDistance"
          min="0"
          value={deliveryDistance}
          onChange={(e) => setDeliveryDistance(e.target.value)}
        />
        <FormInput
          label="Number Of Items"
          type="number"
          name="items"
          id="items"
          testId="NumberOfItems"
          min="0"
          value={numberOfItems}
          onChange={(e) => setNumberOfItems(e.target.value)}
        />
        <FormInput
          label="Order Time"
          type="datetime-local"
          name="datetime"
          id="datetime"
          testId="OrderTime"
          min="0"
          value={orderTime}
          onChange={(e) => setOrderTime(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculate delivery price
        </button>
      </form>
    </section>
  );
};

export default Form;
