import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Control, Controller,FieldValues, Path } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues>{
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';


}

const Field = ({control, name, label, placeholder,type}: FormFieldProps<T>) => {
  return (
    <div><Controller
    control = {control}
    name={name}
    render={({field})=>(
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input placeholder={placeholder} {...field} type={type||'text'} value={field.value} onChange={field.onChange} className='input'/>
        </FormControl>
        <FormMessage/>
      </FormItem>
    )}
  /></div>
  )
}

export default Field