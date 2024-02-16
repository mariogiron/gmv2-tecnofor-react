import { useDispatchContext, useTaskContext } from "./TaskProvider";

const TaskList = () => {

    const tasks = useTaskContext();
    const dispatch = useDispatchContext();

    return <div>
        {tasks && tasks.map(task => (
            <div>
                <h3>{task.title}</h3>
                <p>#{task.id}</p>
                <p>Categoría: {task.category}</p>
                <button
                    onClick={() => dispatch && dispatch({ type: 'REMOVE', data: task.id })}
                >
                    Eliminar
                </button>
            </div>
        ))}
    </div>

}

export default TaskList;