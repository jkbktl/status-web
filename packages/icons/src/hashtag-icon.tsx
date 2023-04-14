import { createIcon } from '../lib/create-icon'

const SvgHashtagIcon = createIcon(props => {
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
        d="M6.902 3.454 6.637 6.9H4v1.2h2.544l-.292 3.8H4v1.2h2.16l-.258 3.354 1.196.092.265-3.446h4.797l-.258 3.354 1.196.092.265-3.446H16v-1.2h-2.544l.292-3.8H16V6.9h-2.16l.258-3.354-1.196-.092-.265 3.446H7.84l.258-3.354-1.196-.092Zm5.35 8.446.292-3.8H7.748l-.292 3.8h4.796Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgHashtagIcon
