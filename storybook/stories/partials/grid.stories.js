import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

import { screen, color } from '../../helpers';

const gutter = 24;
const totalCol = {
  desktop: 12,
  tablet: 4,
  phone: 2,
  mobile: 2,
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

const getWidth = ({ num, col }) => {
  const cut = num || col;
  if (cut < 1 || cut > num) {
    throw new Error(`your col number should be in between of 0 and ${col}`);
  }
  const percent = 100 / col * cut;
  return `${percent}%`;
};

const Row = styled.div`
  padding: 0 ${gutter / 2}px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  min-width: ${getBreakpoints('min')};
  max-width: ${getBreakpoints('max')};
`;

const generateScreenWidth = set => css`
 ${screen(set)} {
    width: ${props => getWidth({ num: props[set], col: totalCol[set] })};
  }
`;

const Col = styled.div`
  padding: 0 ${gutter / 2}px;
  display: inline-block;
  ${generateScreenWidth('desktop')};
  ${generateScreenWidth('tablet')};
  ${generateScreenWidth('phone')};
`;

storiesOf('Partials.grid', module).add('Default', () => (
  <>
    <p>
      {`totalCol: ${JSON.stringify(totalCol)}`}
    </p>
    <Row>
      <Col desktop={1} phone={1}>
        <ColorBlock text="desktop: 1, phone: 1" />
      </Col>
      <Col desktop={2} phone={1}>
        <ColorBlock text="desktop: 2, phone: 1" />
      </Col>
      <Col desktop={3} phone={2}>
        <ColorBlock text="desktop: 3, phone: 2 " />
      </Col>

      <Col desktop={6}>
        <ColorBlock text="desktop: 6" />
      </Col>
    </Row>
    <Row>
      <Col desktop={7} tablet={1}>
        <ColorBlock text="desktop: 7, tablet: 1" />
      </Col>
      <Col desktop={5} tablet={3}>
        <ColorBlock text="desktop: 5, tablet: 3" />
      </Col>
    </Row>

    <Row>
      <Col desktop={8} tablet={2}>
        <ColorBlock text="desktop: 8, tablet: 2" />
      </Col>
      <Col desktop={4} tablet={2}>
        <ColorBlock text="desktop: 4, tablet: 2" />
      </Col>
    </Row>

    <Row>
      <Col desktop={9}>
        <ColorBlock text="desktop: 9" />
      </Col>
      <Col desktop={3}>
        <ColorBlock text="desktop: 3" />
      </Col>
    </Row>

    <Row>
      <Col desktop={10}>
        <ColorBlock text="desktop: 10" />
      </Col>
      <Col desktop={2}>
        <ColorBlock text="desktop: 2" />
      </Col>
    </Row>
    <Row>
      <Col desktop={11}>
        <ColorBlock text="desktop: 11" />
      </Col>
      <Col desktop={1}>
        <ColorBlock text="desktop: 1" />
      </Col>
    </Row>
    <Row>
      <Col>
        <ColorBlock text="< no config >" />
      </Col>
    </Row>
  </>
));
