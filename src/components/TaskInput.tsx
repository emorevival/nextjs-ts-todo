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
import { useTheme } from 'next-themes';
import React, { ChangeEvent } from 'react';

interface Props {
  taskName: string;
  deadline: number;
  handleTextChange(event: ChangeEvent<HTMLInputElement>): void;
  handleNumberChange(valueAsString: string, valueAsNumber: number): void;
  addTask(): void;
}

const TaskInput = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='input-container flex flex-col justify-center items-center gap-7'>
      <div className='flex flex-col md:w-80 w-64 gap-6'>
        <Input
          placeholder='Insert a task...'
          className='text-black dark:text-white'
          size='md'
          variant='flushed'
          borderColor={theme === 'light' ? 'black' : 'white'}
          value={props.taskName}
          _placeholder={{
            color: theme === 'light' ? 'black.400' : 'white.500',
          }}
          name='task'
          onChange={props.handleTextChange}
        />
        <NumberInput
          className='text-black dark:text-white'
          inputMode='numeric'
          variant='flushed'
          borderColor={theme === 'light' ? 'black' : 'white'}
          _placeholder={{
            color: theme === 'light' ? 'black.400' : 'white.500',
          }}
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
      <Button
        variant='ghost'
        rightIcon={<AddIcon w={3} h={3} />}
        colorScheme='green'
        onClick={props.addTask}>
        Add task
      </Button>
    </div>
  );
};

export default TaskInput;
