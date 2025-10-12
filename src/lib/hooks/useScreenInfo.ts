import { ScreenInfo } from "@/types/web-shell";
import { useEffect, useState } from "preact/hooks";
import useAsync from "./useAsync";

const useScreenInfo = () => {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo | null>(null);

  const result = useAsync(async () => await window.webShell.getScreenInfo());

  useEffect(() => {
    if (result.loading) return;

    setScreenInfo(result.value);
  }, [result.loading, result.value, setScreenInfo]);

  return screenInfo;
};

export default useScreenInfo;
