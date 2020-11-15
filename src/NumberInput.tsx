import * as React from "react";

interface INumberInputProps {
  value: number;
  setValue: (value: number) => void;
  max: number;
  min: number;
  title: string;
}

const NumberInput: React.FC<INumberInputProps> = ({
  value,
  setValue,
  max,
  min,
  title,
}) => {
  const handeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Number.parseInt(event.target.value);
    if (value < max && value >= min) {
      setValue(value);
    }
  };
  return (
    <>
      <label className="block mt-4" htmlFor="hue">
        {title}
      </label>
      <input
        className="block border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        type="number"
        id="hue"
        value={value}
        onChange={handeChange}
      />
    </>
  );
};

export default NumberInput;