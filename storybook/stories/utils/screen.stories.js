import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import common from '../../../common';

const { breakpoints } = common;

console.log(breakpoints);

const screen = (set) => {
  const mapping = {
    desktop: ['maxDesktop', 'maxTablet'],
  };
  const max = breakpoints[mapping[set][0]];
  const min = breakpoints[mapping[set][1]] + 1;
  return css`@media (max-width: ${max}px) and (min-width: ${min}px)`;
};

const DesktopP = styled.p`
  display: none;
  ${screen('desktop')} {
    display: block;
  }
`;


storiesOf('Utils.Screen', module).add('Default', () => <DesktopP>{'${screen(desktop)}'}</DesktopP>);
