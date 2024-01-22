const Form: React.FC = () => {
  const calculateDeliveryHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={calculateDeliveryHandler}>
      <div>
        <label htmlFor="cart-value"> Cart value</label>
        <input type="number" name="cart-value" id="cart-value" />
      </div>
      <div>
        <label htmlFor="delivery-distance">Delivery Distance</label>
        <input type="number" name="delivery-distance" id="delivery-distance" />
      </div>
      <div>
        <label htmlFor="items"> Amount of items</label>
        <input type="number" name="items" id="items" />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input type="date" name="time" id="time" />
      </div>
      <button type="submit">Calculate delivery price</button>
    </form>
  );
};

export default Form;
