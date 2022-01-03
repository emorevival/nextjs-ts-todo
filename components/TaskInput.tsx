import React, { ChangeEvent } from 'react';

interface Props {
  taskName: string;
  deadline: number;
  handleChange(event: ChangeEvent<HTMLInputElement>): void;
  addTask(): void;
}

const TaskInput = (props: Props) => {
  return (
    <div className='input-container flex flex-col justify-center items-center gap-3'>
      <div className='flex flex-col w-80 gap-3'>
        <input
          className='p-2 rounded'
          type='text'
          name='task'
          value={props.taskName}
          placeholder='Insert a task...'
          onChange={props.handleChange}
        />
        <input
          className='p-2 rounded'
          type='number'
          min={0}
          name='deadline'
          value={props.deadline}
          placeholder='Deadline (in days)'
          onChange={props.handleChange}
        />
      </div>
      <button
        className='bg-white p-3 w-36 transition ease-in-out duration-300 rounded hover:scale-110'
        onClick={props.addTask}>
        Add task
      </button>
    </div>
  );
};

export default TaskInput;
