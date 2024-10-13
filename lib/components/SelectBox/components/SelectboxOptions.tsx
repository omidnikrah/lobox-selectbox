import { useSelectBoxContext } from "./SelectboxContext";
import { SelectBoxOption } from "./SelectboxOption";

import styles from "./styles.module.scss";

export const SelectboxOptions = () => {
  const { isOpen, filteredOptions, handleAddNewItem, handleKeyDown, searchValue } = useSelectBoxContext();

  if (!isOpen) return null;

  return (
    <ul
      className={styles["selectbox__options"]}
      role="listbox"
      aria-multiselectable="true"
      data-testid="selectbox-options"
    >
      {!filteredOptions.length && (
        <li
          className={styles["selectbox__option"]}
          onClick={handleAddNewItem}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="option"
          aria-selected="false"
          data-testid="selectbox-add-new-item"
        >
          Add &#34;{searchValue}&#34;
        </li>
      )}
      {filteredOptions.map(option => (
        <SelectBoxOption key={option.value} option={option} />
      ))}
    </ul>
  );
};
