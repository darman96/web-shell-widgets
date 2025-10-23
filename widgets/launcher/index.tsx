import Widget from "@/components/Widget";
import Launcher from "@/widgets/Launcher";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <Widget>
    <Launcher />
  </Widget>,
);
