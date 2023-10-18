import { StoryObj, Meta } from '@storybook/react';
import {Map} from '../components/Map.jsx'
import React, { useState } from 'react';
//👇 This default export determines where your story goes in the story list
const meta = {
  component: Map,
};

export default meta;

export const entry = {
  args: {
    props: {}
  },
};