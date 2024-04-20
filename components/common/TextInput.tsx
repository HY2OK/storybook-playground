export interface TextInputProps {
  value: string;
  width: string;
  padding: string;
  border: string;
  borderColor: string;
}

const TextInput = ({ value, width, padding, border, borderColor }: TextInputProps) => {
  return (
    <input
      className={`${padding} ${width} ${border} ${borderColor} rounded-md`}
      value={value}
    />
  );
};

export default TextInput;
