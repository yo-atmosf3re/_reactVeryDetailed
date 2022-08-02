import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UncontrolledOnOff from './UncontrolledOnOff';
import { action } from '@storybook/addon-actions';

export default {
   title: 'UncontrolledOnOff stories',
   component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}></UncontrolledOnOff>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}></UncontrolledOnOff>