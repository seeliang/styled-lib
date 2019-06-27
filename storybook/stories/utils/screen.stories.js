import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import common from '../../../common';

const { breakpoints } = common;

const screen = (set) => {
  const mapping = {
    desktop: ['maxDesktop', 'maxTablet'],
    tablet: ['maxTablet', 'maxPhone'],
    mobile: ['maxMobile'],
    phone: ['maxPhone'],
  };
  const max = breakpoints[mapping[set][0]];
  if (mapping[set].length > 1) {
    const min = breakpoints[mapping[set][1]] + 1;
    return css`@media (max-width: ${max}px) and (min-width: ${min}px)`;
  }

  return css`@media (max-width: ${max}px)`;
};

const DesktopP = styled.p`
  display: none;
  ${screen('desktop')} {
    display: block;
  }
`;

const TabletP = styled.p`
  display: none;
  ${screen('tablet')} {
    display: block;
  }
`;

const MobileP = styled.p`
  display: none;
  ${screen('mobile')} {
    display: block;
  }
`;

const PhoneP = styled.p`
  display: none;
  ${screen('phone')} {
    display: block;
  }
`;

/* eslint-disable no-template-curly-in-string */
storiesOf('Utils.Screen', module).add('Default', () => (
  <>
    <DesktopP>{'${screen(desktop)}'}</DesktopP>
    <MobileP>{'${screen(mobile)}'}</MobileP>
    <TabletP>{'${screen(tablet)}'}</TabletP>
    <PhoneP>{'${screen(phone)}'}</PhoneP>
  </>
));
/* eslint-enable */
