import React, { ChangeEvent, useEffect } from 'react';
import { MobileTimePicker } from '@mui/lab';
import {MdOutlineAccessTime} from 'react-icons/md'

interface Props {
  handleTimeChange(event: ChangeEvent<HTMLInputElement> | null): void;
  taskTime: Date;
}

const TimePickerComponent = React.memo((props: Props) => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className='timepicker relative form-floating xl:w-32'
        id='input-toggle-timepicker'>
        <MobileTimePicker
          label='Custom input'
          value={props.taskTime}
          onChange={props.handleTimeChange}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <>
              <input placeholder='Time' name='taskTime' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' ref={inputRef} {...inputProps} />
              {InputProps?.endAdornment}
            </>
          )}
        />
        <div className='flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none'>
        <MdOutlineAccessTime />
      </div>
      </div>
    </div>
  );
});
TimePickerComponent.displayName = 'TimePickerComponent'
export default TimePickerComponent;
