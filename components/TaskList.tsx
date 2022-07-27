import React from 'react';
import { ITask } from '../interfaces/Interfaces';
import { TodoTask } from './TodoTask';

interface Props {
  todoList: ITask[];
  completeTask(taskNameToDelete: string): void;
  calculateTimeUntilDeadline(deadline: ITask['deadline']): void;
}

const TaskList = React.memo((props: Props) => {
  return (
    <div className='todo-list'>
      {props.todoList.map((task: ITask, index: number) => {
        //NOTE: this is bad - ideally I wanna get the ID from the database
        return (
          <TodoTask key={index} task={task} completeTask={props.completeTask} calculateTimeUntilDeadline={props.calculateTimeUntilDeadline}/>
        );
      })}
    </div>
  );
});

TaskList.displayName = 'TaskList'

export default TaskList;
