import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ButtonLink = ({
  href,
  color = "primary",
  variant = "contained",
  children,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      component={Link}
      to={href}
      color={color}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonLink;
