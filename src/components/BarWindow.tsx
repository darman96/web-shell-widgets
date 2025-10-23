import React, { PropsWithChildren, useState } from "react";
import { SystemStyleObject } from "@chakra-ui/react";
import Widget, { WidgetProps } from "./Widget";

export enum Anchor {
  Top,
  Bottom,
  Left,
  Right,
}

const defaultProps: Omit<BarWindowProps, "anchor"> = {
  bg: "bg.panel",
  borderColor: "border.panel",
  borderRadius: "md",
  borderWidth: "1px",
  width: "auto",
  height: "auto",
};

const calculateProps = (anchor: Anchor): Partial<WidgetProps> => {
  switch (anchor) {
    case Anchor.Top:
      return {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
      };
    case Anchor.Bottom:
      return {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      };
    case Anchor.Left:
      return {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
      };
    case Anchor.Right:
      return {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
      };
  }
};

export interface BarWindowProps extends SystemStyleObject {
  anchor: Anchor;
}

const BarWindow: React.FC<PropsWithChildren<BarWindowProps>> = (props) => {
  const { anchor, children, ...boxProps } = props;

  const [size, setSize] = useState(64);

  const handleClick = () => {
    if (size === 64) {
      setSize(128);
    } else if (size === 128) {
      setSize(64);
    }
  };

  const mergedProps = {
    ...defaultProps,
    ...boxProps,
    ...calculateProps(anchor),
  };

  return (
    <Widget {...mergedProps} width={size} onClick={handleClick}>
      {children}
    </Widget>
  );
};

export default BarWindow;
