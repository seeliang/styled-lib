import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React from 'react';

import common, { concord } from '../../common';

const GlobalStyle = createGlobalStyle`
  ${concord}
`;
const passCommon = storyFn => (
  <ThemeProvider theme={common}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
);

addDecorator(passCommon);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
