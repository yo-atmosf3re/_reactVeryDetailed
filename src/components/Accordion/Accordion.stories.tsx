import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion, { AccordionPropsType } from './Accordion';
import { action } from '@storybook/addon-actions';

const GetCategotyObj = (categoryName: string) => ({
   table: {
      category: categoryName
   }
})

export default {
   title: 'Accordion stories',
   component: Accordion,
   argTypes: {
      color: {
         control: 'color',
         ...GetCategotyObj('Colors'),
      },
      onChange: {
         ...GetCategotyObj('Events'),
      },
      onClick: {
         ...GetCategotyObj('Events'),
      },
      collapsed: {
         ...GetCategotyObj('Main')
      },
      titleValue: {
         ...GetCategotyObj('Main')
      }
   }
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was cliked')
const callbacksProps = {
   onChange: callback,
   onClick: onClickCallback,
}

export const AccordionTemplate: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const MenuCollapsed = AccordionTemplate.bind({})
MenuCollapsed.args = {
   ...callbacksProps,
   titleValue: 'Menu',
   collapsed: true,
}

export const UserUncollapsedMode = AccordionTemplate.bind({})
UserUncollapsedMode.args = {
   ...callbacksProps,
   titleValue: 'User',
   collapsed: false,
}
