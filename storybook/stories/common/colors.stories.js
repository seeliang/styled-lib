import React from 'react';
import styled from 'styled-components'
import { storiesOf } from '@storybook/react';

const ColorBlock = styled.div`
    width: 60px;
    height: 60px;
    background: green;
`

storiesOf('Common.Colors', module).add('Default', () => 
    <ColorBlock />
);

