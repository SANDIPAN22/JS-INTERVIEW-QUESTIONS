import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [val, setVal] = useState(() => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : initialValue;
    } catch (err) {
      console.error("Error occurred while reading the local storage:: ", err);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return [val, setVal];
};

export default useLocalStorage;
