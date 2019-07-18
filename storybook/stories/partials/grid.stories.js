import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { screen, color } from '../../helpers';

const gutter = 24;
const totalCol = 12;

const Block = styled.p`
  margin-top: 20px;
  padding: 16px;
  text-align: center;
  color: ${color.print2};
  background: ${color.primary};
`;

const getBreakpoints = set => props => `${props.theme.breakpoints[set]}px`;

const ColorBlock = ({ text }) => <Block>{text}</Block>;

const getWidth = (props) => {
  const { initial } = props;
  const cut = initial || 12;
  const percent = 100 / totalCol * cut;
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
  width: ${props => getWidth(props)};
`;

storiesOf('Partials.grid', module).add('Default', () => (
  <>
    <Row>
      <Col>
        <ColorBlock text="12" />
      </Col>
    </Row>


    <Row>
      <Col initial={6}>
        <ColorBlock text="6" />
      </Col>
      <Col initial={6}>
        <ColorBlock text="6" />
      </Col>
    </Row>

    <Row>
      <Col initial={7}>
        <ColorBlock text="7" />
      </Col>
      <Col initial={5}>
        <ColorBlock text="5" />
      </Col>
    </Row>

    <Row>
      <Col initial={8}>
        <ColorBlock text="8" />
      </Col>
      <Col initial={4}>
        <ColorBlock text="4" />
      </Col>
    </Row>

    <Row>
      <Col initial={9}>
        <ColorBlock text="9" />
      </Col>
      <Col initial={3}>
        <ColorBlock text="3" />
      </Col>
    </Row>

    <Row>
      <Col initial={10}>
        <ColorBlock text="10" />
      </Col>
      <Col initial={2}>
        <ColorBlock text="2" />
      </Col>
    </Row>
    <Row>
      <Col initial={11}>
        <ColorBlock text="11" />
      </Col>
      <Col initial={1}>
        <ColorBlock text="1" />
      </Col>
    </Row>
  </>
));
/* eslint-enable */
