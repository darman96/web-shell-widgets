import { ScreenInfo } from "@/types/web-shell";
import { useEffect, useState } from "react";
import useAsync from "./useAsync";

const useScreenInfo = () => {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo | null>(null);

  const result = useAsync(async () => await window.webShell.getScreenInfo());

  useEffect(() => {
    if (result.loading) return;

    setScreenInfo(
      result.value ?? {
        width: window.innerWidth,
        height: window.innerHeight,
        scaleFactor: 1,
        x: 0,
        y: 0,
      },
    );
  }, [result.loading, result.value, setScreenInfo]);

  return screenInfo;
};

export default useScreenInfo;
