import { useClickOutside } from "@lib/hooks";
import { useState, useMemo, ChangeEvent, KeyboardEvent, ReactNode, useEffect } from "react";

import { SelectBoxContext } from "./SelectboxContext";
import { OptionItem } from "./types";

import styles from "./styles.module.scss";

export interface SelectBoxProviderProps {
  children: ReactNode;
  name: string;
  defaultValue?: string[];
  options: OptionItem[];
  onAddNewItem: (option: OptionItem) => void;
  onChange?: (option: OptionItem) => void;
}

export const SelectboxRoot = ({ children, defaultValue, options, onAddNewItem, onChange }: SelectBoxProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const selectRef = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (defaultValue) {
      setSelectedOptions(defaultValue);
    }
  }, [defaultValue]);

  const filteredOptions = useMemo(() => {
    return options.filter(
      option =>
        option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
        option.value.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [options, searchValue]);

  const handleToggle = () => setIsOpen(prevIsOpen => !prevIsOpen);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isOpen) setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const handleSearchInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !!searchValue) {
      const isOptionExists = options.find(option => option.value === searchValue);
      if (isOptionExists) {
        handleOptionClick(isOptionExists);
      } else {
        handleAddNewItem();
      }
    }
  };

  const handleOptionClick = (option: OptionItem) => {
    if (selectedOptions.includes(option.value)) {
      const updatedOptions = selectedOptions.filter(optionItem => optionItem !== option.value);
      setSelectedOptions(updatedOptions);
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
    onChange?.(option);
    setIsOpen(false);
  };

  const handleAddNewItem = () => {
    const newItem = { value: searchValue, label: searchValue };
    onAddNewItem(newItem);
    onChange?.(newItem);
    setSelectedOptions([...selectedOptions, searchValue]);
    setSearchValue("");
    setIsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleToggle();
      event.preventDefault();
    }
  };

  return (
    <SelectBoxContext.Provider
      value={{
        isOpen,
        searchValue,
        selectedOptions,
        options,
        filteredOptions,
        handleToggle,
        handleSearchChange,
        handleSearchInputKeyDown,
        handleOptionClick,
        handleAddNewItem,
        handleKeyDown,
      }}
    >
      <div
        className={styles["selectbox__wrapper"]}
        ref={selectRef}
        role="combobox"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="listbox"
        aria-owns="selectbox__options"
        aria-controls="selectbox__options"
      >
        {children}
      </div>
    </SelectBoxContext.Provider>
  );
};
