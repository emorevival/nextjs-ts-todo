import { ChangeEvent, useEffect } from 'react';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { MdEditCalendar } from 'react-icons/md';
import React from 'react';

interface Props {
  handleDateChange(event: ChangeEvent<HTMLInputElement> | null): void;
  taskDate: Date;
}

const DatePicker = React.memo((props: Props) => {


  return (
    <div className='relative w-full'>
      <MobileDatePicker
        label="What date is this task due on?"
        value={props.taskDate}
        toolbarPlaceholder='Pick a date'
        onChange={props.handleDateChange}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <>
            <input placeholder='Date' name='taskDate' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' ref={inputRef} {...inputProps} />
            {InputProps?.endAdornment}
          </>
        )}
      />
      <div className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none'>
        <MdEditCalendar />
      </div>
    </div>
  );
});

DatePicker.displayName = 'DatePicker'
export default DatePicker;
