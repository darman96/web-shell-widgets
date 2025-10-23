import Widget from "@/components/Widget";
import Overlay from "@/widgets/Overlay";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <Widget>
    <Overlay />
  </Widget>,
);
