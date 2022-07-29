import React from 'react';
import { ITask } from '../interfaces/Interfaces';
import { TodoTask } from './TodoTask';

interface Props {
  todoList: ITask[];
  completeTask(taskNameToDelete: string): void;
}

const TaskList = (props: Props) => {
  return (
    <div className='todo-list'>
      {props.todoList.map((task: ITask, index: number) => {
        //NOTE: this is bad - ideally I wanna get the ID from the database
        return (
          <TodoTask key={index} task={task} completeTask={props.completeTask} />
        );
      })}
    </div>
  );
};

export default TaskList;
