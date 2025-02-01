import { useState, useEffect } from "react";

export const useDebounce = (rawVal, time) => {
  const [debouncedVal, setDebouncedVal] = useState(null);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(rawVal);
    }, time);

    return () => {
      clearInterval(handler);
    };
  }, [rawVal]);

  return debouncedVal;
};
