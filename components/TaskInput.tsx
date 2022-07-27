import { useTheme } from 'next-themes';
import React, { ChangeEvent, useState } from 'react';
import DatePicker from './DatePicker';
import TextInput from './TextInput';
import TimePickerComponent from './TimePickerComponent';

interface Props {
  taskName: string;
  deadline: { taskDate: Date; taskTime: Date };
  handleTextChange(event: ChangeEvent<HTMLInputElement>): void;
  handleDateChange(date: ChangeEvent<HTMLInputElement> | null): void;
  handleTimeChange(time: ChangeEvent<HTMLInputElement> | null): void;
  addTask(): void;
}

const TaskInput = React.memo((props: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='input-container flex flex-col justify-center items-center gap-7'>
      <div className='flex flex-col md:w-80 w-64 gap-3'>
        <TextInput
          taskName={props.taskName}
          handleTextChange={props.handleTextChange}
          label='Task name'
        />
        <div className='flex gap-2 justify-between items-center'>
          <DatePicker
            handleDateChange={props.handleDateChange}
            taskDate={props.deadline.taskDate}
          />
          <TimePickerComponent
            handleTimeChange={props.handleTimeChange}
            taskTime={props.deadline.taskTime}
          />
        </div>
      </div>
      <button onClick={props.addTask} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add task
        </span>
      </button>
      {/* <Button
        variant='ghost'
        rightIcon={<AddIcon w={3} h={3} />}
        colorScheme='green'
        onClick={props.addTask}>
        Add task
      </Button> */}
    </div>
  );
});
TaskInput.displayName = 'TaskInput'
export default TaskInput;
