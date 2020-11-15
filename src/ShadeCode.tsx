import * as React from "react";
import { HslCode } from "./HslCode";

interface IShadeCodeProps {
  hue: number;
  saturation: number;
  lightness: number;
  shade: number;
}

const ShadeCode: React.FC<IShadeCodeProps> = ({
  hue,
  saturation,
  lightness,
  shade,
}) => {
  return (
    <>{`  '${shade}': '${HslCode(hue, saturation, lightness)}'${
      shade < 900 ? "," : ""
    }
`}</>
  );
};

export default ShadeCode;
