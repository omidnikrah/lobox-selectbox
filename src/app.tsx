import { SelectBox } from "@lib/index";
import type { OptionItem } from "@lib/index";
import { useState } from "react";

import "./index.css";

const DEFAULT_OPTIONS = [
  {
    value: "education",
    label: "Education 🎓",
  },
  {
    value: "science",
    label: "Yeeeah, science! ⚗️",
  },
  {
    value: "art",
    label: "Art 🎭",
  },
  {
    value: "sport",
    label: "Sport ⚽️",
  },
  {
    value: "games",
    label: "Games 🎮",
  },
  {
    value: "health",
    label: "Health 🏥",
  },
];

export const App = () => {
  const [options, setOptions] = useState<OptionItem[]>(DEFAULT_OPTIONS);

  const handleOnAddNewItem = (option: OptionItem) => {
    setOptions([...options, option]);
  };

  return <SelectBox name="category" options={options} onAddNewItem={handleOnAddNewItem} />;
};
