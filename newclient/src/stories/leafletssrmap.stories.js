import SSRMaps from "../components/maps/leafletssrmap";
import  "../components/maps/maps.scss";
import React, { useState } from 'react';
//👇 This default export determines where your story goes in the story list
const meta = {
  component: SSRMaps,
};

export default meta;

export const maineg = {
  args: {
    props: {}
  },
};