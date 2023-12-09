import { useState } from 'react';
import styles from './form.module.css';

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: '', done: false });

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.name == '') {
        } else {
            setTodos([...todos, todo]);
            setTodo({ name: '', done: false });
        }
    }
    return (
        <div>
            <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.modernInput}
                        type="text"
                        value={todo.name}
                        onChange={(e) =>
                            setTodo({ name: e.target.value, done: false })
                        }
                        placeholder="enter todo item...."
                    />
                    <button className={styles.moderButton} type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
