import TaskListItem from "../TaskListItem/TaskListItem.js";
import styles from "./Sortpanel.module.css";
import { useState } from "react";

function Sortpanel() {
  type SortType = "all" | "uncompleted" | "completed" | "alphabet";
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState<SortType>("all");
  const labels: Record<SortType, string> = {
    all: "All",
    uncompleted: "Uncompleted",
    completed: "Completed",
    alphabet: "Alphabet"
  };
  return (
    <div>
      <div className={[styles.SortBox, styles.SortContainer,].join(" ")}>
        <button onClick={() => setOpen(!open)}>sort by... <br></br>{labels[sort]}</button>
        {open && (
          <div className={styles.DropDown}>
            <button
              onClick={() => {
                setSort("all");
                setOpen(false);
              }}
            >
              all
            </button>
            <button
              onClick={() => {
                setSort("uncompleted");
                setOpen(false);
              }}
            >
              uncompleted
            </button>
            <button
              onClick={() => {
                setSort("completed");
                setOpen(false);
              }}
            >
              completed
            </button>
            <button
              onClick={() => {
                setSort("alphabet");
                setOpen(false);
              }}
            >
              alphabet
            </button>
          </div>
        )}
      </div>
      <div className={[styles.TaskBox, styles.SortContainer].join(" ")}>
        <div className={[styles.TasksLeft].join(" ")}>
          <p>Your tasks</p>
          <p>0/1</p>
        </div>
      </div>
      <div>
        <div
          className={[styles.SortMainContainer, styles.SortContainer].join(" ")}
        >
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
          <TaskListItem />
        </div>
      </div>
    </div>
  );
}

export default Sortpanel;
