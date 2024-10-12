import { useSelectBoxContext } from "./SelectboxContext";
import { SelectBoxOption } from "./SelectboxOption";

import styles from "./styles.module.scss";

export const SelectboxOptions = () => {
  const { isOpen, filteredOptions, handleAddNewItem, handleKeyDown } = useSelectBoxContext();

  if (!isOpen) return null;

  return (
    <ul className={styles["selectbox__options"]} role="listbox" aria-multiselectable="true">
      {!filteredOptions.length && (
        <li
          className={styles["selectbox__option"]}
          onClick={handleAddNewItem}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="option"
          aria-selected="false"
        >
          Add new option
        </li>
      )}
      {filteredOptions.map(option => (
        <SelectBoxOption key={option.value} option={option} />
      ))}
    </ul>
  );
};
