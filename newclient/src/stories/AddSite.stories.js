import { StoryObj, Meta } from '@storybook/react';
import {AddSite} from '../components/Add/AddSite.jsx'
import React, { useState } from 'react';
//👇 This default export determines where your story goes in the story list
const meta = {
  component: AddSite,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const addsitefirst = {
  args: {
    props: {}
  },
};