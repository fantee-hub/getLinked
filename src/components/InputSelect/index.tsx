import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import { PiCaretDownBold } from "react-icons/pi";
import Select, {
  type DropdownIndicatorProps,
  components,
  IndicatorSeparatorProps,
  StylesConfig,
  GroupProps,
} from "react-select";

const InputSelect = ({ placeholder, option, setOption, optionvalue }: any) => {
  const indicatorSeparatorStyle = {
    display: "none",
  };
  const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <PiCaretDownBold className="text-xl text-[#fff]" />
      </components.DropdownIndicator>
    );
  };
  const groupStyles = {
    background: "#150E28",
    color: "white",
  };

  const Group = (props: GroupProps) => (
    <div style={groupStyles}>
      <span {...props} />
    </div>
  );

  const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  const customStyles: StylesConfig = {
    control: (provided: Record<string, unknown>, state: any) => ({
      ...provided,
      border: "1px solid white",
      background: "rgba(255, 255, 255, 0.03)",
      color: "#fff",
      padding: 4,
      cursor: "pointer",
      "&:hover": {
        border: "1px solid white",
      },
    }),
    option: (provided, state) => ({
      ...provided,

      backgroundColor: state.isSelected ? "#150E28" : "white",

      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
  };
  return (
    <div>
      <Select
        defaultValue={optionvalue}
        onChange={setOption}
        options={option}
        placeholder={placeholder}
        components={{ DropdownIndicator, IndicatorSeparator, Group }}
        className="lg:w-64 h-12 w-full text-fuchsia-500 placeholder:white cursor-pointer"
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary25: "#ffffff",
            primary: "#ffffff",
            neutral50: "#ffffff",
          },
        })}
      />
    </div>
  );
};

export default InputSelect;
