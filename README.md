
# Lobox Selectbox Component

[![npm version](https://badge.fury.io/js/lobox-selectbox.svg)](https://badge.fury.io/js/lobox-selectbox)

The **SelectBox Component** is a fully accessible, customizable, and searchable multi-select dropdown built with React, TypeScript, and SCSS. It provides an intuitive interface for selecting multiple options with a seamless search experience, all while adhering to modern accessibility standards.

## Features

- 🌐 **Multi-Select**: Select multiple items from the dropdown.
- 🔍 **Searchable**: Search through options with a real-time filtering feature.
- ♿ **Fully Accessible**: Designed with accessibility in mind, supporting keyboard navigation and screen readers.
- ➕ **Add New Items**: Users can add new items by typing and pressing `Enter`.
- 🔒 **Hidden Input Support**: Stores selected items in a hidden input for easy form submission.
- 📦 **Lightweight & Fast**: High-performance component designed with best practices in mind.

## Installation

To install the component, run the following command:

```bash
npm install lobox-selectbox
# or
yarn add lobox-selectbox
```

## Usage

Here is an example of how to use the Selectbox component:

```tsx
import React, { useState } from 'react';
import { Selectbox } from 'lobox-selectbox';
import type { OptionItem } from 'lobox-selectbox';
import "lobox-selectbox/dist/style.css";


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

const App = () => {
  const [options, setOptions] = useState<OptionItem[]>(DEFAULT_OPTIONS);

  const handleOnAddNewItem = (option: OptionItem) => {
    setOptions([...options, option]);
  };

  return (
    <SelectBox
      name='category'
      options={options}
      onAddNewItem={handleOnAddNewItem}
    />
  );
};

export default App;
```

### Props

| Prop              | Type                           | Description                                                              |
|-------------------|--------------------------------|--------------------------------------------------------------------------|
| `options`         | `OptionItem[]`                 | The available options for selection.                                     |
| `name`            | `string`                       | The name for the hidden input to be used in forms.                       |
| `defaultValue`    | `string[]`                     | The default selected values.                                             |
| `onChange`        | `(option: OptionItem) => void` | Callback to handle when selected items change.                           |

### Accessibility

- Fully keyboard navigable (Tab, Enter, Space, Arrow keys(soon)).
- Accessible to screen readers with proper ARIA roles and labels.
- Automatically announces changes to assistive technologies.
