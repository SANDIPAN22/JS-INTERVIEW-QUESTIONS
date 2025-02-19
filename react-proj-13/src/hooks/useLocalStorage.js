import { useEffect, useState } from "react";

const useLocalStorage = (key, initialVal) => {
  const [storedVal, setStoredVal] = useState(() => {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : initialVal;
    } catch (err) {
      console.error("Error in reading local storage. ERROR:: ", err);
      return initialVal;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedVal));
  }, [storedVal]);
  return [storedVal, setStoredVal];
};

export default useLocalStorage;
