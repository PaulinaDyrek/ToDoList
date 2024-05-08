import styles from "./Form.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";
export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={styles.form}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={styles.input}
        type="text"
      />
      <Button>Dodaj</Button>
    </form>
  );
}
