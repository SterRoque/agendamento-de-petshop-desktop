import { LoadingContext } from "@renderer/contexts/LoadingContext";
import { useContext } from "react";

export function useLoading() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  function startLoading() {
    setIsLoading(true);
  }

  function stopLoading() {
    setIsLoading(false);
  }

  return {
    startLoading,
    stopLoading,
    isLoading,
  };
}
