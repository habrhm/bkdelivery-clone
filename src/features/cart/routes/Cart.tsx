import { Box, Container, Stack } from "@mui/material";
import * as React from "react";

import { DeliveryStep } from "../components/DeliveryStep";
import { PaymentStep } from "../components/PaymentStep";
import { PreviewStep } from "../components/PreviewStep";
import { StepItem } from "../components/StepItem";
import { useCart } from "../hooks/useCart";

export const CartPage = () => {
  const {
    currentStepIndex,
    note,
    orderDelivery,
    orderGrandTotal,
    orderSubTotal,
    orderTax,
    step,
    steps,
    setNote,
  } = useCart();

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
