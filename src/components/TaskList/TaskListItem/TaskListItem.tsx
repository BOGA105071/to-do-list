import styles from "./TaskListItem.module.css";

function TaskListItem() {
  return (
    <>
      <div className={[styles.itemContainer].join(" ")}>
        <button className={styles.TaskButton}>
          <h1 className={[styles.itemHeader].join(" ")}>Header</h1>
          <p>Catлоолоtt</p>
        </button>
      </div>
    </>
  );
}

export default TaskListItem;
