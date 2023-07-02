import {
  Box,
  Button,
  IconButton,
  Link as MaterialLink,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { TrashIcon } from "@/assets/icons";
import { CountInput } from "@/components/CountInput";
import { useOrderStore } from "@/hooks/useOrderStore";
import { Order } from "@/types";
import { getCurrency } from "@/utils/getCurrency";
import { getItemSubtotal } from "@/utils/getItemSubtotal";

interface Props {
  note: string;
  setNote: (note: string) => void;
}

export const PreviewStep = React.memo(function PreviewStep({
  note,
  setNote,
}: Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const orders = useOrderStore((state) => state.orders);
  const addOrder = useOrderStore((state) => state.addOrder);
  const removeOrder = useOrderStore((state) => state.removeOrder);

  const handleAddOrder = React.useCallback(
    (order: Order) => {
      addOrder({
        ...order,
        count: 1,
      });
    },
    [addOrder]
  );
  const handleSubstractOrder = React.useCallback(
    (order: Order) => {
      removeOrder({
        ...order,
        count: 1,
      });
    },
    [removeOrder]
  );
  const handleTrashOrder = React.useCallback(
    (order: Order) => {
      removeOrder({
        ...order,
      });
    },
    [removeOrder]
  );

  const orderTotal = React.useMemo(() => {
    let total = 0;
    orders.forEach((item) => [(total = total + getItemSubtotal(item))]);

    return total;
  }, [orders]);

  const handleNoteChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 15) {
        e.preventDefault();
      } else {
        setNote(e.target.value);
      }
    },
    [setNote]
  );

  return (
    <Stack sx={{ flexDirection: { xs: "column", lg: "row" } }}>
      <Stack
        sx={{ flex: 1, px: { xs: 2, lg: 3.5 }, py: { xs: 1, lg: 3 } }}
        spacing={2}
      >
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ px: { xs: 0, lg: 2 } }}>Menu Item</TableCell>
                <TableCell
                  sx={{ width: { xs: "72px", lg: "102px" }, p: "0px" }}
                  align="left"
                >
                  Quantity
                </TableCell>
                <TableCell
                  sx={{ width: { xs: "72px", lg: "102px" }, p: "0px" }}
                  align="right"
                >
                  Subtotal
                </TableCell>
                {isDesktop && (
                  <TableCell
                    sx={{ width: "28px", p: "0px" }}
                    align="center"
                  ></TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((item) => (
                <TableRow>
                  <TableCell
                    sx={{ height: "44px", py: 2, px: { xs: 0, lg: 2 } }}
                    component="th"
                    scope="row"
                  >
                    <Stack direction="row" spacing={1}>
                      {isDesktop && (
                        <Box>
                          <Image
                            src={item.product.thumbImg.url}
                            width={50}
                            height={36}
                            alt={item.product.thumbImg.alt}
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      )}

                      <Stack
                        sx={{
                          flex: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "12px", lg: "14px" },
                            fontWeight: "300",
                            mb: 0.5,
                          }}
                        >
                          {item.product.name}
                        </Typography>
                        {item.extras.length > 0 &&
                          item.extras.map((itemExtras) => (
                            <Typography
                              sx={(theme) => ({
                                fontSize: "12px",
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
                    sx={{ px: 0, py: 2, verticalAlign: "top" }}
                    align="left"
                  >
                    <CountInput
                      size="small"
                      count={item.count}
                      onAdd={() => handleAddOrder(item)}
                      onSubstract={() => handleSubstractOrder(item)}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ px: 0, py: 2, verticalAlign: "top" }}
                    align="right"
                  >
                    <Typography
                      sx={{
                        py: 0.5,
                        fontWeight: "300",
                        fontSize: { xs: "12px", lg: "14px" },
                      }}
                    >
                      {getCurrency(getItemSubtotal(item))}
                    </Typography>
                  </TableCell>
                  {isDesktop && (
                    <TableCell
                      sx={{ px: 0, py: 2, verticalAlign: "top" }}
                      align="right"
                    >
                      <IconButton
                        sx={() => ({
                          my: 0.25,
                          height: "24px",
                          width: "24px",
                        })}
                        onClick={() => handleTrashOrder(item)}
                      >
                        <TrashIcon sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link href={`/menus`} passHref legacyBehavior>
          <MaterialLink underline="none">
            <Button
              sx={(theme) => ({
                alignSelf: "flex-start",
                color: theme.palette.primary.main,
                fontWeight: "300",
                fontSize: { xs: "12px", lg: "18px" },
              })}
            >
              Continue Shopping
            </Button>
          </MaterialLink>
        </Link>
        <Stack>
          <Typography sx={{ fontWeight: "300", fontSize: "13px" }}>
            Add Notes
          </Typography>
          <OutlinedInput
            sx={(theme) => ({
              fontWeight: "300",
              fontSize: "15px",
              "& fieldset": {
                border: `0.5px solid ${theme.palette.grey[300]} !important`,
              },
            })}
            name="notes"
            size="small"
            placeholder="Add notes to your order here..."
            value={note}
            onChange={handleNoteChange}
          />
          <Typography
            sx={(theme) => ({
              alignSelf: "flex-end",
              pb: 6,
              pt: 2,
              px: 2,
              fontSize: "0.75rem",
              color: theme.palette.grey[500],
            })}
          >
            {note.length}/15
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={(theme) => ({
          width: { xs: "auto", lg: "25%" },
          px: 3.5,
          py: 3,
          borderLeft: `0.5px solid ${theme.palette.grey[300]}`,
          borderTop: {
            xs: `0.5px solid ${theme.palette.grey[300]}`,
            lg: "none",
          },
        })}
        spacing={2}
      >
        <Stack spacing={0.5}>
          <Stack
            sx={{
              flexDirection: { xs: "row", lg: "column" },
              alignItems: { xs: "center", lg: "flex-start" },
              justifyContent: { xs: "space-between", lg: "flex-start" },
            }}
          >
            <Typography
              sx={{ fontWeight: "300", fontSize: { xs: "15px", lg: "13px" } }}
            >
              Order Subtotal*
            </Typography>
            <Typography sx={{ fontSize: { xs: "23px", lg: "28px" } }}>
              {getCurrency(orderTotal)}
            </Typography>
          </Stack>
          <Typography
            sx={(theme) => ({
              fontWeight: "300",
              fontSize: { xs: "15px", lg: "11px" },
              color: theme.palette.grey[500],
            })}
          >
            *Price might change due to your delivery location.
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Button variant="contained" size="large">
            Login To Order
          </Button>
          <Link href={`/cart/delivery`} passHref legacyBehavior>
            <MaterialLink underline="none">
              <Button
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  width: "100%",
                })}
                size="large"
                variant="text"
              >
                Continue as Guest
              </Button>
            </MaterialLink>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
});
