import React from "react";
import styled from "styled-components";

import { Theme } from "../../styles/themes";

interface ThemeProps {
  theme: Theme;
}

export const MutedIcon = ({ theme }: ThemeProps) => {
  return (
    <Icon
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      theme={theme}
    >
      <path
        d="M8.70186 2.11736C8.91545 1.90377 8.89277 1.54794 8.62625 1.40578C8.13934 1.14607 7.58479 0.999998 7.00002 0.999998C5.27863 0.999998 3.8192 2.26576 3.57576 3.96984L3.14144 7.01005C3.11619 7.18684 3.43245 7.38677 3.55873 7.26049L8.70186 2.11736Z"
        fillOpacity="0.2"
      />
      <path
        d="M0.952001 11.9879C0.676901 12.282 0.68279 12.7434 0.969669 13.0303C1.26256 13.3232 1.73744 13.3232 2.03033 13.0303L3.91421 11.1464C4.00798 11.0527 4.13516 11 4.26777 11H4.5C4.77614 11 4.99359 11.2273 5.06171 11.4949C5.28197 12.3601 6.06626 13 7 13C7.93374 13 8.71803 12.3601 8.93829 11.4949C9.00641 11.2273 9.22386 11 9.5 11H11.5858C12.4767 11 12.9229 9.92286 12.2929 9.29289L11.7071 8.7071C11.2481 8.24811 10.9504 7.65264 10.8586 7.01005L10.543 4.80054C10.5207 4.64475 10.5731 4.48756 10.6844 4.37628L13.0303 2.03033C13.3232 1.73744 13.3232 1.26256 13.0303 0.969668C12.7435 0.682807 12.282 0.676903 11.988 0.951949C11.9822 0.958112 11.9763 0.964201 11.9703 0.970214L0.970328 11.9702C0.964295 11.9762 0.958185 11.9822 0.952001 11.9879Z"
        fillOpacity="0.2"
      />
    </Icon>
  );
};

const Icon = styled.svg<ThemeProps>`
  & > path {
    fill: ${({ theme }) => theme.textPrimaryColor};
  }
`;
