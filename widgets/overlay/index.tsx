import Widget from "@/components/Widget";
import Overlay from "@/widgets/Overlay";
import { render } from "preact";

render(
  <Widget>
    <Overlay />
  </Widget>,
  document.getElementById("app"),
);
