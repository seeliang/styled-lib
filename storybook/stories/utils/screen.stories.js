import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { screen } from '../../helpers';

const generateStyle = set => css`
  display: none;
  ${screen(set)} {
    display: block;
    font-size: 40px;
    text-align: center;
  }
`;

const DesktopP = styled.p`
  ${generateStyle('desktop')}
`;

const TabletP = styled.p`
  ${generateStyle('tablet')}
`;

const MobileP = styled.p`
  ${generateStyle('mobile')}
`;

const PhoneP = styled.p`
  ${generateStyle('phone')}
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
