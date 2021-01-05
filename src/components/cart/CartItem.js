import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ConfirmDialog from "../common/ConfirmDialog";

//redux imports
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/actions/cartActions";
import CartButton from "../common/CartButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
  },
  image: { height: 100, marginBottom: theme.spacing(1), width: 100 },
  imgWrapper: {
    marginRight: theme.spacing(2),
  },
}));

const CartItem = ({ data }) => {
  const { id, name, price, image } = data;

  const classes = useStyles();
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.imgWrapper}>
          <div>
            <img src={image} className={classes.image} alt="Product" />
          </div>
          <CartButton data={data} />
        </div>
        <div>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Category
          </Typography>
          <Typography variant="button" display="block" gutterBottom>
            Shop Name
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Rs {price} /-
          </Typography>

          <Button color="secondary" onClick={() => setShowDialog(true)}>
            REMOVE
          </Button>
        </div>
      </div>
      <Divider />
      <ConfirmDialog
        show={showDialog}
        handleAgree={removeItemHandler}
        handleCancel={() => setShowDialog(false)}
        handleClose={() => setShowDialog(false)}
        title="Remove Item"
        agreeButtonText="Remove"
        description="Are you sure you want to remove this item?"
      />
    </>
  );
};

export default CartItem;
