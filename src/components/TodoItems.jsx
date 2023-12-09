import styles from './todoitems.module.css';

export default function TodoItems({ item, todos, setTodos }) {
    function handleDelete(item) {
        setTodos(todos.filter((todo) => todo.name !== item));
    }

    function handleClick(name) {
        const newArray = todos.map((todo) =>
            todo.name === name ? { ...todo, done: !todo.done } : todo
        );
        setTodos(
            todos.map((todo) =>
                todo.name === name ? { ...todo, done: !todo.done } : todo
            )
        );
    }
    const completedTask = item.done ? styles.completed : '';

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span
                    className={completedTask}
                    onClick={() => handleClick(item.name)}
                >
                    {item.name}
                </span>
                <span>
                    <button
                        onClick={() => handleDelete(item.name)}
                        className={styles.deleteButton}
                    >
                        x
                    </button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}
