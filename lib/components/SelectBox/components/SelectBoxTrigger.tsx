import { ChevronDown } from "lucide-react";

import { useSelectBoxContext } from "./SelectboxContext";

import styles from "./styles.module.scss";

export const SelectBoxTrigger = () => {
  const { searchValue, handleToggle, handleSearchChange, handleKeyDown, handleSearchInputKeyDown, isOpen } =
    useSelectBoxContext();

  return (
    <div
      className={styles["selectbox__trigger"]}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen ? "true" : "false"}
      onKeyDown={handleKeyDown}
      data-testid="selectbox-trigger"
    >
      <input
        type="text"
        value={searchValue}
        placeholder="Type something"
        className={styles["selectbox__search-input"]}
        onChange={handleSearchChange}
        onKeyDown={handleSearchInputKeyDown}
        aria-autocomplete="none"
        aria-controls="selectbox__options"
        data-testid="selectbox-input"
      />
      <ChevronDown className={styles["selectbox__trigger-icon"]} width={20} height={20} />
    </div>
  );
};
