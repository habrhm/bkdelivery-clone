import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";

import { CheckIcon } from "@/assets/icons";
import { useOrderStore } from "@/hooks/useOrderStore";
import { Order } from "@/types";
import { getCurrency } from "@/utils/getCurrency";

interface Props {
  note: string;
  orderDelivery: number;
  orderGrandTotal: number;
  orderSubTotal: number;
  orderTax: number;
}
const paymentMethods = [
  {
    name: "dana",
    image:
      "https://bkdelivery.co.id/static/website/img/DANA-logo2x.75d886367436.png",
  },
  {
    name: "ovo",
    image: "https://bkdelivery.co.id/static/website/img/OVO.e12152c36de0.png",
  },
  {
    name: "gopay",
    image: "https://bkdelivery.co.id/static/website/img/gopay.f42e2033836e.png",
  },
];

export const PaymentStep = React.memo(function PaymentStep({
  note,
  orderDelivery,
  orderGrandTotal,
  orderSubTotal,
  orderTax,
}: Props) {
  const [selectedPayment, setSelectedPayment] = React.useState("");

  const orders = useOrderStore((state) => state.orders);

  const getItemSubtotal = React.useCallback((order: Order) => {
    let orderPrice = order.product.price;

    order.extras.forEach((item) => {
      orderPrice = orderPrice + item.product.price * item.count;
    });

    return orderPrice * order.count;
  }, []);

  return (
    <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
      <Stack
        sx={{ width: { xs: "auto", lg: "50%" }, px: 3.5, py: 3 }}
        spacing={2}
      >
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ p: "0px" }}>Order Summary</TableCell>
                <TableCell
                  sx={{ width: "47px", p: "0px" }}
                  align="left"
                ></TableCell>
                <TableCell
                  sx={{ width: "80px", p: "0px" }}
                  align="right"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((item) => (
                <TableRow>
                  <TableCell
                    sx={{ height: "44px", px: 0, py: 1.5 }}
                    component="th"
                    scope="row"
                  >
                    <Stack direction="row" spacing={1}>
                      <Stack
                        sx={{
                          flex: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "12px", fontWeight: "300", mb: 0.5 }}
                        >
                          {item.product.name}
                        </Typography>
                        {item.extras.length > 0 &&
                          item.extras.map((itemExtras) => (
                            <Typography
                              sx={(theme) => ({
                                fontSize: "11px",
                                fontWeight: "300",
                                color: theme.palette.grey[600],
                              })}
                            >
                              {itemExtras.count}
                              {" x "}
                              {itemExtras.product.name}
                            </Typography>
                          ))}
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell
                    sx={{ px: 0, py: 1.5, verticalAlign: "top" }}
                    align="left"
                  >
                    <Typography
                      sx={{ fontSize: "12px", fontWeight: "300", mb: 0.5 }}
                    >
                      X {item.count}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ px: 0, py: 1.5, verticalAlign: "top" }}
                    align="right"
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "300",
                      }}
                    >
                      {getCurrency(getItemSubtotal(item))}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack sx={{ fontSize: "15px", fontWeight: "300" }} spacing={0.5}>
          <Stack sx={{ justifyContent: "space-between" }} direction="row">
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              Subtotal
            </Typography>
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              {getCurrency(orderSubTotal)}
            </Typography>
          </Stack>
          <Stack sx={{ justifyContent: "space-between" }} direction="row">
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              Delivery Fee
            </Typography>
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              {getCurrency(orderDelivery)}
            </Typography>
          </Stack>
          <Stack sx={{ justifyContent: "space-between" }} direction="row">
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              PPN 10%
            </Typography>
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              {getCurrency(orderTax)}
            </Typography>
          </Stack>
          <Stack
            sx={{
              justifyContent: "space-between",
              fontSize: "23px",
              fontWeight: "400",
            }}
            direction="row"
          >
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              TOTAL
            </Typography>
            <Typography sx={{ color: "inherit", font: "inherit" }}>
              {getCurrency(orderGrandTotal)}
            </Typography>
          </Stack>
        </Stack>
        {note && (
          <Stack>
            <Typography
              sx={(theme) => ({
                fontSize: "11px",
                fontWeight: "300",
                color: theme.palette.grey[600],
                p: 2,
              })}
            >
              NOTES: {note}
            </Typography>
          </Stack>
        )}
      </Stack>

      <Stack
        sx={(theme) => ({
          width: { xs: "auto", lg: "50%" },
          px: 3.5,
          py: 3,
          borderLeft: `0.5px solid ${theme.palette.grey[300]}`,
        })}
        spacing={2}
      >
        <Stack spacing={0.5}>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            Deliver To
          </Typography>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            {
              "Jl. Pantai Mutiara S No.17, RT.10/RW.16, Pluit, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14450, Indonesia"
            }
          </Typography>
        </Stack>
        <Stack
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "column", lg: "row" },
            gap: 2,
          }}
        >
          <Button
            sx={(theme) => ({ color: theme.palette.primary.main })}
            variant="outlined"
          >
            Apply Kupon / Promo Code
          </Button>
          <Typography sx={{ fontSize: "28px", fontWeight: "800" }}>
            {getCurrency(orderGrandTotal)}
          </Typography>
        </Stack>
        <Stack spacing={0.5}>
          <Typography
            sx={{ fontWeight: "300", fontSize: { xs: "15px", lg: "13px" } }}
          >
            Pay With
          </Typography>
          <Grid sx={{ width: "100%" }} container spacing={2}>
            {paymentMethods.map((item) => {
              const isSelected = item.name === selectedPayment;

              return (
                <Grid
                  key={item.name}
                  sx={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "stretch",
                  }}
                  component="div"
                  xs={6}
                  lg={4}
                >
                  <Box
                    sx={(theme) => ({
                      py: 0.5,
                      px: 2.5,
                      width: "100%",
                      border: `0.5px solid ${
                        isSelected
                          ? theme.palette.primary.main
                          : theme.palette.grey[300]
                      }`,
                      borderRadius: "3px",
                      cursor: "pointer",
                      background: "transparent",
                      position: "relative",
                    })}
                    component="button"
                    onClick={() => {
                      setSelectedPayment(item.name);
                    }}
                  >
                    <Box>
                      <Image
                        src={item.image}
                        width={60}
                        height={18}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                        }}
                        alt="home"
                      />
                    </Box>
                    {isSelected && (
                      <Box
                        sx={(theme) => ({
                          position: "absolute",
                          top: -8,
                          right: -8,
                          background: theme.palette.primary.main,
                          width: "16px",
                          height: "16px",

                          borderRadius: "50%",
                        })}
                      >
                        <CheckIcon sx={{ color: "white", fontSize: "15px" }} />
                      </Box>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>

        <Stack spacing={1}>
          <Button sx={{ mt: 3 }} variant="contained" size="large">
            Place My Order
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
});
