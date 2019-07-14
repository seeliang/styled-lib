import { css } from 'styled-components';

export const maxWidth = value => css`@media (max-width: ${value}px)`;

export const minWidth = value => css`@media (min-width: ${value + 1}px)`;

export const betweenWidth = (x, y) => {
  let max = x;
  let min = y;
  if (min > max) {
    max = y;
    min = x;
  }

  return css`@media (max-width: ${max}px) and (min-width: ${min + 1}px)`;
};

export const generateScreen = breakpointsSet => (set) => {
  const mapping = {
    desktop: ['maxTablet'],
    tablet: ['maxTablet', 'maxPhone'],
    mobile: ['maxMobile'],
    phone: ['maxPhone'],
  };
  const initialPoint = breakpointsSet[mapping[set][0]];
  let secondPoint = 0;
  if (mapping[set].length > 1) {
    secondPoint = breakpointsSet[mapping[set][1]];
  }

  switch (set) {
    case 'desktop':
      return minWidth(initialPoint);
    case 'mobile':
    case 'phone':
      return maxWidth(initialPoint);
    case 'tablet':
      return betweenWidth(initialPoint, secondPoint);
    default:
      throw new Error('screen para is empty or incorrect');
  }
};
