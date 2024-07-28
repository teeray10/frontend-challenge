"use client";

import * as Slider from '@radix-ui/react-slider';
import '@/app/shoes/_styles/slider.css'
import {useState} from 'react';

export default function RangeSlider() {
  const [value, setValue] = useState([300, 2000])
  return (
    <>
      <Slider.Root className="SliderRoot" defaultValue={value} max={2500} step={1} onValueChange={(v) => setValue(v)}>
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" onChange={(t) => console.log(t)}/>
        <Slider.Thumb className="SliderThumb" aria-label="Volume" />
      </Slider.Root>
      <div className="flex justify-center mb-7">
        <p className="text-grey text-xs font-bold">R{value[0]} - R{value[1]}</p>
      </div>
    </>
  )
};