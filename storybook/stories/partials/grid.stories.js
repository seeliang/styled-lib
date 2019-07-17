import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { screen, color } from '../../helpers';

const gutter = 24;

const Block = styled.p`
  margin-top: 20px;
  padding: 16px;
  text-align: center;
  color: ${color.print2};
  background: ${color.primary};
`;

const getBreakpoints = set => props => `${props.theme.breakpoints[set]}px`;

const ColorBlock = ({ text }) => <Block>{text}</Block>;

const Row = styled.div`
  padding: 0 ${gutter / 2}px;
  display: block;
  margin: 0 auto;
  min-width: ${getBreakpoints('min')};
  max-width: ${getBreakpoints('max')};
`;

const Col = styled.div`
  padding: 0 ${gutter / 2}px;
`;

storiesOf('Partials.grid', module).add('Default', () => (
  <Row>
    <Col>
      <ColorBlock text={12} />
    </Col>
  </Row>
));
/* eslint-enable */
