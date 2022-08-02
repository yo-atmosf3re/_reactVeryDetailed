import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OnOff, { PropsType } from './OnOff';
import { action } from '@storybook/addon-actions';


export default {
   title: 'OnOff stories',
   component: OnOff,
   argTypes: {
      on: {
         type: 'boolean',
         description: 'Switch status',
      },
      onChange: {
         description: 'Switcher',
         action: 'clicked',
      }
   },
   actions: { argTypeRegex: '' }
} as ComponentMeta<typeof OnOff>;


export const OnOffTemplate: ComponentStory<typeof OnOff> = (args: PropsType) => {
   let [value, setValue] = useState<boolean>(true);
   return (
      <OnOff on={value} onChange={setValue}></OnOff>
   )
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback}></OnOff>
export const OffMode = () => <OnOff on={false} onChange={callback}></OnOff>