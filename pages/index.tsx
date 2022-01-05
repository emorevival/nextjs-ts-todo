import { Box, Divider, useToast } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useEffect, useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Title from '../components/Title';
import { ITask } from '../interfaces/Interfaces';

const Home: NextPage = () => {
  const initialTodoList = (): ITask[] | [] => {
    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem('todo-list');
      if (data) return JSON.parse(data);
    }
    return [];
  };
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[] | []>(initialTodoList);
  const toast = useToast();
  // const handleChange: ChangeEventHandler<HTMLInputElement> = (
  //   event: ChangeEvent<HTMLInputElement>
  // ): void => {
  //   if (event.currentTarget.name === 'task') {
  //     setTask(event.currentTarget.value);
  //   } else {
  //     setDeadline(Number(event.currentTarget.value));
  //   }
  // };

  // less efficient

  // useEffect(() => {
  //   const data = localStorage.getItem('todo-list');
  //   if (data) {
  //     setTodoList(JSON.parse(data));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  }, [todoList]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.currentTarget.value);
  };

  const handleNumberChange = (
    valueAsString: string,
    valueAsNumber: number
  ): void => {
    setDeadline(valueAsNumber);
  };

  const addTask = (): void => {
    if (!task || !deadline) return;
    if (todoList.some((todo) => todo.taskName === task)) {
      toast({
        position: 'bottom-left',
        duration: 2500,
        status: 'error',
        title: 'You have already added this task!',
      });
      return;
    }
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
    toast({
      position: 'bottom-left',
      duration: 2500,
      status: 'success',
      title: 'Well done!',
    });
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Title />
      <TaskInput
        addTask={addTask}
        deadline={deadline}
        handleTextChange={handleTextChange}
        handleNumberChange={handleNumberChange}
        taskName={task}
      />
      {todoList.length > 0 && <Divider w='50%' orientation='horizontal' />}
      <TaskList completeTask={completeTask} todoList={todoList} />
    </>
  );
};

export default Home;
