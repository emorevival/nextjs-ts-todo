import React from 'react';
import { ITask } from '../interfaces/Interfaces';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
  calculateTimeUntilDeadline(deadline: ITask['deadline']): void;
}

export const TodoTask = React.memo(({ task, completeTask, calculateTimeUntilDeadline }: Props) => {
  calculateTimeUntilDeadline(task.deadline);
  return (
    <div className='task flex justify-between items-center gap-2 mb-3'>
      <div className='content w-52 md:w-96 flex gap-3 justify-between items-center'>
        <p className='text-black dark:text-white text-lg'>{task.taskName}</p>
        <p className='text-black dark:text-gray-400 text-sm text-right md:w-22 sm:w-22 lg:w-20'>
          {/* Days left to complete: {task.deadline} */}
        </p>
      </div>
      {/* <Button
        leftIcon={<CheckIcon />}
        marginLeft='.85rem'
        onClick={() => completeTask(task.taskName)}
        size='xs'
        fontWeight='bold'
        colorScheme='green'
        variant='link'>
        Mark as done
      </Button> */}
    </div>
  );
});

TodoTask.displayName = 'TodoTask'
