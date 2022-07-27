/* eslint-disable react/display-name */
import { Divider, useToast } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Script from 'next/script';
import { ChangeEvent, useEffect, useState } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Title from '../components/Title';
import { ITask } from '../interfaces/Interfaces';
import Divider2 from '../components/Divider';
import React from 'react';

const Home: NextPage = React.memo(() => {
  const initialTodoList = (): ITask[] | [] => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const data = window.localStorage.getItem('todo-list');
      if (data) return JSON.parse(data);
    }
    return [];
  };
  const { theme, setTheme } = useTheme();
  const [task, setTask] = useState<string>('');
  // const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[] | []>(initialTodoList);
  const [deadline, setDeadline] = useState<ITask['deadline']>({
    taskDate: new Date(),
    taskTime: new Date(),
  });

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todoList));
  }, [todoList]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.currentTarget.value);
  };

  const handleDateChange = (date: ChangeEvent<HTMLInputElement> | null): void => {
    if (date) {
      setDeadline({
        ...deadline,
        taskDate: date,
      })
    }
  }

  const handleTimeChange = (time: ChangeEvent<HTMLInputElement> | null): void => {
    if (time) {
      setDeadline({
        ...deadline,
        taskTime: time,
      })
    }
  }

  const addTask = (): void => {
    if (!task || !deadline.taskDate || !deadline.taskTime) return;
    if (todoList.some((todo) => todo.taskName === task)) {
      return;
    }
    const newTask: ITask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline({ taskDate: new Date(), taskTime: new Date() });
  };

  const calculateTimeUntilDeadline = (deadline: ITask['deadline']): void => {
  const now = new Date();
  const targetDate = deadline.taskDate;
  const targetTime = deadline.taskTime;

  // const timeUntilDate = now - targetDate;

  console.log(targetDate)
  // console.log('res', timeUntilDate)
  // const timeUntil = Date.
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
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
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
        taskName={task}
      />
      {todoList.length > 0 && (
        <>
          <Divider
            borderColor={theme === 'light' ? 'black' : 'white'}
            w='50%'
            orientation='horizontal'
          />
          <Divider2 />
        </>
      )}
      <TaskList completeTask={completeTask} todoList={todoList} calculateTimeUntilDeadline={calculateTimeUntilDeadline}/>
    </>
  );
});

export default Home;
