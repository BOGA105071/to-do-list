import styles from "./TaskListItem.module.css";


type Props = {
  title: string;
  text: string;
}

function TaskListItem({title, text}: Props) {
  return (
      <div className={styles.itemContainer}>
        <button className={styles.TaskButton}>
          <h1 className={styles.itemHeader}>{title}</h1>
          <p>{text}</p>
        </button>
      </div>
  );
}

export default TaskListItem;
