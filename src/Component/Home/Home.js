import React, { useEffect } from "react";
import style from "./Home.module.css";
import ProductItem from "../Product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  callAllCategories,
  callGetByCategories,
  searchItem,
} from "../../Redux/action";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const [age, setAge] = React.useState("");
  const [search, setSearch] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [allCategory, setAllCategory] = React.useState([]);

  const dispatch = useDispatch();
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  const category = useSelector((state) => state.category);

  useEffect(() => {
    async function fetchData() {
      dispatch(callAllCategories());

      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );

      setAllCategory(res.data);
    }

    fetchData();
  }, [dispatch]);

  const handleChange = (event) => {
    console.log(event.target.value, "AAAAAAA");

    setLoading(true);

    if (event.target.value === "All") {
      dispatch(callAllCategories());
    } else {
      dispatch(callGetByCategories(event.target.value));
    }

    setAge(event.target.value);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    dispatch(searchItem(e.target.value));
    setSearch(e.target.value);
  };

  const handleSearchItem = () => {
    dispatch(searchItem(search));
  };

  return (
    <>
      <div className={style.contentDiv}>
        <div className={style.categoriesDiv}>
          <h1>Select Categories</h1>
          {console.log(allCategory, "FFFFFFFFFF")}

          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              //   label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"All"}>All</MenuItem>
              {allCategory.length > 1 &&
                allCategory.map((data, index) => {
                  return (
                    <MenuItem value={data} key={index}>
                      {data}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </div>

        <div style={{ width: "85%" }}>
          <div className={style.categoriesDiv1}>
            <h1>Select Categories</h1>
            {console.log(allCategory, "FFFFFFFFFF")}

            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                //   label="Age"
                onChange={handleChange}
              >
                <MenuItem value={"All"}>All</MenuItem>
                {allCategory.length > 1 &&
                  allCategory.map((data, index) => {
                    return (
                      <MenuItem value={data} key={index}>
                        {data}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </div>

          <div className={style.inputDiv}>
            <input type="text" onChange={handleSearch} />
            <button className={style.searchButton} onClick={handleSearchItem}>
              Search
            </button>
          </div>

          {loading ? (
            <div className={style.productDiv1}>
              <CircularProgress size={100} />
            </div>
          ) : (
            <div className={style.productDiv}>
              {category.map((data) => {
                return (
                  <ProductItem
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    image={data.image}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
