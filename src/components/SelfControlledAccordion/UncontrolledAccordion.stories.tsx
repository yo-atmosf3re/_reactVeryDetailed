import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledAccordion, { UncontrolledAccordionPropsType } from './UncontrolledAccordion';
import { action } from '@storybook/addon-actions';

export default {
   title: 'UncontrolledAccordion stories',
   component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;


export const UncontrolledAccordionTemplate: ComponentStory<typeof UncontrolledAccordion> = (args: UncontrolledAccordionPropsType) => {
   return (
      <UncontrolledAccordion titleValue={'Menu'}></UncontrolledAccordion>
   )
}


