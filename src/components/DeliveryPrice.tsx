import React from "react";

interface DeliveryPriceProps {
  deliveryPrice: number | null;
}

const DeliveryPrice: React.FC<DeliveryPriceProps> = ({ deliveryPrice }) => {
  if (deliveryPrice === null) {
    return null; // or some placeholder if you prefer
  }

  return <p>Delivery Price: {deliveryPrice.toFixed(2)}€</p>;
};

export default DeliveryPrice;
