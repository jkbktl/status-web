import { createIcon } from '../lib/create-icon'

const SvgPauseIcon = createIcon(props => {
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
        d="M10 3.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8ZM2.4 10a7.6 7.6 0 1 1 15.2 0 7.6 7.6 0 0 1-15.2 0Zm5 3V7h1.2v6H7.4Zm4-6v6h1.2V7h-1.2Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgPauseIcon
