import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Rating, { RatingValueType } from './Raiting';



export default {
   title: 'Rating stories',
   component: Rating,
   argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Rating>;

export const RatingChanging: ComponentStory<typeof Rating> = () => {
   const [rating, setRating] = useState<RatingValueType>(3)
   return <Rating value={rating} onClick={setRating}></Rating>
}
export const EmptyRating = () => <Rating value={0} onClick={x => x}></Rating>
export const Rating1 = () => <Rating value={1} onClick={x => x}></Rating>
export const Rating2 = () => <Rating value={2} onClick={x => x}></Rating>
export const Rating3 = () => <Rating value={3} onClick={x => x}></Rating>
export const Rating4 = () => <Rating value={4} onClick={x => x}></Rating>
export const Rating5 = () => <Rating value={5} onClick={x => x}></Rating>



