import React, { ChangeEvent } from 'react';

interface Props {
  taskName: string;
  label: string;
  handleTextChange(event: ChangeEvent<HTMLInputElement>): void;
}

const TextInput = (props: Props) => {
  return (
    <div className='flex justify-center'>
      <div className='form-floating mb-3 xl:w-full'>
        <input
          type='text'
          value={props.taskName}
          onChange={props.handleTextChange}
          placeholder={props.label}
          id='base-input'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        {/* <label
          htmlFor='task'
          className='form-label inline-block mb-2 text-gray-700 dark:text-gray-300'>
          {props.label}
        </label> */}
      </div>
    </div>
  );
};

export default TextInput;
