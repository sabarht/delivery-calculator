function calculate(
  cartValue: number,
  deliveryDistance: number,
  numberOfItems: number,
  orderTime: any
): number {
  let deliveryFee = 0;

  const currentDateTime = new Date(orderTime);
  // Check for rush hour
  const isFriday = currentDateTime.getDay() === 5;
  const isRushHour =
    currentDateTime.getHours() >= 15 && currentDateTime.getHours() < 19;
  const rushHourMultiplier = isFriday && isRushHour ? 1.2 : 1;

  // Small order surcharge
  if (cartValue < 10) {
    const surcharge = 10 - cartValue;
    deliveryFee += surcharge;
  }

  //  Base delivery fee and additional distance fee
  if (deliveryDistance <= 1000) {
    deliveryFee += 2;
  } else {
    deliveryFee += 2 + Math.ceil((deliveryDistance - 1000) / 500);
  }

  // Surcharge for number of items
  if (numberOfItems >= 5) {
    const itemSurcharge = (numberOfItems - 4) * 0.5; // Surcharge for items from 5th to 12th
    const bulkFee = numberOfItems > 12 ? 1.2 : 0; // Bulk fee for more than 12 items
    deliveryFee += itemSurcharge + bulkFee;
  }

  //  free delivery >= 200€
  if (cartValue >= 200) {
    return 0;
  }

  // Apply rush hour multiplier to the delivery fee
  deliveryFee *= rushHourMultiplier;

  // Delivery fee can't exceed 15€
  return Math.min(deliveryFee, 15);
}
export default calculate;
