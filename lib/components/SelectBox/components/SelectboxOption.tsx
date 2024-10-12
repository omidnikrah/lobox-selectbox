import clsx from "clsx";
import { Check } from "lucide-react";

import { useSelectBoxContext } from "./SelectboxContext.ts";
import type { OptionItem } from "./types";

import styles from "./styles.module.scss";

interface SelectBoxOptionProps {
  option: OptionItem;
}

export const SelectBoxOption = ({ option }: SelectBoxOptionProps) => {
  const { selectedOptions, handleOptionClick, handleKeyDown } = useSelectBoxContext();
  const isSelected = selectedOptions.includes(option.value);

  return (
    <li
      className={clsx(styles["selectbox__option"], {
        [styles["selectbox__option--selected"]]: isSelected,
      })}
      onClick={() => handleOptionClick(option)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="option"
      aria-selected={isSelected ? "true" : "false"}
    >
      {option.label}
      {isSelected && <Check width={16} height={16} />}
    </li>
  );
};
