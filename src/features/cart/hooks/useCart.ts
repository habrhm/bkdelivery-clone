import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";

import { useOrderStore } from "@/hooks/useOrderStore";
import { getItemSubtotal } from "@/utils/getItemSubtotal";

export const useCart = () => {
  const router = useRouter();
  const { step } = router.query;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const steps = [
    {
      id: "preview",
      name: "Cart",
    },
    {
      id: "delivery",
      name: !isDesktop ? "Delivery" : "Delivery Info",
    },
    {
      id: "payment",
      name: "Payment",
    },
  ];

  const [note, setNote] = React.useState("");

  const currentStepIndex = steps.findIndex((item) => item.id === step);
  const orders = useOrderStore((state) => state.orders);

  const orderSubTotal = React.useMemo(() => {
    let total = 0;
    orders.forEach((item) => [(total = total + getItemSubtotal(item))]);

    return total;
  }, [orders]);

  const orderDelivery = 12000;
  const orderTax = Math.ceil(orderSubTotal * (1 / 10));
  const orderGrandTotal = orderSubTotal + orderDelivery + orderTax;

  return {
    currentStepIndex,
    note,
    orderDelivery,
    orderGrandTotal,
    orderSubTotal,
    orderTax,
    step,
    steps,
    setNote,
  };
};
