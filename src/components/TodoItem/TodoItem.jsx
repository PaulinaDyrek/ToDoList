import { Button } from "../Button/Button";
import styles from "../TodoItem/TodoItem.module.css";
import { MdOutlineTaskAlt } from "react-icons/md";
import { ImBin } from "react-icons/im";
export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && (
        <MdOutlineTaskAlt className={styles.font} onClick={onDoneButtonClick} />
      )}
      <ImBin className={styles.font} onClick={onDeleteButtonClick} />
    </li>
  );
}
