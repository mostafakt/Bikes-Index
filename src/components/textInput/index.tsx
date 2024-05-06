import { InputField, InputContainer } from "./styles";

type IInputProps = {
  label: string;
  onChange: (value: string, name: string) => void;
  type?: "text" | "email" | "number" | "tel";
  isDisabled?: boolean;
  placeholder?: string;
  error?: string | undefined;
  value: string | undefined;
  required?: boolean;
  autoComplete?: "on" | "off";
  list?: Array<string>;
  onFocus?: (value: string) => void
  onBlur?: () => void
  name?: string;
  pattern?: string
};

const Input = ({
  label,
  onChange,
  type = "text",
  isDisabled = false,
  value,
  required = false,
  error,
  placeholder,
  autoComplete = "off",
  onFocus,
  onBlur,
  name,
  pattern,
}: IInputProps) => {
  return (
    <InputContainer>
      <label className={`${required ? "required" : ""}`}>{label}</label>
      <InputField
        name={name}
        list={label}
        pattern={pattern}
        autoComplete={autoComplete}
        type={type}
        onFocus={(e: { target: { name: string } }) => onFocus && onFocus(e?.target?.name ?? '')}
        onBlur={onBlur}
        placeholder={placeholder ? placeholder : label}
        disabled={isDisabled}
        value={value}
        onChange={(e: { target: { value: string, name: string } }) =>
          onChange(e.target.value, e.target.name)
        }
        required={required}
      />
      <span style={{ visibility: error ? 'visible' : 'hidden' }}>{error}</span>
    </InputContainer>
  );
};

export default Input;
