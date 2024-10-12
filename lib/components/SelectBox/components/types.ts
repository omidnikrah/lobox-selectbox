import { ChangeEvent, KeyboardEvent } from "react";

export type OptionItem = {
  value: string;
  label: string;
};

export interface SelectBoxContextProps {
  isOpen: boolean;
  searchValue: string;
  selectedOptions: string[];
  options: OptionItem[];
  filteredOptions: OptionItem[];
  handleToggle: () => void;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleOptionClick: (option: OptionItem) => void;
  handleAddNewItem: () => void;
  handleKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
}
