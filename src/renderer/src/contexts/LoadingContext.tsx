import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type LoadingContextProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

type LoadingContextProviderProps = {
  children: ReactNode;
};

const loadingContextInitial = {
  isLoading: false,
  setIsLoading: () => {},
};

export const LoadingContext = createContext<LoadingContextProps>(
  loadingContextInitial
);

export function LoadingContextProvider({
  children,
}: LoadingContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
