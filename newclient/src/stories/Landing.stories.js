import { StoryObj, Meta } from '@storybook/react';
import {Landing} from '../components/Landing/Landing.jsx'
import React, { useState } from 'react';
//👇 This default export determines where your story goes in the story list
const meta = {
  component: Landing,
};

export default meta;

export const firsteg = {
  args: {
    props: {}
  },
};