import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string;
    title: string;
    category: string;
    complete: boolean;
}

type State = Array<Task>;
type Action = { type: 'ADD' | 'REMOVE', data: string }
type TaskProviderProps = { children: ReactNode }

// REDUCER
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ADD': {
            return [
                ...state,
                { id: uuidv4(), title: action.data, category: 'main', complete: false }
            ]
        }
        case 'REMOVE': {
            return state.filter(item => item.id !== action.data)
        }
    }
}

// Contextos
const TaskContext = createContext<State | null>(null)
const DispatchContext = createContext<Dispatch<Action> | null>(null);

// Custom Hooks
export const useTaskContext = () => {
    return useContext(TaskContext);
}

export const useDispatchContext = () => {
    return useContext(DispatchContext)
}

const TaskProvider = ({ children }: TaskProviderProps) => {

    const [tasks, dispatch] = useReducer(reducer, []);

    return <TaskContext.Provider value={tasks}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    </TaskContext.Provider>

}

export default TaskProvider;