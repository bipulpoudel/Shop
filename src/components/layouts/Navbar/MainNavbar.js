import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import useFetchCartQuantity from "../../../hooks/useFetchCartQuantity";
import CircularProgress from "@material-ui/core/CircularProgress";
import ElevationScroll from "../ElevationScroll";
import ButtonLink from "../../common/ButtonLink";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonGroup: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  const [quantity, loading] = useFetchCartQuantity();

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Ecommerce
              </Typography>
              <div className={classes.buttonGroup}>
                <ButtonLink
                  color="secondary"
                  variant="contained"
                  href="/auth/login"
                >
                  Login
                </ButtonLink>
                <ButtonLink
                  color="inherit"
                  variant="text"
                  href="/cart"
                  startIcon={
                    <>
                      {loading ? (
                        <CircularProgress color="inherit" size={22} />
                      ) : (
                        <Badge badgeContent={quantity} color="secondary">
                          <ShoppingBasket />
                        </Badge>
                      )}
                    </>
                  }
                >
                  Cart
                </ButtonLink>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
