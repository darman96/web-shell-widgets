import { useCallback, useEffect, useState } from "react";

/**
 * A hook for handling async operations with loading, error, and value states
 * @template T The type of data returned by the async callback
 * @param callback A function that returns a Promise
 * @param dependencies An array of dependencies for the callback
 * @returns An object containing loading state, error (if any), and resolved value
 */
const useAsync = <T>(
  callback: () => Promise<T>,
  dependencies: unknown[] = [],
) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [value, setValue] = useState<T | null>(null);

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(null);
    setValue(null);
    callback()
      .then(setValue)
      .catch((e) => {
        setError(e);
        setLoading(false);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
};

export default useAsync;
