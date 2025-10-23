import { createRoot } from "react-dom/client";
import ProviderStack from "./components/ProviderStack";
import Desktop from "./Desktop";

const App: React.FC = () => {
  return (
    <ProviderStack>
      <Desktop />
    </ProviderStack>
  );
};

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
