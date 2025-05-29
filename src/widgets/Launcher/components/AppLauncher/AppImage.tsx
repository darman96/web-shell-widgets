import React from "react";
import { Image, ImageProps } from "@chakra-ui/react";
import IconInfo from "../../types/IconInfo";

export interface AppImageProps extends Omit<ImageProps, "src"> {
  icon: IconInfo;
}

const AppImage: React.FC<AppImageProps> = (props) => {
  const { icon, ...imageProps } = props;

  return (
    <Image
      {...imageProps}
      src={`data:image/${icon?.format ?? ""};base64,${icon?.data ?? ""}`}
      alt={""}
    />
  );
};

export default AppImage;
