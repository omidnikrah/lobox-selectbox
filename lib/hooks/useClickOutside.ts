import { useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement>(callbackFn: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackFn();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callbackFn]);

  return ref;
};
