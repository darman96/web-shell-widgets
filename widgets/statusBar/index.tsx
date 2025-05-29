import Widget from "@/components/Widget";
import StatusBar from "@/widgets/StatusBar";
import { render } from "preact";

render(
  <Widget>
    <StatusBar />
  </Widget>,
  document.getElementById("app")
);
