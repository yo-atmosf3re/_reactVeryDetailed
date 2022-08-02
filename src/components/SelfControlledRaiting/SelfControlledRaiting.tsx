import * as React from 'react';
import { useState } from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type SelfControlledRatingProps = {
   defaultRating?: 0 | 1 | 2 | 3 | 4 | 5
   onChange: (value: RatingValueType) => void
}

export function SelfControlledRating(props: SelfControlledRatingProps) {

   let [value, setValue] = useState<RatingValueType>(props.defaultRating ? props.defaultRating : 0)

   return (
      <div>
         <Star selected={value > 0} setValue={() => { setValue(1); props.onChange(1) }} />
         <Star selected={value > 1} setValue={() => { setValue(2); props.onChange(2) }} />
         <Star selected={value > 2} setValue={() => { setValue(3); props.onChange(3) }} />
         <Star selected={value > 3} setValue={() => { setValue(4); props.onChange(4) }} />
         <Star selected={value > 4} setValue={() => { setValue(5); props.onChange(5) }} />
      </div>
   )
}

type StarPropsType = {
   selected: boolean
   setValue: () => void
}

export function Star(props: StarPropsType) {
   return <span onClick={() => { props.setValue() }}>
      {props.selected ? <b>star </b> : "star "}
   </span>
}

export default SelfControlledRating;