import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

interface Props {
  taskName: string;
  deadline: number;
  handleTextChange(event: ChangeEvent<HTMLInputElement>): void;
  handleNumberChange(valueAsString: string, valueAsNumber: number): void;
  addTask(): void;
}

const TaskInput = (props: Props) => {
  return (
    <div className='input-container flex flex-col justify-center items-center gap-7'>
      <div className='flex flex-col md:w-80 w-64 gap-6'>
        {/* <input
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
          value={props.deadline && props.deadline >= 0 ? props.deadline : ''}
          placeholder='Deadline (in days)'
          onChange={props.handleChange}
        /> */}
        <Input
          placeholder='Insert a task...'
          className='text-white'
          size='md'
          variant='flushed'
          value={props.taskName}
          name='task'
          onChange={props.handleTextChange}
        />
        <NumberInput
          className='text-white'
          inputMode='numeric'
          variant='flushed'
          onChange={props.handleNumberChange}
          value={props.deadline && props.deadline >= 0 ? props.deadline : ''}
          min={0}>
          <NumberInputField placeholder='Deadline (in days)' />
          <NumberInputStepper>
            <NumberIncrementStepper
              borderStart='unset'
              className='border-none'
            />
            <NumberDecrementStepper
              borderStart='unset'
              className='border-none'
            />
          </NumberInputStepper>
        </NumberInput>
      </div>
      {/* <button
        className='bg-white p-3 md:w-36 w-28 transition ease-in-out duration-300 rounded hover:scale-110'
        onClick={props.addTask}>
        Add task
      </button> */}
      <Button
        variant='ghost'
        rightIcon={<AddIcon w={3} h={3} />}
        colorScheme='whiteAlpha'
        onClick={props.addTask}>
        Add task
      </Button>
    </div>
  );
};

export default TaskInput;
