import TaskListItem from "../TaskListItem/TaskListItem.js";
import styles from "./Sortpanel.module.css";
import { useState } from "react";

function Sortpanel() {
  type SortType = "all" | "uncompleted" | "completed" | "alphabet";
  const options: SortType[] = [
    "all",
    "uncompleted",
    "completed",
    "alphabet",
  ]
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState<SortType>("all");
  const [tasks, setTasks] = useState([
    {id: 1, title: "Header 1", text: "Catлоолоtt", done: false},
    {id: 2, title: "Header 2", text: "Catлоолоtt", done: false},
    {id: 3, title: "Header 3", text: "Catлоолоtt", done: false},
    {id: 3, title: "Header 3", text: "Catлоолоtt", done: false},
    {id: 3, title: "Header 3", text: "Catлоолоtt", done: false},
    {id: 3, title: "Header 3", text: "Catлоолоtt", done: false},
    {id: 3, title: "Header 3", text: "Catлоолоtt", done: false},
    {id: 3, title: "Header 3", text: "Catлоолоtt", done: false},
  ])
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
        
          <div className={[styles.DropDown, open ? styles.Open : ""].join(" ")}>
              {options.map((option)=> (
                <button
                key={option}
                className={sort === option ? styles.Active : ""}
                onClick={()=> {
                  setSort(option)
                  setOpen(false)
                }}
                >
                  {labels[option]}
                </button>
              ))}
          </div>
        
      </div>
      <div className={[styles.TaskBox, styles.SortContainer].join(" ")}>
        <div className={[styles.TasksLeft].join(" ")}>
          <p>Your tasks</p>
          <p>{tasks.filter(t => t.done).length}/{tasks.length}</p>
        </div>
      </div>
      <div>
        <div className={[styles.SortMainContainer, styles.SortContainer].join(" ")}>
            {tasks.map(task => (
              <TaskListItem 
                key={task.id}
                title={task.title}
                text={task.text}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sortpanel;
