import React from "react";
import styled from "styled-components";

import { Theme } from "../../styles/themes";

interface UserIconProps {
  theme: Theme;
  memberView?: boolean;
}

export const UserIcon = ({ theme, memberView }: UserIconProps) => {
  return (
    <Icon
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      theme={theme}
      memberView={memberView}
    >
      <ellipse cx="17" cy="10.3883" rx="6.94445" ry="6.94445" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.14814 30.8957C4.70584 30.0257 4.143 28.2122 4.92859 26.7222C7.3653 22.1006 11.8615 19 17.005 19C22.1956 19 26.7268 22.1576 29.1477 26.8493C29.9221 28.3501 29.3384 30.163 27.8819 31.0177C24.6426 32.9186 20.9805 33.9995 17.1067 33.9995C13.1509 33.9995 9.42482 32.8723 6.14814 30.8957Z"
      />
    </Icon>
  );
};

const Icon = styled.svg<UserIconProps>`
  width: ${({ memberView }) => (memberView ? "20px" : "34px")};
  height: ${({ memberView }) => (memberView ? "20px" : "34px")};

  & > path,
  & > ellipse {
    fill: ${({ theme }) => theme.iconUserColor};
  }
`;