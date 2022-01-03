import { ITask } from '../interfaces/Interfaces';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task flex justify-between gap-2 mb-3'>
      <div className='content w-80 flex justify-between items-center'>
        <p className='text-white text-lg'>{task.taskName}</p>
        <p className='text-gray-400 text-sm'>
          Days left to complete: {task.deadline}
        </p>
      </div>
      <button
        className='complete-task border-white border-4 rounded bg-white text-xs'
        onClick={() => completeTask(task.taskName)}>
        <span className='emoji'>Done✔️</span>
      </button>
    </div>
  );
};
