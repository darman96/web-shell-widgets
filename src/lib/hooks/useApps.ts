import useAsync from "@/lib/hooks/useAsync";
import AppInfo from "@/widgets/Launcher/types/AppInfo";

const useApps = (filter?: string) => {
  return useAsync(async () => {
    const url = filter
      ? `http://localhost:5019/AppInfo?filter=${filter ?? ""}`
      : `http://localhost:5019/AppInfo`;

    const resp = await fetch(url);
    const result = await resp.json();

    return result["result"] as AppInfo[];
  });
};

export default useApps;
