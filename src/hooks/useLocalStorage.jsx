import { useState } from "react";

// source https://usehooks.com/useLocalStorage/

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      if (!item && initialValue) {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      debugger;
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const updateValue = (data) => {
    try {
      console.log("update", data);
      setStoredValue(data);
    } catch (error) {
      console.log("update error", error);
      console.log(error);
    }
  };

  const removeValue = () => {
    try {
      console.log("removeValue");
      localStorage.removeItem(key);
    } catch (error) {
      console.log("update error", error);
      console.log(error);
    }
  };

  return [storedValue, setValue, updateValue, removeValue];
};

export default useLocalStorage;
