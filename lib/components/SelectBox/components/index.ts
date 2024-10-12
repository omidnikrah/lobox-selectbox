import { SelectboxOptions } from "./SelectboxOptions";
import { SelectboxRoot } from "./SelectboxRoot";
import { SelectBoxTrigger } from "./SelectBoxTrigger";

export type { OptionItem } from "./types";

export const LoboxSelectbox = Object.freeze({
  Root: SelectboxRoot,
  Trigger: SelectBoxTrigger,
  Options: SelectboxOptions,
});
