import TodoItems from './TodoItems';
import styles from './todolist.module.css';
export default function ({ todos, setTodos }) {
    const sortedArray = todos
        .slice()
        .sort((a, b) => Number(a.done) - Number(b.done));
    return (
        <div className={styles.list}>
            {sortedArray.map((item) => (
                <TodoItems
                    key={item.name}
                    item={item}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );
}
