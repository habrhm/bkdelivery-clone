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
                  content: '""',
                  width: "32px",
                  height: "32px",
                  position: "absolute",
                  right: "-16px",
                  top: "6px",
                  transform: "rotate(45deg)",
                  background: theme.palette.secondary.main,
                  borderRadius: "2px 5px 2px 0px",
                  zIndex: 1000,
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
          })}
          component="span"
        >
          {index + 1}
        </Typography>

        <Typography
          sx={(theme) => ({
            fontSize: "21px",
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
