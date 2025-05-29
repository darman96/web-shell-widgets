import Widget from "@/components/Widget";
import Launcher from "@/widgets/Launcher";
import { render } from "preact";

render(
  <Widget>
    <Launcher />
  </Widget>,
  document.getElementById("app")
);
