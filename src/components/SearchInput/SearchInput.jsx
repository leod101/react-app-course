import React, { useId } from "react";
import cls from "./SearchInput.module.css";
import { SearchIcon } from "../icons";

function SearchInput({ value, onChange }) {
  const inputId = useId();
  return (
    <div className={cls.inputContainer}>
      <label htmlFor={inputId}>
        <SearchIcon className = {cls.searchIcon} />
      </label>

      <input
        id={inputId}
        className={cls.input}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchInput;
