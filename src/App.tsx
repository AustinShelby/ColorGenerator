import * as React from "react";
import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import NumberInput from "./NumberInput";
import ShadeCode from "./ShadeCode";

const App: React.FC = () => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const shades = [100, 200, 300, 400, 500, 600, 700, 900];
  return (
    <div className="max-w-3xl mx-auto my-16 px-4 w-full text-gray-900 antialiased">
      <NumberInput
        title="Hue"
        value={hue}
        setValue={setHue}
        max={360}
        min={0}
      />
      <NumberInput
        title="Saturation"
        value={saturation}
        setValue={setSaturation}
        max={100}
        min={0}
      />
      <ul className="space-y-2 py-8">
        {shades.map((shade, index) => (
          <li key={index}>
            <ColorDisplay
              shade={shade}
              hue={hue}
              saturation={saturation}
              lightness={90 - 10 * index}
            />
          </li>
        ))}
      </ul>

      <pre className="bg-gray-300 rounded p-4">
        blue:{" "}
        {`{
`}
        {shades.map((shade, index) => (
          <ShadeCode
            hue={hue}
            saturation={100}
            shade={shade}
            lightness={10 * index + 10}
          />
        ))}
        {"}"}
      </pre>
    </div>
  );
};

export default App;
