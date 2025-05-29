export enum IconFormat {
  SVG = 'svg',
  PNG = 'png',
  JPEG = 'jpeg'
}

interface IconInfo {
  format: IconFormat;
  data: Uint8Array;
}

export default IconInfo;