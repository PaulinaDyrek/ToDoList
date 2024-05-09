import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "../utils/getSubheading";
import { useState } from "react";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: "Do laundry", done: false, id: 1 },
    { name: "Walk with dog", done: true, id: 2 },
    { name: "Cinema with friend", done: false, id: 3 },
  ]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Get Things Done!</h1>
          <p className={styles.p}>{getSubheading(todos.length)}</p>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodoName) => {
            setTodos((prevTodos) => [
              ...prevTodos,
              { name: newTodoName, done: false, id: prevTodos.at(-1).id + 1 },
            ]);
            setIsFormShown(false);
          }}
        />
      )}

      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => {
              setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo.id !== id)
              );
            }}
            onDoneButtonClick={() => {
              setTodos((prevTodos) =>
                prevTodos.map((todo) => {
                  if (todo.id !== id) {
                    return todo;
                  }
                  return {
                    ...todo,
                    done: true,
                  };
                })
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
