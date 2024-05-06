import colors from "src/colors";
import { SelectContainer, StyledExtra, Wrapper } from "./styles";
import Select, { StylesConfig, GroupBase } from "react-select";

interface SelectOption {
  value: string;
  label: string;
}
interface ExtraLabel {
  text: string
  onClick: () => void

}
type SingleSelectProps = {
  label: string;
  onChange: (selected: string | undefined) => void;
  isDisabled?: boolean;
  placeholder?: string;
  error?: string | undefined;
  value: string | number | undefined | null | boolean;
  required?: boolean;
  options: SelectOption[];
  direction?: string
  extraLabel?: ExtraLabel
};

const SingleSelect = ({
  label,
  onChange,
  isDisabled = false,
  value,
  required = false,
  error,
  placeholder,
  options,
  direction = 'auto',
  extraLabel,
}: SingleSelectProps) => {

  const customStyles: StylesConfig<
    SelectOption,
    false,
    GroupBase<SelectOption>
  > = {

    option: (provided: any) => ({
      ...provided,
      border: 1,
      color: "#00000",

      ":hover": {
        background: "#cccccc",
      },
    }),
    control: (provided: any) => ({
      ...provided,
      border: `1px solid ${colors.gainsboro}`,
      boxShadow: "none",
      fontSize: '0.875rem',
      borderRadius: '0.625rem',
      height: '2.9375rem',
      padding: 5,
      paddingInlineStart: 15,
      width: "100%",
      color: colors.gray4,
      cursor: isDisabled ? "not-allowed" : "pointer",
      backgroundColor: isDisabled ? colors.solitude : colors.white,

      ":hover": {
        border: `1px solid ${colors.gainsboro}`,
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
      border: 0,
      direction: direction,
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#F2F2F9",
      border: 0,
      color: `${colors.gray4}`,
      fontSize: '0.875rem',
      fontWeight: 600,
      direction: direction,
    }),
    container: (provided: any) => ({
      ...provided,
      marginBottom: 0,
      border: 2,
      borderColor: "white",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: isDisabled ? "darkGray" : `${colors.gray4}`,
      fontSize: '0.875rem',
      fontWeight: 600,
    }),
  };

  return (
    <SelectContainer>
      <Wrapper>
        <label className={`${required ? "required" : ""}`}>{label}</label>
        {extraLabel && <StyledExtra onClick={() => extraLabel?.onClick()}>
          {extraLabel?.text}
        </StyledExtra>}
      </Wrapper>


      <Select
        key={value as string ?? ""}
        styles={customStyles}
        placeholder={placeholder ?? label}
        isSearchable={true}
        onChange={(selected) => onChange(selected?.value)}
        value={options.find((opt) => opt.value === value)}
        options={options}
        isDisabled={isDisabled}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#cccc",
          },
        })}
      />
      <span style={{ visibility: error ? "visible" : "hidden" }}>{error}</span>
    </SelectContainer>
  );
};

export default SingleSelect;
