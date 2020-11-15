import * as React from "react";
import { HslCode } from "./HslCode";

interface IColorDisplayProps {
  hue: number;
  saturation: number;
  lightness: number;
  shade: number;
}

const ColorDisplay: React.FC<IColorDisplayProps> = ({
  hue,
  saturation,
  lightness,
  shade,
}) => {
  return (
    <div className="flex space-x-4">
      <div
        className="rounded shadow-md w-12 h-12"
        style={{
          backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        }}
      ></div>
      <div>
        <h3 className="font-semibold">{shade}</h3>
        <p className="font-mono text-gray-700 text-sm">
          {HslCode(hue, saturation, lightness, 0)}
        </p>
      </div>
    </div>
  );
};

export default ColorDisplay;
