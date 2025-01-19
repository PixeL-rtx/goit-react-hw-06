import { useState } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuery(event.target.value.trim().toLowersCase());
    dispatch(changeFilter(event.target.value.trim().toLowersCase()));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          name="search"
          placeholder=""
          value={query}
          onChange={handleChange}
        />
        Find contacts by name
      </label>
    </div>
  );
};

export default SearchBox;
