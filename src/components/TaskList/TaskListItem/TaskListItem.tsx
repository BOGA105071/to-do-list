import styles from "./TaskListItem.module.css";


type Props = {
  title: String;
  text: String;
}

function TaskListItem({title, text}: Props) {
  return (
    <>
      <div className={[styles.itemContainer].join(" ")}>
        <button className={styles.TaskButton}>
          <h1 className={[styles.itemHeader].join(" ")}>{title}</h1>
          <p>{text}</p>
        </button>
      </div>
    </>
  );
}

export default TaskListItem;
