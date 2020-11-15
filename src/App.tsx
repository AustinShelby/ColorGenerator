import * as React from "react";
import { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import NumberInput from "./NumberInput";
import ShadeCode from "./ShadeCode";
import { ShadeGenerator } from "./ShadeGenerator";
import ShadesExample from "./ShadesExample";

const App: React.FC = () => {
  const [hue, setHue] = useState(208);
  const [saturation, setSaturation] = useState(55);
  const [endSaturation, setEndSaturation] = useState(14);
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <div className="max-w-5xl mx-auto my-16 px-4 w-full text-gray-900 antialiased">
      <div className="flex space-x-16">
        <div>
          <ul className="space-y-4">
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
        </div>
        <div className="flex-1 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
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
              max={101}
              min={0}
            />
            <NumberInput
              title="Saturate Ends"
              value={endSaturation}
              setValue={setEndSaturation}
              max={101}
              min={-100}
            />
          </div>
          <div>
            <ShadesExample
              shades={ShadeGenerator(shades, hue, saturation, endSaturation)}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <pre className="bg-gray-200 rounded p-4">
          <span className="text-gray-500 select-none">{`module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
`}</span>
          {`        blue: {
`}
          {ShadeGenerator(shades, hue, saturation, endSaturation).map(
            (hslShade) => (
              <ShadeCode
                key={hslShade.shade}
                hue={hslShade.hue}
                saturation={hslShade.saturation}
                shade={hslShade.shade}
                lightness={hslShade.lightness}
              />
            )
          )}
          {`        }`}
          <span className="text-gray-500 select-none">{`
      },
    },
  },
  variants: {},
  plugins: [],
};`}</span>
        </pre>
      </div>
    </div>
  );
};

export default App;
