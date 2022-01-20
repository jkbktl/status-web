import React from "react";
import styled from "styled-components";

export const ScanIcon = () => {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.754395 11.9998C0.754395 11.5855 1.09018 11.2498 1.50439 11.2498H22.4953C22.9095 11.2498 23.2453 11.5855 23.2453 11.9998C23.2453 12.414 22.9095 12.7498 22.4953 12.7498H1.50439C1.09018 12.7498 0.754395 12.414 0.754395 11.9998Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.99985 6.75293C1.99985 4.12958 4.12649 2.00293 6.74985 2.00293H8.74985C9.16406 2.00293 9.49985 2.33872 9.49985 2.75293C9.49985 3.16714 9.16406 3.50293 8.74985 3.50293H6.74985C4.95492 3.50293 3.49985 4.958 3.49985 6.75293V8.54012C3.49985 8.95434 3.16406 9.29012 2.74985 9.29012C2.33563 9.29012 1.99985 8.95434 1.99985 8.54012V6.75293Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.99985 17.2498C1.99985 19.8731 4.12649 21.9998 6.74985 21.9998H8.74985C9.16406 21.9998 9.49985 21.664 9.49985 21.2498C9.49985 20.8355 9.16406 20.4998 8.74985 20.4998H6.74985C4.95492 20.4998 3.49985 19.0447 3.49985 17.2498V15.4626C3.49985 15.0483 3.16406 14.7126 2.74985 14.7126C2.33563 14.7126 1.99985 15.0483 1.99985 15.4626V17.2498Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9998 6.75293C21.9998 4.12958 19.8732 2.00293 17.2498 2.00293H15.2498C14.8356 2.00293 14.4998 2.33872 14.4998 2.75293C14.4998 3.16714 14.8356 3.50293 15.2498 3.50293H17.2498C19.0448 3.50293 20.4998 4.958 20.4998 6.75293V8.54012C20.4998 8.95434 20.8356 9.29012 21.2498 9.29012C21.6641 9.29012 21.9998 8.95434 21.9998 8.54012V6.75293Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9998 17.2498C21.9998 19.8731 19.8732 21.9998 17.2498 21.9998H15.2498C14.8356 21.9998 14.4998 21.664 14.4998 21.2498C14.4998 20.8355 14.8356 20.4998 15.2498 20.4998H17.2498C19.0448 20.4998 20.4998 19.0447 20.4998 17.2498V15.4626C20.4998 15.0483 20.8356 14.7126 21.2498 14.7126C21.6641 14.7126 21.9998 15.0483 21.9998 15.4626V17.2498Z"
      />
    </Icon>
  );
};

const Icon = styled.svg`
  fill: ${({ theme }) => theme.tertiary};
`;