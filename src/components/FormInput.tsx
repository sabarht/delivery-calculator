// FormInput.tsx
import React, { FC } from "react";

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  id: string;
  testId: string;
  min: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type,
  name,
  id,
  testId,
  min,
  value,
  onChange,
}) => {
  return (
    <div className="m-4 space-x-3">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        data-test-id={testId}
        min={min}
        value={value}
        onChange={onChange}
        required
        className="bg-gray-100 p-1.5 rounded w-64"
      />
      {type === "number" && name === "cart-value" && <span>€</span>}
      {type === "number" && name === "delivery-distance" && <span>m</span>}
    </div>
  );
};

export default FormInput;
