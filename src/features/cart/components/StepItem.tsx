import { Link as MaterialLink, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";

import { Step } from "../types";

interface Props {
  currentStepIndex: number;
  index: number;
  item: Step;
  steps: Step[];
}

export const StepItem = React.memo(function StepItem({
  currentStepIndex,
  index,
  item,
  steps,
}: Props) {
  return (
    <Link
      key={index}
      href={currentStepIndex >= index + 1 ? `/cart/${item.id}` : "#"}
      passHref
      legacyBehavior
    >
      <MaterialLink
        sx={(theme) => ({
          background:
            currentStepIndex >= index
              ? theme.palette.secondary.main
              : theme.palette.secondary.light,
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.25,
          ":before":
            currentStepIndex >= index && index < steps.length - 1
              ? {
                  background: theme.palette.secondary.main,
                  borderRadius: "2px 5px 2px 0px",
                  zIndex: 1000,
                  position: "absolute",

                  [theme.breakpoints.up("lg")]: {
                    content: '""',
                    width: "32px",
                    height: "32px",
                    right: "-16px",
                    top: "6px",
                    transform: "rotate(45deg)",
                    background: theme.palette.secondary.main,
                  },
                  [theme.breakpoints.down("lg")]: {
                    content: '""',
                    width: 0,
                    height: 0,
                    right: "-9px",
                    top: "0px",
                    background: "transparent",
                    transform: "none",
                    borderTop: "24px solid transparent",
                    borderLeft: `10px solid ${theme.palette.secondary.main}`,
                    borderBottom: "24px solid transparent",
                  },
                }
              : {},
        })}
        underline="none"
        onClick={(e) => !(currentStepIndex >= index + 1) && e.preventDefault()}
      >
        <Typography
          sx={(theme) => ({
            fontSize: "13px",
            color: theme.palette.common.white,
            background: theme.palette.primary.dark,
            borderRadius: "50%",
            textAlign: "center",
            width: "10px",
            height: "10px",
            lineHeight: 0.75,
            p: 0.625,
            opacity: currentStepIndex >= index ? 1 : 0.5,
            display: { xs: "none", lg: "block" },
          })}
          component="span"
        >
          {index + 1}
        </Typography>

        <Typography
          sx={(theme) => ({
            fontSize: { xs: "19px", lg: "21px" },
            color: theme.palette.primary.dark,
            opacity: currentStepIndex >= index ? 1 : 0.5,
          })}
        >
          {item.name}
        </Typography>
      </MaterialLink>
    </Link>
  );
});
