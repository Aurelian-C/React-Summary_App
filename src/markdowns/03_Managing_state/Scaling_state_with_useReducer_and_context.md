# Scaling state with `useReducer` and Context

Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.

## Combining a reducer with context 

In this example state is managed by a reducer. The reducer function contains all of the state update logic and is declared at the bottom of this file:

```react
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
```

A reducer helps keep the event handlers short and concise. However, as your app grows, you might run into another difficulty. **Currently, the `tasks` state and the `dispatch` function are only available in the top-level `TaskApp` component.** To let other components read the list of tasks or change it, you have to explicitly [pass down](https://beta.reactjs.org/learn/passing-props-to-a-component) the current state and the event handlers that change it as props.

For example, `TaskApp` passes a list of tasks and the event handlers to `TaskList`:

```react
<TaskList
  tasks={tasks}
  onChangeTask={handleChangeTask}
  onDeleteTask={handleDeleteTask}
/>
```

And `TaskList` passes the event handlers to `Task`:

```react
<Task
  task={task}
  onChange={onChangeTask}
  onDelete={onDeleteTask}
/>
```

In a small example like this, this works well, but if you have tens or hundreds of components in the middle, passing down all state and functions can be quite frustrating!

This is why, as an alternative to passing them through props, you might want to put both the `tasks` state and the `dispatch` function [into context.](https://beta.reactjs.org/learn/passing-data-deeply-with-context) **This way, any component below `TaskApp` in the tree can read the tasks and dispatch actions without the repetitive “prop drilling”.**

Here is how you can combine a reducer with context:

1. **Create** the context.
2. **Put** state and dispatch into context.
3. **Use** context anywhere in the tree.

## Summary

- You can combine reducer with context to let any component read and update state above it.
- To provide state and the dispatch function to components below:
  1. Create two contexts (for state and for dispatch functions).
  2. Provide both contexts from the component that uses the reducer.
  3. Use either context from components that need to read them.
- You can further declutter the components by moving all wiring into one file.
  - You can export a component like `TasksProvider` that provides context.
  - You can also export custom Hooks like `useTasks` and `useTasksDispatch` to read it.
- You can have many context-reducer pairs like this in your app.

## References

1. [Scaling Up with Reducer and Context - beta.reactjs.org](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)