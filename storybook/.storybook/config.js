import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import React from 'react';

import common from '../../common';

const passCommon = storyFn => <ThemeProvider theme={common}>
  {storyFn()}
  </ThemeProvider>;

addDecorator(passCommon);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
