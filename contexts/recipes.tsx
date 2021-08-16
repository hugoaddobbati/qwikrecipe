
import { createContext, useContext } from 'react';

interface Value {
  data?: any;
  setState: (prev?: any) => void | undefined;
}

const initialValue: Value = {
  data: [],
  setState: () => {
    return undefined;
  },
};

export const DataContext = createContext<Value>(initialValue);

export const useData = () => useContext(DataContext);
