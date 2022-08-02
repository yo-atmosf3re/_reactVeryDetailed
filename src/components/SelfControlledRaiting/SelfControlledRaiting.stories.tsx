import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelfControlledRating, { SelfControlledRatingProps } from './SelfControlledRaiting';
import { action } from '@storybook/addon-actions';



export default {
   title: 'SelfControlledRating stories',
   component: SelfControlledRating,
} as ComponentMeta<typeof SelfControlledRating>;

const callback = action('rating changed inside component')

export const EmptyRating: ComponentStory<typeof SelfControlledRating> = () => {
   return (
      <SelfControlledRating defaultRating={0} onChange={callback} />
   )
}
export const Rating1 = () => <SelfControlledRating defaultRating={1} onChange={callback}></SelfControlledRating>
export const Rating2 = () => <SelfControlledRating defaultRating={2} onChange={callback}></SelfControlledRating>
export const Rating3 = () => <SelfControlledRating defaultRating={3} onChange={callback}></SelfControlledRating>
export const Rating4 = () => <SelfControlledRating defaultRating={4} onChange={callback}></SelfControlledRating>
export const Rating5 = () => <SelfControlledRating defaultRating={5} onChange={callback}></SelfControlledRating>



