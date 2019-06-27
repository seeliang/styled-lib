import { css } from 'styled-components';

export const generateScreen = breakpointsSet => (set) => {
  const mapping = {
    desktop: ['maxDesktop', 'maxTablet'],
    tablet: ['maxTablet', 'maxPhone'],
    mobile: ['maxMobile'],
    phone: ['maxPhone'],
  };
  const max = breakpointsSet[mapping[set][0]];
  if (mapping[set].length > 1) {
    const min = breakpointsSet[mapping[set][1]] + 1;
    return css`@media (max-width: ${max}px) and (min-width: ${min}px)`;
  }

  return css`@media (max-width: ${max}px)`;
};
