import React from 'react';
import styled from 'styled-components'
import { storiesOf } from '@storybook/react';

import common from '../../../common';


const generateColor = common => {
    const color = {}
    Object.keys(common.colors).forEach(i => {
        color[i] = props => props.theme.colors[i]
    });
    return color;
}

const color = generateColor(common);

const Section = styled.div`
    display: inline-block;
    float: left;
    margin: 10px;
    min-width: 120px;
`

const ColorBlock = styled.div`
    width: 60px;
    height: 60px;
    background: ${props => color[props.color]};
`
const AllColors = () => {
    const colorsList = Object.keys(common.colors);
    return colorsList.map(i => 
        <Section key={i}> 
            <h4> {i} </h4> 
            <ColorBlock color={i} />
        </Section>
    );
}

storiesOf('Common.Colors', module).add('Default', () => 
   
    <AllColors />

);

