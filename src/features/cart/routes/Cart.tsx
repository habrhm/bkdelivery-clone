import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import * as React from "react";

import { useOrderStore } from "@/hooks/useOrderStore";
import { getItemSubtotal } from "@/utils/getItemSubtotal";

import { DeliveryStep } from "../components/DeliveryStep";
import { PaymentStep } from "../components/PaymentStep";
import { PreviewStep } from "../components/PreviewStep";
import { StepItem } from "../components/StepItem";

export const CartPage = () => {
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

  return (
    <Stack>
      <Container maxWidth="lg">
        <Stack
          sx={{
            px: { xs: 0, lg: 12 },
            pr: { xs: 0, lg: 10 },
            py: 4,
            alignItems: "stretch",
          }}
          spacing={3}
        >
          <Stack sx={{ alignItems: "stretch", height: "48px" }} direction="row">
            {steps.map((item, index) => (
              <StepItem
                key={index}
                currentStepIndex={currentStepIndex}
                index={index}
                item={item}
                steps={steps}
              />
            ))}
          </Stack>

          <Box
            sx={(theme) => ({
              background: theme.palette.common.white,
              boxShadow: theme.shadows[2],
              minHeight: "100px",
              borderRadius: "5px",
            })}
          >
            {step === "preview" && (
              <PreviewStep note={note} setNote={setNote} />
            )}
            {step === "delivery" && <DeliveryStep />}
            {step === "payment" && (
              <PaymentStep
                note={note}
                orderDelivery={orderDelivery}
                orderGrandTotal={orderGrandTotal}
                orderSubTotal={orderSubTotal}
                orderTax={orderTax}
              />
            )}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
