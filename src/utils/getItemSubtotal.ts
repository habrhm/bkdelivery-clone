import { Order } from "@/types";

export const getItemSubtotal = (order: Order) => {
  let orderPrice = order.product.price;

  order.extras.forEach((item) => {
    orderPrice = orderPrice + item.product.price * item.count;
  });

  return orderPrice * order.count;
};
