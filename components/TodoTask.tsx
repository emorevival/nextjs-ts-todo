import { CheckIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { ITask } from '../interfaces/Interfaces';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task flex justify-between items-center gap-2 mb-3'>
      <div className='content w-52 md:w-96 flex gap-3 justify-between items-center'>
        <p className='text-white text-lg'>{task.taskName}</p>
        <p className='text-gray-400 text-sm text-right md:w-22 sm:w-22 lg:w-20'>
          Days left to complete: {task.deadline}
        </p>
      </div>
      {/* <button
        className='complete-task border-white border-4 rounded bg-white text-xs'
        onClick={() => completeTask(task.taskName)}>
        <span className='emoji'>Done✔️</span>
      </button> */}
      {/* <IconButton
        onClick={() => completeTask(task.taskName)}
        aria-label='Mark task as completed'
        size='sm'
        variant='link'
        colorScheme='green'
        icon={<CheckIcon />}
      /> */}
      <Button
        leftIcon={<CheckIcon />}
        marginLeft='.85rem'
        onClick={() => completeTask(task.taskName)}
        size='xs'
        fontWeight='bold'
        colorScheme='green'
        variant='link'>
        Mark as done
      </Button>
    </div>
  );
};
