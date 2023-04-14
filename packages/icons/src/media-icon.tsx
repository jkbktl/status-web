import { createIcon } from '../lib/create-icon'

const SvgMediaIcon = createIcon(props => {
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
        d="M7 3.6h6V2.4H7v1.2ZM2.5 6.4h-.6V7c0 2.378.062 4.257.263 5.73.2 1.467.547 2.601 1.167 3.44.636.86 1.51 1.343 2.616 1.609 1.083.26 2.427.321 4.054.321 1.626 0 2.97-.06 4.054-.321 1.106-.266 1.98-.749 2.616-1.61.62-.838.966-1.972 1.167-3.44.2-1.472.263-3.35.263-5.729v-.6H2.5Zm.852 6.167C3.18 11.3 3.112 9.68 3.102 7.6h13.796c-.01 2.08-.077 3.7-.25 4.967-.19 1.392-.5 2.29-.943 2.889-.426.576-1.021.937-1.931 1.156-.932.224-2.15.288-3.774.288s-2.842-.064-3.774-.288c-.91-.219-1.505-.58-1.931-1.156-.443-.6-.753-1.497-.943-2.889ZM15 5.6H5V4.4h10v1.2ZM8.5 9.5c-1 0-1 5.5 0 5.5s4-1.5 4-2.5-3-3-4-3Z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default SvgMediaIcon
