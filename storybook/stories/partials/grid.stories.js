import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { screen, color } from '../../helpers';

const gutter = 24;
const totalCol = {
  desktop: 12,
  tablet: 4,
  phone: 2,
};

const Block = styled.p`
  margin-top: 20px;
  padding: 16px;
  text-align: center;
  color: ${color.print2};
  background: ${color.primary};
`;

const getBreakpoints = set => props => `${props.theme.breakpoints[set]}px`;

const ColorBlock = ({ text }) => <Block>{text}</Block>;

const getWidth = ({ props, col }) => {
  const { desktop } = props;
  const cut = desktop || col;
  const percent = 100 / col * cut;
  return `${percent}%`;
};

const Row = styled.div`
  padding: 0 ${gutter / 2}px;
  display: block;
  margin: 0 auto;
  min-width: ${getBreakpoints('min')};
  max-width: ${getBreakpoints('max')};
`;

const Col = styled.div`
  padding: 0 ${gutter / 2}px;
  display: inline-block;
  ${screen('desktop')} {
    width: ${props => getWidth({ props, col: totalCol.desktop })};
  }
`;

storiesOf('Partials.grid', module).add('Default', () => (
  <>
    <Row>
      <Col desktop={1}>
        <ColorBlock text="1" />
      </Col>
      <Col desktop={2}>
        <ColorBlock text="2" />
      </Col>
      <Col desktop={3}>
        <ColorBlock text="3" />
      </Col>

      <Col desktop={6}>
        <ColorBlock text="6" />
      </Col>
    </Row>
    <Row>
      <Col desktop={7}>
        <ColorBlock text="7" />
      </Col>
      <Col desktop={5}>
        <ColorBlock text="5" />
      </Col>
    </Row>

    <Row>
      <Col desktop={8}>
        <ColorBlock text="8" />
      </Col>
      <Col desktop={4}>
        <ColorBlock text="4" />
      </Col>
    </Row>

    <Row>
      <Col desktop={9}>
        <ColorBlock text="9" />
      </Col>
      <Col desktop={3}>
        <ColorBlock text="3" />
      </Col>
    </Row>

    <Row>
      <Col desktop={10}>
        <ColorBlock text="10" />
      </Col>
      <Col desktop={2}>
        <ColorBlock text="2" />
      </Col>
    </Row>
    <Row>
      <Col desktop={11}>
        <ColorBlock text="11" />
      </Col>
      <Col desktop={1}>
        <ColorBlock text="1" />
      </Col>
    </Row>
    <Row>
      <Col>
        <ColorBlock text="12" />
      </Col>
    </Row>
  </>
));
/* eslint-enable */
