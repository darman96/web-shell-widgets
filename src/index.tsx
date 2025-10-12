import { render } from "preact";
import ProviderStack from "./components/ProviderStack";
import Desktop from "./Desktop";

const App: React.FC = () => {
  return (
    <ProviderStack>
      <Desktop />
    </ProviderStack>
  );
};

render(<App />, document.getElementById("app"));
