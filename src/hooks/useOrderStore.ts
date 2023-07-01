import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Order } from "@/types";
import { isArrayEqual } from "@/utils/isArrayEquals";

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (order: Order) => void;
  clearOrder: () => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (order) => {
        const currentOrders = get().orders.slice();

        const duplicateOrder = currentOrders.findIndex(
          (item) =>
            item.product.id === order.product.id &&
            isArrayEqual(
              item.extras.map((extra) => [extra.count, extra.product.id]) ?? [],
              order.extras.map((extra) => [extra.count, extra.product.id]) ?? []
            )
        );

        if (duplicateOrder >= 0) {
          currentOrders[duplicateOrder] = {
            ...(currentOrders[duplicateOrder] as Order),
            count: order.count + (currentOrders[duplicateOrder] as Order).count,
          };
          set({ orders: currentOrders });
        } else {
          set({ orders: [...currentOrders, order] });
        }
      },
      removeOrder: (order) => {
        const currentOrders = get().orders.slice();

        const duplicateOrder = currentOrders.findIndex(
          (item) =>
            item.product.id === order.product.id &&
            isArrayEqual(
              item.extras.map((extra) => [extra.count, extra.product.id]) ?? [],
              order.extras.map((extra) => [extra.count, extra.product.id]) ?? []
            )
        );

        if (duplicateOrder >= 0) {
          currentOrders[duplicateOrder] = {
            ...(currentOrders[duplicateOrder] as Order),
            count: (currentOrders[duplicateOrder] as Order).count - order.count,
          };

          if ((currentOrders[duplicateOrder]?.count ?? 1) <= 0) {
            currentOrders.splice(duplicateOrder, 1);
          }

          set({ orders: currentOrders });
        }
      },
      clearOrder: () => {
        set({ orders: [] });
      },
    }),
    {
      name: "order",
    }
  )
);
