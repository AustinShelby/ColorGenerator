import * as React from "react";
import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import NumberInput from "./NumberInput";
import ShadeCode from "./ShadeCode";
import { ShadeGenerator } from "./ShadeGenerator";

const App: React.FC = () => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [endSaturation, setEndSaturation] = useState(3);
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
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
      <NumberInput
        title="Saturate Ends"
        value={endSaturation}
        setValue={setEndSaturation}
        max={10}
        min={0}
      />
      <ul className="space-y-2 py-8">
        {ShadeGenerator(shades, hue, saturation, endSaturation).map(
          (hslShade) => (
            <li key={hslShade.shade}>
              <ColorDisplay
                shade={hslShade.shade}
                hue={hslShade.hue}
                saturation={hslShade.saturation}
                lightness={hslShade.lightness}
              />
            </li>
          )
        )}
      </ul>

      <pre className="bg-gray-300 rounded p-4">
        blue:{" "}
        {`{
`}
        {ShadeGenerator(shades, hue, saturation, endSaturation).map(
          (hslShade) => (
            <ShadeCode
              hue={hslShade.hue}
              saturation={hslShade.saturation}
              shade={hslShade.shade}
              lightness={hslShade.lightness}
            />
          )
        )}
        {"}"}
      </pre>
    </div>
  );
};

export default App;
