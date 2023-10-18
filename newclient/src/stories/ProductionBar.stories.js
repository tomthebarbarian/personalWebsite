import { StoryObj, Meta } from '@storybook/react';
import {ProductionBar} from '../components/Analytics/ProductionBar.jsx'
import React, { useState } from 'react';
//👇 This default export determines where your story goes in the story list
const meta = {
  component: ProductionBar,
};

export default meta;

export const firsteg = {
  args: {
    props: {}
  },
};