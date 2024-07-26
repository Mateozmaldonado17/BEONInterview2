import { ChangeEvent } from 'react';

interface ICustomInput {
  value: string;
  onChange: (value: string) => void;
}

export const CustomInput = (props: ICustomInput) => {
  const { value, onChange } = props;
  return (
    <input
      placeholder={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  );
};
