import React from "react";
import Grid from "@mui/material/Grid";
import MenuItem from "./MenuItem";

import Cart from "./Cart";

class Filteredlist extends React.Component {
  constructor() {
    super();
    this.state = { items: {}, price: 0 };
  }

  render() {
    return (
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={8} paddingBottom={10}>
          <Grid container justifyContent="center" spacing={2}>
            {this.props.list.map((item) => {
              let count = 0;
              if (item.name in this.state.items) {
                count = this.state.items[item.name];
              }
              return (
                <MenuItem
                  item={item}
                  count={count}
                  onClickDec={this.onClickDec}
                  onClickInc={this.onClickInc}
                ></MenuItem>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Cart state={this.state}></Cart>
        </Grid>
      </Grid>
    );
  }

  onClickInc = (name) => {
    let item = null;
    for (let key in this.props.list) {
      let each = this.props.list[key];
      if (each.name === name) {
        item = each;
        break;
      }
    }
    let items = this.state.items;
    let price = this.state.price;

    if (item.name in items) {
      items[item.name] += 1;
    } else {
      items[item.name] = 1;
    }
    price += item.price;
    this.setState({ items: items, price: price });
  };

  onClickDec = (name) => {
    let item = null;
    for (let key in this.props.list) {
      let each = this.props.list[key];
      if (each.name === name) {
        item = each;
        break;
      }
    }
    let items = this.state.items;
    let price = this.state.price;

    if (item.name in items && items[item.name] > 0) {
      items[item.name] -= 1;
      price -= item.price;
      if (items[item.name] === 0) {
        delete items[item.name];
      }
      this.setState({ items: items, price: price });
    }
  };
}

export default Filteredlist;
