
import { createContext, useContext } from 'react';

interface Value {
  isLoading?: any;
  setIsLoading: (prev?: any) => void | undefined;
}

const initialValue: Value = {
  isLoading: true,
  setIsLoading: () => {
    return undefined;
  },
};

export const IsLoadingContext = createContext<Value>(initialValue);

export const useIsLoading = () => useContext(IsLoadingContext);
