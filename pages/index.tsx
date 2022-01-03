import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Title from '../components/Title';
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
    <>
      <Title />
      <TaskInput
        addTask={addTask}
        deadline={deadline}
        handleChange={handleChange}
        taskName={task}
      />
      <TaskList completeTask={completeTask} todoList={todoList} />
    </>
  );
};

export default Home;
