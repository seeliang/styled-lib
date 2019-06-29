import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { screen } from '../../helpers';

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
