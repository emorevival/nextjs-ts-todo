import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { TodoTask } from '../components/TodoTask';
import { ITask } from '../interfaces/Interfaces';

const Home: NextPage = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.currentTarget.name === 'task') {
      setTask(event.currentTarget.value);
    } else {
      setDeadline(Number(event.currentTarget.value));
    }
  };

  const addTask = (): void => {
    if (!task) return;
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  };

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center gap-16'>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='header'>
        <h1 className='text-6xl text-gray-100'>Todo </h1>
      </div>
      <div className='input-container flex flex-col justify-center items-center gap-3'>
        <div className='flex flex-col w-80 gap-3'>
          <input
            className='p-2 rounded'
            type='text'
            name='task'
            value={task}
            placeholder='Insert a task...'
            onChange={handleChange}
          />
          <input
            className='p-2 rounded'
            type='number'
            min={0}
            name='deadline'
            value={deadline}
            placeholder='Deadline (in days)'
            onChange={handleChange}
          />
        </div>
        <button
          className='bg-white p-3 w-36 transition ease-in-out duration-300 rounded hover:scale-110'
          onClick={addTask}>
          Add task
        </button>
      </div>
      <div className='todo-list'>
        {todoList.map((task: ITask, index: number) => {
          //NOTE: this is bad - ideally I wanna get the ID from the database
          return (
            <TodoTask key={index} task={task} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
