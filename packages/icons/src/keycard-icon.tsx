import { createIcon } from '../lib/create-icon'

const SvgKeycardIcon = createIcon(props => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 20 20"
      focusable={false}
      aria-hidden={true}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M4.826 6.187C4.663 7.143 4.6 8.383 4.6 10s.063 2.857.226 3.813c.163.957.418 1.575.763 1.993C6.26 16.623 7.466 16.9 10 16.9c2.535 0 3.74-.277 4.412-1.094.344-.418.6-1.036.763-1.993.163-.956.225-2.196.225-3.813s-.062-2.857-.225-3.813c-.164-.957-.419-1.575-.763-1.993C13.74 3.377 12.535 3.1 10 3.1c-2.534 0-3.739.277-4.411 1.094-.345.418-.6 1.036-.763 1.993ZM4.662 3.43C5.74 2.123 7.535 1.9 10 1.9c2.466 0 4.261.223 5.338 1.531.532.645.839 1.495 1.02 2.554.18 1.06.242 2.382.242 4.015 0 1.633-.062 2.956-.242 4.015-.181 1.059-.489 1.91-1.02 2.554-1.077 1.308-2.872 1.53-5.338 1.53-2.465 0-4.26-.222-5.338-1.53-.53-.645-.838-1.495-1.019-2.554-.18-1.06-.243-2.382-.243-4.015 0-1.633.063-2.956.243-4.015.18-1.06.488-1.91 1.02-2.554ZM9.5 6.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM7.4 7a2.1 2.1 0 1 1 2.7 2.013V11.4h.112l1.12-1.4h1.536l-1.625 2.032 1.645 2.468h-1.442l-1.267-1.9H10.1v1.9H8.9V9.013A2.1 2.1 0 0 1 7.4 7Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgKeycardIcon
