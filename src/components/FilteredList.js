import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import React from "react";
import Grid from "@mui/material/Grid";
import DisplayList from "./DisplayList";

class Filteredlist extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: "popular",
      type: "all",
      onsale: "all",
    };
  }

  render() {
    return (
      <div>
        <img
          src={require("../assets/head.webp")}
          width="400"
          height="400"
        ></img>
        <Grid sx={{ flexGrow: 1, paddingTop: "100px" }} container spacing={2}>
          <Grid item xs={2}>
            <Box
              sx={{ border: 1, borderRadius: "15%", borderColor: "grey.500" }}
              padding="20px 0"
            >
              <FormControl>
                <FormLabel>Sort by</FormLabel>
                <RadioGroup
                  defaultValue="popular"
                  onChange={this.onChangeFilterSort}
                  name="sort-buttons-group"
                >
                  <FormControlLabel
                    value="popular"
                    control={<Radio />}
                    label="Popular"
                  />
                  <FormControlLabel
                    value="price"
                    control={<Radio />}
                    label="Price"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Types</FormLabel>
                <RadioGroup
                  defaultValue="all"
                  onChange={this.onChangeFilterType}
                  name="type-buttons-group"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="fruit"
                    control={<Radio />}
                    label="Fruit"
                  />
                  <FormControlLabel
                    value="meat"
                    control={<Radio />}
                    label="Meat"
                  />
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Onsale</FormLabel>
                <RadioGroup
                  defaultValue="all"
                  onChange={this.onChangeFilterOnsale}
                  name="type-buttons-group"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="All"
                  />
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={10}>
            <DisplayList
              list={this.props.list
                .filter(this.matchesFilter)
                .sort(this.sortList)}
            ></DisplayList>
          </Grid>
        </Grid>
      </div>
    );
  }

  onChangeFilterSort = (event) => {
    this.setState({
      sort: event.target.value,
    });
  };

  onChangeFilterType = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  onChangeFilterOnsale = (event) => {
    this.setState({
      onsale: event.target.value,
    });
  };

  matchesFilter = (item) => {
    if (
      (this.state.type === item.type || this.state.type === "all") &&
      (this.state.onsale === item.onsale || this.state.onsale === "all")
    ) {
      return true;
    } else {
      return false;
    }
  };

  sortList = (item1, item2) => {
    let metric = this.state.sort;
    if (item1[metric] > item2[metric]) {
      return -1;
    } else if (item1[metric] < item2[metric]) {
      return 1;
    } else {
      return 0;
    }
  };
}

export default Filteredlist;
