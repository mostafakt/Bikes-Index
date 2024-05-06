import { InputField, InputContainer } from "./styles";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type IInputProps = {
  label: string;
  onChange: (value: string, name: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
  error?: string | undefined;
  value: string | undefined;
  required?: boolean;
  onFocus?: (value: string) => void
  onBlur?: () => void
  name?: string;

};

const Input = (props: IInputProps) => {
  const {
    label,
    onChange, 
    value,
    required = false,
    error,
    placeholder, 
    name,
  } = props

  return (
    <InputContainer>
      <label className={`${required ? "required" : ""}`}>{label}</label>
      <DatePicker
        placeholderText={placeholder}
        customInput={<InputField />}
        selected={value ? new Date(value) : undefined}
        onChange={(date) => onChange(date ? new Date(date).toISOString() : '', name ?? '')}
        dateFormat="dd/MM/yyyy"
      />
      <span style={{ visibility: error ? 'visible' : 'hidden' }}>{error}</span>
    </InputContainer>
  );
};

export default Input;
