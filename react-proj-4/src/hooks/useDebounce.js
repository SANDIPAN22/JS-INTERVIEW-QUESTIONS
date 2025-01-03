import { useState, useEffect } from "react";

const useDebounce = (value, delay = 1500) => {
  const [debouncedVal, setDebouncedVal] = useState("");
  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(timeoutHandler);
  }, [value]);

  return debouncedVal;
};

export default useDebounce;
