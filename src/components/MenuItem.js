import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: "300px",
  height: "300px",
});

class Cart extends React.Component {
  render() {
    const imgData = require("../assets/" + this.props.item.image);
    const onSale = this.props.item.onsale === "yes";
    return (
      <Grid item xs={6}>
        <Img src={imgData} />
        <Grid item sm container marginTop={2}>
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.item.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Popularity: {this.props.item.popular}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Type: {this.props.item.type}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Typography variant="body1" component="div">
                ${this.props.item.price}
                {onSale === true && "  (onsale)"}
              </Typography>
              <Grid container marginTop={3}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    this.props.onClickDec(this.props.item.name);
                  }}
                >
                  -
                </Button>
                <Typography variant="body1" component="div" margin="0px 15px">
                  {this.props.count}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    this.props.onClickInc(this.props.item.name);
                  }}
                >
                  +
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Cart;
