import { createIcon } from '../lib/create-icon'

const SvgShellIcon = createIcon(props => {
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
        stroke={props.color}
        strokeWidth={1.2}
        d="M17 10c0 3-6 7-7 7s-7-4-7-7a7 7 0 0 1 14 0Zm-7-7v14"
      />
      <path
        stroke={props.color}
        strokeWidth={1.2}
        d="M14 4c0 1.955 0 2.933-.115 3.888a15.997 15.997 0 0 1-1.352 4.776c-.402.874-.915 1.707-1.94 3.372L10 17M6 4c0 1.955 0 2.933.115 3.888a16 16 0 0 0 1.352 4.776c.402.874.915 1.707 1.94 3.372L10 17"
      />
    </svg>
  )
})

export default SvgShellIcon